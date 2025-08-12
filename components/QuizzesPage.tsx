import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { vocabData } from '../data/vocab';
import { Word } from '../types';
import confetti from 'canvas-confetti';

// Enhanced shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Quiz question types
type QuestionType = 'meaning' | 'character' | 'pinyin' | 'grammar';

interface QuizQuestion {
  id: string;
  type: QuestionType;
  word: Word;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

interface UserAnswer {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  timeSpent: number;
}

interface QuizSession {
  level: number;
  questions: QuizQuestion[];
  userAnswers: UserAnswer[];
  startTime: Date;
  currentIndex: number;
  score: number;
  totalQuestions: number;
}

type QuizState = 'selecting' | 'active' | 'results' | 'review';
type QuizLength = 'short' | 'medium' | 'long';

const QuizzesPage: React.FC = () => {
  // Core state
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [quizLength, setQuizLength] = useState<QuizLength>('medium');
  const [quizState, setQuizState] = useState<QuizState>('selecting');
  const [currentSession, setCurrentSession] = useState<QuizSession | null>(null);
  
  // Question state
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [questionStartTime, setQuestionStartTime] = useState<Date>(new Date());
  
  // UI state
  const [questionAnimation, setQuestionAnimation] = useState<string>('');
  const [optionAnimations, setOptionAnimations] = useState<{ [key: string]: string }>({});

  const hskLevels = useMemo(() => {
    const levels = Object.keys(vocabData).map(Number).sort((a, b) => a - b);
    return levels;
  }, []);

  // Generate quiz questions with level-appropriate question count
  const generateQuizQuestions = useCallback((level: number): QuizQuestion[] => {
    const words = vocabData[level as keyof typeof vocabData] || [];
    if (words.length < 4) return [];
    
    // Determine question count based on HSK level and quiz length
    const baseQuestionCount = 50;
    
    // Adjust question count based on quiz length preference
    let questionCount: number;
    switch (quizLength) {
      case 'short':
        questionCount = Math.floor(baseQuestionCount * 0.6);
        break;
      case 'medium':
        questionCount = baseQuestionCount;
        break;
      case 'long':
        questionCount = Math.floor(baseQuestionCount * 1.4);
        break;
      default:
        questionCount = baseQuestionCount;
    }
    
    // Ensure we don't exceed available words
    questionCount = Math.min(questionCount, words.length);
    
    const shuffledWords = shuffleArray(words);
    const selectedWords = shuffledWords.slice(0, questionCount);
    
    return selectedWords.map((word, index) => {
      const questionTypes: QuestionType[] = ['meaning', 'character', 'pinyin', 'grammar'];
      const type = questionTypes[index % questionTypes.length];
      
      let question: string;
      let correctAnswer: string;
      let options: string[];
      
      switch (type) {
        case 'meaning':
          question = `What does "${word.char}" mean?`;
          correctAnswer = word.meaning;
          options = generateMeaningOptions(word, words);
          break;
        case 'character':
          question = `Which character means "${word.meaning}"?`;
          correctAnswer = word.char;
          options = generateCharacterOptions(word, words);
          break;
        case 'pinyin':
          question = `What is the pinyin for "${word.char}"?`;
          correctAnswer = word.pinyin;
          options = generatePinyinOptions(word, words);
          break;
        case 'grammar':
          question = `What part of speech is "${word.char}"?`;
          correctAnswer = word.grammar;
          options = generateGrammarOptions(word, words);
          break;
        default:
          question = `What does "${word.char}" mean?`;
          correctAnswer = word.meaning;
          options = generateMeaningOptions(word, words);
      }
      
      return {
        id: `q${index}`,
        type,
        word,
        question,
        options: shuffleArray(options),
        correctAnswer,
        explanation: getExplanation(word, type)
      };
    });
  }, []);

  // Helper functions for generating options
  const generateMeaningOptions = (correctWord: Word, allWords: Word[]): string[] => {
    const otherWords = allWords.filter(w => w.char !== correctWord.char);
    const shuffledOthers = shuffleArray(otherWords).slice(0, 3);
    return [correctWord.meaning, ...shuffledOthers.map(w => w.meaning)];
  };

  const generateCharacterOptions = (correctWord: Word, allWords: Word[]): string[] => {
    const otherWords = allWords.filter(w => w.char !== correctWord.char);
    const shuffledOthers = shuffleArray(otherWords).slice(0, 3);
    return [correctWord.char, ...shuffledOthers.map(w => w.char)];
  };

  const generatePinyinOptions = (correctWord: Word, allWords: Word[]): string[] => {
    const otherWords = allWords.filter(w => w.pinyin !== correctWord.pinyin);
    const shuffledOthers = shuffleArray(otherWords).slice(0, 3);
    return [correctWord.pinyin, ...shuffledOthers.map(w => w.pinyin)];
  };

  const generateGrammarOptions = (correctWord: Word, allWords: Word[]): string[] => {
    // Get all unique grammar types, excluding the correct one, to create a pool of incorrect options.
    const incorrectGrammarTypes = [...new Set(allWords.map(w => w.grammar))].filter(g => g !== correctWord.grammar);
    const shuffledIncorrect = shuffleArray(incorrectGrammarTypes).slice(0, 3);
    return [correctWord.grammar, ...shuffledIncorrect];
  };

  const getExplanation = (word: Word, type: QuestionType): string => {
    switch (type) {
      case 'meaning':
        return `${word.char} (${word.pinyin}) means "${word.meaning}"`;
      case 'character':
        return `The character ${word.char} (${word.pinyin}) means "${word.meaning}"`;
      case 'pinyin':
        return `${word.char} is pronounced "${word.pinyin}" and means "${word.meaning}"`;
      case 'grammar':
        return `${word.char} is a ${word.grammar.toLowerCase()}`;
      default:
        return `${word.char} (${word.pinyin}) means "${word.meaning}"`;
    }
  };

  // Start quiz
  const startQuiz = useCallback((level: number) => {
    const questions = generateQuizQuestions(level);
    if (questions.length === 0) {
      alert("Not enough words for a quiz at this level.");
      return;
    }

    const session: QuizSession = {
      level,
      questions,
      userAnswers: [],
      startTime: new Date(),
      currentIndex: 0,
      score: 0,
      totalQuestions: questions.length
    };

    setCurrentSession(session);
    setActiveLevel(level);
    setQuizState('active');
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowExplanation(false);
    setQuestionStartTime(new Date());
    setQuestionAnimation('animate-fade-in');
    setOptionAnimations({});
  }, [generateQuizQuestions]);

  // Handle answer selection
  const handleAnswerSelect = useCallback((option: string) => {
    if (selectedAnswer || !currentSession) return;

    const currentQuestion = currentSession.questions[currentSession.currentIndex];
    const correct = option === currentQuestion.correctAnswer;
    const timeSpent = Date.now() - questionStartTime.getTime();

    setSelectedAnswer(option);
    setIsCorrect(correct);
    setShowExplanation(true);

    // Animate options
    const animations: { [key: string]: string } = {};
    currentQuestion.options.forEach(opt => {
      if (opt === currentQuestion.correctAnswer) {
        animations[opt] = 'animate-correct';
      } else if (opt === option && !correct) {
        animations[opt] = 'animate-incorrect';
      }
    });
    setOptionAnimations(animations);

    // Update session
    const userAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer: option,
      isCorrect: correct,
      timeSpent
    };

    setCurrentSession(prev => prev ? {
      ...prev,
      userAnswers: [...prev.userAnswers, userAnswer],
      score: correct ? prev.score + 1 : prev.score
    } : null);

    // Trigger confetti for correct answers
    if (correct) {
      triggerConfetti();
    }
  }, [selectedAnswer, currentSession, questionStartTime]);

  // Trigger confetti animation
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  // Next question
  const handleNextQuestion = useCallback(() => {
    if (!currentSession) return;

    if (currentSession.currentIndex + 1 < currentSession.questions.length) {
      setCurrentSession(prev => prev ? {
        ...prev,
        currentIndex: prev.currentIndex + 1
      } : null);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowExplanation(false);
      setQuestionStartTime(new Date());
      setQuestionAnimation('animate-slide-in');
      setOptionAnimations({});
    } else {
      setQuizState('results');
    }
  }, [currentSession]);

  // Restart quiz
  const restartQuiz = useCallback(() => {
    if (currentSession) {
      startQuiz(currentSession.level);
    }
  }, [currentSession, startQuiz]);

  // Review answers
  const reviewAnswers = useCallback(() => {
    setQuizState('review');
  }, []);

  // Calculate progress
  const progressPercentage = currentSession 
    ? ((currentSession.currentIndex + 1) / currentSession.questions.length) * 100 
    : 0;

  // Current question
  const currentQuestion = currentSession?.questions[currentSession.currentIndex];

  // Render quiz setup
  const renderQuizSetup = () => (
    <div className="quiz-setup animate-fade-in">
      <div className="quiz-setup__content">
        <div className="quiz-setup__icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 12l2 2 4-4"/>
            <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"/>
            <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"/>
            <path d="M12 3c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"/>
            <path d="M12 21c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z"/>
          </svg>
        </div>
        <h2 className="quiz-setup__title">Ready to Test Your Knowledge?</h2>
        <p className="quiz-setup__description">
          Choose an HSK level and quiz length to start a comprehensive quiz. Question count increases with level and can be customized for your study time.
        </p>
        
        {/* Quiz Length Selector */}
        <div className="quiz-setup__length-selector">
          <h3 className="quiz-setup__length-title">Quiz Length</h3>
          <div className="quiz-setup__length-options">
            <button
              onClick={() => setQuizLength('short')}
              className={`quiz-setup__length-option ${quizLength === 'short' ? 'quiz-setup__length-option--active' : ''}`}
            >
              <div className="quiz-setup__length-icon">⏱️</div>
              <div className="quiz-setup__length-info">
                <span className="quiz-setup__length-name">Short</span>
                <span className="quiz-setup__length-desc">Quick practice</span>
              </div>
            </button>
            <button
              onClick={() => setQuizLength('medium')}
              className={`quiz-setup__length-option ${quizLength === 'medium' ? 'quiz-setup__length-option--active' : ''}`}
            >
              <div className="quiz-setup__length-icon">📚</div>
              <div className="quiz-setup__length-info">
                <span className="quiz-setup__length-name">Medium</span>
                <span className="quiz-setup__length-desc">Standard quiz</span>
              </div>
            </button>
            <button
              onClick={() => setQuizLength('long')}
              className={`quiz-setup__length-option ${quizLength === 'long' ? 'quiz-setup__length-option--active' : ''}`}
            >
              <div className="quiz-setup__length-icon">🎯</div>
              <div className="quiz-setup__length-info">
                <span className="quiz-setup__length-name">Long</span>
                <span className="quiz-setup__length-desc">Comprehensive test</span>
              </div>
            </button>
          </div>
        </div>
        
        <div className="quiz-setup__features">
          <div className="quiz-setup__feature">
            <div className="quiz-setup__feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </div>
            <span>Multiple question types</span>
          </div>
          <div className="quiz-setup__feature">
            <div className="quiz-setup__feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v18h18"/>
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
              </svg>
            </div>
            <span>Detailed results</span>
          </div>
          <div className="quiz-setup__feature">
            <div className="quiz-setup__feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
              </svg>
            </div>
            <span>Progress tracking</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Render active quiz
  const renderActiveQuiz = () => {
    if (!currentQuestion || !currentSession) return null;

    return (
      <div className="quiz-active-area animate-fade-in">
        {/* Progress bar */}
        <div className="quiz-progress">
          <div className="quiz-progress__bar">
            <div 
              className="quiz-progress__fill" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="quiz-progress__info">
            <span className="quiz-progress__text">
              Question {currentSession.currentIndex + 1} of {currentSession.totalQuestions}
            </span>
            <span className="quiz-progress__score">
              Score: {currentSession.score}
            </span>
          </div>
        </div>

        {/* Question card */}
        <div className={`quiz-question-card ${questionAnimation}`}>
          <div className="quiz-question-card__header">
            <div className="quiz-question-card__type-badge">
              {currentQuestion.type === 'meaning' && 'Meaning'}
              {currentQuestion.type === 'character' && 'Character'}
              {currentQuestion.type === 'pinyin' && 'Pinyin'}
              {currentQuestion.type === 'grammar' && 'Grammar'}
            </div>
            <div className="quiz-question-card__level">
              HSK {currentSession.level}
            </div>
          </div>
          
          <div className="quiz-question-card__content">
            <h2 className="quiz-question-card__question">
              {currentQuestion.question}
            </h2>
            
            {currentQuestion.type === 'character' && (
              <div className="quiz-question-card__character">
                {currentQuestion.word.char}
              </div>
            )}
            
            {currentQuestion.type === 'pinyin' && (
              <div className="quiz-question-card__character">
                {currentQuestion.word.char}
              </div>
            )}
          </div>
        </div>

        {/* Options */}
        <div className="quiz-options-grid">
          {currentQuestion.options.map((option, index) => (
            <button
              key={option}
              onClick={() => handleAnswerSelect(option)}
              disabled={!!selectedAnswer}
              className={`quiz-option-button ${optionAnimations[option] || ''} ${
                selectedAnswer 
                  ? option === currentQuestion.correctAnswer 
                    ? 'quiz-option-button--correct'
                    : option === selectedAnswer 
                      ? 'quiz-option-button--incorrect'
                      : 'quiz-option-button--disabled'
                  : 'quiz-option-button--default'
              }`}
            >
              <span className="quiz-option-button__letter">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="quiz-option-button__text">{option}</span>
            </button>
          ))}
        </div>

        {/* Feedback and explanation */}
        {showExplanation && (
          <div className="quiz-feedback animate-fade-in">
            <div className={`quiz-feedback__result ${isCorrect ? 'quiz-feedback__result--correct' : 'quiz-feedback__result--incorrect'}`}>
              <div className="quiz-feedback__icon">
                {isCorrect ? '✅' : '❌'}
              </div>
              <div className="quiz-feedback__text">
                <h3>{isCorrect ? 'Correct!' : 'Incorrect'}</h3>
                <p>{currentQuestion.explanation}</p>
              </div>
            </div>
            <button 
              onClick={handleNextQuestion} 
              className="button button--primary quiz-feedback__next"
            >
              {currentSession.currentIndex + 1 < currentSession.totalQuestions ? 'Next Question' : 'See Results'}
            </button>
          </div>
        )}
      </div>
    );
  };

  // Render results
  const renderResults = () => {
    if (!currentSession) return null;

    const { score, totalQuestions, userAnswers, startTime } = currentSession;
    const percentage = Math.round((score / totalQuestions) * 100);
    const timeSpent = Date.now() - startTime.getTime();
    const averageTime = Math.round(timeSpent / totalQuestions / 1000);
    const isPerfect = score === totalQuestions;

    return (
      <div className="quiz-results animate-fade-in">
        <div className="quiz-results__header">
          <div className="quiz-results__icon">
            {isPerfect ? '🏆' : percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
          </div>
          <h2 className="quiz-results__title">
            {isPerfect ? 'Perfect Score!' : percentage >= 80 ? 'Great Job!' : percentage >= 60 ? 'Good Work!' : 'Keep Practicing!'}
          </h2>
          <p className="quiz-results__subtitle">
            HSK {currentSession.level} Quiz Complete
          </p>
        </div>

        <div className="quiz-results__stats">
          <div className="quiz-results__stat">
            <div className="quiz-results__stat-number">{score}/{totalQuestions}</div>
            <div className="quiz-results__stat-label">Score</div>
          </div>
          <div className="quiz-results__stat">
            <div className="quiz-results__stat-number">{percentage}%</div>
            <div className="quiz-results__stat-label">Accuracy</div>
          </div>
          <div className="quiz-results__stat">
            <div className="quiz-results__stat-number">{averageTime}s</div>
            <div className="quiz-results__stat-label">Avg Time</div>
          </div>
        </div>

        <div className="quiz-results__actions">
          <button onClick={restartQuiz} className="button button--primary">
            Try Again
          </button>
          <button onClick={reviewAnswers} className="button button--secondary">
            Review Answers
          </button>
          <button onClick={() => setQuizState('selecting')} className="button button--outline">
            Choose Level
          </button>
        </div>
      </div>
    );
  };

  // Render review
  const renderReview = () => {
    if (!currentSession) return null;

    return (
      <div className="quiz-review animate-fade-in">
        <div className="quiz-review__header">
          <h2 className="quiz-review__title">Answer Review</h2>
          <p className="quiz-review__subtitle">
            Review your answers and learn from mistakes
          </p>
        </div>

        <div className="quiz-review__questions">
          {currentSession.questions.map((question, index) => {
            const userAnswer = currentSession.userAnswers.find(a => a.questionId === question.id);
            const isCorrect = userAnswer?.isCorrect;

            return (
              <div key={question.id} className={`quiz-review__question ${isCorrect ? 'quiz-review__question--correct' : 'quiz-review__question--incorrect'}`}>
                <div className="quiz-review__question-header">
                  <span className="quiz-review__question-number">Q{index + 1}</span>
                  <span className="quiz-review__question-type">{question.type}</span>
                  <span className={`quiz-review__question-result ${isCorrect ? 'quiz-review__question-result--correct' : 'quiz-review__question-result--incorrect'}`}>
                    {isCorrect ? '✓' : '✗'}
                  </span>
                </div>
                
                <div className="quiz-review__question-content">
                  <p className="quiz-review__question-text">{question.question}</p>
                  {question.type === 'character' && (
                    <div className="quiz-review__question-character">{question.word.char}</div>
                  )}
                  {question.type === 'pinyin' && (
                    <div className="quiz-review__question-character">{question.word.char}</div>
                  )}
                </div>

                <div className="quiz-review__answers">
                  <div className="quiz-review__answer">
                    <span className="quiz-review__answer-label">Your answer:</span>
                    <span className="quiz-review__answer-value">{userAnswer?.selectedAnswer}</span>
                  </div>
                  <div className="quiz-review__answer">
                    <span className="quiz-review__answer-label">Correct answer:</span>
                    <span className="quiz-review__answer-value quiz-review__answer-value--correct">
                      {question.correctAnswer}
                    </span>
                  </div>
                </div>

                <div className="quiz-review__explanation">
                  <p>{question.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="quiz-review__actions">
          <button onClick={() => setQuizState('results')} className="button button--primary">
            Back to Results
          </button>
          <button onClick={() => setQuizState('selecting')} className="button button--outline">
            New Quiz
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="quizzes-page animate-fade-in">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Quizzes</h1>
          <p className="section-subtitle">Test your vocabulary knowledge with interactive quizzes</p>
        </div>
        
        {/* Level selection tabs */}
        <div className="tabs-container">
          <nav className="tabs-nav" aria-label="HSK Levels">
            {hskLevels.map(level => {
              const isActive = activeLevel === level && quizState !== 'selecting';
              return (
                <button
                  key={level}
                  onClick={() => startQuiz(level)}
                  disabled={quizState === 'active'}
                  className={`tab-button ${isActive ? 'tab-button--active' : ''}`}
                >
                  HSK {level}
                </button>
              );
            })}
          </nav>
        </div>
        
        {/* Quiz content */}
        <div className="quiz-content">
          {quizState === 'selecting' && renderQuizSetup()}
          {quizState === 'active' && renderActiveQuiz()}
          {quizState === 'results' && renderResults()}
          {quizState === 'review' && renderReview()}
        </div>
      </div>
    </div>
  );
};

export default QuizzesPage;
