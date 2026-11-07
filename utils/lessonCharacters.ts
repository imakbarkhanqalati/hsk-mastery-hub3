import type { Lesson } from '../data/lessons';

import markAvatar from '../src/assets/images/char_make_mark_1794047779823.jpg';
import jinZhiyingAvatar from '../src/assets/images/char_jin_zhiying_1794047780913.jpg';
import lilyAvatar from '../src/assets/images/char_lili_lily_1794047783027.jpg';
import aliAvatar from '../src/assets/images/char_ali_kenya_1794047783288.jpg';
import hirataAvatar from '../src/assets/images/char_pingtian_hirata_1794047783836.jpg';
import jessieAvatar from '../src/assets/images/char_jiexi_jessie_1794047785945.jpg';
import judyAvatar from '../src/assets/images/char_zhudi_judy_1794047787232.jpg';
import teacherLiAvatar from '../src/assets/images/char_teacher_li_yue_1794047788329.jpg';

export interface TextbookCharacterProfile {
  id: string;
  hanziName: string;
  pinyin: string;
  englishName: string;
  role: string;
  origin: string;
  sealChar: string;
  avatarUrl: string;
  accentColor: string;
  isCoreCast?: boolean;
}

/**
 * Generates a clean, editorial SVG portrait data-URI for supporting textbook characters
 * so every speaker in every lesson has a crisp visual portrait + Hanzi emblem.
 */
function createSupportingPortraitSvg(options: {
  bgStart: string;
  bgEnd: string;
  hairColor: string;
  skinColor: string;
  shirtColor: string;
  collarColor: string;
  accessory?: 'glasses' | 'hat' | 'stethoscope' | 'headset' | 'apron' | 'bun';
  isFemale?: boolean;
}): string {
  const {
    bgStart,
    bgEnd,
    hairColor,
    skinColor,
    shirtColor,
    collarColor,
    accessory,
    isFemale = false,
  } = options;

  const hairBack = isFemale
    ? `<path d="M28 48 C26 72, 30 88, 36 96 L84 96 C90 88, 94 72, 92 48 C90 26, 76 18, 60 18 C44 18, 30 26, 28 48 Z" fill="${hairColor}" />`
    : `<path d="M32 45 C32 24, 45 18, 60 18 C75 18, 88 24, 88 45 Z" fill="${hairColor}" />`;

  const hairTop = isFemale
    ? `<path d="M33 44 C35 26, 48 20, 60 20 C74 20, 85 27, 87 44 C78 35, 68 32, 58 34 C46 36, 38 40, 33 44 Z" fill="${hairColor}" />`
    : `<path d="M32 44 C33 25, 45 18, 60 18 C76 18, 87 25, 88 44 C80 34, 68 31, 56 33 C45 35, 37 39, 32 44 Z" fill="${hairColor}" />`;

  let accessorySvg = '';
  if (accessory === 'glasses') {
    accessorySvg = `
      <rect x="41" y="46" width="14" height="10" rx="3" fill="none" stroke="#334155" stroke-width="2" />
      <rect x="65" y="46" width="14" height="10" rx="3" fill="none" stroke="#334155" stroke-width="2" />
      <line x1="55" y1="50" x2="65" y2="50" stroke="#334155" stroke-width="2" />
    `;
  } else if (accessory === 'hat') {
    accessorySvg = `
      <path d="M30 34 C34 20, 46 15, 60 15 C74 15, 86 20, 90 34 Z" fill="${shirtColor}" />
      <rect x="26" y="32" width="68" height="5" rx="2.5" fill="#1e293b" />
    `;
  } else if (accessory === 'stethoscope') {
    accessorySvg = `
      <path d="M44 78 C44 94, 76 94, 76 78" fill="none" stroke="#0f766e" stroke-width="3" stroke-linecap="round" />
      <circle cx="60" cy="96" r="5" fill="#14b8a6" stroke="#0f766e" stroke-width="2" />
    `;
  } else if (accessory === 'bun') {
    accessorySvg = `<circle cx="60" cy="16" r="10" fill="${hairColor}" />`;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bgStart}" />
        <stop offset="100%" stop-color="${bgEnd}" />
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="60" fill="url(#bg)" />
    ${accessory === 'bun' ? accessorySvg : ''}
    ${hairBack}
    <!-- Shoulders & Torso -->
    <path d="M18 120 C20 90, 38 80, 60 80 C82 80, 100 90, 102 120 Z" fill="${shirtColor}" />
    <path d="M46 80 L60 98 L74 80 Z" fill="${collarColor}" />
    <!-- Neck -->
    <rect x="52" y="68" width="16" height="16" rx="6" fill="${skinColor}" />
    <!-- Face -->
    <rect x="35" y="26" width="50" height="50" rx="23" fill="${skinColor}" />
    <!-- Eyes -->
    <circle cx="48" cy="51" r="2.8" fill="#1e293b" />
    <circle cx="72" cy="51" r="2.8" fill="#1e293b" />
    <!-- Eyebrows -->
    <path d="M43 44 Q48 41 53 44" fill="none" stroke="${hairColor}" stroke-width="2.2" stroke-linecap="round" />
    <path d="M67 44 Q72 41 77 44" fill="none" stroke="${hairColor}" stroke-width="2.2" stroke-linecap="round" />
    <!-- Smile -->
    <path d="M52 63 Q60 69 68 63" fill="none" stroke="#b45309" stroke-width="2.4" stroke-linecap="round" />
    ${hairTop}
    ${accessory !== 'bun' ? accessorySvg : ''}
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * Canonical Directory of every character appearing across Mastering Chinese (会通汉语 精编版)
 * Elementary 1, 2, 3, and 4 (Lessons 1–16) and future units.
 */
export const TEXTBOOK_CHARACTER_DIRECTORY: Record<string, TextbookCharacterProfile> = {
  马克: {
    id: 'make',
    hanziName: '马克',
    pinyin: 'Mǎkè',
    englishName: 'Mark',
    role: 'Elementary Class Student · Ali’s Roommate',
    origin: 'United States (美国留学生)',
    sealChar: '马',
    avatarUrl: markAvatar,
    accentColor: '#2563eb',
    isCoreCast: true,
  },
  金志英: {
    id: 'jin_zhiying',
    hanziName: '金志英',
    pinyin: 'Jīn Zhìyīng',
    englishName: 'Jin Zhiying',
    role: 'Elementary Class Student',
    origin: 'South Korea (韩国留学生)',
    sealChar: '金',
    avatarUrl: jinZhiyingAvatar,
    accentColor: '#db2777',
    isCoreCast: true,
  },
  莉莉: {
    id: 'lili',
    hanziName: '莉莉',
    pinyin: 'Lìlì',
    englishName: 'Lily',
    role: 'Elementary Class Student · Judy’s Roommate',
    origin: 'United States (美国留学生)',
    sealChar: '莉',
    avatarUrl: lilyAvatar,
    accentColor: '#059669',
    isCoreCast: true,
  },
  阿里: {
    id: 'ali',
    hanziName: '阿里',
    pinyin: 'Ālǐ',
    englishName: 'Ali',
    role: 'Elementary Class Student · Mark’s Roommate',
    origin: 'Kenya (肯尼亚留学生)',
    sealChar: '阿',
    avatarUrl: aliAvatar,
    accentColor: '#dc2626',
    isCoreCast: true,
  },
  平田: {
    id: 'pingtian',
    hanziName: '平田',
    pinyin: 'Píngtián',
    englishName: 'Hirata',
    role: 'Elementary Class Student',
    origin: 'Japan (日本留学生)',
    sealChar: '平',
    avatarUrl: hirataAvatar,
    accentColor: '#0284c7',
    isCoreCast: true,
  },
  杰希: {
    id: 'jiexi',
    hanziName: '杰希',
    pinyin: 'Jiéxī',
    englishName: 'Jessie',
    role: 'Elementary Class Student',
    origin: 'Canada · Ottawa (加拿大留学生)',
    sealChar: '杰',
    avatarUrl: jessieAvatar,
    accentColor: '#d97706',
    isCoreCast: true,
  },
  朱迪: {
    id: 'zhudi',
    hanziName: '朱迪',
    pinyin: 'Zhūdí',
    englishName: 'Judy',
    role: 'Elementary Class Student · Lily’s Roommate',
    origin: 'Saudi Arabia (沙特阿拉伯留学生)',
    sealChar: '朱',
    avatarUrl: judyAvatar,
    accentColor: '#0d9488',
    isCoreCast: true,
  },
  李悦: {
    id: 'li_yue',
    hanziName: '李悦',
    pinyin: 'Lǐ Yuè',
    englishName: 'Teacher Li Yue',
    role: 'Mandarin Instructor (初级班汉语老师)',
    origin: 'China (中国老师)',
    sealChar: '李',
    avatarUrl: teacherLiAvatar,
    accentColor: '#4f46e5',
    isCoreCast: true,
  },
  李老师: {
    id: 'li_laoshi',
    hanziName: '李老师',
    pinyin: 'Lǐ lǎoshī',
    englishName: 'Teacher Li Yue',
    role: 'Mandarin Instructor (初级班汉语老师)',
    origin: 'China (中国老师)',
    sealChar: '李',
    avatarUrl: teacherLiAvatar,
    accentColor: '#4f46e5',
    isCoreCast: true,
  },
  何大华: {
    id: 'he_dahua',
    hanziName: '何大华',
    pinyin: 'Hé Dàhuá',
    englishName: 'He Dahua',
    role: 'Chinese Friend & Travel Enthusiast',
    origin: 'China (中国朋友)',
    sealChar: '何',
    avatarUrl: createSupportingPortraitSvg({
      bgStart: '#e0f2fe',
      bgEnd: '#bae6fd',
      hairColor: '#1e293b',
      skinColor: '#f5d0b5',
      shirtColor: '#0369a1',
      collarColor: '#f8fafc',
      isFemale: false,
    }),
    accentColor: '#0369a1',
    isCoreCast: false,
  },
  王老师: {
    id: 'wang_laoshi',
    hanziName: '王老师',
    pinyin: 'Wáng lǎoshī',
    englishName: 'Teacher Wang',
    role: 'Chinese Cultural Studies Instructor',
    origin: 'China (文化课老师)',
    sealChar: '王',
    avatarUrl: createSupportingPortraitSvg({
      bgStart: '#eef2ff',
      bgEnd: '#e0e7ff',
      hairColor: '#1e293b',
      skinColor: '#f5d0b5',
      shirtColor: '#3730a3',
      collarColor: '#ffffff',
      accessory: 'glasses',
      isFemale: false,
    }),
    accentColor: '#4338ca',
    isCoreCast: false,
  },
  林娜: {
    id: 'lin_na',
    hanziName: '林娜',
    pinyin: 'Lín Nà',
    englishName: 'Lin Na',
    role: 'Chinese University Classmate',
    origin: 'China (中国同学)',
    sealChar: '林',
    avatarUrl: createSupportingPortraitSvg({
      bgStart: '#fdf2f8',
      bgEnd: '#fce7f3',
      hairColor: '#1e293b',
      skinColor: '#f7d6bf',
      shirtColor: '#be185d',
      collarColor: '#fdf2f8',
      isFemale: true,
    }),
    accentColor: '#be185d',
    isCoreCast: false,
  },
  李明: {
    id: 'li_ming',
    hanziName: '李明',
    pinyin: 'Lǐ Míng',
    englishName: 'Li Ming',
    role: 'Chinese University Classmate',
    origin: 'Northern China (中国北方同学)',
    sealChar: '明',
    avatarUrl: createSupportingPortraitSvg({
      bgStart: '#ecfdf5',
      bgEnd: '#d1fae5',
      hairColor: '#0f172a',
      skinColor: '#f5d0b5',
      shirtColor: '#047857',
      collarColor: '#ffffff',
      isFemale: false,
    }),
    accentColor: '#047857',
    isCoreCast: false,
  },
  卢卡: {
    id: 'luka',
    hanziName: '卢卡',
    pinyin: 'Lúkǎ',
    englishName: 'Luca',
    role: 'Mark’s Good Friend on Campus',
    origin: 'International Student (马克的好朋友)',
    sealChar: '卢',
    avatarUrl: createSupportingPortraitSvg({
      bgStart: '#fffbeb',
      bgEnd: '#fef3c7',
      hairColor: '#78350f',
      skinColor: '#f5d0b5',
      shirtColor: '#b45309',
      collarColor: '#ffffff',
      isFemale: false,
    }),
    accentColor: '#b45309',
    isCoreCast: false,
  },
  妈妈: {
    id: 'mama',
    hanziName: '妈妈',
    pinyin: 'Māma',
    englishName: 'Mom',
    role: 'Mark’s Mother',
    origin: 'Family Member (家人)',
    sealChar: '妈',
    avatarUrl: createSupportingPortraitSvg({
      bgStart: '#fff1f2',
      bgEnd: '#ffe4e6',
      hairColor: '#7c2d12',
      skinColor: '#f7d6bf',
      shirtColor: '#9f1239',
      collarColor: '#fff1f2',
      accessory: 'bun',
      isFemale: true,
    }),
    accentColor: '#e11d48',
    isCoreCast: false,
  },
  司机: {
    id: 'siji',
    hanziName: '司机',
    pinyin: 'Sījī',
    englishName: 'Taxi Driver',
    role: 'Local Taxi Driver (出租车司机师傅)',
    origin: 'Local Service (北京/天津司机)',
    sealChar: '司',
    avatarUrl: createSupportingPortraitSvg({
      bgStart: '#f0f9ff',
      bgEnd: '#e0f2fe',
      hairColor: '#1e293b',
      skinColor: '#eab696',
      shirtColor: '#1d4ed8',
      collarColor: '#ffffff',
      accessory: 'hat',
      isFemale: false,
    }),
    accentColor: '#1d4ed8',
    isCoreCast: false,
  },
  小贩: {
    id: 'xiaofan',
    hanziName: '小贩',
    pinyin: 'Xiǎofàn',
    englishName: 'Fruit Vendor',
    role: 'Local Fruit Stand Vendor',
    origin: 'Market Vendor (水果摊小贩)',
    sealChar: '贩',
    avatarUrl: createSupportingPortraitSvg({
      bgStart: '#fefce8',
      bgEnd: '#fef08a',
      hairColor: '#334155',
      skinColor: '#eab696',
      shirtColor: '#ca8a04',
      collarColor: '#fefce8',
      isFemale: false,
    }),
    accentColor: '#ca8a04',
    isCoreCast: false,
  },
  售货员: {
    id: 'shouhuoyuan',
    hanziName: '售货员',
    pinyin: 'Shòuhuòyuán',
    englishName: 'Shop Clerk',
    role: 'Clothing Store Salesperson',
    origin: 'Retail Staff (商店售货员)',
    sealChar: '售',
    avatarUrl: createSupportingPortraitSvg({
      bgStart: '#faf5ff',
      bgEnd: '#f3e8ff',
      hairColor: '#1e293b',
      skinColor: '#f7d6bf',
      shirtColor: '#7e22ce',
      collarColor: '#ffffff',
      isFemale: true,
    }),
    accentColor: '#7e22ce',
    isCoreCast: false,
  },
  服务员: {
    id: 'fuwuyuan',
    hanziName: '服务员',
    pinyin: 'Fúwùyuán',
    englishName: 'Restaurant Server',
    role: 'Chinese Restaurant Attendant',
    origin: 'Hospitality Staff (饭馆服务员)',
    sealChar: '服',
    avatarUrl: createSupportingPortraitSvg({
      bgStart: '#fff7ed',
      bgEnd: '#ffedd5',
      hairColor: '#1e293b',
      skinColor: '#f7d6bf',
      shirtColor: '#ea580c',
      collarColor: '#ffffff',
      isFemale: true,
    }),
    accentColor: '#ea580c',
    isCoreCast: false,
  },
  行人: {
    id: 'xingren',
    hanziName: '行人',
    pinyin: 'Xíngrén',
    englishName: 'Passerby',
    role: 'Helpful Local Pedestrian',
    origin: 'City Resident (热心路人)',
    sealChar: '行',
    avatarUrl: createSupportingPortraitSvg({
      bgStart: '#f1f5f9',
      bgEnd: '#e2e8f0',
      hairColor: '#334155',
      skinColor: '#f5d0b5',
      shirtColor: '#475569',
      collarColor: '#f8fafc',
      isFemale: false,
    }),
    accentColor: '#475569',
    isCoreCast: false,
  },
  营业员: {
    id: 'yingyeyuan',
    hanziName: '营业员',
    pinyin: 'Yíngyèyuán',
    englishName: 'Post Office Clerk',
    role: 'Postal & Courier Counter Clerk',
    origin: 'Postal Service (邮局营业员)',
    sealChar: '营',
    avatarUrl: createSupportingPortraitSvg({
      bgStart: '#ecfdf5',
      bgEnd: '#a7f3d0',
      hairColor: '#1e293b',
      skinColor: '#f7d6bf',
      shirtColor: '#15803d',
      collarColor: '#ffffff',
      isFemale: true,
    }),
    accentColor: '#15803d',
    isCoreCast: false,
  },
  医生: {
    id: 'yisheng',
    hanziName: '医生',
    pinyin: 'Yīshēng',
    englishName: 'Doctor',
    role: 'Hospital Clinic Physician (医院大夫)',
    origin: 'Medical Staff (医院医生)',
    sealChar: '医',
    avatarUrl: createSupportingPortraitSvg({
      bgStart: '#f0fdfa',
      bgEnd: '#ccfbf1',
      hairColor: '#1e293b',
      skinColor: '#f5d0b5',
      shirtColor: '#ffffff',
      collarColor: '#0d9488',
      accessory: 'stethoscope',
      isFemale: false,
    }),
    accentColor: '#0d9488',
    isCoreCast: false,
  },
};

/**
 * Extracts the Chinese base name from any dialogue speaker string, e.g.
 * '马克 (Mark)' -> '马克'
 * '李悦 (Teacher Li Yue)' -> '李悦'
 * '金志英 (Jīn Zhìyīng)' -> '金志英'
 */
export function extractHanziSpeakerName(rawSpeaker: string): string {
  const trimmed = rawSpeaker.trim();
  const withoutParens = trimmed.replace(/\s*\([^)]*\)\s*/g, '').trim();
  return withoutParens || trimmed;
}

/**
 * Resolves a single speaker name (e.g., '马克 (Mark)' or '马克') to its canonical
 * TextbookCharacterProfile.
 */
export function resolveCharacterProfile(rawSpeaker: string): TextbookCharacterProfile {
  const hanziPart = extractHanziSpeakerName(rawSpeaker);

  if (TEXTBOOK_CHARACTER_DIRECTORY[hanziPart]) {
    return TEXTBOOK_CHARACTER_DIRECTORY[hanziPart];
  }

  for (const key of Object.keys(TEXTBOOK_CHARACTER_DIRECTORY)) {
    if (hanziPart.includes(key)) {
      return TEXTBOOK_CHARACTER_DIRECTORY[key];
    }
  }

  const parenMatch = rawSpeaker.match(/\(([^)]+)\)/);
  const englishFallback = parenMatch ? parenMatch[1] : hanziPart;
  const sealChar = Array.from(hanziPart)[0] || '汉';

  return {
    id: hanziPart,
    hanziName: hanziPart,
    pinyin: englishFallback,
    englishName: englishFallback,
    role: 'Lesson Speaker',
    origin: 'Textbook Dialogue',
    sealChar,
    avatarUrl: createSupportingPortraitSvg({
      bgStart: '#eff6ff',
      bgEnd: '#dbeafe',
      hairColor: '#1e293b',
      skinColor: '#f5d0b5',
      shirtColor: '#2563eb',
      collarColor: '#ffffff',
    }),
    accentColor: '#2563eb',
  };
}

/**
 * Resolves a speaker label that may contain one or multiple characters speaking together,
 * e.g., '马克、金志英 (Mark & Jin Zhiying)' -> [MarkProfile, JinZhiyingProfile].
 */
export function resolveSpeakerGroup(rawSpeaker: string): TextbookCharacterProfile[] {
  const hanziPart = extractHanziSpeakerName(rawSpeaker);
  if (hanziPart.includes('、') || hanziPart.includes('/') || hanziPart.includes('和')) {
    const parts = hanziPart
      .split(/[、/和]/)
      .map(s => s.trim())
      .filter(Boolean);
    const profiles = parts.map(p => resolveCharacterProfile(p));
    if (profiles.length > 0) {
      return profiles;
    }
  }
  return [resolveCharacterProfile(rawSpeaker)];
}

/**
 * Returns the exact deduplicated list of textbook characters who appear in a given Lesson.
 * Only includes characters who actually speak or appear in that specific lesson—never random characters.
 */
export function getLessonCharacters(lesson: Lesson): TextbookCharacterProfile[] {
  const seenIds = new Set<string>();
  const result: TextbookCharacterProfile[] = [];

  const addByName = (name: string) => {
    const profiles = resolveSpeakerGroup(name);
    for (const profile of profiles) {
      // Canonicalize 李老师 and 李悦 so they don't duplicate in the same unit cast bar
      const canonicalKey = profile.hanziName === '李老师' ? 'li_yue' : profile.id;
      if (!seenIds.has(canonicalKey)) {
        seenIds.add(canonicalKey);
        result.push(profile);
      }
    }
  };

  if (lesson.characterNames && lesson.characterNames.length > 0) {
    for (const name of lesson.characterNames) {
      addByName(name);
    }
  }

  if (lesson.dialogues && lesson.dialogues.length > 0) {
    for (const sec of lesson.dialogues) {
      for (const line of sec.lines) {
        addByName(line.character);
      }
    }
  } else if (lesson.dialogue && lesson.dialogue.length > 0) {
    for (const line of lesson.dialogue) {
      addByName(line.character);
    }
  }

  // Also scan the reading passage for core recurring textbook characters mentioned by name
  if (lesson.readingPassage) {
    const fullReadingHanzi = lesson.readingPassage.paragraphs.map(p => p.hanzi).join(' ');
    const coreNames = ['马克', '金志英', '莉莉', '阿里', '平田', '杰希', '朱迪', '李悦', '何大华', '卢卡'];
    for (const coreName of coreNames) {
      if (fullReadingHanzi.includes(coreName)) {
        addByName(coreName);
      }
    }
  }

  return result;
}
