import React, { useState, useMemo, useEffect } from 'react';
import { Lesson } from '../data/lessons';

interface LessonCardProps {
    title: string;
    description: string;
    onClick: () => void;
    hskLevel: number;
    lessonNumber: number;
    totalLessons: number;
}

const LessonCard: React.FC<LessonCardProps> = ({ title, description, onClick, hskLevel, lessonNumber, totalLessons }) => {
    return (
      <div
        onClick={onClick}
        className="lesson-card"
        tabIndex={0}
        role="button"
        aria-label={`Open lesson: ${title}`}
      >
        <div className="lesson-card__badge-container">
          <span className={`badge ${'level-' + hskLevel}`}>HSK {hskLevel}</span>
          <span className={`badge badge--mono ${'level-' + hskLevel}`}>{lessonNumber}/{totalLessons}</span>
        </div>
        <div className="lesson-card__content">
          <h3 className="lesson-card__title">{title}</h3>
          <p className="lesson-card__description">{description}</p>
          <div className="lesson-card__footer">
            <button className="lesson-card__button" onClick={(e) => { e.stopPropagation(); onClick(); }}>
              View Lesson
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
};


interface LessonsPageProps {
  lessons: Lesson[];
  onLessonSelect: (lessonId: string) => void;
}

const LessonsPage: React.FC<LessonsPageProps> = ({ lessons, onLessonSelect }) => {
    const [selectedLevel, setSelectedLevel] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const LESSONS_PER_PAGE = 8;

    const hskLevels = useMemo(() => Array.from(new Set(lessons.map(l => l.hskLevel))).sort(), [lessons]);
    
    const filteredLessons = useMemo(() => lessons.filter(l => l.hskLevel === selectedLevel), [lessons, selectedLevel]);
    const totalPages = Math.ceil(filteredLessons.length / LESSONS_PER_PAGE);
    const paginatedLessons = filteredLessons.slice((currentPage - 1) * LESSONS_PER_PAGE, currentPage * LESSONS_PER_PAGE);

    const handleLevelSelect = (level: number) => {
        setSelectedLevel(level);
        setCurrentPage(1);
    };

    return (
        <div className="lessons-page animate-fade-in">
            <div className="container">
                <div className="section-header">
                    <h1 className="section-title">Chinese Lessons</h1>
                    <p className="section-subtitle">Explore structured lessons across all HSK levels to improve your Mandarin skills.</p>
                </div>
                
                <div className="filter-controls">
                    <div className="filter-group">
                        <label htmlFor="level-filter">HSK Level:</label>
                        <div className="tabs-container">
                            <nav className="tabs-nav" aria-label="HSK Level Tabs">
                                {hskLevels.map(level => (
                                    <button
                                        key={level}
                                        onClick={() => handleLevelSelect(level)}
                                        className={`tab-button ${selectedLevel === level ? 'tab-button--active' : ''}`}
                                        aria-selected={selectedLevel === level}
                                        role="tab"
                                    >
                                        HSK {level}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
                
                <div className="lessons-grid">
                    {paginatedLessons.length === 0 ? (
                        <div className="no-lessons-message">
                            <h3>No lessons available</h3>
                            <p>There are no lessons for HSK {selectedLevel} yet. Please check back later or select a different level.</p>
                        </div>
                    ) : (
                        paginatedLessons.map((lesson, idx) => (
                            <LessonCard
                                key={lesson.id}
                                title={lesson.title}
                                description={lesson.description}
                                onClick={() => onLessonSelect(lesson.id)}
                                hskLevel={lesson.hskLevel}
                                lessonNumber={(currentPage - 1) * LESSONS_PER_PAGE + idx + 1}
                                totalLessons={filteredLessons.length}
                            />
                        ))
                    )}
                </div>
                
                {totalPages > 1 && (
                    <div className="pagination-controls">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="button button--secondary"
                            aria-label="Previous page"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6"/>
                            </svg>
                            Previous
                        </button>
                        
                        <div className="pagination-info">
                            <span>Page {currentPage} of {totalPages}</span>
                            <span className="pagination-summary">Showing {(currentPage - 1) * LESSONS_PER_PAGE + 1}-{Math.min(currentPage * LESSONS_PER_PAGE, filteredLessons.length)} of {filteredLessons.length} lessons</span>
                        </div>
                        
                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="button button--secondary"
                            aria-label="Next page"
                        >
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6"/>
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LessonsPage;