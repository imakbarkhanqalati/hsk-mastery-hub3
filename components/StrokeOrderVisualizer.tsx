import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

export interface HanziCharData {
  strokes: string[];
  medians: [number, number][][];
}

interface StrokeOrderVisualizerProps {
  wordChar: string;
}

const strokeDataCache = new Map<string, HanziCharData>();

function medianPointsToSvgPath(points: [number, number][]): string {
  if (!points || points.length === 0) return '';
  return points
    .map((pt, idx) => `${idx === 0 ? 'M' : 'L'} ${pt[0]} ${pt[1]}`)
    .join(' ');
}

function getPointAlongMedian(
  points: [number, number][],
  progress: number
): [number, number] | null {
  if (!points || points.length === 0) return null;
  if (points.length === 1 || progress <= 0) return points[0];
  if (progress >= 1) return points[points.length - 1];

  const lengths: number[] = [];
  let totalLength = 0;
  for (let i = 1; i < points.length; i++) {
    const dx = points[i][0] - points[i - 1][0];
    const dy = points[i][1] - points[i - 1][1];
    const segLen = Math.hypot(dx, dy);
    lengths.push(segLen);
    totalLength += segLen;
  }

  if (totalLength === 0) return points[0];

  const targetDist = progress * totalLength;
  let accumulated = 0;

  for (let i = 0; i < lengths.length; i++) {
    const segLen = lengths[i];
    if (accumulated + segLen >= targetDist) {
      const ratio = segLen > 0 ? (targetDist - accumulated) / segLen : 0;
      const x = points[i][0] + (points[i + 1][0] - points[i][0]) * ratio;
      const y = points[i][1] + (points[i + 1][1] - points[i][1]) * ratio;
      return [x, y];
    }
    accumulated += segLen;
  }

  return points[points.length - 1];
}

const StrokeOrderVisualizer: React.FC<StrokeOrderVisualizerProps> = ({ wordChar }) => {
  const characters = useMemo(() => {
    const cleaned = wordChar.replace(/\((?:动词?|名词?|形容词?|副词?|量词?|介词?|助动词?|助词?|叹词?|连词?|代词?)\)/g, '');
    const cjk = Array.from(cleaned).filter(ch => /[\u4e00-\u9fff]/.test(ch));
    return cjk.length > 0 ? cjk : Array.from(cleaned).filter(ch => ch.trim().length > 0);
  }, [wordChar]);

  const [selectedCharIndex, setSelectedCharIndex] = useState(0);
  const [charData, setCharData] = useState<HanziCharData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Animation states
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStrokeIndex, setCurrentStrokeIndex] = useState(0);
  const [strokeProgress, setStrokeProgress] = useState(0); // 0..1 for currentStrokeIndex
  const [speed, setSpeed] = useState<number>(1);
  const [isLooping, setIsLooping] = useState(false);
  const [autoAdvanceChars, setAutoAdvanceChars] = useState(true);
  const [showGhostOutline, setShowGhostOutline] = useState(true);
  const [showStrokeNumbers, setShowStrokeNumbers] = useState(true);
  const [isTracingMode, setIsTracingMode] = useState(false);

  // Freehand tracing canvas refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<number | null>(null);

  const activeChar = characters[selectedCharIndex] || characters[0] || '';
  const clipPrefix = useMemo(
    () => `hanzi-clip-${ selectedCharIndex }-${ activeChar.codePointAt(0) || 0 }`,
    [selectedCharIndex, activeChar]
  );

  // Reset character selection when word changes
  useEffect(() => {
    setSelectedCharIndex(0);
  }, [wordChar]);

  // Fetch stroke data for the active character
  useEffect(() => {
    if (!activeChar) return;

    let cancelled = false;
    const cached = strokeDataCache.get(activeChar);
    if (cached) {
      setCharData(cached);
      setLoadError(null);
      setIsLoading(false);
      setCurrentStrokeIndex(0);
      setStrokeProgress(0);
      setIsPlaying(true);
      return;
    }

    setIsLoading(true);
    setLoadError(null);
    setCharData(null);

    const encoded = encodeURIComponent(activeChar);
    const urls = [
      `https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0.1/${encoded}.json`,
      `https://unpkg.com/hanzi-writer-data@2.0.1/${encoded}.json`,
    ];

    const fetchWithFallback = async () => {
      for (const url of urls) {
        try {
          const res = await fetch(url);
          if (res.ok) {
            const data: HanziCharData = await res.json();
            if (!cancelled && data && Array.isArray(data.strokes)) {
              strokeDataCache.set(activeChar, data);
              setCharData(data);
              setCurrentStrokeIndex(0);
              setStrokeProgress(0);
              setIsPlaying(true);
              setIsLoading(false);
              return;
            }
          }
        } catch {
          // try next CDN
        }
      }
      if (!cancelled) {
        setLoadError('Stroke vector data unavailable for this character.');
        setIsLoading(false);
      }
    };

    fetchWithFallback();

    return () => {
      cancelled = true;
    };
  }, [activeChar]);

  const clearTracingCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    clearTracingCanvas();
  }, [activeChar, isTracingMode, clearTracingCanvas]);

  // Animation loop
  useEffect(() => {
    if (!isPlaying || !charData || charData.strokes.length === 0) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
      return;
    }

    const totalStrokes = charData.strokes.length;

    const step = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }
      const deltaMs = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;

      // Base duration per stroke ~520ms adjusted by speed
      const strokeDurationMs = 520 / speed;
      const increment = deltaMs / strokeDurationMs;

      setStrokeProgress(prev => {
        const next = prev + increment;
        if (next < 1) {
          return next;
        }

        // Current stroke finished
        if (currentStrokeIndex < totalStrokes - 1) {
          // Brief pause between strokes
          setIsPlaying(false);
          pauseTimeoutRef.current = window.setTimeout(() => {
            setCurrentStrokeIndex(idx => Math.min(idx + 1, totalStrokes - 1));
            setStrokeProgress(0);
            lastTimestampRef.current = null;
            setIsPlaying(true);
          }, Math.max(90, 160 / speed));
          return 1;
        } else {
          // Last stroke of this character finished
          setIsPlaying(false);
          if (autoAdvanceChars && characters.length > 1 && selectedCharIndex < characters.length - 1) {
            pauseTimeoutRef.current = window.setTimeout(() => {
              setSelectedCharIndex(idx => idx + 1);
            }, 650);
          } else if (isLooping) {
            pauseTimeoutRef.current = window.setTimeout(() => {
              if (autoAdvanceChars && characters.length > 1) {
                setSelectedCharIndex(0);
              }
              setCurrentStrokeIndex(0);
              setStrokeProgress(0);
              lastTimestampRef.current = null;
              setIsPlaying(true);
            }, 800);
          }
          return 1;
        }
      });

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [
    isPlaying,
    charData,
    currentStrokeIndex,
    speed,
    isLooping,
    autoAdvanceChars,
    characters.length,
    selectedCharIndex,
  ]);

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        window.clearTimeout(pauseTimeoutRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const stopPendingTimers = () => {
    if (pauseTimeoutRef.current) {
      window.clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = null;
    }
    lastTimestampRef.current = null;
  };

  const handlePlayPause = () => {
    if (!charData) return;
    stopPendingTimers();

    const totalStrokes = charData.strokes.length;
    const isFinished = currentStrokeIndex >= totalStrokes - 1 && strokeProgress >= 1;

    if (isPlaying) {
      setIsPlaying(false);
    } else if (isFinished) {
      setCurrentStrokeIndex(0);
      setStrokeProgress(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(true);
    }
  };

  const handleReplay = () => {
    if (!charData) return;
    stopPendingTimers();
    setCurrentStrokeIndex(0);
    setStrokeProgress(0);
    setIsPlaying(true);
  };

  const handleSelectStroke = (index: number) => {
    if (!charData) return;
    stopPendingTimers();
    setIsPlaying(false);
    setCurrentStrokeIndex(index);
    setStrokeProgress(0);
    // Animate just this selected stroke to 100%
    window.setTimeout(() => {
      setStrokeProgress(1);
    }, 30);
  };

  const handlePrevStroke = () => {
    if (!charData) return;
    stopPendingTimers();
    setIsPlaying(false);
    const prevIdx = Math.max(0, currentStrokeIndex - 1);
    setCurrentStrokeIndex(prevIdx);
    setStrokeProgress(1);
  };

  const handleNextStroke = () => {
    if (!charData) return;
    stopPendingTimers();
    setIsPlaying(false);
    const nextIdx = Math.min(charData.strokes.length - 1, currentStrokeIndex + 1);
    setCurrentStrokeIndex(nextIdx);
    setStrokeProgress(1);
  };

  // Freehand canvas handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isTracingMode) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    isDrawingRef.current = true;
    ctx.beginPath();
    ctx.moveTo((clientX - rect.left) * scaleX, (clientY - rect.top) * scaleY);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || !isTracingMode) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#10b981';
    ctx.lineTo((clientX - rect.left) * scaleX, (clientY - rect.top) * scaleY);
    ctx.stroke();
  };

  const endDrawing = () => {
    isDrawingRef.current = false;
  };

  const totalStrokes = charData?.strokes.length || 0;
  const isFinished = totalStrokes > 0 && currentStrokeIndex >= totalStrokes - 1 && strokeProgress >= 1;
  const activeMedian = charData?.medians[currentStrokeIndex];
  const brushPoint =
    activeMedian && strokeProgress > 0 && strokeProgress < 0.99
      ? getPointAlongMedian(activeMedian, strokeProgress)
      : null;

  return (
    <div className="stroke-visualizer-card">
      {/* Top Bar: Title + Character Tabs (for multi-char words) */}
      <div className="stroke-visualizer__header">
        <div className="stroke-visualizer__title-group">
          <span className="stroke-visualizer__title">Stroke Order Animation (笔顺动画)</span>
          {totalStrokes > 0 && (
            <span className="stroke-visualizer__counter tabular-nums">
              Stroke {Math.min(currentStrokeIndex + 1, totalStrokes)} / {totalStrokes}
            </span>
          )}
        </div>

        <div className="stroke-visualizer__toggles">
          <button
            type="button"
            onClick={() => setShowStrokeNumbers(prev => !prev)}
            className={`stroke-chip-btn ${showStrokeNumbers ? 'stroke-chip-btn--active' : ''}`}
            title="Show stroke start order numbers"
          >
            # Numbers
          </button>
          <button
            type="button"
            onClick={() => setShowGhostOutline(prev => !prev)}
            className={`stroke-chip-btn ${showGhostOutline ? 'stroke-chip-btn--active' : ''}`}
            title="Toggle background character outline"
          >
            Outline
          </button>
          <button
            type="button"
            onClick={() => setIsTracingMode(prev => !prev)}
            className={`stroke-chip-btn ${isTracingMode ? 'stroke-chip-btn--trace' : ''}`}
            title="Practice tracing over the animated strokes"
          >
            ✎ {isTracingMode ? 'Tracing On' : 'Trace Pad'}
          </button>
          {isTracingMode && (
            <button
              type="button"
              onClick={clearTracingCanvas}
              className="stroke-chip-btn"
              title="Clear traced ink"
            >
              Clear Ink
            </button>
          )}
        </div>
      </div>

      {/* Multi-character selector bar */}
      {characters.length > 1 && (
        <div className="stroke-visualizer__char-tabs">
          <div className="stroke-visualizer__char-list" role="tablist" aria-label="Select character to animate">
            {characters.map((ch, idx) => (
              <button
                key={`${ch}-${idx}`}
                type="button"
                role="tab"
                aria-selected={selectedCharIndex === idx}
                onClick={() => {
                  stopPendingTimers();
                  setSelectedCharIndex(idx);
                }}
                className={`stroke-char-tab font-noto-sc ${
                  selectedCharIndex === idx ? 'stroke-char-tab--active' : ''
                }`}
              >
                <span className="stroke-char-tab__hanzi">{ch}</span>
                <span className="stroke-char-tab__idx tabular-nums">#{idx + 1}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setAutoAdvanceChars(prev => !prev)}
            className={`stroke-chip-btn ${autoAdvanceChars ? 'stroke-chip-btn--active' : ''}`}
            title="Automatically animate all characters in sequence"
          >
            Auto-Sequence ({characters.length} chars)
          </button>
        </div>
      )}

      {/* Main Stage: Animated SVG Mi Zi Ge + Controls */}
      <div className="stroke-visualizer__main">
        <div className="stroke-visualizer__stage-wrap">
          <div className="mizige-stage">
            {/* Traditional Mi Zi Ge Grid SVG */}
            <svg
              className="mizige-svg"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              aria-label={`Stroke order animation for ${activeChar}`}
            >
              {/* Grid Guide Lines */}
              <g className="mizige-grid-lines" strokeDasharray="16 14">
                <line x1="0" y1="512" x2="1024" y2="512" />
                <line x1="512" y1="0" x2="512" y2="1024" />
                <line x1="0" y1="0" x2="1024" y2="1024" />
                <line x1="1024" y1="0" x2="0" y2="1024" />
              </g>

              {charData && (
                <>
                  <defs>
                    {charData.strokes.map((strokePath, idx) => (
                      <clipPath key={idx} id={`${clipPrefix}-stroke-${idx}`}>
                        <path d={strokePath} />
                      </clipPath>
                    ))}
                  </defs>

                  <g transform="scale(1, -1) translate(0, -900)">
                    {/* 1. Ghost Outline of all strokes */}
                    {showGhostOutline &&
                      charData.strokes.map((strokePath, idx) => (
                        <path
                          key={`ghost-${idx}`}
                          d={strokePath}
                          className="hanzi-stroke-ghost"
                        />
                      ))}

                    {/* 2. Completed Strokes (strictly before currentStrokeIndex, or currentStrokeIndex when finished) */}
                    {charData.strokes.map((strokePath, idx) => {
                      const isCompleted =
                        idx < currentStrokeIndex ||
                        (idx === currentStrokeIndex && strokeProgress >= 0.98);
                      if (!isCompleted) return null;
                      const isCurrentCompleted = idx === currentStrokeIndex;
                      return (
                        <path
                          key={`done-${idx}`}
                          d={strokePath}
                          className={
                            isCurrentCompleted
                              ? 'hanzi-stroke-active-complete'
                              : 'hanzi-stroke-completed'
                          }
                        />
                      );
                    })}

                    {/* 3. Currently Animating Stroke via Clipped Median Brush */}
                    {strokeProgress > 0 &&
                      strokeProgress < 0.98 &&
                      charData.strokes[currentStrokeIndex] &&
                      charData.medians[currentStrokeIndex] && (
                        <g clipPath={`url(#${clipPrefix}-stroke-${currentStrokeIndex})`}>
                          <path
                            d={medianPointsToSvgPath(charData.medians[currentStrokeIndex])}
                            className="hanzi-stroke-animating"
                            pathLength={1000}
                            strokeDasharray={1000}
                            strokeDashoffset={1000 * (1 - strokeProgress)}
                          />
                        </g>
                      )}

                    {/* 4. Glowing Brush Tip Indicator during active stroke writing */}
                    {brushPoint && (
                      <g className="hanzi-brush-tip">
                        <circle cx={brushPoint[0]} cy={brushPoint[1]} r="34" className="hanzi-brush-tip__halo" />
                        <circle cx={brushPoint[0]} cy={brushPoint[1]} r="16" className="hanzi-brush-tip__core" />
                      </g>
                    )}
                  </g>

                  {/* 5. Stroke Order Start Numbers (in standard un-flipped SVG coordinates: x, 900 - y) */}
                  {showStrokeNumbers &&
                    charData.medians.map((median, idx) => {
                      if (!median || median.length === 0) return null;
                      const isVisible = idx <= currentStrokeIndex;
                      if (!isVisible) return null;
                      const startX = median[0][0];
                      const startY = 900 - median[0][1];
                      const isCurrent = idx === currentStrokeIndex;
                      return (
                        <g key={`num-${idx}`} transform={`translate(${startX}, ${startY})`}>
                          <circle
                            r="26"
                            className={
                              isCurrent ? 'hanzi-stroke-num-bg--active' : 'hanzi-stroke-num-bg'
                            }
                          />
                          <text
                            textAnchor="middle"
                            dominantBaseline="central"
                            className="hanzi-stroke-num-text"
                          >
                            {idx + 1}
                          </text>
                        </g>
                      );
                    })}
                </>
              )}
            </svg>

            {/* Fallback or Loading Overlay */}
            {isLoading && (
              <div className="mizige-overlay-status">
                <span>Loading stroke vectors...</span>
              </div>
            )}
            {loadError && !charData && (
              <div className="mizige-overlay-status">
                <span className="mizige-fallback-char font-noto-sc">{activeChar}</span>
                <span className="mizige-fallback-note">{loadError}</span>
              </div>
            )}

            {/* Optional Freehand Tracing Canvas Overlay */}
            {isTracingMode && (
              <canvas
                ref={canvasRef}
                width={240}
                height={240}
                className="mizige-trace-canvas"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
                onMouseLeave={endDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={endDrawing}
              />
            )}
          </div>
        </div>

        {/* Playback & Scrubber Controls Panel */}
        <div className="stroke-visualizer__controls-panel">
          <div className="stroke-playback-row">
            <button
              type="button"
              onClick={handlePrevStroke}
              disabled={!charData || currentStrokeIndex === 0}
              className="stroke-ctrl-btn"
              title="Previous stroke"
              aria-label="Previous stroke"
            >
              ◀ Prev
            </button>

            <button
              type="button"
              onClick={handlePlayPause}
              disabled={!charData}
              className="stroke-ctrl-btn stroke-ctrl-btn--primary"
              aria-label={isPlaying ? 'Pause animation' : isFinished ? 'Replay animation' : 'Play animation'}
            >
              {isPlaying ? '❚❚ Pause' : isFinished ? '↻ Replay' : '▶ Animate'}
            </button>

            <button
              type="button"
              onClick={handleNextStroke}
              disabled={!charData || currentStrokeIndex >= totalStrokes - 1}
              className="stroke-ctrl-btn"
              title="Next stroke"
              aria-label="Next stroke"
            >
              Next ▶
            </button>
          </div>

          <div className="stroke-secondary-row">
            <div className="stroke-speed-group" role="group" aria-label="Animation speed">
              {[0.5, 1, 1.75].map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSpeed(s)}
                  className={`stroke-speed-btn tabular-nums ${speed === s ? 'stroke-speed-btn--active' : ''}`}
                >
                  {s}x
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsLooping(prev => !prev)}
              className={`stroke-chip-btn ${isLooping ? 'stroke-chip-btn--active' : ''}`}
              title="Continuously loop stroke animation"
            >
              ∞ Loop
            </button>

            <button
              type="button"
              onClick={handleReplay}
              disabled={!charData}
              className="stroke-chip-btn"
              title="Restart from Stroke 1"
            >
              Reset
            </button>
          </div>

          {/* Step-by-Step Stroke Order Sequence Strip */}
          {charData && charData.strokes.length > 0 && (
            <div className="stroke-sequence-section">
              <span className="stroke-sequence-label">
                Step-by-Step Stroke Breakdown (Click any step to inspect):
              </span>
              <div className="stroke-sequence-strip">
                {charData.strokes.map((_, stepIdx) => {
                  const isActiveStep = stepIdx === currentStrokeIndex;
                  return (
                    <button
                      key={stepIdx}
                      type="button"
                      onClick={() => handleSelectStroke(stepIdx)}
                      className={`stroke-step-box ${isActiveStep ? 'stroke-step-box--active' : ''}`}
                      title={`Jump to stroke ${stepIdx + 1}`}
                    >
                      <span className="stroke-step-box__num tabular-nums">{stepIdx + 1}</span>
                      <svg viewBox="0 0 1024 1024" className="stroke-step-box__svg">
                        <g transform="scale(1, -1) translate(0, -900)">
                          {charData.strokes.map((p, sIdx) => {
                            if (sIdx > stepIdx) {
                              return (
                                <path
                                  key={sIdx}
                                  d={p}
                                  className="stroke-step-box__ghost"
                                />
                              );
                            }
                            return (
                              <path
                                key={sIdx}
                                d={p}
                                className={
                                  sIdx === stepIdx
                                    ? 'stroke-step-box__highlight'
                                    : 'stroke-step-box__done'
                                }
                              />
                            );
                          })}
                        </g>
                      </svg>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StrokeOrderVisualizer;
