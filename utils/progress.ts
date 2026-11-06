export interface UserVocabProgress {
  masteredWords: string[]; // array of word chars
  bookmarkedWords: string[]; // array of word chars
  quizHistory: {
    date: string;
    level: number;
    score: number;
    total: number;
  }[];
}

const PROGRESS_STORAGE_KEY = 'hsk-vocab-progress';

export const getVocabProgress = (): UserVocabProgress => {
  const defaultProgress: UserVocabProgress = {
    masteredWords: [],
    bookmarkedWords: [],
    quizHistory: [],
  };

  if (typeof window === 'undefined' || !window.localStorage) {
    return defaultProgress;
  }

  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return defaultProgress;
    const parsed = JSON.parse(raw) as Partial<UserVocabProgress>;
    return {
      masteredWords: Array.isArray(parsed.masteredWords) ? parsed.masteredWords : [],
      bookmarkedWords: Array.isArray(parsed.bookmarkedWords) ? parsed.bookmarkedWords : [],
      quizHistory: Array.isArray(parsed.quizHistory) ? parsed.quizHistory : [],
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

export const toggleMasteredWord = (char: string): UserVocabProgress => {
  const current = getVocabProgress();
  const exists = current.masteredWords.includes(char);
  const updated: UserVocabProgress = {
    ...current,
    masteredWords: exists
      ? current.masteredWords.filter(c => c !== char)
      : [...current.masteredWords, char],
  };
  saveVocabProgress(updated);
  return updated;
};

export const markWordMastered = (char: string): UserVocabProgress => {
  const current = getVocabProgress();
  if (current.masteredWords.includes(char)) return current;
  const updated: UserVocabProgress = {
    ...current,
    masteredWords: [...current.masteredWords, char],
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
