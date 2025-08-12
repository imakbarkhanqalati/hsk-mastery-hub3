
import React from 'react';
import { Word } from '../types';

interface WordDetailModalProps {
  word: Word | null;
  onClose: () => void;
}

const WordDetailModal: React.FC<WordDetailModalProps> = ({ word, onClose }) => {
  if (!word) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content word-detail-modal" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-button">&times;</button>
        <div className="word-detail-modal__header">
          <h2 className="word-detail-modal__char">{word.char}</h2>
          <p className="word-detail-modal__pinyin">{word.pinyin}</p>
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
                <span className="word-detail-item__label">Examples</span>
                <ul className="word-detail-item__examples">
                  {word.examples.map((ex, idx) => (
                    <li key={idx} className="word-detail-item__example">
                      <span className="word-detail-item__example-sentence">{ex.sentence}</span>
                      <span className="word-detail-item__example-translation">{ex.translation}</span>
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
