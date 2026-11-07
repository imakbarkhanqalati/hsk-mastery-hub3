import React, { useState, useMemo } from 'react';
import { Lesson } from '../data/lessons';
import { getLessonCharacters } from '../utils/lessonCharacters';

interface LessonCardProps {
  lesson: Lesson;
  onClick: () => void;
  lessonNumber: number;
  totalLessons: number;
}

const LessonCard: React.FC<LessonCardProps> = ({
  lesson,
  onClick,
  lessonNumber,
}) => {
  const dialogueCount = lesson.dialogues ? lesson.dialogues.length : 1;
  const vocabCount = lesson.vocabularyExplanation.length;
  const unitCharacters = useMemo(() => getLessonCharacters(lesson), [lesson]);

  return (
    <div
      onClick={onClick}
      className="lesson-card"
      tabIndex={0}
      role="button"
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Open lesson: ${lesson.title}`}
    >
      <div className="lesson-card__top">
        <span className="lesson-card__meta tabular-nums">
          HSK {lesson.hskLevel} · Unit {String(lessonNumber).padStart(2, '0')}
        </span>
        {lesson.chineseTitle && (
          <span className="lesson-card__hanzi font-noto-sc">{lesson.chineseTitle}</span>
        )}
      </div>

      <div className="lesson-card__content">
        <h3 className="lesson-card__title">{lesson.title}</h3>
        <p className="lesson-card__description">{lesson.description}</p>

        {unitCharacters.length > 0 && (
          <div className="lesson-card__cast" aria-label="Featured characters in this lesson">
            <div className="lesson-card__cast-avatars">
              {unitCharacters.slice(0, 5).map(char => (
                <img
                  key={char.id}
                  src={char.avatarUrl}
                  alt={`${char.hanziName} (${char.englishName})`}
                  title={`${char.hanziName} (${char.englishName})`}
                  referrerPolicy="no-referrer"
                  className="lesson-card__cast-avatar"
                />
              ))}
            </div>
            <span className="lesson-card__cast-names font-noto-sc">
              {unitCharacters
                .slice(0, 4)
                .map(c => c.hanziName)
                .join(' · ')}
              {unitCharacters.length > 4 ? ` +${unitCharacters.length - 4}` : ''}
            </span>
          </div>
        )}

        <div className="lesson-card__footer">
          <span className="lesson-card__stats tabular-nums">
            {vocabCount} Words · {dialogueCount} {dialogueCount === 1 ? 'Dialogue' : 'Dialogues'}
          </span>
          <span className="lesson-card__cta">
            Study Unit →
          </span>
        </div>
      </div>
    </div>
  );
};

interface LessonsPageProps {
  lessons: Lesson[];
  onLessonSelect: (lessonId: string) => void;
}

const ALL_HSK_LEVELS = [1, 2, 3, 4, 5, 6] as const;

const LessonsPage: React.FC<LessonsPageProps> = ({ lessons, onLessonSelect }) => {
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const LESSONS_PER_PAGE = 8;

  const lessonCountsByLevel = useMemo(() => {
    const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    for (const lesson of lessons) {
      counts[lesson.hskLevel] = (counts[lesson.hskLevel] || 0) + 1;
    }
    return counts;
  }, [lessons]);

  const filteredLessons = useMemo(
    () => (selectedLevel === 0 ? lessons : lessons.filter(l => l.hskLevel === selectedLevel)),
    [lessons, selectedLevel]
  );

  const totalPages = Math.ceil(filteredLessons.length / LESSONS_PER_PAGE);
  const paginatedLessons = filteredLessons.slice(
    (currentPage - 1) * LESSONS_PER_PAGE,
    currentPage * LESSONS_PER_PAGE
  );

  const handleLevelSelect = (level: number) => {
    setSelectedLevel(level);
    setCurrentPage(1);
  };

  return (
    <div className="lessons-page animate-fade-in">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Structured Mandarin Curriculum</h1>
          <p className="section-subtitle">
            Comprehensive textbook units featuring authentic dialogues, reading passages, phonetics &amp; character guides, grammar notes, and interactive self-checks.
          </p>
        </div>

        <div className="filter-controls">
          <div className="filter-group">
            <label htmlFor="level-filter">HSK Level:</label>
            <div className="tabs-container">
              <nav className="tabs-nav" aria-label="HSK Level Tabs">
                <button
                  onClick={() => handleLevelSelect(0)}
                  className={`tab-button ${selectedLevel === 0 ? 'tab-button--active' : ''}`}
                  aria-selected={selectedLevel === 0}
                  role="tab"
                >
                  All Levels ({lessons.length})
                </button>
                {ALL_HSK_LEVELS.map(level => {
                  const count = lessonCountsByLevel[level] || 0;
                  return (
                    <button
                      key={level}
                      onClick={() => handleLevelSelect(level)}
                      className={`tab-button ${selectedLevel === level ? 'tab-button--active' : ''}`}
                      aria-selected={selectedLevel === level}
                      role="tab"
                    >
                      HSK {level} ({count})
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        <div className="lessons-grid">
          {paginatedLessons.length === 0 ? (
            <div className="no-lessons-message">
              <h3>No lessons in HSK {selectedLevel} yet</h3>
              <p>
                HSK {selectedLevel} textbook units will be added as you upload the corresponding curriculum materials. Select <strong>All Levels</strong>, <strong>HSK 1</strong>, or <strong>HSK 2</strong> to study the active units from <em>Mastering Chinese (会通汉语 精编版)</em>.
              </p>
            </div>
          ) : (
            paginatedLessons.map((lesson, idx) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                onClick={() => onLessonSelect(lesson.id)}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Previous
            </button>

            <div className="pagination-info">
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <span className="pagination-summary">
                Showing {(currentPage - 1) * LESSONS_PER_PAGE + 1}-
                {Math.min(currentPage * LESSONS_PER_PAGE, filteredLessons.length)} of{' '}
                {filteredLessons.length} lessons
              </span>
            </div>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="button button--secondary"
              aria-label="Next page"
            >
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonsPage;