import React, { useState, useMemo, useEffect } from 'react';
import { vocabData } from '../data/vocab';
import { Word } from '../types';
import VocabCard from './VocabCard';
import { UserVocabProgress, speakChineseText } from '../utils/progress';

const normalizePinyin = (pinyin: string) => {
  return pinyin.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ü/g, 'u');
};

const allWordsWithLevel = Object.entries(vocabData).flatMap(([level, words]) =>
  words.map(word => ({ ...word, hskLevel: Number(level) }))
);

interface DictionaryPageProps {
  onWordSelect: (word: Word) => void;
  vocabProgress: UserVocabProgress;
  onToggleMastered: (char: string) => void;
  onToggleBookmark: (char: string) => void;
}

const DictionaryPage: React.FC<DictionaryPageProps> = ({
  onWordSelect,
  vocabProgress,
  onToggleMastered,
  onToggleBookmark,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>('all');
  const [collectionFilter, setCollectionFilter] = useState<'all' | 'bookmarked' | 'mastered'>('all');
  const [sortBy, setSortBy] = useState<'level' | 'alphabetical' | 'frequency'>('level');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const CARDS_PER_PAGE = viewMode === 'grid' ? 20 : 25;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredWords = useMemo(() => {
    let words = [...allWordsWithLevel];

    if (selectedLevel !== 'all') {
      words = words.filter(word => word.hskLevel === selectedLevel);
    }

    if (collectionFilter === 'bookmarked') {
      words = words.filter(word => vocabProgress.bookmarkedWords.includes(word.char));
    } else if (collectionFilter === 'mastered') {
      words = words.filter(word => vocabProgress.masteredWords.includes(word.char));
    }

    const lowercasedTerm = searchTerm.toLowerCase().trim();
    if (lowercasedTerm) {
      const searchTerms = lowercasedTerm.split(/\s+/).filter(Boolean);
      words = words.filter(word =>
        searchTerms.some(
          term =>
            word.char.includes(term) ||
            normalizePinyin(word.pinyin).toLowerCase().includes(term) ||
            word.pinyin.toLowerCase().includes(term) ||
            word.meaning.toLowerCase().includes(term) ||
            word.grammar.toLowerCase().includes(term) ||
            (word.examples &&
              word.examples.some(
                ex =>
                  ex.sentence.toLowerCase().includes(term) ||
                  ex.translation.toLowerCase().includes(term)
              ))
        )
      );
    }

    switch (sortBy) {
      case 'level':
        words.sort((a, b) => a.hskLevel - b.hskLevel || a.char.localeCompare(b.char));
        break;
      case 'frequency':
        words.sort((a, b) => a.hskLevel - b.hskLevel);
        break;
      case 'alphabetical':
      default:
        words.sort((a, b) => normalizePinyin(a.pinyin).localeCompare(normalizePinyin(b.pinyin)));
        break;
    }

    return words;
  }, [searchTerm, selectedLevel, collectionFilter, sortBy, vocabProgress]);

  const totalPages = Math.ceil(filteredWords.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const paginatedWords = filteredWords.slice(startIndex, startIndex + CARDS_PER_PAGE);

  const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const handlePrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedLevel, collectionFilter, sortBy, viewMode]);

  const stats = useMemo(() => {
    const totalWords = allWordsWithLevel.length;
    const levelCounts = Array.from({ length: 6 }, (_, i) => {
      const level = i + 1;
      return allWordsWithLevel.filter(w => w.hskLevel === level).length;
    });
    return { totalWords, levelCounts };
  }, []);

  return (
    <div className="dictionary-page animate-fade-in">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Mandarin-English HSK Dictionary</h1>
          <p className="section-subtitle">
            Search across {stats.totalWords} HSK 1–6 entries by Hanzi character, tone-free Pinyin (e.g. &ldquo;nihao&rdquo;), or English definition.
          </p>
        </div>

        <div className="search-bar-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by character (你好), pinyin (nihao / nǐ hǎo), or English meaning..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm ? (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="search-clear-btn"
                aria-label="Clear search"
              >
                Clear
              </button>
            ) : (
              <div className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            )}
          </div>
        </div>

        <div className="filter-controls">
          <div className="filter-group">
            <label htmlFor="level-filter">Level:</label>
            <select
              id="level-filter"
              value={selectedLevel === 'all' ? 'all' : selectedLevel.toString()}
              onChange={e => setSelectedLevel(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="select-dropdown"
            >
              <option value="all">All HSK Levels ({stats.totalWords})</option>
              {[1, 2, 3, 4, 5, 6].map(level => (
                <option key={level} value={level.toString()}>
                  HSK {level} ({stats.levelCounts[level - 1]} words)
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Collection:</label>
            <div className="segmented-control">
              <button
                type="button"
                onClick={() => setCollectionFilter('all')}
                className={`segmented-control__btn ${collectionFilter === 'all' ? 'segmented-control__btn--active' : ''}`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setCollectionFilter('bookmarked')}
                className={`segmented-control__btn ${collectionFilter === 'bookmarked' ? 'segmented-control__btn--active' : ''}`}
              >
                Bookmarked ({vocabProgress.bookmarkedWords.length})
              </button>
              <button
                type="button"
                onClick={() => setCollectionFilter('mastered')}
                className={`segmented-control__btn ${collectionFilter === 'mastered' ? 'segmented-control__btn--active' : ''}`}
              >
                Mastered ({vocabProgress.masteredWords.length})
              </button>
            </div>
          </div>

          <div className="filter-group">
            <label htmlFor="sort-by">Sort:</label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={e => setSortBy(e.target.value as 'alphabetical' | 'level' | 'frequency')}
              className="select-dropdown"
            >
              <option value="level">HSK Level (1 → 6)</option>
              <option value="alphabetical">Pinyin (A → Z)</option>
              <option value="frequency">Core Frequency</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Layout:</label>
            <div className="view-toggle">
              <button
                type="button"
                className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Grid View"
                aria-label="Grid View"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </button>
              <button
                type="button"
                className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                title="Tabular List View"
                aria-label="Tabular List View"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="dictionary-results-meta tabular-nums">
          <span>
            Showing {filteredWords.length > 0 ? startIndex + 1 : 0}–
            {Math.min(startIndex + CARDS_PER_PAGE, filteredWords.length)} of {filteredWords.length} entries
          </span>
        </div>

        {filteredWords.length > 0 ? (
          <>
            {viewMode === 'grid' ? (
              <div className="vocab-grid">
                {paginatedWords.map((word, index) => (
                  <VocabCard
                    key={`${word.char}-${startIndex + index}`}
                    word={word}
                    onSelect={onWordSelect}
                    hskLevel={word.hskLevel}
                    wordNumber={startIndex + index + 1}
                    totalWords={filteredWords.length}
                    isMastered={vocabProgress.masteredWords.includes(word.char)}
                    isBookmarked={vocabProgress.bookmarkedWords.includes(word.char)}
                    onToggleMastered={onToggleMastered}
                    onToggleBookmark={onToggleBookmark}
                  />
                ))}
              </div>
            ) : (
              <div className="dictionary-table-wrapper">
                <table className="dictionary-table">
                  <thead>
                    <tr>
                      <th>Character</th>
                      <th>Pinyin</th>
                      <th>Meaning</th>
                      <th>Part of Speech</th>
                      <th>Level</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedWords.map((word, index) => {
                      const isMastered = vocabProgress.masteredWords.includes(word.char);
                      const isBookmarked = vocabProgress.bookmarkedWords.includes(word.char);
                      return (
                        <tr
                          key={`${word.char}-${startIndex + index}`}
                          onClick={() => onWordSelect(word)}
                          className="dictionary-table__row"
                        >
                          <td className="dictionary-table__char font-noto-sc">{word.char}</td>
                          <td className="dictionary-table__pinyin">{word.pinyin}</td>
                          <td className="dictionary-table__meaning">{word.meaning}</td>
                          <td className="dictionary-table__grammar">{word.grammar}</td>
                          <td className="dictionary-table__level tabular-nums">HSK {word.hskLevel}</td>
                          <td className="dictionary-table__actions" onClick={e => e.stopPropagation()}>
                            <button
                              type="button"
                              onClick={() => speakChineseText(word.char, 0.85)}
                              className="vocab-card__icon-btn"
                              title="Listen"
                              aria-label="Listen"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                              </svg>
                            </button>
                            <button
                              type="button"
                              onClick={() => onToggleBookmark(word.char)}
                              className={`vocab-card__icon-btn ${isBookmarked ? 'vocab-card__icon-btn--bookmarked' : ''}`}
                              title="Bookmark"
                              aria-label="Bookmark"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                              </svg>
                            </button>
                            <button
                              type="button"
                              onClick={() => onToggleMastered(word.char)}
                              className={`vocab-card__icon-btn ${isMastered ? 'vocab-card__icon-btn--mastered' : ''}`}
                              title="Mark Mastered"
                              aria-label="Mark Mastered"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {totalPages > 1 && (
              <div className="pagination-controls">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="button button--secondary"
                >
                  Previous
                </button>
                <span className="pagination-info tabular-nums">
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
            )}
          </>
        ) : (
          <div className="no-results-message">
            <h3 className="no-results-title">No Matching Dictionary Entries</h3>
            <p className="no-results-subtitle">
              Try searching with tone-free pinyin, English keywords, or resetting your active filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setSelectedLevel('all');
                setCollectionFilter('all');
              }}
              className="button button--outline"
            >
              Reset Dictionary Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DictionaryPage;