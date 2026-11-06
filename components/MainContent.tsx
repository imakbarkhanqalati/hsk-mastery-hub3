import React, { useState, useEffect, useMemo } from 'react';
import { vocabData } from '../data/vocab';
import { Word } from '../types';
import VocabCard from './VocabCard';
import { UserVocabProgress } from '../utils/progress';

interface MainContentProps {
  onWordSelect: (word: Word) => void;
  initialHSKLevel?: number;
  vocabProgress: UserVocabProgress;
  onToggleMastered: (char: string) => void;
  onToggleBookmark: (char: string) => void;
}

type FilterStatus = 'all' | 'unmastered' | 'mastered' | 'bookmarked';

const MainContent: React.FC<MainContentProps> = ({
  onWordSelect,
  initialHSKLevel,
  vocabProgress,
  onToggleMastered,
  onToggleBookmark,
}) => {
  const [activeLevel, setActiveLevel] = useState<number>(initialHSKLevel || 1);
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('all');
  const [quickFilter, setQuickFilter] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const hskLevels = useMemo(() => Object.keys(vocabData).map(Number).sort((a, b) => a - b), []);

  useEffect(() => {
    if (initialHSKLevel) {
      setActiveLevel(initialHSKLevel);
    }
  }, [initialHSKLevel]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeLevel, statusFilter, quickFilter]);

  const wordsForLevel = useMemo(() => vocabData[activeLevel] || [], [activeLevel]);

  const masteredInLevelCount = useMemo(
    () => wordsForLevel.filter(w => vocabProgress.masteredWords.includes(w.char)).length,
    [wordsForLevel, vocabProgress.masteredWords]
  );

  const filteredWords = useMemo(() => {
    let list = wordsForLevel;
    if (statusFilter === 'mastered') {
      list = list.filter(w => vocabProgress.masteredWords.includes(w.char));
    } else if (statusFilter === 'unmastered') {
      list = list.filter(w => !vocabProgress.masteredWords.includes(w.char));
    } else if (statusFilter === 'bookmarked') {
      list = list.filter(w => vocabProgress.bookmarkedWords.includes(w.char));
    }

    const q = quickFilter.trim().toLowerCase();
    if (q) {
      list = list.filter(
        w =>
          w.char.includes(q) ||
          w.pinyin.toLowerCase().includes(q) ||
          w.meaning.toLowerCase().includes(q) ||
          w.grammar.toLowerCase().includes(q)
      );
    }
    return list;
  }, [wordsForLevel, statusFilter, quickFilter, vocabProgress]);

  const CARDS_PER_PAGE = 20;
  const totalPages = Math.ceil(filteredWords.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const paginatedWords = filteredWords.slice(startIndex, startIndex + CARDS_PER_PAGE);

  const progressPct =
    wordsForLevel.length > 0 ? Math.round((masteredInLevelCount / wordsForLevel.length) * 100) : 0;

  return (
    <main className="main-content-page animate-fade-in">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">HSK Vocabulary Lexicon</h1>
          <p className="section-subtitle">
            Click any card to practice pronunciation, view syllable tone contours, or trace character strokes.
          </p>
        </div>

        {/* HSK Level Selector Tabs */}
        <div className="tabs-container">
          <nav className="tabs-nav" aria-label="HSK Levels">
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

        {/* Level Mastery Bar & Filter Toolbar */}
        <div className="learn-toolbar-card">
          <div className="learn-toolbar__progress">
            <div className="learn-toolbar__progress-labels">
              <span className="learn-toolbar__level-title">HSK Level {activeLevel} Mastery</span>
              <span className="learn-toolbar__level-count tabular-nums">
                {masteredInLevelCount} / {wordsForLevel.length} Mastered ({progressPct}%)
              </span>
            </div>
            <div className="level-matrix__progress-track">
              <div className="level-matrix__progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
          </div>

          <div className="learn-toolbar__controls">
            <div className="segmented-control" role="group" aria-label="Filter vocabulary status">
              <button
                type="button"
                onClick={() => setStatusFilter('all')}
                className={`segmented-control__btn ${statusFilter === 'all' ? 'segmented-control__btn--active' : ''}`}
              >
                All ({wordsForLevel.length})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('unmastered')}
                className={`segmented-control__btn ${statusFilter === 'unmastered' ? 'segmented-control__btn--active' : ''}`}
              >
                To Study ({wordsForLevel.length - masteredInLevelCount})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('mastered')}
                className={`segmented-control__btn ${statusFilter === 'mastered' ? 'segmented-control__btn--active' : ''}`}
              >
                Mastered ({masteredInLevelCount})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('bookmarked')}
                className={`segmented-control__btn ${statusFilter === 'bookmarked' ? 'segmented-control__btn--active' : ''}`}
              >
                Bookmarked
              </button>
            </div>

            <div className="learn-toolbar__search">
              <input
                type="text"
                value={quickFilter}
                onChange={e => setQuickFilter(e.target.value)}
                placeholder={`Filter HSK ${activeLevel} words...`}
                className="learn-toolbar__search-input"
              />
            </div>
          </div>
        </div>

        <div className="vocab-grid">
          {paginatedWords.map((word, index) => (
            <VocabCard
              key={`${word.char}-${startIndex + index}`}
              word={word}
              onSelect={onWordSelect}
              hskLevel={activeLevel}
              wordNumber={startIndex + index + 1}
              totalWords={filteredWords.length}
              isMastered={vocabProgress.masteredWords.includes(word.char)}
              isBookmarked={vocabProgress.bookmarkedWords.includes(word.char)}
              onToggleMastered={onToggleMastered}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </div>

        {filteredWords.length === 0 && (
          <div className="no-results-message">
            <h3 className="no-results-title">No Matching Words</h3>
            <p className="no-results-subtitle">
              Try clearing your filter or switching to a different status tab.
            </p>
            <button
              type="button"
              onClick={() => {
                setStatusFilter('all');
                setQuickFilter('');
              }}
              className="button button--outline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {totalPages > 1 && (
          <div className="pagination-controls animate-fade-in">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="button button--secondary"
            >
              Previous
            </button>
            <span className="pagination-info tabular-nums">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="button button--secondary"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;