export interface DailyStreakData {
  currentStreak: number;
  longestStreak: number;
  lastPracticeDate: string | null;
  practiceHistory: string[];
}

const STREAK_STORAGE_KEY = 'hsk-daily-streak';

export const getLocalDateString = (date: Date = new Date()): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getYesterdayDateString = (now: Date = new Date()): string => {
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  return getLocalDateString(yesterday);
};

export const getStreakData = (): DailyStreakData => {
  const defaultData: DailyStreakData = {
    currentStreak: 0,
    longestStreak: 0,
    lastPracticeDate: null,
    practiceHistory: [],
  };

  if (typeof window === 'undefined' || !window.localStorage) {
    return defaultData;
  }

  try {
    const raw = localStorage.getItem(STREAK_STORAGE_KEY);
    if (!raw) return defaultData;

    const parsed = JSON.parse(raw) as Partial<DailyStreakData>;
    const today = getLocalDateString();
    const yesterday = getYesterdayDateString();

    const lastPracticeDate = typeof parsed.lastPracticeDate === 'string' ? parsed.lastPracticeDate : null;
    let currentStreak = typeof parsed.currentStreak === 'number' ? parsed.currentStreak : 0;
    const longestStreak = typeof parsed.longestStreak === 'number' ? parsed.longestStreak : 0;
    const practiceHistory = Array.isArray(parsed.practiceHistory) ? parsed.practiceHistory : [];

    // Reset currentStreak if last practice was earlier than yesterday
    if (lastPracticeDate && lastPracticeDate !== today && lastPracticeDate !== yesterday) {
      currentStreak = 0;
    }

    return {
      currentStreak,
      longestStreak: Math.max(longestStreak, currentStreak),
      lastPracticeDate,
      practiceHistory,
    };
  } catch (err) {
    console.error('Failed to read streak data from localStorage:', err);
    return defaultData;
  }
};

export const recordDailyPractice = (): DailyStreakData => {
  const current = getStreakData();
  const today = getLocalDateString();
  const yesterday = getYesterdayDateString();

  if (current.lastPracticeDate === today) {
    return current;
  }

  const nextStreak = current.lastPracticeDate === yesterday ? current.currentStreak + 1 : 1;
  const nextLongest = Math.max(current.longestStreak, nextStreak);
  const nextHistory = current.practiceHistory.includes(today)
    ? current.practiceHistory
    : [...current.practiceHistory.slice(-60), today];

  const updated: DailyStreakData = {
    currentStreak: nextStreak,
    longestStreak: nextLongest,
    lastPracticeDate: today,
    practiceHistory: nextHistory,
  };

  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      localStorage.setItem(STREAK_STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('streak-updated', { detail: updated }));
    } catch (err) {
      console.error('Failed to save streak data to localStorage:', err);
    }
  }

  return updated;
};

export const mergeCloudStreakData = (cloud: {
  currentStreak?: number;
  longestStreak?: number;
  lastPracticeDate?: string | null;
  practiceHistory?: string[];
}): DailyStreakData => {
  const current = getStreakData();
  const mergedHistory = Array.from(
    new Set([
      ...current.practiceHistory,
      ...(Array.isArray(cloud.practiceHistory) ? cloud.practiceHistory : []),
    ])
  ).sort();
  const lastDate =
    cloud.lastPracticeDate && (!current.lastPracticeDate || cloud.lastPracticeDate > current.lastPracticeDate)
      ? cloud.lastPracticeDate
      : current.lastPracticeDate;
  const updated: DailyStreakData = {
    currentStreak: Math.max(current.currentStreak, cloud.currentStreak || 0),
    longestStreak: Math.max(current.longestStreak, cloud.longestStreak || 0),
    lastPracticeDate: lastDate,
    practiceHistory: mergedHistory.slice(-60),
  };

  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      localStorage.setItem(STREAK_STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('streak-updated', { detail: updated }));
    } catch (err) {
      console.error('Failed to save merged streak data:', err);
    }
  }
  return updated;
};

export const getLastSevenDaysStatus = (practiceHistory: string[]): {
  date: string;
  dayLabel: string;
  practiced: boolean;
  isToday: boolean;
}[] => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const todayStr = getLocalDateString();
  const result = [];

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = getLocalDateString(d);
    result.push({
      date: dateStr,
      dayLabel: days[d.getDay()],
      practiced: practiceHistory.includes(dateStr),
      isToday: dateStr === todayStr,
    });
  }

  return result;
};
