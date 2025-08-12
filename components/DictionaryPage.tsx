import React, { useState, useMemo, useEffect } from 'react';
import { vocabData } from '../data/vocab';
import { Word } from '../types';
import VocabCard from './VocabCard';

// Helper function to remove diacritics from pinyin for easier searching
const normalizePinyin = (pinyin: string) => {
  return pinyin.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ü/g, 'u');
};

const allWordsWithLevel = Object.entries(vocabData).flatMap(([level, words]) =>
  words.map(word => ({ ...word, hskLevel: Number(level) }))
);

// Get word of the day based on current date
const getWordOfTheDay = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % allWordsWithLevel.length;
  return allWordsWithLevel[index];
};

interface DictionaryPageProps {
  onWordSelect: (word: Word) => void;
}

const DictionaryPage: React.FC<DictionaryPageProps> = ({ onWordSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>('all');
  const [sortBy, setSortBy] = useState<'alphabetical' | 'level' | 'frequency'>('alphabetical');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const CARDS_PER_PAGE = viewMode === 'grid' ? 20 : 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [wordOfTheDay] = useState(() => getWordOfTheDay());
  const [showWordOfDay, setShowWordOfDay] = useState(true); // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('dictionary-favorites');
    if (saved) {
      setFavorites(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save favorites to localStorage
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleFavorite = (word: Word): void => {
    const newFavorites = new Set(favorites);
    const key = `${word.char}-${(word as any).hskLevel}`;
    if (newFavorites.has(key)) {
      newFavorites.delete(key);
    } else {
      newFavorites.add(key);
    }
    setFavorites(newFavorites);
    localStorage.setItem('dictionary-favorites', JSON.stringify([...newFavorites]));
  };

  // Enhanced search and filtering logic
  const filteredWords = useMemo(() => {
    let words = allWordsWithLevel;
    
    // Filter by HSK level
    if (selectedLevel !== 'all') {
      words = words.filter(word => word.hskLevel === selectedLevel);
    }
    
    // Filter by search term
    const lowercasedTerm = searchTerm.toLowerCase().trim();
    if (lowercasedTerm) {
      const searchTerms = lowercasedTerm.split(/\s+/).filter(Boolean);
      words = words.filter(word =>
        searchTerms.some(term =>
          word.char.includes(term) ||
          normalizePinyin(word.pinyin).toLowerCase().includes(term) ||
          word.meaning.toLowerCase().includes(term) ||
          (word.examples && word.examples.some(ex => 
            ex.sentence.toLowerCase().includes(term) ||
            ex.translation.toLowerCase().includes(term)
          ))
        )
      );
    }
    
    // Sort words
    switch (sortBy) {
      case 'level':
        words.sort((a, b) => a.hskLevel - b.hskLevel || a.char.localeCompare(b.char));
        break;
      case 'frequency':
        // Simulate frequency sorting (lower HSK levels are more frequent)
        words.sort((a, b) => a.hskLevel - b.hskLevel);
        break;
      case 'alphabetical':
      default:
        words.sort((a, b) => a.char.localeCompare(b.char));
        break;
    }
    
    return words;
  }, [searchTerm, selectedLevel, sortBy]);

  const totalPages = Math.ceil(filteredWords.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const paginatedWords = filteredWords.slice(startIndex, startIndex + CARDS_PER_PAGE);

  const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const handlePrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedLevel, sortBy]);

  // Statistics
  const stats = useMemo(() => {
    const totalWords = allWordsWithLevel.length;
    const levelCounts = Array.from({length: 6}, (_, i) => {
      const level = i + 1;
      return allWordsWithLevel.filter(w => w.hskLevel === level).length;
    });
    return { totalWords, levelCounts };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const clearSearch = () => {
    setSearchTerm('');
    setSelectedLevel('all');
    setSortBy('alphabetical');
  };

  return (
    <div className="dictionary-page animate-fade-in">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Dictionary</h1>
          <p className="section-subtitle">Search for any word across all HSK levels.</p>
        </div>
        <div className="search-bar-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by character, pinyin, or meaning..."
              value={searchTerm}
              onChange={e => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="search-input"
            />
            <div className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>
        </div>

        <div className="filter-controls">
          <div className="filter-group">
            <label htmlFor="level-filter">HSK Level:</label>
            <select 
              id="level-filter"
              value={selectedLevel === 'all' ? 'all' : selectedLevel.toString()} 
              onChange={e => setSelectedLevel(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="select-dropdown"
            >
              <option value="all">All Levels</option>
              {[1, 2, 3, 4, 5, 6].map(level => (
                <option key={level} value={level.toString()}>
                  HSK {level} ({stats.levelCounts[level-1]} words)
                </option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="sort-by">Sort By:</label>
            <select 
              id="sort-by"
              value={sortBy} 
              onChange={e => setSortBy(e.target.value as 'alphabetical' | 'level' | 'frequency')}
              className="select-dropdown"
            >
              <option value="alphabetical">Alphabetical</option>
              <option value="level">HSK Level</option>
              <option value="frequency">Frequency</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="view-mode">View:</label>
            <div className="view-toggle">
              <button 
                className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </button>
              <button 
                className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
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
        
        {showWordOfDay && !searchTerm && selectedLevel === 'all' && (
          <div className="word-of-day-container">
            <div className="word-of-day-header">
              <h3>Word of the Day</h3>
              <button className="close-btn" onClick={() => setShowWordOfDay(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <VocabCard 
              word={wordOfTheDay} 
              onSelect={onWordSelect} 
              hskLevel={wordOfTheDay.hskLevel} 
              wordNumber={1} 
              totalWords={1} 
              isFeatured={true}
            />
          </div>
        )}

        {searchTerm.trim() ? (
          filteredWords.length > 0 ? (
            <>
              <div className="vocab-grid">
                {paginatedWords.map((word, index) => (
                  <VocabCard
                    key={`${word.char}-${startIndex + index}`}
                    word={word}
                    onSelect={onWordSelect}
                    hskLevel={word.hskLevel}
                    wordNumber={startIndex + index + 1}
                    totalWords={filteredWords.length}
                  />
                ))}
              </div>
              {totalPages > 1 && (
                <div className="pagination-controls">
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
              )}
            </>
          ) : (
            <div className="no-results-message">
              <h3 className="no-results-title">No Results Found</h3>
              <p className="no-results-subtitle">Try a different search term.</p>
            </div>
          )
        ) : (
          <div className="no-results-message">
            <h3 className="no-results-title">Start Searching</h3>
            <p className="no-results-subtitle">Type in the box above to find a word.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DictionaryPage;