import React, { useMemo } from 'react';
import { vocabData } from '../data/vocab';
import { Word } from '../types';
import { UserVocabProgress, speakChineseText, detectPinyinTones } from '../utils/progress';
import { DailyStreakData } from '../utils/streak';

interface HomePageProps {
  onGetStartedClick: () => void;
  navigateToLearn: () => void;
  navigateToPractice?: () => void;
  navigateToQuizzes?: () => void;
  navigateToStudyPlan?: () => void;
  navigateToDictionary?: () => void;
  onSelectHSKLevel?: (level: number) => void;
  onWordSelect?: (word: Word) => void;
  vocabProgress: UserVocabProgress;
  streakData: DailyStreakData;
  onToggleBookmark?: (char: string) => void;
  onToggleMastered?: (char: string) => void;
}

const HSK_META: Record<number, { cefr: string; badge: string; desc: string }> = {
  1: { cefr: 'CEFR A1', badge: 'Foundation', desc: 'Everyday greetings, numbers, personal details, and essential survival phrases.' },
  2: { cefr: 'CEFR A2', badge: 'Elementary', desc: 'Routine daily tasks, shopping, travel directions, and simple conversations.' },
  3: { cefr: 'CEFR B1', badge: 'Intermediate', desc: 'Work, school, leisure topics, and fluent travel communication across China.' },
  4: { cefr: 'CEFR B2', badge: 'Upper-Intermediate', desc: 'Wide-ranging discussions, abstract topics, and natural native interaction.' },
  5: { cefr: 'CEFR C1', badge: 'Advanced', desc: 'Newspapers, films, formal speeches, and nuanced written expression.' },
  6: { cefr: 'CEFR C2', badge: 'Mastery', desc: 'Academic literature, idioms, classical nuances, and professional fluency.' },
};

const HomePage: React.FC<HomePageProps> = ({
  navigateToLearn,
  navigateToPractice,
  navigateToQuizzes,
  navigateToStudyPlan,
  navigateToDictionary,
  onSelectHSKLevel,
  onWordSelect,
  vocabProgress,
  streakData,
  onToggleBookmark,
  onToggleMastered,
}) => {
  const hskLevels = useMemo(() => Object.keys(vocabData).map(Number).sort((a, b) => a - b), []);

  const allWords = useMemo(
    () =>
      Object.entries(vocabData).flatMap(([lvl, words]) =>
        words.map(w => ({ ...w, hskLevel: Number(lvl) }))
      ),
    []
  );

  const spotlightWord = useMemo(() => {
    const today = new Date();
    const dayIndex = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
    );
    return allWords[dayIndex % allWords.length] || allWords[0];
  }, [allWords]);

  const spotlightTones = useMemo(
    () => (spotlightWord ? detectPinyinTones(spotlightWord.pinyin) : []),
    [spotlightWord]
  );

  const totalVocabCount = allWords.length;
  const masteredCount = vocabProgress.masteredWords.length;
  const bookmarkedCount = vocabProgress.bookmarkedWords.length;

  return (
    <div className="homepage animate-fade-in">
      {/* Split Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split__left">
              <div className="hero-kicker">
                <span>Standard Mandarin Curriculum</span>
                <span aria-hidden="true">·</span>
                <span>HSK Levels 1–6</span>
                <span aria-hidden="true">·</span>
                <span>Audio &amp; Tone Lab</span>
              </div>

              <h1 className="hero-section__title">
                Master Mandarin Characters, Tones, and Usage with Precision.
              </h1>

              <p className="hero-section__subtitle">
                A structured lexical workspace built for serious HSK preparation. Practice pronunciation with live audio comparison, trace character strokes, and track mastery across every level.
              </p>

              <div className="hero-actions">
                <button
                  type="button"
                  onClick={() => {
                    if (navigateToPractice) navigateToPractice();
                    else navigateToLearn();
                  }}
                  className="button button--primary hero-cta-btn"
                >
                  Start Daily Practice
                </button>
                <button
                  type="button"
                  onClick={navigateToLearn}
                  className="button button--outline hero-cta-btn"
                >
                  Browse HSK Lexicon
                </button>
                {navigateToDictionary && (
                  <button
                    type="button"
                    onClick={navigateToDictionary}
                    className="button button--secondary hero-cta-btn"
                  >
                    Open Dictionary
                  </button>
                )}
              </div>
            </div>

            {/* Interactive Daily Character Spotlight */}
            {spotlightWord && (
              <div className="hero-spotlight-card">
                <div className="hero-spotlight__top">
                  <div className="hero-spotlight__meta">
                    <span>Daily Character Spotlight</span>
                    <span aria-hidden="true">·</span>
                    <span>HSK {spotlightWord.hskLevel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{spotlightWord.grammar}</span>
                  </div>
                  <div className="hero-spotlight__actions">
                    <button
                      type="button"
                      onClick={() => speakChineseText(spotlightWord.char, 0.85)}
                      className="vocab-card__icon-btn"
                      title="Listen to pronunciation"
                      aria-label="Listen to pronunciation"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                      </svg>
                    </button>
                    {onToggleBookmark && (
                      <button
                        type="button"
                        onClick={() => onToggleBookmark(spotlightWord.char)}
                        className={`vocab-card__icon-btn ${
                          vocabProgress.bookmarkedWords.includes(spotlightWord.char)
                            ? 'vocab-card__icon-btn--bookmarked'
                            : ''
                        }`}
                        title="Bookmark word"
                        aria-label="Bookmark word"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={vocabProgress.bookmarkedWords.includes(spotlightWord.char) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                        </svg>
                      </button>
                    )}
                    {onToggleMastered && (
                      <button
                        type="button"
                        onClick={() => onToggleMastered(spotlightWord.char)}
                        className={`vocab-card__icon-btn ${
                          vocabProgress.masteredWords.includes(spotlightWord.char)
                            ? 'vocab-card__icon-btn--mastered'
                            : ''
                        }`}
                        title="Toggle mastered status"
                        aria-label="Toggle mastered status"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                <div className="hero-spotlight__main">
                  <div className="hero-spotlight__hanzi-box">
                    <span className="hero-spotlight__hanzi">{spotlightWord.char}</span>
                  </div>
                  <div className="hero-spotlight__details">
                    <div className="hero-spotlight__pinyin">{spotlightWord.pinyin}</div>
                    <div className="hero-spotlight__meaning">{spotlightWord.meaning}</div>
                    <div className="hero-spotlight__tones">
                      {spotlightTones.map((t, idx) => (
                        <span key={idx} className="hero-spotlight__tone-item">
                          {t.syllable}: {t.toneName}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {spotlightWord.examples && spotlightWord.examples[0] && (
                  <div className="hero-spotlight__example">
                    <div className="hero-spotlight__example-text">
                      <p className="hero-spotlight__sentence">{spotlightWord.examples[0].sentence}</p>
                      <p className="hero-spotlight__translation">{spotlightWord.examples[0].translation}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => speakChineseText(spotlightWord.examples[0].sentence, 0.85)}
                      className="vocab-card__icon-btn"
                      title="Listen to example sentence"
                      aria-label="Listen to example sentence"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                      </svg>
                    </button>
                  </div>
                )}

                <div className="hero-spotlight__footer">
                  <button
                    type="button"
                    onClick={() => onWordSelect && onWordSelect(spotlightWord)}
                    className="button button--primary hero-spotlight__btn"
                  >
                    Practice Pronunciation &amp; Stroke Writing →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Full-Width 4-Column Curriculum Telemetry Strip */}
          <div className="hero-kpi-strip">
            <div className="hero-kpi-item">
              <span className="hero-kpi__label">Curated Vocabulary</span>
              <span className="hero-kpi__value">{totalVocabCount} Words</span>
              <span className="hero-kpi__sub">Across HSK Levels 1–6</span>
            </div>
            <div className="hero-kpi-item">
              <span className="hero-kpi__label">Words Mastered</span>
              <span className="hero-kpi__value">
                {masteredCount} <small>/ {totalVocabCount}</small>
              </span>
              <span className="hero-kpi__sub">
                {totalVocabCount > 0 ? ((masteredCount / totalVocabCount) * 100).toFixed(1) : '0.0'}% curriculum completion
              </span>
            </div>
            <div className="hero-kpi-item">
              <span className="hero-kpi__label">Saved Bookmarks</span>
              <span className="hero-kpi__value">{bookmarkedCount} Words</span>
              <span className="hero-kpi__sub">Pinned for focused review</span>
            </div>
            <div className="hero-kpi-item">
              <span className="hero-kpi__label">Active Study Streak</span>
              <span className="hero-kpi__value">
                {streakData.currentStreak} {streakData.currentStreak === 1 ? 'Day' : 'Days'}
              </span>
              <span className="hero-kpi__sub">Personal best: {streakData.longestStreak} days</span>
            </div>
          </div>
        </div>
      </section>

      {/* HSK 1-6 Mastery Matrix Section */}
      <section id="levels" className="levels-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">HSK 1–6 Curriculum &amp; Mastery Matrix</h2>
            <p className="section-subtitle">
              Track your real-time vocabulary mastery across every proficiency band and jump directly into targeted study.
            </p>
          </div>

          <div className="levels-matrix-grid">
            {hskLevels.map(level => {
              const wordsInLevel = vocabData[level] || [];
              const levelMastered = wordsInLevel.filter(w =>
                vocabProgress.masteredWords.includes(w.char)
              ).length;
              const pct = wordsInLevel.length > 0 ? Math.round((levelMastered / wordsInLevel.length) * 100) : 0;
              const meta = HSK_META[level] || { cefr: 'HSK', badge: 'Standard', desc: 'Structured Mandarin vocabulary.' };
              const sampleChars = wordsInLevel.slice(0, 5).map(w => w.char).join(' · ');

              return (
                <div key={level} className="level-matrix-card">
                  <div className="level-matrix__top">
                    <div className="level-matrix__meta">
                      <span>{meta.cefr}</span>
                      <span aria-hidden="true">·</span>
                      <span>{meta.badge}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{wordsInLevel.length} Words</span>
                    </div>
                    <span className="level-matrix__pct tabular-nums">{pct}% Mastered</span>
                  </div>

                  <div className="level-matrix__title-row">
                    <h3 className="level-matrix__title">HSK Level {level}</h3>
                    <span className="level-matrix__samples font-noto-sc">{sampleChars}</span>
                  </div>

                  <p className="level-matrix__desc">{meta.desc}</p>

                  <div className="level-matrix__progress-track">
                    <div
                      className="level-matrix__progress-fill"
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <div className="level-matrix__footer">
                    <span className="level-matrix__count tabular-nums">
                      {levelMastered} of {wordsInLevel.length} mastered
                    </span>
                    <div className="level-matrix__actions">
                      <button
                        type="button"
                        className="button button--primary button--sm"
                        onClick={() => {
                          if (onSelectHSKLevel) onSelectHSKLevel(level);
                          navigateToLearn();
                        }}
                      >
                        Study Level {level}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Learning Architecture Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Four-Stage Mandarin Acquisition Workflow</h2>
            <p className="section-subtitle">
              Every tool is wired to reinforce character recognition, tonal accuracy, and contextual recall.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card__meta">01 · Lexical Foundation</div>
              <h3 className="feature-card__title">Interactive HSK 1–6 Lexicon</h3>
              <p className="feature-card__description">
                Browse words with instant native TTS audio, syllable-by-syllable tone contour breakdowns, and interactive character stroke practice pads.
              </p>
              <button type="button" onClick={navigateToLearn} className="feature-card__link">
                Open Vocabulary Lexicon →
              </button>
            </div>

            <div className="feature-card">
              <div className="feature-card__meta">02 · Active Recall</div>
              <h3 className="feature-card__title">Multi-Modal Practice Studio</h3>
              <p className="feature-card__description">
                Switch seamlessly between 3D flip flashcards, multiple-choice drills, and meaning recall typing with automatic review queues for missed words.
              </p>
              <button
                type="button"
                onClick={() => (navigateToPractice ? navigateToPractice() : navigateToLearn())}
                className="feature-card__link"
              >
                Launch Practice Studio →
              </button>
            </div>

            <div className="feature-card">
              <div className="feature-card__meta">03 · Diagnostic Assessment</div>
              <h3 className="feature-card__title">Timed HSK Proficiency Quizzes</h3>
              <p className="feature-card__description">
                Test character recognition, Pinyin accuracy, grammatical classification, and English definitions with full post-quiz answer explanations.
              </p>
              <button
                type="button"
                onClick={() => (navigateToQuizzes ? navigateToQuizzes() : navigateToLearn())}
                className="feature-card__link"
              >
                Start Proficiency Quiz →
              </button>
            </div>

            <div className="feature-card">
              <div className="feature-card__meta">04 · Curriculum Planning</div>
              <h3 className="feature-card__title">AI-Tailored Study Schedules</h3>
              <p className="feature-card__description">
                Generate a structured weekly HSK study syllabus calibrated to your target level, available days per week, and daily session duration.
              </p>
              <button
                type="button"
                onClick={() => (navigateToStudyPlan ? navigateToStudyPlan() : navigateToLearn())}
                className="feature-card__link"
              >
                Build Study Schedule →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
