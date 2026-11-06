import React, { useState, useEffect } from 'react';
import { Lesson, lessons as allLessons } from '../data/lessons';
import VocabCard from './VocabCard';
import { speakChineseText, UserVocabProgress } from '../utils/progress';
import { Word } from '../types';

interface LessonDetailPageProps {
  lesson: Lesson;
  onBack: () => void;
  onWordSelect?: (word: Word) => void;
  vocabProgress?: UserVocabProgress;
  onToggleMastered?: (char: string) => void;
  onToggleBookmark?: (char: string) => void;
  onSelectLesson?: (lessonId: string) => void;
}

type LessonTab = 'dialogue' | 'phonetics' | 'vocabulary' | 'grammar' | 'exercises';

const LessonDetailPage: React.FC<LessonDetailPageProps> = ({
  lesson,
  onBack,
  onWordSelect,
  vocabProgress,
  onToggleMastered,
  onToggleBookmark,
  onSelectLesson,
}) => {
  const [activeTab, setActiveTab] = useState<LessonTab>('dialogue');
  const [showPinyin, setShowPinyin] = useState<boolean>(true);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [revealedQuestions, setRevealedQuestions] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setActiveTab('dialogue');
    setSelectedAnswers({});
    setRevealedQuestions({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lesson.id]);

  const dialogueSections =
    lesson.dialogues && lesson.dialogues.length > 0
      ? lesson.dialogues
      : [
          {
            title: 'Lesson Dialogue',
            context: lesson.content,
            lines: lesson.dialogue,
          },
        ];

  const grammarNotesList =
    lesson.grammarNotes && lesson.grammarNotes.length > 0
      ? lesson.grammarNotes
      : [
          {
            title: lesson.grammarPoint,
            structure: lesson.structure,
            explanation: lesson.explanation,
            examples: lesson.examples,
          },
        ];

  const totalDialogueLines = dialogueSections.reduce((sum, sec) => sum + sec.lines.length, 0);
  const currentLessonIndex = allLessons.findIndex(l => l.id === lesson.id);
  const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson =
    currentLessonIndex >= 0 && currentLessonIndex < allLessons.length - 1
      ? allLessons[currentLessonIndex + 1]
      : null;

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }));
    setRevealedQuestions(prev => ({ ...prev, [questionIndex]: true }));
  };

  const handleResetExercises = () => {
    setSelectedAnswers({});
    setRevealedQuestions({});
  };

  const totalExercises = lesson.exercises ? lesson.exercises.length : 0;
  const answeredCount = Object.keys(revealedQuestions).length;
  const correctCount = lesson.exercises
    ? lesson.exercises.reduce((acc, ex, idx) => {
        return acc + (revealedQuestions[idx] && selectedAnswers[idx] === ex.answerIndex ? 1 : 0);
      }, 0)
    : 0;

  return (
    <div className="lesson-detail-page animate-fade-in">
      <div className="container">
        <div className="lesson-detail-topbar">
          <button onClick={onBack} className="button button--secondary back-button">
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
              <path d="M19 12H5"></path>
              <path d="M12 19l-7-7 7-7"></path>
            </svg>
            Back to Curriculum
          </button>

          <button
            type="button"
            onClick={() => setShowPinyin(prev => !prev)}
            className="button button--secondary"
            aria-pressed={showPinyin}
          >
            {showPinyin ? 'Pinyin: Visible' : 'Pinyin: Hidden (Reading Mode)'}
          </button>
        </div>

        <div className="lesson-header">
          <div className="vocab-card__meta">
            <span>HSK Level {lesson.hskLevel}</span>
            <span aria-hidden="true">·</span>
            <span>{lesson.unitBadge || `Unit ${lesson.id.replace('lesson', '')}`}</span>
            {lesson.chineseTitle && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-noto-sc">{lesson.chineseTitle}</span>
              </>
            )}
          </div>
          <h1 className="lesson-title">{lesson.title}</h1>
          <p className="lesson-description">{lesson.description}</p>

          {lesson.objectives && lesson.objectives.length > 0 && (
            <div className="lesson-objectives-box">
              <h2 className="lesson-objectives-box__title">Unit Learning Objectives</h2>
              <ul className="lesson-objectives-box__list">
                {lesson.objectives.map((obj, idx) => (
                  <li key={idx}>{obj}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="lesson-tabs" role="tablist" aria-label="Lesson Sections">
          <button
            role="tab"
            aria-selected={activeTab === 'dialogue'}
            className={`lesson-tab ${activeTab === 'dialogue' ? 'lesson-tab--active' : ''}`}
            onClick={() => setActiveTab('dialogue')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Dialogues &amp; Text ({totalDialogueLines})
          </button>

          {lesson.phoneticsAndCharacters && (
            <button
              role="tab"
              aria-selected={activeTab === 'phonetics'}
              className={`lesson-tab ${activeTab === 'phonetics' ? 'lesson-tab--active' : ''}`}
              onClick={() => setActiveTab('phonetics')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
              Phonetics &amp; Hanzi
            </button>
          )}

          <button
            role="tab"
            aria-selected={activeTab === 'vocabulary'}
            className={`lesson-tab ${activeTab === 'vocabulary' ? 'lesson-tab--active' : ''}`}
            onClick={() => setActiveTab('vocabulary')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            Vocabulary ({lesson.vocabularyExplanation.length})
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'grammar'}
            className={`lesson-tab ${activeTab === 'grammar' ? 'lesson-tab--active' : ''}`}
            onClick={() => setActiveTab('grammar')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            Grammar &amp; Usage ({grammarNotesList.length})
          </button>

          {lesson.exercises && lesson.exercises.length > 0 && (
            <button
              role="tab"
              aria-selected={activeTab === 'exercises'}
              className={`lesson-tab ${activeTab === 'exercises' ? 'lesson-tab--active' : ''}`}
              onClick={() => setActiveTab('exercises')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
              Practice Check ({lesson.exercises.length})
            </button>
          )}
        </div>

        {activeTab === 'dialogue' && (
          <div className="lesson-section">
            {dialogueSections.map((section, secIndex) => {
              const fullDialogueText = section.lines.map(l => l.hanzi).join(' ');
              return (
                <div key={secIndex} className="lesson-dialogue-block">
                  <div className="lesson-dialogue-block__header">
                    <div>
                      <h2 className="lesson-section-heading">{section.title}</h2>
                      <p className="lesson-section-subheading">{section.context}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => speakChineseText(fullDialogueText, 0.85)}
                      className="button button--secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                      </svg>
                      Listen to Dialogue
                    </button>
                  </div>

                  <div className="dialogue-container">
                    {section.lines.map((line, index) => (
                      <div
                        key={index}
                        className={`dialogue-line ${
                          index % 2 === 0 ? 'dialogue-line--speakerA' : 'dialogue-line--speakerB'
                        }`}
                      >
                        <div className="dialogue-line__top">
                          <p className="dialogue-line__char font-noto-sc">
                            <span className="dialogue-line__speaker">{line.character}:</span>{' '}
                            &ldquo;{line.hanzi}&rdquo;
                          </p>
                          <button
                            type="button"
                            onClick={() => speakChineseText(line.hanzi, 0.85)}
                            className="vocab-card__icon-btn"
                            title="Listen to line"
                            aria-label={`Listen to ${line.character}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            </svg>
                          </button>
                        </div>
                        {showPinyin && <p className="dialogue-line__pinyin">{line.pinyin}</p>}
                        <p className="dialogue-line__translation">{line.translation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {lesson.readingPassage && (
              <div className="lesson-reading-card">
                <div className="lesson-dialogue-block__header">
                  <div>
                    <h2 className="lesson-section-heading">{lesson.readingPassage.title}</h2>
                    {lesson.readingPassage.subtitle && (
                      <p className="lesson-section-subheading">{lesson.readingPassage.subtitle}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      speakChineseText(
                        lesson.readingPassage!.paragraphs.map(p => p.hanzi).join(' '),
                        0.85
                      )
                    }
                    className="button button--secondary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                    Read Full Passage Aloud
                  </button>
                </div>

                <div className="dialogue-container">
                  {lesson.readingPassage.paragraphs.map((para, pIdx) => (
                    <div key={pIdx} className="dialogue-line">
                      <div className="dialogue-line__top">
                        <p className="dialogue-line__char font-noto-sc">{para.hanzi}</p>
                        <button
                          type="button"
                          onClick={() => speakChineseText(para.hanzi, 0.85)}
                          className="vocab-card__icon-btn"
                          title="Listen to paragraph"
                          aria-label={`Listen to paragraph ${pIdx + 1}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                          </svg>
                        </button>
                      </div>
                      {showPinyin && <p className="dialogue-line__pinyin">{para.pinyin}</p>}
                      <p className="dialogue-line__translation">{para.translation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'phonetics' && lesson.phoneticsAndCharacters && (
          <div className="lesson-section">
            <div className="grammar-container">
              <div className="grammar-point">
                <h2 className="grammar-point__title">{lesson.phoneticsAndCharacters.title}</h2>
                <p className="grammar-point__explanation">
                  Click the speaker icon next to any phonetic group, tone drill, tongue twister, or character set to hear standard Mandarin pronunciation.
                </p>
              </div>

              {lesson.phoneticsAndCharacters.sections.map((sec, secIdx) => (
                <div key={secIdx} className="grammar-examples">
                  <h3 className="grammar-examples__title">{sec.subtitle}</h3>
                  <p className="lesson-section-subheading">{sec.summary}</p>

                  {sec.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="grammar-example">
                      <div className="dialogue-line__top">
                        <p className="grammar-example__hanzi font-noto-sc">{item.label}</p>
                        {item.speakText && (
                          <button
                            type="button"
                            onClick={() => speakChineseText(item.speakText!, 0.8)}
                            className="vocab-card__icon-btn"
                            title="Listen to pronunciation drill"
                            aria-label={`Listen to ${item.label}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            </svg>
                          </button>
                        )}
                      </div>
                      {item.pinyin && <p className="grammar-example__pinyin">{item.pinyin}</p>}
                      <p className="grammar-example__translation">{item.detail}</p>
                      {item.examples && (
                        <p className="lesson-phonetic-examples font-noto-sc">
                          <strong>Practice Examples:</strong> {item.examples}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'vocabulary' && (
          <div className="lesson-section">
            <p className="lesson-section-subheading">
              Click any vocabulary card to inspect stroke order animations, practice pronunciation with your microphone, or listen to contextual example sentences.
            </p>
            <div className="vocab-grid">
              {lesson.vocabularyExplanation.map((word, index) => {
                const wordObj: Word = {
                  char: word.hanzi,
                  pinyin: word.pinyin,
                  meaning: word.english,
                  grammar: word.partOfSpeech
                    ? `${word.partOfSpeech} — Core vocabulary from ${lesson.title}.`
                    : `Core vocabulary from ${lesson.title}.`,
                  examples: word.exampleHanzi
                    ? [
                        {
                          sentence: word.examplePinyin
                            ? `${word.exampleHanzi} (${word.examplePinyin})`
                            : word.exampleHanzi,
                          translation: word.exampleTranslation || '',
                        },
                      ]
                    : [],
                };

                return (
                  <VocabCard
                    key={word.hanzi}
                    word={wordObj}
                    onSelect={selected => {
                      if (onWordSelect) {
                        onWordSelect(selected);
                      } else {
                        speakChineseText(word.hanzi, 0.85);
                      }
                    }}
                    hskLevel={lesson.hskLevel}
                    wordNumber={index + 1}
                    totalWords={lesson.vocabularyExplanation.length}
                    isMastered={vocabProgress?.masteredWords.includes(word.hanzi)}
                    isBookmarked={vocabProgress?.bookmarkedWords.includes(word.hanzi)}
                    onToggleMastered={onToggleMastered}
                    onToggleBookmark={onToggleBookmark}
                  />
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'grammar' && (
          <div className="lesson-section">
            <div className="grammar-container">
              {grammarNotesList.map((note, noteIndex) => (
                <div key={noteIndex} className="lesson-grammar-card">
                  <div className="grammar-point">
                    <h3 className="grammar-point__title">{note.title}</h3>
                    <p className="grammar-point__structure">{note.structure}</p>
                    <p className="grammar-point__explanation">{note.explanation}</p>
                    {'tip' in note && note.tip && (
                      <p className="lesson-grammar-tip">
                        <strong>Usage Note:</strong> {note.tip}
                      </p>
                    )}
                  </div>

                  <div className="grammar-examples">
                    <h4 className="grammar-examples__title">Model Sentences</h4>
                    {note.examples.map((example, index) => (
                      <div key={index} className="grammar-example">
                        <div className="dialogue-line__top">
                          <p className="grammar-example__hanzi font-noto-sc">{example.hanzi}</p>
                          <button
                            type="button"
                            onClick={() => speakChineseText(example.hanzi, 0.85)}
                            className="vocab-card__icon-btn"
                            title="Listen to example"
                            aria-label="Listen to example"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            </svg>
                          </button>
                        </div>
                        {showPinyin && <p className="grammar-example__pinyin">{example.pinyin}</p>}
                        <p className="grammar-example__translation">{example.translation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'exercises' && lesson.exercises && (
          <div className="lesson-section">
            <div className="lesson-dialogue-block__header">
              <div>
                <h2 className="lesson-section-heading">
                  Comprehensive Practice &amp; Self-Check (综合表达训练)
                </h2>
                <p className="lesson-section-subheading">
                  Test your mastery of this unit’s phonetics, grammar structures, and reading comprehension.
                </p>
              </div>
              <div className="lesson-exercise-score">
                <span className="tabular-nums">
                  Score: <strong>{correctCount}</strong> / {totalExercises} ({answeredCount} answered)
                </span>
                {answeredCount > 0 && (
                  <button
                    type="button"
                    onClick={handleResetExercises}
                    className="button button--secondary"
                  >
                    Reset Check
                  </button>
                )}
              </div>
            </div>

            <div className="grammar-container">
              {lesson.exercises.map((ex, qIdx) => {
                const isRevealed = Boolean(revealedQuestions[qIdx]);
                const userChoice = selectedAnswers[qIdx];
                const isCorrect = isRevealed && userChoice === ex.answerIndex;

                return (
                  <div key={qIdx} className="grammar-example lesson-exercise-card">
                    <p className="lesson-exercise-card__question">
                      <span className="tabular-nums">{qIdx + 1}.</span> {ex.question}
                    </p>

                    {ex.promptHanzi && (
                      <div className="lesson-exercise-card__prompt">
                        <p className="font-noto-sc">{ex.promptHanzi}</p>
                        {showPinyin && ex.promptPinyin && (
                          <p className="dialogue-line__pinyin">{ex.promptPinyin}</p>
                        )}
                      </div>
                    )}

                    <div className="lesson-exercise-options">
                      {ex.options.map((opt, optIdx) => {
                        const isSelected = userChoice === optIdx;
                        const isAnswer = ex.answerIndex === optIdx;
                        let optionClass = 'lesson-exercise-option';
                        if (isRevealed) {
                          if (isAnswer) {
                            optionClass += ' lesson-exercise-option--correct';
                          } else if (isSelected) {
                            optionClass += ' lesson-exercise-option--incorrect';
                          }
                        } else if (isSelected) {
                          optionClass += ' lesson-exercise-option--selected';
                        }

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() => handleSelectOption(qIdx, optIdx)}
                            className={optionClass}
                          >
                            <span className="lesson-exercise-option__letter">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            <span className="font-noto-sc">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {isRevealed && (
                      <div
                        className={`lesson-exercise-feedback ${
                          isCorrect
                            ? 'lesson-exercise-feedback--correct'
                            : 'lesson-exercise-feedback--incorrect'
                        }`}
                      >
                        <strong>{isCorrect ? '✓ Correct:' : '✕ Explanation:'}</strong>{' '}
                        {ex.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {(prevLesson || nextLesson) && onSelectLesson && (
          <div className="lesson-Bottom-nav">
            <div>
              {prevLesson && (
                <button
                  type="button"
                  onClick={() => onSelectLesson(prevLesson.id)}
                  className="button button--secondary"
                >
                  ← Previous: {prevLesson.chineseTitle || prevLesson.title}
                </button>
              )}
            </div>
            <div>
              {nextLesson && (
                <button
                  type="button"
                  onClick={() => onSelectLesson(nextLesson.id)}
                  className="button button--primary"
                >
                  Next: {nextLesson.chineseTitle || nextLesson.title} →
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonDetailPage;