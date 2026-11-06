import React, { useMemo, useState, useEffect } from 'react';
import { UserVocabProgress, DEFAULT_DAILY_GOAL, getTodayStudiedWords } from '../utils/progress';
import { DailyStreakData } from '../utils/streak';
import { vocabData } from '../data/vocab';

export interface BadgeMilestone {
  id: string;
  title: string;
  hanziSeal: string;
  pinyin: string;
  category: 'vocabulary' | 'streak' | 'dailyGoal' | 'curriculum';
  categoryLabel: string;
  description: string;
  currentValue: number;
  targetValue: number;
  unit: string;
  unlocked: boolean;
  accentColor: 'blue' | 'emerald' | 'amber' | 'rose' | 'indigo' | 'teal';
  iconType:
    | 'seedling'
    | 'tenWords'
    | 'fiftyWords'
    | 'hundredWords'
    | 'target'
    | 'flame3'
    | 'flame7'
    | 'flame30'
    | 'bookmark'
    | 'hsk1'
    | 'hsk2'
    | 'compass';
}

interface ScholarUserProfile {
  displayName: string;
  chineseAlias: string;
  targetLevel: number;
  studyStyle: string;
}

const PROFILE_STORAGE_KEY = 'hsk_hub_scholar_profile_v1';

const DEFAULT_PROFILE: ScholarUserProfile = {
  displayName: 'Akbar Qalati',
  chineseAlias: '安凯博',
  targetLevel: 2,
  studyStyle: 'Self-Paced · Daily Intensive',
};

interface BadgesProps {
  vocabProgress: UserVocabProgress;
  streakData: DailyStreakData;
  userDisplayName?: string;
  onUpdateDisplayName?: (name: string) => void;
  onNavigateToHome?: () => void;
  onNavigateToLearn?: () => void;
  onNavigateToPractice?: () => void;
  onNavigateToLessons?: () => void;
  onSelectHSKLevel?: (level: number) => void;
  onSignOut?: () => void;
}

const renderBadgeSvg = (iconType: BadgeMilestone['iconType']) => {
  switch (iconType) {
    case 'seedling':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 20h10" />
          <path d="M10 20c5.5-2.5.8-6.4 3-10" />
          <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
          <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
        </svg>
      );
    case 'tenWords':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case 'fiftyWords':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          <path d="m9 10 2 2 4-4" />
        </svg>
      );
    case 'hundredWords':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      );
    case 'target':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'flame3':
    case 'flame7':
    case 'flame30':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case 'bookmark':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
        </svg>
      );
    case 'hsk1':
    case 'hsk2':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'compass':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
  }
};

const Badges: React.FC<BadgesProps> = ({
  vocabProgress,
  streakData,
  userDisplayName,
  onUpdateDisplayName,
  onNavigateToHome,
  onNavigateToLearn,
  onNavigateToPractice,
  onNavigateToLessons,
  onSelectHSKLevel,
  onSignOut,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'unlocked' | 'locked'>('all');
  const [selectedBadgeId, setSelectedBadgeId] = useState<string | null>(null);
  const [showAllTracks, setShowAllTracks] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const [profile, setProfile] = useState<ScholarUserProfile>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const saved = localStorage.getItem(PROFILE_STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          return {
            ...DEFAULT_PROFILE,
            ...parsed,
            displayName: userDisplayName || parsed.displayName || DEFAULT_PROFILE.displayName,
          };
        }
      } catch {
        // fallback to default
      }
    }
    return {
      ...DEFAULT_PROFILE,
      displayName: userDisplayName || DEFAULT_PROFILE.displayName,
    };
  });

  const [draftName, setDraftName] = useState(profile.displayName);
  const [draftAlias, setDraftAlias] = useState(profile.chineseAlias);
  const [draftLevel, setDraftLevel] = useState(profile.targetLevel);

  useEffect(() => {
    if (userDisplayName && userDisplayName !== profile.displayName) {
      setProfile(prev => ({ ...prev, displayName: userDisplayName }));
      setDraftName(userDisplayName);
    }
  }, [userDisplayName]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
      } catch {
        // ignore storage error
      }
    }
  }, [profile]);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const nextName = draftName.trim() || DEFAULT_PROFILE.displayName;
    setProfile({
      ...profile,
      displayName: nextName,
      chineseAlias: draftAlias.trim() || DEFAULT_PROFILE.chineseAlias,
      targetLevel: Math.min(6, Math.max(1, Number(draftLevel) || 2)),
    });
    if (onUpdateDisplayName) {
      onUpdateDisplayName(nextName);
    }
    setIsEditingProfile(false);
  };

  // Aggregate unique words the user has either mastered or studied across any date
  const uniqueLearnedChars = useMemo(() => {
    const set = new Set<string>(vocabProgress.masteredWords);
    Object.values(vocabProgress.dailyStudiedByDate || {}).forEach(dayList => {
      if (Array.isArray(dayList)) {
        dayList.forEach(ch => set.add(ch));
      }
    });
    return set;
  }, [vocabProgress]);

  const totalLearnedCount = uniqueLearnedChars.size;
  const masteredCount = vocabProgress.masteredWords.length;
  const bookmarkedCount = vocabProgress.bookmarkedWords.length;
  const bestStreak = Math.max(streakData.currentStreak || 0, streakData.longestStreak || 0);
  const dailyTarget = vocabProgress.dailyGoalTarget || DEFAULT_DAILY_GOAL;
  const todayStudied = useMemo(() => getTodayStudiedWords(vocabProgress), [vocabProgress]);
  const todayCount = todayStudied.length;
  const dailyGoalPct = Math.min(100, Math.round((todayCount / dailyTarget) * 100));

  // Count how many days the user met their daily goal
  const daysGoalMet = useMemo(() => {
    let count = 0;
    Object.values(vocabProgress.dailyStudiedByDate || {}).forEach(dayList => {
      if (Array.isArray(dayList) && dayList.length >= dailyTarget) {
        count += 1;
      }
    });
    return count;
  }, [vocabProgress.dailyStudiedByDate, dailyTarget]);

  const maxWordsInSingleDay = useMemo(() => {
    let max = 0;
    Object.values(vocabProgress.dailyStudiedByDate || {}).forEach(dayList => {
      if (Array.isArray(dayList) && dayList.length > max) {
        max = dayList.length;
      }
    });
    return max;
  }, [vocabProgress.dailyStudiedByDate]);

  // Level-specific counts
  const { hsk1Count, hsk2Count, levelsExplored, levelBreakdown } = useMemo(() => {
    const hsk1Words = vocabData[1] || [];
    const hsk2Words = vocabData[2] || [];
    const h1 = hsk1Words.filter(w => uniqueLearnedChars.has(w.char)).length;
    const h2 = hsk2Words.filter(w => uniqueLearnedChars.has(w.char)).length;

    let levelsWithProgress = 0;
    const breakdown: { level: number; learned: number; total: number; pct: number }[] = [];
    for (let lvl = 1; lvl <= 6; lvl++) {
      const list = vocabData[lvl] || [];
      const learned = list.filter(w => uniqueLearnedChars.has(w.char)).length;
      if (learned > 0) {
        levelsWithProgress += 1;
      }
      breakdown.push({
        level: lvl,
        learned,
        total: list.length,
        pct: list.length > 0 ? Math.round((learned / list.length) * 100) : 0,
      });
    }
    return { hsk1Count: h1, hsk2Count: h2, levelsExplored: levelsWithProgress, levelBreakdown: breakdown };
  }, [uniqueLearnedChars]);

  const badges: BadgeMilestone[] = useMemo(
    () => [
      {
        id: 'first-word',
        title: 'First Character',
        hanziSeal: '初学',
        pinyin: 'chū xué',
        category: 'vocabulary',
        categoryLabel: 'Vocabulary',
        description: 'Begin your Mandarin journey by studying or mastering your very first HSK word.',
        currentValue: Math.min(1, totalLearnedCount),
        targetValue: 1,
        unit: 'word',
        unlocked: totalLearnedCount >= 1,
        accentColor: 'emerald',
        iconType: 'seedling',
      },
      {
        id: 'first-10-words',
        title: 'First 10 Words',
        hanziSeal: '十全',
        pinyin: 'shí quán',
        category: 'vocabulary',
        categoryLabel: 'Vocabulary',
        description: 'Study or master 10 unique Mandarin words across the lexicon, flashcards, or quizzes.',
        currentValue: Math.min(10, totalLearnedCount),
        targetValue: 10,
        unit: 'words',
        unlocked: totalLearnedCount >= 10,
        accentColor: 'blue',
        iconType: 'tenWords',
      },
      {
        id: 'streak-3-days',
        title: '3-Day Spark',
        hanziSeal: '三日',
        pinyin: 'sān rì',
        category: 'streak',
        categoryLabel: 'Consistency',
        description: 'Build a daily study habit by practicing Mandarin for 3 consecutive days.',
        currentValue: Math.min(3, bestStreak),
        targetValue: 3,
        unit: 'days',
        unlocked: bestStreak >= 3,
        accentColor: 'amber',
        iconType: 'flame3',
      },
      {
        id: 'streak-7-days',
        title: '7-Day Streak',
        hanziSeal: '七日',
        pinyin: 'qī rì',
        category: 'streak',
        categoryLabel: 'Consistency',
        description: 'Complete a full week of uninterrupted Mandarin study and practice sessions.',
        currentValue: Math.min(7, bestStreak),
        targetValue: 7,
        unit: 'days',
        unlocked: bestStreak >= 7,
        accentColor: 'rose',
        iconType: 'flame7',
      },
      {
        id: 'daily-target-hit',
        title: 'Daily Goal Achiever',
        hanziSeal: '达标',
        pinyin: 'dá biāo',
        category: 'dailyGoal',
        categoryLabel: 'Daily Goal',
        description: `Reach your personal daily word study target (${dailyTarget} words/day) in a single day.`,
        currentValue: daysGoalMet > 0 ? dailyTarget : Math.min(dailyTarget, maxWordsInSingleDay),
        targetValue: dailyTarget,
        unit: 'words/day',
        unlocked: daysGoalMet >= 1,
        accentColor: 'teal',
        iconType: 'target',
      },
      {
        id: 'curator-bookmarks',
        title: 'Lexicon Curator',
        hanziSeal: '珍藏',
        pinyin: 'zhēn cáng',
        category: 'vocabulary',
        categoryLabel: 'Study Habit',
        description: 'Bookmark 5 or more challenging words to build your custom review deck.',
        currentValue: Math.min(5, bookmarkedCount),
        targetValue: 5,
        unit: 'bookmarks',
        unlocked: bookmarkedCount >= 5,
        accentColor: 'indigo',
        iconType: 'bookmark',
      },
      {
        id: 'fifty-words',
        title: '50-Word Scholar',
        hanziSeal: '博学',
        pinyin: 'bó xué',
        category: 'vocabulary',
        categoryLabel: 'Vocabulary',
        description: 'Expand your active reading and listening vocabulary to 50 unique HSK words.',
        currentValue: Math.min(50, totalLearnedCount),
        targetValue: 50,
        unit: 'words',
        unlocked: totalLearnedCount >= 50,
        accentColor: 'blue',
        iconType: 'fiftyWords',
      },
      {
        id: 'hsk1-foundation',
        title: 'HSK 1 Foundation',
        hanziSeal: '一级',
        pinyin: 'yī jí',
        category: 'curriculum',
        categoryLabel: 'Curriculum',
        description: 'Study or master 25 essential foundation words from HSK Level 1.',
        currentValue: Math.min(25, hsk1Count),
        targetValue: 25,
        unit: 'HSK 1 words',
        unlocked: hsk1Count >= 25,
        accentColor: 'emerald',
        iconType: 'hsk1',
      },
      {
        id: 'hsk2-elementary',
        title: 'HSK 2 Elementary',
        hanziSeal: '二级',
        pinyin: 'èr jí',
        category: 'curriculum',
        categoryLabel: 'Curriculum',
        description: 'Study or master 25 conversational words from HSK Level 2.',
        currentValue: Math.min(25, hsk2Count),
        targetValue: 25,
        unit: 'HSK 2 words',
        unlocked: hsk2Count >= 25,
        accentColor: 'teal',
        iconType: 'hsk2',
      },
      {
        id: 'multi-level-explorer',
        title: 'Multi-Level Explorer',
        hanziSeal: '融通',
        pinyin: 'róng tōng',
        category: 'curriculum',
        categoryLabel: 'Curriculum',
        description: 'Explore and study vocabulary across at least 3 different HSK proficiency bands.',
        currentValue: Math.min(3, levelsExplored),
        targetValue: 3,
        unit: 'HSK levels',
        unlocked: levelsExplored >= 3,
        accentColor: 'indigo',
        iconType: 'compass',
      },
      {
        id: 'hundred-words',
        title: 'Centurion Master',
        hanziSeal: '百字',
        pinyin: 'bǎi zì',
        category: 'vocabulary',
        categoryLabel: 'Vocabulary',
        description: 'Master or study 100 unique Chinese words across the HSK curriculum.',
        currentValue: Math.min(100, totalLearnedCount),
        targetValue: 100,
        unit: 'words',
        unlocked: totalLearnedCount >= 100,
        accentColor: 'amber',
        iconType: 'hundredWords',
      },
      {
        id: 'streak-30-days',
        title: '30-Day Dedication',
        hanziSeal: '恒心',
        pinyin: 'héng xīn',
        category: 'streak',
        categoryLabel: 'Consistency',
        description: 'Achieve a 30-day study streak demonstrating unwavering dedication to Mandarin.',
        currentValue: Math.min(30, bestStreak),
        targetValue: 30,
        unit: 'days',
        unlocked: bestStreak >= 30,
        accentColor: 'rose',
        iconType: 'flame30',
      },
    ],
    [totalLearnedCount, bestStreak, dailyTarget, daysGoalMet, maxWordsInSingleDay, bookmarkedCount, hsk1Count, hsk2Count, levelsExplored]
  );

  const unlockedCount = useMemo(() => badges.filter(b => b.unlocked).length, [badges]);
  const lockedCount = badges.length - unlockedCount;
  const totalBadges = badges.length;
  const badgeCompletionPct = Math.round((unlockedCount / totalBadges) * 100);

  // Compute Quiz Accuracy or Active Study Consistency
  const quizAccuracyPct = useMemo(() => {
    const history = vocabProgress.quizHistory || [];
    if (history.length === 0) {
      // If no quizzes taken yet, reflect active vocabulary retention ratio
      return totalLearnedCount > 0 ? Math.min(100, Math.max(75, Math.round((masteredCount / Math.max(1, totalLearnedCount)) * 100) || 85)) : 0;
    }
    const totals = history.reduce(
      (acc, item) => ({ score: acc.score + item.score, total: acc.total + item.total }),
      { score: 0, total: 0 }
    );
    return totals.total > 0 ? Math.round((totals.score / totals.total) * 100) : 0;
  }, [vocabProgress.quizHistory, totalLearnedCount, masteredCount]);

  // Composite Scholar Proficiency Score (0-100) for the Semi-Circular Arc Gauge
  const aspectScore = useMemo(() => {
    const badgeWeight = (unlockedCount / totalBadges) * 45;
    const goalWeight = Math.min(1, todayCount / Math.max(1, dailyTarget)) * 30;
    const streakWeight = Math.min(1, bestStreak / 7) * 25;
    const raw = Math.round(badgeWeight + goalWeight + streakWeight);
    return Math.min(100, Math.max(totalLearnedCount > 0 || bestStreak > 0 ? 12 : 0, raw));
  }, [unlockedCount, totalBadges, todayCount, dailyTarget, bestStreak, totalLearnedCount]);

  const scholarRank = useMemo(() => {
    if (unlockedCount >= 10) return { title: 'Grand Mandarin Scholar', hanzi: '翰林学士', badge: 'HSK Master' };
    if (unlockedCount >= 7) return { title: 'Senior Lexicon Fellow', hanzi: '博学进士', badge: 'Advanced' };
    if (unlockedCount >= 4) return { title: 'Dedicated Practitioner', hanzi: '笃行举人', badge: 'Intermediate' };
    if (unlockedCount >= 2) return { title: 'Rising HSK Apprentice', hanzi: '新锐秀才', badge: 'Elementary' };
    return { title: 'Mandarin Scholar', hanzi: '初学门生', badge: `HSK ${profile.targetLevel} Track` };
  }, [unlockedCount, profile.targetLevel]);

  const filteredBadges = useMemo(() => {
    if (filterMode === 'unlocked') return badges.filter(b => b.unlocked);
    if (filterMode === 'locked') return badges.filter(b => !b.unlocked);
    return badges;
  }, [badges, filterMode]);

  const selectedBadge = useMemo(
    () => badges.find(b => b.id === selectedBadgeId) || null,
    [badges, selectedBadgeId]
  );

  // Timezone display
  const userTimezone = useMemo(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local Time';
      const offsetMin = -new Date().getTimezoneOffset();
      const sign = offsetMin >= 0 ? '+' : '-';
      const hrs = Math.floor(Math.abs(offsetMin) / 60);
      return `UTC${sign}${hrs} (${tz.split('/').pop()?.replace(/_/g, ' ') || 'Local'})`;
    } catch {
      return 'UTC+8 (Standard)';
    }
  }, []);

  // SVG Semi-circle gauge geometry
  const gaugeRadius = 82;
  const gaugeCircumference = Math.PI * gaugeRadius; // half circle length ~ 257.6
  const gaugeDashOffset = gaugeCircumference * (1 - aspectScore / 100);

  return (
    <section id="scholar-profile-badges" className="bento-profile-section">
      <div className="container">
        {/* Top Breadcrumb Bar (Inspired by reference header: Scholars > Name) */}
        <div className="bento-profile-breadcrumb">
          <div className="bento-profile-breadcrumb__left">
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
              className="bento-profile-breadcrumb__icon"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            {onNavigateToHome ? (
              <button
                type="button"
                onClick={onNavigateToHome}
                className="bento-profile-breadcrumb__link"
              >
                Scholars
              </button>
            ) : (
              <span className="bento-profile-breadcrumb__root">Scholars</span>
            )}
            <span className="bento-profile-breadcrumb__sep" aria-hidden="true">›</span>
            <span className="bento-profile-breadcrumb__current">{profile.displayName}</span>
          </div>

          <div className="bento-profile-breadcrumb__actions">
            {onNavigateToHome && (
              <button
                type="button"
                onClick={onNavigateToHome}
                className="bento-profile-edit-btn"
              >
                ← Back to Dashboard
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                setDraftName(profile.displayName);
                setDraftAlias(profile.chineseAlias);
                setDraftLevel(profile.targetLevel);
                setIsEditingProfile(prev => !prev);
              }}
              className="bento-profile-edit-btn"
            >
              {isEditingProfile ? 'Cancel Edit' : 'Customize Profile'}
            </button>
            {onSignOut && (
              <button
                type="button"
                onClick={onSignOut}
                className="bento-profile-edit-btn"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>

        {/* Main 2-Column Asymmetric Bento Layout */}
        <div className="bento-profile-grid">
          {/* LEFT COLUMN: Tall Scholar Identity Card */}
          <aside className="bento-identity-card">
            {/* Gradient Mesh Banner with Geometric Vector Lines & Verified Pill */}
            <div className="bento-identity__banner">
              <svg
                className="bento-identity__banner-art"
                viewBox="0 0 400 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M220 -20L150 150M220 -20L350 120M150 150L350 120M280 -10L390 95"
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <circle cx="290" cy="45" r="55" stroke="rgba(255,255,255,0.16)" strokeWidth="6" />
              </svg>

              <span className="bento-identity__verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Active Scholar
              </span>

              {/* Overlapping Square Avatar */}
              <div className="bento-identity__avatar-wrap">
                <div className="bento-identity__avatar">
                  <span className="bento-identity__avatar-hanzi font-noto-sc">
                    {profile.chineseAlias.slice(0, 2) || '学者'}
                  </span>
                  <span className="bento-identity__avatar-sub">{scholarRank.hanzi}</span>
                </div>
              </div>
            </div>

            {/* Inline Profile Editor (when toggled) */}
            {isEditingProfile && (
              <form onSubmit={handleSaveProfile} className="bento-identity__edit-form animate-fade-in">
                <div className="bento-identity__edit-row">
                  <label htmlFor="scholar-name-input">Scholar Name</label>
                  <input
                    id="scholar-name-input"
                    type="text"
                    value={draftName}
                    onChange={e => setDraftName(e.target.value)}
                    maxLength={32}
                    className="goal-popover__input"
                  />
                </div>
                <div className="bento-identity__edit-row">
                  <label htmlFor="scholar-alias-input">Chinese Name / Seal (汉字)</label>
                  <input
                    id="scholar-alias-input"
                    type="text"
                    value={draftAlias}
                    onChange={e => setDraftAlias(e.target.value)}
                    maxLength={6}
                    className="goal-popover__input font-noto-sc"
                  />
                </div>
                <div className="bento-identity__edit-row">
                  <label htmlFor="scholar-level-select">Target HSK Band</label>
                  <select
                    id="scholar-level-select"
                    value={draftLevel}
                    onChange={e => setDraftLevel(Number(e.target.value))}
                    className="goal-popover__input"
                  >
                    {[1, 2, 3, 4, 5, 6].map(lvl => (
                      <option key={lvl} value={lvl}>
                        HSK Level {lvl}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="bento-identity__edit-actions">
                  <button type="submit" className="button button--primary button--sm">
                    Save Profile
                  </button>
                </div>
              </form>
            )}

            {/* Name & Role Tag */}
            <div className="bento-identity__name-row">
              <h2 className="bento-identity__name">{profile.displayName}</h2>
              <span className="bento-identity__role-tag">{scholarRank.badge}</span>
            </div>

            {/* Skills Section */}
            <div className="bento-identity__group">
              <span className="bento-identity__group-label">Core Mandarin Competencies</span>
              <div className="bento-identity__tags">
                <span className="bento-identity__tag">Simplified Hanzi</span>
                <span className="bento-identity__tag">Pinyin &amp; Tones</span>
                <span className="bento-identity__tag">Stroke Calligraphy</span>
                <span className="bento-identity__tag">Oral Pronunciation</span>
                <span className="bento-identity__tag">HSK Grammar</span>
              </div>
            </div>

            {/* Study Mode Section */}
            <div className="bento-identity__group">
              <span className="bento-identity__group-label">Study Mode</span>
              <div className="bento-identity__tags">
                <span className="bento-identity__tag">Self-Paced</span>
                <span className="bento-identity__tag tabular-nums">{dailyTarget} Words / Day</span>
                <span className="bento-identity__tag font-noto-sc">{scholarRank.hanzi}</span>
              </div>
            </div>

            {/* Two Side-by-Side Info Boxes (Target Level & Timezone) */}
            <div className="bento-identity__meta-boxes">
              <div className="bento-identity__meta-box">
                <span className="bento-identity__meta-label">Target Focus</span>
                <span className="bento-identity__meta-value">
                  HSK Level {profile.targetLevel}
                </span>
              </div>
              <div className="bento-identity__meta-box">
                <span className="bento-identity__meta-label">Study Timezone</span>
                <span className="bento-identity__meta-value tabular-nums">{userTimezone}</span>
              </div>
            </div>

            {/* Active Curriculum Tracks (Matches "Job Applications" list in reference) */}
            <div className="bento-identity__tracks">
              <h3 className="bento-identity__tracks-title">Active Curriculum Tracks</h3>

              <div className="bento-identity__track-list">
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateToLessons) onNavigateToLessons();
                    else if (onNavigateToLearn) onNavigateToLearn();
                  }}
                  className="bento-track-item"
                >
                  <div className="bento-track-item__logo bento-track-item__logo--teal font-noto-sc">
                    初1
                  </div>
                  <div className="bento-track-item__info">
                    <span className="bento-track-item__name">Mastering Chinese · HSK 1</span>
                    <span className="bento-track-item__sub tabular-nums">
                      Units 1–4 · {hsk1Count} / {(vocabData[1] || []).length} words learned
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateToLessons) onNavigateToLessons();
                    else if (onNavigateToLearn) onNavigateToLearn();
                  }}
                  className="bento-track-item"
                >
                  <div className="bento-track-item__logo bento-track-item__logo--rose font-noto-sc">
                    初2
                  </div>
                  <div className="bento-track-item__info">
                    <span className="bento-track-item__name">Mastering Chinese · HSK 2</span>
                    <span className="bento-track-item__sub tabular-nums">
                      Units 5–8 · {hsk2Count} / {(vocabData[2] || []).length} words learned
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (onSelectHSKLevel) onSelectHSKLevel(profile.targetLevel);
                    if (onNavigateToLearn) onNavigateToLearn();
                  }}
                  className="bento-track-item"
                >
                  <div className="bento-track-item__logo bento-track-item__logo--dark font-noto-sc">
                    词典
                  </div>
                  <div className="bento-track-item__info">
                    <span className="bento-track-item__name">HSK 1–6 Complete Lexicon</span>
                    <span className="bento-track-item__sub tabular-nums">
                      {masteredCount} mastered · {bookmarkedCount} bookmarked
                    </span>
                  </div>
                </button>

                {showAllTracks &&
                  levelBreakdown.slice(2).map(item => (
                    <button
                      key={item.level}
                      type="button"
                      onClick={() => {
                        if (onSelectHSKLevel) onSelectHSKLevel(item.level);
                        if (onNavigateToLearn) onNavigateToLearn();
                      }}
                      className="bento-track-item animate-fade-in"
                    >
                      <div className="bento-track-item__logo bento-track-item__logo--blue tabular-nums">
                        L{item.level}
                      </div>
                      <div className="bento-track-item__info">
                        <span className="bento-track-item__name">HSK Level {item.level} Vocabulary</span>
                        <span className="bento-track-item__sub tabular-nums">
                          {item.learned} / {item.total} studied ({item.pct}%)
                        </span>
                      </div>
                    </button>
                  ))}
              </div>

              <button
                type="button"
                onClick={() => setShowAllTracks(prev => !prev)}
                className="bento-identity__see-more"
              >
                <span>{showAllTracks ? 'Show fewer tracks' : 'See 4 more HSK levels'}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transform: showAllTracks ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          </aside>

          {/* RIGHT COLUMN: 3-Row Bento Analytics & Milestone Grid */}
          <div className="bento-analytics-col">
            {/* ROW 1: 3 Top Percentage KPI Cards */}
            <div className="bento-top-kpis">
              <div className="bento-kpi-box">
                <div className="bento-kpi-box__value tabular-nums">
                  {dailyGoalPct}
                  <span className="bento-kpi-box__pct">%</span>
                </div>
                <span className="bento-kpi-box__label">
                  Daily Goal ({todayCount}/{dailyTarget} Words)
                </span>
              </div>

              <div className="bento-kpi-box">
                <div className="bento-kpi-box__value tabular-nums">
                  {quizAccuracyPct}
                  <span className="bento-kpi-box__pct">%</span>
                </div>
                <span className="bento-kpi-box__label">Retention &amp; Quiz Mastery</span>
              </div>

              <div className="bento-kpi-box">
                <div className="bento-kpi-box__value tabular-nums">
                  {badgeCompletionPct}
                  <span className="bento-kpi-box__pct">%</span>
                </div>
                <span className="bento-kpi-box__label">
                  Milestones ({unlockedCount}/{totalBadges} Badges)
                </span>
              </div>
            </div>

            {/* ROW 2: Semi-Circular Aspect Score Gauge + Overall Scholar Summary */}
            <div className="bento-middle-split">
              {/* Semi-Circular Arc Gauge Card */}
              <div className="bento-gauge-card">
                <div className="bento-gauge-card__header">
                  <h3 className="bento-card-title">Proficiency Index</h3>
                  <span className="bento-gauge-card__tag font-noto-sc">{scholarRank.hanzi}</span>
                </div>

                <div className="bento-gauge-wrap">
                  <svg className="bento-gauge-svg" viewBox="0 0 220 130">
                    <defs>
                      <linearGradient id="scholarGaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4f46e5" />
                        <stop offset="55%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                    {/* Background Track Arc */}
                    <path
                      d="M 28 110 A 82 82 0 0 1 192 110"
                      fill="none"
                      stroke="currentColor"
                      className="bento-gauge-track"
                      strokeWidth="14"
                      strokeLinecap="round"
                    />
                    {/* Active Progress Arc */}
                    <path
                      d="M 28 110 A 82 82 0 0 1 192 110"
                      fill="none"
                      stroke="url(#scholarGaugeGrad)"
                      strokeWidth="14"
                      strokeLinecap="round"
                      strokeDasharray={gaugeCircumference}
                      strokeDashoffset={gaugeDashOffset}
                      className="bento-gauge-fill"
                    />
                  </svg>
                  <div className="bento-gauge-center">
                    <span className="bento-gauge-score tabular-nums">{aspectScore}</span>
                  </div>
                </div>
              </div>

              {/* Overall Scholar Summary Card */}
              <div className="bento-summary-card">
                <h3 className="bento-card-title">Overall Summary</h3>

                <div className="bento-summary-list">
                  <div className="bento-summary-item">
                    <div className="bento-summary-item__icon bento-summary-item__icon--gold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    </div>
                    <div className="bento-summary-item__body">
                      <h4 className="bento-summary-item__title">{scholarRank.title}</h4>
                      <p className="bento-summary-item__desc">
                        Unlocked {unlockedCount} of {totalBadges} milestone badges across the HSK curriculum.
                      </p>
                    </div>
                  </div>

                  <div className="bento-summary-item">
                    <div className="bento-summary-item__icon bento-summary-item__icon--indigo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                      </svg>
                    </div>
                    <div className="bento-summary-item__body">
                      <h4 className="bento-summary-item__title">Lexical &amp; Tonal Acquisition</h4>
                      <p className="bento-summary-item__desc">
                        {totalLearnedCount} unique words studied, {masteredCount} mastered across {Math.max(1, levelsExplored)} HSK bands.
                      </p>
                    </div>
                  </div>

                  <div className="bento-summary-item">
                    <div className="bento-summary-item__icon bento-summary-item__icon--emerald">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                        <path d="M3 3v5h5" />
                        <path d="M12 7v5l4 2" />
                      </svg>
                    </div>
                    <div className="bento-summary-item__body">
                      <h4 className="bento-summary-item__title">Study Streak &amp; Cadence</h4>
                      <p className="bento-summary-item__desc">
                        {streakData.currentStreak} day current streak · {bestStreak} day personal record · {daysGoalMet} daily goals met.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 3: Active Milestones & 3-Column Segmented Selector (Inspired by "Jake's active interviews") */}
            <div className="bento-milestones-block">
              <div className="bento-milestones-header">
                <h3 className="bento-milestones-title">
                  {profile.displayName.split(' ')[0]}&apos;s Learning Milestones
                </h3>
                <div className="bento-milestones-sub">
                  <span>HSK Proficiency Badges</span>
                  <span className="bento-milestones-dot" aria-hidden="true">•</span>
                  <span className="font-noto-sc">{scholarRank.hanzi}</span>
                </div>
              </div>

              {/* 3-Column Interactive Segmented Stat Cards with Bottom Progress Bars */}
              <div className="bento-stat-tabs" role="tablist" aria-label="Milestone badge filters">
                <button
                  type="button"
                  role="tab"
                  aria-selected={filterMode === 'all'}
                  onClick={() => setFilterMode('all')}
                  className={`bento-stat-tab ${filterMode === 'all' ? 'bento-stat-tab--active' : ''}`}
                >
                  <span className="bento-stat-tab__num tabular-nums">{totalBadges}</span>
                  <span className="bento-stat-tab__label">All Milestones</span>
                  <div className="bento-stat-tab__bar">
                    <div className="bento-stat-tab__bar-fill" style={{ width: '100%' }} />
                  </div>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={filterMode === 'unlocked'}
                  onClick={() => setFilterMode('unlocked')}
                  className={`bento-stat-tab ${filterMode === 'unlocked' ? 'bento-stat-tab--active' : ''}`}
                >
                  <span className="bento-stat-tab__num tabular-nums">{unlockedCount}</span>
                  <span className="bento-stat-tab__label">Unlocked</span>
                  <div className="bento-stat-tab__bar">
                    <div
                      className="bento-stat-tab__bar-fill"
                      style={{ width: `${Math.max(12, badgeCompletionPct)}%` }}
                    />
                  </div>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={filterMode === 'locked'}
                  onClick={() => setFilterMode('locked')}
                  className={`bento-stat-tab ${filterMode === 'locked' ? 'bento-stat-tab--active' : ''}`}
                >
                  <span className="bento-stat-tab__num tabular-nums">{lockedCount}</span>
                  <span className="bento-stat-tab__label">In Progress</span>
                  <div className="bento-stat-tab__bar">
                    <div
                      className="bento-stat-tab__bar-fill"
                      style={{ width: `${Math.max(12, 100 - badgeCompletionPct)}%` }}
                    />
                  </div>
                </button>
              </div>

              {/* Selected Badge Detail Callout */}
              {selectedBadge && (
                <div className={`badge-detail-banner badge-detail-banner--${selectedBadge.accentColor} animate-fade-in`}>
                  <div className="badge-detail-banner__left">
                    <div
                      className={`badge-emblem badge-emblem--${selectedBadge.accentColor} ${
                        selectedBadge.unlocked ? 'badge-emblem--unlocked' : 'badge-emblem--locked'
                      }`}
                    >
                      {renderBadgeSvg(selectedBadge.iconType)}
                    </div>
                    <div>
                      <div className="vocab-card__meta">
                        <span>{selectedBadge.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-noto-sc">
                          {selectedBadge.hanziSeal} ({selectedBadge.pinyin})
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{selectedBadge.unlocked ? 'Unlocked ✓' : 'In Progress'}</span>
                      </div>
                      <h4 className="badge-detail-banner__title">{selectedBadge.title}</h4>
                      <p className="badge-detail-banner__desc">{selectedBadge.description}</p>
                    </div>
                  </div>
                  <div className="badge-detail-banner__right">
                    <span className="badge-detail-banner__progress tabular-nums">
                      {selectedBadge.currentValue} / {selectedBadge.targetValue} {selectedBadge.unit}
                    </span>
                    <div className="badge-detail-banner__actions">
                      {!selectedBadge.unlocked && (
                        <button
                          type="button"
                          className="button button--primary button--sm"
                          onClick={() => {
                            if (selectedBadge.id === 'hsk1-foundation' && onSelectHSKLevel && onNavigateToLearn) {
                              onSelectHSKLevel(1);
                              onNavigateToLearn();
                            } else if (selectedBadge.id === 'hsk2-elementary' && onSelectHSKLevel && onNavigateToLearn) {
                              onSelectHSKLevel(2);
                              onNavigateToLearn();
                            } else if (onNavigateToPractice) {
                              onNavigateToPractice();
                            } else if (onNavigateToLearn) {
                              onNavigateToLearn();
                            }
                          }}
                        >
                          Work Toward Badge →
                        </button>
                      )}
                      <button
                        type="button"
                        className="button button--secondary button--sm"
                        onClick={() => setSelectedBadgeId(null)}
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Badges Grid */}
              {filteredBadges.length === 0 ? (
                <div className="badges-empty-state">
                  <p>
                    {filterMode === 'unlocked'
                      ? 'No badges unlocked yet. Study a word or complete a practice drill to unlock your first badge!'
                      : 'Congratulations! You have unlocked every milestone badge in this view.'}
                  </p>
                  {filterMode === 'unlocked' && onNavigateToPractice && (
                    <button type="button" onClick={onNavigateToPractice} className="button button--primary button--sm">
                      Start Practicing Now →
                    </button>
                  )}
                </div>
              ) : (
                <div className="badges-grid">
                  {filteredBadges.map(badge => {
                    const pct = Math.min(100, Math.round((badge.currentValue / badge.targetValue) * 100));
                    const isSelected = selectedBadgeId === badge.id;

                    return (
                      <button
                        key={badge.id}
                        type="button"
                        onClick={() => setSelectedBadgeId(prev => (prev === badge.id ? null : badge.id))}
                        className={`badge-card ${
                          badge.unlocked ? `badge-card--unlocked badge-card--${badge.accentColor}` : 'badge-card--locked'
                        } ${isSelected ? 'badge-card--selected' : ''}`}
                        aria-pressed={isSelected}
                      >
                        <div className="badge-card__top">
                          <div
                            className={`badge-emblem badge-emblem--${badge.accentColor} ${
                              badge.unlocked ? 'badge-emblem--unlocked' : 'badge-emblem--locked'
                            }`}
                          >
                            {renderBadgeSvg(badge.iconType)}
                          </div>

                          <span
                            className={`badge-card__status tabular-nums ${
                              badge.unlocked ? 'badge-card__status--unlocked' : ''
                            }`}
                          >
                            {badge.unlocked ? '✓ Unlocked' : `${badge.currentValue} / ${badge.targetValue}`}
                          </span>
                        </div>

                        <div className="badge-card__body">
                          <h4 className="badge-card__title">{badge.title}</h4>
                          <p className="badge-card__desc">{badge.description}</p>
                        </div>

                        <div className="badge-card__bar-track">
                          <div
                            className={`badge-card__bar-fill ${
                              badge.unlocked ? `badge-card__bar-fill--${badge.accentColor}` : ''
                            }`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Badges;
