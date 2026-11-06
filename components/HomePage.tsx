import React, { useMemo, useState, useEffect } from 'react';
import { vocabData } from '../data/vocab';
import { Word } from '../types';
import {
  UserVocabProgress,
  DEFAULT_DAILY_GOAL,
  getTodayStudiedWords,
  getLastSevenDaysGoalStatus,
  speakChineseText,
} from '../utils/progress';
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
  onUpdateDailyGoal?: (target: number) => void;
}

const GOAL_PRESETS = [5, 10, 15, 20, 30, 50];

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
  onSelectHSKLevel,
  onWordSelect,
  vocabProgress,
  streakData,
  onToggleBookmark,
  onToggleMastered,
  onUpdateDailyGoal,
}) => {
  const hskLevels = useMemo(() => Object.keys(vocabData).map(Number).sort((a, b) => a - b), []);

  const allWords = useMemo(
    () =>
      Object.entries(vocabData).flatMap(([lvl, words]) =>
        words.map(w => ({ ...w, hskLevel: Number(lvl) }))
      ),
    []
  );

  const wordByChar = useMemo(() => {
    const map = new Map<string, Word & { hskLevel: number }>();
    for (const w of allWords) {
      if (!map.has(w.char)) map.set(w.char, w);
    }
    return map;
  }, [allWords]);

  const spotlightWord = useMemo(() => {
    const today = new Date();
    const dayIndex = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
    );
    return allWords[dayIndex % allWords.length] || allWords[0];
  }, [allWords]);

  const totalVocabCount = allWords.length;
  const masteredCount = vocabProgress.masteredWords.length;
  const bookmarkedCount = vocabProgress.bookmarkedWords.length;

  const dailyGoalTarget = vocabProgress.dailyGoalTarget || DEFAULT_DAILY_GOAL;
  const todayStudiedWords = useMemo(() => getTodayStudiedWords(vocabProgress), [vocabProgress]);
  const todayCount = todayStudiedWords.length;
  const goalMetToday = todayCount >= dailyGoalTarget;
  const goalProgressPct = Math.min(100, Math.round((todayCount / dailyGoalTarget) * 100));
  const sevenDayGoals = useMemo(() => getLastSevenDaysGoalStatus(vocabProgress), [vocabProgress]);

  const [customTargetInput, setCustomTargetInput] = useState<string>(String(dailyGoalTarget));

  useEffect(() => {
    setCustomTargetInput(String(dailyGoalTarget));
  }, [dailyGoalTarget]);

  const handleCustomGoalSave = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(customTargetInput, 10);
    if (!Number.isNaN(parsed) && parsed >= 1 && parsed <= 200 && onUpdateDailyGoal) {
      onUpdateDailyGoal(parsed);
    } else {
      setCustomTargetInput(String(dailyGoalTarget));
    }
  };

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
                  Explore HSK 1–6 Lexicon
                </button>
              </div>
            </div>

            {/* Minimalist Daily Character Spotlight */}
            {spotlightWord && (
              <div className="hero-spotlight-card">
                <div className="hero-spotlight__top">
                  <div className="hero-spotlight__meta">
                    <span>Word of the Day</span>
                    <span aria-hidden="true">·</span>
                    <span>HSK {spotlightWord.hskLevel}</span>
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
                    {spotlightWord.grammar && (
                      <span className="hero-spotlight__pos">{spotlightWord.grammar}</span>
                    )}
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
                    Open Stroke &amp; Speech Studio →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Balanced 3-Column Curriculum Telemetry Strip */}
          <div className="hero-kpi-strip hero-kpi-strip--three">
            <div className="hero-kpi-item">
              <span className="hero-kpi__label">Words Mastered</span>
              <span className="hero-kpi__value tabular-nums">
                {masteredCount} <small>/ {totalVocabCount}</small>
              </span>
              <span className="hero-kpi__sub">
                {totalVocabCount > 0 ? ((masteredCount / totalVocabCount) * 100).toFixed(1) : '0.0'}% HSK 1–6 completion
              </span>
            </div>
            <div className="hero-kpi-item">
              <span className="hero-kpi__label">Saved Bookmarks</span>
              <span className="hero-kpi__value tabular-nums">{bookmarkedCount} Words</span>
              <span className="hero-kpi__sub">Pinned for focused review</span>
            </div>
            <div className="hero-kpi-item">
              <span className="hero-kpi__label">Active Study Streak</span>
              <span className="hero-kpi__value tabular-nums">
                {streakData.currentStreak} {streakData.currentStreak === 1 ? 'Day' : 'Days'}
              </span>
              <span className="hero-kpi__sub">Personal best: {streakData.longestStreak} days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Daily Study Goal & Progress Tracker Section */}
      <section id="daily-goal-tracker" className="daily-goal-section">
        <div className="container">
          <div className="daily-goal-card">
            <div className="daily-goal-card__left">
              <div className="vocab-card__meta">
                <span>Daily Study Goal</span>
                <span aria-hidden="true">·</span>
                <span>{goalMetToday ? 'Goal Achieved ✓' : 'In Progress'}</span>
              </div>
              <h2 className="daily-goal-card__title">
                {goalMetToday
                  ? `Daily target of ${dailyGoalTarget} words completed`
                  : `${todayCount} of ${dailyGoalTarget} words studied today`}
              </h2>

              <div className="daily-goal-card__bar-wrap">
                <div className="daily-goal-card__bar-labels">
                  <span>Progress</span>
                  <span className="tabular-nums">{goalProgressPct}%</span>
                </div>
                <div className="level-matrix__progress-track">
                  <div
                    className={`level-matrix__progress-fill ${goalMetToday ? 'daily-goal-fill--complete' : ''}`}
                    style={{ width: `${goalProgressPct}%` }}
                  />
                </div>
              </div>

              {todayStudiedWords.length > 0 && (
                <div className="daily-goal-card__studied">
                  <span className="daily-goal-card__subhead">Recent Words Today</span>
                  <div className="daily-goal-card__word-chips">
                    {todayStudiedWords.slice(0, 6).map(char => {
                      const matched = wordByChar.get(char);
                      return (
                        <button
                          key={char}
                          type="button"
                          onClick={() => matched && onWordSelect && onWordSelect(matched)}
                          className="daily-goal-word-chip font-noto-sc"
                          title={matched ? `${matched.char} (${matched.pinyin}) — ${matched.meaning}` : char}
                        >
                          <span>{char}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="daily-goal-card__right">
              <div className="daily-goal-controls-box">
                <div className="daily-goal-target-header">
                  <span className="daily-goal-card__subhead">Daily Target</span>
                  <div className="goal-popover__presets">
                    {GOAL_PRESETS.map(preset => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => onUpdateDailyGoal && onUpdateDailyGoal(preset)}
                        className={`goal-preset-btn tabular-nums ${
                          dailyGoalTarget === preset ? 'goal-preset-btn--active' : ''
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleCustomGoalSave} className="goal-popover__custom-form">
                  <label htmlFor="dashboard-custom-goal" className="sr-only">
                    Custom daily word target
                  </label>
                  <input
                    id="dashboard-custom-goal"
                    type="number"
                    min={1}
                    max={200}
                    value={customTargetInput}
                    onChange={e => setCustomTargetInput(e.target.value)}
                    className="goal-popover__input tabular-nums"
                    placeholder="Custom (1–200)"
                  />
                  <button type="submit" className="button button--secondary button--sm">
                    Save
                  </button>
                </form>

                <div className="daily-goal-week-strip">
                  <span className="daily-goal-card__subhead">7-Day Activity</span>
                  <div className="daily-goal-week-grid">
                    {sevenDayGoals.map(day => {
                      const barPct = Math.min(100, Math.round((day.count / day.target) * 100));
                      return (
                        <div key={day.date} className={`daily-goal-day-col ${day.isToday ? 'daily-goal-day-col--today' : ''}`}>
                          <div className="daily-goal-day-bar-track" title={`${day.date}: ${day.count}/${day.target} words`}>
                            <div
                              className={`daily-goal-day-bar-fill ${day.met ? 'daily-goal-day-bar-fill--met' : ''}`}
                              style={{ height: `${Math.max(day.count > 0 ? 16 : 0, barPct)}%` }}
                            />
                          </div>
                          <span className="daily-goal-day-label">{day.dayLabel}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HSK 1-6 Mastery Matrix Section (Minimalist Uncrowded Cards) */}
      <section id="levels" className="levels-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">HSK 1–6 Curriculum</h2>
            <p className="section-subtitle">
              Select a proficiency level to study vocabulary, stroke order, and pronunciation.
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

              return (
                <div
                  key={level}
                  className="level-matrix-card"
                  onClick={() => {
                    if (onSelectHSKLevel) onSelectHSKLevel(level);
                    navigateToLearn();
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      if (onSelectHSKLevel) onSelectHSKLevel(level);
                      navigateToLearn();
                    }
                  }}
                >
                  <div className="level-matrix__top">
                    <span className="level-matrix__badge">
                      {meta.cefr} · {meta.badge}
                    </span>
                    <span className="level-matrix__pct tabular-nums">{pct}%</span>
                  </div>

                  <h3 className="level-matrix__title">HSK Level {level}</h3>

                  <p className="level-matrix__desc">{meta.desc}</p>

                  <div className="level-matrix__progress-track">
                    <div
                      className="level-matrix__progress-fill"
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <div className="level-matrix__footer">
                    <span className="level-matrix__count tabular-nums">
                      {levelMastered} / {wordsInLevel.length} words
                    </span>
                    <span className="level-matrix__cta">
                      Study Level {level} →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Learning Architecture Section (Minimalist Feature Cards) */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Learning Workflow</h2>
            <p className="section-subtitle">
              Four focused tools for character recognition, tonal accuracy, and active recall.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card" onClick={navigateToLearn} role="button" tabIndex={0}>
              <div className="feature-card__meta">01</div>
              <h3 className="feature-card__title">HSK 1–6 Lexicon</h3>
              <p className="feature-card__description">
                Native audio, tone breakdowns, and interactive stroke order guides.
              </p>
              <span className="feature-card__link">Open Lexicon →</span>
            </div>

            <div
              className="feature-card"
              onClick={() => (navigateToPractice ? navigateToPractice() : navigateToLearn())}
              role="button"
              tabIndex={0}
            >
              <div className="feature-card__meta">02</div>
              <h3 className="feature-card__title">Practice Studio</h3>
              <p className="feature-card__description">
                3D flip flashcards, recall drills, and automatic review queues.
              </p>
              <span className="feature-card__link">Start Practice →</span>
            </div>

            <div
              className="feature-card"
              onClick={() => (navigateToQuizzes ? navigateToQuizzes() : navigateToLearn())}
              role="button"
              tabIndex={0}
            >
              <div className="feature-card__meta">03</div>
              <h3 className="feature-card__title">Proficiency Quizzes</h3>
              <p className="feature-card__description">
                Timed character, Pinyin, and meaning assessments with explanations.
              </p>
              <span className="feature-card__link">Take Quiz →</span>
            </div>

            <div
              className="feature-card"
              onClick={() => (navigateToStudyPlan ? navigateToStudyPlan() : navigateToLearn())}
              role="button"
              tabIndex={0}
            >
              <div className="feature-card__meta">04</div>
              <h3 className="feature-card__title">Study Roadmaps</h3>
              <p className="feature-card__description">
                Personalized weekly study schedules calibrated to your target level.
              </p>
              <span className="feature-card__link">Build Plan →</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
