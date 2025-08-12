import React, { useState, useMemo, useCallback } from 'react';
import { vocabData } from '../data/vocab';
import { Word } from '../types';

// Helper to generate MCQ options for a word
function generateOptions(words: Word[], correctWord: Word, count = 4): string[] {
  const options = [correctWord.meaning];
  const otherWords = words.filter(w => w.meaning !== correctWord.meaning);
  while (options.length < count && otherWords.length > 0) {
    const idx = Math.floor(Math.random() * otherWords.length);
    options.push(otherWords[idx].meaning);
    otherWords.splice(idx, 1);
  }
  // Shuffle
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

interface PracticeQuestion {
  word: Word;
  options: string[];
  correctAnswer: string;
}

const MinimalPracticePage: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const hskLevels = useMemo(() => Object.keys(vocabData).map(Number), []);

  // Start a new session
  const startSession = useCallback((level: number) => {
    const words = vocabData[level as keyof typeof vocabData] || [];
    // Shuffle words
    const shuffled = [...words];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Generate questions (limit to 10 for focus)
    const qs: PracticeQuestion[] = shuffled.slice(0, 10).map(word => ({
      word,
      options: generateOptions(words, word, 4),
      correctAnswer: word.meaning,
    }));
    setQuestions(qs);
    setCurrentIndex(0);
    setSelected(null);
    setShowFeedback(false);
    setIsCorrect(null);
    setActiveLevel(level);
  }, []);

  // Handle answer selection
  const handleSelect = (option: string) => {
    if (selected || showFeedback) return;
    setSelected(option);
  };

  // Check answer
  const handleCheck = () => {
    if (!selected) return;
    const correct = selected === questions[currentIndex].correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
  };

  // Next question
  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(idx => idx + 1);
      setSelected(null);
      setShowFeedback(false);
      setIsCorrect(null);
    } else {
      // Session complete
      setShowFeedback(false);
      setIsCorrect(null);
      setSelected(null);
    }
  };

  // If no questions, show setup
  if (questions.length === 0) {
    return (
      <div className="practice-page animate-fade-in">
        <div className="container" style={{ maxWidth: 480, margin: '0 auto' }}>
          <div className="section-header">
            <h1 className="section-title">Practice Mode</h1>
            <p className="section-subtitle">Select an HSK level to start practicing.</p>
          </div>
          <div className="tabs-container" style={{ justifyContent: 'center' }}>
            <nav className="tabs-nav" aria-label="Tabs">
              {hskLevels.map(level => (
                <button
                  key={level}
                  onClick={() => startSession(level)}
                  className={`tab-button ${activeLevel === level ? 'tab-button--active' : ''}`}
                >
                  HSK {level}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="practice-page animate-fade-in">
      <div className="container" style={{ maxWidth: 480, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>HSK {activeLevel}</span>
          <span style={{ fontSize: '1rem', color: '#6b7280' }}>Question {currentIndex + 1} of {questions.length}</span>
        </div>
        <div className="progress-bar-container" style={{ marginBottom: '2rem' }}>
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        {/* Question */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '4rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.05em' }}>{q.word.char}</div>
          <div style={{ fontSize: '1.25rem', color: '#3b82f6', marginBottom: '0.5rem' }}>{q.word.pinyin}</div>
        </div>
        {/* Answer Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          {q.options.map(option => (
            <button
              key={option}
              className={`button quiz-option-button${selected === option ? ' selected' : ''}${showFeedback ? (option === q.correctAnswer ? ' button--success' : (option === selected ? ' button--danger' : '')) : ''}`}
              style={{ fontSize: '1.1rem', padding: '1rem', borderWidth: 2, borderColor: selected === option ? '#3b82f6' : 'transparent' }}
              disabled={!!showFeedback}
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
        {/* Action Bar */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          {!showFeedback ? (
            <button
              className="button button--primary"
              style={{ minWidth: 180, fontSize: '1.1rem', padding: '0.75rem 2rem' }}
              disabled={!selected}
              onClick={handleCheck}
            >
              Check Answer
            </button>
          ) : (
            <button
              className="button button--primary"
              style={{ minWidth: 180, fontSize: '1.1rem', padding: '0.75rem 2rem' }}
              onClick={handleNext}
            >
              {currentIndex + 1 < questions.length ? 'Next Question' : 'Finish'}
            </button>
          )}
        </div>
        {/* Feedback Section */}
        {showFeedback && (
          <div className="quiz-feedback" style={{ marginTop: 0 }}>
            <p style={{ fontWeight: 600, fontSize: '1.1rem', color: isCorrect ? '#22c55e' : '#ef4444' }}>
              {isCorrect ? 'Correct!' : 'Incorrect.'}
            </p>
            <div style={{ color: '#374151', fontSize: '1rem', marginBottom: '0.5rem' }}>
              {isCorrect ? 'Great job!' : `The correct answer is: ${q.correctAnswer}`}
            </div>
            <div style={{ color: '#6b7280', fontSize: '0.95rem' }}>{q.word.grammar}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MinimalPracticePage; 