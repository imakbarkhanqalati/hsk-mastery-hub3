
import React from 'react';
import { Word } from '../types';

interface VocabCardProps {
  word: Word;
  onSelect: (word: Word) => void;
  hskLevel?: number;
  wordNumber?: number;
  totalWords?: number;
  isFeatured?: boolean;
}

const getLevelColorClass = (level: number) => {
    switch (level) {
        case 1: return 'level-1';
        case 2: return 'level-2';
        case 3: return 'level-3';
        case 4: return 'level-4';
        case 5: return 'level-5';
        case 6: return 'level-6';
        default: return 'level-default';
    }
};

const VocabCard: React.FC<VocabCardProps> = ({ word, onSelect, hskLevel, wordNumber, totalWords, isFeatured = false }) => {
  return (
    <div
      onClick={() => onSelect(word)}
      className={`vocab-card ${isFeatured ? 'vocab-card--featured' : ''}`}
    >
        <div className="vocab-card__badge-container">
            <span className={`badge ${getLevelColorClass(hskLevel || 0)}`}>
                HSK {hskLevel}
            </span>
            <span className={`badge badge--mono ${getLevelColorClass(hskLevel || 0)}`}>
                {wordNumber}/{totalWords}
            </span>
        </div>
      <div className="vocab-card__content">
        <h3 className="vocab-card__char">{word.char}</h3>
        <p className="vocab-card__pinyin">{word.pinyin}</p>
        <p className="vocab-card__meaning">{word.meaning}</p>
        {/* No examples here, only in modal */}
      </div>
    </div>
  );
};

export default VocabCard;
