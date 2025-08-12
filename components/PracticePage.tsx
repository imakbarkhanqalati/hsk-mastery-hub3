import React, { useState, useMemo, useCallback } from 'react';
import { vocabData } from '../data/vocab';
import { Word } from '../types';
import confetti from 'canvas-confetti';

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

  // Generate multiple choice options
  const generateOptions = useCallback((correctWord: Word, allWords: Word[]) => {
    const correctAnswer = correctWord.meaning;
    const otherWords = allWords.filter(w => w.char !== correctWord.char);
    const shuffledOthers = shuffleArray(otherWords).slice(0, 3);
    const options = [correctAnswer, ...shuffledOthers.map(w => w.meaning)];
    // Create array of objects and shuffle them, then extract options
    const optionObjects = options.map((option, index) => ({ option, index }));
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

    // Generate options for multiple choice mode
    if (mode === 'multiple-choice' && words.length > 0) {
      setOptions(generateOptions(shuffledWords[0], words));
    }
  }, [generateOptions]);

  // Handle answer submission
  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (!currentSession || !currentWord) return;

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

    // Trigger animations based on mode
    if (studyMode === 'flashcard') {
      setCardAnimation(isCorrect ? 'card-exit-correct' : 'card-exit-incorrect');
    } else if (studyMode === 'multiple-choice') {
      setShowResult(true);
    } else if (studyMode === 'typing') {
      setInputStatus(isCorrect ? 'correct' : 'incorrect');
    }

    // Move to next word or end session
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
        // Move to next word
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
        
        // Generate new options for multiple choice
        if (studyMode === 'multiple-choice') {
          const nextWord = updatedSession.words[updatedSession.currentIndex];
          setOptions(generateOptions(nextWord, updatedSession.words));
        }
      }
    }, studyMode === 'flashcard' ? 500 : 1000);
  }, [currentSession, currentWord, sessionStats, studyMode, generateOptions]);

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

  // Trigger confetti animation
  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#22c55e', '#16a34a', '#86efac', '#fbbf24', '#f59e0b']
    });
  };

  // Calculate session progress
  const progressPercentage = currentSession 
    ? ((currentSession.currentIndex + 1) / currentSession.totalWords) * 100 
    : 0;

  // Calculate session duration
  const sessionDuration = currentSession 
    ? Math.floor((new Date().getTime() - currentSession.startTime.getTime()) / 1000)
    : 0;

  // Render flashcard mode
  const renderFlashcardMode = () => (
    <div className="flashcard-container">
      <div className="card-wrapper">
        <div 
          className={`flashcard ${isFlipped ? 'flipped' : ''} ${cardAnimation}`}
          onClick={() => !cardAnimation && setIsFlipped(!isFlipped)}
        >
          <div className="card-front">
            <div className="character">{currentWord?.char}</div>
            {showHint && (
              <div className="hint">
                <span>Hint: {currentWord?.pinyin}</span>
              </div>
            )}
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
      
      <div className="card-controls">
        <button 
          className="hint-button"
          onClick={() => setShowHint(!showHint)}
          disabled={isFlipped}
        >
          {showHint ? 'Hide Hint' : 'Show Hint'}
        </button>
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
            {option}
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
          disabled={!isFlipped || !!cardAnimation}
        >
          <span className="icon">❌</span>
          Needs Review
        </button>
        <button
          className="action-button correct"
          onClick={() => handleAnswer(true)}
          disabled={!isFlipped || !!cardAnimation}
        >
          <span className="icon">✅</span>
          I Knew It
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