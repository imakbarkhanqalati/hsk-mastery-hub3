import React from 'react';
import { Word } from '../types';
import { speakChineseText } from '../utils/progress';

interface VocabCardProps {
  word: Word;
  onSelect: (word: Word) => void;
  hskLevel?: number;
  wordNumber?: number;
  totalWords?: number;
  isFeatured?: boolean;
  isMastered?: boolean;
  isBookmarked?: boolean;
  onToggleMastered?: (char: string) => void;
  onToggleBookmark?: (char: string) => void;
}

const VocabCard: React.FC<VocabCardProps> = ({
  word,
  onSelect,
  hskLevel,
  wordNumber,
  totalWords,
  isFeatured = false,
  isMastered = false,
  isBookmarked = false,
  onToggleMastered,
  onToggleBookmark,
}) => {
  const handleAudioClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    speakChineseText(word.char, 0.85);
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggleBookmark) {
      onToggleBookmark(word.char);
    }
  };

  const handleMasteredClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggleMastered) {
      onToggleMastered(word.char);
    }
  };

  return (
    <article
      onClick={() => onSelect(word)}
      className={`vocab-card ${isFeatured ? 'vocab-card--featured' : ''} ${isMastered ? 'vocab-card--mastered' : ''}`}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(word);
        }
      }}
      aria-label={`${word.char}, ${word.pinyin}, meaning ${word.meaning}`}
    >
      <div className="vocab-card__top-bar">
        <div className="vocab-card__meta">
          {hskLevel ? <span>HSK {hskLevel}</span> : null}
          {hskLevel && wordNumber && totalWords ? <span aria-hidden="true">·</span> : null}
          {wordNumber && totalWords ? (
            <span className="vocab-card__index">
              #{String(wordNumber).padStart(2, '0')}/{totalWords}
            </span>
          ) : null}
          {word.grammar ? (
            <>
              <span aria-hidden="true">·</span>
              <span>{word.grammar}</span>
            </>
          ) : null}
        </div>

        <div className="vocab-card__quick-actions">
          <button
            type="button"
            onClick={handleAudioClick}
            className="vocab-card__icon-btn"
            title={`Listen to ${word.char}`}
            aria-label={`Listen to ${word.char}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </button>

          {onToggleBookmark && (
            <button
              type="button"
              onClick={handleBookmarkClick}
              className={`vocab-card__icon-btn ${isBookmarked ? 'vocab-card__icon-btn--bookmarked' : ''}`}
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark word'}
              aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark word'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
              </svg>
            </button>
          )}

          {onToggleMastered && (
            <button
              type="button"
              onClick={handleMasteredClick}
              className={`vocab-card__icon-btn ${isMastered ? 'vocab-card__icon-btn--mastered' : ''}`}
              title={isMastered ? 'Marked as mastered' : 'Mark as mastered'}
              aria-label={isMastered ? 'Marked as mastered' : 'Mark as mastered'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="vocab-card__content">
        <h3 className="vocab-card__char">{word.char}</h3>
        <p className="vocab-card__pinyin">{word.pinyin}</p>
        <p className="vocab-card__meaning">{word.meaning}</p>
      </div>

      <div className="vocab-card__footer">
        <span className="vocab-card__cta-hint">Inspect &amp; Practice Tones →</span>
        {isMastered && <span className="vocab-card__status-text">✓ Mastered</span>}
      </div>
    </article>
  );
};

export default VocabCard;
