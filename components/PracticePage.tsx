import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { vocabData } from '../data/vocab';
import { Word } from '../types';
import confetti from 'canvas-confetti';
import { recordDailyPractice } from '../utils/streak';
import { recordWordStudied, speakChineseText } from '../utils/progress';

// Enhanced shuffle algorithm with better randomization
const shuffleArray = (array: Word[]): Word[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Study modes
type StudyMode = 'flashcard' | 'multiple-choice' | 'typing' | 'listening';

// Session states
type SessionState = 'setup' | 'practicing' | 'round_over' | 'complete' | 'review';

// Practice session interface
interface PracticeSession {
  level: number;
  mode: StudyMode;
  words: Word[];
  currentIndex: number;
  knownWords: Set<string>;
  needsReview: Word[];
  startTime: Date;
  totalWords: number;
}

const PracticePage: React.FC = () => {
  // Core state
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [studyMode, setStudyMode] = useState<StudyMode>('flashcard');
  const [sessionState, setSessionState] = useState<SessionState>('setup');
  const [currentSession, setCurrentSession] = useState<PracticeSession | null>(null);
  
  // Flashcard state
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [cardAnimation, setCardAnimation] = useState<string>('');
  const [showHint, setShowHint] = useState<boolean>(false);
  const [activeShortcut, setActiveShortcut] = useState<string | null>(null);
  
  // Multiple choice state
  const [options, setOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  
  // Typing state
  const [userInput, setUserInput] = useState<string>('');
  const [inputStatus, setInputStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  
  // Statistics
  const [sessionStats, setSessionStats] = useState({
    correct: 0,
    incorrect: 0,
    totalAnswered: 0,
    streak: 0,
    maxStreak: 0
  });

  const hskLevels = useMemo(() => Object.keys(vocabData).map(Number), []);
  const currentWord = currentSession?.words[currentSession.currentIndex];

  const pulseShortcutHighlight = useCallback((keyId: string) => {
    setActiveShortcut(keyId);
    window.setTimeout(() => {
      setActiveShortcut(prev => (prev === keyId ? null : prev));
    }, 220);
  }, []);

  // Generate multiple choice options
  const generateOptions = useCallback((correctWord: Word, allWords: Word[]) => {
    const correctAnswer = correctWord.meaning;
    const otherWords = allWords.filter(w => w.char !== correctWord.char);
    const shuffledOthers = shuffleArray(otherWords).slice(0, 3);
    const opts = [correctAnswer, ...shuffledOthers.map(w => w.meaning)];
    const optionObjects = opts.map((option, index) => ({ option, index }));
    const shuffledObjects = shuffleArray(optionObjects as any);
    return shuffledObjects.map((item: any) => item.option);
  }, []);

  // Start new practice session
  const startNewSession = useCallback((level: number, mode: StudyMode = 'flashcard') => {
    const words = vocabData[level as keyof typeof vocabData] || [];
    const shuffledWords = shuffleArray(words);
    
    const session: PracticeSession = {
      level,
      mode,
      words: shuffledWords,
      currentIndex: 0,
      knownWords: new Set(),
      needsReview: [],
      startTime: new Date(),
      totalWords: words.length
    };

    setCurrentSession(session);
    setActiveLevel(level);
    setStudyMode(mode);
    setSessionState('practicing');
    setIsFlipped(false);
    setCardAnimation('');
    setShowHint(false);
    setSelectedAnswer('');
    setShowResult(false);
    setUserInput('');
    setInputStatus('idle');
    setSessionStats({
      correct: 0,
      incorrect: 0,
      totalAnswered: 0,
      streak: 0,
      maxStreak: 0
    });

    if (mode === 'multiple-choice' && words.length > 0) {
      setOptions(generateOptions(shuffledWords[0], words));
    }
  }, [generateOptions]);

  // Navigate to previous card (Left Arrow)
  const goToPreviousCard = useCallback(() => {
    if (!currentSession || currentSession.currentIndex <= 0 || cardAnimation) return;

    const prevIndex = currentSession.currentIndex - 1;
    const prevWord = currentSession.words[prevIndex];
    if (prevWord) {
      recordDailyPractice();
      recordWordStudied(prevWord.char);
    }

    const updatedSession: PracticeSession = {
      ...currentSession,
      currentIndex: prevIndex,
    };

    setCurrentSession(updatedSession);
    setIsFlipped(false);
    setCardAnimation('');
    setShowHint(false);
    setSelectedAnswer('');
    setShowResult(false);
    setUserInput('');
    setInputStatus('idle');

    if (studyMode === 'multiple-choice' && prevWord) {
      setOptions(generateOptions(prevWord, updatedSession.words));
    }
  }, [currentSession, cardAnimation, studyMode, generateOptions]);

  // Navigate to next card (Right Arrow)
  const goToNextCard = useCallback(() => {
    if (!currentSession || cardAnimation) return;
    if (currentSession.currentIndex + 1 >= currentSession.words.length) return;

    const nextIndex = currentSession.currentIndex + 1;
    const nextWord = currentSession.words[nextIndex];
    if (nextWord) {
      recordDailyPractice();
      recordWordStudied(nextWord.char);
    }

    const updatedSession: PracticeSession = {
      ...currentSession,
      currentIndex: nextIndex,
    };

    setCurrentSession(updatedSession);
    setIsFlipped(false);
    setCardAnimation('');
    setShowHint(false);
    setSelectedAnswer('');
    setShowResult(false);
    setUserInput('');
    setInputStatus('idle');

    if (studyMode === 'multiple-choice' && nextWord) {
      setOptions(generateOptions(nextWord, updatedSession.words));
    }
  }, [currentSession, cardAnimation, studyMode, generateOptions]);

  // Trigger confetti animation
  const triggerConfetti = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#22c55e', '#16a34a', '#86efac', '#fbbf24', '#f59e0b']
    });
  }, []);

  // Handle answer submission
  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (!currentSession || !currentWord || cardAnimation) return;

    recordDailyPractice();
    recordWordStudied(currentWord.char);

    const newStats = { ...sessionStats };
    newStats.totalAnswered++;
    
    if (isCorrect) {
      newStats.correct++;
      newStats.streak++;
      newStats.maxStreak = Math.max(newStats.maxStreak, newStats.streak);
      currentSession.knownWords.add(currentWord.char);
    } else {
      newStats.incorrect++;
      newStats.streak = 0;
      currentSession.needsReview.push(currentWord);
    }

    setSessionStats(newStats);

    if (studyMode === 'flashcard') {
      setCardAnimation(isCorrect ? 'card-exit-correct' : 'card-exit-incorrect');
    } else if (studyMode === 'multiple-choice') {
      setShowResult(true);
    } else if (studyMode === 'typing') {
      setInputStatus(isCorrect ? 'correct' : 'incorrect');
    }

    setTimeout(() => {
      const isLastWord = currentSession.currentIndex + 1 >= currentSession.words.length;
      
      if (isLastWord) {
        if (currentSession.needsReview.length === 0) {
          setSessionState('complete');
          triggerConfetti();
        } else {
          setSessionState('round_over');
        }
      } else {
        const updatedSession = { ...currentSession };
        updatedSession.currentIndex++;
        
        setCurrentSession(updatedSession);
        setIsFlipped(false);
        setCardAnimation('');
        setShowHint(false);
        setSelectedAnswer('');
        setShowResult(false);
        setUserInput('');
        setInputStatus('idle');
        
        if (studyMode === 'multiple-choice') {
          const nextWord = updatedSession.words[updatedSession.currentIndex];
          setOptions(generateOptions(nextWord, updatedSession.words));
        }
      }
    }, studyMode === 'flashcard' ? 420 : 900);
  }, [currentSession, currentWord, cardAnimation, sessionStats, studyMode, generateOptions, triggerConfetti]);

  // Handle multiple choice selection
  const handleMultipleChoice = useCallback((selected: string) => {
    if (showResult || !currentWord) return;
    
    setSelectedAnswer(selected);
    const isCorrect = selected === currentWord.meaning;
    handleAnswer(isCorrect);
  }, [showResult, currentWord, handleAnswer]);

  // Handle typing submission
  const handleTypingSubmit = useCallback(() => {
    if (!currentWord || !userInput.trim()) return;
    
    const isCorrect = userInput.trim().toLowerCase() === currentWord.meaning.toLowerCase();
    handleAnswer(isCorrect);
  }, [currentWord, userInput, handleAnswer]);

  // Start review session
  const startReviewSession = useCallback(() => {
    if (!currentSession || currentSession.needsReview.length === 0) return;
    
    const reviewSession: PracticeSession = {
      ...currentSession,
      words: shuffleArray(currentSession.needsReview),
      currentIndex: 0,
      needsReview: [],
      startTime: new Date()
    };
    
    setCurrentSession(reviewSession);
    setSessionState('practicing');
    setIsFlipped(false);
    setCardAnimation('');
    setShowHint(false);
    setSelectedAnswer('');
    setShowResult(false);
    setUserInput('');
    setInputStatus('idle');
    
    if (studyMode === 'multiple-choice') {
      setOptions(generateOptions(reviewSession.words[0], reviewSession.words));
    }
  }, [currentSession, studyMode, generateOptions]);

  // Global Keyboard Shortcuts for Flashcard & Practice Interface
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Do not intercept shortcuts when typing in an input, textarea, select, or contentEditable element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }

      // Ignore modified key combinations (Ctrl/Cmd/Alt)
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      // Setup screen: Enter starts the session, 1-6 selects HSK level
      if (sessionState === 'setup') {
        if (e.key === 'Enter') {
          e.preventDefault();
          startNewSession(activeLevel, studyMode);
        } else if (['1', '2', '3', '4', '5', '6'].includes(e.key)) {
          e.preventDefault();
          setActiveLevel(Number(e.key));
        }
        return;
      }

      if (sessionState !== 'practicing' || !currentWord) return;

      // Left / Right Arrows: Previous / Next Card across Flashcard & Multiple-Choice modes
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        pulseShortcutHighlight('prev');
        goToPreviousCard();
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        pulseShortcutHighlight('next');
        goToNextCard();
        return;
      }

      // Audio playback shortcut ('a' or 's')
      if (e.key.toLowerCase() === 'a' || e.key.toLowerCase() === 's') {
        e.preventDefault();
        pulseShortcutHighlight('audio');
        speakChineseText(currentWord.char, 0.85);
        return;
      }

      // Flashcard-specific shortcuts
      if (studyMode === 'flashcard') {
        if (e.key === ' ' || e.code === 'Space' || e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Enter') {
          e.preventDefault();
          if (!cardAnimation) {
            pulseShortcutHighlight('flip');
            setIsFlipped(prev => !prev);
          }
          return;
        }

        if (e.key.toLowerCase() === 'h') {
          e.preventDefault();
          if (!isFlipped) {
            pulseShortcutHighlight('hint');
            setShowHint(prev => !prev);
          }
          return;
        }

        if (e.key === '1' || e.key.toLowerCase() === 'x') {
          e.preventDefault();
          pulseShortcutHighlight('review');
          handleAnswer(false);
          return;
        }

        if (e.key === '2' || e.key.toLowerCase() === 'k') {
          e.preventDefault();
          pulseShortcutHighlight('known');
          handleAnswer(true);
          return;
        }
      }

      // Multiple-choice number shortcuts (1-4)
      if (studyMode === 'multiple-choice' && !showResult) {
        const idx = parseInt(e.key, 10) - 1;
        if (idx >= 0 && idx < options.length) {
          e.preventDefault();
          handleMultipleChoice(options[idx]);
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [
    sessionState,
    studyMode,
    activeLevel,
    currentWord,
    isFlipped,
    cardAnimation,
    showResult,
    options,
    startNewSession,
    goToPreviousCard,
    goToNextCard,
    handleAnswer,
    handleMultipleChoice,
    pulseShortcutHighlight,
  ]);

  // Calculate session progress
  const progressPercentage = currentSession 
    ? ((currentSession.currentIndex + 1) / currentSession.totalWords) * 100 
    : 0;

  // Calculate session duration
  const sessionDuration = currentSession 
    ? Math.floor((new Date().getTime() - currentSession.startTime.getTime()) / 1000)
    : 0;

  const canGoPrev = Boolean(currentSession && currentSession.currentIndex > 0 && !cardAnimation);
  const canGoNext = Boolean(
    currentSession && currentSession.currentIndex + 1 < currentSession.words.length && !cardAnimation
  );

  // Render flashcard mode
  const renderFlashcardMode = () => (
    <div className="flashcard-container">
      {/* Screen-reader live region for accessible card state announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {currentWord
          ? isFlipped
            ? `Back of card: ${currentWord.char}, Pinyin ${currentWord.pinyin}, Meaning ${currentWord.meaning}, ${currentWord.grammar || ''}`
            : `Front of card ${(currentSession?.currentIndex ?? 0) + 1} of ${currentSession?.totalWords}: Character ${currentWord.char}${showHint ? `, Hint Pinyin ${currentWord.pinyin}` : ''}`
          : ''}
      </div>

      <div className="card-wrapper">
        <div 
          className={`flashcard ${isFlipped ? 'flipped' : ''} ${cardAnimation}`}
          onClick={() => !cardAnimation && setIsFlipped(!isFlipped)}
          role="button"
          tabIndex={0}
          aria-label={
            isFlipped
              ? `Flashcard back: ${currentWord?.char}, ${currentWord?.pinyin}, ${currentWord?.meaning}. Press Space to flip to front.`
              : `Flashcard front: ${currentWord?.char}. Press Space to flip to answer.`
          }
          onKeyDown={e => {
            if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault();
              e.stopPropagation();
              if (!cardAnimation) {
                pulseShortcutHighlight('flip');
                setIsFlipped(prev => !prev);
              }
            }
          }}
        >
          <div className="card-front">
            <div className="character">{currentWord?.char}</div>
            {showHint && (
              <div className="hint">
                <span>Hint: {currentWord?.pinyin}</span>
              </div>
            )}
            <span className="flashcard-flip-caption">Click or press Space to flip</span>
          </div>
          <div className="card-back">
            <div className="word-details">
              <div className="pinyin">{currentWord?.pinyin}</div>
              <div className="meaning">{currentWord?.meaning}</div>
              <div className="grammar">{currentWord?.grammar}</div>
              {currentWord?.examples && currentWord.examples.length > 0 && (
                <div className="examples">
                  <h4>Examples:</h4>
                  {currentWord.examples.map((ex, idx) => (
                    <div key={idx} className="example">
                      <div className="sentence">{ex.sentence}</div>
                      <div className="translation">{ex.translation}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="card-controls flashcard-nav-controls">
        <button
          type="button"
          className="flashcard-nav-btn"
          onClick={goToPreviousCard}
          disabled={!canGoPrev}
          title="Previous card (Left Arrow)"
          aria-label="Previous card"
        >
          ← Previous
        </button>

        <button 
          type="button"
          className="hint-button"
          onClick={() => setShowHint(!showHint)}
          disabled={isFlipped}
          title="Toggle Pinyin hint (H)"
        >
          {showHint ? 'Hide Hint' : 'Show Hint'}
        </button>

        <button
          type="button"
          className="flashcard-audio-btn"
          onClick={() => currentWord && speakChineseText(currentWord.char, 0.85)}
          title="Listen to pronunciation (A)"
          aria-label="Listen to pronunciation"
        >
          🔊 Listen
        </button>

        <button
          type="button"
          className="flashcard-nav-btn"
          onClick={goToNextCard}
          disabled={!canGoNext}
          title="Next card (Right Arrow)"
          aria-label="Next card"
        >
          Next →
        </button>
      </div>

      {/* Minimalist Global Keyboard Shortcuts Bar */}
      <div className="flashcard-shortcuts-bar" role="region" aria-label="Keyboard shortcuts">
        <span className={`kbd-shortcut-item ${activeShortcut === 'flip' ? 'kbd-shortcut-item--active' : ''}`}>
          <kbd className="kbd-badge">Space</kbd>
          <span>Flip</span>
        </span>
        <span className={`kbd-shortcut-item ${activeShortcut === 'prev' || activeShortcut === 'next' ? 'kbd-shortcut-item--active' : ''}`}>
          <kbd className="kbd-badge">←</kbd>
          <kbd className="kbd-badge">→</kbd>
          <span>Prev / Next</span>
        </span>
        <span className={`kbd-shortcut-item ${activeShortcut === 'review' ? 'kbd-shortcut-item--active' : ''}`}>
          <kbd className="kbd-badge">1</kbd>
          <span>Needs Review</span>
        </span>
        <span className={`kbd-shortcut-item ${activeShortcut === 'known' ? 'kbd-shortcut-item--active' : ''}`}>
          <kbd className="kbd-badge">2</kbd>
          <span>I Knew It</span>
        </span>
        <span className={`kbd-shortcut-item ${activeShortcut === 'hint' ? 'kbd-shortcut-item--active' : ''}`}>
          <kbd className="kbd-badge">H</kbd>
          <span>Hint</span>
        </span>
        <span className={`kbd-shortcut-item ${activeShortcut === 'audio' ? 'kbd-shortcut-item--active' : ''}`}>
          <kbd className="kbd-badge">A</kbd>
          <span>Audio</span>
        </span>
      </div>
    </div>
  );

  // Render multiple choice mode
  const renderMultipleChoiceMode = () => (
    <div className="multiple-choice-container">
      <div className="question-card">
        <div className="character">{currentWord?.char}</div>
        <div className="pinyin">{currentWord?.pinyin}</div>
        <div className="question">What does this character mean?</div>
      </div>
      
      <div className="options-grid">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedAnswer === option 
                ? showResult 
                  ? option === currentWord?.meaning 
                    ? 'correct' 
                    : 'incorrect'
                  : 'selected'
                : showResult && option === currentWord?.meaning
                ? 'correct'
                : ''
            }`}
            onClick={() => handleMultipleChoice(option)}
            disabled={showResult}
          >
            <span className="option-key-badge tabular-nums">{index + 1}</span>
            <span>{option}</span>
          </button>
        ))}
      </div>
      
      {showResult && (
        <div className="result-feedback">
          {selectedAnswer === currentWord?.meaning ? (
            <div className="correct-feedback">✅ Correct!</div>
          ) : (
            <div className="incorrect-feedback">
              ❌ Incorrect. The correct answer is: <strong>{currentWord?.meaning}</strong>
            </div>
          )}
        </div>
      )}
    </div>
  );

  // Render typing mode
  const renderTypingMode = () => (
    <div className="typing-container">
      <div className="question-card">
        <div className="character">{currentWord?.char}</div>
        <div className="pinyin">{currentWord?.pinyin}</div>
        <div className="question">Type the meaning of this character:</div>
      </div>
      
      <div className="input-section">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleTypingSubmit()}
          className={`typing-input ${inputStatus}`}
          placeholder="Type the meaning..."
          disabled={inputStatus !== 'idle'}
        />
        <button 
          className="submit-button"
          onClick={handleTypingSubmit}
          disabled={!userInput.trim() || inputStatus !== 'idle'}
        >
          Submit
        </button>
      </div>
      
      {inputStatus !== 'idle' && (
        <div className="typing-feedback">
          {inputStatus === 'correct' ? (
            <div className="correct-feedback">✅ Correct!</div>
          ) : (
            <div className="incorrect-feedback">
              ❌ Incorrect. The correct answer is: <strong>{currentWord?.meaning}</strong>
            </div>
          )}
        </div>
      )}
    </div>
  );

  // Render practice content based on mode
  const renderPracticeContent = () => {
    if (!currentWord) return null;

    switch (studyMode) {
      case 'flashcard':
        return renderFlashcardMode();
      case 'multiple-choice':
        return renderMultipleChoiceMode();
      case 'typing':
        return renderTypingMode();
      default:
        return renderFlashcardMode();
    }
  };

  // Render action buttons based on mode
  const renderActionButtons = () => {
    if (studyMode === 'multiple-choice' || studyMode === 'typing') return null;

    return (
      <div className="action-buttons">
        <button
          className="action-button incorrect"
          onClick={() => handleAnswer(false)}
          disabled={!!cardAnimation}
          title="Shortcut: Press 1 or X"
        >
          <span className="icon">❌</span>
          <span>Needs Review</span>
          <kbd className="action-btn-kbd">1</kbd>
        </button>
        <button
          className="action-button correct"
          onClick={() => handleAnswer(true)}
          disabled={!!cardAnimation}
          title="Shortcut: Press 2 or K"
        >
          <span className="icon">✅</span>
          <span>I Knew It</span>
          <kbd className="action-btn-kbd">2</kbd>
        </button>
      </div>
    );
  };

  // Render session setup
  const renderSetup = () => (
    <div className="setup-container">
      <div className="setup-header">
        <h2>Choose Your Practice Session</h2>
        <p>Select an HSK level and study mode to begin</p>
      </div>
      
      <div className="level-selector">
        <h3>HSK Level</h3>
        <div className="level-buttons">
          {hskLevels.map(level => (
            <button
              key={level}
              className={`level-button ${activeLevel === level ? 'active' : ''}`}
              onClick={() => setActiveLevel(level)}
            >
              HSK {level}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mode-selector">
        <h3>Study Mode</h3>
        <div className="mode-grid">
          <div 
            className={`mode-card ${studyMode === 'flashcard' ? 'active' : ''}`}
            onClick={() => setStudyMode('flashcard')}
          >
            <div className="mode-icon">🃏</div>
            <h4>Flashcards</h4>
            <p>Traditional flip cards with detailed explanations</p>
          </div>
          <div 
            className={`mode-card ${studyMode === 'multiple-choice' ? 'active' : ''}`}
            onClick={() => setStudyMode('multiple-choice')}
          >
            <div className="mode-icon">🎯</div>
            <h4>Multiple Choice</h4>
            <p>Choose the correct meaning from options</p>
          </div>
          <div 
            className={`mode-card ${studyMode === 'typing' ? 'active' : ''}`}
            onClick={() => setStudyMode('typing')}
          >
            <div className="mode-icon">⌨️</div>
            <h4>Typing</h4>
            <p>Type the meaning to test recall</p>
          </div>
        </div>
      </div>
      
      <button
        className="start-button"
        onClick={() => startNewSession(activeLevel, studyMode)}
      >
        Start Practice Session
      </button>
    </div>
  );

  // Render round over screen
  const renderRoundOver = () => (
    <div className="round-over-container">
      <div className="round-over-content">
        <h2>Round Complete! 🎉</h2>
        <p>You've reviewed all the words for this round.</p>
        
        <div className="stats-summary">
          <div className="stat-item">
            <span className="stat-label">Correct:</span>
            <span className="stat-value correct">{sessionStats.correct}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Needs Review:</span>
            <span className="stat-value incorrect">{currentSession?.needsReview.length || 0}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Accuracy:</span>
            <span className="stat-value">
              {sessionStats.totalAnswered > 0 
                ? Math.round((sessionStats.correct / sessionStats.totalAnswered) * 100)
                : 0}%
            </span>
          </div>
        </div>
        
        {currentSession && currentSession.needsReview.length > 0 ? (
          <button
            className="review-button"
            onClick={startReviewSession}
          >
            Review {currentSession.needsReview.length} Words
          </button>
        ) : (
          <button
            className="restart-button"
            onClick={() => startNewSession(activeLevel, studyMode)}
          >
            Practice Again
          </button>
        )}
      </div>
    </div>
  );

  // Render completion screen
  const renderCompletion = () => (
    <div className="completion-container">
      <div className="completion-content">
        <div className="celebration">🎉</div>
        <h2>Congratulations!</h2>
        <p>You've mastered all the words for HSK Level {activeLevel}.</p>
        
        <div className="final-stats">
          <div className="stat-card">
            <div className="stat-number">{sessionStats.correct}</div>
            <div className="stat-label">Correct Answers</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{sessionStats.maxStreak}</div>
            <div className="stat-label">Best Streak</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {sessionStats.totalAnswered > 0 
                ? Math.round((sessionStats.correct / sessionStats.totalAnswered) * 100)
                : 0}%
            </div>
            <div className="stat-label">Accuracy</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{Math.floor(sessionDuration / 60)}:{(sessionDuration % 60).toString().padStart(2, '0')}</div>
            <div className="stat-label">Time</div>
          </div>
        </div>
        
        <div className="completion-actions">
          <button
            className="restart-button"
            onClick={() => startNewSession(activeLevel, studyMode)}
          >
            Practice Again
          </button>
          <button
            className="new-level-button"
            onClick={() => setSessionState('setup')}
          >
            Choose Different Level
          </button>
        </div>
      </div>
    </div>
  );

  // Render main content based on session state
  const renderMainContent = () => {
    switch (sessionState) {
      case 'setup':
        return renderSetup();
      case 'practicing':
        return (
          <div className="practice-container">
            <div className="practice-container-header">
              <div className="level-badge">HSK Level {activeLevel}</div>
              <div className="progress-info">
                Word {(currentSession?.currentIndex ?? 0) + 1} of {currentSession?.totalWords}
              </div>
            </div>
            
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            
            <div className="practice-content">
              {renderPracticeContent()}
            </div>
            
            {renderActionButtons()}
            
            <div className="session-stats">
              <div className="stat">
                <span className="stat-icon">✅</span>
                <span>{sessionStats.correct}</span>
              </div>
              <div className="stat">
                <span className="stat-icon">❌</span>
                <span>{sessionStats.incorrect}</span>
              </div>
              <div className="stat">
                <span className="stat-icon">🔥</span>
                <span>{sessionStats.streak}</span>
              </div>
            </div>
          </div>
        );
      case 'round_over':
        return renderRoundOver();
      case 'complete':
        return renderCompletion();
      default:
        return renderSetup();
    }
  };

  return (
    <div className="practice-page">
      <div className="practice-header">
        <h1>Practice Mode</h1>
        <p>Master Chinese characters through interactive practice</p>
      </div>
      
      <div className="practice-content-wrapper">
        {renderMainContent()}
      </div>
    </div>
  );
};

export default PracticePage;