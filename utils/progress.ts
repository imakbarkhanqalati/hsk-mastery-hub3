import { getLocalDateString } from './streak';

export interface UserVocabProgress {
  masteredWords: string[]; // array of word chars
  bookmarkedWords: string[]; // array of word chars
  quizHistory: {
    date: string;
    level: number;
    score: number;
    total: number;
  }[];
  dailyGoalTarget: number; // target number of words to learn per day
  dailyStudiedByDate: Record<string, string[]>; // YYYY-MM-DD -> unique word chars studied that day
}

const PROGRESS_STORAGE_KEY = 'hsk-vocab-progress';
export const DEFAULT_DAILY_GOAL = 10;

export const getVocabProgress = (): UserVocabProgress => {
  const defaultProgress: UserVocabProgress = {
    masteredWords: [],
    bookmarkedWords: [],
    quizHistory: [],
    dailyGoalTarget: DEFAULT_DAILY_GOAL,
    dailyStudiedByDate: {},
  };

  if (typeof window === 'undefined' || !window.localStorage) {
    return defaultProgress;
  }

  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return defaultProgress;
    const parsed = JSON.parse(raw) as Partial<UserVocabProgress>;
    const rawTarget = typeof parsed.dailyGoalTarget === 'number' ? parsed.dailyGoalTarget : DEFAULT_DAILY_GOAL;
    const clampedTarget = Math.max(1, Math.min(200, Math.round(rawTarget)));

    const studiedByDate: Record<string, string[]> = {};
    if (parsed.dailyStudiedByDate && typeof parsed.dailyStudiedByDate === 'object') {
      for (const [k, v] of Object.entries(parsed.dailyStudiedByDate)) {
        if (Array.isArray(v)) {
          studiedByDate[k] = v.filter((item): item is string => typeof item === 'string');
        }
      }
    }

    return {
      masteredWords: Array.isArray(parsed.masteredWords) ? parsed.masteredWords : [],
      bookmarkedWords: Array.isArray(parsed.bookmarkedWords) ? parsed.bookmarkedWords : [],
      quizHistory: Array.isArray(parsed.quizHistory) ? parsed.quizHistory : [],
      dailyGoalTarget: clampedTarget,
      dailyStudiedByDate: studiedByDate,
    };
  } catch (err) {
    console.error('Failed to read vocab progress:', err);
    return defaultProgress;
  }
};

const saveVocabProgress = (progress: UserVocabProgress) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
      window.dispatchEvent(new CustomEvent('vocab-progress-updated', { detail: progress }));
    } catch (err) {
      console.error('Failed to save vocab progress:', err);
    }
  }
};

export const setDailyGoalTarget = (target: number): UserVocabProgress => {
  const current = getVocabProgress();
  const clamped = Math.max(1, Math.min(200, Math.round(Number(target) || DEFAULT_DAILY_GOAL)));
  const updated: UserVocabProgress = {
    ...current,
    dailyGoalTarget: clamped,
  };
  saveVocabProgress(updated);
  return updated;
};

export const mergeCloudVocabProgress = (cloud: {
  masteredChars?: string[];
  bookmarkedChars?: string[];
  dailyGoalTarget?: number;
  dailyStudiedByDate?: Record<string, string[]>;
}): UserVocabProgress => {
  const current = getVocabProgress();
  const mergedMastered = Array.from(
    new Set([...current.masteredWords, ...(Array.isArray(cloud.masteredChars) ? cloud.masteredChars : [])])
  );
  const mergedBookmarked = Array.from(
    new Set([...current.bookmarkedWords, ...(Array.isArray(cloud.bookmarkedChars) ? cloud.bookmarkedChars : [])])
  );
  const mergedByDate: Record<string, string[]> = { ...current.dailyStudiedByDate };
  if (cloud.dailyStudiedByDate && typeof cloud.dailyStudiedByDate === 'object') {
    for (const [dateStr, chars] of Object.entries(cloud.dailyStudiedByDate)) {
      if (Array.isArray(chars)) {
        const existing = mergedByDate[dateStr] || [];
        mergedByDate[dateStr] = Array.from(new Set([...existing, ...chars]));
      }
    }
  }
  const updated: UserVocabProgress = {
    ...current,
    masteredWords: mergedMastered,
    bookmarkedWords: mergedBookmarked,
    dailyGoalTarget:
      typeof cloud.dailyGoalTarget === 'number' && cloud.dailyGoalTarget >= 1
        ? Math.min(200, Math.round(cloud.dailyGoalTarget))
        : current.dailyGoalTarget,
    dailyStudiedByDate: mergedByDate,
  };
  saveVocabProgress(updated);
  return updated;
};

export const recordWordStudied = (char: string): UserVocabProgress => {
  const cleanChar = char.trim();
  const current = getVocabProgress();
  if (!cleanChar) return current;

  const today = getLocalDateString();
  const existingToday = current.dailyStudiedByDate[today] || [];
  if (existingToday.includes(cleanChar)) {
    return current;
  }

  const nextByDate: Record<string, string[]> = {
    ...current.dailyStudiedByDate,
    [today]: [...existingToday, cleanChar],
  };

  const updated: UserVocabProgress = {
    ...current,
    dailyStudiedByDate: nextByDate,
  };
  saveVocabProgress(updated);
  return updated;
};

export const getTodayStudiedWords = (progress: UserVocabProgress = getVocabProgress()): string[] => {
  const today = getLocalDateString();
  return progress.dailyStudiedByDate[today] || [];
};

export const getLastSevenDaysGoalStatus = (
  progress: UserVocabProgress = getVocabProgress()
): {
  date: string;
  dayLabel: string;
  count: number;
  target: number;
  met: boolean;
  isToday: boolean;
}[] => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const todayStr = getLocalDateString();
  const target = progress.dailyGoalTarget || DEFAULT_DAILY_GOAL;
  const result = [];

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = getLocalDateString(d);
    const count = (progress.dailyStudiedByDate[dateStr] || []).length;
    result.push({
      date: dateStr,
      dayLabel: days[d.getDay()],
      count,
      target,
      met: count >= target,
      isToday: dateStr === todayStr,
    });
  }

  return result;
};

export const toggleMasteredWord = (char: string): UserVocabProgress => {
  const current = getVocabProgress();
  const exists = current.masteredWords.includes(char);
  const today = getLocalDateString();
  const existingToday = current.dailyStudiedByDate[today] || [];
  const nextToday = !exists && !existingToday.includes(char) ? [...existingToday, char] : existingToday;

  const updated: UserVocabProgress = {
    ...current,
    masteredWords: exists
      ? current.masteredWords.filter(c => c !== char)
      : [...current.masteredWords, char],
    dailyStudiedByDate: {
      ...current.dailyStudiedByDate,
      [today]: nextToday,
    },
  };
  saveVocabProgress(updated);
  return updated;
};

export const markWordMastered = (char: string): UserVocabProgress => {
  const current = getVocabProgress();
  const today = getLocalDateString();
  const existingToday = current.dailyStudiedByDate[today] || [];
  const nextToday = existingToday.includes(char) ? existingToday : [...existingToday, char];
  const nextMastered = current.masteredWords.includes(char)
    ? current.masteredWords
    : [...current.masteredWords, char];

  const updated: UserVocabProgress = {
    ...current,
    masteredWords: nextMastered,
    dailyStudiedByDate: {
      ...current.dailyStudiedByDate,
      [today]: nextToday,
    },
  };
  saveVocabProgress(updated);
  return updated;
};

export const toggleBookmarkedWord = (char: string): UserVocabProgress => {
  const current = getVocabProgress();
  const exists = current.bookmarkedWords.includes(char);
  const updated: UserVocabProgress = {
    ...current,
    bookmarkedWords: exists
      ? current.bookmarkedWords.filter(c => c !== char)
      : [...current.bookmarkedWords, char],
  };
  saveVocabProgress(updated);
  return updated;
};

export const stripPosAnnotation = (text: string): string => {
  return text.replace(/\((?:动词?|名词?|形容词?|副词?|量词?|介词?|助动词?|助词?|叹词?|连词?|代词?)\)/g, '').trim();
};

export const speakChineseText = (text: string, rate = 0.85) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const cleanText = stripPosAnnotation(text);
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'zh-CN';
  utterance.rate = rate;
  const voices = window.speechSynthesis.getVoices();
  const zhVoice = voices.find(
    v => v.lang === 'zh-CN' || v.lang === 'zh_CN' || v.lang.startsWith('zh')
  );
  if (zhVoice) {
    utterance.voice = zhVoice;
  }
  window.speechSynthesis.speak(utterance);
};

export const detectPinyinTones = (pinyin: string): { syllable: string; tone: number; toneName: string }[] => {
  const toneMap: Record<string, number> = {
    ā: 1, á: 2, ǎ: 3, à: 4,
    ē: 1, é: 2, ě: 3, è: 4,
    ī: 1, í: 2, ǐ: 3, ì: 4,
    ō: 1, ó: 2, ǒ: 3, ò: 4,
    ū: 1, ú: 2, ǔ: 3, ù: 4,
    ǖ: 1, ǘ: 2, ǚ: 3, ǜ: 4,
  };
  const toneLabels: Record<number, string> = {
    1: '1st Tone (High Flat ˉ)',
    2: '2nd Tone (Rising ˊ)',
    3: '3rd Tone (Dipping ˇ)',
    4: '4th Tone (Falling ˋ)',
    5: 'Neutral Tone (·)',
  };

  return pinyin
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(syllable => {
      let detected = 5;
      for (const ch of syllable) {
        if (toneMap[ch]) {
          detected = toneMap[ch];
          break;
        }
      }
      return {
        syllable,
        tone: detected,
        toneName: toneLabels[detected],
      };
    });
};
