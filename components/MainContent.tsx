
import React, { useState, useEffect } from 'react';
import { vocabData } from '../data/vocab';
import { Word } from '../types';
import VocabCard from './VocabCard';

interface MainContentProps {
  onWordSelect: (word: Word) => void;
  initialHSKLevel?: number;
}

const MainContent: React.FC<MainContentProps> = ({ onWordSelect, initialHSKLevel }) => {
  const [activeLevel, setActiveLevel] = useState<number>(initialHSKLevel || 1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const hskLevels = Object.keys(vocabData).map(Number);
  
  useEffect(() => {
    setCurrentPage(1);
  }, [activeLevel]);

  const wordsForLevel = vocabData[activeLevel] || [];
  
  const CARDS_PER_PAGE = 20;
  const totalPages = Math.ceil(wordsForLevel.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const paginatedWords = wordsForLevel.slice(startIndex, startIndex + CARDS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  
  const renderPaginationControls = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="pagination-controls animate-fade-in">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="button button--secondary"
        >
          Previous
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="button button--secondary"
        >
          Next
        </button>
      </div>
    );
  };


  return (
    <main className="main-content-page">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Learn Vocabulary</h1>
          <p className="section-subtitle">Select an HSK level to start learning.</p>
        </div>

        <div className="tabs-container">
          <nav className="tabs-nav" aria-label="Tabs">
              {hskLevels.map(level => (
                <button
                  key={level}
                  onClick={() => setActiveLevel(level)}
                  className={`tab-button ${activeLevel === level ? 'tab-button--active' : ''}`}
                >
                  HSK {level}
                </button>
              ))}
          </nav>
        </div>

        <div className="vocab-grid">
          {paginatedWords.map((word, index) => (
            <VocabCard 
              key={`${word.char}-${startIndex + index}`} 
              word={word} 
              onSelect={onWordSelect}
              hskLevel={activeLevel}
              wordNumber={startIndex + index + 1}
              totalWords={wordsForLevel.length}
            />
          ))}
          {wordsForLevel.length === 0 && (
            <span className="no-vocab-message">
              Vocabulary for HSK {activeLevel} coming soon!
            </span>
          )}
        </div>
        
        {renderPaginationControls()}
      </div>
    </main>
  );
};

export default MainContent;