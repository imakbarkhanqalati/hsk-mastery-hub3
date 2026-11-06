import React, { useState, useMemo } from 'react';
import { Lesson } from '../data/lessons';

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
  totalLessons,
}) => {
  const dialogueCount = lesson.dialogues ? lesson.dialogues.length : 1;
  const grammarCount = lesson.grammarNotes ? lesson.grammarNotes.length : 1;
  const vocabCount = lesson.vocabularyExplanation.length;
  const exerciseCount = lesson.exercises ? lesson.exercises.length : 0;

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
      <div className="vocab-card__top-bar">
        <div className="vocab-card__meta">
          <span>HSK {lesson.hskLevel}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">
            Unit {String(lessonNumber).padStart(2, '0')} of {String(totalLessons).padStart(2, '0')}
          </span>
          {lesson.chineseTitle && (
            <>
              <span aria-hidden="true">·</span>
              <span className="font-noto-sc">{lesson.chineseTitle}</span>
            </>
          )}
        </div>
      </div>

      <div className="lesson-card__content">
        <h3 className="lesson-card__title">{lesson.title}</h3>
        <p className="lesson-card__description">{lesson.description}</p>

        {lesson.objectives && lesson.objectives.length > 0 && (
          <ul className="lesson-card__objectives">
            {lesson.objectives.slice(0, 3).map((obj, idx) => (
              <li key={idx}>{obj}</li>
            ))}
          </ul>
        )}

        <div className="lesson-card__footer">
          <div className="vocab-card__meta">
            <span className="tabular-nums">{dialogueCount} {dialogueCount === 1 ? 'Dialogue' : 'Dialogues'}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{vocabCount} Words</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{grammarCount} Grammar Notes</span>
            {exerciseCount > 0 && (
              <>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{exerciseCount} Exercises</span>
              </>
            )}
          </div>
          <button
            type="button"
            className="lesson-card__button"
            onClick={e => {
              e.stopPropagation();
              onClick();
            }}
          >
            Study Unit →
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

const ALL_HSK_LEVELS = [1, 2, 3, 4, 5, 6] as const;

const LessonsPage: React.FC<LessonsPageProps> = ({ lessons, onLessonSelect }) => {
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
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
    () => lessons.filter(l => l.hskLevel === selectedLevel),
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
                HSK {selectedLevel} textbook units will be added as you upload the corresponding curriculum materials. Select HSK 1 to study the active units from <em>Mastering Chinese: Elementary 1 (会通汉语 精编版·初级1)</em>.
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