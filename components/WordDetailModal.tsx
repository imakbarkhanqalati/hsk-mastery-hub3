import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Word } from '../types';
import { recordDailyPractice } from '../utils/streak';
import StrokeOrderVisualizer from './StrokeOrderVisualizer';

interface WordDetailModalProps {
  word: Word | null;
  onClose: () => void;
}

interface PronunciationResult {
  score: number;
  heardText: string;
  heardPinyin: string;
  isMatch: boolean;
  feedback: string;
}

const WordDetailModal: React.FC<WordDetailModalProps> = ({ word, onClose }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [isPlayingReference, setIsPlayingReference] = useState(false);
  const [isPlayingUserAudio, setIsPlayingUserAudio] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);
  const [pronunciationResult, setPronunciationResult] = useState<PronunciationResult | null>(null);
  const [micError, setMicError] = useState<string | null>(null);
  const [showStrokeOrder, setShowStrokeOrder] = useState(true);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const recognitionRef = useRef<any>(null);
  const recognizedTranscriptRef = useRef<string>('');
  const userAudioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<number | null>(null);

  const stopAllMedia = useCallback(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
      recognitionRef.current = null;
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try {
        mediaRecorderRef.current.stop();
      } catch {
        // ignore
      }
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (userAudioRef.current) {
      userAudioRef.current.pause();
      userAudioRef.current = null;
    }
    setIsRecording(false);
    setIsPlayingReference(false);
    setIsPlayingUserAudio(false);
  }, []);

  useEffect(() => {
    return () => {
      stopAllMedia();
    };
  }, [stopAllMedia, word]);

  useEffect(() => {
    return () => {
      if (recordedAudioUrl) {
        URL.revokeObjectURL(recordedAudioUrl);
      }
    };
  }, [recordedAudioUrl]);

  if (!word) return null;

  const playReferenceAudio = (rate = 0.85, customText?: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setMicError('Speech synthesis is not supported in this browser.');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(customText || word.char);
    utterance.lang = 'zh-CN';
    utterance.rate = rate;

    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(
      v => v.lang === 'zh-CN' || v.lang === 'zh_CN' || v.lang.startsWith('zh')
    );
    if (zhVoice) {
      utterance.voice = zhVoice;
    }

    if (!customText) {
      utterance.onstart = () => setIsPlayingReference(true);
      utterance.onend = () => setIsPlayingReference(false);
      utterance.onerror = () => setIsPlayingReference(false);
    }

    window.speechSynthesis.speak(utterance);
  };

  const playUserRecording = () => {
    if (!recordedAudioUrl) return;

    if (userAudioRef.current) {
      userAudioRef.current.pause();
    }

    const audio = new Audio(recordedAudioUrl);
    userAudioRef.current = audio;
    audio.onplay = () => setIsPlayingUserAudio(true);
    audio.onended = () => setIsPlayingUserAudio(false);
    audio.onerror = () => setIsPlayingUserAudio(false);
    audio.play().catch(() => setIsPlayingUserAudio(false));
  };

  const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        const base64 = result.includes(',') ? result.split(',')[1] : result;
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const evaluateRecording = async (audioBlob: Blob, transcript: string) => {
    setIsEvaluating(true);
    try {
      const audioBase64 = await blobToBase64(audioBlob);
      const response = await fetch('/api/evaluate-pronunciation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          audioBase64,
          mimeType: audioBlob.type || 'audio/webm',
          targetChar: word.char,
          targetPinyin: word.pinyin,
          targetMeaning: word.meaning,
          recognizedText: transcript,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Could not evaluate pronunciation.');
      }

      setPronunciationResult(data);
      recordDailyPractice();
    } catch (err: any) {
      console.error('Pronunciation evaluation error:', err);
      setMicError(err?.message || 'Unable to evaluate pronunciation right now.');
    } finally {
      setIsEvaluating(false);
    }
  };

  const startRecording = async () => {
    setMicError(null);
    setPronunciationResult(null);
    recognizedTranscriptRef.current = '';

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setMicError('Microphone access is not supported in this browser.');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      audioChunksRef.current = [];

      const SpeechRecognitionAPI =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognitionAPI) {
        try {
          const recognition = new SpeechRecognitionAPI();
          recognition.lang = 'zh-CN';
          recognition.interimResults = true;
          recognition.maxAlternatives = 1;
          recognition.onresult = (event: any) => {
            let transcript = '';
            for (let i = 0; i < event.results.length; i++) {
              transcript += event.results[i][0].transcript;
            }
            recognizedTranscriptRef.current = transcript;
          };
          recognition.start();
          recognitionRef.current = recognition;
        } catch {
          // SpeechRecognition is optional
        }
      }

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = event => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const mimeType = mediaRecorder.mimeType || 'audio/webm';
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });

        if (recordedAudioUrl) {
          URL.revokeObjectURL(recordedAudioUrl);
        }
        const url = URL.createObjectURL(audioBlob);
        setRecordedAudioUrl(url);

        if (streamRef.current) {
          streamRef.current.getTracks().forEach(t => t.stop());
          streamRef.current = null;
        }

        evaluateRecording(audioBlob, recognizedTranscriptRef.current);
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingSeconds(0);

      timerRef.current = window.setInterval(() => {
        setRecordingSeconds(prev => {
          if (prev >= 5) {
            stopRecording();
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    } catch (err: any) {
      console.error('Microphone error:', err);
      setMicError('Could not access microphone. Please allow microphone permissions and try again.');
    }
  };

  const stopRecording = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
      recognitionRef.current = null;
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  };

  const handleMicClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const getScoreBadgeClass = (score: number) => {
    if (score >= 85) return 'pronunciation-score--excellent';
    if (score >= 65) return 'pronunciation-score--good';
    return 'pronunciation-score--retry';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 85) return 'Excellent';
    if (score >= 65) return 'Good Effort';
    return 'Keep Practicing';
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content word-detail-modal" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-button" aria-label="Close modal">&times;</button>
        <div className="word-detail-modal__header">
          <h2 className="word-detail-modal__char">{word.char}</h2>
          <div className="word-detail-modal__pinyin-row">
            <p className="word-detail-modal__pinyin">{word.pinyin}</p>
            <button
              type="button"
              onClick={() => playReferenceAudio(0.85)}
              className={`audio-listen-btn ${isPlayingReference ? 'audio-listen-btn--playing' : ''}`}
              title="Listen to correct pronunciation"
              aria-label="Listen to correct pronunciation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
              </svg>
              <span>Listen</span>
            </button>
            <button
              type="button"
              onClick={() => playReferenceAudio(0.55)}
              className="audio-listen-btn audio-listen-btn--slow"
              title="Listen slowly (0.55x)"
              aria-label="Listen slowly"
            >
              Slow (0.55x)
            </button>
            <button
              type="button"
              onClick={() => setShowStrokeOrder(prev => !prev)}
              className={`audio-listen-btn ${showStrokeOrder ? 'audio-listen-btn--playing' : 'audio-listen-btn--slow'}`}
              title="Toggle animated character stroke order"
            >
              ✎ {showStrokeOrder ? 'Hide Stroke Order' : 'Stroke Order'}
            </button>
          </div>
        </div>

        {/* Animated Character Stroke Order Visualizer & Practice Pad */}
        {showStrokeOrder && (
          <div className="animate-fade-in">
            <StrokeOrderVisualizer wordChar={word.char} />
          </div>
        )}

        {/* Pronunciation Practice Section */}
        <div className="pronunciation-practice-card">
          <div className="pronunciation-practice__top">
            <div className="pronunciation-practice__info">
              <span className="pronunciation-practice__title">Pronunciation Practice</span>
              <span className="pronunciation-practice__hint">
                {isRecording
                  ? `Recording... Speak "${word.char}" (${word.pinyin}) clearly (${recordingSeconds}s)`
                  : isEvaluating
                  ? 'Analyzing your pronunciation and tones...'
                  : 'Click the microphone to record your voice and compare'}
              </span>
            </div>

            <button
              type="button"
              onClick={handleMicClick}
              disabled={isEvaluating}
              className={`mic-record-button ${isRecording ? 'mic-record-button--recording' : ''}`}
              aria-label={isRecording ? 'Stop recording' : 'Start recording pronunciation'}
              title={isRecording ? 'Click to stop recording' : 'Click to record your pronunciation'}
            >
              {isRecording ? (
                <>
                  <span className="mic-pulse-ring"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="6" width="12" height="12" rx="2" />
                  </svg>
                  <span>Stop</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                  </svg>
                  <span>{recordedAudioUrl ? 'Record Again' : 'Record'}</span>
                </>
              )}
            </button>
          </div>

          {micError && (
            <div className="pronunciation-error">
              <span>{micError}</span>
            </div>
          )}

          {/* Side-by-Side Audio Comparison Controls */}
          {recordedAudioUrl && !isRecording && (
            <div className="pronunciation-compare-bar">
              <button
                type="button"
                onClick={() => playReferenceAudio(0.85)}
                className={`compare-audio-btn ${isPlayingReference ? 'compare-audio-btn--active' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
                <span>Reference ({word.pinyin})</span>
              </button>

              <button
                type="button"
                onClick={playUserRecording}
                className={`compare-audio-btn compare-audio-btn--user ${isPlayingUserAudio ? 'compare-audio-btn--active' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <span>My Recording</span>
              </button>
            </div>
          )}

          {/* Pronunciation Evaluation Feedback */}
          {pronunciationResult && !isRecording && !isEvaluating && (
            <div className="pronunciation-result animate-fade-in">
              <div className="pronunciation-result__header">
                <div className={`pronunciation-score ${getScoreBadgeClass(pronunciationResult.score)}`}>
                  <span className="pronunciation-score__value">{pronunciationResult.score}%</span>
                  <span className="pronunciation-score__label">{getScoreLabel(pronunciationResult.score)}</span>
                </div>

                <div className="pronunciation-comparison-details">
                  <div className="pronunciation-comparison-pair">
                    <span className="pronunciation-comparison-tag">Target:</span>
                    <strong>{word.char} ({word.pinyin})</strong>
                  </div>
                  <div className="pronunciation-comparison-pair">
                    <span className="pronunciation-comparison-tag">Heard:</span>
                    <strong>
                      {pronunciationResult.heardText || '—'}
                      {pronunciationResult.heardPinyin ? ` (${pronunciationResult.heardPinyin})` : ''}
                    </strong>
                  </div>
                </div>
              </div>
              <p className="pronunciation-result__feedback">{pronunciationResult.feedback}</p>
            </div>
          )}
        </div>

        <div className="word-detail-modal__body">
          <div className="word-detail-item">
            <span className="word-detail-item__label">Meaning</span>
            <span className="word-detail-item__value word-detail-item__value--meaning">{word.meaning}</span>
          </div>
          <div className="word-detail-item">
            <span className="word-detail-item__label">Grammar</span>
            <p className="word-detail-item__value">{word.grammar}</p>
          </div>
          {word.examples && word.examples.length > 0 && (
            <div className="word-detail-item">
              <span className="word-detail-item__label">Contextual Examples</span>
              <ul className="word-detail-item__examples">
                {word.examples.map((ex, idx) => (
                  <li key={idx} className="word-detail-item__example">
                    <div className="word-detail-item__example-row">
                      <div>
                        <span className="word-detail-item__example-sentence">{ex.sentence}</span>
                        <span className="word-detail-item__example-translation">{ex.translation}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => playReferenceAudio(0.85, ex.sentence)}
                        className="vocab-card__icon-btn"
                        title="Listen to sentence"
                        aria-label="Listen to sentence"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WordDetailModal;
