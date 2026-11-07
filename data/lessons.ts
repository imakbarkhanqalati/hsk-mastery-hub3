export interface DialogueLine {
  character: string;
  hanzi: string;
  pinyin: string;
  translation: string;
}

export interface DialogueSection {
  title: string;
  context: string;
  lines: DialogueLine[];
}

export interface ReadingParagraph {
  hanzi: string;
  pinyin: string;
  translation: string;
}

export interface ReadingPassage {
  title: string;
  subtitle?: string;
  paragraphs: ReadingParagraph[];
}

export interface PhoneticCharacterItem {
  label: string;
  pinyin?: string;
  detail: string;
  examples?: string;
  speakText?: string;
}

export interface PhoneticCharacterSection {
  subtitle: string;
  summary: string;
  items: PhoneticCharacterItem[];
}

export interface GrammarExample {
  hanzi: string;
  pinyin: string;
  translation: string;
}

export interface GrammarNote {
  title: string;
  structure: string;
  explanation: string;
  tip?: string;
  examples: GrammarExample[];
}

export interface LessonExercise {
  question: string;
  promptHanzi?: string;
  promptPinyin?: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  chineseTitle?: string;
  unitBadge?: string;
  description: string;
  content: string;
  hskLevel: 1 | 2 | 3 | 4 | 5 | 6;
  objectives?: string[];
  characterNames?: string[];
  dialogue: DialogueLine[];
  dialogues?: DialogueSection[];
  readingPassage?: ReadingPassage;
  phoneticsAndCharacters?: {
    title: string;
    sections: PhoneticCharacterSection[];
  };
  vocabularyExplanation: Array<{
    hanzi: string;
    pinyin: string;
    english: string;
    partOfSpeech?: string;
    exampleHanzi?: string;
    examplePinyin?: string;
    exampleTranslation?: string;
  }>;
  grammarPoint: string;
  structure: string;
  explanation: string;
  examples: GrammarExample[];
  grammarNotes?: GrammarNote[];
  exercises?: LessonExercise[];
}

export const lessons: Lesson[] = [
  {
    id: 'lesson1',
    title: 'Lesson 1: What Is His Name? —他叫什么名字',
    chineseTitle: '第1课 他叫什么名字',
    unitBadge: 'Mastering Chinese · Elementary 1 (会通汉语 精编版·初级1)',
    description:
      'Master Mandarin phonetics (6 simple finals, 21 initials, 4 tones, and Pinyin spelling rules), greet peers and teachers politely, introduce names and surnames, and ask or state nationalities.',
    content:
      'Unit 1 of Mastering Chinese: Elementary 1 covers the foundational sound system of Mandarin Chinese alongside practical campus conversations for greeting classmates and teachers, introducing friends and roommates, and discussing where everyone comes from.',
    hskLevel: 1,
    objectives: [
      'Pronounce the 6 simple finals, 21 initials, and 4 Mandarin tones accurately',
      'Distinguish unaspirated vs. aspirated initials (b/p, d/t, g/k, j/q, z/c, zh/ch) and flat vs. retroflex sibilants',
      'Greet peers with 你好 and elders or teachers respectfully with 您好',
      'Ask and state full names and Chinese surnames using 叫 and 姓',
      'Use 吗 and 吧 questions, negation with 不是……是……, and the adverbs 也 and 都',
      'Ask and state nationalities with 你是哪国人？ and 我来自……',
    ],
    dialogue: [
      {
        character: '马克 (Mark)',
        hanzi: '你好！',
        pinyin: 'Nǐ hǎo!',
        translation: 'Hello!',
      },
      {
        character: '金志英 (Jin Zhiying)',
        hanzi: '你好！',
        pinyin: 'Nǐ hǎo!',
        translation: 'Hello!',
      },
      {
        character: '马克 (Mark)',
        hanzi: '你是老师吗？',
        pinyin: 'Nǐ shì lǎoshī ma?',
        translation: 'Are you a teacher?',
      },
      {
        character: '金志英 (Jin Zhiying)',
        hanzi: '我不是老师，我是学生。我叫金志英，是新生。你也是新生吧？你叫什么名字？',
        pinyin:
          'Wǒ bú shì lǎoshī, wǒ shì xuéshēng. Wǒ jiào Jīn Zhìyīng, shì xīnshēng. Nǐ yě shì xīnshēng ba? Nǐ jiào shénme míngzi?',
        translation:
          'I am not a teacher, I am a student. My name is Jin Zhiying, and I am a new student. You are also a new student, right? What is your name?',
      },
      {
        character: '马克 (Mark)',
        hanzi: '是，我也是新生，我叫马克。',
        pinyin: 'Shì, wǒ yě shì xīnshēng, wǒ jiào Mǎkè.',
        translation: 'Yes, I am also a new student. My name is Mark.',
      },
      {
        character: '李悦 (Teacher Li Yue)',
        hanzi: '同学们好！我姓李，叫李悦，是你们的老师。',
        pinyin: 'Tóngxuémen hǎo! Wǒ xìng Lǐ, jiào Lǐ Yuè, shì nǐmen de lǎoshī.',
        translation: 'Hello classmates! My surname is Li, my full name is Li Yue, and I am your teacher.',
      },
      {
        character: '马克、金志英 (Mark & Jin Zhiying)',
        hanzi: '李老师，您好！',
        pinyin: 'Lǐ lǎoshī, nín hǎo!',
        translation: 'Hello, Teacher Li!',
      },
    ],
    dialogues: [
      {
        title: 'Dialogue 1 · First Day on Campus (功能表达·1)',
        context:
          'New international students Mark (马克) and Jin Zhiying (金志英) meet in the classroom before their teacher, Li Yue (李悦), arrives.',
        lines: [
          {
            character: '马克 (Mark)',
            hanzi: '你好！',
            pinyin: 'Nǐ hǎo!',
            translation: 'Hello!',
          },
          {
            character: '金志英 (Jin Zhiying)',
            hanzi: '你好！',
            pinyin: 'Nǐ hǎo!',
            translation: 'Hello!',
          },
          {
            character: '马克 (Mark)',
            hanzi: '你是老师吗？',
            pinyin: 'Nǐ shì lǎoshī ma?',
            translation: 'Are you a teacher?',
          },
          {
            character: '金志英 (Jin Zhiying)',
            hanzi: '我不是老师，我是学生。我叫金志英，是新生。你也是新生吧？你叫什么名字？',
            pinyin:
              'Wǒ bú shì lǎoshī, wǒ shì xuéshēng. Wǒ jiào Jīn Zhìyīng, shì xīnshēng. Nǐ yě shì xīnshēng ba? Nǐ jiào shénme míngzi?',
            translation:
              'I am not a teacher, I am a student. My name is Jin Zhiying, and I am a new student. You are also a new student, right? What is your name?',
          },
          {
            character: '马克 (Mark)',
            hanzi: '是，我也是新生，我叫马克。',
            pinyin: 'Shì, wǒ yě shì xīnshēng, wǒ jiào Mǎkè.',
            translation: 'Yes, I am also a new student. My name is Mark.',
          },
          {
            character: '李悦 (Teacher Li Yue)',
            hanzi: '同学们好！我姓李，叫李悦，是你们的老师。',
            pinyin: 'Tóngxuémen hǎo! Wǒ xìng Lǐ, jiào Lǐ Yuè, shì nǐmen de lǎoshī.',
            translation: 'Hello classmates! My surname is Li, my name is Li Yue, and I am your teacher.',
          },
          {
            character: '马克、金志英 (Mark & Jin Zhiying)',
            hanzi: '李老师，您好！',
            pinyin: 'Lǐ lǎoshī, nín hǎo!',
            translation: 'Hello, Teacher Li!',
          },
        ],
      },
      {
        title: 'Dialogue 2 · Introducing Friends, Roommates & Nationalities (功能表达·2)',
        context:
          'Mark introduces his new American friend Lily (莉莉) to his classmate Jessie (杰希) and his roommate Ali (阿里).',
        lines: [
          {
            character: '马克 (Mark)',
            hanzi: '她是我的新朋友，叫莉莉。',
            pinyin: 'Tā shì wǒ de xīn péngyou, jiào Lìlì.',
            translation: 'She is my new friend, named Lily.',
          },
          {
            character: '杰希 (Jessie)',
            hanzi: '你好，我叫杰希，是马克的同学。',
            pinyin: 'Nǐ hǎo, wǒ jiào Jiéxī, shì Mǎkè de tóngxué.',
            translation: 'Hello, my name is Jessie. I am Mark’s classmate.',
          },
          {
            character: '阿里 (Ali)',
            hanzi: '我叫阿里，是马克的同屋。',
            pinyin: 'Wǒ jiào Ālǐ, shì Mǎkè de tóngwū.',
            translation: 'My name is Ali. I am Mark’s roommate.',
          },
          {
            character: '马克 (Mark)',
            hanzi: '杰希和阿里都是我的好朋友。',
            pinyin: 'Jiéxī hé Ālǐ dōu shì wǒ de hǎo péngyou.',
            translation: 'Both Jessie and Ali are my good friends.',
          },
          {
            character: '莉莉 (Lily)',
            hanzi: '大家好！我叫莉莉。',
            pinyin: 'Dàjiā hǎo! Wǒ jiào Lìlì.',
            translation: 'Hello everyone! My name is Lily.',
          },
          {
            character: '阿里 (Ali)',
            hanzi: '你是哪国人？',
            pinyin: 'Nǐ shì nǎ guó rén?',
            translation: 'What nationality are you?',
          },
          {
            character: '莉莉 (Lily)',
            hanzi: '我是美国人，你们呢？',
            pinyin: 'Wǒ shì Měiguórén, nǐmen ne?',
            translation: 'I am American, and you all?',
          },
          {
            character: '阿里 (Ali)',
            hanzi: '我是肯尼亚人。',
            pinyin: 'Wǒ shì Kěnníyàrén.',
            translation: 'I am Kenyan.',
          },
          {
            character: '杰希 (Jessie)',
            hanzi: '我来自加拿大，认识你很高兴。',
            pinyin: 'Wǒ láizì Jiānádà, rènshi nǐ hěn gāoxìng.',
            translation: 'I come from Canada. Nice to meet you.',
          },
          {
            character: '莉莉 (Lily)',
            hanzi: '认识你们我也很高兴。',
            pinyin: 'Rènshi nǐmen wǒ yě hěn gāoxìng.',
            translation: 'Nice to meet you all too.',
          },
        ],
      },
    ],
    readingPassage: {
      title: 'Comprehensive Reading · Classmates in the Elementary Class (综合表达训练·短文)',
      subtitle: 'Meet the international students and their teacher in the Elementary Mandarin class.',
      paragraphs: [
        {
          hanzi: '金志英、平田、马克、莉莉、朱迪、阿里都是初级班的学生。他们都是好朋友。',
          pinyin:
            'Jīn Zhìyīng, Píngtián, Mǎkè, Lìlì, Zhūdí, Ālǐ dōu shì chūjíbān de xuéshēng. Tāmen dōu shì hǎo péngyou.',
          translation:
            'Jin Zhiying, Hirata (Pingtian), Mark, Lily, Judy, and Ali are all students in the elementary class. They are all good friends.',
        },
        {
          hanzi: '金志英是韩国人，平田是日本人；马克和莉莉都来自美国。朱迪来自沙特阿拉伯，她是莉莉的同屋。马克的同屋是肯尼亚人，叫阿里。',
          pinyin:
            'Jīn Zhìyīng shì Hánguórén, Píngtián shì Rìběnrén; Mǎkè hé Lìlì dōu láizì Měiguó. Zhūdí láizì Shātè Ālābó, tā shì Lìlì de tóngwū. Mǎkè de tóngwū shì Kěnníyàrén, jiào Ālǐ.',
          translation:
            'Jin Zhiying is Korean, and Hirata is Japanese; Mark and Lily are both from the United States. Judy is from Saudi Arabia, and she is Lily’s roommate. Mark’s roommate is Kenyan and is named Ali.',
        },
        {
          hanzi: '他们的老师姓李，叫李悦，是女老师。卢卡不是初级班的学生，他是马克的好朋友。',
          pinyin:
            'Tāmen de lǎoshī xìng Lǐ, jiào Lǐ Yuè, shì nǚ lǎoshī. Lúkǎ bú shì chūjíbān de xuéshēng, tā shì Mǎkè de hǎo péngyou.',
          translation:
            'Their teacher’s surname is Li; her full name is Li Yue, and she is a female teacher. Luca is not a student in the elementary class; he is Mark’s good friend.',
        },
      ],
    },
    phoneticsAndCharacters: {
      title: 'Section 1 · Mandarin Phonetics & Pinyin System (语音基础)',
      sections: [
        {
          subtitle: '1. The 6 Simple Finals & 4 Mandarin Tones (单韵母与声调)',
          summary:
            'A Mandarin syllable consists of an Initial (声母), a Final (韵母), and a Tone (声调). Mouth opening decreases progressively from a → e → i; keep the tongue position of i and round your lips to pronounce ü.',
          items: [
            {
              label: 'a · o · e · i · u · ü',
              pinyin: 'ā á ǎ à · ō ó ǒ ò · ē é ě è · ī í ǐ ì · ū úǔ ù · ǖ ǘ ǚ ǜ',
              detail:
                'Six single-vowel finals (单韵母). Hold the vowel steady while applying the pitch contour.',
              examples: '爸 bà (dad) · 我 wǒ (I/me) · 车 chē (car) · 你 nǐ (you) · 路 lù (road) · 女 nǚ (female)',
              speakText: '爸 我 车 你 路 女',
            },
            {
              label: '4 Tones + Neutral Tone (四声与轻声)',
              pinyin: '1st (ˉ 55) · 2nd (ˊ 35) · 3rd (ˇ 214) · 4th (ˋ 51)',
              detail:
                '1st tone is high and level (妈 mā); 2nd rises sharply (麻 má); 3rd dips low then rises in isolation (马 mǎ, 好 hǎo) or stays low in phrases (您好 nín hǎo); 4th falls crisply from top to bottom (骂 mà).',
              examples: '妈 mā · 麻 má · 马 mǎ · 骂 mà · 吗 ma (neutral)',
              speakText: '妈 麻 马 骂 吗',
            },
          ],
        },
        {
          subtitle: '2. The 21 Initials: Aspiration & Tongue Position (声母：送气与平翘舌)',
          summary:
            'Mandarin has 21 consonant initials grouped by place of articulation. Pay special attention to unaspirated vs. aspirated pairs and flat vs. retroflex tongue positions.',
          items: [
            {
              label: 'Unaspirated vs. Aspirated (不送气 vs. 送气)',
              pinyin: 'b / p · d / t · g / k · j / q · z / c · zh / ch',
              detail:
                'b, d, g, j, z, zh are unaspirated (weak airflow); p, t, k, q, c, ch are aspirated (a strong puff of air is released from the mouth).',
              examples: '瀑布 pùbù · 特地 tèdì · 各科 gèkē · 机器 jīqì · 支持 zhīchí · 字词 zìcí',
              speakText: '瀑布 特地 各科 机器 支持 字词',
            },
            {
              label: 'Flat Sibilants vs. Retroflex Sibilants (平舌音 vs. 翘舌音)',
              pinyin: 'z · c · s (flat tongue) vs. zh · ch · sh · r (curled tongue)',
              detail:
                'For z, c, s, keep the tip of the tongue flat behind the upper front teeth. For zh, ch, sh, r, curl the tongue tip upward toward the hard palate.',
              examples: 'Classic Tongue Twister: 四是四 (sì shì sì)，十是十 (shí shì shí)，十四是十四 (shísì shì shísì)，四十是四十 (sìshí shì sìshí)。',
              speakText: '四是四，十是十，十四是十四，四十是四十。',
            },
          ],
        },
        {
          subtitle: '3. Pinyin Tone Placement & ü-Dot Omission Rules (声调标写与 ü 的拼写规则)',
          summary:
            'Knowing where to place tone marks and when the two dots over ü are omitted prevents the most common beginner spelling mistakes.',
          items: [
            {
              label: 'Tone Mark Priority Order',
              pinyin: 'a > o > e > i > u > ü',
              detail:
                'Always place the tone mark over the main vowel in the order a > o > e > i > u > ü. When a tone mark is placed on i, its dot is removed (dí, yī).',
              examples: '好 hǎo · 叫 jiào · 国 guó · 谢 xiè',
              speakText: '好 叫 国 谢',
            },
            {
              label: 'The ü Rule After j, q, x vs. n, l',
              pinyin: 'j, q, x + ü → ju, qu, xu | n, l + ü → nü, lü',
              detail:
                'Because j, q, x never combine with u, the two dots on ü are omitted in writing (jù 具, qù 去, xù 续). However, n and l can combine with both u and ü, so the two dots MUST be retained on nü and lü.',
              examples: '去 qù vs. 女 nǚ (female) · 怒 nù (anger) · 路 lù (road) vs. 旅 lǚ (travel)',
              speakText: '去 女 怒 路 旅',
            },
          ],
        },
        {
          subtitle: '4. Essential Daily Courtesies (常用寒暄语)',
          summary:
            'Core polite expressions used in everyday Chinese social interactions.',
          items: [
            {
              label: 'Greetings & Introductions',
              pinyin: 'Nǐ hǎo! / Nín hǎo! · Rènshi nǐ hěn gāoxìng.',
              detail:
                'Use 你好 with peers and 您好 with teachers or elders. Respond to introductions with 认识你很高兴 (Nice to meet you).',
              examples: '你好！ · 您好！ · 认识你很高兴。',
              speakText: '你好！您好！认识你很高兴。',
            },
            {
              label: 'Thanks, Apologies & Partings',
              pinyin: 'Xièxie → Bú kèqi / Búyòng xiè · Duìbuqǐ → Méi guānxi · Zàijiàn',
              detail:
                'Pair 谢谢 (Thank you) with 不客气 or 不用谢 (You’re welcome); pair 对不起 or 不好意思 (Sorry / Excuse me) with 没关系 (It’s okay); say 再见 or 拜拜 when parting.',
              examples: '谢谢您！— 不客气。 · 对不起！— 没关系。 · 再见！',
              speakText: '谢谢您！不客气。对不起！没关系。再见！',
            },
          ],
        },
      ],
    },
    vocabularyExplanation: [
      {
        hanzi: '你好',
        pinyin: 'nǐ hǎo',
        english: 'hello; hi (general greeting)',
        partOfSpeech: 'Phrase',
        exampleHanzi: '你好！我是新学生。',
        examplePinyin: 'Nǐ hǎo! Wǒ shì xīn xuéshēng.',
        exampleTranslation: 'Hello! I am a new student.',
      },
      {
        hanzi: '您',
        pinyin: 'nín',
        english: 'you (polite/respectful singular form)',
        partOfSpeech: 'Pronoun',
        exampleHanzi: '李老师，您好！',
        examplePinyin: 'Lǐ lǎoshī, nín hǎo!',
        exampleTranslation: 'Hello, Teacher Li!',
      },
      {
        hanzi: '老师',
        pinyin: 'lǎoshī',
        english: 'teacher; instructor',
        partOfSpeech: 'Noun',
        exampleHanzi: '她是我们的汉语老师。',
        examplePinyin: 'Tā shì wǒmen de Hànyǔ lǎoshī.',
        exampleTranslation: 'She is our Chinese teacher.',
      },
      {
        hanzi: '学生',
        pinyin: 'xuéshēng',
        english: 'student',
        partOfSpeech: 'Noun',
        exampleHanzi: '我不是老师，我是学生。',
        examplePinyin: 'Wǒ bú shì lǎoshī, wǒ shì xuéshēng.',
        exampleTranslation: 'I am not a teacher; I am a student.',
      },
      {
        hanzi: '新生',
        pinyin: 'xīnshēng',
        english: 'new student; freshman',
        partOfSpeech: 'Noun',
        exampleHanzi: '你也是新生吧？',
        examplePinyin: 'Nǐ yě shì xīnshēng ba?',
        exampleTranslation: 'You are also a new student, right?',
      },
      {
        hanzi: '叫',
        pinyin: 'jiào',
        english: 'to be called; to be named',
        partOfSpeech: 'Verb',
        exampleHanzi: '你叫什么名字？',
        examplePinyin: 'Nǐ jiào shénme míngzi?',
        exampleTranslation: 'What is your name?',
      },
      {
        hanzi: '什么',
        pinyin: 'shénme',
        english: 'what',
        partOfSpeech: 'Pronoun',
        exampleHanzi: '他叫什么名字？',
        examplePinyin: 'Tā jiào shénme míngzi?',
        exampleTranslation: 'What is his name?',
      },
      {
        hanzi: '名字',
        pinyin: 'míngzi',
        english: 'name (full name or given name)',
        partOfSpeech: 'Noun',
        exampleHanzi: '我的名字叫马克。',
        examplePinyin: 'Wǒ de míngzi jiào Mǎkè.',
        exampleTranslation: 'My name is Mark.',
      },
      {
        hanzi: '姓',
        pinyin: 'xìng',
        english: 'surname; to have as a family name',
        partOfSpeech: 'Noun / Verb',
        exampleHanzi: '我姓李，叫李悦。',
        examplePinyin: 'Wǒ xìng Lǐ, jiào Lǐ Yuè.',
        exampleTranslation: 'My surname is Li, and my full name is Li Yue.',
      },
      {
        hanzi: '贵姓',
        pinyin: 'guìxìng',
        english: '(polite) your honorable surname',
        partOfSpeech: 'Phrase',
        exampleHanzi: '请问，您贵姓？',
        examplePinyin: 'Qǐngwèn, nín guìxìng?',
        exampleTranslation: 'May I ask, what is your honorable surname?',
      },
      {
        hanzi: '同学',
        pinyin: 'tóngxué',
        english: 'classmate; fellow student',
        partOfSpeech: 'Noun',
        exampleHanzi: '同学们好！',
        examplePinyin: 'Tóngxuémen hǎo!',
        exampleTranslation: 'Hello, classmates!',
      },
      {
        hanzi: '同屋',
        pinyin: 'tóngwū',
        english: 'roommate',
        partOfSpeech: 'Noun',
        exampleHanzi: '阿里是马克的同屋。',
        examplePinyin: 'Ālǐ shì Mǎkè de tóngwū.',
        exampleTranslation: 'Ali is Mark’s roommate.',
      },
      {
        hanzi: '朋友',
        pinyin: 'péngyou',
        english: 'friend',
        partOfSpeech: 'Noun',
        exampleHanzi: '她是我的新朋友，叫莉莉。',
        examplePinyin: 'Tā shì wǒ de xīn péngyou, jiào Lìlì.',
        exampleTranslation: 'She is my new friend, named Lily.',
      },
      {
        hanzi: '也',
        pinyin: 'yě',
        english: 'also; too; either (in negative sentences)',
        partOfSpeech: 'Adverb',
        exampleHanzi: '认识你们我也很高兴。',
        examplePinyin: 'Rènshi nǐmen wǒ yě hěn gāoxìng.',
        exampleTranslation: 'Nice to meet you all too.',
      },
      {
        hanzi: '都',
        pinyin: 'dōu',
        english: 'both; all',
        partOfSpeech: 'Adverb',
        exampleHanzi: '杰希和阿里都是我的好朋友。',
        examplePinyin: 'Jiéxī hé Ālǐ dōu shì wǒ de hǎo péngyou.',
        exampleTranslation: 'Both Jessie and Ali are my good friends.',
      },
      {
        hanzi: '哪',
        pinyin: 'nǎ',
        english: 'which',
        partOfSpeech: 'Pronoun',
        exampleHanzi: '你是哪国人？',
        examplePinyin: 'Nǐ shì nǎ guó rén?',
        exampleTranslation: 'Which country are you from? / What is your nationality?',
      },
      {
        hanzi: '来自',
        pinyin: 'láizì',
        english: 'to come from; to hail from',
        partOfSpeech: 'Verb',
        exampleHanzi: '我来自加拿大。',
        examplePinyin: 'Wǒ láizì Jiānádà.',
        exampleTranslation: 'I come from Canada.',
      },
      {
        hanzi: '认识',
        pinyin: 'rènshi',
        english: 'to know; to meet; to get acquainted with',
        partOfSpeech: 'Verb',
        exampleHanzi: '认识你很高兴。',
        examplePinyin: 'Rènshi nǐ hěn gāoxìng.',
        exampleTranslation: 'Nice to meet you.',
      },
      {
        hanzi: '高兴',
        pinyin: 'gāoxìng',
        english: 'happy; glad; pleased',
        partOfSpeech: 'Adjective',
        exampleHanzi: '认识大家我非常高兴。',
        examplePinyin: 'Rènshi dàjiā wǒ fēicháng gāoxìng.',
        exampleTranslation: 'I am very glad to meet everyone.',
      },
      {
        hanzi: '吧',
        pinyin: 'ba',
        english: 'modal particle indicating supposition ("...right?") or suggestion',
        partOfSpeech: 'Particle',
        exampleHanzi: '他是英国人吧？',
        examplePinyin: 'Tā shì Yīngguórén ba?',
        exampleTranslation: 'He is British, right?',
      },
    ],
    grammarPoint: 'Greetings, Chinese Names, 吗 vs. 吧 Questions, and Adverbs 也 & 都',
    structure: 'Subject + 姓 + Surname, 叫 + Full Name | Subject + 不是 A，是 B | A 和 B + 都 + Verb',
    explanation:
      'Lesson 1 establishes how to greet people according to social register (你好 vs. 您好), introduce surnames and full names (姓 + 叫), contrast negative and affirmative identity statements (不是 A，是 B), distinguish open questions (吗) from confirmatory assumptions (吧), and link subjects with 和, 也, and 都.',
    examples: [
      {
        hanzi: '我姓李，叫李悦，是你们的老师。',
        pinyin: 'Wǒ xìng Lǐ, jiào Lǐ Yuè, shì nǐmen de lǎoshī.',
        translation: 'My surname is Li, my name is Li Yue, and I am your teacher.',
      },
      {
        hanzi: '我不是老师，我是学生。',
        pinyin: 'Wǒ bú shì lǎoshī, wǒ shì xuéshēng.',
        translation: 'I am not a teacher; I am a student.',
      },
      {
        hanzi: '马克和莉莉都来自美国。',
        pinyin: 'Mǎkè hé Lìlì dōu láizì Měiguó.',
        translation: 'Both Mark and Lily come from the United States.',
      },
    ],
    grammarNotes: [
      {
        title: '1. Chinese Name Order & Asking Someone’s Name (姓名表达与询问)',
        structure: '我姓 + [Surname]，叫 + [Full Name / Given Name] | 您贵姓？ / 你叫什么名字？',
        explanation:
          'In Chinese, the family name (姓 xìng) always comes before the given name (名 míng). For example, in 李悦 (Lǐ Yuè), 李 is the surname and 悦 is the given name. To ask a peer’s full name, say 你叫什么名字？ To ask an elder, teacher, or professional contact’s surname politely, use 您贵姓？ (What is your honorable surname?).',
        tip: 'Do not ask an elder or superior 你叫什么名字？ directly; use 您贵姓？ instead. When answering 您贵姓？, say 我姓李 (never *我贵姓李).',
        examples: [
          {
            hanzi: '我姓何，叫何大华。',
            pinyin: 'Wǒ xìng Hé, jiào Hé Dàhuá.',
            translation: 'My surname is He, and my full name is He Dahua.',
          },
          {
            hanzi: '请问，您贵姓？— 我姓王。',
            pinyin: 'Qǐngwèn, nín guìxìng? — Wǒ xìng Wáng.',
            translation: 'Excuse me, what is your honorable surname? — My surname is Wang.',
          },
        ],
      },
      {
        title: '2. Negation & Contrast with 不是 A，是 B',
        structure: 'Subject + 不是 + Noun A，是 + Noun B',
        explanation:
          'To deny one identity or fact (A) and immediately affirm the correct one (B), use 不是 A，是 B. Notice that 是 is pronounced in the 4th tone (shì), so 不 (bù) changes to the 2nd tone (bú) before it: 不是 (bú shì).',
        examples: [
          {
            hanzi: '我不是老师，我是学生。',
            pinyin: 'Wǒ bú shì lǎoshī, wǒ shì xuéshēng.',
            translation: 'I am not a teacher; I am a student.',
          },
          {
            hanzi: '卢卡不是初级班的学生，他是马克的好朋友。',
            pinyin: 'Lúkǎ bú shì chūjíbān de xuéshēng, tā shì Mǎkè de hǎo péngyou.',
            translation: 'Luca is not an elementary-class student; he is Mark’s good friend.',
          },
        ],
      },
      {
        title: '3. Interrogative Particles: 吗 vs. 吧',
        structure: 'Statement + 吗？ (open question) vs. Statement + 吧？ (confirming a guess)',
        explanation:
          'Both 吗 and 吧 appear at the end of a declarative sentence to form a yes/no question, but they reflect different speaker certainty. Use 吗 when you genuinely do not know the answer. Use 吧 when you already have a reasonable guess or assumption and are asking the listener to confirm it ("...right? / ...I suppose?").',
        examples: [
          {
            hanzi: '你是老师吗？（不知道）',
            pinyin: 'Nǐ shì lǎoshī ma?',
            translation: 'Are you a teacher? (Open question — speaker has no prior assumption)',
          },
          {
            hanzi: '你也是新生吧？（有一定把握，请求确认）',
            pinyin: 'Nǐ yě shì xīnshēng ba?',
            translation: 'You are also a new student, right? (Confirming a likely guess)',
          },
        ],
      },
      {
        title: '4. Adverbs 也 (also) & 都 (both/all) and Conjunction 和 (and)',
        structure: 'Subject + 也 + (不) + Verb | Noun A + 和 + Noun B + 都 + (不) + Verb',
        explanation:
          'In Mandarin, adverbs like 也 (also) and 都 (both/all) must be placed directly BEFORE the verb or adjective (and before 不 in negative sentences: 也不是, 都不是). When combining both adverbs on the same predicate, 也 precedes 都 (也都是).',
        tip: 'In English you can reply "Me too" without a verb, but in Mandarin you can never say *我也 alone—you must include the verb: 我也是 (Me too / I am too).',
        examples: [
          {
            hanzi: '他是留学生，我也是留学生。',
            pinyin: 'Tā shì liúxuéshēng, wǒ yě shì liúxuéshēng.',
            translation: 'He is an international student, and I am also an international student.',
          },
          {
            hanzi: '杰希和阿里都是我的好朋友。',
            pinyin: 'Jiéxī hé Ālǐ dōu shì wǒ de hǎo péngyou.',
            translation: 'Both Jessie and Ali are my good friends.',
          },
        ],
      },
      {
        title: '5. Asking & Stating Nationality (询问国籍)',
        structure: '你是哪国人？ → 我是 + [Country] + 人 / 我来自 + [Country]',
        explanation:
          'To ask someone’s nationality, use 你是哪国人？ You can answer either by adding 人 (person) after the country name (我是美国人 / 我是肯尼亚人) or by using the verb 来自 (come from) followed by the country name alone (我来自加拿大).',
        tip: 'Never add 人 after 来自: say 我来自美国 or 我是美国人, never *我来自美国人.',
        examples: [
          {
            hanzi: '你是哪国人？— 我是韩国人。',
            pinyin: 'Nǐ shì nǎ guó rén? — Wǒ shì Hánguórén.',
            translation: 'What nationality are you? — I am Korean.',
          },
          {
            hanzi: '我来自加拿大，认识你很高兴。',
            pinyin: 'Wǒ láizì Jiānádà, rènshi nǐ hěn gāoxìng.',
            translation: 'I come from Canada; nice to meet you.',
          },
        ],
      },
    ],
    exercises: [
      {
        question:
          'According to the Pinyin spelling rules in Lesson 1, which syllable correctly keeps or omits the two dots on ü?',
        options: ['jü (具)', 'qü (去)', 'nǚ (女)', 'xü (续)'],
        answerIndex: 2,
        explanation:
          'After j, q, and x, the two dots on ü are always omitted (written ju, qu, xu). After n and l, the two dots must be kept (nǚ 女, lǚ 旅) to distinguish them from nu and lu.',
      },
      {
        question:
          'You see someone carrying a freshman orientation packet and want to confirm your guess that they are also a new student. Which sentence is most natural?',
        promptHanzi: '你也是新生____？',
        promptPinyin: 'Nǐ yě shì xīnshēng ____?',
        options: ['吗 (ma)', '吧 (ba)', '呢 (ne)', '好 (hǎo)'],
        answerIndex: 1,
        explanation:
          '吧 (ba) is used at the end of a statement when the speaker already has a supposition and asks for confirmation ("You are also a new student, right?").',
      },
      {
        question: 'How do you politely greet your teacher, Li Yue (李悦), at the start of class?',
        options: [
          '悦李老师，你好！',
          '李老师，您好！',
          '老师李，你贵姓？',
          '李悦，我也！',
        ],
        answerIndex: 1,
        explanation:
          'In Chinese, place the surname before the title (李老师 Teacher Li) and use the respectful pronoun 您 (nín): 李老师，您好！',
      },
      {
        question: 'Based on the Lesson 1 Reading Passage, which statement is TRUE?',
        options: [
          '金志英是日本人，平田是韩国人。',
          '朱迪来自沙特阿拉伯，她是莉莉的同屋。',
          '卢卡也是初级班的学生。',
          '阿里是莉莉的同屋。',
        ],
        answerIndex: 1,
        explanation:
          'In the reading passage, Judy (朱迪) comes from Saudi Arabia (沙特阿拉伯) and is Lily’s roommate (莉莉的同屋), while Ali is Mark’s roommate and Luca is not in the elementary class.',
      },
    ],
  },
  {
    id: 'lesson2',
    title: 'Lesson 2: My Family and I — 我和我的家人',
    chineseTitle: '第2课 我和我的家人',
    unitBadge: 'Mastering Chinese · Elementary 1 (会通汉语 精编版·初级1)',
    description:
      'Learn compound and nasal finals, basic Chinese character strokes and stroke order rules, numbers 0–99, measure words (个 vs. 口, 二 vs. 两), family members, occupations, college majors, and register-appropriate ways to ask age.',
    content:
      'Unit 2 of Mastering Chinese: Elementary 1 introduces compound and nasal finals, the 6 foundational character strokes and stroke order rules, counting family members, describing where relatives work and what they study, and asking ages politely across generations.',
    hskLevel: 1,
    objectives: [
      'Master compound finals (ai, ei, ao, ou, ia, ie, ua, uo, üe, iao, iu, uai, ui) and front vs. back nasal finals (-n vs. -ng)',
      'Write the 6 foundational Chinese character strokes (点, 横, 竖, 撇, 捺, 折) following the Stroke Order Song (笔顺歌)',
      'Count from 0 to 99 and use measure words 个 and 口 accurately (including 二 vs. 两)',
      'Describe workplaces and occupations using 在 + [Place] + 工作 and 我是 + [Job]',
      'Ask and state academic majors using 你学什么专业？',
      'Choose the right age question for children (几岁), peers (多大), and elders (多大年纪)',
    ],
    dialogue: [
      {
        character: '金志英 (Jin Zhiying)',
        hanzi: '师傅好！天南大学！',
        pinyin: 'Shīfu hǎo! Tiānnán Dàxué!',
        translation: 'Hello driver! Tiannan University, please!',
      },
      {
        character: '司机 (Taxi Driver)',
        hanzi: '好的。你是留学生吧？学什么专业？',
        pinyin: 'Hǎo de. Nǐ shì liúxuéshēng ba? Xué shénme zhuānyè?',
        translation: 'Okay. You are an international student, right? What major do you study?',
      },
      {
        character: '金志英 (Jin Zhiying)',
        hanzi: '对，我是韩国人，在天南大学学习汉语。',
        pinyin: 'Duì, wǒ shì Hánguórén, zài Tiānnán Dàxué xuéxí Hànyǔ.',
        translation: 'Right, I am Korean, and I study Chinese at Tiannan University.',
      },
      {
        character: '司机 (Taxi Driver)',
        hanzi: '韩国？我有一个女儿、两个儿子，他们都在韩国工作。',
        pinyin: 'Hánguó? Wǒ yǒu yí gè nǚ’ér, liǎng gè érzi, tāmen dōu zài Hánguó gōngzuò.',
        translation: 'Korea? I have one daughter and two sons, and they all work in Korea.',
      },
      {
        character: '金志英 (Jin Zhiying)',
        hanzi: '是吗？他们做什么工作？',
        pinyin: 'Shì ma? Tāmen zuò shénme gōngzuò?',
        translation: 'Really? What kind of work do they do?',
      },
      {
        character: '司机 (Taxi Driver)',
        hanzi: '女儿在医院工作，是医生。',
        pinyin: 'Nǚ’ér zài yīyuàn gōngzuò, shì yīshēng.',
        translation: 'My daughter works at a hospital; she is a doctor.',
      },
      {
        character: '金志英 (Jin Zhiying)',
        hanzi: '儿子呢？在哪儿工作？',
        pinyin: 'Érzi ne? Zài nǎr gōngzuò?',
        translation: 'What about your sons? Where do they work?',
      },
      {
        character: '司机 (Taxi Driver)',
        hanzi: '两个儿子都在公司工作。',
        pinyin: 'Liǎng gè érzi dōu zài gōngsī gōngzuò.',
        translation: 'Both of my sons work at a company.',
      },
    ],
    dialogues: [
      {
        title: 'Dialogue 1 · Chatting with a Taxi Driver About Majors & Jobs (功能表达·1)',
        context:
          'Jin Zhiying takes a taxi back to Tiannan University and chats with the driver about her major and his children’s careers in Korea.',
        lines: [
          {
            character: '金志英 (Jin Zhiying)',
            hanzi: '师傅好！天南大学！',
            pinyin: 'Shīfu hǎo! Tiānnán Dàxué!',
            translation: 'Hello driver! Tiannan University, please!',
          },
          {
            character: '司机 (Taxi Driver)',
            hanzi: '好的。你是留学生吧？学什么专业？',
            pinyin: 'Hǎo de. Nǐ shì liúxuéshēng ba? Xué shénme zhuānyè?',
            translation: 'Okay. You are an international student, right? What major do you study?',
          },
          {
            character: '金志英 (Jin Zhiying)',
            hanzi: '对，我是韩国人，在天南大学学习汉语。',
            pinyin: 'Duì, wǒ shì Hánguórén, zài Tiānnán Dàxué xuéxí Hànyǔ.',
            translation: 'Right, I am Korean, and I study Chinese at Tiannan University.',
          },
          {
            character: '司机 (Taxi Driver)',
            hanzi: '韩国？我有一个女儿、两个儿子，他们都在韩国工作。',
            pinyin: 'Hánguó? Wǒ yǒu yí gè nǚ’ér, liǎng gè érzi, tāmen dōu zài Hánguó gōngzuò.',
            translation: 'Korea? I have one daughter and two sons, and they all work in Korea.',
          },
          {
            character: '金志英 (Jin Zhiying)',
            hanzi: '是吗？他们做什么工作？',
            pinyin: 'Shì ma? Tāmen zuò shénme gōngzuò?',
            translation: 'Really? What kind of work do they do?',
          },
          {
            character: '司机 (Taxi Driver)',
            hanzi: '女儿在医院工作，是医生。',
            pinyin: 'Nǚ’ér zài yīyuàn gōngzuò, shì yīshēng.',
            translation: 'My daughter works at a hospital; she is a doctor.',
          },
          {
            character: '金志英 (Jin Zhiying)',
            hanzi: '儿子呢？在哪儿工作？',
            pinyin: 'Érzi ne? Zài nǎr gōngzuò?',
            translation: 'What about your sons? Where do they work?',
          },
          {
            character: '司机 (Taxi Driver)',
            hanzi: '两个儿子都在公司工作。',
            pinyin: 'Liǎng gè érzi dōu zài gōngsī gōngzuò.',
            translation: 'Both of my sons work at a company.',
          },
        ],
      },
      {
        title: 'Dialogue 2 · Looking at Family Photos & Asking Ages (功能表达·2)',
        context:
          'Ali (阿里) and Hirata/Pingtian (平田) look at a family photo together and talk about their grandparents and siblings.',
        lines: [
          {
            character: '阿里 (Ali)',
            hanzi: '他们都是谁？',
            pinyin: 'Tāmen dōu shì shéi?',
            translation: 'Who are they all?',
          },
          {
            character: '平田 (Hirata)',
            hanzi: '他们都是我的家人。',
            pinyin: 'Tāmen dōu shì wǒ de jiārén.',
            translation: 'They are all my family members.',
          },
          {
            character: '阿里 (Ali)',
            hanzi: '这是你的父母和爷爷吗？你爷爷多大年纪了？',
            pinyin: 'Zhè shì nǐ de fùmǔ hé yéye ma? Nǐ yéye duō dà niánjì le?',
            translation: 'Are these your parents and grandfather? How old is your grandfather?',
          },
          {
            character: '平田 (Hirata)',
            hanzi: '八十二了。',
            pinyin: 'Bāshí’èr le.',
            translation: 'He is eighty-two.',
          },
          {
            character: '阿里 (Ali)',
            hanzi: '八十二？身体很好啊！那是你的姐姐和妹妹吧？妹妹很可爱，今年几岁了？',
            pinyin:
              'Bāshí’èr? Shēntǐ hěn hǎo a! Nà shì nǐ de jiějie hé mèimei ba? Mèimei hěn kě’ài, jīnnián jǐ suì le?',
            translation:
              'Eighty-two? He’s in great health! Are those your older sister and younger sister? Your younger sister is very cute—how old is she this year?',
          },
          {
            character: '平田 (Hirata)',
            hanzi: '今年七岁了。',
            pinyin: 'Jīnnián qī suì le.',
            translation: 'She is seven years old this year.',
          },
          {
            character: '阿里 (Ali)',
            hanzi: '我也有姐姐和妹妹。我有两个姐姐、三个妹妹。',
            pinyin: 'Wǒ yě yǒu jiějie hé mèimei. Wǒ yǒu liǎng gè jiějie, sān gè mèimei.',
            translation: 'I also have older and younger sisters. I have two older sisters and three younger sisters.',
          },
          {
            character: '平田 (Hirata)',
            hanzi: '你家有几口人？八口人？',
            pinyin: 'Nǐ jiā yǒu jǐ kǒu rén? Bā kǒu rén?',
            translation: 'How many people are in your family? Eight people?',
          },
          {
            character: '阿里 (Ali)',
            hanzi: '九口人！我父母有七个孩子，我还有一个哥哥。',
            pinyin: 'Jiǔ kǒu rén! Wǒ fùmǔ yǒu qī gè háizi, wǒ hái yǒu yí gè gēge.',
            translation: 'Nine people! My parents have seven children, and I also have an older brother.',
          },
          {
            character: '平田 (Hirata)',
            hanzi: '你哥哥多大了？也是学生吗？',
            pinyin: 'Nǐ gēge duō dà le? Yě shì xuéshēng ma?',
            translation: 'How old is your older brother? Is he also a student?',
          },
          {
            character: '阿里 (Ali)',
            hanzi: '我哥哥今年三十五了，在公司工作。',
            pinyin: 'Wǒ gēge jīnnián sānshíwǔ le, zài gōngsī gōngzuò.',
            translation: 'My older brother is thirty-five this year and works at a company.',
          },
        ],
      },
    ],
    readingPassage: {
      title: 'Comprehensive Reading · Xiaolin’s Family Portrait (综合表达训练·短文)',
      subtitle: 'Xiaolin introduces the six members of her three-generation household.',
      paragraphs: [
        {
          hanzi: '他们是我的家人。我家有六口人，爷爷、奶奶、爸爸、妈妈、姐姐和我。我今年二十二岁，是天南大学的学生，我的专业是汉语。',
          pinyin:
            'Tāmen shì wǒ de jiārén. Wǒ jiā yǒu liù kǒu rén, yéye, nǎinai, bàba, māma, jiějie hé wǒ. Wǒ jīnnián èrshí’èr suì, shì Tiānnán Dàxué de xuéshēng, wǒ de zhuānyè shì Hànyǔ.',
          translation:
            'They are my family members. There are six people in my family: my grandfather, grandmother, father, mother, older sister, and me. I am 22 years old this year, a student at Tiannan University, and my major is Chinese.',
        },
        {
          hanzi: '这是我姐姐，她今年三十岁，是老师，有两个女儿，一个六岁了，一个四岁了。',
          pinyin:
            'Zhè shì wǒ jiějie, tā jīnnián sānshí suì, shì lǎoshī, yǒu liǎng gè nǚ’ér, yí gè liù suì le, yí gè sì suì le.',
          translation:
            'This is my older sister. She is 30 years old this year, is a teacher, and has two daughters—one is six years old, and one is four years old.',
        },
        {
          hanzi: '他们是我的父母，我爸爸在公司工作，今年五十三岁，我妈妈是大学老师。爷爷和奶奶今年都七十八岁了，身体都很好。',
          pinyin:
            'Tāmen shì wǒ de fùmǔ, wǒ bàba zài gōngsī gōngzuò, jīnnián wǔshísān suì, wǒ māma shì dàxué lǎoshī. Yéye hé nǎinai jīnnián dōu qīshíbā suì le, shēntǐ dōu hěn hǎo.',
          translation:
            'They are my parents. My father works at a company and is 53 this year; my mother is a university professor. My grandfather and grandmother are both 78 years old this year, and both are in very good health.',
        },
      ],
    },
    phoneticsAndCharacters: {
      title: 'Section 1 · Compound Finals, Nasal Finals & Character Strokes (语音和汉字)',
      sections: [
        {
          subtitle: '1. Compound Finals & Nasal Finals (复合韵母与鼻韵母)',
          summary:
            'Compound finals glide smoothly from one vowel to another. Nasal finals end with either the front alveolar nasal -n or the back velar nasal -ng.',
          items: [
            {
              label: '13 Compound Finals & The iu / ui Tone Rule',
              pinyin: 'ai · ei · ao · ou | ia · ie · ua · uo · üe | iao · iou (-iu) · uai · uei (-ui)',
              detail:
                'When iou, uei, uen follow an initial consonant, they contract in writing to -iu, -ui, -un (e.g., liǔ 六, duì 对, dūn 吨). When i and u appear together (-iu or -ui), the tone mark ALWAYS goes on the second vowel.',
              examples: '好 hǎo · 家 jiā · 谢 xiè · 九 jiǔ (tone on u) · 对 duì (tone on i)',
              speakText: '好 家 谢 九 对',
            },
            {
              label: 'Front Nasal (-n) vs. Back Nasal (-ng)',
              pinyin: 'an · en · in · ün · ian · uan · un · üan vs. ang · eng · ing · ong · iang · uang · iong · ueng',
              detail:
                'For front nasals (-n), press the tongue tip against the upper gum ridge at the end. For back nasals (-ng), retract the tongue root toward the soft palate with the mouth slightly more open.',
              examples: '新 xīn (new) vs. 星 xīng (star) · 门 mén (door) vs. 忙 máng (busy) · 听 tīng (listen)',
              speakText: '新 星 门 忙 听',
            },
          ],
        },
        {
          subtitle: '2. Basic Strokes & The Stroke Order Song (汉字的基本笔画与笔顺歌)',
          summary:
            'Every Chinese character is built from 6 foundational stroke types written in a consistent directional sequence.',
          items: [
            {
              label: 'The 6 Basic Strokes (六种基本笔画)',
              pinyin: '点 diǎn (丶) · 横 héng (一) · 竖 shù (丨) · 撇 piě (丿) · 捺 nà (㇏) · 折 zhé (𠃍)',
              detail:
                'Dot (点 as in 六), Horizontal (横 as in 三), Vertical (竖 as in 十), Left-falling (撇 as in 人), Right-falling (捺 as in 八), and Turning/Fold (折 as in 五, 岁, 没).',
              examples: '六 liù · 三 sān · 十 shí · 人 rén · 八 bā · 五 wǔ',
              speakText: '六 三 十 人 八 五',
            },
            {
              label: 'The Stroke Order Song (笔顺歌)',
              pinyin: 'Xiān héng hòu shù shàng dào xià, xiān piě hòu nà zuǒ yòu fēn, xiān wài hòu nèi zài guānmén.',
              detail:
                '1. Horizontal before vertical, top to bottom (先横后竖上到下: 十, 二). 2. Left-falling before right-falling, left before right (先撇后捺左右分: 人, 儿). 3. Outside frame before inside, then seal the bottom last (先外后内再关门: 同, 国).',
              examples: '十 shí · 二 èr · 人 rén · 同 tóng · 国 guó',
              speakText: '先横后竖上到下，先撇后捺左右分，先外后内再关门。',
            },
          ],
        },
      ],
    },
    vocabularyExplanation: [
      {
        hanzi: '家人',
        pinyin: 'jiārén',
        english: 'family members',
        partOfSpeech: 'Noun',
        exampleHanzi: '他们都是我的家人。',
        examplePinyin: 'Tāmen dōu shì wǒ de jiārén.',
        exampleTranslation: 'They are all my family members.',
      },
      {
        hanzi: '父母',
        pinyin: 'fùmǔ',
        english: 'father and mother; parents',
        partOfSpeech: 'Noun',
        exampleHanzi: '这是你的父母和爷爷吗？',
        examplePinyin: 'Zhè shì nǐ de fùmǔ hé yéye ma?',
        exampleTranslation: 'Are these your parents and grandfather?',
      },
      {
        hanzi: '爷爷',
        pinyin: 'yéye',
        english: 'paternal grandfather',
        partOfSpeech: 'Noun',
        exampleHanzi: '你爷爷多大年纪了？',
        examplePinyin: 'Nǐ yéye duō dà niánjì le?',
        exampleTranslation: 'How old is your grandfather?',
      },
      {
        hanzi: '奶奶',
        pinyin: 'nǎinai',
        english: 'paternal grandmother',
        partOfSpeech: 'Noun',
        exampleHanzi: '爷爷和奶奶身体都很好。',
        examplePinyin: 'Yéye hé nǎinai shēntǐ dōu hěn hǎo.',
        exampleTranslation: 'Both Grandpa and Grandma are in great health.',
      },
      {
        hanzi: '哥哥',
        pinyin: 'gēge',
        english: 'older brother',
        partOfSpeech: 'Noun',
        exampleHanzi: '我还有一个哥哥。',
        examplePinyin: 'Wǒ hái yǒu yí gè gēge.',
        exampleTranslation: 'I also have an older brother.',
      },
      {
        hanzi: '姐姐',
        pinyin: 'jiějie',
        english: 'older sister',
        partOfSpeech: 'Noun',
        exampleHanzi: '我有两个姐姐、三个妹妹。',
        examplePinyin: 'Wǒ yǒu liǎng gè jiějie, sān gè mèimei.',
        exampleTranslation: 'I have two older sisters and three younger sisters.',
      },
      {
        hanzi: '妹妹',
        pinyin: 'mèimei',
        english: 'younger sister',
        partOfSpeech: 'Noun',
        exampleHanzi: '妹妹很可爱，今年七岁了。',
        examplePinyin: 'Mèimei hěn kě’ài, jīnnián qī suì le.',
        exampleTranslation: 'My younger sister is very cute; she is seven years old this year.',
      },
      {
        hanzi: '孩子',
        pinyin: 'háizi',
        english: 'child; children',
        partOfSpeech: 'Noun',
        exampleHanzi: '我父母有七个孩子。',
        examplePinyin: 'Wǒ fùmǔ yǒu qī gè háizi.',
        exampleTranslation: 'My parents have seven children.',
      },
      {
        hanzi: '口',
        pinyin: 'kǒu',
        english: 'measure word for family members; mouth',
        partOfSpeech: 'Measure Word',
        exampleHanzi: '你家有几口人？',
        examplePinyin: 'Nǐ jiā yǒu jǐ kǒu rén?',
        exampleTranslation: 'How many people are in your family?',
      },
      {
        hanzi: '两',
        pinyin: 'liǎng',
        english: 'two (used before measure words)',
        partOfSpeech: 'Numeral',
        exampleHanzi: '我有一个女儿、两个儿子。',
        examplePinyin: 'Wǒ yǒu yí gè nǚ’ér, liǎng gè érzi.',
        exampleTranslation: 'I have one daughter and two sons.',
      },
      {
        hanzi: '留学生',
        pinyin: 'liúxuéshēng',
        english: 'international student; study-abroad student',
        partOfSpeech: 'Noun',
        exampleHanzi: '你是留学生吧？',
        examplePinyin: 'Nǐ shì liúxuéshēng ba?',
        exampleTranslation: 'You are an international student, right?',
      },
      {
        hanzi: '专业',
        pinyin: 'zhuānyè',
        english: 'academic major; specialty',
        partOfSpeech: 'Noun',
        exampleHanzi: '你学什么专业？',
        examplePinyin: 'Nǐ xué shénme zhuānyè?',
        exampleTranslation: 'What major do you study?',
      },
      {
        hanzi: '工作',
        pinyin: 'gōngzuò',
        english: 'to work; job; profession',
        partOfSpeech: 'Verb / Noun',
        exampleHanzi: '他们都在韩国工作。',
        examplePinyin: 'Tāmen dōu zài Hánguó gōngzuò.',
        exampleTranslation: 'They all work in Korea.',
      },
      {
        hanzi: '医院',
        pinyin: 'yīyuàn',
        english: 'hospital',
        partOfSpeech: 'Noun',
        exampleHanzi: '女儿在医院工作，是医生。',
        examplePinyin: 'Nǚ’ér zài yīyuàn gōngzuò, shì yīshēng.',
        exampleTranslation: 'My daughter works at a hospital; she is a doctor.',
      },
      {
        hanzi: '医生',
        pinyin: 'yīshēng',
        english: 'doctor; physician',
        partOfSpeech: 'Noun',
        exampleHanzi: '我姐姐是医院的医生。',
        examplePinyin: 'Wǒ jiějie shì yīyuàn de yīshēng.',
        exampleTranslation: 'My older sister is a doctor at a hospital.',
      },
      {
        hanzi: '公司',
        pinyin: 'gōngsī',
        english: 'company; firm; corporation',
        partOfSpeech: 'Noun',
        exampleHanzi: '两个儿子都在公司工作。',
        examplePinyin: 'Liǎng gè érzi dōu zài gōngsī gōngzuò.',
        exampleTranslation: 'Both sons work at a company.',
      },
      {
        hanzi: '司机',
        pinyin: 'sījī',
        english: 'driver',
        partOfSpeech: 'Noun',
        exampleHanzi: '他是出租车司机。',
        examplePinyin: 'Tā shì chūzūchē sījī.',
        exampleTranslation: 'He is a taxi driver.',
      },
      {
        hanzi: '年纪',
        pinyin: 'niánjì',
        english: 'age (used politely for elders/seniors)',
        partOfSpeech: 'Noun',
        exampleHanzi: '你爷爷多大年纪了？',
        examplePinyin: 'Nǐ yéye duō dà niánjì le?',
        exampleTranslation: 'How old is your grandfather?',
      },
      {
        hanzi: '岁',
        pinyin: 'suì',
        english: 'years old (measure word for age)',
        partOfSpeech: 'Measure Word',
        exampleHanzi: '妹妹今年七岁了。',
        examplePinyin: 'Mèimei jīnnián qī suì le.',
        exampleTranslation: 'My younger sister is seven years old this year.',
      },
      {
        hanzi: '可爱',
        pinyin: 'kě’ài',
        english: 'cute; lovely; adorable',
        partOfSpeech: 'Adjective',
        exampleHanzi: '你的妹妹很可爱！',
        examplePinyin: 'Nǐ de mèimei hěn kě’ài!',
        exampleTranslation: 'Your younger sister is very cute!',
      },
    ],
    grammarPoint: 'Numbers 0–99, Measure Words (个 vs. 口, 二 vs. 两), Workplaces & Age Registers',
    structure: 'Numeral + Measure Word + Noun | Subject + 在 + Workplace + 工作 | 几岁 / 多大 / 多大年纪',
    explanation:
      'In Mandarin, a numeral cannot modify a noun directly without an intervening measure word (e.g., 一个女儿, 九口人). Workplace phrases with 在 always precede the verb 工作, and asking someone’s age requires choosing the polite phrasing suited to their generation.',
    examples: [
      {
        hanzi: '我有一个女儿、两个儿子，他们都在韩国工作。',
        pinyin: 'Wǒ yǒu yí gè nǚ’ér, liǎng gè érzi, tāmen dōu zài Hánguó gōngzuò.',
        translation: 'I have one daughter and two sons, and they all work in Korea.',
      },
      {
        hanzi: '我家有六口人，爷爷、奶奶、爸爸、妈妈、姐姐和我。',
        pinyin: 'Wǒ jiā yǒu liù kǒu rén, yéye, nǎinai, bàba, māma, jiějie hé wǒ.',
        translation: 'There are six people in my family: grandpa, grandma, dad, mom, older sister, and me.',
      },
      {
        hanzi: '你爷爷多大年纪了？— 八十二了。',
        pinyin: 'Nǐ yéye duō dà niánjì le? — Bāshí’èr le.',
        translation: 'How old is your grandfather? — Eighty-two.',
      },
    ],
    grammarNotes: [
      {
        title: '1. Numbers 0–99, Measure Words (个 vs. 口), and 二 vs. 两',
        structure: 'Numeral + Measure Word (个 / 口) + Noun | 两 + Measure Word + Noun',
        explanation:
          'Numbers 11–99 are formed logically: 12 is 十二 (10+2), 20 is 二十 (2×10), and 53 is 五十三 (5×10+3). In Chinese, a measure word is required between any number and noun. 个 (gè) is the most common general measure word for people and things, while 口 (kǒu) is used specifically to count members of a household (你家有几口人？).',
        tip: 'When the number "2" stands before a measure word, always use 两 (liǎng) instead of 二 (èr): 两个儿子, 两口人. Use 二 when counting in sequence (一、二、三) or in multi-digit numbers like 十二 (12), 二十 (20), and 八十二 (82).',
        examples: [
          {
            hanzi: '我有两个姐姐、三个妹妹。',
            pinyin: 'Wǒ yǒu liǎng gè jiějie, sān gè mèimei.',
            translation: 'I have two older sisters and three younger sisters.',
          },
          {
            hanzi: '你家有几口人？— 我家有九口人。',
            pinyin: 'Nǐ jiā yǒu jǐ kǒu rén? — Wǒ jiā yǒu jiǔ kǒu rén.',
            translation: 'How many people are in your family? — There are nine people in my family.',
          },
        ],
      },
      {
        title: '2. Asking & Stating Workplaces and Occupations (询问工作与职业)',
        structure: 'Subject + 在 + [Workplace] + 工作 | Subject + 是 + [Occupation]',
        explanation:
          'Unlike English, where location follows the verb ("works at a hospital"), Mandarin places the location phrase 在 + [Place] BEFORE the verb 工作 (or 学习). Common workplaces include 医院 (hospital), 公司 (company), 学校 (school), 银行 (bank), 超市 (supermarket), 政府 (government), and 工厂 (factory).',
        examples: [
          {
            hanzi: '女儿在医院工作，是医生。',
            pinyin: 'Nǚ’ér zài yīyuàn gōngzuò, shì yīshēng.',
            translation: 'My daughter works at a hospital; she is a doctor.',
          },
          {
            hanzi: '我是韩国人，在天南大学学习汉语。',
            pinyin: 'Wǒ shì Hánguórén, zài Tiānnán Dàxué xuéxí Hànyǔ.',
            translation: 'I am Korean and study Chinese at Tiannan University.',
          },
        ],
      },
      {
        title: '3. Asking & Stating College Majors (询问专业)',
        structure: '你学什么（专业）？ / 你的专业是什么？ → 我学 + [Major] / 我的专业是 + [Major]',
        explanation:
          'To ask a student’s academic major, say 你学什么专业？ or 你的专业是什么？ Common majors in the textbook include 汉语 (Chinese), 医学 (Medicine), 历史 (History), 建筑 (Architecture), 经济 (Economics), and 音乐 (Music).',
        examples: [
          {
            hanzi: '你学什么专业？— 我的专业是汉语。',
            pinyin: 'Nǐ xué shénme zhuānyè? — Wǒ de zhuānyè shì Hànyǔ.',
            translation: 'What major do you study? — My major is Chinese.',
          },
        ],
      },
      {
        title: '4. Three Register-Specific Ways to Ask Age (询问年龄的三种表达)',
        structure: 'Children: 几岁（了）？ | Peers/Adults: 多大（了）？ | Elders: 多大年纪（了）？',
        explanation:
          'Mandarin distinguishes three ways to ask age depending on the listener’s age group: (1) For children roughly under 10, ask 今年几岁（了）？ (2) For peers, young adults, or siblings, ask 今年多大（了）？ (3) For elders such as grandparents or senior professors, ask respectfully 今年多大年纪（了）？',
        tip: 'Match the particle 了 in your answer to the question: if asked 你多大了？ (with 了), answer 二十二（岁）了; if asked 你今年多大？ (without 了), answer 二十二（岁）.',
        examples: [
          {
            hanzi: '妹妹很可爱，今年几岁了？— 今年七岁了。',
            pinyin: 'Mèimei hěn kě’ài, jīnnián jǐ suì le? — Jīnnián qī suì le.',
            translation: 'Your younger sister is so cute; how old is she this year? — Seven years old this year.',
          },
          {
            hanzi: '你哥哥多大了？— 我哥哥今年三十五了。',
            pinyin: 'Nǐ gēge duō dà le? — Wǒ gēge jīnnián sānshíwǔ le.',
            translation: 'How old is your older brother? — My older brother is 35 this year.',
          },
          {
            hanzi: '你爷爷多大年纪了？— 八十二了。',
            pinyin: 'Nǐ yéye duō dà niánjì le? — Bāshí’èr le.',
            translation: 'How old is your grandfather? — Eighty-two.',
          },
        ],
      },
    ],
    exercises: [
      {
        question: 'Which sentence correctly expresses "I have two older sisters and twenty-two classmates"?',
        options: [
          '我有二个姐姐、二十两个同学。',
          '我有两个姐姐、二十二个同学。',
          '我有两姐姐、二十二同学。',
          '我有二口姐姐、二十二口同学。',
        ],
        answerIndex: 1,
        explanation:
          'Use 两 before a measure word for the standalone number 2 (两个姐姐), keep 二 in multi-digit numbers like 22 (二十二个同学), and always include the measure word 个.',
      },
      {
        question: 'How should you politely ask the age of your classmate’s grandfather?',
        promptHanzi: '你爷爷今年________？',
        promptPinyin: 'Nǐ yéye jīnnián ________?',
        options: ['几岁了', '多大年纪了', '几口人', '什么专业'],
        answerIndex: 1,
        explanation:
          '多大年纪了 is the respectful expression used to ask the age of an elderly person. 几岁了 is only used for young children.',
      },
      {
        question: 'Choose the grammatically correct Mandarin word order for "My older brother works at a hospital."',
        options: [
          '我哥哥工作在医院。',
          '我哥哥在医院工作。',
          '在医院我哥哥是工作。',
          '我哥哥医院在工作。',
        ],
        answerIndex: 1,
        explanation:
          'In Mandarin, the prepositional location phrase 在 + [Workplace] must come BEFORE the verb 工作: 我哥哥在医院工作。',
      },
      {
        question: 'According to the Lesson 2 Reading Passage about Xiaolin’s family, how old are her sister’s two daughters?',
        options: [
          '一个七岁了，一个五岁了。',
          '一个六岁了，一个四岁了。',
          '两个都六岁了。',
          '一个八岁了，一个两岁了。',
        ],
        answerIndex: 1,
        explanation:
          'The passage states: “这是我姐姐，她今年三十岁，是老师，有两个女儿，一个六岁了，一个四岁了。” (One is six years old, and one is four years old.)',
      },
    ],
  },
  {
    id: 'lesson3',
    title: 'Lesson 3: What Time Do You Go to Bed Every Day? — 你每天几点睡觉',
    chineseTitle: '第3课 你每天几点睡觉',
    unitBadge: 'Mastering Chinese · Elementary 1 (会通汉语 精编版·初级1)',
    description:
      'Master tone sandhi rules (3rd tone, 一, and 不), Chinese pictographic characters (象形字), telling clock time (点, 半, 刻, 分, 差), dates and days of the week, alternative questions with 还是 vs. declarative 或者, and daily routines.',
    content:
      'Unit 3 of Mastering Chinese: Elementary 1 focuses on natural connected speech through tone sandhi, the visual origins of 14 core Chinese pictographs, expressing exact times and calendar dates, and discussing weekday vs. weekend schedules.',
    hskLevel: 1,
    objectives: [
      'Apply 3rd-tone sandhi and the tone-change rules of 一 (yī → yí / yì) and 不 (bù → bú)',
      'Recognize 14 foundational Chinese pictographic characters (山, 人, 木, 水, 火, 月, 田, 目, 口, 手, 鱼, 羊, 瓜, 门) and hook strokes (钩)',
      'Tell clock time using 点, 半, 刻, 分, 零, and 差, and distinguish time points (点/分) from durations (小时/分钟)',
      'State calendar dates and days of the week from largest unit to smallest (年 → 月 → 日/号 → 星期)',
      'Distinguish alternative choice questions with 还是 from declarative statements with 或者',
      'Describe daily routines and habits using 每天, 一般, 有时候……有时候……, and ……的时候',
    ],
    dialogue: [
      {
        character: '妈妈 (Mom)',
        hanzi: '早上好。',
        pinyin: 'Zǎoshang hǎo.',
        translation: 'Good morning.',
      },
      {
        character: '马克 (Mark)',
        hanzi: '早上好？现在是晚上八点半。',
        pinyin: 'Zǎoshang hǎo? Xiànzài shì wǎnshang bā diǎn bàn.',
        translation: 'Good morning? Right now it is 8:30 in the evening.',
      },
      {
        character: '妈妈 (Mom)',
        hanzi: '对对对，中国现在是晚上。你那儿几号？星期几？',
        pinyin: 'Duì duì duì, Zhōngguó xiànzài shì wǎnshang. Nǐ nàr jǐ hào? Xīngqī jǐ?',
        translation: 'Right, right, it’s evening in China now. What is the date over there? What day of the week is it?',
      },
      {
        character: '马克 (Mark)',
        hanzi: '九月三十号，星期一。',
        pinyin: 'Jiǔ yuè sānshí hào, xīngqīyī.',
        translation: 'September 30th, Monday.',
      },
      {
        character: '妈妈 (Mom)',
        hanzi: '明天是你的生日。你中午吃蛋糕还是晚上吃蛋糕？',
        pinyin: 'Míngtiān shì nǐ de shēngrì. Nǐ zhōngwǔ chī dàngāo háishi wǎnshang chī dàngāo?',
        translation: 'Tomorrow is your birthday. Are you eating cake at noon or in the evening?',
      },
      {
        character: '马克 (Mark)',
        hanzi: '明天也是中国的国庆节，我不上课，中午吃吧。',
        pinyin: 'Míngtiān yě shì Zhōngguó de Guóqìng Jié, wǒ bú shàngkè, zhōngwǔ chī ba.',
        translation: 'Tomorrow is also China’s National Day. I don’t have class, so let’s eat it at noon.',
      },
      {
        character: '妈妈 (Mom)',
        hanzi: '太好了！明天我们一起给你过生日，祝你生日快乐。',
        pinyin: 'Tài hǎo le! Míngtiān wǒmen yìqǐ gěi nǐ guò shēngrì, zhù nǐ shēngrì kuàilè.',
        translation: 'Wonderful! Tomorrow we will celebrate your birthday together—happy birthday to you!',
      },
    ],
    dialogues: [
      {
        title: 'Dialogue 1 · Video Call Across Time Zones & Birthday Plans (功能表达·1)',
        context:
          'Mark’s mother calls him from the United States in her morning while it is already 8:30 PM on Monday, September 30th in China—the eve of both Mark’s birthday and China’s National Day.',
        lines: [
          {
            character: '妈妈 (Mom)',
            hanzi: '早上好。',
            pinyin: 'Zǎoshang hǎo.',
            translation: 'Good morning.',
          },
          {
            character: '马克 (Mark)',
            hanzi: '早上好？现在是晚上八点半。',
            pinyin: 'Zǎoshang hǎo? Xiànzài shì wǎnshang bā diǎn bàn.',
            translation: 'Good morning? Right now it is 8:30 in the evening.',
          },
          {
            character: '妈妈 (Mom)',
            hanzi: '对对对，中国现在是晚上。你那儿几号？星期几？',
            pinyin: 'Duì duì duì, Zhōngguó xiànzài shì wǎnshang. Nǐ nàr jǐ hào? Xīngqī jǐ?',
            translation: 'Right, right, it’s evening in China now. What is the date over there? What day of the week is it?',
          },
          {
            character: '马克 (Mark)',
            hanzi: '九月三十号，星期一。',
            pinyin: 'Jiǔ yuè sānshí hào, xīngqīyī.',
            translation: 'September 30th, Monday.',
          },
          {
            character: '妈妈 (Mom)',
            hanzi: '明天是你的生日。你中午吃蛋糕还是晚上吃蛋糕？',
            pinyin: 'Míngtiān shì nǐ de shēngrì. Nǐ zhōngwǔ chī dàngāo háishi wǎnshang chī dàngāo?',
            translation: 'Tomorrow is your birthday. Are you eating cake at noon or in the evening?',
          },
          {
            character: '马克 (Mark)',
            hanzi: '明天也是中国的国庆节，我不上课，中午吃吧。',
            pinyin: 'Míngtiān yě shì Zhōngguó de Guóqìng Jié, wǒ bú shàngkè, zhōngwǔ chī ba.',
            translation: 'Tomorrow is also China’s National Day. I don’t have class, so let’s eat it at noon.',
          },
          {
            character: '妈妈 (Mom)',
            hanzi: '太好了！明天我们一起给你过生日，祝你生日快乐。',
            pinyin: 'Tài hǎo le! Míngtiān wǒmen yìqǐ gěi nǐ guò shēngrì, zhù nǐ shēngrì kuàilè.',
            translation: 'Wonderful! Tomorrow we will celebrate your birthday together—happy birthday to you!',
          },
        ],
      },
      {
        title: 'Dialogue 2 · Daily Routines vs. Weekend Habits (功能表达·2)',
        context:
          'Jessie (杰希) and Ali (阿里) compare their bedtime, wake-up time, and daily exercise routines.',
        lines: [
          {
            character: '杰希 (Jessie)',
            hanzi: '你每天几点睡觉？',
            pinyin: 'Nǐ měitiān jǐ diǎn shuìjiào?',
            translation: 'What time do you go to bed every day?',
          },
          {
            character: '阿里 (Ali)',
            hanzi: '我一般十一点睡，周末的时候两点睡。',
            pinyin: 'Wǒ yìbān shíyī diǎn shuì, zhōumò de shíhou liǎng diǎn shuì.',
            translation: 'I usually go to bed at 11 o’clock, and on weekends I go to bed at 2 o’clock.',
          },
          {
            character: '杰希 (Jessie)',
            hanzi: '两点睡？那你什么时候起床？',
            pinyin: 'Liǎng diǎn shuì? Nà nǐ shénme shíhou qǐchuáng?',
            translation: 'Sleep at 2 o’clock? Then when do you get up?',
          },
          {
            character: '阿里 (Ali)',
            hanzi: '中午或者下午。你呢？',
            pinyin: 'Zhōngwǔ huòzhě xiàwǔ. Nǐ ne?',
            translation: 'At noon or in the afternoon. How about you?',
          },
          {
            character: '杰希 (Jessie)',
            hanzi: '我每天六点半起床，七点吃早饭，上午学汉语，下午有时候游泳，有时候跑步，六点半吃晚饭，十点半睡觉。',
            pinyin:
              'Wǒ měitiān liù diǎn bàn qǐchuáng, qī diǎn chī zǎofàn, shàngwǔ xué Hànyǔ, xiàwǔ yǒushíhou yóuyǒng, yǒushíhou pǎobù, liù diǎn bàn chī wǎnfàn, shí diǎn bàn shuìjiào.',
            translation:
              'I get up at 6:30 every day, eat breakfast at 7:00, study Chinese in the morning, sometimes swim and sometimes run in the afternoon, eat dinner at 6:30, and go to bed at 10:30.',
          },
        ],
      },
    ],
    readingPassage: {
      title: 'Comprehensive Reading · Hirata’s Schedule in Japan vs. China (综合表达训练·短文)',
      subtitle: 'How Hirata’s daily life changed from working at a computer company in Japan to studying Chinese in China.',
      paragraphs: [
        {
          hanzi: '平田在一家电脑公司工作。在日本，他每天九点上班，六点下班，星期天休息，星期六有时候打球。',
          pinyin:
            'Píngtián zài yì jiā diànnǎo gōngsī gōngzuò. Zài Rìběn, tā měitiān jiǔ diǎn shàngbān, liù diǎn xiàbān, xīngqītiān xiūxi, xīngqīliù yǒushíhou dǎqiú.',
          translation:
            'Hirata works at a computer company. In Japan, he goes to work at 9:00 every day, gets off work at 6:00, rests on Sundays, and sometimes plays ball on Saturdays.',
        },
        {
          hanzi: '现在他在中国学汉语，一般八点上课，下午有时候学汉语，晚上一般看书，星期六和星期天都休息。',
          pinyin:
            'Xiànzài tā zài Zhōngguó xué Hànyǔ, yìbān bā diǎn shàngkè, xiàwǔ yǒushíhou xué Hànyǔ, wǎnshang yìbān kànshū, xīngqīliù hé xīngqītiān dōu xiūxi.',
          translation:
            'Now he is studying Chinese in China. He usually starts class at 8:00, sometimes studies Chinese in the afternoon, usually reads books in the evening, and rests on both Saturdays and Sundays.',
        },
        {
          hanzi: '周末的时候，一般跑步或者休息，有了很多中国朋友和外国朋友。有人问他，在中国的生活快乐还是不快乐？平田说在中国的生活太快乐了，他很喜欢中国。',
          pinyin:
            'Zhōumò de shíhou, yìbān pǎobù huòzhě xiūxi, yǒu le hěn duō Zhōngguó péngyou hé wàiguó péngyou. Yǒurén wèn tā, zài Zhōngguó de shēnghuó kuàilè háishi bú kuàilè? Píngtián shuō zài Zhōngguó de shēnghuó tài kuàilè le, tā hěn xǐhuan Zhōngguó.',
          translation:
            'On weekends, he usually goes running or rests, and he has made many Chinese and foreign friends. Someone asked him whether life in China is happy or not. Hirata said life in China is so happy, and he likes China very much.',
        },
      ],
    },
    phoneticsAndCharacters: {
      title: 'Section 1 · Tone Sandhi Rules & Pictographic Characters (三声变调、“一/不”变调与象形字)',
      sections: [
        {
          subtitle: '1. Third-Tone Sandhi & The Tone Changes of 一 and 不',
          summary:
            'In natural speech, Mandarin tones adjust to neighboring syllables so phrases flow effortlessly.',
          items: [
            {
              label: '3rd-Tone Sandhi (三声变调)',
              pinyin: '3rd + 3rd → 2nd + 3rd | 3rd + 1st/2nd/4th/Neutral → Half-3rd (21)',
              detail:
                'When two 3rd-tone syllables meet, the first becomes a 2nd tone (你好 nǐ hǎo → ní hǎo, 很好 hěn hǎo → hén hǎo). Before 1st, 2nd, 4th, or neutral tones, a 3rd tone is pronounced as a low falling "half-3rd" without rising at the end (老师 lǎoshī, 美国 Měiguó, 可爱 kě’ài).',
              examples: '你好 ní hǎo · 很好 hén hǎo · 所以 suóyǐ · 老师 lǎoshī · 美国 Měiguó',
              speakText: '你好 很好 所以 老师 美国',
            },
            {
              label: 'Tone Sandhi of 一 (yī) and 不 (bù)',
              pinyin: 'yī + 4th → yí | yī + 1st/2nd/3rd → yì | bù + 4th → bú',
              detail:
                'When 一 precedes a 4th tone, it rises to 2nd tone (一个 yí gè, 一样 yíyàng). Before 1st, 2nd, or 3rd tones, 一 falls to 4th tone (一天 yì tiān, 一年 yì nián, 一起 yìqǐ). In counting, ordinals, and dates (星期一, 一号), 一 keeps its original 1st tone. 不 changes to 2nd tone bú before a 4th tone (不是 bú shì, 不睡 bú shuì, 不上课 bú shàngkè).',
              examples: 'Classic Poem Drill: 一帆一桨一渔舟，一个渔翁一钓钩。一俯一仰一场笑，一江明月一江秋。',
              speakText: '一帆一桨一渔舟，一个渔翁一钓钩。一俯一仰一场笑，一江明月一江秋。',
            },
          ],
        },
        {
          subtitle: '2. Pictographic Characters (象形字) & Hook Strokes (钩)',
          summary:
            'Many core Chinese characters originated as stylized drawings of natural objects (象形字 xiàngxíngzì).',
          items: [
            {
              label: '14 Core Pictographs (十四字象形表)',
              pinyin: '山 shān · 人 rén · 瓜 guā · 木 mù · 鱼 yú · 门 mén · 田 tián · 目 mù · 口 kǒu · 羊 yáng · 手 shǒu · 水 shuǐ · 月 yuè · 火 huǒ',
              detail:
                'Mountain (山), Person (人), Melon on vine (瓜), Tree with branches and roots (木), Fish with scales and tail (鱼), Double doors (门), Cultivated field (田), Eye (目), Open mouth (口), Horned sheep (羊), Five-fingered hand (手), Flowing water (水), Crescent moon (月), Rising flames (火).',
              examples: '山 人 瓜 木 鱼 门 田 目 口 羊 手 水 月 火',
              speakText: '山 人 瓜 木 鱼 门 田 目 口 羊 手 水 月 火',
            },
            {
              label: 'The Hook Stroke (汉字的笔画——钩 gōu)',
              pinyin: '竖钩 shùgōu · 弯钩 wāngōu · 斜钩 xiégōu · 卧钩 wògōu · 横钩 hénggōu',
              detail:
                'A hook (钩) is a sharp flick at the end of a stroke that gives characters balance and momentum toward the next stroke.',
              examples: '家 jiā · 你 nǐ · 孩 hái · 心 xīn · 我 wǒ · 吃 chī',
              speakText: '家 你 孩 心 我 吃',
            },
          ],
        },
      ],
    },
    vocabularyExplanation: [
      {
        hanzi: '早上',
        pinyin: 'zǎoshang',
        english: 'early morning',
        partOfSpeech: 'Time Noun',
        exampleHanzi: '早上好！',
        examplePinyin: 'Zǎoshang hǎo!',
        exampleTranslation: 'Good morning!',
      },
      {
        hanzi: '现在',
        pinyin: 'xiànzài',
        english: 'now; right now; at present',
        partOfSpeech: 'Time Noun',
        exampleHanzi: '现在是晚上八点半。',
        examplePinyin: 'Xiànzài shì wǎnshang bā diǎn bàn.',
        exampleTranslation: 'Right now it is 8:30 in the evening.',
      },
      {
        hanzi: '晚上',
        pinyin: 'wǎnshang',
        english: 'evening; night',
        partOfSpeech: 'Time Noun',
        exampleHanzi: '中国现在是晚上。',
        examplePinyin: 'Zhōngguó xiànzài shì wǎnshang.',
        exampleTranslation: 'It is evening in China right now.',
      },
      {
        hanzi: '点',
        pinyin: 'diǎn',
        english: 'o’clock (measure word for hours on the clock)',
        partOfSpeech: 'Measure Word',
        exampleHanzi: '你每天几点睡觉？',
        examplePinyin: 'Nǐ měitiān jǐ diǎn shuìjiào?',
        exampleTranslation: 'What time do you go to bed every day?',
      },
      {
        hanzi: '半',
        pinyin: 'bàn',
        english: 'half; 30 minutes past the hour',
        partOfSpeech: 'Numeral',
        exampleHanzi: '我每天六点半起床。',
        examplePinyin: 'Wǒ měitiān liù diǎn bàn qǐchuáng.',
        exampleTranslation: 'I get up at 6:30 every day.',
      },
      {
        hanzi: '刻',
        pinyin: 'kè',
        english: 'quarter of an hour (15 minutes)',
        partOfSpeech: 'Measure Word',
        exampleHanzi: '现在是五点一刻。',
        examplePinyin: 'Xiànzài shì wǔ diǎn yí kè.',
        exampleTranslation: 'Right now it is 5:15 (a quarter past five).',
      },
      {
        hanzi: '差',
        pinyin: 'chà',
        english: 'to be short of; "to" the hour (e.g., 5 minutes to 9)',
        partOfSpeech: 'Verb',
        exampleHanzi: '现在差五分九点。',
        examplePinyin: 'Xiànzài chà wǔ fēn jiǔ diǎn.',
        exampleTranslation: 'It is now five minutes to nine (8:55).',
      },
      {
        hanzi: '月',
        pinyin: 'yuè',
        english: 'month; moon',
        partOfSpeech: 'Noun',
        exampleHanzi: '今天是九月三十号。',
        examplePinyin: 'Jīntiān shì jiǔ yuè sānshí hào.',
        exampleTranslation: 'Today is September 30th.',
      },
      {
        hanzi: '号',
        pinyin: 'hào',
        english: 'day of the month (spoken); number',
        partOfSpeech: 'Noun',
        exampleHanzi: '你那儿几号？',
        examplePinyin: 'Nǐ nàr jǐ hào?',
        exampleTranslation: 'What is the date over there?',
      },
      {
        hanzi: '星期',
        pinyin: 'xīngqī',
        english: 'week (星期一 Monday … 星期天/日 Sunday)',
        partOfSpeech: 'Noun',
        exampleHanzi: '今天星期几？— 星期一。',
        examplePinyin: 'Jīntiān xīngqī jǐ? — Xīngqīyī.',
        exampleTranslation: 'What day of the week is today? — Monday.',
      },
      {
        hanzi: '明天',
        pinyin: 'míngtiān',
        english: 'tomorrow',
        partOfSpeech: 'Time Noun',
        exampleHanzi: '明天是你的生日。',
        examplePinyin: 'Míngtiān shì nǐ de shēngrì.',
        exampleTranslation: 'Tomorrow is your birthday.',
      },
      {
        hanzi: '生日',
        pinyin: 'shēngrì',
        english: 'birthday',
        partOfSpeech: 'Noun',
        exampleHanzi: '祝你生日快乐！',
        examplePinyin: 'Zhù nǐ shēngrì kuàilè!',
        exampleTranslation: 'Happy birthday to you!',
      },
      {
        hanzi: '还是',
        pinyin: 'háishi',
        english: 'or (used in alternative choice questions)',
        partOfSpeech: 'Conjunction',
        exampleHanzi: '你中午吃蛋糕还是晚上吃蛋糕？',
        examplePinyin: 'Nǐ zhōngwǔ chī dàngāo háishi wǎnshang chī dàngāo?',
        exampleTranslation: 'Are you eating cake at noon or in the evening?',
      },
      {
        hanzi: '或者',
        pinyin: 'huòzhě',
        english: 'or; either...or... (used in declarative statements)',
        partOfSpeech: 'Conjunction',
        exampleHanzi: '周末我一般跑步或者休息。',
        examplePinyin: 'Zhōumò wǒ yìbān pǎobù huòzhě xiūxi.',
        exampleTranslation: 'On weekends I usually go running or rest.',
      },
      {
        hanzi: '上课',
        pinyin: 'shàngkè',
        english: 'to attend class; to go to class',
        partOfSpeech: 'Verb-Object',
        exampleHanzi: '明天是国庆节，我不上课。',
        examplePinyin: 'Míngtiān shì Guóqìng Jié, wǒ bú shàngkè.',
        exampleTranslation: 'Tomorrow is National Day; I don’t have class.',
      },
      {
        hanzi: '每天',
        pinyin: 'měitiān',
        english: 'every day; daily',
        partOfSpeech: 'Adverb / Time',
        exampleHanzi: '你每天几点睡觉？',
        examplePinyin: 'Nǐ měitiān jǐ diǎn shuìjiào?',
        exampleTranslation: 'What time do you go to bed every day?',
      },
      {
        hanzi: '睡觉',
        pinyin: 'shuìjiào',
        english: 'to sleep; to go to bed',
        partOfSpeech: 'Verb-Object',
        exampleHanzi: '我每天十点半睡觉。',
        examplePinyin: 'Wǒ měitiān shí diǎn bàn shuìjiào.',
        exampleTranslation: 'I go to bed at 10:30 every day.',
      },
      {
        hanzi: '起床',
        pinyin: 'qǐchuáng',
        english: 'to get up; to get out of bed',
        partOfSpeech: 'Verb-Object',
        exampleHanzi: '那你什么时候起床？',
        examplePinyin: 'Nà nǐ shénme shíhou qǐchuáng?',
        exampleTranslation: 'Then when do you get up?',
      },
      {
        hanzi: '一般',
        pinyin: 'yìbān',
        english: 'usually; generally; ordinarily',
        partOfSpeech: 'Adverb',
        exampleHanzi: '我一般十一点睡。',
        examplePinyin: 'Wǒ yìbān shíyī diǎn shuì.',
        exampleTranslation: 'I usually go to bed at 11 o’clock.',
      },
      {
        hanzi: '有时候',
        pinyin: 'yǒushíhou',
        english: 'sometimes',
        partOfSpeech: 'Adverb',
        exampleHanzi: '下午我有时候游泳，有时候跑步。',
        examplePinyin: 'Xiàwǔ wǒ yǒushíhou yóuyǒng, yǒushíhou pǎobù.',
        exampleTranslation: 'In the afternoon I sometimes swim and sometimes run.',
      },
    ],
    grammarPoint: 'Telling Clock Time, Dates (Large to Small), 还是 vs. 或者, and ……的时候',
    structure: 'X 点 Y 分 / 差 X 分 Y 点 | 年 + 月 + 号 + 星期 | Question: A 还是 B？ vs. Statement: A 或者 B',
    explanation:
      'Mandarin expresses time and dates from the largest unit down to the smallest (Year → Month → Day → Period of Day → Hour → Minute). When presenting options, 还是 is used in choice questions (or embedded clauses after 不知道), whereas 或者 is used in affirmative declarative statements.',
    examples: [
      {
        hanzi: '现在是晚上八点半。',
        pinyin: 'Xiànzài shì wǎnshang bā diǎn bàn.',
        translation: 'Right now it is 8:30 in the evening.',
      },
      {
        hanzi: '你中午吃蛋糕还是晚上吃蛋糕？',
        pinyin: 'Nǐ zhōngwǔ chī dàngāo háishi wǎnshang chī dàngāo?',
        translation: 'Are you eating cake at noon or in the evening?',
      },
      {
        hanzi: '我一般十一点睡，周末的时候两点睡。',
        pinyin: 'Wǒ yìbān shíyī diǎn shuì, zhōumò de shíhou liǎng diǎn shuì.',
        translation: 'I usually sleep at 11:00, and on weekends I sleep at 2:00.',
      },
    ],
    grammarNotes: [
      {
        title: '1. Telling Clock Time: 点, 半, 刻, 分, 零, and 差',
        structure: '[Hour] 点 + [Minute] 分 / 半 (30m) / 一刻 (15m) | 差 + [Minutes] 分 + [Next Hour] 点',
        explanation:
          'Use 点 (diǎn) for the hour, 半 (bàn) for 30 minutes past, 一刻 (yí kè) for 15 minutes, 三刻 (sān kè) for 45 minutes, and 分 (fēn) for minutes. If the minute is between 01 and 09, insert 零 (líng): 8:02 is 八点零二分. For times close to the next hour, use 差 (chà, "short of"): 8:55 is 差五分九点 (five minutes to nine) and 5:45 is 差一刻六点.',
        tip: 'Distinguish clock points from durations: 8:06 is 八点零六分 (point in time), whereas "8 hours and 6 minutes" is 八个小时零六分钟 (duration). Also, 2:00 is always 两点 (never *二点).',
        examples: [
          {
            hanzi: '2:00 两点 · 2:30 两点半 · 5:15 五点一刻 · 8:02 八点零二分 · 8:55 差五分九点',
            pinyin: 'liǎng diǎn · liǎng diǎn bàn · wǔ diǎn yí kè · bā diǎn líng èr fēn · chà wǔ fēn jiǔ diǎn',
            translation: '2:00 · 2:30 · 5:15 · 8:02 · 8:55 (five to nine)',
          },
        ],
      },
      {
        title: '2. Dates, Days of the Week & Relative Time Matrix (日期与星期表达)',
        structure: '[Year] 年 + [Month] 月 + [Day] 日/号，星期 [1–6 / 天 / 日]',
        explanation:
          'Chinese dates always follow the "largest-to-smallest" principle: Year (年, read digit by digit, e.g., 二〇二五年) → Month (一月 to 十二月) → Date (日 in formal writing, 号 in spoken Mandarin) → Day of the week (星期一 Monday through 星期六 Saturday, and 星期天 or 星期日 for Sunday—never *星期七).',
        tip: 'Relative time words follow two neat patterns: Years & Days use 去/昨 (past), 今 (present), 明 (next) → 去年/今年/明年 and 昨天/今天/明天. Months & Weeks use 上 (last), 这 (this), 下 (next) → 上个月/这个月/下个月 and 上个星期/这个星期/下个星期.',
        examples: [
          {
            hanzi: '你那儿几号？星期几？— 九月三十号，星期一。',
            pinyin: 'Nǐ nàr jǐ hào? Xīngqī jǐ? — Jiǔ yuè sānshí hào, xīngqīyī.',
            translation: 'What’s the date over there? What day of the week? — September 30th, Monday.',
          },
        ],
      },
      {
        title: '3. Expressing "Or": 还是 (Choice Questions) vs. 或者 (Statements)',
        structure: 'Question: Subject + (是) + A + 还是 + B？ | Statement: Subject + A + 或者 + B。',
        explanation:
          'Both 还是 and 或者 translate to "or" in English, but their grammatical environments are strictly separated. Use 还是 in questions that ask the listener to choose between options (or in indirect questions after 不知道, e.g., 我不知道他是美国人还是英国人). Use 或者 in affirmative declarative statements indicating that either option applies.',
        examples: [
          {
            hanzi: '你中午吃蛋糕还是晚上吃蛋糕？（疑问句用“还是”）',
            pinyin: 'Nǐ zhōngwǔ chī dàngāo háishi wǎnshang chī dàngāo?',
            translation: 'Are you eating cake at noon or in the evening? (Question → 还是)',
          },
          {
            hanzi: '周末的时候，他一般跑步或者休息。（陈述句用“或者”）',
            pinyin: 'Zhōumò de shíhou, tā yìbān pǎobù huòzhě xiūxi.',
            translation: 'On weekends, he usually goes running or rests. (Statement → 或者)',
          },
        ],
      },
      {
        title: '4. Time Clauses with ……的时候 and Routine Adverbs (一般, 有时候……有时候……)',
        structure: '[Time / Event] + 的时候 (or ……时)，Subject + 一般 / 有时候……',
        explanation:
          'Attach ……的时候 (or its shorter written form ……时) to a time word, verb phrase, or clause to mean "when..." or "at the time of..." (周末的时候 on weekends; 上课的时候 when in class; 妈妈五十岁的时候 when Mom was 50). Pair it with 每天 (every day), 一般 (usually), and 有时候……有时候…… (sometimes... and sometimes...) to describe routines.',
        examples: [
          {
            hanzi: '我一般十一点睡，周末的时候两点睡。',
            pinyin: 'Wǒ yìbān shíyī diǎn shuì, zhōumò de shíhou liǎng diǎn shuì.',
            translation: 'I usually sleep at 11 o’clock, and on weekends I sleep at 2 o’clock.',
          },
          {
            hanzi: '下午我有时候游泳，有时候跑步。',
            pinyin: 'Xiàwǔ wǒ yǒushíhou yóuyǒng, yǒushíhou pǎobù.',
            translation: 'In the afternoon I sometimes swim and sometimes run.',
          },
        ],
      },
    ],
    exercises: [
      {
        question: 'How is 8:55 expressed in Mandarin using 差 (chà)?',
        options: ['八点差五分', '差五分九点', '九点差五分八点', '差九点五分'],
        answerIndex: 1,
        explanation:
          'When using 差 ("short of"), state how many minutes are lacking first, followed by the upcoming hour: 差五分九点 (five minutes to nine).',
      },
      {
        question: 'Fill in the blanks with 还是 or 或者: “你今天去图书馆____明天去？” — “今天____明天都可以。”',
        options: ['或者 / 还是', '还是 / 或者', '还是 / 还是', '或者 / 或者'],
        answerIndex: 1,
        explanation:
          'The first sentence is an alternative question asking the listener to choose (use 还是); the second sentence is a declarative statement meaning either day works (use 或者).',
      },
      {
        question: 'Which of the following correctly applies the tone sandhi rule for 一 (yī)?',
        options: [
          '一个 (yì gè) and 一天 (yí tiān)',
          '一个 (yí gè) and 一天 (yì tiān)',
          '一个 (yī gè) and 一起 (yīqǐ)',
          '一样 (yìyàng) and 一定 (yìdìng)',
        ],
        answerIndex: 1,
        explanation:
          'Before a 4th-tone syllable (个 gè, 样 yàng, 定 dìng), 一 changes to the 2nd tone yí (一个 yí gè). Before 1st, 2nd, or 3rd tones (天 tiān, 年 nián, 起 qǐ), 一 changes to the 4th tone yì (一天 yì tiān).',
      },
      {
        question: 'According to the Lesson 3 Reading Passage, what is Hirata’s schedule now that he is studying in China?',
        options: [
          '他每天九点上班，六点下班，只有星期天休息。',
          '他一般八点上课，晚上一般看书，星期六和星期天都休息。',
          '他每天两点睡觉，中午或者下午起床。',
          '他在中国不喜欢跑步，也没有外国朋友。',
        ],
        answerIndex: 1,
        explanation:
          'In Japan Hirata worked 9:00 to 6:00 and only rested on Sundays, whereas in China he usually has class at 8:00, reads in the evening, and rests on both Saturdays and Sundays.',
      },
    ],
  },
  {
    id: 'lesson4',
    title: 'Cultural Reader 1: Traditional Chinese Festivals — 中国的传统节日',
    chineseTitle: '文化读本1：中国的传统节日',
    unitBadge: 'Mastering Chinese · Elementary 1 · Cultural Reader (文化读本)',
    description:
      'Explore the five major traditional Chinese festivals—Spring Festival (春节), Lantern Festival (元宵节), Qingming Festival (清明节), Dragon Boat Festival (端午节), and Mid-Autumn Festival (中秋节)—their lunar calendar dates, signature foods, and cultural meaning.',
    content:
      'This Cultural Reader from Mastering Chinese: Elementary 1 introduces the Chinese lunar calendar (农历), the customs and regional culinary traditions of China’s five most celebrated traditional festivals, and the core cultural values of family reunion (团圆) and shared food.',
    hskLevel: 1,
    objectives: [
      'Understand the difference between the solar calendar (公历) and the traditional Chinese lunar calendar (农历)',
      'Identify the dates, customs, and signature foods of Spring Festival, Lantern Festival, Qingming, Dragon Boat Festival, and Mid-Autumn Festival',
      'Compare Northern and Southern Chinese festival customs (e.g., eating 饺子 vs. 年糕/汤圆, racing dragon boats 赛龙舟)',
      'Discuss festival traditions in Mandarin using 一般, 有时候, 或者, and ……的时候',
    ],
    dialogue: [
      {
        character: '李老师 (Teacher Li)',
        hanzi: '同学们，中国最重要的传统节日是什么节？',
        pinyin: 'Tóngxuémen, Zhōngguó zuì zhòngyào de chuántǒng jiérì shì shénme jié?',
        translation: 'Classmates, what is the most important traditional festival in China?',
      },
      {
        character: '金志英 (Jin Zhiying)',
        hanzi: '是春节！农历正月初一是春节，全家团圆。',
        pinyin: 'Shì Chūnjié! Nónglì zhēngyuè chūyī shì Chūnjié, quánjiā tuányuán.',
        translation: 'It’s the Spring Festival! The first day of the first lunar month is Spring Festival, when the whole family reunites.',
      },
      {
        character: '李老师 (Teacher Li)',
        hanzi: '对！春节的时候，中国人一般吃什么？',
        pinyin: 'Duì! Chūnjié de shíhou, Zhōngguórén yìbān chī shénme?',
        translation: 'Right! During the Spring Festival, what do Chinese people usually eat?',
      },
      {
        character: '马克 (Mark)',
        hanzi: '北方人一般吃饺子，南方人一般吃年糕或者汤圆。',
        pinyin: 'Běifāngrén yìbān chī jiǎozi, nánfāngrén yìbān chī niángāo huòzhě tāngyuán.',
        translation: 'Northerners usually eat dumplings, while Southerners usually eat New Year rice cake or sweet glutinous rice balls.',
      },
      {
        character: '莉莉 (Lily)',
        hanzi: '老师，什么时候是元宵节？人们做什么？',
        pinyin: 'Lǎoshī, shénme shíhou shì Yuánxiāojié? Rénmen zuò shénme?',
        translation: 'Teacher, when is the Lantern Festival? What do people do?',
      },
      {
        character: '李老师 (Teacher Li)',
        hanzi: '农历正月十五是元宵节，人们吃元宵，看花灯。过了元宵节，春节也就过完了。',
        pinyin:
          'Nónglì zhēngyuè shíwǔ shì Yuánxiāojié, rénmen chī yuánxiāo, kàn huādēng. Guò le Yuánxiāojié, Chūnjié yě jiù guò wán le.',
        translation:
          'The 15th day of the first lunar month is the Lantern Festival; people eat yuanxiao and admire decorative lanterns. Once the Lantern Festival has passed, the Spring Festival celebration is complete.',
      },
      {
        character: '平田 (Hirata)',
        hanzi: '我还知道农历八月十五是中秋节，也叫“团圆节”，全家一起吃月饼，看月亮！',
        pinyin:
          'Wǒ hái zhīdào nónglì bā yuè shíwǔ shì Zhōngqiūjié, yě jiào “Tuányuánjié”, quánjiā yìqǐ chī yuèbǐng, kàn yuèliang!',
        translation:
          'I also know that the 15th day of the eighth lunar month is the Mid-Autumn Festival, also called the "Reunion Festival," when the whole family eats mooncakes and admires the moon together!',
      },
    ],
    dialogues: [
      {
        title: 'Classroom Discussion · Talking About Traditional Chinese Festivals (话题讨论)',
        context:
          'Teacher Li Yue and her students discuss the dates, foods, and activities of China’s major traditional holidays based on the Cultural Reader.',
        lines: [
          {
            character: '李老师 (Teacher Li)',
            hanzi: '同学们，中国最重要的传统节日是什么节？',
            pinyin: 'Tóngxuémen, Zhōngguó zuì zhòngyào de chuántǒng jiérì shì shénme jié?',
            translation: 'Classmates, what is the most important traditional festival in China?',
          },
          {
            character: '金志英 (Jin Zhiying)',
            hanzi: '是春节！农历正月初一是春节，全家团圆。',
            pinyin: 'Shì Chūnjié! Nónglì zhēngyuè chūyī shì Chūnjié, quánjiā tuányuán.',
            translation: 'It’s the Spring Festival! The first day of the first lunar month is Spring Festival, when the whole family reunites.',
          },
          {
            character: '李老师 (Teacher Li)',
            hanzi: '对！春节的时候，中国人一般吃什么？',
            pinyin: 'Duì! Chūnjié de shíhou, Zhōngguórén yìbān chī shénme?',
            translation: 'Right! During the Spring Festival, what do Chinese people usually eat?',
          },
          {
            character: '马克 (Mark)',
            hanzi: '北方人一般吃饺子，南方人一般吃年糕或者汤圆。',
            pinyin: 'Běifāngrén yìbān chī jiǎozi, nánfāngrén yìbān chī niángāo huòzhě tāngyuán.',
            translation: 'Northerners usually eat dumplings, while Southerners usually eat New Year rice cake or sweet glutinous rice balls.',
          },
          {
            character: '莉莉 (Lily)',
            hanzi: '老师，什么时候是元宵节？人们做什么？',
            pinyin: 'Lǎoshī, shénme shíhou shì Yuánxiāojié? Rénmen zuò shénme?',
            translation: 'Teacher, when is the Lantern Festival? What do people do?',
          },
          {
            character: '李老师 (Teacher Li)',
            hanzi: '农历正月十五是元宵节，人们吃元宵，看花灯。过了元宵节，春节也就过完了。',
            pinyin:
              'Nónglì zhēngyuè shíwǔ shì Yuánxiāojié, rénmen chī yuánxiāo, kàn huādēng. Guò le Yuánxiāojié, Chūnjié yě jiù guò wán le.',
            translation:
              'The 15th day of the first lunar month is the Lantern Festival; people eat yuanxiao and admire decorative lanterns. Once the Lantern Festival has passed, the Spring Festival celebration is complete.',
          },
          {
            character: '阿里 (Ali)',
            hanzi: '那清明节和端午节呢？',
            pinyin: 'Nà Qīngmíngjié hé Duānwǔjié ne?',
            translation: 'What about the Qingming Festival and the Dragon Boat Festival?',
          },
          {
            character: '李老师 (Teacher Li)',
            hanzi: '每年四月四日或者五日是清明节，是扫墓和春游的时候。农历五月初五是端午节，人们吃粽子，南方人有时候还要赛龙舟。',
            pinyin:
              'Měinián sì yuè sì rì huòzhě wǔ rì shì Qīngmíngjié, shì sǎomù hé chūnyóu de shíhou. Nónglì wǔ yuè chūwǔ shì Duānwǔjié, rénmen chī zòngzi, nánfāngrén yǒushíhou hái yào sài lóngzhōu.',
            translation:
              'April 4th or 5th every year is Qingming Festival, a time for sweeping tombs and taking spring outings. The 5th day of the 5th lunar month is Dragon Boat Festival, when people eat zongzi and Southerners sometimes race dragon boats.',
          },
          {
            character: '平田 (Hirata)',
            hanzi: '农历八月十五是中秋节，也叫“团圆节”，全家一起吃月饼，看月亮！',
            pinyin:
              'Nónglì bā yuè shíwǔ shì Zhōngqiūjié, yě jiào “Tuányuánjié”, quánjiā yìqǐ chī yuèbǐng, kàn yuèliang!',
            translation:
              'The 15th day of the eighth lunar month is the Mid-Autumn Festival, also called the "Reunion Festival," when the whole family eats mooncakes and admires the moon together!',
          },
        ],
      },
    ],
    readingPassage: {
      title: 'Cultural Reader Full Text · 中国的传统节日 (Traditional Chinese Festivals)',
      subtitle: 'Complete original reading passage from Mastering Chinese: Elementary 1 (文化读本1).',
      paragraphs: [
        {
          hanzi: '春节是中国最重要的传统节日，农历正月初一是春节。这一天，全家团圆，北方人一般吃饺子，南方人一般吃年糕或者汤圆。农历正月十五是元宵节，人们吃元宵，看花灯。过了元宵节，春节也就过完了。',
          pinyin:
            'Chūnjié shì Zhōngguó zuì zhòngyào de chuántǒng jiérì, nónglì zhēngyuè chūyī shì Chūnjié. Zhè yì tiān, quánjiā tuányuán, běifāngrén yìbān chī jiǎozi, nánfāngrén yìbān chī niángāo huòzhě tāngyuán. Nónglì zhēngyuè shíwǔ shì Yuánxiāojié, rénmen chī yuánxiāo, kàn huādēng. Guò le Yuánxiāojié, Chūnjié yě jiù guò wán le.',
          translation:
            'The Spring Festival is China’s most important traditional festival; the first day of the first lunar month is the Spring Festival. On this day, the whole family reunites—Northerners usually eat dumplings, while Southerners usually eat New Year rice cakes or tangyuan. The 15th day of the first lunar month is the Lantern Festival, when people eat yuanxiao and admire decorative lanterns. Once the Lantern Festival has passed, the Spring Festival celebration comes to an end.',
        },
        {
          hanzi: '每年四月四日或者五日是中国的清明节，是扫墓的时候，也是春游的时候。',
          pinyin:
            'Měinián sì yuè sì rì huòzhě wǔ rì shì Zhōngguó de Qīngmíngjié, shì sǎomù de shíhou, yě shì chūnyóu de shíhou.',
          translation:
            'Every year, April 4th or 5th is China’s Qingming Festival; it is a time for sweeping ancestral tombs, and also a time for going on spring outings.',
        },
        {
          hanzi: '农历五月初五是端午节，这一天人们都吃粽子，南方人有时候还要赛龙舟。农历八月十五是中秋节，也叫“团圆节”。那天月亮很大很圆，全家一起吃月饼，看月亮，快乐地过节。',
          pinyin:
            'Nónglì wǔ yuè chūwǔ shì Duānwǔjié, zhè yì tiān rénmen dōu chī zòngzi, nánfāngrén yǒushíhou hái yào sài lóngzhōu. Nónglì bā yuè shíwǔ shì Zhōngqiūjié, yě jiào “Tuányuánjié”. Nà tiān yuèliang hěn dà hěn yuán, quánjiā yìqǐ chī yuèbǐng, kàn yuèliang, kuàilè de guòjié.',
          translation:
            'The fifth day of the fifth lunar month is the Dragon Boat Festival; on this day everyone eats zongzi (bamboo-leaf glutinous rice dumplings), and Southerners sometimes also race dragon boats. The 15th day of the eighth lunar month is the Mid-Autumn Festival, also called the "Reunion Festival." On that day the moon is very big and round, and the whole family eats mooncakes, admires the moon, and celebrates happily together.',
        },
        {
          hanzi: '说了这么多传统节日，你也发现了吧？在中国过节，最重要的就是吃喝和团圆了。',
          pinyin:
            'Shuō le zhème duō chuántǒng jiérì, nǐ yě fāxiàn le ba? Zài Zhōngguó guòjié, zuì zhòngyào de jiùshì chīhē hé tuányuán le.',
          translation:
            'After talking about so many traditional festivals, you have noticed it too, right? When celebrating festivals in China, the most important things are sharing food and drink and family reunion.',
        },
      ],
    },
    phoneticsAndCharacters: {
      title: 'Quick Reference · The 5 Major Traditional Chinese Festivals (中国五大传统节日一览表)',
      sections: [
        {
          subtitle: '1. Winter & Spring Festivals (春节 · 元宵节 · 清明节)',
          summary:
            'From the Lunar New Year family reunion through the first full moon of the year and the arrival of spring.',
          items: [
            {
              label: '春节 (Chūnjié · Spring Festival)',
              pinyin: '农历正月初一 (1st day of the 1st Lunar Month)',
              detail:
                'China’s most important traditional holiday. Whole families reunite (全家团圆); Northerners eat dumplings (饺子) while Southerners eat New Year cake (年糕) or tangyuan (汤圆).',
              examples: '春节 · 全家团圆 · 饺子 · 年糕 · 汤圆',
              speakText: '春节是中国最重要的传统节日，农历正月初一是春节。',
            },
            {
              label: '元宵节 (Yuánxiāojié · Lantern Festival) & 清明节 (Qīngmíngjié)',
              pinyin: '农历正月十五 (1st Lunar Month 15th) & 公历四月四日或者五日 (April 4 or 5)',
              detail:
                'On Lantern Festival, people eat yuanxiao (吃元宵) and view decorative lanterns (看花灯), marking the conclusion of Spring Festival. On Qingming Festival (April 4 or 5), people sweep ancestral tombs (扫墓) and enjoy spring outings (春游).',
              examples: '元宵节 · 看花灯 · 清明节 · 扫墓 · 春游',
              speakText: '农历正月十五是元宵节，人们吃元宵，看花灯。每年四月四日或者五日是清明节。',
            },
          ],
        },
        {
          subtitle: '2. Summer & Autumn Festivals (端午节 · 中秋节)',
          summary:
            'Celebrating midsummer dragon boat races and the harvest full moon of autumn.',
          items: [
            {
              label: '端午节 (Duānwǔjié · Dragon Boat Festival)',
              pinyin: '农历五月初五 (5th day of the 5th Lunar Month)',
              detail:
                'Everyone eats zongzi (粽子, pyramid-shaped glutinous rice wrapped in bamboo leaves), and people in southern China often hold dragon boat races (赛龙舟).',
              examples: '端午节 · 农历五月初五 · 吃粽子 · 赛龙舟',
              speakText: '农历五月初五是端午节，这一天人们都吃粽子，南方人有时候还要赛龙舟。',
            },
            {
              label: '中秋节 (Zhōngqiūjié · Mid-Autumn Festival)',
              pinyin: '农历八月十五 (15th day of the 8th Lunar Month)',
              detail:
                'Also known as 团圆节 (Reunion Festival). Under the bright, full autumn moon, families gather to eat mooncakes (吃月饼) and admire the moon (看月亮).',
              examples: '中秋节 · 团圆节 · 吃月饼 · 看月亮',
              speakText: '农历八月十五是中秋节，也叫团圆节。全家一起吃月饼，看月亮。',
            },
          ],
        },
      ],
    },
    vocabularyExplanation: [
      {
        hanzi: '传统',
        pinyin: 'chuántǒng',
        english: 'traditional; tradition',
        partOfSpeech: 'Noun / Adjective',
        exampleHanzi: '春节是中国最重要的传统节日。',
        examplePinyin: 'Chūnjié shì Zhōngguó zuì zhòngyào de chuántǒng jiérì.',
        exampleTranslation: 'Spring Festival is China’s most important traditional festival.',
      },
      {
        hanzi: '节日',
        pinyin: 'jiérì',
        english: 'festival; holiday',
        partOfSpeech: 'Noun',
        exampleHanzi: '你喜欢中国的传统节日吗？',
        examplePinyin: 'Nǐ xǐhuan Zhōngguó de chuántǒng jiérì ma?',
        exampleTranslation: 'Do you like traditional Chinese festivals?',
      },
      {
        hanzi: '春节',
        pinyin: 'Chūnjié',
        english: 'Spring Festival (Chinese Lunar New Year)',
        partOfSpeech: 'Proper Noun',
        exampleHanzi: '农历正月初一是春节。',
        examplePinyin: 'Nónglì zhēngyuè chūyī shì Chūnjié.',
        exampleTranslation: 'The first day of the first lunar month is the Spring Festival.',
      },
      {
        hanzi: '农历',
        pinyin: 'nónglì',
        english: 'traditional Chinese lunar calendar',
        partOfSpeech: 'Noun',
        exampleHanzi: '中国的传统节日一般用农历。',
        examplePinyin: 'Zhōngguó de chuántǒng jiérì yìbān yòng nónglì.',
        exampleTranslation: 'Traditional Chinese festivals generally follow the lunar calendar.',
      },
      {
        hanzi: '正月',
        pinyin: 'zhēngyuè',
        english: 'first month of the lunar year',
        partOfSpeech: 'Time Noun',
        exampleHanzi: '农历正月十五是元宵节。',
        examplePinyin: 'Nónglì zhēngyuè shíwǔ shì Yuánxiāojié.',
        exampleTranslation: 'The 15th day of the first lunar month is the Lantern Festival.',
      },
      {
        hanzi: '团圆',
        pinyin: 'tuányuán',
        english: 'to reunite (as a family); family reunion',
        partOfSpeech: 'Verb / Noun',
        exampleHanzi: '春节这一天，全家团圆。',
        examplePinyin: 'Chūnjié zhè yì tiān, quánjiā tuányuán.',
        exampleTranslation: 'On Spring Festival day, the whole family reunites.',
      },
      {
        hanzi: '饺子',
        pinyin: 'jiǎozi',
        english: 'Chinese dumplings (jiaozi)',
        partOfSpeech: 'Noun',
        exampleHanzi: '北方人春节一般吃饺子。',
        examplePinyin: 'Běifāngrén Chūnjié yìbān chī jiǎozi.',
        exampleTranslation: 'Northerners usually eat dumplings during the Spring Festival.',
      },
      {
        hanzi: '年糕',
        pinyin: 'niángāo',
        english: 'New Year glutinous rice cake',
        partOfSpeech: 'Noun',
        exampleHanzi: '南方人一般吃年糕或者汤圆。',
        examplePinyin: 'Nánfāngrén yìbān chī niángāo huòzhě tāngyuán.',
        exampleTranslation: 'Southerners usually eat New Year rice cake or tangyuan.',
      },
      {
        hanzi: '元宵节',
        pinyin: 'Yuánxiāojié',
        english: 'Lantern Festival (15th day of the 1st lunar month)',
        partOfSpeech: 'Proper Noun',
        exampleHanzi: '过了元宵节，春节也就过完了。',
        examplePinyin: 'Guò le Yuánxiāojié, Chūnjié yě jiù guò wán le.',
        exampleTranslation: 'Once the Lantern Festival is over, the Spring Festival celebration ends.',
      },
      {
        hanzi: '花灯',
        pinyin: 'huādēng',
        english: 'festive decorative lantern',
        partOfSpeech: 'Noun',
        exampleHanzi: '元宵节的时候，人们吃元宵，看花灯。',
        examplePinyin: 'Yuánxiāojié de shíhou, rénmen chī yuánxiāo, kàn huādēng.',
        exampleTranslation: 'During the Lantern Festival, people eat yuanxiao and admire decorative lanterns.',
      },
      {
        hanzi: '清明节',
        pinyin: 'Qīngmíngjié',
        english: 'Qingming / Tomb-Sweeping Festival (April 4 or 5)',
        partOfSpeech: 'Proper Noun',
        exampleHanzi: '每年四月四日或者五日是清明节。',
        examplePinyin: 'Měinián sì yuè sì rì huòzhě wǔ rì shì Qīngmíngjié.',
        exampleTranslation: 'April 4th or 5th every year is the Qingming Festival.',
      },
      {
        hanzi: '扫墓',
        pinyin: 'sǎomù',
        english: 'to sweep ancestral graves; to pay respects at a tomb',
        partOfSpeech: 'Verb-Object',
        exampleHanzi: '清明节是扫墓的时候。',
        examplePinyin: 'Qīngmíngjié shì sǎomù de shíhou.',
        exampleTranslation: 'Qingming Festival is a time for sweeping ancestral tombs.',
      },
      {
        hanzi: '春游',
        pinyin: 'chūnyóu',
        english: 'spring outing; spring excursion',
        partOfSpeech: 'Verb / Noun',
        exampleHanzi: '清明节也是春游的时候。',
        examplePinyin: 'Qīngmíngjié yě shì chūnyóu de shíhou.',
        exampleTranslation: 'Qingming Festival is also a time for spring outings.',
      },
      {
        hanzi: '端午节',
        pinyin: 'Duānwǔjié',
        english: 'Dragon Boat Festival (5th day of the 5th lunar month)',
        partOfSpeech: 'Proper Noun',
        exampleHanzi: '农历五月初五是端午节。',
        examplePinyin: 'Nónglì wǔ yuè chūwǔ shì Duānwǔjié.',
        exampleTranslation: 'The fifth day of the fifth lunar month is the Dragon Boat Festival.',
      },
      {
        hanzi: '粽子',
        pinyin: 'zòngzi',
        english: 'zongzi (pyramid-shaped glutinous rice dumpling wrapped in bamboo leaves)',
        partOfSpeech: 'Noun',
        exampleHanzi: '端午节这一天人们都吃粽子。',
        examplePinyin: 'Duānwǔjié zhè yì tiān rénmen dōu chī zòngzi.',
        exampleTranslation: 'On Dragon Boat Festival day, everyone eats zongzi.',
      },
      {
        hanzi: '赛龙舟',
        pinyin: 'sài lóngzhōu',
        english: 'to race dragon boats',
        partOfSpeech: 'Verb-Object',
        exampleHanzi: '南方人有时候还要赛龙舟。',
        examplePinyin: 'Nánfāngrén yǒushíhou hái yào sài lóngzhōu.',
        exampleTranslation: 'Southerners sometimes also race dragon boats.',
      },
      {
        hanzi: '中秋节',
        pinyin: 'Zhōngqiūjié',
        english: 'Mid-Autumn Festival (15th day of the 8th lunar month)',
        partOfSpeech: 'Proper Noun',
        exampleHanzi: '农历八月十五是中秋节，也叫“团圆节”。',
        examplePinyin: 'Nónglì bā yuè shíwǔ shì Zhōngqiūjié, yě jiào “Tuányuánjié”.',
        exampleTranslation: 'The 15th day of the 8th lunar month is the Mid-Autumn Festival, also called the "Reunion Festival."',
      },
      {
        hanzi: '月饼',
        pinyin: 'yuèbǐng',
        english: 'mooncake',
        partOfSpeech: 'Noun',
        exampleHanzi: '中秋节全家一起吃月饼，看月亮。',
        examplePinyin: 'Zhōngqiūjié quánjiā yìqǐ chī yuèbǐng, kàn yuèliang.',
        exampleTranslation: 'On Mid-Autumn Festival the whole family eats mooncakes and admires the moon together.',
      },
    ],
    grammarPoint: 'Lunar Dates (农历正月/初一), Regional Contrasts & Cultural Expressions',
    structure: '农历 + Month + 初 [1–10] / [11–30] | 是……的时候，也是……的时候 | 最重要的就是……了',
    explanation:
      'Traditional Chinese festival dates use 农历 (the lunar calendar), where the first month is called 正月 (zhēngyuè) and days 1 through 10 are prefixed with 初 (chū, e.g., 正月初一, 五月初五). The reader also showcases parallel time definitions (是 A 的时候，也是 B 的时候) and emphatic cultural summaries (最重要的就是……了).',
    examples: [
      {
        hanzi: '农历正月初一是春节，农历正月十五是元宵节。',
        pinyin: 'Nónglì zhēngyuè chūyī shì Chūnjié, nónglì zhēngyuè shíwǔ shì Yuánxiāojié.',
        translation: 'The 1st day of the 1st lunar month is Spring Festival; the 15th day of the 1st lunar month is Lantern Festival.',
      },
      {
        hanzi: '清明节是扫墓的时候，也是春游的时候。',
        pinyin: 'Qīngmíngjié shì sǎomù de shíhou, yě shì chūnyóu de shíhou.',
        translation: 'Qingming Festival is a time for sweeping tombs, and also a time for spring outings.',
      },
      {
        hanzi: '在中国过节，最重要的就是吃喝和团圆了。',
        pinyin: 'Zài Zhōngguó guòjié, zuì zhòngyào de jiùshì chīhē hé tuányuán le.',
        translation: 'When celebrating festivals in China, the most important things are food, drink, and family reunion.',
      },
    ],
    grammarNotes: [
      {
        title: '1. Expressing Traditional Lunar Calendar Dates (农历、正月与“初”)',
        structure: '农历 + 正月 (1st month) / [Number] 月 + 初一 ~ 初十 (days 1–10)',
        explanation:
          'While everyday modern schedules use the solar calendar (公历, e.g., 四月四日或者五日 for Qingming), most traditional Chinese festivals follow the lunar calendar (农历 nónglì). In the lunar calendar, the first month of the year is called 正月 (zhēngyuè, with 正 read in the 1st tone zhēng), and the first ten days of any lunar month are prefixed with 初 (chū): 初一 (1st day), 初五 (5th day).',
        examples: [
          {
            hanzi: '农历正月初一是春节，农历五月初五是端午节。',
            pinyin: 'Nónglì zhēngyuè chūyī shì Chūnjié, nónglì wǔ yuè chūwǔ shì Duānwǔjié.',
            translation: 'The 1st day of the 1st lunar month is Spring Festival; the 5th day of the 5th lunar month is Dragon Boat Festival.',
          },
        ],
      },
      {
        title: '2. Parallel Time Definitions: 是 A 的时候，也是 B 的时候',
        structure: '[Festival / Period] + 是 + [Activity A] + 的时候，也是 + [Activity B] + 的时候',
        explanation:
          'This pattern defines a season or holiday by two complementary activities that take place during it, linking them smoothly with 也是 (and is also...).',
        examples: [
          {
            hanzi: '清明节是扫墓的时候，也是春游的时候。',
            pinyin: 'Qīngmíngjié shì sǎomù de shíhou, yě shì chūnyóu de shíhou.',
            translation: 'Qingming Festival is a time for sweeping tombs, and also a time for going on spring outings.',
          },
        ],
      },
      {
        title: '3. Highlighting Core Cultural Values: 最重要的就是……了',
        structure: 'Topic + 最重要的就是 + [Core Element] + 了',
        explanation:
          '最 (zuì, most) + 重要 (zhòngyào, important) + 的 forms the nominalized phrase "the most important thing." Adding 就是……了 emphasizes the essential takeaway conclusion.',
        examples: [
          {
            hanzi: '在中国过节，最重要的就是吃喝和团圆了。',
            pinyin: 'Zài Zhōngguó guòjié, zuì zhòngyào de jiùshì chīhē hé tuányuán le.',
            translation: 'When celebrating festivals in China, the most important things are sharing food/drink and family reunion.',
          },
        ],
      },
    ],
    exercises: [
      {
        question: 'Which traditional Chinese festival is celebrated according to the solar calendar (April 4th or 5th) rather than a fixed lunar date?',
        options: [
          '春节 (Spring Festival)',
          '元宵节 (Lantern Festival)',
          '清明节 (Qingming Festival)',
          '中秋节 (Mid-Autumn Festival)',
        ],
        answerIndex: 2,
        explanation:
          'Qingming Festival (清明节) falls on April 4th or 5th of the solar calendar every year (每年四月四日或者五日是中国的清明节).',
      },
      {
        question: 'During the Dragon Boat Festival (端午节, 农历五月初五), what traditional food do people eat?',
        options: [
          '饺子 (jiǎozi — dumplings)',
          '元宵 (yuánxiāo — sweet rice balls)',
          '粽子 (zòngzi — bamboo-leaf glutinous rice dumplings)',
          '月饼 (yuèbǐng — mooncakes)',
        ],
        answerIndex: 2,
        explanation:
          'On the Dragon Boat Festival (农历五月初五是端午节), people eat zongzi (吃粽子) and in southern China sometimes race dragon boats (赛龙舟).',
      },
      {
        question: 'Which festival is also known as “团圆节” (Reunion Festival), and when does it take place?',
        options: [
          '中秋节 — 农历八月十五',
          '元宵节 — 农历正月十五',
          '端午节 — 农历五月初五',
          '春节 — 农历正月初一',
        ],
        answerIndex: 0,
        explanation:
          'The Mid-Autumn Festival (中秋节) on the 15th day of the 8th lunar month (农历八月十五) is also called “团圆节” because the full moon symbolizes family reunion.',
      },
      {
        question: 'According to the Cultural Reader, what are the two most important things when celebrating traditional festivals in China?',
        promptHanzi: '在中国过节，最重要的就是________了。',
        promptPinyin: 'Zài Zhōngguó guòjié, zuì zhòngyào de jiùshì ________ le.',
        options: [
          '吃喝和团圆 (sharing food/drink and family reunion)',
          '休息和跑步 (resting and running)',
          '上课和看书 (attending class and reading books)',
          '春游和游泳 (spring outings and swimming)',
        ],
        answerIndex: 0,
        explanation:
          'The passage concludes: “在中国过节，最重要的就是吃喝和团圆了。” (When celebrating festivals in China, the most important things are eating/drinking and family reunion.)',
      },
    ],
  },
  // ===========================================================================
  // UNIT 5 (HSK 2): 第4课 一共多少钱 — How Much Is It in Total?
  // Synthesized from 4 slide decks: 第4课 他/一共多少钱（一）、（二）、（三）、（四）
  // Mastering Chinese: Elementary 2 (会通汉语 精编版·初级2)
  // ===========================================================================
  {
    id: 'lesson5',
    title: 'Lesson 4: How Much Is It in Total?',
    chineseTitle: '第4课 一共多少钱',
    unitBadge: 'Mastering Chinese · Elementary 2 (会通汉语 精编版·初级2)',
    hskLevel: 2,
    description:
      'Master shopping in Mandarin: asking unit and total prices, reading multi-digit RMB amounts, using specialized measure words for fruits, everyday items, and clothing, trying on sizes in a fitting room, and making polite requests.',
    content:
      'Unit 4 of Mastering Chinese: Elementary 2 covers bargaining and buying fruit by weight (斤), reading multi-digit RMB prices, using specialized measure words for everyday goods and clothing, trying on sizes in a fitting room, and expressing degree with 有点儿 and 很.',
    objectives: [
      'Pronounce the Mandarin neutral tone (轻声) accurately across all four preceding tones and distinguish contrastive minimal pairs (e.g., 东西 dōngxī vs. dōngxi).',
      'Recognize compound ideographic characters (会意字) formed by combining visual components (休, 明, 从, 看, 分, 林).',
      'Ask and state unit prices and total prices using 多少钱一[量], 一共多少钱, and spoken vs. written RMB units (块/毛/分 vs. 元/角/分).',
      'Use degree adverbs 有点儿 and 很 accurately, along with apparel verbs 穿/戴 and clothing sizes (大号, 中号/M号, 小号).',
      'Express polite tentative actions (试试 / 看一下), affirmative-negative questions (V不V / 有没有), and repetition with 再.',
    ],
    phoneticsAndCharacters: {
      title: 'Section 1 · Phonetics & Chinese Characters (语音和汉字)',
      sections: [
        {
          subtitle: 'The Neutral Tone (轻声) & Pitch Contours',
          summary:
            'In Mandarin, certain syllables lose their original lexical tone and are pronounced light and short (轻而短). Their actual pitch depends on the tone of the preceding syllable.',
          items: [
            {
              label: 'After 1st Tone (55 → Low-Mid 2)',
              examples: '妈妈 (māma) · 师傅 (shīfu) · 桌子 (zhuōzi) · 他呢 (tā ne)',
              detail: 'After a high-level 1st tone, the neutral tone drops to a low-mid pitch.',
            },
            {
              label: 'After 2nd Tone (35 → Mid 3)',
              examples: '孩子 (háizi) · 橘子 (júzi) · 爷爷 (yéye) · 便宜 (piányi)',
              detail: 'After a rising 2nd tone, the neutral tone settles at a comfortable mid pitch.',
            },
            {
              label: 'After 3rd Tone (214 → Mid-High 4)',
              examples: '我的 (wǒ de) · 椅子 (yǐzi) · 眼睛 (yǎnjing) · 喜欢 (xǐhuan)',
              detail: 'The 3rd tone stays low (21) and the following neutral tone rebounds to a mid-high pitch (4).',
            },
            {
              label: 'After 4th Tone (51 → Low 1)',
              examples: '这个 (zhège) · 大夫 (dàifu) · 漂亮 (piàoliang) · 裤子 (kùzi)',
              detail: 'After a falling 4th tone, the neutral tone continues to the lowest pitch level.',
            },
            {
              label: 'Four Functional Categories of Neutral Tone',
              examples:
                '① Suffixes & structural particles: 孩子 (zi), 老师们 (men), 我的 (de) · ② Modal particles: 你爸爸呢 (ne), 有孩子吗 (ma), 是儿子吧 (ba) · ③ Verb reduplication: 说说 (shuo), 学学 (xue), 想想 (xiang), 试试 (shi) · ④ Meaning-distinguishing pairs: 东西 (dōngxī, east-west) vs. 东西 (dōngxi, things/stuff); 明亮 (míngliàng, bright) vs. 漂亮 (piàoliang, pretty)',
              detail: 'In some two-syllable words, whether the second syllable is neutral or full-toned changes the word or its register.',
            },
          ],
        },
        {
          subtitle: 'Compound Ideographic Characters (用“画儿”组合出来汉字 — 会意字)',
          summary:
            'Beyond single-object pictographs, Chinese combines two or more pictorial components to express a new composite action or state.',
          items: [
            {
              label: '休 (xiū — to rest) & 明 (míng — bright)',
              examples: '休 = 亻 (person) + 木 (tree) · 明 = 日 (sun) + 月 (moon)',
              detail: 'A person leaning against a tree depicts resting (休息); the sun and moon shining together express brightness (明天, 明亮).',
            },
            {
              label: '从 (cóng — from / follow) & 林 (lín — woods)',
              examples: '从 = 人 + 人 (one person walking behind another) · 林 = 木 + 木 (two trees side by side)',
              detail: 'Doubling a component creates a collective or relational meaning.',
            },
            {
              label: '看 (kàn — to look) & 眉 (méi — eyebrow)',
              examples: '看 = 手 (hand slanted on top) + 目 (eye below) · 眉 = hairs above 目 (eye)',
              detail: 'Raising a hand above the eyes to gaze into the distance forms 看 (to look/watch).',
            },
            {
              label: '分 (fēn — to divide / minute / cent) & 多 (duō — many)',
              examples: '分 = 八 (split apart) + 刀 (knife) · 多 = 夕 + 夕 (two pieces stacked)',
              detail: 'Using a knife (刀) to separate something into two parts (八) creates 分 (to divide, minute, or 1/100 of a yuan).',
            },
          ],
        },
      ],
    },
    dialogue: [
      {
        character: '金志英 (Jīn Zhìyīng)',
        hanzi: '您好！请问西瓜多少钱？',
        pinyin: 'Nín hǎo! Qǐngwèn xīguā duōshao qián?',
        translation: 'Hello! Excuse me, how much is the watermelon?',
      },
      {
        character: '小贩 (Xiǎofàn)',
        hanzi: '一斤两块钱。',
        pinyin: 'Yì jīn liǎng kuài qián.',
        translation: 'Two kuai per jin (500 grams).',
      },
      {
        character: '金志英 (Jīn Zhìyīng)',
        hanzi: '有点儿贵。',
        pinyin: 'Yǒudiǎnr guì.',
        translation: "That's a little expensive.",
      },
      {
        character: '小贩 (Xiǎofàn)',
        hanzi: '我的西瓜大，两块一斤很便宜，别的地方都是两块五一斤。您要多少？',
        pinyin:
          'Wǒ de xīguā dà, liǎng kuài yì jīn hěn piányi, biéde dìfang dōu shì liǎng kuài wǔ yì jīn. Nín yào duōshao?',
        translation:
          'My watermelons are big; two kuai a jin is very cheap—other places are all 2.50 a jin. How much would you like?',
      },
      {
        character: '金志英 (Jīn Zhìyīng)',
        hanzi: '我要半个小的吧，苹果也来两斤。一共多少钱？',
        pinyin: 'Wǒ yào bàn gè xiǎo de ba, píngguǒ yě lái liǎng jīn. Yígòng duōshao qián?',
        translation: "I'll take half of a small one, and also get two jin of apples. How much is it in total?",
      },
      {
        character: '小贩 (Xiǎofàn)',
        hanzi: '二十四块五。',
        pinyin: 'Èrshísì kuài wǔ.',
        translation: 'Twenty-four kuai and fifty mao (24.50 RMB).',
      },
      {
        character: '金志英 (Jīn Zhìyīng)',
        hanzi: '我没有零钱。这是五十，您找我吧。',
        pinyin: 'Wǒ méiyǒu língqián. Zhè shì wǔshí, nín zhǎo wǒ ba.',
        translation: "I don't have small change. Here is fifty; please give me change.",
      },
    ],
    dialogues: [
      {
        title: 'Dialogue 1: Buying Fruit at a Fruit Stand (买水果)',
        context:
          'Jin Zhiying asks a fruit vendor about the price of watermelons and apples, compares prices, and pays with a 50-yuan bill.',
        lines: [
          {
            character: '金志英 (Jīn Zhìyīng)',
            hanzi: '您好！请问西瓜多少钱？',
            pinyin: 'Nín hǎo! Qǐngwèn xīguā duōshao qián?',
            translation: 'Hello! Excuse me, how much is the watermelon?',
          },
          {
            character: '小贩 (Xiǎofàn)',
            hanzi: '一斤两块钱。',
            pinyin: 'Yì jīn liǎng kuài qián.',
            translation: 'Two kuai per jin (500 grams).',
          },
          {
            character: '金志英 (Jīn Zhìyīng)',
            hanzi: '有点儿贵。',
            pinyin: 'Yǒudiǎnr guì.',
            translation: "That's a little expensive.",
          },
          {
            character: '小贩 (Xiǎofàn)',
            hanzi: '我的西瓜大，两块一斤很便宜，别的地方都是两块五一斤。您要多少？',
            pinyin:
              'Wǒ de xīguā dà, liǎng kuài yì jīn hěn piányi, biéde dìfang dōu shì liǎng kuài wǔ yì jīn. Nín yào duōshao?',
            translation:
              'My watermelons are big; two kuai a jin is very cheap—other places are all 2.50 a jin. How much would you like?',
          },
          {
            character: '金志英 (Jīn Zhìyīng)',
            hanzi: '我要半个小的吧，苹果也来两斤。一共多少钱？',
            pinyin: 'Wǒ yào bàn gè xiǎo de ba, píngguǒ yě lái liǎng jīn. Yígòng duōshao qián?',
            translation:
              "I'll take half of a small one, and also get two jin of apples. How much is it in total?",
          },
          {
            character: '小贩 (Xiǎofàn)',
            hanzi: '二十四块五。',
            pinyin: 'Èrshísì kuài wǔ.',
            translation: 'Twenty-four kuai and fifty mao (24.50 RMB).',
          },
          {
            character: '金志英 (Jīn Zhìyīng)',
            hanzi: '我没有零钱。这是五十，您找我吧。',
            pinyin: 'Wǒ méiyǒu língqián. Zhè shì wǔshí, nín zhǎo wǒ ba.',
            translation: "I don't have small change. Here is fifty; please give me change.",
          },
        ],
      },
      {
        title: 'Dialogue 2: Trying On Clothes at a Boutique (买衣服)',
        context:
          'Lily asks a salesclerk for the price of a blue T-shirt, checks sizes in the fitting room, and politely declines a yellow alternative.',
        lines: [
          {
            character: '莉莉 (Lìlì)',
            hanzi: '请问，T恤多少钱一件？',
            pinyin: 'Qǐngwèn, T xù duōshao qián yí jiàn?',
            translation: 'Excuse me, how much is a T-shirt?',
          },
          {
            character: '售货员 (Shòuhuòyuán)',
            hanzi: '一百二十八一件。您想买哪件？',
            pinyin: 'Yìbǎi èrshíbā yí jiàn. Nín xiǎng mǎi nǎ jiàn?',
            translation: '128 RMB per piece. Which one would you like to buy?',
          },
          {
            character: '莉莉 (Lìlì)',
            hanzi: '这件蓝色的颜色好，我想试试这件。',
            pinyin: 'Zhè jiàn lánsè de yánsè hǎo, wǒ xiǎng shìshi zhè jiàn.',
            translation: "This blue one has a nice color; I'd like to try this one on.",
          },
          {
            character: '售货员 (Shòuhuòyuán)',
            hanzi: '您穿多大号的？',
            pinyin: 'Nín chuān duō dà hào de?',
            translation: 'What size do you wear?',
          },
          {
            character: '莉莉 (Lìlì)',
            hanzi: '我一般穿M号的。',
            pinyin: 'Wǒ yìbān chuān M hào de.',
            translation: 'I usually wear size M (medium).',
          },
          {
            character: '售货员 (Shòuhuòyuán)',
            hanzi: '您试试这件吧。试衣间在那儿。（莉莉从试衣间出来。）',
            pinyin: 'Nín shìshi zhè jiàn ba. Shìyījiān zài nàr. (Lìlì cóng shìyījiān chūlái.)',
            translation:
              'Please try this one on. The fitting room is over there. (Lily comes out of the fitting room.)',
          },
          {
            character: '莉莉 (Lìlì)',
            hanzi: '有点儿大，有没有小号的？',
            pinyin: 'Yǒudiǎnr dà, yǒu méiyǒu xiǎo hào de?',
            translation: "It's a little big; do you have a size Small?",
          },
          {
            character: '售货员 (Shòuhuòyuán)',
            hanzi: '没有小号的，黄色的有，您再试试这件。',
            pinyin: 'Méiyǒu xiǎo hào de, huángsè de yǒu, nín zài shìshi zhè jiàn.',
            translation: "We don't have Small in blue, but we have it in yellow; please try this one too.",
          },
          {
            character: '莉莉 (Lìlì)',
            hanzi: '不好意思，我不喜欢黄色，我再看一下吧。',
            pinyin: 'Bù hǎoyìsi, wǒ bù xǐhuan huángsè, wǒ zài kàn yíxià ba.',
            translation: "Sorry, I don't like yellow. Let me look around a bit more.",
          },
        ],
      },
    ],
    readingPassage: {
      title: 'Reading & Integrated Expression: Lily’s Supermarket Bargains & Wardrobe (莉莉买东西)',
      paragraphs: [
        {
          hanzi:
            '今天超市一共有五种便宜的东西：卫生纸二十八元一包，笔五块五一支，酸奶三十五元一盒，苹果三块五一斤，帽子三十八元一顶。酸奶和苹果一般都有点儿贵，今天都很便宜，因为酸奶买一大盒送一小盒，苹果买一斤再送一斤。莉莉一共买了十支笔、两斤苹果（一共花了三块五）。她看见帽子，很想买。买不买呢？她想了一下，都买了，一共花了一百五十九块五。',
          pinyin:
            'Jīntiān chāoshì yígòng yǒu wǔ zhǒng piányi de dōngxi: wèishēngzhǐ èrshíbā yuán yì bāo, bǐ wǔ kuài wǔ yì zhī, suānnǎi sānshíwǔ yuán yì hé, píngguǒ sān kuài wǔ yì jīn, màozi sānshíbā yuán yì dǐng. Suānnǎi hé píngguǒ yìbān dōu yǒudiǎnr guì, jīntiān dōu hěn piányi, yīnwèi suānnǎi mǎi yí dà hé sòng yì xiǎo hé, píngguǒ mǎi yì jīn zài sòng yì jīn. Lìlì yígòng mǎi le shí zhī bǐ, liǎng jīn píngguǒ (yígòng huā le sān kuài wǔ). Tā kànjiàn màozi, hěn xiǎng mǎi. Mǎi bu mǎi ne? Tā xiǎng le yíxià, dōu mǎi le, yígòng huā le yìbǎi wǔshíjiǔ kuài wǔ.',
          translation:
            'Today the supermarket has five kinds of discounted items in total: toilet paper at 28 yuan a pack, pens at 5.50 kuai each, yogurt at 35 yuan a box, apples at 3.50 kuai a jin, and hats at 38 yuan each. Yogurt and apples are usually a bit expensive, but today they are both very cheap because buying one large box of yogurt gets you one small box free, and buying one jin of apples gets you another jin free. Lily bought ten pens and two jin of apples (spending 3.50 kuai on the apples). When she saw the hats, she really wanted to buy them. Should she buy them or not? She thought for a moment, bought everything, and spent 159.50 kuai in total.',
        },
        {
          hanzi:
            '莉莉有八件T恤，十二条裙子，十条裤子，六个包，五顶帽子，十双鞋……今天她还说自己的衣服有点儿少，还想再买一条裙子。我觉得莉莉的衣服很多，一共几十件了。可是莉莉说：“女人一般都想再买一件衣服。”你觉得她这样对不对？',
          pinyin:
            'Lìlì yǒu bā jiàn T xù, shí’èr tiáo qúnzi, shí tiáo kùzi, liù gè bāo, wǔ dǐng màozi, shí shuāng xié... Jīntiān tā hái shuō zìjǐ de yīfu yǒudiǎnr shǎo, hái xiǎng zài mǎi yì tiáo qúnzi. Wǒ juéde Lìlì de yīfu hěn duō, yígòng jǐ shí jiàn le. Kěshì Lìlì shuō: “Nǚrén yìbān dōu xiǎng zài mǎi yí jiàn yīfu.” Nǐ juéde tā zhèyàng duì bu duì?',
          translation:
            'Lily has eight T-shirts, twelve skirts, ten pairs of pants, six bags, five hats, and ten pairs of shoes... Today she still says she has a bit too few clothes and wants to buy one more skirt. I think Lily has a lot of clothes—dozens of pieces in total. Yet Lily says: "Women generally always want to buy one more piece of clothing." Do you think she is right or not?',
        },
      ],
    },
    vocabularyExplanation: [
      {
        hanzi: '请问',
        pinyin: 'qǐngwèn',
        english: 'excuse me, may I ask (polite opener)',
        exampleHanzi: '您好！请问西瓜多少钱？',
        examplePinyin: 'Nín hǎo! Qǐngwèn xīguā duōshao qián?',
        exampleTranslation: 'Hello! Excuse me, how much is the watermelon?',
      },
      {
        hanzi: '西瓜',
        pinyin: 'xīguā',
        english: 'watermelon',
        exampleHanzi: '夏天我们喜欢吃西瓜。',
        examplePinyin: 'Xiàtiān wǒmen xǐhuan chī xīguā.',
        exampleTranslation: 'In summer we like to eat watermelon.',
      },
      {
        hanzi: '多少钱',
        pinyin: 'duōshao qián',
        english: 'how much money / what price',
        exampleHanzi: '请问，T恤多少钱一件？',
        examplePinyin: 'Qǐngwèn, T xù duōshao qián yí jiàn?',
        exampleTranslation: 'Excuse me, how much is a T-shirt?',
      },
      {
        hanzi: '斤',
        pinyin: 'jīn',
        english: 'jin (Chinese weight unit = 500 grams)',
        exampleHanzi: '苹果三块五一斤。',
        examplePinyin: 'Píngguǒ sān kuài wǔ yì jīn.',
        exampleTranslation: 'Apples are 3.50 kuai per jin (500g).',
      },
      {
        hanzi: '块',
        pinyin: 'kuài',
        english: 'kuai (spoken unit for RMB yuan); piece / chunk',
        exampleHanzi: '一斤两块钱。',
        examplePinyin: 'Yì jīn liǎng kuài qián.',
        exampleTranslation: 'Two kuai per jin.',
      },
      {
        hanzi: '有点儿',
        pinyin: 'yǒudiǎnr',
        english: 'a little / somewhat (used before undesirable adjectives)',
        exampleHanzi: '这件衣服有点儿大，有没有小号的？',
        examplePinyin: 'Zhè jiàn yīfu yǒudiǎnr dà, yǒu méiyǒu xiǎo hào de?',
        exampleTranslation: 'This piece of clothing is a bit big; do you have a small size?',
      },
      {
        hanzi: '贵',
        pinyin: 'guì',
        english: 'expensive',
        exampleHanzi: '这个包有点儿贵。',
        examplePinyin: 'Zhège bāo yǒudiǎnr guì.',
        exampleTranslation: 'This bag is a little expensive.',
      },
      {
        hanzi: '便宜',
        pinyin: 'piányi',
        english: 'cheap / inexpensive',
        exampleHanzi: '两块一斤很便宜。',
        examplePinyin: 'Liǎng kuài yì jīn hěn piányi.',
        exampleTranslation: 'Two kuai per jin is very cheap.',
      },
      {
        hanzi: '别的',
        pinyin: 'biéde',
        english: 'other / another',
        exampleHanzi: '别的地方都是两块五一斤。',
        examplePinyin: 'Biéde dìfang dōu shì liǎng kuài wǔ yì jīn.',
        exampleTranslation: 'Other places are all 2.50 kuai per jin.',
      },
      {
        hanzi: '地方',
        pinyin: 'dìfang',
        english: 'place / location',
        exampleHanzi: '这个地方很大，也很漂亮。',
        examplePinyin: 'Zhège dìfang hěn dà, yě hěn piàoliang.',
        exampleTranslation: 'This place is very big and also very pretty.',
      },
      {
        hanzi: '要',
        pinyin: 'yào',
        english: 'to want / would like (to buy or order)',
        exampleHanzi: '我要半个小的西瓜。',
        examplePinyin: 'Wǒ yào bàn gè xiǎo de xīguā.',
        exampleTranslation: 'I would like half of a small watermelon.',
      },
      {
        hanzi: '苹果',
        pinyin: 'píngguǒ',
        english: 'apple',
        exampleHanzi: '苹果也来两斤。',
        examplePinyin: 'Píngguǒ yě lái liǎng jīn.',
        exampleTranslation: 'Also give me two jin of apples.',
      },
      {
        hanzi: '来',
        pinyin: 'lái',
        english: 'to bring / to get (used when ordering food or buying goods)',
        exampleHanzi: '再来两斤橘子吧。',
        examplePinyin: 'Zài lái liǎng jīn júzi ba.',
        exampleTranslation: "Let's also get two more jin of tangerines.",
      },
      {
        hanzi: '一共',
        pinyin: 'yígòng',
        english: 'altogether / in total',
        exampleHanzi: '一共二十四块五。',
        examplePinyin: 'Yígòng èrshísì kuài wǔ.',
        exampleTranslation: 'It is twenty-four kuai fifty in total.',
      },
      {
        hanzi: '零钱',
        pinyin: 'língqián',
        english: 'small change / coins and small bills',
        exampleHanzi: '不好意思，我没有零钱。',
        examplePinyin: 'Bù hǎoyìsi, wǒ méiyǒu língqián.',
        exampleTranslation: "Sorry, I don't have small change.",
      },
      {
        hanzi: '找',
        pinyin: 'zhǎo',
        english: 'to give change; to look for',
        exampleHanzi: '这是五十，您找我吧。',
        examplePinyin: 'Zhè shì wǔshí, nín zhǎo wǒ ba.',
        exampleTranslation: 'Here is fifty; please give me change.',
      },
      {
        hanzi: '件',
        pinyin: 'jiàn',
        english: 'measure word for tops, shirts, coats, and matters',
        exampleHanzi: '我想买这件T恤。',
        examplePinyin: 'Wǒ xiǎng mǎi zhè jiàn T xù.',
        exampleTranslation: 'I would like to buy this T-shirt.',
      },
      {
        hanzi: '颜色',
        pinyin: 'yánsè',
        english: 'color',
        exampleHanzi: '这件蓝色的颜色很好看。',
        examplePinyin: 'Zhè jiàn lánsè de yánsè hěn hǎokàn.',
        exampleTranslation: 'The color of this blue one is very nice.',
      },
      {
        hanzi: '蓝色',
        pinyin: 'lánsè',
        english: 'blue (color)',
        exampleHanzi: '我喜欢蓝色的衣服。',
        examplePinyin: 'Wǒ xǐhuan lánsè de yīfu.',
        exampleTranslation: 'I like blue clothes.',
      },
      {
        hanzi: '黄色',
        pinyin: 'huángsè',
        english: 'yellow (color)',
        exampleHanzi: '我不喜欢黄色，我喜欢白色。',
        examplePinyin: 'Wǒ bù xǐhuan huángsè, wǒ xǐhuan báisè.',
        exampleTranslation: "I don't like yellow; I like white.",
      },
      {
        hanzi: '试',
        pinyin: 'shì',
        english: 'to try / to try on',
        exampleHanzi: '我想试试这件衣服。',
        examplePinyin: 'Wǒ xiǎng shìshi zhè jiàn yīfu.',
        exampleTranslation: 'I would like to try on this piece of clothing.',
      },
      {
        hanzi: '穿',
        pinyin: 'chuān',
        english: 'to wear / to put on (clothes, pants, skirts, shoes)',
        exampleHanzi: '您穿多大号的？',
        examplePinyin: 'Nín chuān duō dà hào de?',
        exampleTranslation: 'What size do you wear?',
      },
      {
        hanzi: '号',
        pinyin: 'hào',
        english: 'size (of clothing/shoes); number / date',
        exampleHanzi: '我一般穿中号（M号）的。',
        examplePinyin: 'Wǒ yìbān chuān zhōnghào (M hào) de.',
        exampleTranslation: 'I usually wear size Medium.',
      },
      {
        hanzi: '一般',
        pinyin: 'yìbān',
        english: 'generally / usually',
        exampleHanzi: '女人一般都想再买一件衣服。',
        examplePinyin: 'Nǚrén yìbān dōu xiǎng zài mǎi yí jiàn yīfu.',
        exampleTranslation: 'Women generally always want to buy one more piece of clothing.',
      },
      {
        hanzi: '试衣间',
        pinyin: 'shìyījiān',
        english: 'fitting room',
        exampleHanzi: '试衣间在那儿，您试试吧。',
        examplePinyin: 'Shìyījiān zài nàr, nín shìshi ba.',
        exampleTranslation: 'The fitting room is over there; please try it on.',
      },
      {
        hanzi: '从',
        pinyin: 'cóng',
        english: 'from (a place or time)',
        exampleHanzi: '莉莉从试衣间出来。',
        examplePinyin: 'Lìlì cóng shìyījiān chūlái.',
        exampleTranslation: 'Lily comes out from the fitting room.',
      },
      {
        hanzi: '再',
        pinyin: 'zài',
        english: 'again / one more / further (for future or uncompleted actions)',
        exampleHanzi: '您再试试这件吧。',
        examplePinyin: 'Nín zài shìshi zhè jiàn ba.',
        exampleTranslation: 'Please try this one on as well.',
      },
      {
        hanzi: '不好意思',
        pinyin: 'bù hǎoyìsi',
        english: 'excuse me / sorry (for a minor inconvenience or polite refusal)',
        exampleHanzi: '不好意思，我再看一下吧。',
        examplePinyin: 'Bù hǎoyìsi, wǒ zài kàn yíxià ba.',
        exampleTranslation: 'Sorry, let me look around a bit more.',
      },
      {
        hanzi: '条',
        pinyin: 'tiáo',
        english: 'measure word for long/slender items (pants, skirts, scarves, fish)',
        exampleHanzi: '莉莉有十二条裙子，十条裤子。',
        examplePinyin: 'Lìlì yǒu shí’èr tiáo qúnzi, shí tiáo kùzi.',
        exampleTranslation: 'Lily has twelve skirts and ten pairs of pants.',
      },
      {
        hanzi: '顶',
        pinyin: 'dǐng',
        english: 'measure word for hats and caps',
        exampleHanzi: '这顶帽子三十八元。',
        examplePinyin: 'Zhè dǐng màozi sānshíbā yuán.',
        exampleTranslation: 'This hat is 38 yuan.',
      },
      {
        hanzi: '双',
        pinyin: 'shuāng',
        english: 'pair (measure word for shoes, socks, chopsticks)',
        exampleHanzi: '她买了两双鞋。',
        examplePinyin: 'Tā mǎi le liǎng shuāng xié.',
        exampleTranslation: 'She bought two pairs of shoes.',
      },
      {
        hanzi: '送',
        pinyin: 'sòng',
        english: 'to give free of charge / to gift; to see off',
        exampleHanzi: '苹果买一斤再送一斤。',
        examplePinyin: 'Píngguǒ mǎi yì jīn zài sòng yì jīn.',
        exampleTranslation: 'Buy one jin of apples and get another jin free.',
      },
      {
        hanzi: '花',
        pinyin: 'huā',
        english: 'to spend (money or time); flower',
        exampleHanzi: '她一共花了一百五十九块五。',
        examplePinyin: 'Tā yígòng huā le yìbǎi wǔshíjiǔ kuài wǔ.',
        exampleTranslation: 'She spent 159.50 kuai in total.',
      },
    ],
    grammarPoint: 'RMB Currency Units, Asking Prices (多少钱 / 一共), Degree Adverbs (有点儿 vs. 很) & Apparel Measure Words',
    structure: '[Item] + 多少钱一[量]？ | 一共 + 数量 | 有点儿 / 很 + Adj | 穿 / 戴 + 数量 + 服饰',
    explanation:
      'Unit 4 introduces spoken vs. written RMB units (块/毛/分 vs. 元/角/分), unit and total price inquiries, the contrast between 有点儿 (undesirable slight degree) and 很, specialized classifiers for clothing (件, 条, 双, 顶), and tentative verb reduplication (试试, 看一下).',
    examples: [
      {
        hanzi: '我要半个小的吧，苹果也来两斤。一共多少钱？',
        pinyin: 'Wǒ yào bàn gè xiǎo de ba, píngguǒ yě lái liǎng jīn. Yígòng duōshao qián?',
        translation: "I'll take half of a small one, and also get two jin of apples. How much is it in total?",
      },
      {
        hanzi: '有点儿大，有没有小号的？',
        pinyin: 'Yǒudiǎnr dà, yǒu méiyǒu xiǎo hào de?',
        translation: "It's a little big; do you have a size Small?",
      },
    ],
    grammarNotes: [
      {
        title: 'RMB Currency Units & Reading Multi-Digit Numbers/Prices',
        structure: 'Written: 元 (yuán) · 角 (jiǎo) · 分 (fēn)  |  Spoken: 块 (kuài) · 毛 (máo) · 分 (fēn) (+ 钱)',
        explanation:
          'In price tags and formal writing, RMB uses 元, 角 (1/10 yuan), and 分 (1/100 yuan). In everyday speech, people use 块, 毛, and 分. When a price has a subunit right after a main unit, the final unit word can be omitted (e.g., ¥24.50 → 二十四块五 [毛钱]). However, if a zero placeholder (零) intervenes, the final unit cannot be dropped (e.g., ¥2.05 → 两块零五分). For large numbers (百 hundred, 千 thousand, 万 ten-thousand): ① Read 2 as 两 before 千/万 (and usually 百): 两千四百九十八 (2,498). ② Pronounce interior zeros once as 零: 二百零八 (208), 一千零六 (1,006). ③ In spoken shorthand, the final trailing unit can drop when there is no zero: 一百二 (120), 一千六 (1,600).',
        examples: [
          {
            hanzi: '二十四块五（毛钱） / 两块零五分',
            pinyin: 'èrshísì kuài wǔ (máo qián) / liǎng kuài líng wǔ fēn',
            translation: '¥24.50 (trailing 毛 omitted in speech) / ¥2.05 (with 零, final 分 must be kept)',
          },
          {
            hanzi: '两万三千六百九十五 / 一千零六',
            pinyin: 'liǎng wàn sānqiān liùbǎi jiǔshíwǔ / yìqiān líng liù',
            translation: '23,695 (Chinese groups large numbers by 万 = 10,000) / 1,006',
          },
        ],
      },
      {
        title: 'Asking Unit Prices vs. Stating Totals with 一共 (yígòng)',
        structure: '[Item] + 多少钱 (+ 一 + Measure Word)？  |  一共 + Number + Measure Word (+ Noun)',
        explanation:
          'To ask the price per unit, say “[Item] 多少钱一[量]？” (e.g., T恤多少钱一件？) or reply with “一斤两块钱 / 两块钱一斤”. To sum up a total quantity or cost, place 一共 before the number-measure phrase: 一共二十四块五. Note: When the total is a single-digit number (1–9), a measure word or currency unit is mandatory—say 一共五块钱 or 一共五个, never *一共五.',
        examples: [
          {
            hanzi: '请问，T恤多少钱一件？——一百二十八一件。',
            pinyin: 'Qǐngwèn, T xù duōshao qián yí jiàn? — Yìbǎi èrshíbā yí jiàn.',
            translation: 'Excuse me, how much is a T-shirt? — 128 RMB per piece.',
          },
          {
            hanzi: '我要半个小的西瓜，苹果也来两斤。一共多少钱？',
            pinyin: 'Wǒ yào bàn gè xiǎo de xīguā, píngguǒ yě lái liǎng jīn. Yígòng duōshao qián?',
            translation: "I'll take half of a small watermelon, and two jin of apples. How much is it in total?",
          },
        ],
      },
      {
        title: 'Degree Adverbs: 有点儿 (yǒudiǎnr) vs. 很 (hěn)',
        structure: '有点儿 + Adj / V[心理]  vs.  很 + Adj / V[心理]',
        explanation:
          'Both 有点儿 and 很 precede adjectives or psychological verbs (such as 想, 喜欢, 高兴), but they differ in nuance: 有点儿 ("a little / somewhat") typically modifies adjectives representing an undesirable or non-ideal state (有点儿贵 a bit too expensive, 有点儿大 a bit too big, 有点儿不高兴 a bit unhappy). 很 ("very") expresses a neutral or high degree for any adjective or mental verb (很便宜, 很想买).',
        examples: [
          {
            hanzi: '这件衣服有点儿大，那件很合适。',
            pinyin: 'Zhè jiàn yīfu yǒudiǎnr dà, nà jiàn hěn héshì.',
            translation: 'This piece of clothing is a little too big; that one fits very well.',
          },
          {
            hanzi: '酸奶和苹果一般都有点儿贵，今天都很便宜。',
            pinyin: 'Suānnǎi hé píngguǒ yìbān dōu yǒudiǎnr guì, jīntiān dōu hěn piányi.',
            translation: 'Yogurt and apples are usually a bit expensive, but today both are very cheap.',
          },
        ],
      },
      {
        title: 'Specialized Measure Words & Wearing Verbs: 穿 (chuān) vs. 戴 (dài)',
        structure: '穿 + 件 (tops) / 条 (pants/skirts) / 双 (shoes/socks)  |  戴 + 顶 (hats) / 条 (scarves) / 副 (gloves/glasses)',
        explanation:
          'Mandarin pairs nouns with specific classifiers by shape, container, or garment type: ① By shape: 张 (flat surfaces: 桌子, 床, 纸), 本 (bound books: 书, 词典), 支 (slender rods: 笔). ② By portion/container: 片 (flat slice: 面包), 块儿 (chunk: 蛋糕), 瓶 (bottle: 水), 杯 (cup: 咖啡, 茶), 盒 (box: 酸奶), 包 (pack: 卫生纸). ③ For clothing and accessories: use 穿 (to wear on the torso/legs/feet) with 件 (T恤, 大衣), 条 (裤子, 裙子), 双 (鞋, 袜子); use 戴 (to wear on the head, neck, or hands) with 顶 (帽子), 条 (围巾), 副 (手套, 眼镜).',
        examples: [
          {
            hanzi: '莉莉穿一件蓝色的T恤、一条白裙子和一双黑鞋，还戴一顶黄帽子。',
            pinyin: 'Lìlì chuān yí jiàn lánsè de T xù, yì tiáo bái qúnzi hé yì shuāng hēi xié, hái dài yì dǐng huáng màozi.',
            translation: 'Lily wears a blue T-shirt, a white skirt, and a pair of black shoes, and also wears a yellow hat.',
          },
        ],
      },
      {
        title: 'Tentative Reduplication (VV / V一下), Affirmative-Negative Questions & 再 (zài)',
        structure: '想 + VV / V一下  |  V/Adj + 不/没 + V/Adj？  |  再 + V (+ 数量)',
        explanation:
          '① Reduplicating an action verb (试试, 看看, 想想) or adding 一下 (看一下, 想一下) makes the action brief, casual, and polite. ② Affirmative-negative questions juxtapose the affirmative and negative forms of the verb or adjective: 买不买？ (Will you buy it or not?), 对不对？ (Is it right?), 有没有小号的？ (Do you have a small size?). ③ The adverb 再 precedes a verb to express repeating an action or adding more to an existing quantity (再试试 try another one, 再买一条裙子 buy one more skirt).',
        examples: [
          {
            hanzi: '这件蓝色的颜色好，我想试试这件。',
            pinyin: 'Zhè jiàn lánsè de yánsè hǎo, wǒ xiǎng shìshi zhè jiàn.',
            translation: "This blue one has a nice color; I'd like to try this one on.",
          },
          {
            hanzi: '有点儿大，有没有小号的？——没有，您再试试这件。',
            pinyin: 'Yǒudiǎnr dà, yǒu méiyǒu xiǎo hào de? — Méiyǒu, nín zài shìshi zhè jiàn.',
            translation: "It's a bit big; do you have a size Small? — No, please try this other one.",
          },
        ],
      },
    ],
    exercises: [
      {
        question: 'In Dialogue 1, how much does Jin Zhiying pay in total for half a small watermelon and two jin of apples?',
        options: [
          '两块钱 (2.00 RMB)',
          '两块五 (2.50 RMB)',
          '二十四块五 (24.50 RMB)',
          '五十块 (50.00 RMB)',
        ],
        answerIndex: 2,
        explanation:
          'When Jin Zhiying asks “一共多少钱？”, the fruit vendor replies “二十四块五” (24.50 RMB), and she hands him a 50-yuan bill for change.',
      },
      {
        question: 'Which sentence uses the degree adverb 有点儿 (yǒudiǎnr) correctly?',
        options: [
          '这件T恤有点儿大，有没有小号的？',
          '这件T恤大有点儿，有没有小号的？',
          '两块一斤有点儿很便宜。',
          '我有点儿穿M号的衣服。',
        ],
        answerIndex: 0,
        explanation:
          '有点儿 is placed directly before an adjective (usually expressing a slight undesirable quality, such as 有点儿大 "a little too big" or 有点儿贵 "a little too expensive").',
      },
      {
        question: 'Choose the correct verb and measure word pair to complete: “她冬天喜欢________一________红帽子。”',
        promptHanzi: '她冬天喜欢________一________红帽子。',
        promptPinyin: 'Tā dōngtiān xǐhuan ________ yì ________ hóng màozi.',
        options: [
          '戴 …… 顶 (dài ... dǐng)',
          '穿 …… 件 (chuān ... jiàn)',
          '穿 …… 条 (chuān ... tiáo)',
          '戴 …… 双 (dài ... shuāng)',
        ],
        answerIndex: 0,
        explanation:
          'Hats and accessories worn on the head take the verb 戴 (dài) and the measure word 顶 (dǐng): 戴一顶帽子.',
      },
      {
        question: 'How is the price ¥2.05 read aloud in spoken Mandarin?',
        options: [
          '两块五 (liǎng kuài wǔ)',
          '两块零五分 (liǎng kuài líng wǔ fēn)',
          '二块零五 (èr kuài líng wǔ)',
          '两十零五分 (liǎng shí líng wǔ fēn)',
        ],
        answerIndex: 1,
        explanation:
          'Because there is a zero in the 角/毛 place, 零 must be pronounced and the final unit 分 cannot be omitted: 两块零五分 (whereas 两块五 means ¥2.50).',
      },
      {
        question: 'In the Reading Passage, why does Lily buy ten pens, two jin of apples, and a hat at the supermarket?',
        options: [
          'Because the supermarket is running promotions (such as buy-one-jin-get-one-jin-free on apples).',
          'Because she has no clothes or shoes at home.',
          'Because her teacher asked her to buy twenty packs of toilet paper.',
          'Because yellow hats are free on Sundays.',
        ],
        answerIndex: 0,
        explanation:
          'The supermarket has five discounted items on promotion (苹果买一斤再送一斤, 酸奶买一大盒送一小盒), so Lily stocks up and spends 159.50 RMB in total.',
      },
    ],
  },

  // ===========================================================================
  // UNIT 6 (HSK 2): 第5课 你去那儿干什么 — What Are You Going There to Do?
  // Synthesized from 4 slide decks: 第5课 你去那儿干什么（一）、（二）、（三）、（四）
  // Mastering Chinese: Elementary 2 (会通汉语 精编版·初级2)
  // ===========================================================================
  {
    id: 'lesson6',
    title: 'Lesson 5: What Are You Going There to Do?',
    chineseTitle: '第5课 你去那儿干什么',
    unitBadge: 'Mastering Chinese · Elementary 2 (会通汉语 精编版·初级2)',
    hskLevel: 2,
    description:
      'Describe ongoing actions, future plans, and completed past events: phone conversations, planning a birthday celebration, practicing Tai Chi, picking up friends at the airport, and distinguishing action measure words (次, 遍, 趟).',
    content:
      'Unit 5 of Mastering Chinese: Elementary 2 covers phone etiquette, ongoing actions with 正在/在, future plans with 打算, purpose serial verbs with 来/去, completed actions with 了, past negation with 没, and the action measure words 次, 遍, and 趟.',
    objectives: [
      'Master Mandarin Erhua retroflexion (儿化音 -r) and classify Chinese characters by structural configuration (独体字 vs. 上下/左右/包围合体字).',
      'Express actions currently in progress using 正在 / 在 + V (+ N) and temporal clauses with ……的时候.',
      'State future plans with 打算 + V and purpose of movement with serial verb constructions 来/去 (+ Place) + V.',
      'Narrate completed actions with V + 了 (+ 数量 + N), new situations with sentence-final 了, and negate past vs. habitual actions using 没 vs. 不.',
      'Distinguish the three action measure words 次 (occurrence), 遍 (complete start-to-finish process), and 趟 (round-trip journey).',
    ],
    phoneticsAndCharacters: {
      title: 'Section 1 · Phonetics & Chinese Characters (语音和汉字)',
      sections: [
        {
          subtitle: 'Retroflex Final er & Erhua Suffixation (儿化音)',
          summary:
            'The retroflex vowel er appears both as a standalone syllable (儿 ér, 耳 ěr, 二 èr) and as a retroflex suffix (-r) fused onto the final of the preceding syllable into a single phonetic syllable.',
          items: [
            {
              label: 'Standalone Retroflex Syllable er',
              examples: '儿子 (érzi) · 耳朵 (ěrduo) · 二十 (èrshí) · 二百 (èrbǎi)',
              detail: 'Pronounce the vowel while curling the tip of the tongue upward toward the hard palate without touching it.',
            },
            {
              label: 'Common Everyday Erhua Words',
              examples:
                '小孩儿 (xiǎoháir) · 哪儿 (nǎr) · 这儿 (zhèr) · 事儿 (shìr) · 玩儿 (wánr) · 没空儿 (méikòngr) · 画儿 (huàr)',
              detail: 'In Pinyin, Erhua is written by adding a single letter "r" to the end of the base syllable (never as a separate "er").',
            },
            {
              label: 'Quantity, Time & Lifestyle Erhua Expressions',
              examples:
                '有点儿 (yǒudiǎnr) · 一点儿 (yìdiǎnr) · 一块儿 (yíkuàir, together) · 一会儿 (yíhuìr, a moment) · 饭馆儿 (fànguǎnr) · 口味儿 (kǒuwèir) · 照片儿 (zhàopiānr)',
              detail: 'Erhua often adds a natural, colloquial warmth or distinguishes nouns from verbs/adjectives (e.g., 画 huà to draw vs. 画儿 huàr painting/picture).',
            },
          ],
        },
        {
          subtitle: 'Chinese Character Structural Configurations (汉字的结构)',
          summary:
            'Every Chinese character fits into a balanced square frame, either as a single-component character (独体字) or a multi-component compound character (合体字).',
          items: [
            {
              label: 'Single-Component Characters (独体字)',
              examples: '人 · 女 · 三 · 大 · 中 · 生 · 小 · 水',
              detail: 'Formed as a single inseparable graphic unit; many also serve as building blocks inside compound characters.',
            },
            {
              label: 'Top-Bottom Structure (上下结构)',
              examples: '早 · 多 · 家 · 笔 · 公 · 贵 · 学 · 男 · 岁',
              detail: 'Components stack vertically within the square frame.',
            },
            {
              label: 'Left-Right Structure (左右结构)',
              examples: '朋 · 语 · 姐 · 都 · 很 · 请 · 好 · 新 · 汉 · 师',
              detail: 'The most frequent structural pattern in Chinese, often pairing a semantic radical on the left with a phonetic component on the right.',
            },
            {
              label: 'Enclosure Structure (包围结构) & Look-Alike Contrasts',
              examples:
                'Enclosure: 国 (full) · 同 / 问 (three-sided) · 起 / 这 (bottom-left) · 床 / 老 / 友 (top-left)  |  Contrast pairs: 朋 vs. 明 · 周 vs. 同 · 大 vs. 太 · 庆 vs. 床 · 这 vs. 还',
              detail: 'Pay close attention to the enclosing radical (囗, 门, 辶, 广) and small distinguishing strokes.',
            },
          ],
        },
      ],
    },
    dialogue: [
      {
        character: '马克 (Mǎkè)',
        hanzi: '喂，杰希，是我，马克。',
        pinyin: 'Wèi, Jiéxī, shì wǒ, Mǎkè.',
        translation: 'Hello, Jessie, it’s me, Mark.',
      },
      {
        character: '杰希 (Jiéxī)',
        hanzi: '马克啊，我正在等你的电话。',
        pinyin: 'Mǎkè a, wǒ zhèngzài děng nǐ de diànhuà.',
        translation: 'Oh, Mark! I am waiting for your call right now.',
      },
      {
        character: '马克 (Mǎkè)',
        hanzi: '不好意思，刚才你给我打电话的时候，我正在洗澡。有什么事儿吗？',
        pinyin: 'Bù hǎoyìsi, gāngcái nǐ gěi wǒ dǎ diànhuà de shíhou, wǒ zhèngzài xǐzǎo. Yǒu shénme shìr ma?',
        translation: 'Sorry, just now when you called me, I was taking a shower. Is something up?',
      },
      {
        character: '杰希 (Jiéxī)',
        hanzi: '下周六是莉莉的生日，我们打算去饭店吃饭，一起给她过生日，你去吗？',
        pinyin:
          'Xià zhōuliù shì Lìlì de shēngrì, wǒmen dǎsuàn qù fàndiàn chīfàn, yìqǐ gěi tā guò shēngrì, nǐ qù ma?',
        translation:
          'Next Saturday is Lily’s birthday. We plan to go to a restaurant for a meal and celebrate her birthday together—are you going?',
      },
      {
        character: '马克 (Mǎkè)',
        hanzi: '当然去。还有谁啊？',
        pinyin: 'Dāngrán qù. Hái yǒu shéi a?',
        translation: 'Of course I’m going. Who else is coming?',
      },
      {
        character: '杰希 (Jiéxī)',
        hanzi: '平田、朱迪、金志英，他们都已经知道了，还有阿里，我还没问他。',
        pinyin: 'Píngtián, Zhūdí, Jīn Zhìyīng, tāmen dōu yǐjīng zhīdào le, hái yǒu Ālǐ, wǒ hái méi wèn tā.',
        translation: 'Hirata, Judy, and Jin Zhiying all already know; there’s also Ali—I haven’t asked him yet.',
      },
      {
        character: '马克 (Mǎkè)',
        hanzi: '没事儿，明天下午我和阿里去看电影，我告诉他。',
        pinyin: 'Méi shìr, míngtiān xiàwǔ wǒ hé Ālǐ qù kàn diànyǐng, wǒ gàosu tā.',
        translation: 'No problem—tomorrow afternoon Ali and I are going to watch a movie, so I’ll tell him.',
      },
      {
        character: '杰希 (Jiéxī)',
        hanzi: '好的，下周六见！',
        pinyin: 'Hǎo de, xià zhōuliù jiàn!',
        translation: 'Great, see you next Saturday!',
      },
    ],
    dialogues: [
      {
        title: 'Dialogue 1: Planning Lily’s Birthday Over the Phone (打电话约过生日)',
        context:
          'Mark returns Jessie’s phone call after taking a shower. Jessie invites him to Lily’s birthday dinner next Saturday.',
        lines: [
          {
            character: '马克 (Mǎkè)',
            hanzi: '喂，杰希，是我，马克。',
            pinyin: 'Wèi, Jiéxī, shì wǒ, Mǎkè.',
            translation: 'Hello, Jessie, it’s me, Mark.',
          },
          {
            character: '杰希 (Jiéxī)',
            hanzi: '马克啊，我正在等你的电话。',
            pinyin: 'Mǎkè a, wǒ zhèngzài děng nǐ de diànhuà.',
            translation: 'Oh, Mark! I am waiting for your call right now.',
          },
          {
            character: '马克 (Mǎkè)',
            hanzi: '不好意思，刚才你给我打电话的时候，我正在洗澡。有什么事儿吗？',
            pinyin:
              'Bù hǎoyìsi, gāngcái nǐ gěi wǒ dǎ diànhuà de shíhou, wǒ zhèngzài xǐzǎo. Yǒu shénme shìr ma?',
            translation: 'Sorry, just now when you called me, I was taking a shower. Is something up?',
          },
          {
            character: '杰希 (Jiéxī)',
            hanzi: '下周六是莉莉的生日，我们打算去饭店吃饭，一起给她过生日，你去吗？',
            pinyin:
              'Xià zhōuliù shì Lìlì de shēngrì, wǒmen dǎsuàn qù fàndiàn chīfàn, yìqǐ gěi tā guò shēngrì, nǐ qù ma?',
            translation:
              'Next Saturday is Lily’s birthday. We plan to go to a restaurant for a meal and celebrate her birthday together—are you going?',
          },
          {
            character: '马克 (Mǎkè)',
            hanzi: '当然去。还有谁啊？',
            pinyin: 'Dāngrán qù. Hái yǒu shéi a?',
            translation: 'Of course I’m going. Who else is coming?',
          },
          {
            character: '杰希 (Jiéxī)',
            hanzi: '平田、朱迪、金志英，他们都已经知道了，还有阿里，我还没问他。',
            pinyin:
              'Píngtián, Zhūdí, Jīn Zhìyīng, tāmen dōu yǐjīng zhīdào le, hái yǒu Ālǐ, wǒ hái méi wèn tā.',
            translation:
              'Hirata, Judy, and Jin Zhiying all already know; there’s also Ali—I haven’t asked him yet.',
          },
          {
            character: '马克 (Mǎkè)',
            hanzi: '没事儿，明天下午我和阿里去看电影，我告诉他。',
            pinyin: 'Méi shìr, míngtiān xiàwǔ wǒ hé Ālǐ qù kàn diànyǐng, wǒ gàosu tā.',
            translation: 'No problem—tomorrow afternoon Ali and I are going to watch a movie, so I’ll tell him.',
          },
          {
            character: '杰希 (Jiéxī)',
            hanzi: '好的，下周六见！',
            pinyin: 'Hǎo de, xià zhōuliù jiàn!',
            translation: 'Great, see you next Saturday!',
          },
        ],
      },
      {
        title: 'Dialogue 2: Practicing Tai Chi & Picking Up a Friend at the Airport (学太极拳与去机场接朋友)',
        context:
          'Jessie and Mark catch up on what they did yesterday: Mark practiced Tai Chi with Ali, while Jessie went to the airport to pick up a visiting friend.',
        lines: [
          {
            character: '杰希 (Jiéxī)',
            hanzi: '昨天你去打球了吗？我有事儿，没去。',
            pinyin: 'Zuótiān nǐ qù dǎ qiú le ma? Wǒ yǒu shìr, méi qù.',
            translation: 'Did you go play ball yesterday? I had something to do, so I didn’t go.',
          },
          {
            character: '马克 (Mǎkè)',
            hanzi: '我也没去，我和阿里去学太极拳了。',
            pinyin: 'Wǒ yě méi qù, wǒ hé Ālǐ qù xué tàijíquán le.',
            translation: 'I didn’t go either; Ali and I went to learn Tai Chi.',
          },
          {
            character: '杰希 (Jiéxī)',
            hanzi: '太极拳是什么？',
            pinyin: 'Tàijíquán shì shénme?',
            translation: 'What is Tai Chi?',
          },
          {
            character: '马克 (Mǎkè)',
            hanzi: '来，我打一遍，你看看。（马克打了一遍太极拳。）',
            pinyin: 'Lái, wǒ dǎ yí biàn, nǐ kànkan. (Mǎkè dǎ le yí biàn tàijíquán.)',
            translation: 'Come, I’ll perform the routine once from start to finish—take a look. (Mark performs Tai Chi once.)',
          },
          {
            character: '杰希 (Jiéxī)',
            hanzi: '啊，很帅啊！我也想学。',
            pinyin: 'A, hěn shuài a! Wǒ yě xiǎng xué.',
            translation: 'Oh, that’s really cool! I want to learn too.',
          },
          {
            character: '马克 (Mǎkè)',
            hanzi: '没问题，我们学了两次，下次一起去！你呢？昨天干什么了？',
            pinyin: 'Méi wèntí, wǒmen xué le liǎng cì, xià cì yìqǐ qù! Nǐ ne? Zuótiān gàn shénme le?',
            translation:
              'No problem! We’ve had two sessions so far—next time let’s go together! What about you? What did you do yesterday?',
          },
          {
            character: '杰希 (Jiéxī)',
            hanzi: '我去机场接朋友了，他放假来看我，我们玩儿了一天。',
            pinyin: 'Wǒ qù jīchǎng jiē péngyou le, tā fàngjià lái kàn wǒ, wǒmen wánr le yì tiān.',
            translation:
              'I went to the airport to pick up a friend. He is on vacation and came to visit me, so we hung out for a whole day.',
          },
          {
            character: '马克 (Mǎkè)',
            hanzi: '玩儿什么了？',
            pinyin: 'Wánr shénme le?',
            translation: 'What did you do for fun?',
          },
          {
            character: '杰希 (Jiéxī)',
            hanzi: '我们去食堂吃了饺子，还去看了电影，对，还去了一趟商店。',
            pinyin: 'Wǒmen qù shítáng chī le jiǎozi, hái qù kàn le diànyǐng, duì, hái qù le yí tàng shāngdiàn.',
            translation:
              'We went to the dining hall to eat dumplings, also went to watch a movie, and oh right—we also made a trip to the store.',
          },
          {
            character: '马克 (Mǎkè)',
            hanzi: '买什么好东西了？',
            pinyin: 'Mǎi shénme hǎo dōngxi le?',
            translation: 'What good stuff did you buy?',
          },
          {
            character: '杰希 (Jiéxī)',
            hanzi: '我买了三件衣服，他给他父母买了一些中国的茶。',
            pinyin: 'Wǒ mǎi le sān jiàn yīfu, tā gěi tā fùmǔ mǎi le yìxiē Zhōngguó de chá.',
            translation: 'I bought three pieces of clothing, and he bought some Chinese tea for his parents.',
          },
          {
            character: '马克 (Mǎkè)',
            hanzi: '很开心吧？',
            pinyin: 'Hěn kāixīn ba?',
            translation: 'You must have been very happy, right?',
          },
          {
            character: '杰希 (Jiéxī)',
            hanzi: '非常开心！',
            pinyin: 'Fēicháng kāixīn!',
            translation: 'Extremely happy!',
          },
        ],
      },
    ],
    readingPassage: {
      title: 'Reading & Integrated Expression: Lily’s Birthday Surprise (我的生日)',
      paragraphs: [
        {
          hanzi:
            '今天是我的生日，中午，同学们来给我过生日，阿里没来。他姐姐来中国看他，他去接姐姐了。我们去了饭店，吃了很多好吃的中国菜。下午我们去了超市，买了一些好吃的、好喝的东西，大家一起来我家玩儿。',
          pinyin:
            'Jīntiān shì wǒ de shēngrì, zhōngwǔ, tóngxuémen lái gěi wǒ guò shēngrì, Ālǐ méi lái. Tā jiějie lái Zhōngguó kàn tā, tā qù jiē jiějie le. Wǒmen qù le fàndiàn, chī le hěn duō hǎochī de Zhōngguó cài. Xiàwǔ wǒmen qù le chāoshì, mǎi le yìxiē hǎochī de, hǎohē de dōngxi, dàjiā yìqǐ lái wǒ jiā wánr.',
          translation:
            'Today is my birthday. At noon, my classmates came to celebrate my birthday with me, though Ali didn’t come. His older sister came to China to visit him, so he went to pick her up. We went to a restaurant and ate lots of delicious Chinese dishes. In the afternoon we went to the supermarket, bought some tasty food and drinks, and everyone came to my home to hang out together.',
        },
        {
          hanzi:
            '晚上八点，一个同学给我打电话，他说：“你们还没吃生日蛋糕吧？开门！”啊！阿里也来了！他买了一个蛋糕，祝我生日快乐。这个生日我太开心了！谢谢我的同学们！',
          pinyin:
            'Wǎnshang bā diǎn, yí gè tóngxué gěi wǒ dǎ diànhuà, tā shuō: “Nǐmen hái méi chī shēngrì dàngāo ba? Kāimén!” A! Ālǐ yě lái le! Tā mǎi le yí gè dàngāo, zhù wǒ shēngrì kuàilè. Zhège shēngrì wǒ tài kāixīn le! Xièxie wǒ de tóngxuémen!',
          translation:
            'At eight o’clock in the evening, a classmate called me and said: "You haven’t eaten birthday cake yet, right? Open the door!" Ah! Ali came too! He bought a cake and wished me a happy birthday. I am so happy on this birthday! Thank you to my classmates!',
        },
      ],
    },
    vocabularyExplanation: [
      {
        hanzi: '喂',
        pinyin: 'wèi',
        english: 'hello (interjection used when answering the phone)',
        exampleHanzi: '喂，杰希，是我，马克。',
        examplePinyin: 'Wèi, Jiéxī, shì wǒ, Mǎkè.',
        exampleTranslation: 'Hello, Jessie, it’s me, Mark.',
      },
      {
        hanzi: '正在',
        pinyin: 'zhèngzài',
        english: 'right in the middle of / currently (doing an action)',
        exampleHanzi: '我正在等你的电话。',
        examplePinyin: 'Wǒ zhèngzài děng nǐ de diànhuà.',
        exampleTranslation: 'I am right now waiting for your phone call.',
      },
      {
        hanzi: '等',
        pinyin: 'děng',
        english: 'to wait (for)',
        exampleHanzi: '请等一下，他马上来。',
        examplePinyin: 'Qǐng děng yíxià, tā mǎshàng lái.',
        exampleTranslation: 'Please wait a moment; he is coming right away.',
      },
      {
        hanzi: '刚才',
        pinyin: 'gāngcái',
        english: 'just now (a short while ago)',
        exampleHanzi: '刚才你给我打电话的时候，我正在洗澡。',
        examplePinyin: 'Gāngcái nǐ gěi wǒ dǎ diànhuà de shíhou, wǒ zhèngzài xǐzǎo.',
        exampleTranslation: 'Just now when you called me, I was taking a shower.',
      },
      {
        hanzi: '打电话',
        pinyin: 'dǎ diànhuà',
        english: 'to make a phone call',
        exampleHanzi: '晚上八点，一个同学给我打电话。',
        examplePinyin: 'Wǎnshang bā diǎn, yí gè tóngxué gěi wǒ dǎ diànhuà.',
        exampleTranslation: 'At eight in the evening, a classmate called me.',
      },
      {
        hanzi: '的时候',
        pinyin: 'de shíhou',
        english: 'when / at the time of...',
        exampleHanzi: '吃饭的时候，我们一起聊天儿。',
        examplePinyin: 'Chīfàn de shíhou, wǒmen yìqǐ liáotiānr.',
        exampleTranslation: 'While eating, we chat together.',
      },
      {
        hanzi: '洗澡',
        pinyin: 'xǐzǎo',
        english: 'to take a bath or shower',
        exampleHanzi: '他每天晚上十点洗澡。',
        examplePinyin: 'Tā měitiān wǎnshang shí diǎn xǐzǎo.',
        exampleTranslation: 'He takes a shower at ten every night.',
      },
      {
        hanzi: '事儿',
        pinyin: 'shìr',
        english: 'matter / business / thing to do (with Erhua)',
        exampleHanzi: '有什么事儿吗？——没事儿。',
        examplePinyin: 'Yǒu shénme shìr ma? — Méi shìr.',
        exampleTranslation: 'Is something up? — Nothing much / No problem.',
      },
      {
        hanzi: '打算',
        pinyin: 'dǎsuàn',
        english: 'to plan / to intend',
        exampleHanzi: '我们打算去饭店吃饭。',
        examplePinyin: 'Wǒmen dǎsuàn qù fàndiàn chīfàn.',
        exampleTranslation: 'We plan to go to a restaurant to eat.',
      },
      {
        hanzi: '饭店',
        pinyin: 'fàndiàn',
        english: 'restaurant / hotel',
        exampleHanzi: '这家饭店的中国菜很好吃。',
        examplePinyin: 'Zhè jiā fàndiàn de Zhōngguó cài hěn hǎochī.',
        exampleTranslation: 'The Chinese food at this restaurant is delicious.',
      },
      {
        hanzi: '过',
        pinyin: 'guò',
        english: 'to celebrate (a birthday or festival); to spend (time)',
        exampleHanzi: '我们一起给莉莉过生日。',
        examplePinyin: 'Wǒmen yìqǐ gěi Lìlì guò shēngrì.',
        exampleTranslation: 'We celebrate Lily’s birthday together.',
      },
      {
        hanzi: '当然',
        pinyin: 'dāngrán',
        english: 'of course / certainly',
        exampleHanzi: '你去吗？——当然去！',
        examplePinyin: 'Nǐ qù ma? — Dāngrán qù!',
        exampleTranslation: 'Are you going? — Of course I’m going!',
      },
      {
        hanzi: '已经',
        pinyin: 'yǐjīng',
        english: 'already',
        exampleHanzi: '他们都已经知道了。',
        examplePinyin: 'Tāmen dōu yǐjīng zhīdào le.',
        exampleTranslation: 'They all already know.',
      },
      {
        hanzi: '知道',
        pinyin: 'zhīdào',
        english: 'to know / to be aware of',
        exampleHanzi: '你知道他的电话号码吗？',
        examplePinyin: 'Nǐ zhīdào tā de diànhuà hàomǎ ma?',
        exampleTranslation: 'Do you know his phone number?',
      },
      {
        hanzi: '告诉',
        pinyin: 'gàosu',
        english: 'to tell / to inform',
        exampleHanzi: '明天我和阿里去看电影，我告诉他。',
        examplePinyin: 'Míngtiān wǒ hé Ālǐ qù kàn diànyǐng, wǒ gàosu tā.',
        exampleTranslation: 'Tomorrow Ali and I are going to watch a movie; I will tell him.',
      },
      {
        hanzi: '太极拳',
        pinyin: 'tàijíquán',
        english: 'Tai Chi (traditional Chinese martial art)',
        exampleHanzi: '我和阿里去学太极拳了。',
        examplePinyin: 'Wǒ hé Ālǐ qù xué tàijíquán le.',
        exampleTranslation: 'Ali and I went to learn Tai Chi.',
      },
      {
        hanzi: '遍',
        pinyin: 'biàn',
        english: 'time / once through (action measure word for a complete start-to-finish process)',
        exampleHanzi: '来，我打一遍太极拳，你看看。',
        examplePinyin: 'Lái, wǒ dǎ yí biàn tàijíquán, nǐ kànkan.',
        exampleTranslation: 'Come, I’ll perform the Tai Chi routine once through—take a look.',
      },
      {
        hanzi: '帅',
        pinyin: 'shuài',
        english: 'handsome / cool / dashing',
        exampleHanzi: '你打太极拳很帅啊！',
        examplePinyin: 'Nǐ dǎ tàijíquán hěn shuài a!',
        exampleTranslation: 'You look so cool doing Tai Chi!',
      },
      {
        hanzi: '次',
        pinyin: 'cì',
        english: 'time / occurrence (action measure word for frequency)',
        exampleHanzi: '我们学了两次，下次一起去！',
        examplePinyin: 'Wǒmen xué le liǎng cì, xià cì yìqǐ qù!',
        exampleTranslation: 'We have learned twice; let’s go together next time!',
      },
      {
        hanzi: '干',
        pinyin: 'gàn',
        english: 'to do (colloquial equivalent of 做)',
        exampleHanzi: '你昨天干什么了？',
        examplePinyin: 'Nǐ zuótiān gàn shénme le?',
        exampleTranslation: 'What did you do yesterday?',
      },
      {
        hanzi: '机场',
        pinyin: 'jīchǎng',
        english: 'airport',
        exampleHanzi: '我去机场接朋友了。',
        examplePinyin: 'Wǒ qù jīchǎng jiē péngyou le.',
        exampleTranslation: 'I went to the airport to pick up a friend.',
      },
      {
        hanzi: '接',
        pinyin: 'jiē',
        english: 'to pick up / meet someone; to answer (a phone call)',
        exampleHanzi: '他姐姐来中国看他，他去接姐姐了。',
        examplePinyin: 'Tā jiějie lái Zhōngguó kàn tā, tā qù jiē jiějie le.',
        exampleTranslation: 'His older sister came to China to see him, so he went to pick her up.',
      },
      {
        hanzi: '放假',
        pinyin: 'fàngjià',
        english: 'to have a holiday / be on vacation',
        exampleHanzi: '他放假来看我，我们玩儿了一天。',
        examplePinyin: 'Tā fàngjià lái kàn wǒ, wǒmen wánr le yì tiān.',
        exampleTranslation: 'He was on vacation and came to visit me; we hung out for a whole day.',
      },
      {
        hanzi: '趟',
        pinyin: 'tàng',
        english: 'trip (action measure word for a round-trip journey)',
        exampleHanzi: '我们还去了一趟商店。',
        examplePinyin: 'Wǒmen hái qù le yí tàng shāngdiàn.',
        exampleTranslation: 'We also made a trip to the store.',
      },
      {
        hanzi: '父母',
        pinyin: 'fùmǔ',
        english: 'parents (father and mother)',
        exampleHanzi: '他给他父母买了一些中国的茶。',
        examplePinyin: 'Tā gěi tā fùmǔ mǎi le yìxiē Zhōngguó de chá.',
        exampleTranslation: 'He bought some Chinese tea for his parents.',
      },
      {
        hanzi: '开心',
        pinyin: 'kāixīn',
        english: 'happy / joyful',
        exampleHanzi: '这个生日我太开心了！',
        examplePinyin: 'Zhège shēngrì wǒ tài kāixīn le!',
        exampleTranslation: 'I am so happy on this birthday!',
      },
      {
        hanzi: '非常',
        pinyin: 'fēicháng',
        english: 'extremely / very much',
        exampleHanzi: '昨天我们玩儿得非常开心！',
        examplePinyin: 'Zuótiān wǒmen wánr de fēicháng kāixīn!',
        exampleTranslation: 'Yesterday we had an extremely happy time!',
      },
    ],
    grammarPoint: 'Ongoing Actions (正在), Future Plans (打算 / 去+Place+V), Completed Actions (了 vs. 没) & Action Classifiers (次/遍/趟)',
    structure: '正在 / 在 + V | 打算 + V | 来/去 + Place + V | V + 了 + 数量 (次/遍/趟) | 没 + V',
    explanation:
      'Unit 5 contrasts actions in progress (正在 + V), future intentions (打算 + V and purpose serial verbs 来/去 + Place + V), and completed actions (V + 了 vs. negative 没 + V), along with the three action measure words 次, 遍, and 趟.',
    examples: [
      {
        hanzi: '刚才你给我打电话的时候，我正在洗澡。',
        pinyin: 'Gāngcái nǐ gěi wǒ dǎ diànhuà de shíhou, wǒ zhèngzài xǐzǎo.',
        translation: 'Just now when you called me, I was taking a shower.',
      },
      {
        hanzi: '我们去食堂吃了饺子，还去了一趟商店。',
        pinyin: 'Wǒmen qù shítáng chī le jiǎozi, hái qù le yí tàng shāngdiàn.',
        translation: 'We went to the dining hall to eat dumplings, and also made a trip to the store.',
      },
    ],
    grammarNotes: [
      {
        title: 'Ongoing Action: S + 正在 / 在 + V (+ N) & Temporal ……的时候',
        structure: 'Subject + 正在 / 在 + Verb (+ Object)  |  [Clause / Time] + 的时候',
        explanation:
          'To express that an action is in progress at a specific moment (present or past), place 正在 (or 在) before the verb. 正在 emphasizes the exact moment an action is happening (often paired with a time clause ending in ……的时候 "when..."), whereas 在 can also describe an activity sustained over a broader period (e.g., 我一天都在学习).',
        examples: [
          {
            hanzi: '刚才你给我打电话的时候，我正在洗澡。',
            pinyin: 'Gāngcái nǐ gěi wǒ dǎ diànhuà de shíhou, wǒ zhèngzài xǐzǎo.',
            translation: 'Just now when you called me, I was taking a shower.',
          },
          {
            hanzi: '马克，我正在等你的电话。',
            pinyin: 'Mǎkè, wǒ zhèngzài děng nǐ de diànhuà.',
            translation: 'Mark, I am waiting for your phone call right now.',
          },
        ],
      },
      {
        title: 'Future Plans with 打算 (dǎsuàn) & Purpose Serial Verbs: 来/去 (+ Place) + V',
        structure: 'Subject + 打算 + [Time] + Verb (+ Object)  |  来 / 去 (+ Place) + Verb (+ Object)',
        explanation:
          'Use 打算 ("to plan/intend to") before a verb phrase to state a future plan. When describing going or coming somewhere in order to do something, Mandarin chains the motion verb (来 or 去 + destination) directly before the purpose action verb without any preposition: 去饭店吃饭 (go to a restaurant to eat), 去银行取钱 (go to the bank to withdraw money), 去图书馆借书 (go to the library to borrow books), 来中国看他 (come to China to visit him).',
        examples: [
          {
            hanzi: '下周六我们打算去饭店吃饭，一起给她过生日。',
            pinyin: 'Xià zhōuliù wǒmen dǎsuàn qù fàndiàn chīfàn, yìqǐ gěi tā guò shēngrì.',
            translation: 'Next Saturday we plan to go to a restaurant to eat and celebrate her birthday together.',
          },
          {
            hanzi: '我去机场接朋友了，他放假来看我。',
            pinyin: 'Wǒ qù jīchǎng jiē péngyou le, tā fàngjià lái kàn wǒ.',
            translation: 'I went to the airport to pick up a friend; he is on vacation and came to visit me.',
          },
        ],
      },
      {
        title: 'Change of State ([句] + 了), 已经……了, and Completed Action (V + 了)',
        structure: '[Sentence] + 了 (New State)  |  已经 + V + 了  |  Subject + V + 了 (+ 数量 + Object)',
        explanation:
          'Mandarin uses 了 in two key positions: ① Sentence-final 了 marks a new situation, change of state, or newly realized fact (今天这件衣服降价了 "Today this clothing dropped in price"; 他们都已经知道了 "They all already know"). ② Verb-suffix 了 (placed right after the verb, before a quantified object) marks the completion of a specific action: 我买了三件衣服 (I bought three pieces of clothing), 我们去食堂吃了饺子 (We went to the dining hall and ate dumplings).',
        examples: [
          {
            hanzi: '平田、朱迪、金志英，他们都已经知道了。',
            pinyin: 'Píngtián, Zhūdí, Jīn Zhìyīng, tāmen dōu yǐjīng zhīdào le.',
            translation: 'Hirata, Judy, and Jin Zhiying all already know.',
          },
          {
            hanzi: '我买了三件衣服，他给他父母买了一些中国的茶。',
            pinyin: 'Wǒ mǎi le sān jiàn yīfu, tā gěi tā fùmǔ mǎi le yìxiē Zhōngguó de chá.',
            translation: 'I bought three pieces of clothing, and he bought some Chinese tea for his parents.',
          },
        ],
      },
      {
        title: 'Negating Past vs. Habitual/Future Actions: 没 (méi) vs. 不 (bù)',
        structure: '没 + Verb (Past/Uncompleted — drop 了!)  vs.  不 + Verb / Adj (Habitual, Future, or Mental State)',
        explanation:
          'To state that an action did NOT happen in the past (or has not happened yet with 还没), use 没(有) + Verb and remove 了 and specific quantities (e.g., 昨天我没去商店, never *我没去一趟商店了). Use 不 to negate present/future intentions (明天我不去吃饭了), habitual preferences (我不喜欢喝酸奶), or adjectives (今天苹果不贵).',
        examples: [
          {
            hanzi: '昨天你去打球了吗？——我有事儿，没去。',
            pinyin: 'Zuótiān nǐ qù dǎ qiú le ma? — Wǒ yǒu shìr, méi qù.',
            translation: 'Did you go play ball yesterday? — I had something to do, so I didn’t go.',
          },
          {
            hanzi: '还有阿里，我还没问他。',
            pinyin: 'Hái yǒu Ālǐ, wǒ hái méi wèn tā.',
            translation: 'There is also Ali; I haven’t asked him yet.',
          },
        ],
      },
      {
        title: 'Action Measure Words: 次 (cì) vs. 遍 (biàn) vs. 趟 (tàng)',
        structure: 'Verb + 了 + Number + 次 / 遍 / 趟 (+ Noun)',
        explanation:
          'When counting how many times an action takes place, place the number + action measure word after V + 了: ① 次 (cì) counts simple occurrences or sessions (我们学了两次 "We learned twice"). ② 遍 (biàn) emphasizes completing the entire process from beginning to end (我打一遍太极拳 "I perform the whole Tai Chi routine once through"; 这本书我看了三遍 "I read this book through three times"). ③ 趟 (tàng) counts a round-trip journey to a destination (去了一趟商店 "made a trip to the store"; 去了一趟机场 "made a trip to the airport").',
        examples: [
          {
            hanzi: '来，我打一遍，你看看。我们学了两次，下次一起去！',
            pinyin: 'Lái, wǒ dǎ yí biàn, nǐ kànkan. Wǒmen xué le liǎng cì, xià cì yìqǐ qù!',
            translation: 'Come, I’ll perform it once through, take a look. We’ve had two sessions—next time let’s go together!',
          },
          {
            hanzi: '我们去食堂吃了饺子，还去了一趟商店。',
            pinyin: 'Wǒmen qù shítáng chī le jiǎozi, hái qù le yí tàng shāngdiàn.',
            translation: 'We went to the dining hall to eat dumplings, and also made a trip to the store.',
          },
        ],
      },
    ],
    exercises: [
      {
        question: 'In Dialogue 1, why didn’t Mark answer when Jessie first called him?',
        options: [
          'He was taking a shower (正在洗澡).',
          'He was at the airport picking up a friend (去机场接朋友).',
          'He was practicing Tai Chi with Ali (学太极拳).',
          'He was buying a birthday cake at the supermarket (买生日蛋糕).',
        ],
        answerIndex: 0,
        explanation:
          'Mark explains: “不好意思，刚才你给我打电话的时候，我正在洗澡。” (Sorry, just now when you called me, I was taking a shower.)',
      },
      {
        question: 'Choose the best action measure word to complete: “这套太极拳我从头到尾打了一________，昨天还去了一________机场。”',
        promptHanzi: '这套太极拳我打了一________，昨天还去了一________机场。',
        promptPinyin: 'Zhè tào tàijíquán wǒ dǎ le yí ________, zuótiān hái qù le yí ________ jīchǎng.',
        options: [
          '遍 …… 趟 (biàn ... tàng)',
          '趟 …… 遍 (tàng ... biàn)',
          '件 …… 条 (jiàn ... tiáo)',
          '斤 …… 双 (jīn ... shuāng)',
        ],
        answerIndex: 0,
        explanation:
          '遍 (biàn) measures an action performed completely from start to finish (打了一遍太极拳), while 趟 (tàng) measures a round-trip journey to a place (去了一趟机场).',
      },
      {
        question: 'Which sentence correctly negates the past action “我昨天去商店了”?',
        options: [
          '我昨天没去商店。',
          '我昨天不去了商店。',
          '我昨天没去商店了。',
          '我昨天不去一趟商店了。',
        ],
        answerIndex: 0,
        explanation:
          'Past actions are negated with 没(有) + Verb, and the completion particle 了 must be dropped: 我昨天没去商店。',
      },
      {
        question: 'In the Reading Passage, why didn’t Ali join Lily’s birthday lunch at noon, and what did he do at 8:00 PM?',
        options: [
          'He went to pick up his older sister who came to China to visit him, and at 8:00 PM he surprised Lily at her door with a birthday cake.',
          'He forgot her birthday completely and stayed at the library all night.',
          'He had to work at the dining hall and sent a text message the next morning.',
          'He went to watch a movie with Mark and bought three shirts.',
        ],
        answerIndex: 0,
        explanation:
          'At noon Ali went to pick up his sister (他姐姐来中国看他，他去接姐姐了), and at 8:00 PM he arrived at Lily’s home with a birthday cake (他买了一个蛋糕，祝我生日快乐).',
      },
    ],
  },

  // ===========================================================================
  // UNIT 7 (HSK 2): 第6课 再点一个素的吧 — Let's Order Another Vegetarian Dish
  // Synthesized from 4 slide decks: 第6课 再点一个素的吧（一）、（二）、（三）、（四）
  // Mastering Chinese: Elementary 2 (会通汉语 精编版·初级2)
  // ===========================================================================
  {
    id: 'lesson7',
    title: "Lesson 6: Let's Order Another Vegetarian Dish",
    chineseTitle: '第6课 再点一个素的吧',
    unitBadge: 'Mastering Chinese · Elementary 2 (会通汉语 精编版·初级2)',
    hskLevel: 2,
    description:
      'Order dishes and staple foods at a Chinese restaurant: discuss flavors (spicy, sweet-and-sour, vegetarian vs. meat), state dietary restrictions, use nominalized “的” phrases, and compare dishes with 比, 没有, and 最.',
    content:
      'Unit 6 of Mastering Chinese: Elementary 2 covers ordering Chinese dishes and staple foods, describing flavors, stating dietary restrictions with 别 + V, using nominalized “的” phrases, acquired skill 会 + V, softened negation 不太, and comparisons with 比, 没有, and 最.',
    objectives: [
      'Recite classic five-character Tang and Song poems (李白《静夜思》, 邵雍《山村咏怀》) with natural rhythm and tone.',
      'Identify semantic radicals in Chinese characters (亻, 饣, 口, 氵, 讠, 忄) and connect them to meaning categories (food, speech, water, emotion).',
      'Order dishes, staples (面条儿, 饺子 by 两), and drinks while specifying dietary restrictions with 别 + V (别放香菜).',
      'Use nominalized “的”-phrases (素的, 辣的, 不吃的), acquired skill 会 + V, and softened negation 不太 + Adj/V.',
      'Compare items accurately using A 比 B + Adj, B 没有 A + Adj, and the superlative 最 + Adj/V.',
    ],
    phoneticsAndCharacters: {
      title: 'Section 1 · Classical Poetry Recitation & Semantic Radicals (古诗朗读与汉字的部首)',
      sections: [
        {
          subtitle: 'Classical Chinese Poetry Recitation (古诗朗读)',
          summary:
            'Reciting classical five-character quatrains (五言绝句) trains tonal contrast, pause rhythm (2-3 cadence), and cultural literacy.',
          items: [
            {
              label: '《静夜思》 Thoughts on a Quiet Night — 李白 (Lǐ Bái, Tang Dynasty)',
              examples:
                '床前明月光 (Chuáng qián míngyuè guāng)，疑是地上霜 (yí shì dìshang shuāng)。举头望明月 (Jǔtóu wàng míngyuè)，低头思故乡 (dītóu sī gùxiāng)。',
              detail: 'Bright moonlight before my bed / I suspect it is frost on the ground. / Raising my head, I gaze at the bright moon; / Lowering my head, I think of my homeland.',
            },
            {
              label: '《山村咏怀》 Ode to a Mountain Village — 邵雍 (Shào Yōng, Song Dynasty)',
              examples:
                '一去二三里 (Yí qù èr sān lǐ)，烟村四五家 (yāncūn sì wǔ jiā)。亭台六七座 (Tíngtái liù qī zuò)，八九十枝花 (bā jiǔ shí zhī huā)。',
              detail: 'Weaves all ten numerals (一 through 十) into a serene landscape painting of a misty village, pavilions, and blossoms.',
            },
          ],
        },
        {
          subtitle: 'Semantic Radicals of Chinese Characters (汉字的部首)',
          summary:
            'Most compound characters contain a semantic radical (部首) that signals the broad category of meaning. Recognizing radicals dramatically accelerates vocabulary acquisition.',
          items: [
            {
              label: '食字旁 (饣) — Food, Meals & Hunger',
              examples: '饭 (fàn, meal/rice) · 饮 (yǐn, drink) · 饿 (è, hungry) · 饺 (jiǎo, dumpling) · 馆 (guǎn, restaurant)',
              detail: 'Derived from 食 (to eat/food); characters with 饣 almost always relate to food, dining, or nourishment.',
            },
            {
              label: '口字旁 (口) & 言字旁 (讠) — Mouth, Taste & Speech',
              examples:
                '口: 吃 (chī, eat) · 叫 (jiào, call) · 味 (wèi, flavor) · 喝 (hē, drink)  |  讠: 说 (shuō, speak) · 请 (qǐng, please/invite) · 话 (huà, speech/words) · 语 (yǔ, language)',
              detail: '口 relates to actions of the mouth and taste; 讠 (from 言) relates to language and communication.',
            },
            {
              label: '三点水 (氵) — Water, Liquids & Soup',
              examples: '洗 (xǐ, wash) · 泳 (yǒng, swim) · 汤 (tāng, soup) · 汉 (hàn) · 汽 (qì, steam)',
              detail: 'Derived from 水 (water); appears in characters involving liquids, washing, or beverages.',
            },
            {
              label: '单立人 (亻) & 竖心旁 (忄) — People & Mental/Emotional States',
              examples:
                '亻 (from 人): 他 (he) · 体 (body) · 健 (healthy) · 休 (rest)  |  忄 (from 心): 快 (fast/happy) · 忙 (busy) · 懂 (understand)',
              detail: '亻 points to human beings and bodily states; 忄 points to feelings, temperament, and cognition.',
            },
          ],
        },
      ],
    },
    dialogue: [
      {
        character: '服务员 (Fúwùyuán)',
        hanzi: '几位要点什么菜？',
        pinyin: 'Jǐ wèi yào diǎn shénme cài?',
        translation: 'What dishes would you all like to order?',
      },
      {
        character: '阿里 (Ālǐ)',
        hanzi: '请问什么菜点的人多？',
        pinyin: 'Qǐngwèn shénme cài diǎn de rén duō?',
        translation: 'Excuse me, which dishes do people order the most?',
      },
      {
        character: '服务员 (Fúwùyuán)',
        hanzi: '西红柿炒鸡蛋和鱼香肉丝，留学生一般都喜欢吃。',
        pinyin: 'Xīhóngshì chǎo jīdàn hé yúxiāng ròusī, liúxuéshēng yìbān dōu xǐhuan chī.',
        translation:
          'Scrambled eggs with tomatoes and Yu-Shiang shredded pork—international students generally love eating them.',
      },
      {
        character: '马克 (Mǎkè)',
        hanzi: '西红柿炒鸡蛋我知道，太好吃了，我喜欢。鱼香肉丝是什么味道的？',
        pinyin: 'Xīhóngshì chǎo jīdàn wǒ zhīdào, tài hǎochī le, wǒ xǐhuan. Yúxiāng ròusī shì shénme wèidào de?',
        translation:
          'I know scrambled eggs with tomatoes—it’s so delicious, I like it. What flavor is Yu-Shiang shredded pork?',
      },
      {
        character: '服务员 (Fúwùyuán)',
        hanzi: '辣的，里面有肉，很好吃。',
        pinyin: 'Là de, lǐmiàn yǒu ròu, hěn hǎochī.',
        translation: 'It’s spicy, has meat inside, and is very delicious.',
      },
      {
        character: '阿里 (Ālǐ)',
        hanzi: '我爱吃辣的，也爱吃肉，咱们尝尝，好不好？',
        pinyin: 'Wǒ ài chī là de, yě ài chī ròu, zánmen chángchang, hǎo bu hǎo?',
        translation: 'I love eating spicy food and I love meat too—let’s try it, okay?',
      },
      {
        character: '马克 (Mǎkè)',
        hanzi: '好啊。三个人，两个菜太少了。金志英，你也点一个吧。',
        pinyin: 'Hǎo a. Sān gè rén, liǎng gè cài tài shǎo le. Jīn Zhìyīng, nǐ yě diǎn yí gè ba.',
        translation: 'Sure! For three people, two dishes are too few. Jin Zhiying, why don’t you order one too?',
      },
      {
        character: '金志英 (Jīn Zhìyīng)',
        hanzi: '我再点一个素的，要一个炒荷兰豆，好吗？',
        pinyin: 'Wǒ zài diǎn yí gè sù de, yào yí gè chǎo hélándòu, hǎo ma?',
        translation: 'I’ll order one more vegetarian dish—how about stir-fried snow peas?',
      },
      {
        character: '马克 (Mǎkè)',
        hanzi: '好啊，这个菜我也爱吃。',
        pinyin: 'Hǎo a, zhège cài wǒ yě ài chī.',
        translation: 'Great, I love eating that dish too.',
      },
      {
        character: '服务员 (Fúwùyuán)',
        hanzi: '几位有什么不吃的？',
        pinyin: 'Jǐ wèi yǒu shénme bù chī de?',
        translation: 'Is there anything you don’t eat?',
      },
      {
        character: '金志英 (Jīn Zhìyīng)',
        hanzi: '别放香菜，我不吃香菜。',
        pinyin: 'Bié fàng xiāngcài, wǒ bù chī xiāngcài.',
        translation: 'Don’t put cilantro in; I don’t eat cilantro.',
      },
      {
        character: '马克、阿里 (Mǎkè, Ālǐ)',
        hanzi: '我们没有不喜欢吃的。',
        pinyin: 'Wǒmen méiyǒu bù xǐhuan chī de.',
        translation: 'There’s nothing we don’t like to eat.',
      },
    ],
    dialogues: [
      {
        title: 'Dialogue 1: Ordering Dishes & Specifying Flavors (点菜)',
        context:
          'Ali, Mark, and Jin Zhiying ask the waiter for popular dish recommendations, balance meat and vegetarian dishes, and request no cilantro.',
        lines: [
          {
            character: '服务员 (Fúwùyuán)',
            hanzi: '几位要点什么菜？',
            pinyin: 'Jǐ wèi yào diǎn shénme cài?',
            translation: 'What dishes would you all like to order?',
          },
          {
            character: '阿里 (Ālǐ)',
            hanzi: '请问什么菜点的人多？',
            pinyin: 'Qǐngwèn shénme cài diǎn de rén duō?',
            translation: 'Excuse me, which dishes do people order the most?',
          },
          {
            character: '服务员 (Fúwùyuán)',
            hanzi: '西红柿炒鸡蛋和鱼香肉丝，留学生一般都喜欢吃。',
            pinyin: 'Xīhóngshì chǎo jīdàn hé yúxiāng ròusī, liúxuéshēng yìbān dōu xǐhuan chī.',
            translation:
              'Scrambled eggs with tomatoes and Yu-Shiang shredded pork—international students generally love eating them.',
          },
          {
            character: '马克 (Mǎkè)',
            hanzi: '西红柿炒鸡蛋我知道，太好吃了，我喜欢。鱼香肉丝是什么味道的？',
            pinyin:
              'Xīhóngshì chǎo jīdàn wǒ zhīdào, tài hǎochī le, wǒ xǐhuan. Yúxiāng ròusī shì shénme wèidào de?',
            translation:
              'I know scrambled eggs with tomatoes—it’s so delicious, I like it. What flavor is Yu-Shiang shredded pork?',
          },
          {
            character: '服务员 (Fúwùyuán)',
            hanzi: '辣的，里面有肉，很好吃。',
            pinyin: 'Là de, lǐmiàn yǒu ròu, hěn hǎochī.',
            translation: 'It’s spicy, has meat inside, and is very delicious.',
          },
          {
            character: '阿里 (Ālǐ)',
            hanzi: '我爱吃辣的，也爱吃肉，咱们尝尝，好不好？',
            pinyin: 'Wǒ ài chī là de, yě ài chī ròu, zánmen chángchang, hǎo bu hǎo?',
            translation: 'I love eating spicy food and I love meat too—let’s try it, okay?',
          },
          {
            character: '马克 (Mǎkè)',
            hanzi: '好啊。三个人，两个菜太少了。金志英，你也点一个吧。',
            pinyin: 'Hǎo a. Sān gè rén, liǎng gè cài tài shǎo le. Jīn Zhìyīng, nǐ yě diǎn yí gè ba.',
            translation:
              'Sure! For three people, two dishes are too few. Jin Zhiying, why don’t you order one too?',
          },
          {
            character: '金志英 (Jīn Zhìyīng)',
            hanzi: '我再点一个素的，要一个炒荷兰豆，好吗？',
            pinyin: 'Wǒ zài diǎn yí gè sù de, yào yí gè chǎo hélándòu, hǎo ma?',
            translation: 'I’ll order one more vegetarian dish—how about stir-fried snow peas?',
          },
          {
            character: '马克 (Mǎkè)',
            hanzi: '好啊，这个菜我也爱吃。',
            pinyin: 'Hǎo a, zhège cài wǒ yě ài chī.',
            translation: 'Great, I love eating that dish too.',
          },
          {
            character: '服务员 (Fúwùyuán)',
            hanzi: '几位有什么不吃的？',
            pinyin: 'Jǐ wèi yǒu shénme bù chī de?',
            translation: 'Is there anything you don’t eat?',
          },
          {
            character: '金志英 (Jīn Zhìyīng)',
            hanzi: '别放香菜，我不吃香菜。',
            pinyin: 'Bié fàng xiāngcài, wǒ bù chī xiāngcài.',
            translation: 'Don’t put cilantro in; I don’t eat cilantro.',
          },
          {
            character: '马克、阿里 (Mǎkè, Ālǐ)',
            hanzi: '我们没有不喜欢吃的。',
            pinyin: 'Wǒmen méiyǒu bù xǐhuan chī de.',
            translation: 'There’s nothing we don’t like to eat.',
          },
        ],
      },
      {
        title: 'Dialogue 2: Ordering Staples, Soup & Comparing Dishes (点主食与比较味道)',
        context:
          'Hirata and Judy order noodles and dumplings, choose dumpling soup over soft drinks for health, and compare the taste of noodles and dumplings.',
        lines: [
          {
            character: '服务员 (Fúwùyuán)',
            hanzi: '两位要什么主食？',
            pinyin: 'Liǎng wèi yào shénme zhǔshí?',
            translation: 'What staple food would the two of you like?',
          },
          {
            character: '平田 (Píngtián)',
            hanzi: '我要一碗面条儿。',
            pinyin: 'Wǒ yào yì wǎn miàntiáor.',
            translation: 'I would like a bowl of noodles.',
          },
          {
            character: '朱迪 (Zhūdí)',
            hanzi: '我不太会用筷子，要饺子吧。',
            pinyin: 'Wǒ bú tài huì yòng kuàizi, yào jiǎozi ba.',
            translation: 'I’m not very good at using chopsticks; I’ll have dumplings.',
          },
          {
            character: '服务员 (Fúwùyuán)',
            hanzi: '您要几两？',
            pinyin: 'Nín yào jǐ liǎng?',
            translation: 'How many liang (50g units) would you like?',
          },
          {
            character: '朱迪 (Zhūdí)',
            hanzi: '我不太饿，要二两吧。',
            pinyin: 'Wǒ bú tài è, yào èr liǎng ba.',
            translation: 'I’m not very hungry; I’ll take two liang (100g).',
          },
          {
            character: '服务员 (Fúwùyuán)',
            hanzi: '两位喝什么？汤还是饮料？',
            pinyin: 'Liǎng wèi hē shénme? Tāng háishi yǐnliào?',
            translation: 'What would you two like to drink? Soup or beverages?',
          },
          {
            character: '平田 (Píngtián)',
            hanzi: '喝饺子汤吧，汤比饮料健康。（吃饭的时候）',
            pinyin: 'Hē jiǎozi tāng ba, tāng bǐ yǐnliào jiànkāng. (Chīfàn de shíhou)',
            translation: 'Let’s drink dumpling soup; soup is healthier than beverages. (While eating)',
          },
          {
            character: '平田 (Píngtián)',
            hanzi: '饺子味道怎么样？',
            pinyin: 'Jiǎozi wèidào zěnmeyàng?',
            translation: 'How do the dumplings taste?',
          },
          {
            character: '朱迪 (Zhūdí)',
            hanzi: '味道很好，你来一个尝尝。',
            pinyin: 'Wèidào hěn hǎo, nǐ lái yí gè chángchang.',
            translation: 'They taste great—have one and try it!',
          },
          {
            character: '平田 (Píngtián)',
            hanzi: '啊，面条儿没有饺子好吃。',
            pinyin: 'A, miàntiáor méiyǒu jiǎozi hǎochī.',
            translation: 'Oh, the noodles aren’t as delicious as the dumplings!',
          },
          {
            character: '朱迪 (Zhūdí)',
            hanzi: '是啊，我觉得饺子最好吃了。',
            pinyin: 'Shì a, wǒ juéde jiǎozi zuì hǎochī le.',
            translation: 'Indeed, I think dumplings are the most delicious!',
          },
        ],
      },
    ],
    readingPassage: {
      title: 'Reading & Integrated Expression: Curious Dish Names & Becoming a Pro at Ordering (点中国菜)',
      paragraphs: [
        {
          hanzi:
            '中国菜的名字也太有意思了：日本豆腐不是日本的豆腐，炒荷兰豆不来自荷兰，鱼香肉丝里面没有鱼肉！留学生一般喜欢吃辣的菜，觉得辣的比不辣的香；我最喜欢吃糖醋的，比如糖醋鱼、糖醋肉。',
          pinyin:
            'Zhōngguó cài de míngzi yě tài yǒu yìsi le: Rìběn dòufu bú shì Rìběn de dòufu, chǎo hélándòu bù láizì Hélán, yúxiāng ròusī lǐmiàn méiyǒu yúròu! Liúxuéshēng yìbān xǐhuan chī là de cài, juéde là de bǐ bú là de xiāng; wǒ zuì xǐhuan chī tángcù de, bǐrú tángcùyú, tángcùròu.',
          translation:
            'The names of Chinese dishes are so interesting: "Japanese tofu" isn’t tofu from Japan, stir-fried "Holland peas" (snow peas) don’t come from the Netherlands, and "fish-fragrant shredded pork" has no fish in it! International students generally like eating spicy dishes and feel spicy food is more fragrant than non-spicy food; I like sweet-and-sour dishes best, such as sweet-and-sour fish and sweet-and-sour pork.',
        },
        {
          hanzi:
            '中国菜很好吃，我喜欢吃中国菜，可是点菜不太容易。我来中国一年了，现在有点儿会点菜了。饭馆儿的菜单上一般都有菜的名字和图片，我觉得看图比看字简单。我点菜的时候还喜欢问服务员：“哪个菜最好吃？”“这个是什么味道的？”如果是和朋友一起吃饭，我还会问朋友：“不吃什么？”“吃糖醋鱼、糖醋肉好不好？”现在，我知道很多中国菜，朋友们都说我太会点菜了！',
          pinyin:
            'Zhōngguó cài hěn hǎochī, wǒ xǐhuan chī Zhōngguó cài, kěshì diǎncài bú tài róngyì. Wǒ lái Zhōngguó yì nián le, xiànzài yǒudiǎnr huì diǎncài le. Fànguǎnr de càidān shang yìbān dōu yǒu cài de míngzi hé túpiàn, wǒ juéde kàn tú bǐ kàn zì jiǎndān. Wǒ diǎncài de shíhou hái xǐhuan wèn fúwùyuán: “Nǎge cài zuì hǎochī?” “Zhège shì shénme wèidào de?” Rúguǒ shì hé péngyou yìqǐ chīfàn, wǒ hái huì wèn péngyou: “Bù chī shénme?” “Chī tángcùyú, tángcùròu hǎo bu hǎo?” Xiànzài, wǒ zhīdào hěn duō Zhōngguó cài, péngyoumen dōu shuō wǒ tài huì diǎncài le!',
          translation:
            'Chinese food is delicious and I love eating it, but ordering dishes is not very easy. I have been in China for a year now and have learned a bit how to order. Restaurant menus generally have dish names and pictures; I find looking at pictures simpler than reading characters. When ordering, I also like to ask the waiter: "Which dish is the most delicious?" and "What flavor is this?" If I’m eating with friends, I also ask them: "What don’t you eat?" and "How about having sweet-and-sour fish and sweet-and-sour pork?" Now I know many Chinese dishes, and my friends all say I’m so good at ordering!',
        },
      ],
    },
    vocabularyExplanation: [
      {
        hanzi: '服务员',
        pinyin: 'fúwùyuán',
        english: 'waiter / waitress / attendant',
        exampleHanzi: '我点菜的时候喜欢问服务员：“哪个菜最好吃？”',
        examplePinyin: 'Wǒ diǎncài de shíhou xǐhuan wèn fúwùyuán: “Nǎge cài zuì hǎochī?”',
        exampleTranslation: 'When ordering, I like to ask the waiter: "Which dish is the most delicious?"',
      },
      {
        hanzi: '位',
        pinyin: 'wèi',
        english: 'polite measure word for people (customers, guests, teachers)',
        exampleHanzi: '几位要点什么菜？',
        examplePinyin: 'Jǐ wèi yào diǎn shénme cài?',
        exampleTranslation: 'What dishes would you all like to order?',
      },
      {
        hanzi: '点',
        pinyin: 'diǎn',
        english: 'to order (food/dishes); o’clock',
        exampleHanzi: '金志英，你也点一个菜吧。',
        examplePinyin: 'Jīn Zhìyīng, nǐ yě diǎn yí gè cài ba.',
        exampleTranslation: 'Jin Zhiying, why don’t you order a dish too?',
      },
      {
        hanzi: '西红柿炒鸡蛋',
        pinyin: 'xīhóngshì chǎo jīdàn',
        english: 'scrambled eggs with tomatoes (classic Chinese home-style dish)',
        exampleHanzi: '西红柿炒鸡蛋太好吃了，我喜欢。',
        examplePinyin: 'Xīhóngshì chǎo jīdàn tài hǎochī le, wǒ xǐhuan.',
        exampleTranslation: 'Scrambled eggs with tomatoes is so delicious; I like it.',
      },
      {
        hanzi: '鱼香肉丝',
        pinyin: 'yúxiāng ròusī',
        english: 'Yu-Shiang shredded pork (spicy garlic-sweet-sour pork strips)',
        exampleHanzi: '鱼香肉丝里面没有鱼肉！',
        examplePinyin: 'Yúxiāng ròusī lǐmiàn méiyǒu yúròu!',
        exampleTranslation: 'There is no fish meat inside Yu-Shiang shredded pork!',
      },
      {
        hanzi: '味道',
        pinyin: 'wèidào',
        english: 'flavor / taste',
        exampleHanzi: '鱼香肉丝是什么味道的？',
        examplePinyin: 'Yúxiāng ròusī shì shénme wèidào de?',
        exampleTranslation: 'What flavor is Yu-Shiang shredded pork?',
      },
      {
        hanzi: '辣',
        pinyin: 'là',
        english: 'spicy / hot (in flavor)',
        exampleHanzi: '我爱吃辣的，觉得辣的比不辣的香。',
        examplePinyin: 'Wǒ ài chī là de, juéde là de bǐ bú là de xiāng.',
        exampleTranslation: 'I love eating spicy food and think spicy food is more fragrant than non-spicy food.',
      },
      {
        hanzi: '肉',
        pinyin: 'ròu',
        english: 'meat / pork',
        exampleHanzi: '这个菜里面有肉，很好吃。',
        examplePinyin: 'Zhège cài lǐmiàn yǒu ròu, hěn hǎochī.',
        exampleTranslation: 'This dish has meat inside and is very delicious.',
      },
      {
        hanzi: '爱',
        pinyin: 'ài',
        english: 'to love / to be fond of (doing or eating something)',
        exampleHanzi: '这个菜我也爱吃。',
        examplePinyin: 'Zhège cài wǒ yě ài chī.',
        exampleTranslation: 'I love eating this dish too.',
      },
      {
        hanzi: '咱们',
        pinyin: 'zánmen',
        english: 'we / us (inclusive of both speaker and listener)',
        exampleHanzi: '咱们尝尝，好不好？',
        examplePinyin: 'Zánmen chángchang, hǎo bu hǎo?',
        exampleTranslation: 'Let’s try it, okay?',
      },
      {
        hanzi: '尝',
        pinyin: 'cháng',
        english: 'to taste / to try (food or drink)',
        exampleHanzi: '饺子味道很好，你来一个尝尝。',
        examplePinyin: 'Jiǎozi wèidào hěn hǎo, nǐ lái yí gè chángchang.',
        exampleTranslation: 'The dumplings taste great—have one and try it.',
      },
      {
        hanzi: '素',
        pinyin: 'sù',
        english: 'vegetarian / vegetable-based (opposite of 荤/肉)',
        exampleHanzi: '我再点一个素的，要一个炒荷兰豆。',
        examplePinyin: 'Wǒ zài diǎn yí gè sù de, yào yí gè chǎo hélándòu.',
        exampleTranslation: 'I’ll order one more vegetarian dish—stir-fried snow peas.',
      },
      {
        hanzi: '别',
        pinyin: 'bié',
        english: 'do not / don’t (imperative negative = 不要)',
        exampleHanzi: '别放香菜，我不吃香菜。',
        examplePinyin: 'Bié fàng xiāngcài, wǒ bù chī xiāngcài.',
        exampleTranslation: 'Don’t put cilantro in; I don’t eat cilantro.',
      },
      {
        hanzi: '放',
        pinyin: 'fàng',
        english: 'to put / to add (seasoning or ingredients)',
        exampleHanzi: '面条儿里别放辣椒。',
        examplePinyin: 'Miàntiáor lǐ bié fàng làjiāo.',
        exampleTranslation: 'Don’t put chili peppers in the noodles.',
      },
      {
        hanzi: '香菜',
        pinyin: 'xiāngcài',
        english: 'cilantro / coriander',
        exampleHanzi: '很多人不吃香菜。',
        examplePinyin: 'Hěn duō rén bù chī xiāngcài.',
        exampleTranslation: 'Many people do not eat cilantro.',
      },
      {
        hanzi: '主食',
        pinyin: 'zhǔshí',
        english: 'staple food (rice, noodles, dumplings, steamed buns)',
        exampleHanzi: '两位要什么主食？',
        examplePinyin: 'Liǎng wèi yào shénme zhǔshí?',
        exampleTranslation: 'What staple food would the two of you like?',
      },
      {
        hanzi: '碗',
        pinyin: 'wǎn',
        english: 'bowl (noun & measure word)',
        exampleHanzi: '我要一碗面条儿。',
        examplePinyin: 'Wǒ yào yì wǎn miàntiáor.',
        exampleTranslation: 'I would like a bowl of noodles.',
      },
      {
        hanzi: '面条儿',
        pinyin: 'miàntiáor',
        english: 'noodles',
        exampleHanzi: '面条儿没有饺子好吃。',
        examplePinyin: 'Miàntiáor méiyǒu jiǎozi hǎochī.',
        exampleTranslation: 'Noodles are not as delicious as dumplings.',
      },
      {
        hanzi: '会',
        pinyin: 'huì',
        english: 'can / know how to (an acquired skill learned through practice)',
        exampleHanzi: '我不太会用筷子，要饺子吧。',
        examplePinyin: 'Wǒ bú tài huì yòng kuàizi, yào jiǎozi ba.',
        exampleTranslation: 'I’m not very good at using chopsticks; I’ll have dumplings.',
      },
      {
        hanzi: '用',
        pinyin: 'yòng',
        english: 'to use',
        exampleHanzi: '中国人吃饭一般用筷子。',
        examplePinyin: 'Zhōngguórén chīfàn yìbān yòng kuàizi.',
        exampleTranslation: 'Chinese people generally use chopsticks when eating.',
      },
      {
        hanzi: '筷子',
        pinyin: 'kuàizi',
        english: 'chopsticks',
        exampleHanzi: '这双筷子很好用。',
        examplePinyin: 'Zhè shuāng kuàizi hěn hǎoyòng.',
        exampleTranslation: 'This pair of chopsticks is very easy to use.',
      },
      {
        hanzi: '两',
        pinyin: 'liǎng',
        english: 'liang (weight unit = 50 grams, 1/10 of a jin; used for ordering dumplings/rice)',
        exampleHanzi: '我不太饿，要二两饺子吧。',
        examplePinyin: 'Wǒ bú tài è, yào èr liǎng jiǎozi ba.',
        exampleTranslation: 'I’m not very hungry; I’ll have two liang (100g) of dumplings.',
      },
      {
        hanzi: '饿',
        pinyin: 'è',
        english: 'hungry',
        exampleHanzi: '你饿不饿？我们去吃饭吧。',
        examplePinyin: 'Nǐ è bu è? Wǒmen qù chīfàn ba.',
        exampleTranslation: 'Are you hungry? Let’s go eat.',
      },
      {
        hanzi: '汤',
        pinyin: 'tāng',
        english: 'soup / broth',
        exampleHanzi: '喝饺子汤吧，汤比饮料健康。',
        examplePinyin: 'Hē jiǎozi tāng ba, tāng bǐ yǐnliào jiànkāng.',
        exampleTranslation: 'Let’s drink dumpling soup; soup is healthier than soft drinks.',
      },
      {
        hanzi: '饮料',
        pinyin: 'yǐnliào',
        english: 'beverage / soft drink',
        exampleHanzi: '两位喝什么？汤还是饮料？',
        examplePinyin: 'Liǎng wèi hē shénme? Tāng háishi yǐnliào?',
        exampleTranslation: 'What would you two like to drink? Soup or beverages?',
      },
      {
        hanzi: '比',
        pinyin: 'bǐ',
        english: 'than (preposition used in comparative sentences)',
        exampleHanzi: '我觉得看图比看字简单。',
        examplePinyin: 'Wǒ juéde kàn tú bǐ kàn zì jiǎndān.',
        exampleTranslation: 'I think looking at pictures is simpler than reading characters.',
      },
      {
        hanzi: '健康',
        pinyin: 'jiànkāng',
        english: 'healthy / health',
        exampleHanzi: '多吃蔬菜和水果很健康。',
        examplePinyin: 'Duō chī shūcài hé shuǐguǒ hěn jiànkāng.',
        exampleTranslation: 'Eating more vegetables and fruit is very healthy.',
      },
      {
        hanzi: '最',
        pinyin: 'zuì',
        english: 'most / -est (superlative adverb)',
        exampleHanzi: '我觉得饺子最好吃了。',
        examplePinyin: 'Wǒ juéde jiǎozi zuì hǎochī le.',
        exampleTranslation: 'I think dumplings are the most delicious.',
      },
      {
        hanzi: '菜单',
        pinyin: 'càidān',
        english: 'menu',
        exampleHanzi: '饭馆儿的菜单上一般都有菜的名字和图片。',
        examplePinyin: 'Fànguǎnr de càidān shang yìbān dōu yǒu cài de míngzi hé túpiàn.',
        exampleTranslation: 'Restaurant menus generally have the names and pictures of the dishes.',
      },
    ],
    grammarPoint: 'Nominalized “的”-Phrases, Imperative 别 + V, Acquired Skill 会 + V, and Comparisons (比 / 没有 / 最)',
    structure: '[Adj/V] + 的 | 别 + V | (不太) 会 + V | A 比 B + Adj | B 没有 A + Adj | 最 + Adj/V',
    explanation:
      'Unit 6 introduces nominalized “的” phrases (素的, 辣的, 不吃的), negative imperatives with 别, acquired skills with 会, softened negation with 不太, comparative sentences with 比 and 没有, and superlatives with 最.',
    examples: [
      {
        hanzi: '喝饺子汤吧，汤比饮料健康。',
        pinyin: 'Hē jiǎozi tāng ba, tāng bǐ yǐnliào jiànkāng.',
        translation: 'Let’s drink dumpling soup; soup is healthier than beverages.',
      },
      {
        hanzi: '面条儿没有饺子好吃。我觉得饺子最好吃了。',
        pinyin: 'Miàntiáor méiyǒu jiǎozi hǎochī. Wǒ juéde jiǎozi zuì hǎochī le.',
        translation: 'Noodles aren’t as delicious as dumplings. I think dumplings are the most delicious!',
      },
    ],
    grammarNotes: [
      {
        title: 'Nominalized “的”字短语 (de-Phrases) & Dietary Restrictions with 别 + V',
        structure: '[Noun / Pronoun / Adj / Verb] + 的  =  Noun Phrase  |  别 + Verb (+ Object)',
        explanation:
          'Attaching 的 to an adjective, noun, pronoun, or verb phrase creates a self-standing noun phrase (“的”字短语) when the head noun is clear from context: 素的 (a vegetarian dish), 辣的 (spicy food), 不吃的 (things one doesn’t eat), 糖醋的 (sweet-and-sour ones), 蓝色的 (the blue one). To ask someone not to do something (such as omitting an ingredient), use the negative imperative 别 + Verb: 别放香菜 (Don’t put cilantro in).',
        examples: [
          {
            hanzi: '我爱吃辣的，她再点一个素的。',
            pinyin: 'Wǒ ài chī là de, tā zài diǎn yí gè sù de.',
            translation: 'I love eating spicy food, and she is ordering one more vegetarian dish.',
          },
          {
            hanzi: '几位有什么不吃的？——别放香菜，我不吃香菜。',
            pinyin: 'Jǐ wèi yǒu shénme bù chī de? — Bié fàng xiāngcài, wǒ bù chī xiāngcài.',
            translation: 'Is there anything you don’t eat? — Don’t put cilantro in; I don’t eat cilantro.',
          },
        ],
      },
      {
        title: 'Consultative Suggestions (……，好吗 / 好不好？) & Exclamations (太 + Adj + 了)',
        structure: '[Proposal]，好吗 / 好不好？  |  太 + Adjective / V[心理] + 了！',
        explanation:
          '① Adding “……，好吗？” or “……，好不好？” at the end of a suggestion solicits the listener’s agreement politely (咱们尝尝，好不好？ / 要一个炒荷兰豆，好吗？). ② The frame 太 + Adj + 了 expresses strong emotion—either high praise/delight (太好吃了！ "So delicious!", 太有意思了！ "So interesting!") or dissatisfaction with an excess (三个人，两个菜太少了 "For three people, two dishes are too few").',
        examples: [
          {
            hanzi: '我再点一个素的，要一个炒荷兰豆，好吗？',
            pinyin: 'Wǒ zài diǎn yí gè sù de, yào yí gè chǎo hélándòu, hǎo ma?',
            translation: 'I’ll order one more vegetarian dish—how about stir-fried snow peas?',
          },
          {
            hanzi: '西红柿炒鸡蛋我知道，太好吃了！',
            pinyin: 'Xīhóngshì chǎo jīdàn wǒ zhīdào, tài hǎochī le!',
            translation: 'I know scrambled eggs with tomatoes—it’s so delicious!',
          },
        ],
      },
      {
        title: 'Acquired Skill 会 (huì) & Softened Negation 不太 (bú tài)',
        structure: 'Subject + (不太 / 很) + 会 + Verb (+ Object)  |  不太 + Adjective / V[心理]',
        explanation:
          '① Modal verb 会 before an action verb means knowing how to do something through learning or practice (会用筷子 know how to use chopsticks, 会点菜 know how to order dishes, 会说汉语 know how to speak Chinese). Unlike English, 会 can be modified by degree adverbs (很会点菜, 太会点菜了, 有点儿会点菜了). ② 不太 + Adj/V softens a negation to "not very / not particularly" (我不太饿 "I’m not very hungry", 我不太会用筷子 "I’m not very good at using chopsticks", 点菜不太容易 "Ordering dishes is not very easy").',
        examples: [
          {
            hanzi: '我不太会用筷子，要饺子吧。我不太饿，要二两吧。',
            pinyin: 'Wǒ bú tài huì yòng kuàizi, yào jiǎozi ba. Wǒ bú tài è, yào èr liǎng ba.',
            translation: 'I’m not very good at using chopsticks; I’ll have dumplings. I’m not very hungry; I’ll take two liang.',
          },
          {
            hanzi: '现在，朋友们都说我太会点菜了！',
            pinyin: 'Xiànzài, péngyoumen dōu shuō wǒ tài huì diǎncài le!',
            translation: 'Now my friends all say I am so good at ordering dishes!',
          },
        ],
      },
      {
        title: 'Comparisons with 比 (bǐ), Inferior Comparisons with 没有, and Superlative 最 (zuì)',
        structure: 'A + 比 + B + Adjective  |  B + 没(有) + A + Adjective  |  最 + Adjective / V[心理]',
        explanation:
          '① To state that A has a higher degree of a quality than B, use A 比 B + Adj: 汤比饮料健康 (Soup is healthier than soft drinks), 看图比看字简单 (Looking at pictures is simpler than reading characters). CRITICAL RULE: Never put degree adverbs (很, 太, 非常) or negators (不) before the adjective in a 比 sentence (*汤比饮料很健康 is ungrammatical). ② To negate a comparison or say B is NOT as [Adj] as A, use B 没有 A + Adj: 面条儿没有饺子好吃 (Noodles are not as delicious as dumplings). ③ Use 最 ("most / -est") before an adjective or psychological verb to express the superlative: 饺子最好吃了 (Dumplings are the most delicious), 我最喜欢吃糖醋的 (I like eating sweet-and-sour food best).',
        examples: [
          {
            hanzi: '喝饺子汤吧，汤比饮料健康。',
            pinyin: 'Hē jiǎozi tāng ba, tāng bǐ yǐnliào jiànkāng.',
            translation: 'Let’s drink dumpling soup; soup is healthier than beverages.',
          },
          {
            hanzi: '啊，面条儿没有饺子好吃。——是啊，我觉得饺子最好吃了。',
            pinyin: 'A, miàntiáor méiyǒu jiǎozi hǎochī. — Shì a, wǒ juéde jiǎozi zuì hǎochī le.',
            translation: 'Oh, the noodles aren’t as delicious as the dumplings. — Indeed, I think dumplings are the most delicious!',
          },
        ],
      },
    ],
    exercises: [
      {
        question: 'In Dialogue 1, what three dishes do Ali, Mark, and Jin Zhiying end up ordering, and what special request does Jin Zhiying make?',
        options: [
          '西红柿炒鸡蛋, 鱼香肉丝, and 炒荷兰豆 — and she asks the waiter not to put cilantro in (别放香菜).',
          '日本豆腐, 糖醋鱼, and 饺子 — and she asks for extra chili peppers.',
          'Three bowls of noodles and three bottles of soda.',
          'Only vegetarian dishes because nobody in the group eats meat.',
        ],
        answerIndex: 0,
        explanation:
          'They order 西红柿炒鸡蛋, 鱼香肉丝 (spicy with pork), and a vegetarian dish 炒荷兰豆, and Jin Zhiying says “别放香菜，我不吃香菜.”',
      },
      {
        question: 'Which comparative sentence is grammatically CORRECT in Mandarin?',
        options: [
          '汤比饮料健康。 (Tāng bǐ yǐnliào jiànkāng.)',
          '汤比饮料很健康。 (Tāng bǐ yǐnliào hěn jiànkāng.)',
          '汤比饮料太健康了。 (Tāng bǐ yǐnliào tài jiànkāng le.)',
          '面条儿比饺子不好吃。 (Miàntiáor bǐ jiǎozi bù hǎochī.)',
        ],
        answerIndex: 0,
        explanation:
          'In an “A 比 B + Adjective” comparative sentence, the adjective cannot be modified by degree adverbs like 很, 太, or 非常, nor negated with 不 (to say "not as delicious as", use 面条儿没有饺子好吃).',
      },
      {
        question: 'In Dialogue 2, why does Judy order “二两饺子” (two liang of dumplings)?',
        options: [
          'Because she isn’t very good at using chopsticks (不太会用筷子) and isn’t very hungry (不太饿).',
          'Because the restaurant ran out of noodles and rice.',
          'Because two liang of dumplings equals two kilograms.',
          'Because Hirata told her dumplings are cheaper than soup.',
        ],
        answerIndex: 0,
        explanation:
          'Judy says: “我不太会用筷子，要饺子吧” and when asked how many liang, she replies: “我不太饿，要二两吧.”',
      },
      {
        question: 'According to the Reading Passage, what is surprising about the dish “鱼香肉丝” (Yu-Shiang shredded pork)?',
        options: [
          'Even though its name contains the character 鱼 (fish), there is no fish meat inside it (里面没有鱼肉).',
          'It is imported directly from the Netherlands (荷兰).',
          'It is a sweet dessert made only from tofu and apples.',
          'International students never order it because it has no flavor.',
        ],
        answerIndex: 0,
        explanation:
          'The passage notes: “日本豆腐不是日本的豆腐，炒荷兰豆不来自荷兰，鱼香肉丝里面没有鱼肉！” (Yu-Shiang pork is seasoned with the traditional Sichuan aromatics used for cooking fish, but contains pork strips, not fish.)',
      },
      {
        question: 'Which radical (部首) appears in the characters 饭, 饮, 饿, and 饺, and what meaning category does it indicate?',
        options: [
          '食字旁 (饣) — related to food, meals, and eating/drinking',
          '三点水 (氵) — related to water and rivers',
          '言字旁 (讠) — related to speech and language',
          '竖心旁 (忄) — related to emotions and the heart',
        ],
        answerIndex: 0,
        explanation:
          'The radical 饣 (食字旁, derived from 食 "food/eat") appears on the left of 饭 (meal), 饮 (drink), 饿 (hungry), and 饺 (dumpling).',
      },
    ],
  },

  // ===========================================================================
  // UNIT 8 (HSK 2): 文化读本2 去朋友家带什么礼物好 — Gift-Giving Etiquette in China
  // Synthesized from slide deck: 文化读本2.pdf
  // Mastering Chinese: Elementary 2 (会通汉语 精编版·初级2)
  // ===========================================================================
  {
    id: 'lesson8',
    title: "Cultural Reader 2: What Gift Should You Bring to a Friend's Home?",
    chineseTitle: '文化读本2：去朋友家带什么礼物好',
    unitBadge: 'Mastering Chinese · Elementary 2 · Cultural Reader (文化读本2)',
    hskLevel: 2,
    description:
      'Explore Chinese gift-giving etiquette when visiting a friend’s home: auspicious fruit homophones (apples for peace, tangerines for good fortune), why pears are avoided, seasonal fruits, and flower color taboos.',
    content:
      'Cultural Reader 2 of Mastering Chinese: Elementary 2 explains the social customs and homophonic symbolism behind choosing fruits and flowers when visiting a friend’s home in China.',
    objectives: [
      'Understand why bringing a small gift (带点儿礼物) is customary when visiting a friend’s home in China.',
      'Explain the auspicious phonetic symbolism of apples (苹果 → 平安 peace/safety) and tangerines (橘子 → 吉利 good luck).',
      'Identify why pears (梨 = 离 separation) and white or yellow chrysanthemums (菊花, associated with tomb-sweeping 扫墓) are avoided as housewarming or visiting gifts.',
      'Apply comparative and superlative structures (最重要的就是送吉利，吉利的都比不吉利的好) in cultural discussions.',
    ],
    dialogue: [
      {
        character: '马克 (Mark)',
        hanzi: '李老师，周末我想去中国朋友家玩儿，去朋友家带什么礼物好？',
        pinyin: 'Lǐ lǎoshī, zhōumò wǒ xiǎng qù Zhōngguó péngyou jiā wánr, qù péngyou jiā dài shénme lǐwù hǎo?',
        translation: 'Teacher Li, this weekend I want to visit a Chinese friend’s home—what gift is good to bring to a friend’s house?',
      },
      {
        character: '李老师 (Teacher Li)',
        hanzi: '很多人喜欢带香蕉、苹果、橘子等水果。因为苹果有“平安”的意思，橘子有“吉利”的意思。',
        pinyin: 'Hěn duō rén xǐhuan dài xiāngjiāo, píngguǒ, júzi děng shuǐguǒ. Yīnwèi píngguǒ yǒu “píng’ān” de yìsi, júzi yǒu “jílì” de yìsi.',
        translation: 'Many people like to bring fruits such as bananas, apples, and tangerines. Because apples mean "peace and safety," and tangerines mean "good fortune."',
      },
      {
        character: '金志英 (Jin Zhiying)',
        hanzi: '那可以带梨或者白色的花儿吗？',
        pinyin: 'Nà kěyǐ dài lí huòzhě báisè de huār ma?',
        translation: 'Then can we bring pears or white flowers?',
      },
      {
        character: '李老师 (Teacher Li)',
        hanzi: '带梨就不好，因为“梨”和“离”发音一样，不吉利。在中国，也不能送白色的花儿和菊花，送礼物最重要的就是送吉利！',
        pinyin: 'Dài lí jiù bù hǎo, yīnwèi “lí” hé “lí” fāyīn yíyàng, bù jílì. Zài Zhōngguó, yě bù néng sòng báisè de huār hé júhuā, sòng lǐwù zuì zhòngyào de jiùshì sòng jílì!',
        translation: 'Bringing pears is not good because "pear" and "separation" sound the same, which is inauspicious. In China, you also cannot give white flowers or chrysanthemums—the most important thing when giving gifts is to give good fortune!',
      },
    ],
    dialogues: [
      {
        title: 'Dialogue 1: Choosing Fruit Gifts for a Friend’s Home (去朋友家带什么水果好)',
        context:
          'Mark (马克) and Lily (莉莉) ask Teacher Li Yue (李老师) what fruits to bring when visiting a Chinese friend’s home and why pears are avoided.',
        lines: [
          {
            character: '马克 (Mark)',
            hanzi: '李老师，周末我和莉莉要去中国朋友家玩儿，去朋友家带什么礼物好？',
            pinyin:
              'Lǐ lǎoshī, zhōumò wǒ hé Lìlì yào qù Zhōngguó péngyou jiā wánr, qù péngyou jiā dài shénme lǐwù hǎo?',
            translation:
              'Teacher Li, this weekend Lily and I are going to visit a Chinese friend’s home—what gift is good to bring?',
          },
          {
            character: '李老师 (Teacher Li)',
            hanzi:
              '去朋友家一般都要带点儿礼物，很多人喜欢带香蕉、苹果、橘子等水果。因为香蕉很好吃，也不贵；苹果有“平安”的意思；橘子有“吉利”的意思。',
            pinyin:
              'Qù péngyou jiā yìbān dōu yào dài diǎnr lǐwù, hěn duō rén xǐhuan dài xiāngjiāo, píngguǒ, júzi děng shuǐguǒ. Yīnwèi xiāngjiāo hěn hǎochī, yě bú guì; píngguǒ yǒu “píng’ān” de yìsi; júzi yǒu “jílì” de yìsi.',
            translation:
              'When visiting a friend’s home, people generally bring a small gift, and many like to bring fruits such as bananas, apples, and tangerines. That is because bananas are delicious and inexpensive; apples mean "peace and safety"; and tangerines mean "good fortune."',
          },
          {
            character: '莉莉 (Lily)',
            hanzi: '我也很喜欢吃梨，带梨去朋友家好不好？',
            pinyin: 'Wǒ yě hěn xǐhuan chī lí, dài lí qù péngyou jiā hǎo bu hǎo?',
            translation: 'I also really like eating pears—is it good to bring pears to a friend’s home?',
          },
          {
            character: '李老师 (Teacher Li)',
            hanzi:
              '带梨就不好，因为“梨”和“离”发音一样，不吉利。带应季水果也不错，夏天带一个西瓜去朋友家，大家一起吃很开心。',
            pinyin:
              'Dài lí jiù bù hǎo, yīnwèi “lí” hé “lí” fāyīn yíyàng, bù jílì. Dài yìngjì shuǐguǒ yě búcuò, xiàtiān dài yí gè xīguā qù péngyou jiā, dàjiā yìqǐ chī hěn kāixīn.',
            translation:
              'Bringing pears is not good, because "pear" (lí) has the same pronunciation as "separation" (lí), which is inauspicious. Bringing seasonal fruit is also nice—bringing a watermelon to a friend’s house in summer for everyone to eat together is very joyful.',
          },
        ],
      },
      {
        title: 'Dialogue 2: Flower Etiquette & the Golden Rule of Auspiciousness (送花儿的讲究与送吉利)',
        context:
          'Jin Zhiying (金志英) asks Teacher Li Yue (李老师) about bringing flowers to a friend’s house and learns which flower colors and varieties to avoid.',
        lines: [
          {
            character: '金志英 (Jin Zhiying)',
            hanzi: '李老师，除了水果，我还想带花儿去朋友家，可以吗？',
            pinyin: 'Lǐ lǎoshī, chúle shuǐguǒ, wǒ hái xiǎng dài huār qù péngyou jiā, kěyǐ ma?',
            translation: 'Teacher Li, besides fruit, I also want to bring flowers to my friend’s house—is that okay?',
          },
          {
            character: '李老师 (Teacher Li)',
            hanzi:
              '带花儿也很不错，可是要注意花儿的颜色和意思。在中国，不能送白色的花儿，最好也不送菊花，特别是白色和黄色的菊花，这两种一般都是扫墓时会带的花儿。',
            pinyin:
              'Dài huār yě hěn búcuò, kěshì yào zhùyì huār de yánsè hé yìsi. Zài Zhōngguó, bù néng sòng báisè de huār, zuìhǎo yě bú sòng júhuā, tèbié shì báisè hé huángsè de júhuā, zhè liǎng zhǒng yìbān dōu shì sǎomù shí huì dài de huār.',
            translation:
              'Bringing flowers is very nice too, but you must pay attention to the colors and meanings of the flowers. In China, you cannot give white flowers, and it is best not to give chrysanthemums—especially white and yellow chrysanthemums, which are generally brought when sweeping tombs.',
          },
          {
            character: '金志英 (Jin Zhiying)',
            hanzi: '哦，我明白了！在中国，送礼物最重要的就是送吉利，吉利的都比不吉利的好！',
            pinyin:
              'Ò, wǒ míngbai le! Zài Zhōngguó, sòng lǐwù zuì zhòngyào de jiùshì sòng jílì, jílì de dōu bǐ bù jílì de hǎo!',
            translation:
              'Oh, I understand now! In China, the most important thing when giving gifts is to give good fortune—anything auspicious is better than something inauspicious!',
          },
        ],
      },
    ],
    readingPassage: {
      title: 'Cultural Reader 2: What Gift Should You Bring to a Friend’s Home? (去朋友家带什么礼物好)',
      subtitle: 'Complete authentic reading passage from Mastering Chinese: Elementary 2 (会通汉语 精编版·初级2 · 文化读本2).',
      paragraphs: [
        {
          hanzi:
            '去朋友家一般都要带点儿礼物，很多人喜欢带香蕉、苹果、橘子等水果。因为香蕉很好吃，也不贵；苹果有“平安”的意思；橘子有“吉利”的意思。',
          pinyin:
            'Qù péngyou jiā yìbān dōu yào dài diǎnr lǐwù, hěn duō rén xǐhuan dài xiāngjiāo, píngguǒ, júzi děng shuǐguǒ. Yīnwèi xiāngjiāo hěn hǎochī, yě bú guì; píngguǒ yǒu “píng’ān” de yìsi; júzi yǒu “jílì” de yìsi.',
          translation:
            'When visiting a friend’s home, people generally bring a small gift, and many like to bring fruits such as bananas, apples, and tangerines. That is because bananas are delicious and inexpensive; apples carry the meaning of "peace and safety" (píng’ān); and tangerines carry the meaning of "good fortune and auspiciousness" (jílì).',
        },
        {
          hanzi:
            '带梨就不好，因为“梨”和“离”发音一样，不吉利。带应季水果也不错，夏天带一个西瓜去朋友家，大家一起吃很开心。',
          pinyin:
            'Dài lí jiù bù hǎo, yīnwèi “lí” hé “lí” fāyīn yíyàng, bù jílì. Dài yìngjì shuǐguǒ yě búcuò, xiàtiān dài yí gè xīguā qù péngyou jiā, dàjiā yìqǐ chī hěn kāixīn.',
          translation:
            'Bringing pears, however, is not good, because "pear" (lí, 梨) has the exact same pronunciation as "separation" (lí, 离), which is inauspicious. Bringing seasonal fruit is also a great choice—bringing a watermelon to a friend’s house in summer for everyone to eat together is very joyful.',
        },
        {
          hanzi:
            '有人还喜欢带花儿去朋友家。带花儿也很不错，可是要注意花儿的颜色和意思。在中国，不能送白色的花儿，最好也不送菊花，特别是白色和黄色的菊花，这两种一般都是扫墓时会带的花儿。',
          pinyin:
            'Yǒu rén hái xǐhuan dài huār qù péngyou jiā. Dài huār yě hěn búcuò, kěshì yào zhùyì huār de yánsè hé yìsi. Zài Zhōngguó, bù néng sòng báisè de huār, zuìhǎo yě bú sòng júhuā, tèbié shì báisè hé huángsè de júhuā, zhè liǎng zhǒng yìbān dōu shì sǎomù shí huì dài de huār.',
          translation:
            'Some people also like to bring flowers to a friend’s home. Bringing flowers is very nice too, but you must pay attention to the colors and meanings of the flowers. In China, you must not give white flowers, and it is best not to give chrysanthemums either—especially white and yellow chrysanthemums, as those two kinds are generally brought when sweeping tombs to mourn the deceased.',
        },
        {
          hanzi: '在中国，送礼物最重要的就是送吉利，吉利的都比不吉利的好，你明白了吗？',
          pinyin:
            'Zài Zhōngguó, sòng lǐwù zuì zhòngyào de jiùshì sòng jílì, jílì de dōu bǐ bù jílì de hǎo, nǐ míngbai le ma?',
          translation:
            'In China, the most important thing when giving gifts is to give auspiciousness—anything auspicious is better than something inauspicious. Have you understood?',
        },
      ],
    },
    vocabularyExplanation: [
      {
        hanzi: '带',
        pinyin: 'dài',
        english: 'to bring / to carry / to take along',
        exampleHanzi: '去朋友家一般都要带点儿礼物。',
        examplePinyin: 'Qù péngyou jiā yìbān dōu yào dài diǎnr lǐwù.',
        exampleTranslation: 'When going to a friend’s house, people generally bring a small gift.',
      },
      {
        hanzi: '礼物',
        pinyin: 'lǐwù',
        english: 'gift / present',
        exampleHanzi: '去朋友家带什么礼物好？',
        examplePinyin: 'Qù péngyou jiā dài shénme lǐwù hǎo?',
        exampleTranslation: 'What is a good gift to bring when visiting a friend’s home?',
      },
      {
        hanzi: '香蕉',
        pinyin: 'xiāngjiāo',
        english: 'banana',
        exampleHanzi: '香蕉很好吃，也不贵。',
        examplePinyin: 'Xiāngjiāo hěn hǎochī, yě bú guì.',
        exampleTranslation: 'Bananas are delicious and not expensive.',
      },
      {
        hanzi: '橘子',
        pinyin: 'júzi',
        english: 'tangerine / mandarin orange',
        exampleHanzi: '橘子有“吉利”的意思。',
        examplePinyin: 'Júzi yǒu “jílì” de yìsi.',
        exampleTranslation: 'Tangerines carry the meaning of "good fortune / auspiciousness."',
      },
      {
        hanzi: '平安',
        pinyin: 'píng’ān',
        english: 'safe and sound / peaceful',
        exampleHanzi: '苹果的“苹”和“平安”的“平”发音一样。',
        examplePinyin: 'Píngguǒ de “píng” hé “píng’ān” de “píng” fāyīn yíyàng.',
        exampleTranslation: 'The "píng" in apple has the same pronunciation as the "píng" in peace/safety.',
      },
      {
        hanzi: '意思',
        pinyin: 'yìsi',
        english: 'meaning / significance',
        exampleHanzi: '要注意花儿的颜色和意思。',
        examplePinyin: 'Yào zhùyì huār de yánsè hé yìsi.',
        exampleTranslation: 'You should pay attention to the color and meaning of the flowers.',
      },
      {
        hanzi: '吉利',
        pinyin: 'jílì',
        english: 'auspicious / lucky / propitious',
        exampleHanzi: '在中国，送礼物最重要的就是送吉利。',
        examplePinyin: 'Zài Zhōngguó, sòng lǐwù zuì zhòngyào de jiùshì sòng jílì.',
        exampleTranslation: 'In China, the most important thing when giving a gift is to convey good fortune.',
      },
      {
        hanzi: '梨',
        pinyin: 'lí',
        english: 'pear',
        exampleHanzi: '带梨就不好，因为“梨”和“离”发音一样。',
        examplePinyin: 'Dài lí jiù bù hǎo, yīnwèi “lí” hé “lí” fāyīn yíyàng.',
        exampleTranslation: 'Bringing pears is not good because "pear" and "separation" sound the same.',
      },
      {
        hanzi: '发音',
        pinyin: 'fāyīn',
        english: 'pronunciation',
        exampleHanzi: '这两个汉字的发音一样。',
        examplePinyin: 'Zhè liǎng gè hànzì de fāyīn yíyàng.',
        exampleTranslation: 'The pronunciation of these two Chinese characters is the same.',
      },
      {
        hanzi: '应季',
        pinyin: 'yìngjì',
        english: 'in season / seasonal (of fruits and vegetables)',
        exampleHanzi: '带应季水果去朋友家也很不错。',
        examplePinyin: 'Dài yìngjì shuǐguǒ qù péngyou jiā yě hěn búcuò.',
        exampleTranslation: 'Bringing seasonal fruit to a friend’s house is also great.',
      },
      {
        hanzi: '注意',
        pinyin: 'zhùyì',
        english: 'to pay attention to / to mind',
        exampleHanzi: '送花儿的时候要注意颜色。',
        examplePinyin: 'Sòng huār de shíhou yào zhùyì yánsè.',
        exampleTranslation: 'When giving flowers, you must pay attention to the color.',
      },
      {
        hanzi: '菊花',
        pinyin: 'júhuā',
        english: 'chrysanthemum',
        exampleHanzi: '白色和黄色的菊花一般都是扫墓时会带的花儿。',
        examplePinyin: 'Báisè hé huángsè de júhuā yìbān dōu shì sǎomù shí huì dài de huār.',
        exampleTranslation: 'White and yellow chrysanthemums are generally flowers brought when sweeping tombs.',
      },
      {
        hanzi: '特别',
        pinyin: 'tèbié',
        english: 'especially / in particular; special',
        exampleHanzi: '最好不送菊花，特别是白色和黄色的菊花。',
        examplePinyin: 'Zuìhǎo bú sòng júhuā, tèbié shì báisè hé huángsè de júhuā.',
        exampleTranslation: 'It is best not to give chrysanthemums, especially white and yellow ones.',
      },
      {
        hanzi: '明白',
        pinyin: 'míngbai',
        english: 'to understand / clear',
        exampleHanzi: '吉利的都比不吉利的好，你明白了吗？',
        examplePinyin: 'Jílì de dōu bǐ bù jílì de hǎo, nǐ míngbai le ma?',
        exampleTranslation: 'Auspicious gifts are always better than inauspicious ones—do you understand now?',
      },
    ],
    grammarPoint: 'Homophonic Symbolism (有……的意思 / 发音一样) & Cultural Advice (不能 / 最好不)',
    structure: 'X 有 “Y” 的意思 | A 和 B 发音一样 | 不能 + V | 最好 (不) + V',
    explanation:
      'Cultural Reader 2 illustrates how homophones shape Chinese gift-giving etiquette (苹果 → 平安, 橘子 → 吉利, 梨 = 离) and how to express cultural taboos and polite advice using 不能 and 最好(不).',
    examples: [
      {
        hanzi: '苹果有“平安”的意思；橘子有“吉利”的意思。',
        pinyin: 'Píngguǒ yǒu “píng’ān” de yìsi; júzi yǒu “jílì” de yìsi.',
        translation: 'Apples carry the meaning of "peace and safety"; tangerines carry the meaning of "good fortune."',
      },
      {
        hanzi: '在中国，送礼物最重要的就是送吉利，吉利的都比不吉利的好。',
        pinyin: 'Zài Zhōngguó, sòng lǐwù zuì zhòngyào de jiùshì sòng jílì, jílì de dōu bǐ bù jílì de hǎo.',
        translation: 'In China, the most important thing when giving gifts is to give good fortune—anything auspicious is better than something inauspicious.',
      },
    ],
    grammarNotes: [
      {
        title: 'Homophonic Symbolism in Chinese Culture: X 有 “Y” 的意思 / 发音一样',
        structure: '[Object] + 有 “[Auspicious Concept]” 的意思  |  A 和 B 发音一样',
        explanation:
          'Chinese gift culture places great weight on homophones (谐音 xiéyīn—words that share the same or similar pronunciation). Apples (苹果 píngguǒ) echo 平安 (píng’ān, peace and safety), and tangerines (橘子 júzi) echo 吉利 (jílì, good luck). Conversely, pears (梨 lí) are avoided as gifts between friends or family—especially when visiting patients or newlyweds—because 梨 is a homophone of 离 (lí, to part or separate).',
        examples: [
          {
            hanzi: '苹果有“平安”的意思；橘子有“吉利”的意思。',
            pinyin: 'Píngguǒ yǒu “píng’ān” de yìsi; júzi yǒu “jílì” de yìsi.',
            translation: 'Apples carry the meaning of "peace and safety"; tangerines carry the meaning of "good fortune."',
          },
          {
            hanzi: '带梨就不好，因为“梨”和“离”发音一样，不吉利。',
            pinyin: 'Dài lí jiù bù hǎo, yīnwèi “lí” hé “lí” fāyīn yíyàng, bù jílì.',
            translation: 'Bringing pears is not good, because "pear" and "separation" have the same pronunciation, which is inauspicious.',
          },
        ],
      },
      {
        title: 'Giving Advice & Warnings: 不能 + V and 最好 (不) + V',
        structure: '不能 + Verb (must not / cannot)  |  最好 (不) + Verb (had better [not])',
        explanation:
          'When explaining cultural taboos or polite etiquette, 不能 + Verb states a strong social prohibition ("must not / cannot do"), whereas 最好 + (不) + Verb gives tactful advice ("it is best [not] to... / you had better [not]...").',
        examples: [
          {
            hanzi: '在中国，不能送白色的花儿，最好也不送菊花。',
            pinyin: 'Zài Zhōngguó, bù néng sòng báisè de huār, zuìhǎo yě bú sòng júhuā.',
            translation: 'In China, you must not give white flowers, and it is best not to give chrysanthemums either.',
          },
        ],
      },
    ],
    exercises: [
      {
        question: 'Why are apples (苹果) and tangerines (橘子) popular gifts when visiting a friend’s home in China?',
        options: [
          'Because 苹果 sounds like 平安 (peace and safety) and 橘子 sounds like 吉利 (good fortune).',
          'Because they are the only fruits sold in Chinese supermarkets.',
          'Because they are used exclusively for tomb-sweeping on Qingming Festival.',
          'Because they are sour and spicy.',
        ],
        answerIndex: 0,
        explanation:
          'The passage explains: “苹果有‘平安’的意思；橘子有‘吉利’的意思。” Their names echo auspicious blessings.',
      },
      {
        question: 'Why is bringing pears (梨 lí) to a friend’s house considered inauspicious in Chinese culture?',
        options: [
          'Because “梨” (lí, pear) has the exact same pronunciation as “离” (lí, separation).',
          'Because pears are too expensive in winter.',
          'Because pears are white on the inside.',
          'Because pears cannot be shared with friends.',
        ],
        answerIndex: 0,
        explanation:
          '“带梨就不好，因为‘梨’和‘离’发音一样，不吉利。” Sharing or gifting pears evokes parting/separation (分梨 = 分离).',
      },
      {
        question: 'Which flowers should you AVOID giving when visiting a friend’s home in China, and why?',
        options: [
          'White flowers and white or yellow chrysanthemums (菊花), because they are traditionally used for tomb-sweeping (扫墓).',
          'Red roses, because red is an unlucky color in China.',
          'All flowers, because Chinese people never give flowers as gifts.',
          'Pink flowers, because they are only for restaurants.',
        ],
        answerIndex: 0,
        explanation:
          'The passage notes: “在中国，不能送白色的花儿，最好也不送菊花，特别是白色和黄色的菊花，这两种一般都是扫墓时会带的花儿。”',
      },
      {
        question: 'Complete the summary sentence from Cultural Reader 2: “在中国，送礼物最重要的就是送________，吉利的都________不吉利的好。”',
        promptHanzi: '在中国，送礼物最重要的就是送________，吉利的都________不吉利的好。',
        promptPinyin: 'Zài Zhōngguó, sòng lǐwù zuì zhòngyào de jiùshì sòng ________, jílì de dōu ________ bù jílì de hǎo.',
        options: [
          '吉利 …… 比 (jílì ... bǐ)',
          '便宜 …… 没有 (piányi ... méiyǒu)',
          '菊花 …… 很 (júhuā ... hěn)',
          '零钱 …… 太 (língqián ... tài)',
        ],
        answerIndex: 0,
        explanation:
          'The passage concludes: “在中国，送礼物最重要的就是送吉利，吉利的都比不吉利的好，你明白了吗？”',
      },
    ],
  },
  {
    "id": "lesson9",
    "title": "Lesson 7: How Did You Go There? — 第7课：你怎么去的",
    "chineseTitle": "第7课：你怎么去的",
    "unitBadge": "Mastering Chinese · Elementary 3 (会通汉语 精编版·初级3)",
    "description": "Learn how to talk about past experiences using V+过, emphasize quick or early actions with 就, state duration of past or completed actions, and highlight the time, place, transportation, or companion of a completed event using the (是…)的 structure.",
    "content": "Past Experiences (V+过), Modes of Transportation, Time Duration & The (是…)的 Construction. Learn how to talk about past experiences using V+过, emphasize quick or early actions with 就, state duration of past or completed actions, and highlight the time, place, transportation, or companion of a completed event using the (是…)的 structure.",
    "hskLevel": 3,
    "objectives": [
      "Talk about past experiences and whether something has ever happened using V + 过 (+ N) and its negative form 没 + V + 过 (+ N).",
      "Express that an action happened quickly or early using [short/early time] + 就 + V (+ 了) (e.g., 一会儿就写完了, 两年前就学过了).",
      "Ask and answer how long an activity lasted using V + 过/了 + 多长时间 (+ N) and distinguish points in time (时点) from durations (时段).",
      "Highlight the time, place, mode of transportation (坐出租车, 坐飞机, 坐火车, 骑自行车, 开车), or companion of a past event using (是 +) … 的, and form rhetorical questions with 不是……吗？."
    ],
    "phoneticsAndCharacters": {
      "title": "Section 1 & 2 · Phonetics, Character Structure & Radicals (第7课：你怎么去的)",
      "sections": [
        {
          "subtitle": "Pictophonetic Characters (形声字 — Semantic Radical + Phonetic Component)",
          "summary": "Over 90% of Chinese characters are pictophonetic compounds (形声字). One component—the semantic radical (形旁)—indicates the general meaning category, while the other—the phonetic component (声旁)—gives a clue to the pronunciation.",
          "items": [
            {
              "label": "饭 (fàn · meal / cooked rice)",
              "pinyin": "饣 (food radical) + 反 (fǎn, phonetic)",
              "examples": "Meaning relates to food (饣); pronunciation echoes 反 (fǎn → fàn).",
              "detail": "Meaning relates to food (饣); pronunciation echoes 反 (fǎn → fàn). — Left-side semantic radical + right-side phonetic component"
            },
            {
              "label": "问 (wèn · to ask)",
              "pinyin": "口 (mouth radical) + 门 (mén, phonetic)",
              "examples": "Asking uses the mouth (口); pronunciation is close to 门 (mén → wèn).",
              "detail": "Asking uses the mouth (口); pronunciation is close to 门 (mén → wèn). — Outer phonetic frame (门) + inner semantic radical (口)"
            },
            {
              "label": "期 (qī · period / phase)",
              "pinyin": "月 (moon / time radical) + 其 (qí, phonetic)",
              "examples": "星期 (xīngqī, week); meaning relates to lunar time (月), sound matches 其 (qí → qī).",
              "detail": "星期 (xīngqī, week); meaning relates to lunar time (月), sound matches 其 (qí → qī). — Left-side phonetic (其) + right-side semantic (月)"
            },
            {
              "label": "Character Riddles (猜字游戏 · Radical + Phonetic)",
              "pinyin": "氵+气=汽 (qì) · 亻+十=什 (shén) · 亻+门=们 (men) · 氵+票=漂 (piào) · 亻+乍=作 (zuò)",
              "examples": "汽水 (qìshuǐ), 什么 (shénme), 我们 (wǒmen), 漂亮 (piàoliang), 作业 (zuòyè)",
              "detail": "汽水 (qìshuǐ), 什么 (shénme), 我们 (wǒmen), 漂亮 (piàoliang), 作业 (zuòyè) — Recognize the shared phonetic clue while checking the radical for meaning"
            }
          ]
        },
        {
          "subtitle": "Four Essential Radicals: 饣, 讠, 木, and 扌(常用的偏旁)",
          "summary": "Mastering these four high-frequency radicals helps you immediately infer whether a character relates to food, language/speech, trees/wood, or hand actions.",
          "items": [
            {
              "label": "饣 (食字旁 · Food & Diet Radical)",
              "pinyin": "Usually on the left side of characters related to food or eating",
              "examples": "饭 (fàn, meal), 饱 (bǎo, full after eating), 饿 (è, hungry), 饺 (jiǎo, dumpling)",
              "detail": "饭 (fàn, meal), 饱 (bǎo, full after eating), 饿 (è, hungry), 饺 (jiǎo, dumpling) — Derived from 食 (shí, food / to eat)"
            },
            {
              "label": "讠 (言字旁 · Speech & Language Radical)",
              "pinyin": "Usually on the left side of characters related to speaking or language",
              "examples": "请 (qǐng, please/invite), 谢 (xiè, thank), 语 (yǔ, language), 话 (huà, speech), 认 (rèn, recognize), 识 (shí, know)",
              "detail": "请 (qǐng, please/invite), 谢 (xiè, thank), 语 (yǔ, language), 话 (huà, speech), 认 (rèn, recognize), 识 (shí, know) — Derived from 言 (yán, words / speech)"
            },
            {
              "label": "木 (木字旁 · Tree & Wood Radical)",
              "pinyin": "Appears on the left, bottom, or top of characters related to trees or wooden objects",
              "examples": "杯 (bēi, cup), 机 (jī, machine/loom), 梨 (lí, pear), 桌 (zhuō, table), 楼 (lóu, building)",
              "detail": "杯 (bēi, cup), 机 (jī, machine/loom), 梨 (lí, pear), 桌 (zhuō, table), 楼 (lóu, building) — Pictograph of a tree with branches and roots"
            },
            {
              "label": "扌 (提手旁 · Hand & Action Radical)",
              "pinyin": "Usually on the left side of characters denoting actions performed with the hands",
              "examples": "打 (dǎ, hit/play/call), 接 (jiē, receive/pick up), 找 (zhǎo, look for), 拍 (pāi, take a photo/clap)",
              "detail": "打 (dǎ, hit/play/call), 接 (jiē, receive/pick up), 找 (zhǎo, look for), 拍 (pāi, take a photo/clap) — Derived from 手 (shǒu, hand)"
            }
          ]
        }
      ]
    },
    "dialogue": [
      {
        "character": "阿里",
        "hanzi": "明天有考试，我们一起做作业吧。我来说，你来听和写，怎么样？",
        "pinyin": "Míngtiān yǒu kǎoshì, wǒmen yìqǐ zuò zuòyè ba. Wǒ lái shuō, nǐ lái tīng hé xiě, zěnmeyàng?",
        "translation": "There is a test tomorrow; let’s do our homework together. I’ll speak, and you listen and write—how about that?"
      },
      {
        "character": "金志英",
        "hanzi": "太好了！你说吧。",
        "pinyin": "Tài hǎo le! Nǐ shuō ba.",
        "translation": "Great! Go ahead and say them."
      },
      {
        "character": "阿里",
        "hanzi": "“走”。",
        "pinyin": "“Zǒu”.",
        "translation": "“Zǒu” (to walk / leave)."
      },
      {
        "character": "金志英",
        "hanzi": "“走”？学过吗？",
        "pinyin": "“Zǒu”? Xuéguo ma?",
        "translation": "“Zǒu”? Have we learned it before?"
      },
      {
        "character": "阿里",
        "hanzi": "学过，你看。",
        "pinyin": "Xuéguo, nǐ kàn.",
        "translation": "Yes, we have—look."
      },
      {
        "character": "金志英",
        "hanzi": "哦，对对对，我忘了。一共多少个汉字？",
        "pinyin": "Ò, duì duì duì, wǒ wàng le. Yígòng duōshao gè Hànzì?",
        "translation": "Oh, right, right, I forgot. How many Chinese characters are there altogether?"
      },
      {
        "character": "阿里",
        "hanzi": "三十六个。",
        "pinyin": "Sānshíliù gè.",
        "translation": "Thirty-six."
      },
      {
        "character": "金志英",
        "hanzi": "那一会儿就写完了！写完作业我们一起看电影，好不好？",
        "pinyin": "Nà yíhuìr jiù xiěwán le! Xiěwán zuòyè wǒmen yìqǐ kàn diànyǐng, hǎo bu hǎo?",
        "translation": "Then we’ll finish writing them in just a moment! After finishing homework, let’s watch a movie together, okay?"
      },
      {
        "character": "阿里",
        "hanzi": "好啊！你以前学过汉语吗？",
        "pinyin": "Hǎo a! Nǐ yǐqián xuéguo Hànyǔ ma?",
        "translation": "Sure! Have you studied Chinese before?"
      },
      {
        "character": "金志英",
        "hanzi": "学过。",
        "pinyin": "Xuéguo.",
        "translation": "Yes, I have."
      },
      {
        "character": "阿里",
        "hanzi": "学过多长时间？",
        "pinyin": "Xuéguo duō cháng shíjiān?",
        "translation": "How long did you study it?"
      },
      {
        "character": "金志英",
        "hanzi": "学过三个月。",
        "pinyin": "Xuéguo sān gè yuè.",
        "translation": "I studied it for three months."
      },
      {
        "character": "阿里",
        "hanzi": "什么时候学的？",
        "pinyin": "Shénme shíhou xué de?",
        "translation": "When did you study it?"
      },
      {
        "character": "金志英",
        "hanzi": "两年前学的。",
        "pinyin": "Liǎng nián qián xué de.",
        "translation": "I studied it two years ago."
      },
      {
        "character": "阿里",
        "hanzi": "两年前就学过了？那么早啊！在中国学的吗？",
        "pinyin": "Liǎng nián qián jiù xuéguo le? Nàme zǎo a! Zài Zhōngguó xué de ma?",
        "translation": "You already studied it two years ago? That early! Did you study it in China?"
      },
      {
        "character": "金志英",
        "hanzi": "不是，在韩国的学院学的。",
        "pinyin": "Bú shì, zài Hánguó de xuéyuàn xué de.",
        "translation": "No, I studied it at an institute in Korea."
      }
    ],
    "dialogues": [
      {
        "title": "Dialogue 1: Reviewing Characters Before an Exam & Past Mandarin Study (阿里 & 金志英)",
        "context": "Ali (阿里) and Jin Zhiying (金志英) practice dictating 36 Chinese characters together for tomorrow’s test and talk about when and where Jin Zhiying first studied Mandarin.",
        "lines": [
          {
            "character": "阿里",
            "hanzi": "明天有考试，我们一起做作业吧。我来说，你来听和写，怎么样？",
            "pinyin": "Míngtiān yǒu kǎoshì, wǒmen yìqǐ zuò zuòyè ba. Wǒ lái shuō, nǐ lái tīng hé xiě, zěnmeyàng?",
            "translation": "There is a test tomorrow; let’s do our homework together. I’ll speak, and you listen and write—how about that?"
          },
          {
            "character": "金志英",
            "hanzi": "太好了！你说吧。",
            "pinyin": "Tài hǎo le! Nǐ shuō ba.",
            "translation": "Great! Go ahead and say them."
          },
          {
            "character": "阿里",
            "hanzi": "“走”。",
            "pinyin": "“Zǒu”.",
            "translation": "“Zǒu” (to walk / leave)."
          },
          {
            "character": "金志英",
            "hanzi": "“走”？学过吗？",
            "pinyin": "“Zǒu”? Xuéguo ma?",
            "translation": "“Zǒu”? Have we learned it before?"
          },
          {
            "character": "阿里",
            "hanzi": "学过，你看。",
            "pinyin": "Xuéguo, nǐ kàn.",
            "translation": "Yes, we have—look."
          },
          {
            "character": "金志英",
            "hanzi": "哦，对对对，我忘了。一共多少个汉字？",
            "pinyin": "Ò, duì duì duì, wǒ wàng le. Yígòng duōshao gè Hànzì?",
            "translation": "Oh, right, right, I forgot. How many Chinese characters are there altogether?"
          },
          {
            "character": "阿里",
            "hanzi": "三十六个。",
            "pinyin": "Sānshíliù gè.",
            "translation": "Thirty-six."
          },
          {
            "character": "金志英",
            "hanzi": "那一会儿就写完了！写完作业我们一起看电影，好不好？",
            "pinyin": "Nà yíhuìr jiù xiěwán le! Xiěwán zuòyè wǒmen yìqǐ kàn diànyǐng, hǎo bu hǎo?",
            "translation": "Then we’ll finish writing them in just a moment! After finishing homework, let’s watch a movie together, okay?"
          },
          {
            "character": "阿里",
            "hanzi": "好啊！你以前学过汉语吗？",
            "pinyin": "Hǎo a! Nǐ yǐqián xuéguo Hànyǔ ma?",
            "translation": "Sure! Have you studied Chinese before?"
          },
          {
            "character": "金志英",
            "hanzi": "学过。",
            "pinyin": "Xuéguo.",
            "translation": "Yes, I have."
          },
          {
            "character": "阿里",
            "hanzi": "学过多长时间？",
            "pinyin": "Xuéguo duō cháng shíjiān?",
            "translation": "How long did you study it?"
          },
          {
            "character": "金志英",
            "hanzi": "学过三个月。",
            "pinyin": "Xuéguo sān gè yuè.",
            "translation": "I studied it for three months."
          },
          {
            "character": "阿里",
            "hanzi": "什么时候学的？",
            "pinyin": "Shénme shíhou xué de?",
            "translation": "When did you study it?"
          },
          {
            "character": "金志英",
            "hanzi": "两年前学的。",
            "pinyin": "Liǎng nián qián xué de.",
            "translation": "I studied it two years ago."
          },
          {
            "character": "阿里",
            "hanzi": "两年前就学过了？那么早啊！在中国学的吗？",
            "pinyin": "Liǎng nián qián jiù xuéguo le? Nàme zǎo a! Zài Zhōngguó xué de ma?",
            "translation": "You already studied it two years ago? That early! Did you study it in China?"
          },
          {
            "character": "金志英",
            "hanzi": "不是，在韩国的学院学的。",
            "pinyin": "Bú shì, zài Hánguó de xuéyuàn xué de.",
            "translation": "No, I studied it at an institute in Korea."
          }
        ]
      },
      {
        "title": "Dialogue 2: Buying a Qipao on Culture Street & Travelling to Beijing (马克 & 莉莉)",
        "context": "Mark (马克) admires Lily’s (莉莉) new qipao bought on Culture Street, and they compare Mark’s childhood flight to Beijing with his recent solo train trip.",
        "lines": [
          {
            "character": "马克",
            "hanzi": "好漂亮啊！这叫旗袍吧？在哪儿买的？",
            "pinyin": "Hǎo piàoliang a! Zhè jiào qípáo ba? Zài nǎr mǎi de?",
            "translation": "How beautiful! This is called a qipao, right? Where did you buy it?"
          },
          {
            "character": "莉莉",
            "hanzi": "好看吧？在文化街买的。",
            "pinyin": "Hǎokàn ba? Zài Wénhuàjiē mǎi de.",
            "translation": "Looks nice, doesn’t it? I bought it on Culture Street."
          },
          {
            "character": "马克",
            "hanzi": "文化街？远吗？怎么去那儿的？",
            "pinyin": "Wénhuàjiē? Yuǎn ma? Zěnme qù nàr de?",
            "translation": "Culture Street? Is it far? How did you get there?"
          },
          {
            "character": "莉莉",
            "hanzi": "不远，我是坐出租车去的。你不是去北京了吗？什么时候回来的？",
            "pinyin": "Bù yuǎn, wǒ shì zuò chūzūchē qù de. Nǐ bú shì qù Běijīng le ma? Shénme shíhou huílái de?",
            "translation": "Not far—I went by taxi. Didn’t you go to Beijing? When did you come back?"
          },
          {
            "character": "马克",
            "hanzi": "昨天。你看，这是我在北京拍的照片。",
            "pinyin": "Zuótiān. Nǐ kàn, zhè shì wǒ zài Běijīng pāi de zhàopiàn.",
            "translation": "Yesterday. Look, these are the photos I took in Beijing."
          },
          {
            "character": "莉莉",
            "hanzi": "真好！你以前去过北京吗？",
            "pinyin": "Zhēn hǎo! Nǐ yǐqián qùguo Běijīng ma?",
            "translation": "They’re great! Had you ever been to Beijing before?"
          },
          {
            "character": "马克",
            "hanzi": "去过，十年前跟爸爸一起坐飞机去的。",
            "pinyin": "Qùguo, shí nián qián gēn bàba yìqǐ zuò fēijī qù de.",
            "translation": "Yes, I went ten years ago with my dad by plane."
          },
          {
            "character": "莉莉",
            "hanzi": "哦，坐了多长时间飞机？",
            "pinyin": "Ò, zuòle duō cháng shíjiān fēijī?",
            "translation": "Oh, how long was the flight?"
          },
          {
            "character": "马克",
            "hanzi": "坐了十个小时。",
            "pinyin": "Zuòle shí gè xiǎoshí.",
            "translation": "I was on the plane for ten hours."
          },
          {
            "character": "莉莉",
            "hanzi": "这次跟谁一起去的？",
            "pinyin": "Zhè cì gēn shuí yìqǐ qù de?",
            "translation": "Who did you go with this time?"
          },
          {
            "character": "马克",
            "hanzi": "这次呀，我是自己一个人坐火车去的。怎么样？厉害吧？",
            "pinyin": "Zhè cì ya, wǒ shì zìjǐ yí gè rén zuò huǒchē qù de. Zěnmeyàng? Lìhai ba?",
            "translation": "This time, I went all by myself by train. How about that? Pretty impressive, right?"
          },
          {
            "character": "莉莉",
            "hanzi": "真厉害！",
            "pinyin": "Zhēn lìhai!",
            "translation": "Really impressive!"
          }
        ]
      }
    ],
    "readingPassage": {
      "title": "Reading: Jin Zhiying’s Bicycle Commute & Weekend Travels (金志英骑自行车去学校)",
      "subtitle": "Read the narrative below synthesizing the Section 4 reading tasks about how Jin Zhiying learned to ride a bicycle in China and how her classmates travel and exercise.",
      "paragraphs": [
        {
          "hanzi": "金志英是九月来中国的。她住在一个亲戚家，每天骑自行车去学校，很方便，八点去学校，十分钟就到了。她以前不会骑自行车，来中国以后才学会骑的，是她的朋友莉莉教她的。自行车是在超市买的，她跟莉莉一起去买的。昨天他们有一个考试，金志英考得比同学们好，因为她两年前在韩国的学院学过三个月汉语。",
          "pinyin": "Jīn Zhìyīng shì jiǔyuè lái Zhōngguó de. Tā zhù zài yí gè qīnqi jiā, měitiān qí zìxíngchē qù xuéxiào, hěn fāngbiàn, bā diǎn qù xuéxiào, shí fēnzhōng jiù dào le. Tā yǐqián bú huì qí zìxíngchē, lái Zhōngguó yǐhòu cái xuéhuì qí de, shì tā de péngyou Lìli jiāo tā de. Zìxíngchē shì zài chāoshì mǎi de, tā gēn Lìli yìqǐ qù mǎi de. Zuótiān tāmen yǒu yí gè kǎoshì, Jīn Zhìyīng kǎo de bǐ tóngxuémen hǎo, yīnwèi tā liǎng nián qián zài Hánguó de xuéyuàn xuéguo sān gè yuè Hànyǔ.",
          "translation": "Jin Zhiying came to China in September. She lives at a relative’s home and rides a bicycle to school every day—it is very convenient; she leaves for school at 8:00 and arrives in just ten minutes. She didn’t know how to ride a bicycle before and only learned how after coming to China; her friend Lily taught her. The bicycle was bought at the supermarket, where she and Lily went together to buy it. Yesterday they had a test, and Jin Zhiying did better than her classmates because she had studied Chinese for three months at an institute in Korea two years ago."
        },
        {
          "hanzi": "上个星期六，莉莉跟朋友一起坐火车去了杭州，那儿很漂亮，是十点十分的火车，一个小时就到了，她在那儿拍了很多好看的照片。星期天下午，何大华跟他的表弟在学校踢了两个小时足球，他们都很喜欢运动。",
          "pinyin": "Shàng gè xīngqīliù, Lìli gēn péngyou yìqǐ zuò huǒchē qùle Hángzhōu, nàr hěn piàoliang, shì shí diǎn shí fēn de huǒchē, yí gè xiǎoshí jiù dào le, tā zài nàr pāile hěn duō hǎokàn de zhàopiàn. Xīngqītiān xiàwǔ, Hé Dàhuá gēn tā de biǎodì zài xuéxiào tīle liǎng gè xiǎoshí zúqiú, tāmen dōu hěn xǐhuan yùndòng.",
          "translation": "Last Saturday, Lily took the train to Hangzhou with her friend. It is very beautiful there; it was the 10:10 train and arrived in just one hour, and she took many nice photos there. On Sunday afternoon, He Dahua played soccer at school with his younger male cousin for two hours; they both love sports."
        }
      ]
    },
    "vocabularyExplanation": [
      {
        "hanzi": "考试",
        "pinyin": "kǎoshì",
        "english": "exam; test; to take an exam",
        "partOfSpeech": "n. / v.",
        "exampleHanzi": "明天有汉语考试，我们一起复习吧。",
        "examplePinyin": "Míngtiān yǒu Hànyǔ kǎoshì, wǒmen yìqǐ fùxí ba.",
        "exampleTranslation": "There is a Chinese test tomorrow; let’s review together."
      },
      {
        "hanzi": "听",
        "pinyin": "tīng",
        "english": "to listen; to hear",
        "partOfSpeech": "v.",
        "exampleHanzi": "我来说，你来听和写。",
        "examplePinyin": "Wǒ lái shuō, nǐ lái tīng hé xiě.",
        "exampleTranslation": "I will speak, and you listen and write."
      },
      {
        "hanzi": "写",
        "pinyin": "xiě",
        "english": "to write",
        "partOfSpeech": "v.",
        "exampleHanzi": "这三十六个汉字你都会写吗？",
        "examplePinyin": "Zhè sānshíliù gè Hànzì nǐ dōu huì xiě ma?",
        "exampleTranslation": "Can you write all thirty-six of these Chinese characters?"
      },
      {
        "hanzi": "走",
        "pinyin": "zǒu",
        "english": "to walk; to go; to leave",
        "partOfSpeech": "v.",
        "exampleHanzi": "时间不早了，我们走吧。",
        "examplePinyin": "Shíjiān bù zǎo le, wǒmen zǒu ba.",
        "exampleTranslation": "It’s getting late; let’s go."
      },
      {
        "hanzi": "过",
        "pinyin": "guo",
        "english": "(experiential aspect particle) ever; have done before",
        "partOfSpeech": "part.",
        "exampleHanzi": "你以前学过汉语吗？",
        "examplePinyin": "Nǐ yǐqián xuéguo Hànyǔ ma?",
        "exampleTranslation": "Have you studied Chinese before?"
      },
      {
        "hanzi": "忘",
        "pinyin": "wàng",
        "english": "to forget",
        "partOfSpeech": "v.",
        "exampleHanzi": "对不起，我忘了他的名字。",
        "examplePinyin": "Duìbuqǐ, wǒ wàngle tā de míngzi.",
        "exampleTranslation": "Sorry, I forgot his name."
      },
      {
        "hanzi": "汉字",
        "pinyin": "Hànzì",
        "english": "Chinese character(s)",
        "partOfSpeech": "n.",
        "exampleHanzi": "每天写十个汉字，就不容易忘。",
        "examplePinyin": "Měitiān xiě shí gè Hànzì, jiù bù róngyì wàng.",
        "exampleTranslation": "If you write ten Chinese characters every day, you won’t easily forget them."
      },
      {
        "hanzi": "一会儿",
        "pinyin": "yíhuìr",
        "english": "a short while; a moment",
        "partOfSpeech": "n.",
        "exampleHanzi": "只有三十六个汉字，一会儿就写完了。",
        "examplePinyin": "Zhǐyǒu sānshíliù gè Hànzì, yíhuìr jiù xiěwán le.",
        "exampleTranslation": "There are only thirty-six characters; we’ll finish writing them in a moment."
      },
      {
        "hanzi": "就",
        "pinyin": "jiù",
        "english": "soon; right away; as early as",
        "partOfSpeech": "adv.",
        "exampleHanzi": "她两年前就学过汉语了。",
        "examplePinyin": "Tā liǎng nián qián jiù xuéguo Hànyǔ le.",
        "exampleTranslation": "She already studied Chinese as early as two years ago."
      },
      {
        "hanzi": "完",
        "pinyin": "wán",
        "english": "to finish; to complete",
        "partOfSpeech": "v.",
        "exampleHanzi": "写完作业我们一起看电影，好不好？",
        "examplePinyin": "Xiěwán zuòyè wǒmen yìqǐ kàn diànyǐng, hǎo bu hǎo?",
        "exampleTranslation": "After finishing our homework, let’s watch a movie together, okay?"
      },
      {
        "hanzi": "以前",
        "pinyin": "yǐqián",
        "english": "before; previously; in the past",
        "partOfSpeech": "n.",
        "exampleHanzi": "你以前去过北京吗？",
        "examplePinyin": "Nǐ yǐqián qùguo Běijīng ma?",
        "exampleTranslation": "Have you ever been to Beijing before?"
      },
      {
        "hanzi": "学院",
        "pinyin": "xuéyuàn",
        "english": "college; institute; academy",
        "partOfSpeech": "n.",
        "exampleHanzi": "我是在韩国的学院学的汉语。",
        "examplePinyin": "Wǒ shì zài Hánguó de xuéyuàn xué de Hànyǔ.",
        "exampleTranslation": "I studied Chinese at an institute in Korea."
      },
      {
        "hanzi": "旗袍",
        "pinyin": "qípáo",
        "english": "qipao; cheongsam (traditional form-fitting Chinese dress)",
        "partOfSpeech": "n.",
        "exampleHanzi": "这件旗袍真漂亮，在哪儿买的？",
        "examplePinyin": "Zhè jiàn qípáo zhēn piàoliang, zài nǎr mǎi de?",
        "exampleTranslation": "This qipao is really beautiful; where did you buy it?"
      },
      {
        "hanzi": "好看",
        "pinyin": "hǎokàn",
        "english": "good-looking; pretty; interesting (of a movie/book)",
        "partOfSpeech": "adj.",
        "exampleHanzi": "你在文化街买的旗袍真好看！",
        "examplePinyin": "Nǐ zài Wénhuàjiē mǎi de qípáo zhēn hǎokàn!",
        "exampleTranslation": "The qipao you bought on Culture Street is really pretty!"
      },
      {
        "hanzi": "怎么",
        "pinyin": "zěnme",
        "english": "how; by what means; why",
        "partOfSpeech": "pron.",
        "exampleHanzi": "文化街远吗？你怎么去那儿的？",
        "examplePinyin": "Wénhuàjiē yuǎn ma? Nǐ zěnme qù nàr de?",
        "exampleTranslation": "Is Culture Street far? How did you get there?"
      },
      {
        "hanzi": "坐",
        "pinyin": "zuò",
        "english": "to sit; to travel by (bus, train, plane, taxi, subway)",
        "partOfSpeech": "v.",
        "exampleHanzi": "我是坐出租车去文化街的。",
        "examplePinyin": "Wǒ shì zuò chūzūchē qù Wénhuàjiē de.",
        "exampleTranslation": "I went to Culture Street by taxi."
      },
      {
        "hanzi": "出租车",
        "pinyin": "chūzūchē",
        "english": "taxi; cab",
        "partOfSpeech": "n.",
        "exampleHanzi": "坐出租车去那儿只要十五块钱。",
        "examplePinyin": "Zuò chūzūchē qù nàr zhǐ yào shíwǔ kuài qián.",
        "exampleTranslation": "Taking a taxi there only costs fifteen yuan."
      },
      {
        "hanzi": "开车",
        "pinyin": "kāichē",
        "english": "to drive a car",
        "partOfSpeech": "v.",
        "exampleHanzi": "今天早上我是开车来的。",
        "examplePinyin": "Jīntiān zǎoshang wǒ shì kāichē lái de.",
        "exampleTranslation": "I came by driving a car this morning."
      },
      {
        "hanzi": "骑",
        "pinyin": "qí",
        "english": "to ride (a straddled vehicle or animal, e.g., bicycle, horse, motorbike)",
        "partOfSpeech": "v.",
        "exampleHanzi": "她每天骑自行车去学校。",
        "examplePinyin": "Tā měitiān qí zìxíngchē qù xuéxiào.",
        "exampleTranslation": "She rides a bicycle to school every day."
      },
      {
        "hanzi": "自行车",
        "pinyin": "zìxíngchē",
        "english": "bicycle; bike",
        "partOfSpeech": "n.",
        "exampleHanzi": "这辆自行车是在超市买的。",
        "examplePinyin": "Zhè liàng zìxíngchē shì zài chāoshì mǎi de.",
        "exampleTranslation": "This bicycle was bought at the supermarket."
      },
      {
        "hanzi": "回来",
        "pinyin": "huílái",
        "english": "to come back; to return (toward the speaker)",
        "partOfSpeech": "v.",
        "exampleHanzi": "你不是去北京了吗？什么时候回来的？",
        "examplePinyin": "Nǐ bú shì qù Běijīng le ma? Shénme shíhou huílái de?",
        "exampleTranslation": "Didn’t you go to Beijing? When did you come back?"
      },
      {
        "hanzi": "拍",
        "pinyin": "pāi",
        "english": "to take (a photo); to shoot (a film); to clap/pat",
        "partOfSpeech": "v.",
        "exampleHanzi": "这是我在北京拍的照片。",
        "examplePinyin": "Zhè shì wǒ zài Běijīng pāi de zhàopiàn.",
        "exampleTranslation": "These are the photos I took in Beijing."
      },
      {
        "hanzi": "照片",
        "pinyin": "zhàopiàn",
        "english": "photograph; picture; photo",
        "partOfSpeech": "n.",
        "exampleHanzi": "这张照片是在哪儿拍的？",
        "examplePinyin": "Zhè zhāng zhàopiàn shì zài nǎr pāi de?",
        "exampleTranslation": "Where was this photo taken?"
      },
      {
        "hanzi": "跟",
        "pinyin": "gēn",
        "english": "with; together with",
        "partOfSpeech": "prep.",
        "exampleHanzi": "十年前我跟爸爸一起坐飞机去过北京。",
        "examplePinyin": "Shí nián qián wǒ gēn bàba yìqǐ zuò fēijī qùguo Běijīng.",
        "exampleTranslation": "Ten years ago I went to Beijing by plane with my dad."
      },
      {
        "hanzi": "飞机",
        "pinyin": "fēijī",
        "english": "airplane; aircraft",
        "partOfSpeech": "n.",
        "exampleHanzi": "从这儿去北京，坐飞机只要两个小时。",
        "examplePinyin": "Cóng zhèr qù Běijīng, zuò fēijī zhǐ yào liǎng gè xiǎoshí.",
        "exampleTranslation": "Going to Beijing from here takes only two hours by plane."
      },
      {
        "hanzi": "自己",
        "pinyin": "zìjǐ",
        "english": "oneself; by oneself",
        "partOfSpeech": "pron.",
        "exampleHanzi": "这次我是自己一个人坐火车去的。",
        "examplePinyin": "Zhè cì wǒ shì zìjǐ yí gè rén zuò huǒchē qù de.",
        "exampleTranslation": "This time I went all by myself by train."
      },
      {
        "hanzi": "火车",
        "pinyin": "huǒchē",
        "english": "train",
        "partOfSpeech": "n.",
        "exampleHanzi": "坐火车去旅游既舒服又便宜。",
        "examplePinyin": "Zuò huǒchē qù lǚyóu jì shūfu yòu piányi.",
        "exampleTranslation": "Traveling by train is both comfortable and inexpensive."
      },
      {
        "hanzi": "厉害",
        "pinyin": "lìhai",
        "english": "awesome; impressive; formidable; severe",
        "partOfSpeech": "adj.",
        "exampleHanzi": "你自己一个人去北京，真厉害！",
        "examplePinyin": "Nǐ zìjǐ yí gè rén qù Běijīng, zhēn lìhai!",
        "exampleTranslation": "You went to Beijing all by yourself—that’s really impressive!"
      },
      {
        "hanzi": "方便",
        "pinyin": "fāngbiàn",
        "english": "convenient; handy",
        "partOfSpeech": "adj.",
        "exampleHanzi": "每天骑自行车去学校，很方便。",
        "examplePinyin": "Měitiān qí zìxíngchē qù xuéxiào, hěn fāngbiàn.",
        "exampleTranslation": "Riding a bicycle to school every day is very convenient."
      },
      {
        "hanzi": "教",
        "pinyin": "jiāo",
        "english": "to teach; to instruct",
        "partOfSpeech": "v.",
        "exampleHanzi": "是我的朋友莉莉教我骑自行车的。",
        "examplePinyin": "Shì wǒ de péngyou Lìli jiāo wǒ qí zìxíngchē de.",
        "exampleTranslation": "It was my friend Lily who taught me how to ride a bicycle."
      },
      {
        "hanzi": "踢足球",
        "pinyin": "tī zúqiú",
        "english": "to play soccer / football",
        "partOfSpeech": "v.+o.",
        "exampleHanzi": "何大华跟表弟踢了两个小时足球。",
        "examplePinyin": "Hé Dàhuá gēn biǎodì tīle liǎng gè xiǎoshí zúqiú.",
        "exampleTranslation": "He Dahua played soccer with his younger cousin for two hours."
      }
    ],
    "grammarPoint": "Past Experiences (V+过), Modes of Transportation, Time Duration & The (是…)的 Construction",
    "structure": "Subject (+ 以前) + Verb + 过 (+ Object)  |  Negative: Subject (+ 以前) + 没 + Verb + 过 (+ Object)  |  (Subject +) Time Duration / Early Point in Time + 就 + Verb (+ 了)  |  Subject + Verb + 过 / 了 + [Duration: 多长时间 / 三个月 / 十个小时] (+ Object)  |  Subject + (是) + [Time / 在 Place / Mode of Transport / 跟 Companion] + Verb + 的  |  不是 + Verb / Clause (+ 了) + 吗？  |  不 / 没 + Verb …… 吗？",
    "explanation": "Learn how to talk about past experiences using V+过, emphasize quick or early actions with 就, state duration of past or completed actions, and highlight the time, place, transportation, or companion of a completed event using the (是…)的 structure.",
    "examples": [
      {
        "hanzi": "你以前学过汉语吗？——我以前学过汉语。",
        "pinyin": "Nǐ yǐqián xuéguo Hànyǔ ma? — Wǒ yǐqián xuéguo Hànyǔ.",
        "translation": "Have you studied Chinese before? — I have studied Chinese before."
      },
      {
        "hanzi": "我以前没去过北京，也没吃过北京烤鸭。",
        "pinyin": "Wǒ yǐqián méi qùguo Běijīng, yě méi chīguo Běijīng kǎoyā.",
        "translation": "I have never been to Beijing before, nor have I ever eaten Peking duck."
      },
      {
        "hanzi": "一共三十六个汉字，一会儿就写完了！",
        "pinyin": "Yígòng sānshíliù gè Hànzì, yíhuìr jiù xiěwán le!",
        "translation": "There are thirty-six characters in total—we’ll finish writing them in just a moment!"
      },
      {
        "hanzi": "她八点去学校，十分钟就到了。",
        "pinyin": "Tā bā diǎn qù xuéxiào, shí fēnzhōng jiù dào le.",
        "translation": "She leaves for school at eight o’clock and gets there in just ten minutes."
      }
    ],
    "grammarNotes": [
      {
        "title": "Experiential Aspect: V + 过 (+ N) & Negation 没 + V + 过 (+ N)",
        "structure": "Subject (+ 以前) + Verb + 过 (+ Object)  |  Negative: Subject (+ 以前) + 没 + Verb + 过 (+ Object)",
        "explanation": "Adding the dynamic particle 过 (guo, neutral tone) directly after a verb indicates that an action has occurred at least once in the past as a life experience, without continuing into the present. To negate it, place 没 (méi) before the verb while keeping 过 after the verb (never use 不 with 过).",
        "examples": [
          {
            "hanzi": "你以前学过汉语吗？——我以前学过汉语。",
            "pinyin": "Nǐ yǐqián xuéguo Hànyǔ ma? — Wǒ yǐqián xuéguo Hànyǔ.",
            "translation": "Have you studied Chinese before? — I have studied Chinese before."
          },
          {
            "hanzi": "我以前没去过北京，也没吃过北京烤鸭。",
            "pinyin": "Wǒ yǐqián méi qùguo Běijīng, yě méi chīguo Běijīng kǎoyā.",
            "translation": "I have never been to Beijing before, nor have I ever eaten Peking duck."
          }
        ]
      },
      {
        "title": "Quick or Early Attainment: [Short / Early Time] + 就 + V (+ 了)",
        "structure": "(Subject +) Time Duration / Early Point in Time + 就 + Verb (+ 了)",
        "explanation": "The adverb 就 (jiù) placed immediately after a duration or point in time expresses the speaker’s view that an action was completed in a very short time or happened earlier than expected.",
        "examples": [
          {
            "hanzi": "一共三十六个汉字，一会儿就写完了！",
            "pinyin": "Yígòng sānshíliù gè Hànzì, yíhuìr jiù xiěwán le!",
            "translation": "There are thirty-six characters in total—we’ll finish writing them in just a moment!"
          },
          {
            "hanzi": "她八点去学校，十分钟就到了。",
            "pinyin": "Tā bā diǎn qù xuéxiào, shí fēnzhōng jiù dào le.",
            "translation": "She leaves for school at eight o’clock and gets there in just ten minutes."
          },
          {
            "hanzi": "你两年前就学过汉语了？那么早啊！",
            "pinyin": "Nǐ liǎng nián qián jiù xuéguo Hànyǔ le? Nàme zǎo a!",
            "translation": "You already studied Chinese two years ago? That early!"
          }
        ]
      },
      {
        "title": "Duration of Past Experience vs. Completed Action: V + 过/了 + [Time Duration] (+ N)",
        "structure": "Subject + Verb + 过 / 了 + [Duration: 多长时间 / 三个月 / 十个小时] (+ Object)",
        "explanation": "Place the time duration (时段, e.g., 三个月, 十个小时, 二十分钟) between V + 过/了 and the object. Use V + 过 + Duration for total past experience at some point in life; use V + 了 + Duration for a specific completed occasion. Be careful to distinguish points in time (时点: 三点, 十月, 星期三 — placed before the verb) from durations (时段: 三个小时, 十个月, 三个星期 — placed after the verb).",
        "examples": [
          {
            "hanzi": "你在韩国学过多长时间汉语？——我学过三个月汉语。",
            "pinyin": "Nǐ zài Hánguó xuéguo duō cháng shíjiān Hànyǔ? — Wǒ xuéguo sān gè yuè Hànyǔ.",
            "translation": "How long did you study Chinese in Korea? — I studied Chinese for three months."
          },
          {
            "hanzi": "你坐了多长时间飞机？——我坐了十个小时飞机。",
            "pinyin": "Nǐ zuòle duō cháng shíjiān fēijī? — Wǒ zuòle shí gè xiǎoshí fēijī.",
            "translation": "How long did you fly on the plane? — I was on the plane for ten hours."
          }
        ]
      },
      {
        "title": "The (是 +) … 的 Construction for Highlighting Time, Place, Transportation & Companion",
        "structure": "Subject + (是) + [Time / 在 Place / Mode of Transport / 跟 Companion] + Verb + 的",
        "explanation": "When both speaker and listener already know that an action took place in the past, use (是 +) … 的 to ask about or emphasize the specific details of how it happened: when (什么时候), where (在哪儿), how/by what transport (怎么 / 坐什么车), or with whom (跟谁一起). In affirmative and interrogative sentences, 是 can be omitted; in negative sentences (不是……的), 是 cannot be omitted.",
        "examples": [
          {
            "hanzi": "这件旗袍是在哪儿买的？——是在文化街买的。",
            "pinyin": "Zhè jiàn qípáo shì zài nǎr mǎi de? — Shì zài Wénhuàjiē mǎi de.",
            "translation": "Where was this qipao bought? — It was bought on Culture Street."
          },
          {
            "hanzi": "你怎么去那儿的？——我是坐出租车去的。",
            "pinyin": "Nǐ zěnme qù nàr de? — Wǒ shì zuò chūzūchē qù de.",
            "translation": "How did you get there? — I went there by taxi."
          },
          {
            "hanzi": "这次我是自己一个人坐火车去的，不是跟爸爸一起去的。",
            "pinyin": "Zhè cì wǒ shì zìjǐ yí gè rén zuò huǒchē qù de, bú shì gēn bàba yìqǐ qù de.",
            "translation": "This time I went by train all by myself, not with my dad."
          }
        ]
      },
      {
        "title": "Rhetorical Questions Expressing Certainty or Surprise: 不是……吗？",
        "structure": "不是 + Verb / Clause (+ 了) + 吗？  |  不 / 没 + Verb …… 吗？",
        "explanation": "Negative-form questions with 不是……吗？ or 不/没……吗？ are frequently used as rhetorical questions to confirm something the speaker believes to be true (\"Didn’t you...?\", \"Isn’t it...?\") or to express mild surprise.",
        "examples": [
          {
            "hanzi": "你不是去北京了吗？什么时候回来的？",
            "pinyin": "Nǐ bú shì qù Běijīng le ma? Shénme shíhou huílái de?",
            "translation": "Didn’t you go to Beijing? When did you come back?"
          },
          {
            "hanzi": "你以前没学过这个汉字吗？",
            "pinyin": "Nǐ yǐqián méi xuéguo zhège Hànzì ma?",
            "translation": "Haven’t you learned this Chinese character before?"
          }
        ]
      }
    ],
    "exercises": [
      {
        "question": "Choose the correct negative form to answer: “你以前去过北京吗？” (Have you ever been to Beijing before?)",
        "options": [
          "我以前没去过北京。 (Wǒ yǐqián méi qùguo Běijīng.)",
          "我以前不去过北京。 (Wǒ yǐqián bú qùguo Běijīng.)",
          "我以前没去北京了。 (Wǒ yǐqián méi qù Běijīng le.)",
          "我以前不是去过北京。 (Wǒ yǐqián bú shì qùguo Běijīng.)"
        ],
        "answerIndex": 0,
        "explanation": "The experiential aspect V + 过 is always negated with 没(有) before the verb while keeping 过 after the verb: 没 + V + 过 (+ O)."
      },
      {
        "question": "Which verb Correctly pairs with “自行车” (zìxíngchē, bicycle) in Mandarin?",
        "promptHanzi": "金志英每天________自行车去学校，十分钟就到了。",
        "promptPinyin": "Jīn Zhìyīng měitiān ________ zìxíngchē qù xuéxiào, shí fēnzhōng jiù dào le.",
        "options": [
          "骑 (qí)",
          "坐 (zuò)",
          "开 (kāi)",
          "打 (dǎ)"
        ],
        "answerIndex": 0,
        "explanation": "Use 骑 (qí) for straddled vehicles like bicycles (骑自行车) and motorbikes; use 坐 (zuò) for taxis, buses, trains, subways, and airplanes; and use 开 (kāi) for driving a car."
      },
      {
        "question": "Select the sentence that correctly places the time duration “十个小时” (ten hours) with “坐飞机”:",
        "options": [
          "我坐了十个小时飞机。 (Wǒ zuòle shí gè xiǎoshí fēijī.)",
          "我十个小时坐了飞机。 (Wǒ shí gè xiǎoshí zuòle fēijī.)",
          "我坐飞机十个小时了昨天。 (Wǒ zuò fēijī shí gè xiǎoshí le zuótiān.)",
          "我是十个小时坐飞机的。 (Wǒ shì shí gè xiǎoshí zuò fēijī de.)"
        ],
        "answerIndex": 0,
        "explanation": "Time duration (时段) is placed after V + 了/过 and before the object noun: Subject + V + 了/过 + [Duration] + Object (坐了十个小时飞机)."
      },
      {
        "question": "When Mark asks Lily “这件旗袍是在哪儿买的？”, why does he use the “(是)…的” structure?",
        "options": [
          "Because both speakers already know the qipao was bought, and Mark wants to highlight the specific place where the past purchase happened.",
          "Because Lily has not bought the qipao yet and plans to buy it tomorrow.",
          "Because 的 turns 买 into an ongoing progressive action.",
          "Because 是……的 is only used for future weather forecasts."
        ],
        "answerIndex": 0,
        "explanation": "The (是 +) … 的 construction is used when a past event is already known and the speaker wants to inquire about or emphasize its time, location, mode of transport, or companion."
      }
    ]
  },
  {
    "id": "lesson10",
    "title": "Lesson 8: Today Is Much Colder Than Yesterday — 第8课：今天比昨天冷多了",
    "chineseTitle": "第8课：今天比昨天冷多了",
    "unitBadge": "Mastering Chinese · Elementary 3 (会通汉语 精编版·初级3)",
    "description": "Discuss weather forecasts, temperatures above and below zero, and seasonal climates across countries while mastering comparative structures (比…多了/一点儿, 更, 跟…一样), imminent change (快…了), and ongoing actions (正…呢 / V+着).",
    "content": "Weather, Seasons, Temperature Comparisons (比 / 更 / 一样) & Progressive Aspect (正…呢 / 着). Discuss weather forecasts, temperatures above and below zero, and seasonal climates across countries while mastering comparative structures (比…多了/一点儿, 更, 跟…一样), imminent change (快…了), and ongoing actions (正…呢 / V+着).",
    "hskLevel": 3,
    "objectives": [
      "Describe weather conditions (刮风, 下雨, 下雪, 晴天, 阴天), four seasons (春, 夏, 秋, 冬), and exact or approximate temperatures (二十度左右, 零下三十五六度).",
      "Distinguish past/actualized repetition (又 + V + 了) from future/unactualized repetition (再 + V).",
      "Compare climates and qualities using (a + Adj,) b + 更 + Adj, a 跟 b + (不)一样, and a 比 b + Adj + 多了 / 一点儿 / [specific degree].",
      "Express imminent weather changes with (可能) 快 + V + 了, concerned speculation with 不会……吧？, and ongoing actions with 正 + VP + 呢 and V + 着 (+ N)."
    ],
    "phoneticsAndCharacters": {
      "title": "Section 1 & 2 · Phonetics, Character Structure & Radicals (第8课：今天比昨天冷多了)",
      "sections": [
        {
          "subtitle": "Look-Alike Character Pairs (形近字辨析)",
          "summary": "Carefully distinguish these six pairs of visually similar characters by paying attention to stroke hooks, dots, and top components.",
          "items": [
            {
              "label": "了 (le / liǎo) vs. 子 (zǐ / zi)",
              "pinyin": "走了 (zǒule, left) vs. 孩子 (háizi, child)",
              "examples": "了 has no horizontal stroke across the middle; 子 adds a horizontal stroke (一).",
              "detail": "了 has no horizontal stroke across the middle; 子 adds a horizontal stroke (一). — 1-stroke difference"
            },
            {
              "label": "少 (shǎo) vs. 小 (xiǎo)",
              "pinyin": "多少 (duōshao, how many) vs. 大小 (dàxiǎo, size)",
              "examples": "少 adds a sweeping bottom-left slash (丿) beneath 小.",
              "detail": "少 adds a sweeping bottom-left slash (丿) beneath 小. — Antonym pair: 多–少 vs. 大–小"
            },
            {
              "label": "几 (jǐ) vs. 儿 (ér)",
              "pinyin": "几个 (jǐ gè, several) vs. 儿子 (érzi, son)",
              "examples": "几 connects at the top with a horizontal-turn-hook; 儿 has two separate downward strokes.",
              "detail": "几 connects at the top with a horizontal-turn-hook; 儿 has two separate downward strokes. — Check the top connection"
            },
            {
              "label": "千 (qiān) vs. 干 (gān / gàn)",
              "pinyin": "两千 (liǎng qiān, 2,000) vs. 干什么 (gàn shénme, do what)",
              "examples": "千 begins with a short left-falling stroke (丿); 干 begins with a flat horizontal stroke (一).",
              "detail": "千 begins with a short left-falling stroke (丿); 干 begins with a flat horizontal stroke (一). — Top stroke: 丿 vs. 一"
            },
            {
              "label": "白 (bái) vs. 百 (bǎi)",
              "pinyin": "白色 (báisè, white) vs. 五百 (wǔ bǎi, 500)",
              "examples": "百 places an extra horizontal bar (一) on top of 白.",
              "detail": "百 places an extra horizontal bar (一) on top of 白. — Added top horizontal stroke"
            },
            {
              "label": "老 (lǎo) vs. 考 (kǎo)",
              "pinyin": "老师 (lǎoshī, teacher) vs. 考试 (kǎoshì, exam)",
              "examples": "Both share the top 耂 component; 老 finishes with 匕 at the bottom, while 考 finishes with 丂.",
              "detail": "Both share the top 耂 component; 老 finishes with 匕 at the bottom, while 考 finishes with 丂. — Shared top component 耂"
            }
          ]
        },
        {
          "subtitle": "Four Weather & Temperature Radicals: 日, 冫, 火, and 灬 (常用的偏旁)",
          "summary": "Characters describing sunlight, warmth, ice, cold, and heat systematically use these four semantic radicals.",
          "items": [
            {
              "label": "日 (日字旁 · Sun, Time & Warmth Radical)",
              "pinyin": "Appears on the left, top, or bottom of characters relating to the sun, clear skies, warmth, or time",
              "examples": "晴 (qíng, sunny/clear), 暖 (nuǎn, warm), 春 (chūn, spring), 晚 (wǎn, evening), 早 (zǎo, morning), 昨 (zuó, yesterday), 明 (míng, bright/tomorrow)",
              "detail": "晴 (qíng, sunny/clear), 暖 (nuǎn, warm), 春 (chūn, spring), 晚 (wǎn, evening), 早 (zǎo, morning), 昨 (zuó, yesterday), 明 (míng, bright/tomorrow) — Pictograph of the sun"
            },
            {
              "label": "冫 (两点水 · Ice & Cold Radical)",
              "pinyin": "Usually on the left (or bottom in 冬) of characters related to ice, freezing temperatures, or coldness",
              "examples": "冷 (lěng, cold), 凉 (liáng, cool), 冰 (bīng, ice), 冬 (dōng, winter)",
              "detail": "冷 (lěng, cold), 凉 (liáng, cool), 冰 (bīng, ice), 冬 (dōng, winter) — Two ice crystals (distinct from 氵 three-dot water)"
            },
            {
              "label": "火 (火字旁 · Fire & Heat Radical)",
              "pinyin": "Appears on the left side of characters related to fire, cooking, or burning",
              "examples": "炒 (chǎo, stir-fry: 蛋炒饭), 烧 (shāo, roast/braise), 灯 (dēng, lamp/light)",
              "detail": "炒 (chǎo, stir-fry: 蛋炒饭), 烧 (shāo, roast/braise), 灯 (dēng, lamp/light) — Pictograph of rising flames"
            },
            {
              "label": "灬 (火字底 / 四点底 · Four-Dot Fire Base)",
              "pinyin": "Variant of 火 placed at the bottom of characters related to heat, light, or cooking",
              "examples": "热 (rè, hot), 照 (zhào, shine/photograph: 照片), 点 (diǎn, kindle/order/o’clock)",
              "detail": "热 (rè, hot), 照 (zhào, shine/photograph: 照片), 点 (diǎn, kindle/order/o’clock) — Four bottom dots represent glowing embers/flames"
            }
          ]
        }
      ]
    },
    "dialogue": [
      {
        "character": "平田",
        "hanzi": "又刮风了！又不能打球了！",
        "pinyin": "Yòu guā fēng le! Yòu bù néng dǎqiú le!",
        "translation": "It’s windy again! We can’t play ball again!"
      },
      {
        "character": "金志英",
        "hanzi": "没事儿，咱们休息一会儿，现在挺凉快的。",
        "pinyin": "Méishìr, zánmen xiūxi yíhuìr, xiànzài tǐng liángkuai de.",
        "translation": "It’s okay—let’s rest for a bit. It’s quite cool and pleasant right now."
      },
      {
        "character": "平田",
        "hanzi": "凉快？是冷吧！",
        "pinyin": "Liángkuai? Shì lěng ba!",
        "translation": "Cool? More like cold!"
      },
      {
        "character": "金志英",
        "hanzi": "今天十度左右，不冷啊。日本的秋天很暖和吗？",
        "pinyin": "Jīntiān shí dù zuǒyòu, bù lěng a. Rìběn de qiūtiān hěn nuǎnhuo ma?",
        "translation": "It’s around ten degrees today—not cold at all. Is autumn in Japan very warm?"
      },
      {
        "character": "平田",
        "hanzi": "我家在东京，十月的时候白天二十度左右，晚上十五度左右。你看今天，最高气温二十三度，最低气温十四度。",
        "pinyin": "Wǒ jiā zài Dōngjīng, shíyuè de shíhou báitiān èrshí dù zuǒyòu, wǎnshang shíwǔ dù zuǒyòu. Nǐ kàn jīntiān, zuìgāo qìwēn èrshísān dù, zuìdī qìwēn shísì dù.",
        "translation": "My home is in Tokyo; in October it’s around 20°C during the day and around 15°C at night. Look at today in Tokyo: a high of 23°C and a low of 14°C."
      },
      {
        "character": "金志英",
        "hanzi": "也不经常刮风、下雨吗？",
        "pinyin": "Yě bù jīngcháng guā fēng, xià yǔ ma?",
        "translation": "And isn’t it often windy or rainy either?"
      },
      {
        "character": "平田",
        "hanzi": "对，天气很舒服。啊！我怎么觉得现在风更大了呢？",
        "pinyin": "Duì, tiānqì hěn shūfu. Ā! Wǒ zěnme juéde xiànzài fēng gèng dà le ne?",
        "translation": "Right, the weather is very comfortable. Ah! Why do I feel the wind has gotten even stronger now?"
      },
      {
        "character": "金志英",
        "hanzi": "可能快下雨了，咱们走吧！",
        "pinyin": "Kěnéng kuài xià yǔ le, zánmen zǒu ba!",
        "translation": "It might rain soon—let’s go!"
      },
      {
        "character": "平田",
        "hanzi": "好！明天天气怎么样？不会又是阴天吧？",
        "pinyin": "Hǎo! Míngtiān tiānqì zěnmeyàng? Bú huì yòu shì yīntiān ba?",
        "translation": "Okay! How is the weather tomorrow? Don’t tell me it’ll be overcast again?"
      },
      {
        "character": "金志英",
        "hanzi": "我看看预报……明天是晴天，没有风，也没有雨，咱们明天再来打球！",
        "pinyin": "Wǒ kànkan yùbào... Míngtiān shì qíngtiān, méiyǒu fēng, yě méiyǒu yǔ, zánmen míngtiān zài lái dǎqiú!",
        "translation": "Let me check the forecast... Tomorrow is sunny, with no wind and no rain. Let’s come play ball again tomorrow!"
      }
    ],
    "dialogues": [
      {
        "title": "Dialogue 1: Windy Autumn Weather & Comparing Tokyo’s Climate (平田 & 金志英)",
        "context": "Hirata (平田) and Jin Zhiying (金志英) have their ball game interrupted by wind, compare autumn temperatures in Tokyo with local weather, and check tomorrow’s forecast.",
        "lines": [
          {
            "character": "平田",
            "hanzi": "又刮风了！又不能打球了！",
            "pinyin": "Yòu guā fēng le! Yòu bù néng dǎqiú le!",
            "translation": "It’s windy again! We can’t play ball again!"
          },
          {
            "character": "金志英",
            "hanzi": "没事儿，咱们休息一会儿，现在挺凉快的。",
            "pinyin": "Méishìr, zánmen xiūxi yíhuìr, xiànzài tǐng liángkuai de.",
            "translation": "It’s okay—let’s rest for a bit. It’s quite cool and pleasant right now."
          },
          {
            "character": "平田",
            "hanzi": "凉快？是冷吧！",
            "pinyin": "Liángkuai? Shì lěng ba!",
            "translation": "Cool? More like cold!"
          },
          {
            "character": "金志英",
            "hanzi": "今天十度左右，不冷啊。日本的秋天很暖和吗？",
            "pinyin": "Jīntiān shí dù zuǒyòu, bù lěng a. Rìběn de qiūtiān hěn nuǎnhuo ma?",
            "translation": "It’s around ten degrees today—not cold at all. Is autumn in Japan very warm?"
          },
          {
            "character": "平田",
            "hanzi": "我家在东京，十月的时候白天二十度左右，晚上十五度左右。你看今天，最高气温二十三度，最低气温十四度。",
            "pinyin": "Wǒ jiā zài Dōngjīng, shíyuè de shíhou báitiān èrshí dù zuǒyòu, wǎnshang shíwǔ dù zuǒyòu. Nǐ kàn jīntiān, zuìgāo qìwēn èrshísān dù, zuìdī qìwēn shísì dù.",
            "translation": "My home is in Tokyo; in October it’s around 20°C during the day and around 15°C at night. Look at today in Tokyo: a high of 23°C and a low of 14°C."
          },
          {
            "character": "金志英",
            "hanzi": "也不经常刮风、下雨吗？",
            "pinyin": "Yě bù jīngcháng guā fēng, xià yǔ ma?",
            "translation": "And isn’t it often windy or rainy either?"
          },
          {
            "character": "平田",
            "hanzi": "对，天气很舒服。啊！我怎么觉得现在风更大了呢？",
            "pinyin": "Duì, tiānqì hěn shūfu. Ā! Wǒ zěnme juéde xiànzài fēng gèng dà le ne?",
            "translation": "Right, the weather is very comfortable. Ah! Why do I feel the wind has gotten even stronger now?"
          },
          {
            "character": "金志英",
            "hanzi": "可能快下雨了，咱们走吧！",
            "pinyin": "Kěnéng kuài xià yǔ le, zánmen zǒu ba!",
            "translation": "It might rain soon—let’s go!"
          },
          {
            "character": "平田",
            "hanzi": "好！明天天气怎么样？不会又是阴天吧？",
            "pinyin": "Hǎo! Míngtiān tiānqì zěnmeyàng? Bú huì yòu shì yīntiān ba?",
            "translation": "Okay! How is the weather tomorrow? Don’t tell me it’ll be overcast again?"
          },
          {
            "character": "金志英",
            "hanzi": "我看看预报……明天是晴天，没有风，也没有雨，咱们明天再来打球！",
            "pinyin": "Wǒ kànkan yùbào... Míngtiān shì qíngtiān, méiyǒu fēng, yě méiyǒu yǔ, zánmen míngtiān zài lái dǎqiú!",
            "translation": "Let me check the forecast... Tomorrow is sunny, with no wind and no rain. Let’s come play ball again tomorrow!"
          }
        ]
      },
      {
        "title": "Dialogue 2: Egg Fried Rice, Saudi Summers vs. Ottawa Winters & Sudden Rain (杰希 & 朱迪)",
        "context": "Jessie (杰希, from Ottawa, Canada) bumps into Judy (朱迪, from Saudi Arabia) at a restaurant over egg fried rice and iced cola, comparing extreme summer and winter temperatures before getting caught in the rain.",
        "lines": [
          {
            "character": "杰希",
            "hanzi": "朱迪！你也来吃蛋炒饭了？",
            "pinyin": "Zhūdí! Nǐ yě lái chī dànchǎofàn le?",
            "translation": "Judy! You came to eat egg fried rice too?"
          },
          {
            "character": "朱迪",
            "hanzi": "哈哈，说曹操曹操到，我正给你发照片呢。你吃什么？",
            "pinyin": "Hāhā, shuō Cáo Cāo Cáo Cāo dào, wǒ zhèng gěi nǐ fā zhàopiàn ne. Nǐ chī shénme?",
            "translation": "Haha, speak of the devil—I was just sending you a photo! What are you having?"
          },
          {
            "character": "杰希",
            "hanzi": "跟你一样，蛋炒饭！我还点了冰可乐，今天太热了！沙特的夏天比这儿热多了吧？",
            "pinyin": "Gēn nǐ yíyàng, dànchǎofàn! Wǒ hái diǎnle bīng kělè, jīntiān tài rè le! Shātè de xiàtiān bǐ zhèr rè duō le ba?",
            "translation": "Same as you—egg fried rice! I also ordered an iced cola; it’s so hot today! Summer in Saudi Arabia must be much hotter than here, right?"
          },
          {
            "character": "朱迪",
            "hanzi": "嗯，中午特别热，晚上的气温比白天低十度左右吧。",
            "pinyin": "Ng, zhōngwǔ tèbié rè, wǎnshang de qìwēn bǐ báitiān dī shí dù zuǒyòu ba.",
            "translation": "Yeah, midday is especially hot, and the nighttime temperature is about ten degrees lower than during the day."
          },
          {
            "character": "杰希",
            "hanzi": "我不喜欢夏天，春天和冬天好，都比夏天舒服。",
            "pinyin": "Wǒ bù xǐhuan xiàtiān, chūntiān hé dōngtiān hǎo, dōu bǐ xiàtiān shūfu.",
            "translation": "I don’t like summer; spring and winter are nice—both are more comfortable than summer."
          },
          {
            "character": "朱迪",
            "hanzi": "加拿大的冬天是不是特别冷？",
            "pinyin": "Jiānádà de dōngtiān shì bu shì tèbié lěng?",
            "translation": "Isn’t winter in Canada extremely cold?"
          },
          {
            "character": "杰希",
            "hanzi": "每个地方不一样，我是渥太华人，渥太华冬天最低气温零下三十五六度。",
            "pinyin": "Měi gè dìfang bù yíyàng, wǒ shì Wòtàihuá rén, Wòtàihuá dōngtiān zuìdī qìwēn língxià sānshíwǔ-liù dù.",
            "translation": "Every place is different; I’m from Ottawa, and in Ottawa the lowest winter temperature is minus 35 or 36 degrees."
          },
          {
            "character": "朱迪",
            "hanzi": "天啊！太冷了！",
            "pinyin": "Tiān a! Tài lěng le!",
            "translation": "Oh my goodness! That’s freezing!"
          },
          {
            "character": "杰希",
            "hanzi": "嗯，挺冷的……你吃完了？那你先回吧！带伞了吗？外面正下着雨呢！",
            "pinyin": "Ng, tǐng lěng de... Nǐ chīwán le? Nà nǐ xiān huí ba! Dài sǎn le ma? Wàimiàn zhèng xiàzhe yǔ ne!",
            "translation": "Yeah, it’s pretty cold... Have you finished eating? Then head back first! Did you bring an umbrella? It’s raining outside right now!"
          },
          {
            "character": "朱迪",
            "hanzi": "啊？怎么下雨了？那……我再吃一碗吧！",
            "pinyin": "Á? Zěnme xià yǔ le? Nà... wǒ zài chī yì wǎn ba!",
            "translation": "Huh? How come it started raining? Well then... I’ll just eat one more bowl!"
          },
          {
            "character": "杰希",
            "hanzi": "啊？！",
            "pinyin": "Á?!",
            "translation": "What?!"
          }
        ]
      }
    ],
    "readingPassage": {
      "title": "Reading: Hirata on Autumn Weather Around the World (国家不一样，天气也不一样)",
      "subtitle": "Read Hirata’s essay from Section 4 comparing autumn temperatures across Japan, South Korea, Kenya, and Canada.",
      "paragraphs": [
        {
          "hanzi": "我叫平田，家在日本东京。我觉得东京的天气很舒服，比如现在是秋天，气温一般二十度左右。我的同学金志英是韩国人，现在韩国跟日本一样，也挺暖和的。阿里来自肯尼亚，肯尼亚的秋天比日本、韩国热一点儿，最高气温可能有二十八九度，最低气温也有十七八度。",
          "pinyin": "Wǒ jiào Píngtián, jiā zài Rìběn Dōngjīng. Wǒ juéde Dōngjīng de tiānqì hěn shūfu, bǐrú xiànzài shì qiūtiān, qìwēn yìbān èrshí dù zuǒyòu. Wǒ de tóngxué Jīn Zhìyīng shì Hánguó rén, xiànzài Hánguó gēn Rìběn yíyàng, yě tǐng nuǎnhuo de. Ālǐ láizì Kěnníyà, Kěnníyà de qiūtiān bǐ Rìběn, Hánguó rè yìdiǎnr, zuìgāo qìwēn kěnéng yǒu èrshíbā-jiǔ dù, zuìdī qìwēn yě yǒu shíqī-bā dù.",
          "translation": "My name is Hirata, and my home is in Tokyo, Japan. I think the weather in Tokyo is very comfortable; for example, right now it is autumn, and the temperature is generally around 20 degrees. My classmate Jin Zhiying is Korean; right now Korea is the same as Japan and is also quite warm. Ali comes from Kenya; autumn in Kenya is a little hotter than in Japan and Korea, with the highest temperature possibly reaching 28 or 29 degrees and the lowest temperature around 17 or 18 degrees."
        },
        {
          "hanzi": "杰希家在加拿大，我们都知道加拿大很冷，但是加拿大的每个地方也是不一样的。比如今天，渥太华最高气温十六度，挺凉快的，有的地方零下二度，就有点儿冷。世界很大，可能这个国家正下雪呢，那个国家就特别热；这个国家刮着大风呢，那个国家又下雨了。国家不一样，天气也不一样。",
          "pinyin": "Jiéxī jiā zài Jiānádà, wǒmen dōu zhīdào Jiānádà hěn lěng, dànshì Jiānádà de měi gè dìfang yě shì bù yíyàng de. Bǐrú jīntiān, Wòtàihuá zuìgāo qìwēn shíliù dù, tǐng liángkuai de, yǒude dìfang língxià èr dù, jiù yǒudiǎnr lěng. Shìjiè hěn dà, kěnéng zhège guójiā zhèng xià xuě ne, nàge guójiā jiù tèbié rè; zhège guójiā guāzhe dàfēng ne, nàge guójiā yòu xià yǔ le. Guójiā bù yíyàng, tiānqì yě bù yíyàng.",
          "translation": "Jessie’s home is in Canada. We all know Canada is very cold, but every place in Canada is different too. For example, today Ottawa has a high of 16 degrees, which is quite cool and pleasant, while some places are minus 2 degrees, which is a bit cold. The world is huge: while one country is snowing right now, another country is extremely hot; while one country has strong winds blowing, another has started raining again. Different countries have different weather."
        }
      ]
    },
    "vocabularyExplanation": [
      {
        "hanzi": "又",
        "pinyin": "yòu",
        "english": "again (for past or already-realized actions/states)",
        "partOfSpeech": "adv.",
        "exampleHanzi": "外面又刮风了，咱们今天又不能打球了。",
        "examplePinyin": "Wàimiàn yòu guā fēng le, zánmen jīntiān yòu bù néng dǎqiú le.",
        "exampleTranslation": "It’s windy outside again; we can’t play ball again today."
      },
      {
        "hanzi": "刮风",
        "pinyin": "guā fēng",
        "english": "to be windy; the wind blows",
        "partOfSpeech": "v.+o.",
        "exampleHanzi": "今天刮风了，比昨天冷一点儿。",
        "examplePinyin": "Jīntiān guā fēng le, bǐ zuótiān lěng yìdiǎnr.",
        "exampleTranslation": "It is windy today and a bit colder than yesterday."
      },
      {
        "hanzi": "咱们",
        "pinyin": "zánmen",
        "english": "we; us (inclusive of both speaker and listener)",
        "partOfSpeech": "pron.",
        "exampleHanzi": "可能快下雨了，咱们走吧！",
        "examplePinyin": "Kěnéng kuài xià yǔ le, zánmen zǒu ba!",
        "exampleTranslation": "It might rain soon—let’s go!"
      },
      {
        "hanzi": "休息",
        "pinyin": "xiūxi",
        "english": "to rest; to take a break",
        "partOfSpeech": "v.",
        "exampleHanzi": "咱们休息一会儿再走吧。",
        "examplePinyin": "Zánmen xiūxi yíhuìr zài zǒu ba.",
        "exampleTranslation": "Let’s rest for a moment before leaving."
      },
      {
        "hanzi": "挺",
        "pinyin": "tǐng",
        "english": "quite; rather; pretty",
        "partOfSpeech": "adv.",
        "exampleHanzi": "今天天气挺凉快的，不热也不冷。",
        "examplePinyin": "Jīntiān tiānqì tǐng liángkuai de, bú rè yě bù lěng.",
        "exampleTranslation": "The weather today is quite cool and pleasant—neither hot nor cold."
      },
      {
        "hanzi": "凉快",
        "pinyin": "liángkuai",
        "english": "pleasantly cool; refreshing",
        "partOfSpeech": "adj.",
        "exampleHanzi": "秋天的晚上很凉快，很舒服。",
        "examplePinyin": "Qiūtiān de wǎnshang hěn liángkuai, hěn shūfu.",
        "exampleTranslation": "Autumn evenings are pleasantly cool and very comfortable."
      },
      {
        "hanzi": "度",
        "pinyin": "dù",
        "english": "degree (of temperature, angle, etc.)",
        "partOfSpeech": "m.",
        "exampleHanzi": "今天最高气温二十三度，最低气温十四度。",
        "examplePinyin": "Jīntiān zuìgāo qìwēn èrshísān dù, zuìdī qìwēn shísì dù.",
        "exampleTranslation": "Today’s high temperature is 23 degrees and the low is 14 degrees."
      },
      {
        "hanzi": "左右",
        "pinyin": "zuǒyòu",
        "english": "around; approximately; about",
        "partOfSpeech": "n. / part.",
        "exampleHanzi": "东京十月的时候白天二十度左右。",
        "examplePinyin": "Dōngjīng shíyuè de shíhou báitiān èrshí dù zuǒyòu.",
        "exampleTranslation": "In Tokyo in October, it is around twenty degrees during the day."
      },
      {
        "hanzi": "暖和",
        "pinyin": "nuǎnhuo",
        "english": "warm; pleasantly warm",
        "partOfSpeech": "adj.",
        "exampleHanzi": "春天来了，天气越来越暖和了。",
        "examplePinyin": "Chūntiān lái le, tiānqì yuèláiyuè nuǎnhuo le.",
        "exampleTranslation": "Spring has arrived, and the weather is getting warmer and warmer."
      },
      {
        "hanzi": "气温",
        "pinyin": "qìwēn",
        "english": "air temperature",
        "partOfSpeech": "n.",
        "exampleHanzi": "晚上的气温比白天低十度左右。",
        "examplePinyin": "Wǎnshang de qìwēn bǐ báitiān dī shí dù zuǒyòu.",
        "exampleTranslation": "The nighttime temperature is about ten degrees lower than during the day."
      },
      {
        "hanzi": "经常",
        "pinyin": "jīngcháng",
        "english": "often; frequently",
        "partOfSpeech": "adv.",
        "exampleHanzi": "这儿的秋天不经常刮风、下雨。",
        "examplePinyin": "Zhèr de qiūtiān bù jīngcháng guā fēng, xià yǔ.",
        "exampleTranslation": "It isn’t often windy or rainy here in autumn."
      },
      {
        "hanzi": "下雨",
        "pinyin": "xià yǔ",
        "english": "to rain",
        "partOfSpeech": "v.+o.",
        "exampleHanzi": "外面正下着雨呢，你带伞了吗？",
        "examplePinyin": "Wàimiàn zhèng xiàzhe yǔ ne, nǐ dài sǎn le ma?",
        "exampleTranslation": "It’s raining outside right now—did you bring an umbrella?"
      },
      {
        "hanzi": "更",
        "pinyin": "gèng",
        "english": "even more; still more",
        "partOfSpeech": "adv.",
        "exampleHanzi": "我怎么觉得现在风更大了呢？",
        "examplePinyin": "Wǒ zěnme juéde xiànzài fēng gèng dà le ne?",
        "exampleTranslation": "Why do I feel the wind has gotten even stronger now?"
      },
      {
        "hanzi": "阴天",
        "pinyin": "yīntiān",
        "english": "overcast day; cloudy day",
        "partOfSpeech": "n.",
        "exampleHanzi": "明天不会又是阴天吧？",
        "examplePinyin": "Míngtiān bú huì yòu shì yīntiān ba?",
        "exampleTranslation": "Tomorrow won’t be an overcast day again, will it?"
      },
      {
        "hanzi": "预报",
        "pinyin": "yùbào",
        "english": "forecast; to forecast",
        "partOfSpeech": "n. / v.",
        "exampleHanzi": "我看看天气预报，明天是晴天。",
        "examplePinyin": "Wǒ kànkan tiānqì yùbào, míngtiān shì qíngtiān.",
        "exampleTranslation": "Let me check the weather forecast—tomorrow is a sunny day."
      },
      {
        "hanzi": "零下",
        "pinyin": "língxià",
        "english": "below zero; minus (temperature)",
        "partOfSpeech": "n.",
        "exampleHanzi": "渥太华冬天最低气温零下三十五六度。",
        "examplePinyin": "Wòtàihuá dōngtiān zuìdī qìwēn língxià sānshíwǔ-liù dù.",
        "exampleTranslation": "In Ottawa, the lowest temperature in winter is minus 35 or 36 degrees."
      },
      {
        "hanzi": "一样",
        "pinyin": "yíyàng",
        "english": "same; alike; identical",
        "partOfSpeech": "adj.",
        "exampleHanzi": "现在韩国跟日本一样，也挺暖和的。",
        "examplePinyin": "Xiànzài Hánguó gēn Rìběn yíyàng, yě tǐng nuǎnhuo de.",
        "exampleTranslation": "Right now Korea is the same as Japan—it’s also quite warm."
      },
      {
        "hanzi": "季节",
        "pinyin": "jìjié",
        "english": "season (春天 spring, 夏天 summer, 秋天 autumn, 冬天 winter)",
        "partOfSpeech": "n.",
        "exampleHanzi": "我不喜欢夏天，春天和冬天都比夏天舒服。",
        "examplePinyin": "Wǒ bù xǐhuan xiàtiān, chūntiān hé dōngtiān dōu bǐ xiàtiān shūfu.",
        "exampleTranslation": "I don’t like summer; both spring and winter are more comfortable than summer."
      },
      {
        "hanzi": "带",
        "pinyin": "dài",
        "english": "to bring; to carry; to take along",
        "partOfSpeech": "v.",
        "exampleHanzi": "外面正下着雨呢，你带伞了吗？",
        "examplePinyin": "Wàimiàn zhèng xiàzhe yǔ ne, nǐ dài sǎn le ma?",
        "exampleTranslation": "It’s raining outside right now—did you bring an umbrella?"
      },
      {
        "hanzi": "着",
        "pinyin": "zhe",
        "english": "(continuous aspect particle) indicates an ongoing action or continuing state",
        "partOfSpeech": "part.",
        "exampleHanzi": "外面正下着雨呢，咱们等一会儿再走吧。",
        "examplePinyin": "Wàimiàn zhèng xiàzhe yǔ ne, zánmen děng yíhuìr zài zǒu ba.",
        "exampleTranslation": "It is raining outside right now; let’s wait a moment before leaving."
      },
      {
        "hanzi": "比如",
        "pinyin": "bǐrú",
        "english": "for example; for instance; such as",
        "partOfSpeech": "v.",
        "exampleHanzi": "东京的天气很舒服，比如现在是秋天，气温一般二十度左右。",
        "examplePinyin": "Dōngjīng de tiānqì hěn shūfu, bǐrú xiànzài shì qiūtiān, qìwēn yìbān èrshí dù zuǒyòu.",
        "exampleTranslation": "Tokyo’s weather is very comfortable; for instance, right now it’s autumn and the temperature is usually around 20 degrees."
      }
    ],
    "grammarPoint": "Weather, Seasons, Temperature Comparisons (比 / 更 / 一样) & Progressive Aspect (正…呢 / 着)",
    "structure": "又 + Verb (+ 了) / 又 + Modal Verb  vs.  再 + Verb (+ Quantity)  |  挺 + Adjective + 的  |  Number + Measure Word + 左右  |  [Adjacent Digits: 三十五六 / 十七八] + Measure Word  |  A 跟 B (不)一样 (+ Adj)  |  A 比 B + Adj + 多了 / 一点儿 / [Number + Measure]  |  (可能) + 快 + Verb / Adjective + 了  |  Subject + 不会 (+ 又) + Verb / Adjective + 吧？  |  Subject + 正 / 在 + Verb Phrase (+ 呢)  |  Subject + (正) + Verb + 着 (+ Object) (+ 呢)",
    "explanation": "Discuss weather forecasts, temperatures above and below zero, and seasonal climates across countries while mastering comparative structures (比…多了/一点儿, 更, 跟…一样), imminent change (快…了), and ongoing actions (正…呢 / V+着).",
    "examples": [
      {
        "hanzi": "今天又下雨了，我们明天再去公园吧。",
        "pinyin": "Jīntiān yòu xià yǔ le, wǒmen míngtiān zài qù gōngyuán ba.",
        "translation": "It rained again today; let’s go to the park tomorrow instead."
      },
      {
        "hanzi": "外面正下着雨呢，我再吃一碗蛋炒饭吧！",
        "pinyin": "Wàimiàn zhèng xiàzhe yǔ ne, wǒ zài chī yì wǎn dànchǎofàn ba!",
        "translation": "It’s raining outside right now—I’ll eat one more bowl of egg fried rice!"
      },
      {
        "hanzi": "今天渥太华最高气温十六度左右，挺凉快的。",
        "pinyin": "Jīntiān Wòtàihuá zuìgāo qìwēn shíliù dù zuǒyòu, tǐng liángkuai de.",
        "translation": "Today Ottawa’s high temperature is around 16 degrees—quite cool and pleasant."
      },
      {
        "hanzi": "肯尼亚的秋天最高气温有二十八九度，最低气温也有十七八度。",
        "pinyin": "Kěnníyà de qiūtiān zuìgāo qìwēn yǒu èrshíbā-jiǔ dù, zuìdī qìwēn yě yǒu shíqī-bā dù.",
        "translation": "In autumn in Kenya, the high temperature is 28 or 29 degrees, and the low is 17 or 18 degrees."
      }
    ],
    "grammarNotes": [
      {
        "title": "Repetition: 又 + V (+ 了) (Past / Already Realized) vs. 再 + V (Future / Unactualized)",
        "structure": "又 + Verb (+ 了) / 又 + Modal Verb  vs.  再 + Verb (+ Quantity)",
        "explanation": "Both 又 (yòu) and 再 (zài) mean \"again\", but 又 is used when a repeated event has already occurred or is already happening now (又刮风了 \"It’s windy again!\"), or before modal/negative verbs (又不能打球了). 再 is used for a future or planned repetition that has not happened yet (咱们明天再来打球 \"Let’s come play ball again tomorrow\", 我再吃一碗吧 \"I’ll eat one more bowl\").",
        "examples": [
          {
            "hanzi": "今天又下雨了，我们明天再去公园吧。",
            "pinyin": "Jīntiān yòu xià yǔ le, wǒmen míngtiān zài qù gōngyuán ba.",
            "translation": "It rained again today; let’s go to the park tomorrow instead."
          },
          {
            "hanzi": "外面正下着雨呢，我再吃一碗蛋炒饭吧！",
            "pinyin": "Wàimiàn zhèng xiàzhe yǔ ne, wǒ zài chī yì wǎn dànchǎofàn ba!",
            "translation": "It’s raining outside right now—I’ll eat one more bowl of egg fried rice!"
          }
        ]
      },
      {
        "title": "Colloquial Degree 挺 + Adj + 的 & Approximate Numbers (左右 / Adjacent Digits)",
        "structure": "挺 + Adjective + 的  |  Number + Measure Word + 左右  |  [Adjacent Digits: 三十五六 / 十七八] + Measure Word",
        "explanation": "1) 挺 + Adj + 的 means \"quite / pretty + Adj\" in natural spoken Mandarin (挺凉快的, 挺暖和的). 2) To express an approximate quantity (\"around / about\"), either add 左右 after [Number + Measure Word] (二十度左右) or place two adjacent numbers side by side before the measure word (二十八九度 \"28 or 29 degrees\", 零下三十五六度 \"minus 35 or 36 degrees\").",
        "examples": [
          {
            "hanzi": "今天渥太华最高气温十六度左右，挺凉快的。",
            "pinyin": "Jīntiān Wòtàihuá zuìgāo qìwēn shíliù dù zuǒyòu, tǐng liángkuai de.",
            "translation": "Today Ottawa’s high temperature is around 16 degrees—quite cool and pleasant."
          },
          {
            "hanzi": "肯尼亚的秋天最高气温有二十八九度，最低气温也有十七八度。",
            "pinyin": "Kěnníyà de qiūtiān zuìgāo qìwēn yǒu èrshíbā-jiǔ dù, zuìdī qìwēn yě yǒu shíqī-bā dù.",
            "translation": "In autumn in Kenya, the high temperature is 28 or 29 degrees, and the low is 17 or 18 degrees."
          }
        ]
      },
      {
        "title": "Comparisons: A 跟 B (不)一样, 更 + Adj, and A 比 B + Adj + 多了 / 一点儿 / [Quantity]",
        "structure": "A 跟 B (不)一样 (+ Adj)  |  A 比 B + Adj + 多了 / 一点儿 / [Number + Measure]",
        "explanation": "1) Use A 跟 B 一样 to state that two things are the same, and A 跟 B 不一样 to state they are different. 2) Use 更 + Adj (\"even more...\") when comparing a new state to a previous baseline. 3) In a 比 (bǐ) comparison, to specify the degree of difference, place 多了 (\"much more\"), 一点儿 (\"a little more\"), or a specific measurement (e.g., 十度左右) AFTER the adjective—never put 很, 太, or 非常 before the adjective in a 比 sentence.",
        "examples": [
          {
            "hanzi": "沙特的夏天比这儿热多了，晚上的气温比白天低十度左右。",
            "pinyin": "Shātè de xiàtiān bǐ zhèr rè duō le, wǎnshang de qìwēn bǐ báitiān dī shí dù zuǒyòu.",
            "translation": "Summer in Saudi Arabia is much hotter than here, and nighttime temperatures are about ten degrees lower than daytime."
          },
          {
            "hanzi": "肯尼亚的秋天比日本、韩国热一点儿。",
            "pinyin": "Kěnníyà de qiūtiān bǐ Rìběn, Hánguó rè yìdiǎnr.",
            "translation": "Autumn in Kenya is a little hotter than in Japan and Korea."
          }
        ]
      },
      {
        "title": "Imminent Change 快 + V/Adj + 了 & Concerned Speculation 不会……吧？",
        "structure": "(可能) + 快 + Verb / Adjective + 了  |  Subject + 不会 (+ 又) + Verb / Adjective + 吧？",
        "explanation": "1) 快……了 (kuài ... le) indicates that an action or change of state is about to happen very soon (快下雨了 \"It’s about to rain soon\"). 2) 不会……吧？ expresses a worried or reluctant guess about something the speaker hopes is not true (\"Don’t tell me that... / It won’t ..., will it?\").",
        "examples": [
          {
            "hanzi": "风更大了，可能快下雨了，咱们走吧！",
            "pinyin": "Fēng gèng dà le, kěnéng kuài xià yǔ le, zánmen zǒu ba!",
            "translation": "The wind has gotten even stronger—it might rain soon, so let’s go!"
          },
          {
            "hanzi": "明天天气怎么样？不会又是阴天吧？",
            "pinyin": "Míngtiān tiānqì zěnmeyàng? Bú huì yòu shì yīntiān ba?",
            "translation": "How is the weather tomorrow? It won’t be overcast again, will it?"
          }
        ]
      },
      {
        "title": "Progressive & Continuous Aspects: 正 + VP + 呢 and V + 着 (+ N)",
        "structure": "Subject + 正 / 在 + Verb Phrase (+ 呢)  |  Subject + (正) + Verb + 着 (+ Object) (+ 呢)",
        "explanation": "Both 正 + VP + 呢 and V + 着 (+ N) indicate that an action or state is ongoing right now. 正 (or 在) before the verb highlights the active point in progress (\"right in the middle of...\"), while 着 after the verb highlights the continuing state or posture of the action (下着雨, 刮着大风, 穿着旗袍, 戴着帽子). They are often combined: 外面正下着雨呢！",
        "examples": [
          {
            "hanzi": "说曹操曹操到，我正给你发照片呢！",
            "pinyin": "Shuō Cáo Cāo Cáo Cāo dào, wǒ zhèng gěi nǐ fā zhàopiàn ne!",
            "translation": "Speak of the devil—I was right in the middle of sending you a photo!"
          },
          {
            "hanzi": "外面正下着雨呢，这个国家还刮着大风呢。",
            "pinyin": "Wàimiàn zhèng xiàzhe yǔ ne, zhège guójiā hái guāzhe dàfēng ne.",
            "translation": "It is raining outside right now, and strong winds are blowing in this country."
          }
        ]
      }
    ],
    "exercises": [
      {
        "question": "Fill in the blanks with “又” or “再”: “昨天刮风了，今天________刮风了，咱们明天________来打球吧！”",
        "promptHanzi": "昨天刮风了，今天________刮风了，咱们明天________来打球吧！",
        "promptPinyin": "Zuótiān guā fēng le, jīntiān ________ guā fēng le, zánmen míngtiān ________ lái dǎqiú ba!",
        "options": [
          "又 …… 再 (yòu ... zài)",
          "再 …… 又 (zài ... yòu)",
          "又 …… 又 (yòu ... yòu)",
          "再 …… 再 (zài ... zài)"
        ],
        "answerIndex": 0,
        "explanation": "Use 又 (yòu) for a repetition that has already happened (今天又刮风了), and 再 (zài) for a future repetition that has not happened yet (明天再来打球)."
      },
      {
        "question": "Which comparative sentence is grammatically CORRECT in Mandarin?",
        "options": [
          "今天比昨天冷多了。 (Jīntiān bǐ zuótiān lěng duō le.)",
          "今天比昨天很冷。 (Jīntiān bǐ zuótiān hěn lěng.)",
          "今天比昨天太冷了。 (Jīntiān bǐ zuótiān tài lěng le.)",
          "今天多了冷比昨天。 (Jīntiān duō le lěng bǐ zuótiān.)"
        ],
        "answerIndex": 0,
        "explanation": "In a 比 comparative sentence, never put degree adverbs like 很 or 太 before the adjective; instead, place degree complements like 多了, 一点儿, or a specific number after the adjective (比昨天冷多了)."
      },
      {
        "question": "How do you express “The nighttime temperature is about 10 degrees lower than during the day”?",
        "options": [
          "晚上的气温比白天低十度左右。 (Wǎnshang de qìwēn bǐ báitiān dī shí dù zuǒyòu.)",
          "晚上的气温比白天冷十度左右。 (Wǎnshang de qìwēn bǐ báitiān lěng shí dù zuǒyòu.)",
          "晚上的气温比白天少十度左右。 (Wǎnshang de qìwēn bǐ báitiān shǎo shí dù zuǒyòu.)",
          "晚上的气温低比白天十度左右。 (Wǎnshang de qìwēn dī bǐ báitiān shí dù zuǒyòu.)"
        ],
        "answerIndex": 0,
        "explanation": "Air temperature (气温) is described with 高 (high) and 低 (low), and the specific numerical difference (十度左右) follows the adjective: 晚上的气温比白天低十度左右。"
      },
      {
        "question": "Choose the correct characters to complete: “外面正下着雨呢，我今天穿了毛衣，________了帽子，还________了雨伞。”",
        "promptHanzi": "外面正下着雨呢，我今天穿了毛衣，________了帽子，还________了雨伞。",
        "promptPinyin": "Wàimiàn zhèng xiàzhe yǔ ne, wǒ jīntiān chuānle máoyī, ________ le màozi, hái ________ le yǔsǎn.",
        "options": [
          "戴 …… 带 (dài [wear accessories] ... dài [bring/carry])",
          "带 …… 戴 (dài [bring] ... dài [wear])",
          "穿 …… 穿 (chuān ... chuān)",
          "拿 …… 戴 (ná ... dài)"
        ],
        "answerIndex": 0,
        "explanation": "Use 戴 (dài) for wearing accessories like hats, glasses, or scarves (戴帽子), and 带 (dài) for bringing or carrying items with you like an umbrella or phone (带雨伞)."
      }
    ]
  },
  {
    "id": "lesson11",
    "title": "Lesson 9: Where Is the Subway Station? — 第9课：地铁站在哪儿",
    "chineseTitle": "第9课：地铁站在哪儿",
    "unitBadge": "Mastering Chinese · Elementary 3 (会通汉语 精编版·初级3)",
    "description": "Master spatial orientation, location nouns, existence vs. position sentences ([地点]+有 / N+在 / [地点]+是), asking and stating distances with 离 and 从…到…, giving turn-by-turn directions with 一直往…走 and 往左/右拐, immediate sequence 一…就…, and directional movement (过来 vs. 过去).",
    "content": "Location Words, Distance (离 / 从…到…), Turn-by-Turn Route Directions (往…走 / 拐) & Directional Complements (过来 / 过去). Master spatial orientation, location nouns, existence vs. position sentences ([地点]+有 / N+在 / [地点]+是), asking and stating distances with 离 and 从…到…, giving turn-by-turn directions with 一直往…走 and 往左/右拐, immediate sequence 一…就…, and directional movement (过来 vs. 过去).",
    "hskLevel": 3,
    "objectives": [
      "Use location words (前边, 后边, 左边, 右边, 东边, 西边, 南边, 北边, 里, 对面, 附近) with 有, 在, and 是 to describe neighborhood landmarks.",
      "Ask and state distances between two places using A 离 B + 远吗 / 很近 and 从 A 到 B + 有多远 / 有几百米.",
      "Ask for and give clear turn-by-turn directions using 去 + [Place] + 怎么走？, (一直) 往 + Direction + 走, (往 +) 左/右 + 拐, and 一 + VP1 + 就 + VP2.",
      "Distinguish directional complements 过来 (come over toward the speaker) and 过去 (go over away from the speaker)."
    ],
    "phoneticsAndCharacters": {
      "title": "Section 1 & 2 · Phonetics, Character Structure & Radicals (第9课：地铁站在哪儿)",
      "sections": [
        {
          "subtitle": "Initial & Final Discrimination Drills (声母与韵母对比练习)",
          "summary": "Practice contrasting aspirated vs. unaspirated initials, dental vs. retroflex sibilants, and front vs. back nasal finals from Section 1.",
          "items": [
            {
              "label": "Aspirated vs. Unaspirated Stops & Affricates (b–p, d–t, g–k, j–q, z–c, zh–ch)",
              "pinyin": "b–p: 爸–怕 (bà–pà), 遍–片 (biàn–piàn) · d–t: 带–太 (dài–tài), 冬–同 (dōng–tóng) · g–k: 干–看 (gān–kàn) · j–q: 今–亲 (jīn–qīn), 寄–汽 (jì–qì)",
              "examples": "自–次 (zì–cì), 早–草 (zǎo–cǎo), 知–吃 (zhī–chī), 猪–出 (zhū–chū)",
              "detail": "自–次 (zì–cì), 早–草 (zǎo–cǎo), 知–吃 (zhī–chī), 猪–出 (zhū–chū) — Release a strong puff of air on p, t, k, q, c, ch"
            },
            {
              "label": "Flat Dental vs. Retroflex Sibilants & Nasals/Laterals (z–zh, c–ch, s–sh, r–sh, n–l, f–h)",
              "pinyin": "z–zh: 坐–桌 (zuò–zhuō), 早–找 (zǎo–zhǎo) · c–ch: 草–炒 (cǎo–chǎo), 操场 (cāochǎng) · s–sh: 三–山 (sān–shān), 宿舍 (sùshè) · r–sh: 认识 (rènshi)",
              "examples": "n–l: 念–练 (niàn–liàn), 能–冷 (néng–lěng) · f–h: 房–黄 (fáng–huáng), 福–湖 (fú–hú)",
              "detail": "n–l: 念–练 (niàn–liàn), 能–冷 (néng–lěng) · f–h: 房–黄 (fáng–huáng), 福–湖 (fú–hú) — Curl the tongue tip back for zh, ch, sh, r"
            },
            {
              "label": "Front vs. Back Nasal Finals & Diphthongs (an–ang, ian–iang, uan–uang, en–eng, in–ing)",
              "pinyin": "an–ang: 饭–放 (fàn–fàng), 单–当 (dān–dāng) · ian–iang: 先–香 (xiān–xiāng), 现–向 (xiàn–xiàng) · uan–uang: 晚–往 (wǎn–wǎng), 船–床 (chuán–chuáng)",
              "examples": "en–eng: 分–风 (fēn–fēng), 身–生 (shēn–shēng) · in–ing: 今–经 (jīn–jīng), 饮–影 (yǐn–yǐng) · ia–ie: 家–街 (jiā–jiē) · ai–ei: 百–北 (bǎi–běi) · uai–uei: 外–位 (wài–wèi)",
              "detail": "en–eng: 分–风 (fēn–fēng), 身–生 (shēn–shēng) · in–ing: 今–经 (jīn–jīng), 饮–影 (yǐn–yǐng) · ia–ie: 家–街 (jiā–jiē) · ai–ei: 百–北 (bǎi–běi) · uai–uei: 外–位 (wài–wèi) — Front nasals (-n) end with the tongue tip on the alveolar ridge; back nasals (-ng) open the velum"
            }
          ]
        },
        {
          "subtitle": "Look-Alike Characters & Three Movement/Place Radicals: 辶, ⺶(足), and 阝",
          "summary": "Distinguish nine pairs of look-alike characters and master the three key radicals for walking, foot movement, hills, and cities.",
          "items": [
            {
              "label": "Nine Look-Alike Character Pairs (形近字)",
              "pinyin": "饺–校 (jiǎo–xiào) · 北–比 (běi–bǐ) · 我–找 (wǒ–zhǎo) · 车–东 (chē–dōng) · 往–住 (wǎng–zhù)",
              "examples": "左–右 (zuǒ–yòu: 工 under left hand vs. 口 under right hand) · 帅–师 (shuài–shī) · 四–西 (sì–xī) · 同–向 (tóng–xiàng)",
              "detail": "左–右 (zuǒ–yòu: 工 under left hand vs. 口 under right hand) · 帅–师 (shuài–shī) · 四–西 (sì–xī) · 同–向 (tóng–xiàng) — Compare 左 (left + 工) and 右 (right + 口) carefully"
            },
            {
              "label": "辶 (走之旁 · Walking & Distance Radical)",
              "pinyin": "Wraps around the left and bottom of characters related to walking, roads, or distance",
              "examples": "远 (yuǎn, far), 近 (jìn, near), 过 (guò, pass/cross), 这 (zhè), 那 (nà), 送 (sòng), 还 (hái/huán)",
              "detail": "远 (yuǎn, far), 近 (jìn, near), 过 (guò, pass/cross), 这 (zhè), 那 (nà), 送 (sòng), 还 (hái/huán) — Always written last in stroke order"
            },
            {
              "label": "⺶ / 足 (足字旁 · Foot & Stepping Radical)",
              "pinyin": "Usually on the left side of characters related to the feet, running, kicking, or following",
              "examples": "跑 (pǎo, run), 跟 (gēn, follow/with), 踢 (tī, kick), 路 (lù, road)",
              "detail": "跑 (pǎo, run), 跟 (gēn, follow/with), 踢 (tī, kick), 路 (lù, road) — Derived from 足 (zú, foot)"
            },
            {
              "label": "阝 (双耳旁 · Left Mound/Terrain vs. Right City/District Radical)",
              "pinyin": "Left 阝 (阜字旁) relates to hills, steps, or buildings; Right 阝 (邑字旁) relates to cities, towns, or regions",
              "examples": "Left 阝: 院 (yuàn, courtyard/institute), 附 (fù, near: 附近) · Right 阝: 邮 (yóu, post: 邮局), 都 (dōu/dū, all/capital), 郊 (jiāo, suburb)",
              "detail": "Left 阝: 院 (yuàn, courtyard/institute), 附 (fù, near: 附近) · Right 阝: 邮 (yóu, post: 邮局), 都 (dōu/dū, all/capital), 郊 (jiāo, suburb) — Position (left vs. right) changes its historical origin and meaning category"
            }
          ]
        }
      ]
    },
    "dialogue": [
      {
        "character": "莉莉",
        "hanzi": "请问，这附近有卫生间吗？",
        "pinyin": "Qǐngwèn, zhè fùjìn yǒu wèishēngjiān ma?",
        "translation": "Excuse me, is there a restroom near here?"
      },
      {
        "character": "行人",
        "hanzi": "前边的百货商店里有。",
        "pinyin": "Qiánbian de bǎihuò-shāngdiàn lǐ yǒu.",
        "translation": "There is one inside the department store up ahead."
      },
      {
        "character": "莉莉",
        "hanzi": "百货商店离这儿远吗？去那儿怎么走？",
        "pinyin": "Bǎihuò-shāngdiàn lí zhèr yuǎn ma? Qù nàr zěnme zǒu?",
        "translation": "Is the department store far from here? How do I get there?"
      },
      {
        "character": "行人",
        "hanzi": "不远，很近。从这儿一直往前走，第一个路口往左拐，一拐弯儿就到了。",
        "pinyin": "Bù yuǎn, hěn jìn. Cóng zhèr yìzhí wǎng qián zǒu, dì-yī gè lùkǒu wǎng zuǒ guǎi, yì guǎiwānr jiù dào le.",
        "translation": "Not far—it’s very close. Walk straight ahead from here, turn left at the first intersection, and as soon as you turn the corner you’re there."
      },
      {
        "character": "莉莉",
        "hanzi": "要多长时间？",
        "pinyin": "Yào duō cháng shíjiān?",
        "translation": "How long does it take?"
      },
      {
        "character": "行人",
        "hanzi": "走路三四分钟吧。",
        "pinyin": "Zǒulù sān-sì fēnzhōng ba.",
        "translation": "About three or four minutes on foot."
      }
    ],
    "dialogues": [
      {
        "title": "Dialogue 1: Asking a Passerby for Directions to a Restroom & Department Store (莉莉 & 行人)",
        "context": "Lily (莉莉) asks a passerby (行人) where the nearest restroom is and gets step-by-step walking directions to the department store ahead.",
        "lines": [
          {
            "character": "莉莉",
            "hanzi": "请问，这附近有卫生间吗？",
            "pinyin": "Qǐngwèn, zhè fùjìn yǒu wèishēngjiān ma?",
            "translation": "Excuse me, is there a restroom near here?"
          },
          {
            "character": "行人",
            "hanzi": "前边的百货商店里有。",
            "pinyin": "Qiánbian de bǎihuò-shāngdiàn lǐ yǒu.",
            "translation": "There is one inside the department store up ahead."
          },
          {
            "character": "莉莉",
            "hanzi": "百货商店离这儿远吗？去那儿怎么走？",
            "pinyin": "Bǎihuò-shāngdiàn lí zhèr yuǎn ma? Qù nàr zěnme zǒu?",
            "translation": "Is the department store far from here? How do I get there?"
          },
          {
            "character": "行人",
            "hanzi": "不远，很近。从这儿一直往前走，第一个路口往左拐，一拐弯儿就到了。",
            "pinyin": "Bù yuǎn, hěn jìn. Cóng zhèr yìzhí wǎng qián zǒu, dì-yī gè lùkǒu wǎng zuǒ guǎi, yì guǎiwānr jiù dào le.",
            "translation": "Not far—it’s very close. Walk straight ahead from here, turn left at the first intersection, and as soon as you turn the corner you’re there."
          },
          {
            "character": "莉莉",
            "hanzi": "要多长时间？",
            "pinyin": "Yào duō cháng shíjiān?",
            "translation": "How long does it take?"
          },
          {
            "character": "行人",
            "hanzi": "走路三四分钟吧。",
            "pinyin": "Zǒulù sān-sì fēnzhōng ba.",
            "translation": "About three or four minutes on foot."
          }
        ]
      },
      {
        "title": "Dialogue 2: Meeting at the Subway Station & Giving Turn-by-Turn Directions (平田 & 马克)",
        "context": "Hirata (平田) is waiting at the school’s East Gate and calls Mark (马克) to ask how far the subway station is and how to walk there.",
        "lines": [
          {
            "character": "平田",
            "hanzi": "马克，我已经在学校东门了，你到地铁站了吗？",
            "pinyin": "Mǎkè, wǒ yǐjīng zài xuéxiào dōngmén le, nǐ dào dìtiězhàn le ma?",
            "translation": "Mark, I’m already at the school’s East Gate. Have you arrived at the subway station?"
          },
          {
            "character": "马克",
            "hanzi": "快到了，你赶快过来吧。",
            "pinyin": "Kuài dào le, nǐ gǎnkuài guòlái ba.",
            "translation": "Almost there—hurry and come on over."
          },
          {
            "character": "平田",
            "hanzi": "地铁站在哪儿？从学校到地铁站有多远？",
            "pinyin": "Dìtiězhàn zài nǎr? Cóng xuéxiào dào dìtiězhàn yǒu duō yuǎn?",
            "translation": "Where is the subway station? How far is it from the school to the subway station?"
          },
          {
            "character": "马克",
            "hanzi": "很近，有几百米吧。",
            "pinyin": "Hěn jìn, yǒu jǐ bǎi mǐ ba.",
            "translation": "Very close—probably a few hundred meters."
          },
          {
            "character": "平田",
            "hanzi": "几百米？你问我吗？我不知道，我在问你啊。",
            "pinyin": "Jǐ bǎi mǐ? Nǐ wèn wǒ ma? Wǒ bù zhīdào, wǒ zài wèn nǐ a.",
            "translation": "“How many hundred meters?” Are you asking me? I don’t know—I’m asking you!"
          },
          {
            "character": "马克",
            "hanzi": "（笑）五百米左右吧。",
            "pinyin": "(Xiào) Wǔbǎi mǐ zuǒyòu ba.",
            "translation": "(Laughs) Around five hundred meters."
          },
          {
            "character": "平田",
            "hanzi": "五百米左右……怎么走啊？",
            "pinyin": "Wǔbǎi mǐ zuǒyòu... Zěnme zǒu a?",
            "translation": "Around five hundred meters... How do I walk there?"
          },
          {
            "character": "马克",
            "hanzi": "出了东门右拐，过了红绿灯再左拐，往前走有一家书店，对面就是地铁站。",
            "pinyin": "Chūle dōngmén yòu guǎi, guòle hóng-lǜdēng zài zuǒ guǎi, wǎng qián zǒu yǒu yì jiā shūdiàn, duìmiàn jiù shì dìtiězhàn.",
            "translation": "Go out the East Gate and turn right, pass the traffic light and turn left again, walk ahead and there is a bookstore—right across from it is the subway station."
          },
          {
            "character": "平田",
            "hanzi": "好，我马上过去。",
            "pinyin": "Hǎo, wǒ mǎshàng guòqù.",
            "translation": "Okay, I’ll head over right away."
          }
        ]
      }
    ],
    "readingPassage": {
      "title": "Reading: My Residential Neighborhood & Directions to KTV (我家住的小区与问路)",
      "subtitle": "Read the two connected passages from Section 4 describing a convenient residential complex (小区) near campus and Lily’s directions from the park bus stop to KTV.",
      "paragraphs": [
        {
          "hanzi": "我家住的小区离学校很近，只有七八百米，从学校往东走，过了马路就到了。小区门的左边有超市和银行，往右走一百米就是地铁站。小区里边，我家楼下就是书店，书店的北边是水果店和一个小饭馆。同学们常常来我家玩儿，因为走路十分钟就到了，坐公交车只有一站。",
          "pinyin": "Wǒ jiā zhù de xiǎoqū lí xuéxiào hěn jìn, zhǐ yǒu qī-bābǎi mǐ, cóng xuéxiào wǎng dōng zǒu, guòle mǎlù jiù dào le. Xiǎoqū mén de zuǒbian yǒu chāoshì hé yínháng, wǎng yòu zǒu yìbǎi mǐ jiù shì dìtiězhàn. Xiǎoqū lǐbian, wǒ jiā lóuxià jiù shì shūdiàn, shūdiàn de běibian shì shuǐguǒdiàn hé yí gè xiǎo fànguǎn. Tóngxuémen chángcháng lái wǒ jiā wánr, yīnwèi zǒulù shí fēnzhōng jiù dào le, zuò gōngjiāochē zhǐ yǒu yí zhàn.",
          "translation": "The residential complex where my family lives is very close to school—only 700 or 800 meters away. If you walk east from school, you arrive right after crossing the street. To the left of the complex gate are a supermarket and a bank, and 100 meters to the right is the subway station. Inside the complex, right downstairs from my home is a bookstore, and north of the bookstore are a fruit shop and a small restaurant. My classmates often come to my home to hang out because it takes just ten minutes on foot, or only one stop by bus."
        },
        {
          "hanzi": "周末马克和朋友们去KTV唱歌，莉莉已经到了。马克刚下公交车，在公园站给莉莉打电话问路。莉莉告诉他，公交站离KTV很近，从公交站到KTV有两百米左右：下车以后一直往南走，到了第一个路口往右拐，再往前走，左边有一个公园，公园对面就是KTV，很容易找。",
          "pinyin": "Zhōumò Mǎkè hé péngyoumen qù KTV chànggē, Lìli yǐjīng dào le. Mǎkè gāng xià gōngjiāochē, zài Gōngyuán Zhàn gěi Lìli dǎ diànhuà wèn lù. Lìli gàosu tā, gōngjiāozhàn lí KTV hěn jìn, cóng gōngjiāozhàn dào KTV yǒu liǎngbǎi mǐ zuǒyòu: xià chē yǐhòu yìzhí wǎng nán zǒu, dàole dì-yī gè lùkǒu wǎng yòu guǎi, zài wǎng qián zǒu, zuǒbian yǒu yí gè gōngyuán, gōngyuán duìmiàn jiù shì KTV, hěn róngyì zhǎo.",
          "translation": "On the weekend Mark and his friends went to KTV to sing, and Lily had already arrived. Mark had just gotten off the bus at Park Stop and called Lily to ask for directions. Lily told him that the bus stop is very close to the KTV—about 200 meters from the bus stop to the KTV: after getting off the bus, walk straight south, turn right at the first intersection, walk ahead again, and on the left there is a park; right across from the park is the KTV—it’s very easy to find."
        }
      ]
    },
    "vocabularyExplanation": [
      {
        "hanzi": "附近",
        "pinyin": "fùjìn",
        "english": "nearby; in the vicinity; neighborhood",
        "partOfSpeech": "n.",
        "exampleHanzi": "请问，这附近有卫生间吗？",
        "examplePinyin": "Qǐngwèn, zhè fùjìn yǒu wèishēngjiān ma?",
        "exampleTranslation": "Excuse me, is there a restroom near here?"
      },
      {
        "hanzi": "卫生间",
        "pinyin": "wèishēngjiān",
        "english": "restroom; bathroom; washroom",
        "partOfSpeech": "n.",
        "exampleHanzi": "前边的百货商店里有卫生间。",
        "examplePinyin": "Qiánbian de bǎihuò-shāngdiàn lǐ yǒu wèishēngjiān.",
        "exampleTranslation": "There is a restroom inside the department store up ahead."
      },
      {
        "hanzi": "前边",
        "pinyin": "qiánbian",
        "english": "in front; ahead",
        "partOfSpeech": "n.",
        "exampleHanzi": "前边有一家很大的百货商店。",
        "examplePinyin": "Qiánbian yǒu yì jiā hěn dà de bǎihuò-shāngdiàn.",
        "exampleTranslation": "There is a large department store up ahead."
      },
      {
        "hanzi": "百货商店",
        "pinyin": "bǎihuò-shāngdiàn",
        "english": "department store",
        "partOfSpeech": "n.",
        "exampleHanzi": "百货商店离这儿远吗？",
        "examplePinyin": "Bǎihuò-shāngdiàn lí zhèr yuǎn ma?",
        "exampleTranslation": "Is the department store far from here?"
      },
      {
        "hanzi": "离",
        "pinyin": "lí",
        "english": "away from; distant from (in space or time)",
        "partOfSpeech": "prep.",
        "exampleHanzi": "我家住的小区离学校很近。",
        "examplePinyin": "Wǒ jiā zhù de xiǎoqū lí xuéxiào hěn jìn.",
        "exampleTranslation": "The residential complex where I live is very close to the school."
      },
      {
        "hanzi": "近",
        "pinyin": "jìn",
        "english": "near; close",
        "partOfSpeech": "adj.",
        "exampleHanzi": "地铁站离这儿不远，很近。",
        "examplePinyin": "Dìtiězhàn lí zhèr bù yuǎn, hěn jìn.",
        "exampleTranslation": "The subway station isn’t far from here—it’s very close."
      },
      {
        "hanzi": "从",
        "pinyin": "cóng",
        "english": "from (a starting point in space or time)",
        "partOfSpeech": "prep.",
        "exampleHanzi": "从学校到地铁站有多远？",
        "examplePinyin": "Cóng xuéxiào dào dìtiězhàn yǒu duō yuǎn?",
        "exampleTranslation": "How far is it from the school to the subway station?"
      },
      {
        "hanzi": "一直",
        "pinyin": "yìzhí",
        "english": "straight (ahead); all along; continuously",
        "partOfSpeech": "adv.",
        "exampleHanzi": "从这儿一直往前走，第一个路口往左拐。",
        "examplePinyin": "Cóng zhèr yìzhí wǎng qián zǒu, dì-yī gè lùkǒu wǎng zuǒ guǎi.",
        "exampleTranslation": "Walk straight ahead from here, and turn left at the first intersection."
      },
      {
        "hanzi": "往",
        "pinyin": "wǎng",
        "english": "toward; in the direction of",
        "partOfSpeech": "prep.",
        "exampleHanzi": "下车以后一直往南走。",
        "examplePinyin": "Xià chē yǐhòu yìzhí wǎng nán zǒu.",
        "exampleTranslation": "After getting off the vehicle, walk straight south."
      },
      {
        "hanzi": "路口",
        "pinyin": "lùkǒu",
        "english": "intersection; crossing; street corner",
        "partOfSpeech": "n.",
        "exampleHanzi": "到了第一个路口往右拐。",
        "examplePinyin": "Dàole dì-yī gè lùkǒu wǎng yòu guǎi.",
        "exampleTranslation": "When you reach the first intersection, turn right."
      },
      {
        "hanzi": "拐",
        "pinyin": "guǎi",
        "english": "to turn (a corner / direction)",
        "partOfSpeech": "v.",
        "exampleHanzi": "出了东门右拐，过了红绿灯再左拐。",
        "examplePinyin": "Chūle dōngmén yòu guǎi, guòle hóng-lǜdēng zài zuǒ guǎi.",
        "exampleTranslation": "Go out the East Gate and turn right; after passing the traffic light, turn left."
      },
      {
        "hanzi": "走路",
        "pinyin": "zǒulù",
        "english": "to walk; to go on foot",
        "partOfSpeech": "v.+o.",
        "exampleHanzi": "去百货商店走路只要三四分钟。",
        "examplePinyin": "Qù bǎihuò-shāngdiàn zǒulù zhǐ yào sān-sì fēnzhōng.",
        "exampleTranslation": "Walking to the department store only takes three or four minutes."
      },
      {
        "hanzi": "米",
        "pinyin": "mǐ",
        "english": "meter (unit of length)",
        "partOfSpeech": "m.",
        "exampleHanzi": "从学校到地铁站有五百米左右。",
        "examplePinyin": "Cóng xuéxiào dào dìtiězhàn yǒu wǔbǎi mǐ zuǒyòu.",
        "exampleTranslation": "It is about five hundred meters from the school to the subway station."
      },
      {
        "hanzi": "马路",
        "pinyin": "mǎlù",
        "english": "street; road; avenue",
        "partOfSpeech": "n.",
        "exampleHanzi": "从学校往东走，过了马路就到了。",
        "examplePinyin": "Cóng xuéxiào wǎng dōng zǒu, guòle mǎlù jiù dào le.",
        "exampleTranslation": "Walk east from the school, and you’ll arrive right after crossing the street."
      },
      {
        "hanzi": "地铁站",
        "pinyin": "dìtiězhàn",
        "english": "subway station; metro station",
        "partOfSpeech": "n.",
        "exampleHanzi": "你到地铁站了吗？我已经在学校东门了。",
        "examplePinyin": "Nǐ dào dìtiězhàn le ma? Wǒ yǐjīng zài xuéxiào dōngmén le.",
        "exampleTranslation": "Have you arrived at the subway station? I’m already at the school’s East Gate."
      },
      {
        "hanzi": "赶快",
        "pinyin": "gǎnkuài",
        "english": "hurry up; quickly; right away",
        "partOfSpeech": "adv.",
        "exampleHanzi": "快上课了，咱们赶快走吧！",
        "examplePinyin": "Kuài shàngkè le, zánmen gǎnkuài zǒu ba!",
        "exampleTranslation": "Class is about to start—let’s hurry up and go!"
      },
      {
        "hanzi": "过来",
        "pinyin": "guòlái",
        "english": "to come over (toward the speaker)",
        "partOfSpeech": "v.",
        "exampleHanzi": "我快到地铁站了，你赶快过来吧！——好，我马上过去。",
        "examplePinyin": "Wǒ kuài dào dìtiězhàn le, nǐ gǎnkuài guòlái ba! — Hǎo, wǒ mǎshàng guòqù.",
        "exampleTranslation": "I’m almost at the subway station; hurry and come over! — Okay, I’ll head over right away."
      },
      {
        "hanzi": "红绿灯",
        "pinyin": "hóng-lǜdēng",
        "english": "traffic light (literally \"red-green light\")",
        "partOfSpeech": "n.",
        "exampleHanzi": "过了前边的红绿灯再往左拐。",
        "examplePinyin": "Guòle qiánbian de hóng-lǜdēng zài wǎng zuǒ guǎi.",
        "exampleTranslation": "Pass the traffic light ahead and then turn left."
      },
      {
        "hanzi": "对面",
        "pinyin": "duìmiàn",
        "english": "opposite; across from",
        "partOfSpeech": "n.",
        "exampleHanzi": "往前走有一家书店，对面就是地铁站。",
        "examplePinyin": "Wǎng qián zǒu yǒu yì jiā shūdiàn, duìmiàn jiù shì dìtiězhàn.",
        "exampleTranslation": "Walk ahead and there is a bookstore; right across from it is the subway station."
      },
      {
        "hanzi": "马上",
        "pinyin": "mǎshàng",
        "english": "immediately; right away; at once",
        "partOfSpeech": "adv.",
        "exampleHanzi": "请等一下，我马上过去。",
        "examplePinyin": "Qǐng děng yíxià, wǒ mǎshàng guòqù.",
        "exampleTranslation": "Please wait a moment; I’ll head over right away."
      },
      {
        "hanzi": "小区",
        "pinyin": "xiǎoqū",
        "english": "residential complex; housing estate; neighborhood compound",
        "partOfSpeech": "n.",
        "exampleHanzi": "我家住的小区里边有书店、水果店和小饭馆。",
        "examplePinyin": "Wǒ jiā zhù de xiǎoqū lǐbian yǒu shūdiàn, shuǐguǒdiàn hé xiǎo fànguǎn.",
        "exampleTranslation": "Inside the residential complex where I live, there is a bookstore, a fruit shop, and a small restaurant."
      },
      {
        "hanzi": "容易",
        "pinyin": "róngyì",
        "english": "easy; likely to",
        "partOfSpeech": "adj.",
        "exampleHanzi": "公园对面就是KTV，很容易找。",
        "examplePinyin": "Gōngyuán duìmiàn jiù shì KTV, hěn róngyì zhǎo.",
        "exampleTranslation": "Right across from the park is the KTV; it’s very easy to find."
      }
    ],
    "grammarPoint": "Location Words, Distance (离 / 从…到…), Turn-by-Turn Route Directions (往…走 / 拐) & Directional Complements (过来 / 过去)",
    "structure": "[Place] + 有 + Indefinite Noun  |  Definite Noun + 在 + [Place]  |  [Place] (+ 就) + 是 + Noun  |  Place A + 离 + Place B + 远吗 / (不)远 / 很近  |  从 + Place A + 到 + Place B + 有多远 / 有 + [Number + 米/公里]  |  (从 Place A) + 去 + Place B + 怎么走？  |  (一直) 往 + [前/东/南/左/右] + 走 / 拐  |  (Subject +) 一 + Verb Phrase 1 + 就 + Verb Phrase 2  |  Verb / Adverb + 过来 (come over here)  vs.  Verb / Adverb + 过去 (go over there)",
    "explanation": "Master spatial orientation, location nouns, existence vs. position sentences ([地点]+有 / N+在 / [地点]+是), asking and stating distances with 离 and 从…到…, giving turn-by-turn directions with 一直往…走 and 往左/右拐, immediate sequence 一…就…, and directional movement (过来 vs. 过去).",
    "examples": [
      {
        "hanzi": "这附近有卫生间吗？——前边的百货商店里有。",
        "pinyin": "Zhè fùjìn yǒu wèishēngjiān ma? — Qiánbian de bǎihuò-shāngdiàn lǐ yǒu.",
        "translation": "Is there a restroom near here? — There is one inside the department store ahead."
      },
      {
        "hanzi": "银行在超市的东边，书店对面就是地铁站。",
        "pinyin": "Yínháng zài chāoshì de dōngbian, shūdiàn duìmiàn jiù shì dìtiězhàn.",
        "translation": "The bank is to the east of the supermarket, and right across from the bookstore is the subway station."
      },
      {
        "hanzi": "百货商店离这儿远吗？——不远，很近，走路三四分钟吧。",
        "pinyin": "Bǎihuò-shāngdiàn lí zhèr yuǎn ma? — Bù yuǎn, hěn jìn, zǒulù sān-sì fēnzhōng ba.",
        "translation": "Is the department store far from here? — Not far, very close; about three or four minutes on foot."
      },
      {
        "hanzi": "从学校到地铁站有多远？——有五百米左右。",
        "pinyin": "Cóng xuéxiào dào dìtiězhàn yǒu duō yuǎn? — Yǒu wǔbǎi mǐ zuǒyòu.",
        "translation": "How far is it from the school to the subway station? — It’s around five hundred meters."
      }
    ],
    "grammarNotes": [
      {
        "title": "Location Words (方位词) & Existence vs. Position vs. Identification (有 / 在 / 是)",
        "structure": "[Place] + 有 + Indefinite Noun  |  Definite Noun + 在 + [Place]  |  [Place] (+ 就) + 是 + Noun",
        "explanation": "1) Location words include 前边, 后边, 左边, 右边, 东边, 西边, 南边, 北边, 里(边), 对面, and 附近. When modifying a noun, 里 is used directly after the place without 的 (百货商店里). 2) Use [Place] + 有 + N to state that something exists at a location; use N + 在 + [Place] to state where a specific thing is located; use [Place] (+ 就) + 是 + N to identify what occupies a specific spot.",
        "examples": [
          {
            "hanzi": "这附近有卫生间吗？——前边的百货商店里有。",
            "pinyin": "Zhè fùjìn yǒu wèishēngjiān ma? — Qiánbian de bǎihuò-shāngdiàn lǐ yǒu.",
            "translation": "Is there a restroom near here? — There is one inside the department store ahead."
          },
          {
            "hanzi": "银行在超市的东边，书店对面就是地铁站。",
            "pinyin": "Yínháng zài chāoshì de dōngbian, shūdiàn duìmiàn jiù shì dìtiězhàn.",
            "translation": "The bank is to the east of the supermarket, and right across from the bookstore is the subway station."
          }
        ]
      },
      {
        "title": "Asking & Stating Distances: A 离 B + 远吗 / 很近 & 从 A 到 B + 有多远 / 有 + [Distance]",
        "structure": "Place A + 离 + Place B + 远吗 / (不)远 / 很近  |  从 + Place A + 到 + Place B + 有多远 / 有 + [Number + 米/公里]",
        "explanation": "1) Use A 离 B + 远/近 to describe whether Place A is far from or close to Place B. 2) Use 从 A 到 B + 有多远？ to ask for the distance from A to B, and answer with 有 + [Number + 米/公里] (or 走路/坐车 + [Time]). Note that 几百米 with a question mark asks \"How many hundred meters?\", whereas in a statement with 吧 it means \"several hundred meters\".",
        "examples": [
          {
            "hanzi": "百货商店离这儿远吗？——不远，很近，走路三四分钟吧。",
            "pinyin": "Bǎihuò-shāngdiàn lí zhèr yuǎn ma? — Bù yuǎn, hěn jìn, zǒulù sān-sì fēnzhōng ba.",
            "translation": "Is the department store far from here? — Not far, very close; about three or four minutes on foot."
          },
          {
            "hanzi": "从学校到地铁站有多远？——有五百米左右。",
            "pinyin": "Cóng xuéxiào dào dìtiězhàn yǒu duō yuǎn? — Yǒu wǔbǎi mǐ zuǒyòu.",
            "translation": "How far is it from the school to the subway station? — It’s around five hundred meters."
          }
        ]
      },
      {
        "title": "Asking & Giving Route Directions: 去 + [Place] + 怎么走？, (一直) 往 + Direction + 走, and (往) 左/右拐",
        "structure": "(从 Place A) + 去 + Place B + 怎么走？  |  (一直) 往 + [前/东/南/左/右] + 走 / 拐",
        "explanation": "To ask for walking or driving directions to a destination, use 去 + [Place] + 怎么走？ (How do I get to...?). Give directions using 一直往前走 (\"walk straight ahead\"), 往左/右拐 (\"turn left/right\", where 往 can be omitted before 左拐/右拐), and sequence markers like 先……，过了……再…… (\"first..., after passing..., then...\").",
        "examples": [
          {
            "hanzi": "从这儿一直往前走，第一个路口往左拐。",
            "pinyin": "Cóng zhèr yìzhí wǎng qián zǒu, dì-yī gè lùkǒu wǎng zuǒ guǎi.",
            "translation": "Walk straight ahead from here, and turn left at the first intersection."
          },
          {
            "hanzi": "出了东门右拐，过了红绿灯再左拐。",
            "pinyin": "Chūle dōngmén yòu guǎi, guòle hóng-lǜdēng zài zuǒ guǎi.",
            "translation": "Go out the East Gate and turn right; after passing the traffic light, turn left."
          }
        ]
      },
      {
        "title": "Immediate Sequence: 一 + VP1 + 就 + VP2 (\"As soon as ... then ...\")",
        "structure": "(Subject +) 一 + Verb Phrase 1 + 就 + Verb Phrase 2",
        "explanation": "The correlative pattern 一……就…… links two actions to show that the second action happens immediately after the first action occurs (\"as soon as VP1 happens, VP2 follows right away\").",
        "examples": [
          {
            "hanzi": "第一个路口往左拐，一拐弯儿就到了。",
            "pinyin": "Dì-yī gè lùkǒu wǎng zuǒ guǎi, yì guǎiwānr jiù dào le.",
            "translation": "Turn left at the first intersection, and as soon as you turn the corner you’ll be there."
          },
          {
            "hanzi": "他每天晚上一吃完晚饭就写汉字。",
            "pinyin": "Tā měitiān wǎnshang yì chīwán wǎnfàn jiù xiě Hànzì.",
            "translation": "Every evening, as soon as he finishes dinner, he writes Chinese characters."
          }
        ]
      },
      {
        "title": "Directional Orientation: 过来 (Toward Speaker) vs. 过去 (Away from Speaker)",
        "structure": "Verb / Adverb + 过来 (come over here)  vs.  Verb / Adverb + 过去 (go over there)",
        "explanation": "Both 过来 and 过去 indicate movement across a space, but their perspective is anchored to the speaker’s current position: use 过来 when movement is toward the speaker (\"come over here\"), and use 过去 when movement is away from the speaker toward the listener or a third place (\"go over there\").",
        "examples": [
          {
            "hanzi": "我快到地铁站了，你赶快过来吧！",
            "pinyin": "Wǒ kuài dào dìtiězhàn le, nǐ gǎnkuài guòlái ba!",
            "translation": "I’m almost at the subway station—hurry up and come over here!"
          },
          {
            "hanzi": "好，你在那儿等我，我马上过去。",
            "pinyin": "Hǎo, nǐ zài nàr děng wǒ, wǒ mǎshàng guòqù.",
            "translation": "Okay, wait for me there—I’ll head over right away."
          }
        ]
      }
    ],
    "exercises": [
      {
        "question": "Which sentence correctly asks and states the distance between the school and the subway station?",
        "options": [
          "从学校到地铁站有多远？——有五百米左右。 (Cóng xuéxiào dào dìtiězhàn yǒu duō yuǎn? — Yǒu wǔbǎi mǐ zuǒyòu.)",
          "从学校离地铁站有多远？——是五百米左右。 (Cóng xuéxiào lí dìtiězhàn yǒu duō yuǎn? — Shì wǔbǎi mǐ zuǒyòu.)",
          "学校到地铁站很远吗？——从五百米左右。 (Xuéxiào dào dìtiězhàn hěn yuǎn ma? — Cóng wǔbǎi mǐ zuǒyòu.)",
          "离学校从地铁站多远？——五百米。 (Lí xuéxiào cóng dìtiězhàn duō yuǎn? — Wǔbǎi mǐ.)"
        ],
        "answerIndex": 0,
        "explanation": "Use A 离 B 远吗？ OR 从 A 到 B 有多远？ (never mix *从 A 离 B), and state the measured distance with 有 + [Number + 米]."
      },
      {
        "question": "Fill in the blanks to complete the route directions: “从这儿一直________前走，第一个路口往左________，一拐弯儿就到了。”",
        "promptHanzi": "从这儿一直________前走，第一个路口往左________，一拐弯儿就到了。",
        "promptPinyin": "Cóng zhèr yìzhí ________ qián zǒu, dì-yī gè lùkǒu wǎng zuǒ ________, yì guǎiwānr jiù dào le.",
        "options": [
          "往 …… 拐 (wǎng ... guǎi)",
          "离 …… 走 (lí ... zǒu)",
          "从 …… 到 (cóng ... dào)",
          "在 …… 过 (zài ... guò)"
        ],
        "answerIndex": 0,
        "explanation": "Use 往 + Direction + 走 (\"walk toward...\") and 往左/右拐 (\"turn left/right\")."
      },
      {
        "question": "When Mark is at the subway station and asks Hirata to join him there, Mark says “你赶快________吧”, and Hirata replies “好，我马上________”. Which pair fits?",
        "promptHanzi": "马克：“你赶快________吧。” 平田：“好，我马上________。”",
        "promptPinyin": "Mǎkè: “Nǐ gǎnkuài ________ ba.” Píngtián: “Hǎo, wǒ mǎshàng ________.”",
        "options": [
          "过来 …… 过去 (guòlái ... guòqù)",
          "过去 …… 过来 (guòqù ... guòlái)",
          "回来 …… 回去 (huílái ... huíqù)",
          "过来 …… 过来 (guòlái ... guòlái)"
        ],
        "answerIndex": 0,
        "explanation": "Mark invites Hirata toward Mark’s location (过来 \"come over here\"), while Hirata describes moving away from his own current spot at the East Gate toward Mark (过去 \"go over there\")."
      },
      {
        "question": "In the dialogue, Mark says “有几百米吧” and Hirata replies “几百米？你问我吗？”. Why did Hirata misunderstand Mark?",
        "options": [
          "Because 几 (jǐ) means both \"how many\" (in questions) and \"several / a few\" (in statements like 有几百米吧).",
          "Because 百米 means \"white rice\" in Chinese.",
          "Because Hirata does not know what a subway station is.",
          "Because 几百米 means \"more than ten kilometers\"."
        ],
        "answerIndex": 0,
        "explanation": "几 (jǐ) is an interrogative pronoun (\"how many?\"), but in affirmative statements with 吧 (有几百米吧) it functions as an indefinite number meaning \"several / a few (hundred meters)\"."
      }
    ]
  },
  {
    "id": "lesson12",
    "title": "Cultural Reader 3: China’s Twenty-Four Solar Terms — 文化读本3：中国的二十四节气",
    "chineseTitle": "文化读本3：中国的二十四节气",
    "unitBadge": "Mastering Chinese · Elementary 3 (会通汉语 精编版·初级3 · 文化读本)",
    "description": "Explore why UNESCO-recognized Twenty-Four Solar Terms (二十四节气) are called \"China’s Fifth Great Invention\", how ancient observers summarized two solar terms per month to guide farming, and how modern urban Chinese celebrate Lichun (立春), Qingming (清明), Dongzhi (冬至), and the peak heat and cold periods.",
    "content": "The \"Fifth Great Invention of China\", Agricultural Wisdom, Seasonal Customs & Major Solar Terms (立春 · 清明 · 冬至). Explore why UNESCO-recognized Twenty-Four Solar Terms (二十四节气) are called \"China’s Fifth Great Invention\", how ancient observers summarized two solar terms per month to guide farming, and how modern urban Chinese celebrate Lichun (立春), Qingming (清明), Dongzhi (冬至), and the peak heat and cold periods.",
    "hskLevel": 3,
    "objectives": [
      "Understand the historical origin of the Twenty-Four Solar Terms (二十四节气) in the traditional Chinese calendar (农历) and why they are called \"China’s Fifth Great Invention\" (中国的第五大发明).",
      "Explain how ancient Chinese farmers observed the sun (太阳), stars (星星), and nature (自然界) to summarize two solar terms per month for agriculture (种地).",
      "Describe how the Twenty-Four Solar Terms have evolved in modern urban life from an agricultural necessity into cherished cultural customs (风俗).",
      "Identify the dates, seasonal meanings, and traditions of key solar terms: 立春 (Start of Spring), 清明 (Pure Brightness — spring outings & tomb-sweeping), 小暑/大暑 (Minor/Major Heat), 冬至 (Winter Solstice — eating dumplings), and 小寒/大寒 (Minor/Major Cold)."
    ],
    "phoneticsAndCharacters": {
      "title": "Section 1 & 2 · Phonetics, Character Structure & Radicals (文化读本3：中国的二十四节气)",
      "sections": [
        {
          "subtitle": "Seven Key Solar Terms Featured in Cultural Reader 3 (课文重点节气一览)",
          "summary": "Although the traditional calendar divides the solar year into 24 solar terms (two per month), the reading highlights seven solar terms that remain closely tied to modern Chinese daily life and seasonal customs.",
          "items": [
            {
              "label": "立春 (Lìchūn · Start of Spring) — Feb 3–5",
              "pinyin": "立 (establish / begin) + 春 (spring)",
              "examples": "“立春”——春天来了 (Spring has arrived; people welcome spring and eat spring pancakes 春饼).",
              "detail": "“立春”——春天来了 (Spring has arrived; people welcome spring and eat spring pancakes 春饼). — 1st of the 24 Solar Terms"
            },
            {
              "label": "清明 (Qīngmíng · Pure Brightness) — Apr 4–6",
              "pinyin": "清 (clear / pure) + 明 (bright)",
              "examples": "“清明”——天气暖和了，可以春游扫墓 (The weather warms up; people go on spring outings and sweep ancestors’ tombs).",
              "detail": "“清明”——天气暖和了，可以春游扫墓 (The weather warms up; people go on spring outings and sweep ancestors’ tombs). — 5th Solar Term & traditional festival"
            },
            {
              "label": "小暑 & 大暑 (Xiǎoshǔ & Dàshǔ · Minor Heat & Major Heat) — Jul 6–8 & Jul 22–24",
              "pinyin": "小/大 (minor/major) + 暑 (summer heat)",
              "examples": "一年中最热的日子 (The hottest days of the year in midsummer).",
              "detail": "一年中最热的日子 (The hottest days of the year in midsummer). — 11th & 12th Solar Terms (peak summer)"
            },
            {
              "label": "冬至 (Dōngzhì · Winter Solstice) — Dec 21–23",
              "pinyin": "冬 (winter) + 至 (arrive / extreme)",
              "examples": "“冬至”——真正的冬天来了，应该吃饺子 (True winter arrives; northern Chinese eat dumplings 饺子, southern Chinese eat tangyuan 汤圆).",
              "detail": "“冬至”——真正的冬天来了，应该吃饺子 (True winter arrives; northern Chinese eat dumplings 饺子, southern Chinese eat tangyuan 汤圆). — 22nd Solar Term (shortest day of the year)"
            },
            {
              "label": "小寒 & 大寒 (Xiǎohán & Dàhán · Minor Cold & Major Cold) — Jan 5–7 & Jan 20–21",
              "pinyin": "小/大 (minor/major) + 寒 (winter cold)",
              "examples": "一年中最冷的日子，希望快点儿过去 (The coldest days of the year before spring returns).",
              "detail": "一年中最冷的日子，希望快点儿过去 (The coldest days of the year before spring returns). — 23rd & 24th Solar Terms (final terms of the year)"
            }
          ]
        }
      ]
    },
    "dialogue": [
      {
        "character": "马克",
        "hanzi": "王老师，我听说中国农历有二十四节气，很多人说它是“中国的第五大发明”，这是真的吗？",
        "pinyin": "Wáng lǎoshī, wǒ tīngshuō Zhōngguó nónglì yǒu èrshísì jiéqì, hěn duō rén shuō tā shì “Zhōngguó de dì-wǔ dà fāmíng”, zhè shì zhēnde ma?",
        "translation": "Teacher Wang, I heard that the Chinese calendar has Twenty-Four Solar Terms and many people call them \"China’s Fifth Great Invention\"—is that true?"
      },
      {
        "character": "王老师",
        "hanzi": "对。很早以前中国人就开始种地，非常关心季节和天气的变化。",
        "pinyin": "Duì. Hěn zǎo yǐqián Zhōngguó rén jiù kāishǐ zhòngdì, fēicháng guānxīn jìjié hé tiānqì de biànhuà.",
        "translation": "Yes. Very long ago Chinese people began farming the land and cared deeply about seasonal and weather changes."
      },
      {
        "character": "马克",
        "hanzi": "那古人是怎么知道节气的呢？",
        "pinyin": "Nà gǔrén shì zěnme zhīdào jiéqì de ne?",
        "translation": "Then how did ancient people figure out the solar terms?"
      },
      {
        "character": "王老师",
        "hanzi": "他们通过观察太阳、星星和自然界的变化，总结出了“节气”。每个月两个节气，一年就有二十四个节气。",
        "pinyin": "Tāmen tōngguò guānchá tàiyáng, xīngxing hé zìránjiè de biànhuà, zǒngjiéchūle “jiéqì”. Měi gè yuè liǎng gè jiéqì, yì nián jiù yǒu èrshísì gè jiéqì.",
        "translation": "By observing changes in the sun, stars, and the natural world, they summarized the \"solar terms\". With two solar terms each month, there are twenty-four solar terms in a year."
      },
      {
        "character": "马克",
        "hanzi": "以前不知道节气就种不好地，难怪二十四节气那么重要！",
        "pinyin": "Yǐqián bù zhīdào jiéqì jiù zhòngbuhǎo dì, nánguài èrshísì jiéqì nàme zhòngyào!",
        "translation": "In the past, if you didn’t know the solar terms you couldn’t farm well—no wonder the Twenty-Four Solar Terms were so important!"
      }
    ],
    "dialogues": [
      {
        "title": "Dialogue 1: Why Are the Twenty-Four Solar Terms Called \"China’s Fifth Great Invention\"? (马克 & 王老师)",
        "context": "Mark (马克) asks Teacher Wang (王老师) about the origin of the Twenty-Four Solar Terms and why they were vital for ancient Chinese agriculture.",
        "lines": [
          {
            "character": "马克",
            "hanzi": "王老师，我听说中国农历有二十四节气，很多人说它是“中国的第五大发明”，这是真的吗？",
            "pinyin": "Wáng lǎoshī, wǒ tīngshuō Zhōngguó nónglì yǒu èrshísì jiéqì, hěn duō rén shuō tā shì “Zhōngguó de dì-wǔ dà fāmíng”, zhè shì zhēnde ma?",
            "translation": "Teacher Wang, I heard that the Chinese calendar has Twenty-Four Solar Terms and many people call them \"China’s Fifth Great Invention\"—is that true?"
          },
          {
            "character": "王老师",
            "hanzi": "对。很早以前中国人就开始种地，非常关心季节和天气的变化。",
            "pinyin": "Duì. Hěn zǎo yǐqián Zhōngguó rén jiù kāishǐ zhòngdì, fēicháng guānxīn jìjié hé tiānqì de biànhuà.",
            "translation": "Yes. Very long ago Chinese people began farming the land and cared deeply about seasonal and weather changes."
          },
          {
            "character": "马克",
            "hanzi": "那古人是怎么知道节气的呢？",
            "pinyin": "Nà gǔrén shì zěnme zhīdào jiéqì de ne?",
            "translation": "Then how did ancient people figure out the solar terms?"
          },
          {
            "character": "王老师",
            "hanzi": "他们通过观察太阳、星星和自然界的变化，总结出了“节气”。每个月两个节气，一年就有二十四个节气。",
            "pinyin": "Tāmen tōngguò guānchá tàiyáng, xīngxing hé zìránjiè de biànhuà, zǒngjiéchūle “jiéqì”. Měi gè yuè liǎng gè jiéqì, yì nián jiù yǒu èrshísì gè jiéqì.",
            "translation": "By observing changes in the sun, stars, and the natural world, they summarized the \"solar terms\". With two solar terms each month, there are twenty-four solar terms in a year."
          },
          {
            "character": "马克",
            "hanzi": "以前不知道节气就种不好地，难怪二十四节气那么重要！",
            "pinyin": "Yǐqián bù zhīdào jiéqì jiù zhòngbuhǎo dì, nánguài èrshísì jiéqì nàme zhòngyào!",
            "translation": "In the past, if you didn’t know the solar terms you couldn’t farm well—no wonder the Twenty-Four Solar Terms were so important!"
          }
        ]
      },
      {
        "title": "Dialogue 2: Celebrating Lichun, Qingming & Dongzhi in Modern Cities (金志英 & 李明)",
        "context": "Jin Zhiying (金志英) and Li Ming (李明) discuss how city dwellers observe solar terms today as cultural customs.",
        "lines": [
          {
            "character": "金志英",
            "hanzi": "李明，现在有天气预报，很多人又住在城市里，你们还过二十四节气吗？",
            "pinyin": "Lǐ Míng, xiànzài yǒu tiānqì yùbào, hěn duō rén yòu zhù zài chéngshì lǐ, nǐmen hái guò èrshísì jiéqì ma?",
            "translation": "Li Ming, now that there are weather forecasts and many people live in cities, do you still observe the Twenty-Four Solar Terms?"
          },
          {
            "character": "李明",
            "hanzi": "现在二十四节气更多是一种风俗。比如说我吧，一年一般过三个节气：立春、清明和冬至。",
            "pinyin": "Xiànzài èrshísì jiéqì gèng duō shì yì zhǒng fēngsú. Bǐrú shuō wǒ ba, yì nián yìbān guò sān gè jiéqì: Lìchūn, Qīngmíng hé Dōngzhì.",
            "translation": "Nowadays the Twenty-Four Solar Terms are more of a cultural custom. Take me for example—I usually observe three solar terms a year: Lichun, Qingming, and Dongzhi."
          },
          {
            "character": "金志英",
            "hanzi": "这三个节气有什么不一样呢？",
            "pinyin": "Zhè sān gè jiéqì yǒu shénme bù yíyàng ne?",
            "translation": "What is special about these three solar terms?"
          },
          {
            "character": "李明",
            "hanzi": "“立春”告诉我们春天来了；“清明”的时候天气暖和了，大家可以去春游、扫墓；到了“冬至”，真正的冬天来了，我们北方人应该吃饺子。",
            "pinyin": "“Lìchūn” gàosu wǒmen chūntiān lái le; “Qīngmíng” de shíhou tiānqì nuǎnhuo le, dàjiā kěyǐ qù chūnyóu, sǎomù; dàole “Dōngzhì”, zhēnzhèng de dōngtiān lái le, wǒmen běifāngrén yīnggāi chī jiǎozi.",
            "translation": "“Lichun” tells us spring has arrived; during “Qingming” the weather warms up so everyone can go on spring outings and sweep tombs; when “Dongzhi” arrives, true winter is here and we northerners should eat dumplings."
          },
          {
            "character": "金志英",
            "hanzi": "我听说夏天还有“小暑”“大暑”，冬天有“小寒”“大寒”，对吗？",
            "pinyin": "Wǒ tīngshuō xiàtiān hái yǒu “Xiǎoshǔ” “Dàshǔ”, dōngtiān yǒu “Xiǎohán” “Dàhán”, duì ma?",
            "translation": "I heard that in summer there are also \"Minor Heat\" and \"Major Heat\", and in winter \"Minor Cold\" and \"Major Cold\", right?"
          },
          {
            "character": "李明",
            "hanzi": "对！我也会看看它们的时间，希望一年中最热和最冷的日子快点儿过去！",
            "pinyin": "Duì! Wǒ yě huì kànkan tāmen de shíjiān, xīwàng yì nián zhōng zuì rè hé zuì lěng de rìzi kuài diǎnr guòqù!",
            "translation": "Right! I also check their dates, hoping the hottest and coldest days of the year pass quickly!"
          }
        ]
      }
    ],
    "readingPassage": {
      "title": "Reading: China’s Twenty-Four Solar Terms (中国的二十四节气)",
      "subtitle": "Read the complete authentic essay from Cultural Reader 3 explaining the origin, agricultural significance, and modern cultural customs of China’s Twenty-Four Solar Terms.",
      "paragraphs": [
        {
          "hanzi": "中国农历有二十四节气，很多人说它是“中国的第五大发明”。",
          "pinyin": "Zhōngguó nónglì yǒu èrshísì jiéqì, hěn duō rén shuō tā shì “Zhōngguó de dì-wǔ dà fāmíng”.",
          "translation": "The traditional Chinese calendar has Twenty-Four Solar Terms, and many people call them \"China’s Fifth Great Invention\"."
        },
        {
          "hanzi": "很多中国人从小就知道二十四节气，可是不一定知道它为什么重要。这么说吧，很早以前中国人就开始种地，很关心季节和天气的变化。有人通过观察太阳、星星和自然界的变化总结出了“节气”，每个月两个节气，就有了二十四节气。",
          "pinyin": "Hěn duō Zhōngguó rén cóngxiǎo jiù zhīdào èrshísì jiéqì, kěshì bùyídìng zhīdào tā wèishénme zhòngyào. Zhème shuō ba, hěn zǎo yǐqián Zhōngguó rén jiù kāishǐ zhòngdì, hěn guānxīn jìjié hé tiānqì de biànhuà. Yǒu rén tōngguò guānchá tàiyáng, xīngxing hé zìránjiè de biànhuà zǒngjiéchūle “jiéqì”, měi gè yuè liǎng gè jiéqì, jiù yǒule èrshísì jiéqì.",
          "translation": "Many Chinese people have known about the Twenty-Four Solar Terms since childhood, yet they do not necessarily know why they are important. Put it this way: very long ago Chinese people began farming the land and cared deeply about seasonal and weather changes. By observing changes in the sun, stars, and the natural world, people summarized the \"solar terms\"—two solar terms each month, giving rise to the Twenty-Four Solar Terms."
        },
        {
          "hanzi": "以前二十四节气真的很重要，不知道节气就种不好地。可是现在一是有天气预报，人们很容易就知道天气怎么样；二是很多人住在城市里，离种地很远，二十四节气更多是一种风俗。比如说我吧，一年只过三个节气：“立春”——春天来了；“清明”——天气暖和了，可以春游扫墓；“冬至”——真正的冬天来了，应该吃饺子。有时候，我也会看看“小暑”“大暑”“小寒”“大寒”的时间，希望最热和最冷的日子快点儿过去。",
          "pinyin": "Yǐqián èrshísì jiéqì zhēnde hěn zhòngyào, bù zhīdào jiéqì jiù zhòngbuhǎo dì. Kěshì xiànzài yī shì yǒu tiānqì yùbào, rénmen hěn róngyì jiù zhīdào tiānqì zěnmeyàng; èr shì hěn duō rén zhù zài chéngshì lǐ, lí zhòngdì hěn yuǎn, èrshísì jiéqì gèng duō shì yì zhǒng fēngsú. Bǐrú shuō wǒ ba, yì nián zhǐ guò sān gè jiéqì: “Lìchūn” — chūntiān lái le; “Qīngmíng” — tiānqì nuǎnhuo le, kěyǐ chūnyóu sǎomù; “Dōngzhì” — zhēnzhèng de dōngtiān lái le, yīnggāi chī jiǎozi. Yǒu shíhou, wǒ yě huì kànkan “Xiǎoshǔ” “Dàshǔ” “Xiǎohán” “Dàhán” de shíjiān, xīwàng zuì rè hé zuì lěng de rìzi kuài diǎnr guòqù.",
          "translation": "In the past, the Twenty-Four Solar Terms were truly very important—without knowing the solar terms, one could not farm well. Nowadays, however, first there are weather forecasts so people can easily know what the weather will be like; second, many people live in cities far removed from farming, so the Twenty-Four Solar Terms are more of a cultural custom. Take me for instance—I only observe three solar terms a year: \"Lichun\" (Start of Spring)—spring has arrived; \"Qingming\" (Pure Brightness)—the weather has warmed up, and we can go on spring outings and sweep tombs; and \"Dongzhi\" (Winter Solstice)—true winter has arrived, and we should eat dumplings. Sometimes I also check the dates for \"Xiaoshu\" (Minor Heat), \"Dashu\" (Major Heat), \"Xiaohan\" (Minor Cold), and \"Dahan\" (Major Cold), hoping that the hottest and coldest days will pass quickly."
        }
      ]
    },
    "vocabularyExplanation": [
      {
        "hanzi": "农历",
        "pinyin": "nónglì",
        "english": "traditional Chinese calendar (lunisolar agricultural calendar)",
        "partOfSpeech": "n.",
        "exampleHanzi": "中国农历有二十四节气。",
        "examplePinyin": "Zhōngguó nónglì yǒu èrshísì jiéqì.",
        "exampleTranslation": "The traditional Chinese calendar has Twenty-Four Solar Terms."
      },
      {
        "hanzi": "节气",
        "pinyin": "jiéqì",
        "english": "solar term (each of the 24 seasonal division points of the solar year)",
        "partOfSpeech": "n.",
        "exampleHanzi": "每个月有两个节气，一年就有二十四个节气。",
        "examplePinyin": "Měi gè yuè yǒu liǎng gè jiéqì, yì nián jiù yǒu èrshísì gè jiéqì.",
        "exampleTranslation": "There are two solar terms each month, making twenty-four solar terms in a year."
      },
      {
        "hanzi": "发明",
        "pinyin": "fāmíng",
        "english": "invention; to invent",
        "partOfSpeech": "n. / v.",
        "exampleHanzi": "很多人说二十四节气是“中国的第五大发明”。",
        "examplePinyin": "Hěn duō rén shuō èrshísì jiéqì shì “Zhōngguó de dì-wǔ dà fāmíng”.",
        "exampleTranslation": "Many people say the Twenty-Four Solar Terms are \"China’s Fifth Great Invention\"."
      },
      {
        "hanzi": "从小",
        "pinyin": "cóngxiǎo",
        "english": "from childhood; since one was young",
        "partOfSpeech": "adv.",
        "exampleHanzi": "很多中国人从小就知道二十四节气。",
        "examplePinyin": "Hěn duō Zhōngguó rén cóngxiǎo jiù zhīdào èrshísì jiéqì.",
        "exampleTranslation": "Many Chinese people have known about the Twenty-Four Solar Terms since childhood."
      },
      {
        "hanzi": "不一定",
        "pinyin": "bùyídìng",
        "english": "not necessarily; not sure",
        "partOfSpeech": "adv.",
        "exampleHanzi": "大家从小就知道二十四节气，可是不一定知道它为什么重要。",
        "examplePinyin": "Dàjiā cóngxiǎo jiù zhīdào èrshísì jiéqì, kěshì bùyídìng zhīdào tā wèishénme zhòngyào.",
        "exampleTranslation": "Everyone has known about the 24 Solar Terms since childhood, yet they don’t necessarily know why they are important."
      },
      {
        "hanzi": "种地",
        "pinyin": "zhòngdì",
        "english": "to farm; to till/cultivate the land",
        "partOfSpeech": "v.+o.",
        "exampleHanzi": "以前不知道节气就种不好地。",
        "examplePinyin": "Yǐqián bù zhīdào jiéqì jiù zhòngbuhǎo dì.",
        "exampleTranslation": "In the past, if you didn’t know the solar terms, you couldn’t farm the land well."
      },
      {
        "hanzi": "关心",
        "pinyin": "guānxīn",
        "english": "to care about; to be concerned with",
        "partOfSpeech": "v.",
        "exampleHanzi": "种地的人非常关心季节和天气的变化。",
        "examplePinyin": "Zhòngdì de rén fēicháng guānxīn jìjié hé tiānqì de biànhuà.",
        "exampleTranslation": "People who farm care deeply about changes in the seasons and weather."
      },
      {
        "hanzi": "变化",
        "pinyin": "biànhuà",
        "english": "change; variation; to change",
        "partOfSpeech": "n. / v.",
        "exampleHanzi": "春天的天气变化很快。",
        "examplePinyin": "Chūntiān de tiānqì biànhuà hěn kuài.",
        "exampleTranslation": "The weather in spring changes very quickly."
      },
      {
        "hanzi": "通过",
        "pinyin": "tōngguò",
        "english": "by means of; through; via",
        "partOfSpeech": "prep. / v.",
        "exampleHanzi": "古人通过观察太阳、星星和自然界的变化总结出了节气。",
        "examplePinyin": "Gǔrén tōngguò guānchá tàiyáng, xīngxing hé zìránjiè de biànhuà zǒngjiéchūle jiéqì.",
        "exampleTranslation": "Ancient people summarized the solar terms through observing changes in the sun, stars, and nature."
      },
      {
        "hanzi": "观察",
        "pinyin": "guānchá",
        "english": "to observe; to watch closely",
        "partOfSpeech": "v.",
        "exampleHanzi": "他喜欢观察自然界的变化。",
        "examplePinyin": "Tā xǐhuan guānchá zìránjiè de biànhuà.",
        "exampleTranslation": "He likes observing changes in the natural world."
      },
      {
        "hanzi": "总结",
        "pinyin": "zǒngjié",
        "english": "to summarize; to sum up; summary",
        "partOfSpeech": "v. / n.",
        "exampleHanzi": "人们总结出了二十四节气。",
        "examplePinyin": "Rénmen zǒngjiéchūle èrshísì jiéqì.",
        "exampleTranslation": "People summarized and formulated the Twenty-Four Solar Terms."
      },
      {
        "hanzi": "城市",
        "pinyin": "chéngshì",
        "english": "city; urban area",
        "partOfSpeech": "n.",
        "exampleHanzi": "现在很多人住在城市里，离种地很远。",
        "examplePinyin": "Xiànzài hěn duō rén zhù zài chéngshì lǐ, lí zhòngdì hěn yuǎn.",
        "exampleTranslation": "Nowadays many people live in cities, far removed from farming."
      },
      {
        "hanzi": "风俗",
        "pinyin": "fēngsú",
        "english": "custom; social tradition",
        "partOfSpeech": "n.",
        "exampleHanzi": "冬至吃饺子是中国北方的一种风俗。",
        "examplePinyin": "Dōngzhì chī jiǎozi shì Zhōngguó běifāng de yì zhǒng fēngsú.",
        "exampleTranslation": "Eating dumplings on the Winter Solstice is a custom in northern China."
      },
      {
        "hanzi": "春游",
        "pinyin": "chūnyóu",
        "english": "to go on a spring outing; spring excursion",
        "partOfSpeech": "v. / n.",
        "exampleHanzi": "清明的时候天气暖和了，可以去春游、扫墓。",
        "examplePinyin": "Qīngmíng de shíhou tiānqì nuǎnhuo le, kěyǐ qù chūnyóu, sǎomù.",
        "exampleTranslation": "During Qingming the weather warms up, and people can go on spring outings and sweep tombs."
      },
      {
        "hanzi": "真正",
        "pinyin": "zhēnzhèng",
        "english": "true; genuine; real",
        "partOfSpeech": "adj. / adv.",
        "exampleHanzi": "到了冬至，真正的冬天就来了。",
        "examplePinyin": "Dàole Dōngzhì, zhēnzhèng de dōngtiān jiù lái le.",
        "exampleTranslation": "When the Winter Solstice arrives, true winter has come."
      },
      {
        "hanzi": "希望",
        "pinyin": "xīwàng",
        "english": "to hope; to wish; hope",
        "partOfSpeech": "v. / n.",
        "exampleHanzi": "我希望最热和最冷的日子快点儿过去。",
        "examplePinyin": "Wǒ xīwàng zuì rè hé zuì lěng de rìzi kuài diǎnr guòqù.",
        "exampleTranslation": "I hope the hottest and coldest days pass quickly."
      }
    ],
    "grammarPoint": "The \"Fifth Great Invention of China\", Agricultural Wisdom, Seasonal Customs & Major Solar Terms (立春 · 清明 · 冬至)",
    "structure": "Subject + 通过 + Verb / Noun Phrase + Verb + Result (总结出……)  |  一(方面)是 + Clause 1；二(方面)是 + Clause 2  |  这么说吧，+ Explanation  |  比如说 + Noun/Pronoun + 吧，+ Example",
    "explanation": "Explore why UNESCO-recognized Twenty-Four Solar Terms (二十四节气) are called \"China’s Fifth Great Invention\", how ancient observers summarized two solar terms per month to guide farming, and how modern urban Chinese celebrate Lichun (立春), Qingming (清明), Dongzhi (冬至), and the peak heat and cold periods.",
    "examples": [
      {
        "hanzi": "有人通过观察太阳、星星和自然界的变化总结出了“节气”。",
        "pinyin": "Yǒu rén tōngguò guānchá tàiyáng, xīngxing hé zìránjiè de biànhuà zǒngjiéchūle “jiéqì”.",
        "translation": "By observing changes in the sun, stars, and nature, people summarized the \"solar terms\"."
      },
      {
        "hanzi": "现在一是有天气预报，人们很容易就知道天气怎么样；二是很多人住在城市里，离种地很远。",
        "pinyin": "Xiànzài yī shì yǒu tiānqì yùbào, rénmen hěn róngyì jiù zhīdào tiānqì zěnmeyàng; èr shì hěn duō rén zhù zài chéngshì lǐ, lí zhòngdì hěn yuǎn.",
        "translation": "Nowadays, first there are weather forecasts so people easily know what the weather is like; second, many people live in cities far from farming."
      },
      {
        "hanzi": "这么说吧，很早以前中国人就开始种地，很关心季节和天气的变化。",
        "pinyin": "Zhème shuō ba, hěn zǎo yǐqián Zhōngguó rén jiù kāishǐ zhòngdì, hěn guānxīn jìjié hé tiānqì de biànhuà.",
        "translation": "Put it this way: very long ago Chinese people began farming and cared deeply about seasonal and weather changes."
      },
      {
        "hanzi": "比如说我吧，一年只过三个节气：立春、清明和冬至。",
        "pinyin": "Bǐrú shuō wǒ ba, yì nián zhǐ guò sān gè jiéqì: Lìchūn, Qīngmíng hé Dōngzhì.",
        "translation": "Take me for instance: I only observe three solar terms a year—Lichun, Qingming, and Dongzhi."
      }
    ],
    "grammarNotes": [
      {
        "title": "Expressing Method & Synthesis: 通过 + [Action / Means] + 总结出 + [Result]",
        "structure": "Subject + 通过 + Verb / Noun Phrase + Verb + Result (总结出……)",
        "explanation": "Use the preposition 通过 (tōngguò, \"through / by means of\") before an observation or method to explain how a conclusion, invention, or result was achieved.",
        "examples": [
          {
            "hanzi": "有人通过观察太阳、星星和自然界的变化总结出了“节气”。",
            "pinyin": "Yǒu rén tōngguò guānchá tàiyáng, xīngxing hé zìránjiè de biànhuà zǒngjiéchūle “jiéqì”.",
            "translation": "By observing changes in the sun, stars, and nature, people summarized the \"solar terms\"."
          }
        ]
      },
      {
        "title": "Enumerating Two Reasons Clearly: 一是……；二是…… (\"First...; Second...\")",
        "structure": "一(方面)是 + Clause 1；二(方面)是 + Clause 2",
        "explanation": "When explaining two parallel reasons for a change or situation, use 一是……；二是…… (\"First is that...; second is that...\") to structure the argument clearly and cohesively.",
        "examples": [
          {
            "hanzi": "现在一是有天气预报，人们很容易就知道天气怎么样；二是很多人住在城市里，离种地很远。",
            "pinyin": "Xiànzài yī shì yǒu tiānqì yùbào, rénmen hěn róngyì jiù zhīdào tiānqì zěnmeyàng; èr shì hěn duō rén zhù zài chéngshì lǐ, lí zhòngdì hěn yuǎn.",
            "translation": "Nowadays, first there are weather forecasts so people easily know what the weather is like; second, many people live in cities far from farming."
          }
        ]
      },
      {
        "title": "Conversational Transitions: 这么说吧 (\"Put It This Way\") & 比如说我吧 (\"Take Me for Example\")",
        "structure": "这么说吧，+ Explanation  |  比如说 + Noun/Pronoun + 吧，+ Example",
        "explanation": "In natural narrative writing and speech, 这么说吧 introduces an accessible explanation of a complex topic (\"Let’s put it this way\"), while 比如说我吧 introduces oneself as a concrete personal example (\"Take me for example\").",
        "examples": [
          {
            "hanzi": "这么说吧，很早以前中国人就开始种地，很关心季节和天气的变化。",
            "pinyin": "Zhème shuō ba, hěn zǎo yǐqián Zhōngguó rén jiù kāishǐ zhòngdì, hěn guānxīn jìjié hé tiānqì de biànhuà.",
            "translation": "Put it this way: very long ago Chinese people began farming and cared deeply about seasonal and weather changes."
          },
          {
            "hanzi": "比如说我吧，一年只过三个节气：立春、清明和冬至。",
            "pinyin": "Bǐrú shuō wǒ ba, yì nián zhǐ guò sān gè jiéqì: Lìchūn, Qīngmíng hé Dōngzhì.",
            "translation": "Take me for instance: I only observe three solar terms a year—Lichun, Qingming, and Dongzhi."
          }
        ]
      }
    ],
    "exercises": [
      {
        "question": "Why are the Twenty-Four Solar Terms (二十四节气) hailed as “China’s Fifth Great Invention” (中国的第五大发明)?",
        "options": [
          "Because ancient Chinese people summarized them by observing the sun, stars, and nature to guide farming across seasonal and weather changes.",
          "Because they were invented last year by modern smartphone weather apps.",
          "Because there are twenty-four months in the traditional Chinese calendar.",
          "Because they only exist in southern cities."
        ],
        "answerIndex": 0,
        "explanation": "The passage explains: “很早以前中国人就开始种地，很关心季节和天气的变化。有人通过观察太阳、星星和自然界的变化总结出了‘节气’，每个月两个节气，就有了二十四节气。”"
      },
      {
        "question": "According to Cultural Reader 3, why have the Twenty-Four Solar Terms become more of a cultural custom (一种风俗) in modern times?",
        "options": [
          "First, people have weather forecasts (天气预报); second, many people live in cities (住在城市里) far from farming.",
          "Because the sun and stars no longer change with the seasons.",
          "Because there are only three solar terms left in a year.",
          "Because nobody in China eats dumplings anymore."
        ],
        "answerIndex": 0,
        "explanation": "The author gives two clear reasons: “可是现在一是有天气预报，人们很容易就知道天气怎么样；二是很多人住在城市里，离种地很远，二十四节气更多是一种风俗。”"
      },
      {
        "question": "Match the three solar terms “立春”, “清明”, and “冬至” with their seasonal meanings and customs from the text:",
        "options": [
          "立春: Spring arrives · 清明: Warm weather for spring outings (春游) & tomb-sweeping (扫墓) · 冬至: True winter arrives & eating dumplings (吃饺子).",
          "立春: Hottest day of summer · 清明: Eating dumplings in snow · 冬至: Going on spring outings.",
          "立春: Buying umbrellas · 清明: Taking exams · 冬至: Riding bicycles.",
          "立春: Minor Cold · 清明: Major Heat · 冬至: Autumn Equinox."
        ],
        "answerIndex": 0,
        "explanation": "The passage states: “‘立春’——春天来了；‘清明’——天气暖和了，可以春游扫墓；‘冬至’——真正的冬天来了，应该吃饺子。”"
      },
      {
        "question": "Which four solar terms mark the hottest days of summer and the coldest days of winter that the author hopes will pass quickly?",
        "options": [
          "小暑、大暑 (Minor & Major Heat) and 小寒、大寒 (Minor & Major Cold).",
          "立春、立夏、立秋、立冬.",
          "春分、秋分、夏至、冬至.",
          "清明、谷雨、白露、霜降."
        ],
        "answerIndex": 0,
        "explanation": "The passage concludes: “有时候，我也会看看‘小暑’‘大暑’‘小寒’‘大寒’的时间，希望最热和最冷的日子快点儿过去。”"
      }
    ]
  },
  {
    "id": "lesson13",
    "title": "Lesson 10: I Want to Mail This Home — 第10课：我想把这个寄回家",
    "chineseTitle": "第10课：我想把这个寄回家",
    "unitBadge": "Mastering Chinese · Elementary 4 (会通汉语 精编版·初级4)",
    "description": "Master daily service interactions in China—exchanging currency, opening a bank card, ordering takeout, filling out courier forms on a mobile phone, mailing international parcels, and using the '把' construction and compound directional complements.",
    "content": "Synthesized from all four parts of Lesson 10 (第10课《我想把这个寄回家》（一）–（四）) in Mastering Chinese: Elementary 4 (会通汉语 精编版·初级4). Learners master 6 look-alike character pairs (同/问, 那/哪, 休/体, 直/真, 看/着, 住/往), 4 high-frequency radicals (宀, ⺮, 心, 广), compound directional complements (下去/出去/过来/上去), sequential actions (先 a，再 b), the disposal construction 把 + N + V + 到/在/回 + Place, polite requests (麻烦您/你……), and degree/number questions (多重, 多远, 多长时间, reading phone numbers with yāo).",
    "hskLevel": 4,
    "objectives": [
      "Distinguish 6 pairs of look-alike characters (同/问, 那/哪, 休/体, 直/真, 看/着, 住/往) and recognize 4 core semantic radicals (宀 roof/house, ⺮ bamboo, 心 heart/thought, 广 spacious building).",
      "Discuss currency exchange rates (美元兑人民币的汇率), opening a bank card with a passport (带护照去银行办卡), ordering set-meal takeout (点两份套餐外卖), and online grocery shopping (网上下单、放进购物车).",
      "Use compound directional complements (下去取、出去一趟、快递员过来取、带着菜上来) and the '先 a，再 b' sequential pattern to describe multi-step errands.",
      "Master the '把' disposal structure with locative complements (把 + N + V + 到/在/回 + 处所), polite requests with '麻烦您/你……', and '多 + Adj' degree questions (多重、多远、多长时间)."
    ],
    "phoneticsAndCharacters": {
      "title": "Look-Alike Character Pairs (形近字) & Semantic Radicals (宀 · ⺮ · 心 · 广)",
      "sections": [
        {
          "subtitle": "1. Six Look-Alike Character Pairs (比一比，读一读：形近字辨析)",
          "summary": "Pay close attention to subtle stroke differences that distinguish high-frequency characters in daily errands and directions:",
          "items": [
            {
              "label": "同 (tóng) vs. 问 (wèn)",
              "pinyin": "tóng · wèn",
              "detail": "同 uses an outer enclosure 冂 with a horizontal stroke 一 above 口 (同学 tóngxué, classmate); 问 uses the gate radical 门 enclosing 口 (问路 wènlù, ask for directions).",
              "examples": "同学 (tóngxué) · 问路 (wènlù)"
            },
            {
              "label": "那 (nà) vs. 哪 (nǎ)",
              "pinyin": "nà · nǎ",
              "detail": "那 means 'that' (那个 nàge); adding the mouth radical 口 on the left creates the question word 哪 'which / where' (哪国人 nǎ guó rén).",
              "examples": "那个 (nàge) · 哪国人 (nǎ guó rén)"
            },
            {
              "label": "休 (xiū) vs. 体 (tǐ)",
              "pinyin": "xiū · tǐ",
              "detail": "Both have 亻 (person) on the left; 休 has 木 (person leaning against a tree = 休息 xiūxi, to rest), whereas 体 adds a bottom horizontal stroke to form 本 (root/body = 身体 shēntǐ).",
              "examples": "休息 (xiūxi) · 身体 (shēntǐ)"
            },
            {
              "label": "直 (zhí) vs. 真 (zhēn)",
              "pinyin": "zhí · zhēn",
              "detail": "直 rests directly on a flat bottom horizontal stroke 一 (一直 yīzhí, straight/always); 真 rests on two bottom legs 八 below the horizontal stroke (真好 zhēn hǎo, really good).",
              "examples": "一直 (yīzhí) · 真好 (zhēn hǎo)"
            },
            {
              "label": "看 (kàn) vs. 着 (zhe / zháo)",
              "pinyin": "kàn · zhe",
              "detail": "看 places a hand 龸 over the eye 目 (看书 kànshū, read a book); 着 has sheep horns 䒑 at the top above 目 (走着 zǒuzhe, walking).",
              "examples": "看书 (kànshū) · 走着 (zǒuzhe)"
            },
            {
              "label": "住 (zhù) vs. 往 (wǎng)",
              "pinyin": "zhù · wǎng",
              "detail": "住 has single-person 亻 + 主 (person staying in one place = 住在 zhù zài); 往 has double-person 彳 + 主 (walking toward a direction = 往左拐 wǎng zuǒ guǎi).",
              "examples": "住在 (zhù zài) · 往左拐 (wǎng zuǒ guǎi)"
            }
          ]
        },
        {
          "subtitle": "2. Four Essential Radicals: 宀, ⺮, 心, and 广 (认识常用偏旁)",
          "summary": "Understanding where a radical appears and what semantic category it signals helps you remember characters systematically:",
          "items": [
            {
              "label": "宀 (宝盖头 bǎogàitóu — Roof / House Radical)",
              "pinyin": "mián (at the top)",
              "detail": "Appears at the top of a character and relates to houses, dwellings, or indoor shelter.",
              "examples": "寄 (jì, to mail) · 家 (jiā, home/family) · 宜 (yí, suitable/cheap in 便宜) · 字 (zì, character)"
            },
            {
              "label": "⺮ (竹字头 zhúzìtóu — Bamboo Radical)",
              "pinyin": "zhú (at the top)",
              "detail": "Appears at the top of a character and relates to bamboo or tools traditionally made from bamboo slips.",
              "examples": "签 (qiān, bamboo slip / sign in 签字) · 笔 (bǐ, pen/brush) · 筷 (kuài, chopsticks) · 算 (suàn, calculate)"
            },
            {
              "label": "心 (心字底 xīnzìdǐ — Heart / Mind Radical)",
              "pinyin": "xīn (at the bottom)",
              "detail": "Appears at the bottom of a character and relates to the heart, feelings, thoughts, and mental attitudes.",
              "examples": "怎 (zěn, how) · 想 (xiǎng, think/want) · 忘 (wàng, forget) · 您 (nín, polite you) · 意思 (yìsi, meaning)"
            },
            {
              "label": "广 (广字头 guǎngzìtóu — Cliff-Roof / Building Radical)",
              "pinyin": "guǎng (top-left enclosure)",
              "detail": "Encloses the top and left sides of a character and relates to spacious buildings, shops, or interior spaces.",
              "examples": "麻 (má, hemp/trouble in 麻烦) · 店 (diàn, shop/store) · 床 (chuáng, bed) · 度 (dù, degree) · 座 (zuò, seat)"
            }
          ]
        }
      ]
    },
    "dialogue": [
      {
        "character": "朱迪",
        "hanzi": "你刚才去哪儿了？",
        "pinyin": "Nǐ gāngcái qù nǎr le?",
        "translation": "Where did you just go?"
      },
      {
        "character": "莉莉",
        "hanzi": "我去给家人买了点儿礼物，换了点儿钱。",
        "pinyin": "Wǒ qù gěi jiārén mǎile diǎnr lǐwù, huànle diǎnr qián.",
        "translation": "I went to buy some gifts for my family and exchanged some money."
      },
      {
        "character": "朱迪",
        "hanzi": "现在美元兑人民币的汇率是多少了？",
        "pinyin": "Xiànzài Měiyuán duì Rénmínbì de huìlǜ shì duōshao le?",
        "translation": "What is the exchange rate from US dollars to RMB now?"
      },
      {
        "character": "莉莉",
        "hanzi": "1∶6.37。我现在先出去一趟，寄个包裹。",
        "pinyin": "Yī bǐ liù diǎn sān qī. Wǒ xiànzài xiān chūqù yí tàng, jì ge bāoguǒ.",
        "translation": "1 to 6.37. Right now I'm going out for a quick trip first to mail a parcel."
      },
      {
        "character": "朱迪",
        "hanzi": "你先在手机上填好单子，再去邮局寄东西，很快就能办好。",
        "pinyin": "Nǐ xiān zài shǒujī shang tiánhǎo dānzi, zài qù yóujú jì dōngxi, hěn kuài jiù néng bànhǎo.",
        "translation": "Fill out the form on your phone first, and then go to the post office to mail your things—it'll get done very quickly."
      }
    ],
    "dialogues": [
      {
        "title": "Dialogue 1: Exchanging Currency, Ordering Takeout & Mailing a Heavy Parcel (换钱、点外卖与寄包裹)",
        "context": "Judy (朱迪) asks Lily (莉莉) where she just went. They talk about the USD-to-RMB exchange rate, opening a bank card with a passport, ordering two set meals for dinner, and filling out a digital waybill on a phone before the post office closes at 5:00 PM.",
        "lines": [
          {
            "character": "朱迪",
            "hanzi": "你刚才去哪儿了？",
            "pinyin": "Nǐ gāngcái qù nǎr le?",
            "translation": "Where did you just go?"
          },
          {
            "character": "莉莉",
            "hanzi": "我去给家人买了点儿礼物，换了点儿钱。",
            "pinyin": "Wǒ qù gěi jiārén mǎile diǎnr lǐwù, huànle diǎnr qián.",
            "translation": "I went to buy some gifts for my family and exchanged some money."
          },
          {
            "character": "朱迪",
            "hanzi": "现在美元兑人民币的汇率是多少了？",
            "pinyin": "Xiànzài Měiyuán duì Rénmínbì de huìlǜ shì duōshao le?",
            "translation": "What is the exchange rate from US dollars to RMB now?"
          },
          {
            "character": "莉莉",
            "hanzi": "1∶6.37。",
            "pinyin": "Yī bǐ liù diǎn sān qī.",
            "translation": "1 to 6.37."
          },
          {
            "character": "朱迪",
            "hanzi": "哦。我最近也要去趟银行，我想办张卡，网上买东西什么的更方便些。",
            "pinyin": "Ò. Wǒ zuìjìn yě yào qù tàng yínháng, wǒ xiǎng bàn zhāng kǎ, wǎng shang mǎi dōngxi shénmede gèng fāngbiàn xiē.",
            "translation": "Oh. I also need to make a trip to the bank recently—I want to open a bank card so shopping online and such will be more convenient."
          },
          {
            "character": "莉莉",
            "hanzi": "你去办的时候记得带护照。",
            "pinyin": "Nǐ qù bàn de shíhou jìde dài hùzhào.",
            "translation": "Remember to bring your passport when you go to apply for it."
          },
          {
            "character": "朱迪",
            "hanzi": "好！今天晚上换一换，吃别的吧？",
            "pinyin": "Hǎo! Jīntiān wǎnshang huàn yi huàn, chī biéde ba?",
            "translation": "Okay! Let's have a change tonight and eat something different, shall we?"
          },
          {
            "character": "莉莉",
            "hanzi": "那点外卖吧，要两份套餐，够了吧？",
            "pinyin": "Nà diǎn wàimài ba, yào liǎng fèn tàocān, gòu le ba?",
            "translation": "Then let's order takeout—let's get two set meals, that should be enough, right?"
          },
          {
            "character": "朱迪",
            "hanzi": "够了。你点吧，到了以后我下去取。",
            "pinyin": "Gòu le. Nǐ diǎn ba, dàole yǐhòu wǒ xiàqù qǔ.",
            "translation": "That's enough. Go ahead and order; when it arrives I'll go downstairs to pick it up."
          },
          {
            "character": "莉莉",
            "hanzi": "好。我现在先出去一趟，寄个包裹。",
            "pinyin": "Hǎo. Wǒ xiànzài xiān chūqù yí tàng, jì ge bāoguǒ.",
            "translation": "Great. Right now I'm going out for a trip first to mail a parcel."
          },
          {
            "character": "朱迪",
            "hanzi": "挺忙的啊。呀！好重啊！快有十公斤了，运费很贵吧？",
            "pinyin": "Tǐng máng de a. Yā! Hǎo zhòng a! Kuài yǒu shí gōngjīn le, yùnfèi hěn guì ba?",
            "translation": "You're quite busy! Whoa! It's so heavy! It's almost ten kilograms—the shipping fee must be expensive, right?"
          },
          {
            "character": "莉莉",
            "hanzi": "不知道，去看看。对了，邮局几点关门？",
            "pinyin": "Bù zhīdào, qù kànkan. Duìle, yóujú jǐ diǎn guānmén?",
            "translation": "I don't know, I'll go see. By the way, what time does the post office close?"
          },
          {
            "character": "朱迪",
            "hanzi": "我记得是五点关门，早上八点半开门。",
            "pinyin": "Wǒ jìde shì wǔ diǎn guānmén, zǎoshang bā diǎn bàn kāimén.",
            "translation": "I remember it closes at five o'clock, and opens at eight-thirty in the morning."
          },
          {
            "character": "莉莉",
            "hanzi": "啊？现在已经四点了！",
            "pinyin": "Á? Xiànzài yǐjīng sì diǎn le!",
            "translation": "Huh? It's already four o'clock now!"
          },
          {
            "character": "朱迪",
            "hanzi": "你先在手机上填好单子，再去邮局寄东西，很快就能办好。",
            "pinyin": "Nǐ xiān zài shǒujī shang tiánhǎo dānzi, zài qù yóujú jì dōngxi, hěn kuài jiù néng bànhǎo.",
            "translation": "Fill out the form on your phone first, and then go to the post office to mail your things—it can be handled very quickly."
          },
          {
            "character": "莉莉",
            "hanzi": "这么方便？那太好了！怎么弄？",
            "pinyin": "Zhème fāngbiàn? Nà tài hǎo le! Zěnme nòng?",
            "translation": "That convenient? That's wonderful! How do I do it?"
          },
          {
            "character": "朱迪",
            "hanzi": "来！我教你！",
            "pinyin": "Lái! Wǒ jiāo nǐ!",
            "translation": "Come here! I'll teach you!"
          }
        ]
      },
      {
        "title": "Dialogue 2: At the Post Office & Courier Desk — Weighing a Parcel & Signing (在邮局寄国际包裹)",
        "context": "Jin Zhiying (金志英) mails a 2-kilogram package to Tokyo, Japan at the post office counter, compares standard vs. express shipping times and costs, checks her form, leaves her phone number, and signs for the shipment.",
        "lines": [
          {
            "character": "营业员",
            "hanzi": "您好，请问您要办什么业务？",
            "pinyin": "Nín hǎo, qǐngwèn nín yào bàn shénme yèwù?",
            "translation": "Hello, may I ask what service you would like to handle today?"
          },
          {
            "character": "金志英",
            "hanzi": "您好，我想把这个包裹寄到日本东京。",
            "pinyin": "Nín hǎo, wǒ xiǎng bǎ zhège bāoguǒ jì dào Rìběn Dōngjīng.",
            "translation": "Hello, I would like to mail this parcel to Tokyo, Japan."
          },
          {
            "character": "营业员",
            "hanzi": "好的，您把包裹放在这儿吧，我看看多重。两公斤。您寄普通还是特快？",
            "pinyin": "Hǎo de, nín bǎ bāoguǒ fàng zài zhèr ba, wǒ kànkan duō zhòng. Liǎng gōngjīn. Nín jì pǔtōng háishi tèkuài?",
            "translation": "Alright, please put the parcel here and let me see how heavy it is. Two kilograms. Would you like standard mail or express?"
          },
          {
            "character": "金志英",
            "hanzi": "寄普通最快几天能到？运费多少钱？",
            "pinyin": "Jì pǔtōng zuì kuài jǐ tiān néng dào? Yùnfèi duōshao qián?",
            "translation": "If I send it by standard mail, how many days will it take at the fastest? How much is the shipping fee?"
          },
          {
            "character": "营业员",
            "hanzi": "五到七天能到，两公斤一共二百二十元。您先在手机上填好单子，再在这儿签个字。",
            "pinyin": "Wǔ dào qī tiān néng dào, liǎng gōngjīn yígòng èrbǎi èrshí yuán. Nín xiān zài shǒujī shang tiánhǎo dānzi, zài zài zhèr qiān ge zì.",
            "translation": "It can arrive in five to seven days, and two kilograms is 220 yuan altogether. Please fill out the form on your phone first, and then sign your name here."
          },
          {
            "character": "金志英",
            "hanzi": "好的，麻烦您帮我看看单子填得对不对。上面留的是我的新手机号码：17782609997。",
            "pinyin": "Hǎo de, máfan nín bāng wǒ kànkan dānzi tián de duì bu duì. Shàngmian liú de shì wǒ de xīn shǒujī hàomǎ: yāo qī qī bā èr liù líng jiǔ jiǔ jiǔ qī.",
            "translation": "Okay, could I trouble you to help me check whether the form is filled out correctly? The number left on it is my new mobile number: 177-8260-9997."
          },
          {
            "character": "营业员",
            "hanzi": "填得很好，已经办好了！",
            "pinyin": "Tián de hěn hǎo, yǐjīng bànhǎo le!",
            "translation": "It's filled out very well—everything is all processed!"
          }
        ]
      }
    ],
    "readingPassage": {
      "title": "Reading: Lily's Chinese Letter to Her Brother & 24-Hour App Grocery Delivery (莉莉给哥哥的信与网上买菜)",
      "subtitle": "Synthesized from Lesson 10 Section 3·2 (给哥哥的信) and Section 4 (综合表达训练：网上超市买菜).",
      "paragraphs": [
        {
          "hanzi": "哥哥：你好！你看，我现在也能用中文写信了！我很好，你在北京怎么样？我今天特别开心。上午出去买东西，回学校的时候用手机叫了一辆出租车，司机师傅特别好，看我东西多，还帮我把东西搬到宿舍门口。我把东西放回宿舍以后，又和朱迪点了外卖，正好那家饭馆儿今天买一送一！好开心！",
          "pinyin": "Gēge: Nǐ hǎo! Nǐ kàn, wǒ xiànzài yě néng yòng Zhōngwén xiě xìn le! Wǒ hěn hǎo, nǐ zài Běijīng zěnmeyàng? Wǒ jīntiān tèbié kāixīn. Shàngwǔ chūqù mǎi dōngxi, huí xuéxiào de shíhou yòng shǒujī jiàole yí liàng chūzūchē, sījī shīfu tèbié hǎo, kàn wǒ dōngxi duō, hái bāng wǒ bǎ dōngxi bān dào sùshè ménkǒu. Wǒ bǎ dōngxi fàng huí sùshè yǐhòu, yòu hé Zhūdí diǎnle wàimài, zhènghǎo nà jiā fànguǎnr jīntiān mǎi yī sòng yī! Hǎo kāixīn!",
          "translation": "Dear Older Brother: Hello! Look, I can write letters in Chinese now too! I'm doing great—how are you doing in Beijing? I am especially happy today. In the morning I went out to buy things, and when returning to school I called a taxi using my phone. The driver was super kind—seeing that I had a lot of things, he even helped me carry my things to the dormitory entrance. After I put my things back in the dorm, Judy and I ordered takeout again, and it just so happened that the restaurant had a buy-one-get-one-free deal today! So happy!"
        },
        {
          "hanzi": "下午，我在网上给爸妈买的礼物都到了，我已经在手机上填好了单子，明天上午快递员过来取，很快就寄回家了。在中国生活真的很方便！对了，你给我寄的衣服还没收到，你可以帮我问问还有几天能到吗？是不是因为我换了新的手机号码？麻烦你再问问那里留的是不是我的新号码：10353508899。好了，祝你开心快乐，身体健康！妹妹：莉莉 3月20日。",
          "pinyin": "Xiàwǔ, wǒ zài wǎng shang gěi bàmā mǎi de lǐwù dōu dào le, wǒ yǐjīng zài shǒujī shang tiánhǎo le dānzi, míngtiān shàngwǔ kuàidìyuán guòlái qǔ, hěn kuài jiù jì huí jiā le. Zài Zhōngguó shēnghuó zhēn de hěn fāngbiàn! Duìle, nǐ gěi wǒ jì de yīfu hái méi shōudào, nǐ kěyǐ bāng wǒ wènwen hái yǒu jǐ tiān néng dào ma? Shì bu shì yīnwèi wǒ huànle xīn de shǒujī hàomǎ? Máfan nǐ zài wènwen nàlǐ liú de shì bu shì wǒ de xīn hàomǎ: yāo líng sān wǔ sān wǔ líng bā bā jiǔ jiǔ. Hǎo le, zhù nǐ kāixīn kuàilè, shēntǐ jiànkāng! Mèimei: Lìlì, sān yuè èrshí rì.",
          "translation": "In the afternoon, the gifts I bought online for Mom and Dad all arrived. I have already filled out the shipping form on my phone; tomorrow morning the courier will come over to pick them up, and they will be mailed home very soon. Living in China is truly convenient! By the way, I haven't received the clothes you mailed me yet—could you help me ask how many more days until they arrive? Could it be because I changed to a new phone number? Please trouble yourself to ask again whether the number left there is my new number: 103-5350-8899. Alright, wishing you happiness and good health! Your younger sister: Lily, March 20."
        },
        {
          "hanzi": "我最近爱上了在网上买菜！我家附近有一家大超市，24小时都开门，最方便的是可以从网上下单。先在手机上下载一个超市的App，再注册一个账号，就可以买东西了。看到你的单子，超市的服务员就会把那些东西装到袋子里，给他们的外卖员，外卖员30分钟左右就会帮你把东西送到家。今天我很忙、很累，到家以后不想下去买菜。打开App，把想买的菜放到购物车里，下单，等了25分钟，外卖员就带着我的菜上来了。真的太方便了！",
          "pinyin": "Wǒ zuìjìn àishàng le zài wǎng shang mǎi cài! Wǒ jiā fùjìn yǒu yì jiā dà chāoshì, èrshísì xiǎoshí dōu kāimén, zuì fāngbiàn de shì kěyǐ cóng wǎng shang xiàdān. Xiān zài shǒujī shang xiàzài yí ge chāoshì de App, zài zhùcè yí ge zhànghào, jiù kěyǐ mǎi dōngxi le. Kàndào nǐ de dānzi, chāoshì de fúwùyuán jiù huì bǎ nàxiē dōngxi zhuāng dào dàizi lǐ, gěi tāmen de wàimàiyuán, wàimàiyuán sānshí fēnzhōng zuǒyòu jiù huì bāng nǐ bǎ dōngxi sòng dào jiā. Jīntiān wǒ hěn máng, hěn lèi, dào jiā yǐhòu bù xiǎng xiàqù mǎi cài. Dǎkāi App, bǎ xiǎng mǎi de cài fàng dào gòuwùchē lǐ, xiàdān, děngle èrshíwǔ fēnzhōng, wàimàiyuán jiù dàizhe wǒ de cài shànglái le. Zhēn de tài fāngbiàn le!",
          "translation": "Recently I fell in love with buying groceries online! Near my home there is a big supermarket that is open 24 hours a day, and the most convenient thing is that you can place orders online. First download the supermarket's App on your phone, then register an account, and you can buy things. Seeing your order, the supermarket staff pack those items into bags and hand them to their delivery rider, who delivers the items to your home in around 30 minutes. Today I was very busy and tired, and after getting home I didn't want to go downstairs to buy groceries. I opened the App, put the groceries I wanted into the shopping cart, placed the order, waited 25 minutes, and the delivery rider came upstairs bringing my groceries. It's truly so convenient!"
        }
      ]
    },
    "vocabularyExplanation": [
      {
        "hanzi": "礼物",
        "pinyin": "lǐwù",
        "english": "gift; present",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "我去给家人买了点儿礼物。",
        "examplePinyin": "Wǒ qù gěi jiārén mǎile diǎnr lǐwù.",
        "exampleTranslation": "I went to buy some gifts for my family."
      },
      {
        "hanzi": "换",
        "pinyin": "huàn",
        "english": "to exchange (money); to change",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "我去银行换了点儿钱，还换了新的手机号码。",
        "examplePinyin": "Wǒ qù yínháng huànle diǎnr qián, hái huànle xīn de shǒujī hàomǎ.",
        "exampleTranslation": "I went to the bank to exchange some money, and also changed to a new phone number."
      },
      {
        "hanzi": "兑",
        "pinyin": "duì",
        "english": "to exchange; to convert (currency)",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "现在美元兑人民币的汇率是多少了？",
        "examplePinyin": "Xiànzài Měiyuán duì Rénmínbì de huìlǜ shì duōshao le?",
        "exampleTranslation": "What is the exchange rate from US dollars to RMB now?"
      },
      {
        "hanzi": "汇率",
        "pinyin": "huìlǜ",
        "english": "exchange rate",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "今天美元兑人民币的汇率是1∶6.37。",
        "examplePinyin": "Jīntiān Měiyuán duì Rénmínbì de huìlǜ shì yī bǐ liù diǎn sān qī.",
        "exampleTranslation": "Today's exchange rate from USD to RMB is 1 to 6.37."
      },
      {
        "hanzi": "最近",
        "pinyin": "zuìjìn",
        "english": "recently; lately",
        "partOfSpeech": "名 (time noun)",
        "exampleHanzi": "我最近也要去趟银行。",
        "examplePinyin": "Wǒ zuìjìn yě yào qù tàng yínháng.",
        "exampleTranslation": "I also need to make a trip to the bank recently."
      },
      {
        "hanzi": "办",
        "pinyin": "bàn",
        "english": "to handle; to apply for / set up (a card, visa, service)",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "我想去银行办张卡。",
        "examplePinyin": "Wǒ xiǎng qù yínháng bàn zhāng kǎ.",
        "exampleTranslation": "I want to go to the bank to open a bank card."
      },
      {
        "hanzi": "卡",
        "pinyin": "kǎ",
        "english": "card (bank card, transit card)",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "办张银行卡，网上买东西更方便。",
        "examplePinyin": "Bàn zhāng yínhángkǎ, wǎng shang mǎi dōngxi gèng fāngbiàn.",
        "exampleTranslation": "Opening a bank card makes online shopping more convenient."
      },
      {
        "hanzi": "记得",
        "pinyin": "jìde",
        "english": "to remember",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "你去办卡的时候记得带护照。",
        "examplePinyin": "Nǐ qù bàn kǎ de shíhou jìde dài hùzhào.",
        "exampleTranslation": "Remember to bring your passport when you go to open a card."
      },
      {
        "hanzi": "护照",
        "pinyin": "hùzhào",
        "english": "passport",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "去银行换钱或者办卡都要带护照。",
        "examplePinyin": "Qù yínháng huàn qián huòzhě bàn kǎ dōu yào dài hùzhào.",
        "exampleTranslation": "You must bring your passport whether going to the bank to exchange money or open a card."
      },
      {
        "hanzi": "外卖",
        "pinyin": "wàimài",
        "english": "takeout; food delivery",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "今天晚上我们点外卖吧。",
        "examplePinyin": "Jīntiān wǎnshang wǒmen diǎn wàimài ba.",
        "exampleTranslation": "Let's order takeout tonight."
      },
      {
        "hanzi": "份",
        "pinyin": "fèn",
        "english": "measure word for portions, set meals, copies, or gifts",
        "partOfSpeech": "量 (measure word)",
        "exampleHanzi": "要两份套餐，够了吧？",
        "examplePinyin": "Yào liǎng fèn tàocān, gòu le ba?",
        "exampleTranslation": "Let's get two set meals—that should be enough, right?"
      },
      {
        "hanzi": "套餐",
        "pinyin": "tàocān",
        "english": "set meal; combo meal",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "这家饭馆儿的套餐今天买一送一。",
        "examplePinyin": "Zhè jiā fànguǎnr de tàocān jīntiān mǎi yī sòng yī.",
        "exampleTranslation": "This restaurant's set meals are buy-one-get-one-free today."
      },
      {
        "hanzi": "够",
        "pinyin": "gòu",
        "english": "to be enough; sufficient",
        "partOfSpeech": "动/形 (verb/adj.)",
        "exampleHanzi": "两个人吃两份套餐够了。",
        "examplePinyin": "Liǎng ge rén chī liǎng fèn tàocān gòu le.",
        "exampleTranslation": "Two set meals are enough for two people."
      },
      {
        "hanzi": "下去",
        "pinyin": "xiàqù",
        "english": "to go down (away from the speaker)",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "外卖到了以后我下去取。",
        "examplePinyin": "Wàimài dàole yǐhòu wǒ xiàqù qǔ.",
        "exampleTranslation": "After the takeout arrives, I'll go downstairs to pick it up."
      },
      {
        "hanzi": "取",
        "pinyin": "qǔ",
        "english": "to pick up; to fetch; to withdraw (money)",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "明天上午快递员过来取包裹。",
        "examplePinyin": "Míngtiān shàngwǔ kuàidìyuán guòlái qǔ bāoguǒ.",
        "exampleTranslation": "Tomorrow morning the courier will come over to pick up the parcel."
      },
      {
        "hanzi": "出去",
        "pinyin": "chūqù",
        "english": "to go out (away from the speaker)",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "我现在先出去一趟，寄个包裹。",
        "examplePinyin": "Wǒ xiànzài xiān chūqù yí tàng, jì ge bāoguǒ.",
        "exampleTranslation": "I'm going out for a quick trip right now to mail a parcel."
      },
      {
        "hanzi": "寄",
        "pinyin": "jì",
        "english": "to mail; to send; to post",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "我想把这个包裹寄回家。",
        "examplePinyin": "Wǒ xiǎng bǎ zhège bāoguǒ jì huí jiā.",
        "exampleTranslation": "I want to mail this parcel back home."
      },
      {
        "hanzi": "包裹",
        "pinyin": "bāoguǒ",
        "english": "parcel; package",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "这个包裹快有十公斤了。",
        "examplePinyin": "Zhège bāoguǒ kuài yǒu shí gōngjīn le.",
        "exampleTranslation": "This parcel is almost ten kilograms."
      },
      {
        "hanzi": "重",
        "pinyin": "zhòng",
        "english": "heavy",
        "partOfSpeech": "形 (adj.)",
        "exampleHanzi": "呀！你的包裹好重啊！",
        "examplePinyin": "Yā! Nǐ de bāoguǒ hǎo zhòng a!",
        "exampleTranslation": "Whoa! Your parcel is so heavy!"
      },
      {
        "hanzi": "公斤",
        "pinyin": "gōngjīn",
        "english": "kilogram (kg)",
        "partOfSpeech": "量 (measure word)",
        "exampleHanzi": "这个包裹两公斤，运费二百二十元。",
        "examplePinyin": "Zhège bāoguǒ liǎng gōngjīn, yùnfèi èrbǎi èrshí yuán.",
        "exampleTranslation": "This parcel weighs two kilograms, and the shipping fee is 220 yuan."
      },
      {
        "hanzi": "运费",
        "pinyin": "yùnfèi",
        "english": "shipping fee; freight cost",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "寄到东京运费多少钱？",
        "examplePinyin": "Jì dào Dōngjīng yùnfèi duōshao qián?",
        "exampleTranslation": "How much is the shipping fee to mail it to Tokyo?"
      },
      {
        "hanzi": "关门",
        "pinyin": "guānmén",
        "english": "to close (of a shop, post office, bank); to shut the door",
        "partOfSpeech": "动 (VO verb)",
        "exampleHanzi": "邮局下午五点关门，早上八点半开门。",
        "examplePinyin": "Yóujú xiàwǔ wǔ diǎn guānmén, zǎoshang bā diǎn bàn kāimén.",
        "exampleTranslation": "The post office closes at 5:00 PM and opens at 8:30 AM."
      },
      {
        "hanzi": "填",
        "pinyin": "tián",
        "english": "to fill in; to fill out (a form)",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "你先在手机上填好单子。",
        "examplePinyin": "Nǐ xiān zài shǒujī shang tiánhǎo dānzi.",
        "exampleTranslation": "Fill out the form on your phone first."
      },
      {
        "hanzi": "单子",
        "pinyin": "dānzi",
        "english": "form; slip; waybill; order list",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "麻烦您帮我看看单子填得对不对。",
        "examplePinyin": "Máfan nín bāng wǒ kànkan dānzi tián de duì bu duì.",
        "exampleTranslation": "Could I trouble you to check whether the form is filled out correctly?"
      },
      {
        "hanzi": "这么",
        "pinyin": "zhème",
        "english": "so; this (modifying adjectives or verbs)",
        "partOfSpeech": "代 (pronoun)",
        "exampleHanzi": "在手机上填单子这么方便？",
        "examplePinyin": "Zài shǒujī shang tián dānzi zhème fāngbiàn?",
        "exampleTranslation": "Filling out the form on a phone is this convenient?"
      },
      {
        "hanzi": "弄",
        "pinyin": "nòng",
        "english": "to do; to handle; to work with (colloquial)",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "手机寄快递怎么弄？来，我教你！",
        "examplePinyin": "Shǒujī jì kuàidì zěnme nòng? Lái, wǒ jiāo nǐ!",
        "exampleTranslation": "How do you do courier shipping on a phone? Come, I'll teach you!"
      },
      {
        "hanzi": "快递",
        "pinyin": "kuàidì",
        "english": "express delivery; courier package",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "明天上午快递员过来取快递。",
        "examplePinyin": "Míngtiān shàngwǔ kuàidìyuán guòlái qǔ kuàidì.",
        "exampleTranslation": "Tomorrow morning the courier will come over to pick up the express package."
      },
      {
        "hanzi": "中文",
        "pinyin": "Zhōngwén",
        "english": "Chinese language (especially written/general Chinese)",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "我现在也能用中文写信了！",
        "examplePinyin": "Wǒ xiànzài yě néng yòng Zhōngwén xiě xìn le!",
        "exampleTranslation": "I can write letters in Chinese now too!"
      },
      {
        "hanzi": "信",
        "pinyin": "xìn",
        "english": "letter; mail",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "莉莉用中文给哥哥写了一封信。",
        "examplePinyin": "Lìlì yòng Zhōngwén gěi gēge xiěle yì fēng xìn.",
        "exampleTranslation": "Lily wrote a letter in Chinese to her older brother."
      },
      {
        "hanzi": "帮",
        "pinyin": "bāng",
        "english": "to help; to assist",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "司机师傅帮我把东西搬到宿舍门口。",
        "examplePinyin": "Sījī shīfu bāng wǒ bǎ dōngxi bān dào sùshè ménkǒu.",
        "exampleTranslation": "The taxi driver helped me carry my things to the dorm entrance."
      },
      {
        "hanzi": "把",
        "pinyin": "bǎ",
        "english": "disposal preposition placing the object before the verb",
        "partOfSpeech": "介 (preposition)",
        "exampleHanzi": "我把东西放回宿舍以后，又和朱迪点了外卖。",
        "examplePinyin": "Wǒ bǎ dōngxi fàng huí sùshè yǐhòu, yòu hé Zhūdí diǎnle wàimài.",
        "exampleTranslation": "After I put my things back in the dorm, Judy and I ordered takeout."
      },
      {
        "hanzi": "搬",
        "pinyin": "bān",
        "english": "to move; to carry (heavy objects)",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "请把那张桌子搬到房间里去。",
        "examplePinyin": "Qǐng bǎ nà zhāng zhuōzi bān dào fángjiān lǐ qù.",
        "exampleTranslation": "Please move that table into the room."
      },
      {
        "hanzi": "正好",
        "pinyin": "zhènghǎo",
        "english": "just in time; as it happens;刚好",
        "partOfSpeech": "副 (adverb)",
        "exampleHanzi": "正好那家饭馆儿今天买一送一！",
        "examplePinyin": "Zhènghǎo nà jiā fànguǎnr jīntiān mǎi yī sòng yī!",
        "exampleTranslation": "As it happened, that restaurant had a buy-one-get-one-free deal today!"
      },
      {
        "hanzi": "收到",
        "pinyin": "shōudào",
        "english": "to receive; to get",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "你给我寄的衣服还没收到。",
        "examplePinyin": "Nǐ gěi wǒ jì de yīfu hái méi shōudào.",
        "exampleTranslation": "I haven't received the clothes you mailed me yet."
      },
      {
        "hanzi": "号码",
        "pinyin": "hàomǎ",
        "english": "number (phone number, room number)",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "我换了新的手机号码。",
        "examplePinyin": "Wǒ huànle xīn de shǒujī hàomǎ.",
        "exampleTranslation": "I changed to a new mobile phone number."
      },
      {
        "hanzi": "麻烦",
        "pinyin": "máfan",
        "english": "to trouble somebody (polite request); troublesome",
        "partOfSpeech": "动/形 (verb/adj.)",
        "exampleHanzi": "麻烦你再问问那里留的是不是我的新号码。",
        "examplePinyin": "Máfan nǐ zài wènwen nàlǐ liú de shì bu shì wǒ de xīn hàomǎ.",
        "exampleTranslation": "Could I trouble you to ask again whether the number left there is my new number?"
      },
      {
        "hanzi": "留",
        "pinyin": "liú",
        "english": "to leave behind (a message, phone number, address); to stay",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "单子上留的是我的新手机号码。",
        "examplePinyin": "Dānzi shang liú de shì wǒ de xīn shǒujī hàomǎ.",
        "exampleTranslation": "What is left on the form is my new mobile number."
      },
      {
        "hanzi": "签字",
        "pinyin": "qiānzì",
        "english": "to sign one's name",
        "partOfSpeech": "动 (VO verb)",
        "exampleHanzi": "请您在这儿签个字。",
        "examplePinyin": "Qǐng nín zài zhèr qiān ge zì.",
        "exampleTranslation": "Please sign your name here."
      },
      {
        "hanzi": "下单",
        "pinyin": "xiàdān",
        "english": "to place an order (online or in a shop)",
        "partOfSpeech": "动 (VO verb)",
        "exampleHanzi": "这家超市24小时可以从网上下单。",
        "examplePinyin": "Zhè jiā chāoshì èrshísì xiǎoshí kěyǐ cóng wǎng shang xiàdān.",
        "exampleTranslation": "You can place orders online 24 hours a day at this supermarket."
      },
      {
        "hanzi": "下载",
        "pinyin": "xiàzài",
        "english": "to download",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "先在手机上下载一个超市的App。",
        "examplePinyin": "Xiān zài shǒujī shang xiàzài yí ge chāoshì de App.",
        "exampleTranslation": "First download the supermarket's App on your phone."
      },
      {
        "hanzi": "注册",
        "pinyin": "zhùcè",
        "english": "to register; to sign up",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "下载App以后，再注册一个账号。",
        "examplePinyin": "Xiàzài App yǐhòu, zài zhùcè yí ge zhànghào.",
        "exampleTranslation": "After downloading the App, register an account."
      },
      {
        "hanzi": "账号",
        "pinyin": "zhànghào",
        "english": "account; username",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "注册一个账号就可以在网上买东西了。",
        "examplePinyin": "Zhùcè yí ge zhànghào jiù kěyǐ zài wǎng shang mǎi dōngxi le.",
        "exampleTranslation": "Once you register an account, you can buy things online."
      },
      {
        "hanzi": "装",
        "pinyin": "zhuāng",
        "english": "to pack; to put into; to load",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "服务员会把那些东西装到袋子里。",
        "examplePinyin": "Fúwùyuán huì bǎ nàxiē dōngxi zhuāng dào dàizi lǐ.",
        "exampleTranslation": "The staff member will pack those items into a bag."
      },
      {
        "hanzi": "袋子",
        "pinyin": "dàizi",
        "english": "bag; sack; pouch",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "请把苹果装到这个袋子里。",
        "examplePinyin": "Qǐng bǎ píngguǒ zhuāng dào zhège dàizi lǐ.",
        "exampleTranslation": "Please put the apples into this bag."
      },
      {
        "hanzi": "累",
        "pinyin": "lèi",
        "english": "tired; exhausted",
        "partOfSpeech": "形 (adj.)",
        "exampleHanzi": "今天我很忙、很累，不想下去买菜。",
        "examplePinyin": "Jīntiān wǒ hěn máng, hěn lèi, bù xiǎng xiàqù mǎi cài.",
        "exampleTranslation": "Today I am very busy and tired, and don't want to go downstairs to buy groceries."
      },
      {
        "hanzi": "购物车",
        "pinyin": "gòuwùchē",
        "english": "shopping cart (physical or online)",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "把想买的菜放到购物车里，就可以下单了。",
        "examplePinyin": "Bǎ xiǎng mǎi de cài fàng dào gòuwùchē lǐ, jiù kěyǐ xiàdān le.",
        "exampleTranslation": "Put the groceries you want to buy into the shopping cart, and then you can place the order."
      }
    ],
    "grammarPoint": "Compound Directional Complements, '先 a，再 b', and the '把 + N + V + 到/在/回 + Place' Construction",
    "structure": "Subject + 把 + Object + Verb + 到 / 在 / 回 + Place  |  先 + Action A，再 + Action B",
    "explanation": "Lesson 10 introduces five core grammatical patterns for handling everyday errands in China: (1) compound directional verbs formed by combiningの上/下/进/出/过/回 with 来 (toward the speaker) or 去 (away from the speaker); (2) ordering steps with 先 a，再 b; (3) the 把 disposal sentence showing how an action moves or places an object at a destination (到/在/回); (4) polite requests with 麻烦您/你……; and (5) asking about weight, distance, or duration with 多 + Adjective.",
    "examples": [
      {
        "hanzi": "司机师傅帮我把东西搬到宿舍门口。",
        "pinyin": "Sījī shīfu bāng wǒ bǎ dōngxi bān dào sùshè ménkǒu.",
        "translation": "The taxi driver helped me move my things to the dormitory entrance."
      },
      {
        "hanzi": "你先在手机上填好单子，再去邮局寄东西。",
        "pinyin": "Nǐ xiān zài shǒujī shang tiánhǎo dānzi, zài qù yóujú jì dōngxi.",
        "translation": "Fill out the form on your phone first, and then go to the post office to mail your things."
      },
      {
        "hanzi": "外卖到了以后我下去取；明天上午快递员过来取包裹。",
        "pinyin": "Wàimài dàole yǐhòu wǒ xiàqù qǔ; míngtiān shàngwǔ kuàidìyuán guòlái qǔ bāoguǒ.",
        "translation": "When the takeout arrives I'll go downstairs to pick it up; tomorrow morning the courier will come over to pick up the parcel."
      }
    ],
    "grammarNotes": [
      {
        "title": "1. Compound Directional Verbs (复合趋向动词：上/下/进/出/过/回 + 来/去)",
        "structure": "上 / 下 / 进 / 出 / 过 / 回 + 来 (toward speaker) / 去 (away from speaker)",
        "explanation": "A single-character directional verb (上 up, 下 down, 进 in, 出 out, 过 across/over, 回 back) combines with 来 (movement toward the speaker's current location) or 去 (movement away from the speaker's current location) to form a compound directional verb.",
        "tip": "If the speaker is upstairs in the dorm, going downstairs to get takeout is 下去 ('go down'), while the delivery rider bringing groceries upstairs toward the speaker is 上来 ('come up').",
        "examples": [
          {
            "hanzi": "你点外卖吧，到了以后我下去取。",
            "pinyin": "Nǐ diǎn wàimài ba, dàole yǐhòu wǒ xiàqù qǔ.",
            "translation": "Go ahead and order takeout; after it arrives I will go downstairs to pick it up."
          },
          {
            "hanzi": "我现在先出去一趟，寄个包裹。",
            "pinyin": "Wǒ xiànzài xiān chūqù yí tàng, jì ge bāoguǒ.",
            "translation": "Right now I'm going out for a quick trip to mail a parcel."
          },
          {
            "hanzi": "明天上午快递员过来取包裹。",
            "pinyin": "Míngtiān shàngwǔ kuàidìyuán guòlái qǔ bāoguǒ.",
            "translation": "Tomorrow morning the courier will come over here to pick up the parcel."
          },
          {
            "hanzi": "等了25分钟，外卖员就带着我的菜上来了。",
            "pinyin": "Děngle èrshíwǔ fēnzhōng, wàimàiyuán jiù dàizhe wǒ de cài shànglái le.",
            "translation": "After waiting 25 minutes, the delivery rider came upstairs bringing my groceries."
          }
        ]
      },
      {
        "title": "2. Sequential Actions with '先 a，再 b' & Asking Business Hours ('几点开门/关门')",
        "structure": "先 + Action A，再 + Action B  |  [Place] + 几点 + 开门 / 关门？",
        "explanation": "Use '先 a，再 b' ('first do A, then do B') to explain procedural steps such as filling out an electronic shipping slip before visiting the counter, or downloading an App before registering an account. To ask or state when a business opens or closes, use '几点开门/关门' and '[Time] + 开门/关门'.",
        "tip": "In procedural descriptions (present/future), use 再 (zài) for the second step rather than 又.",
        "examples": [
          {
            "hanzi": "你先在手机上填好单子，再去邮局寄东西，很快就能办好。",
            "pinyin": "Nǐ xiān zài shǒujī shang tiánhǎo dānzi, zài qù yóujú jì dōngxi, hěn kuài jiù néng bànhǎo.",
            "translation": "First fill out the form on your phone, then go to the post office to mail your things—it'll get done very quickly."
          },
          {
            "hanzi": "先在手机上下载一个超市的App，再注册一个账号，就可以买东西了。",
            "pinyin": "Xiān zài shǒujī shang xiàzài yí ge chāoshì de App, zài zhùcè yí ge zhànghào, jiù kěyǐ mǎi dōngxi le.",
            "translation": "First download the supermarket's App on your phone, then register an account, and you can buy things."
          },
          {
            "hanzi": "邮局几点关门？——我记得是下午五点关门，早上八点半开门。",
            "pinyin": "Yóujú jǐ diǎn guānmén? — Wǒ jìde shì xiàwǔ wǔ diǎn guānmén, zǎoshang bā diǎn bàn kāimén.",
            "translation": "What time does the post office close? — I remember it closes at 5:00 PM and opens at 8:30 AM."
          }
        ]
      },
      {
        "title": "3. The '把' Construction for Moving or Placing Objects (把 + N + V + 到/在/回 + 处所)",
        "structure": "Subject (+ 帮 + Person) + 把 + Definite Object + Verb (搬/放/寄/装/送) + 到 / 在 / 回 + Location",
        "explanation": "When an action causes a known object (N) to change its location or end up at a specific destination, Mandarin uses the '把' sentence structure instead of placing the object after the verb. Verbs of placement and transport (搬 move, 放 put, 寄 mail, 装 pack, 送 deliver) are followed by 到 (to), 在 (at/in), or 回 (back to) plus the destination.",
        "tip": "Negative adverbs (没, 不) and modal verbs (想, 要, 会) must be placed BEFORE 把 (e.g., 我想把这个寄回家).",
        "examples": [
          {
            "hanzi": "我想把这个包裹寄回家 / 寄到日本东京。",
            "pinyin": "Wǒ xiǎng bǎ zhège bāoguǒ jì huí jiā / jì dào Rìběn Dōngjīng.",
            "translation": "I want to mail this parcel back home / to Tokyo, Japan."
          },
          {
            "hanzi": "司机师傅帮我把东西搬到宿舍门口。",
            "pinyin": "Sījī shīfu bāng wǒ bǎ dōngxi bān dào sùshè ménkǒu.",
            "translation": "The taxi driver helped me move my things to the dormitory entrance."
          },
          {
            "hanzi": "我把东西放回宿舍以后，又和朱迪点了外卖。",
            "pinyin": "Wǒ bǎ dōngxi fàng huí sùshè yǐhòu, yòu hé Zhūdí diǎnle wàimài.",
            "translation": "After I put my things back in the dormitory, Judy and I ordered takeout."
          },
          {
            "hanzi": "把想买的菜放到购物车里，外卖员30分钟左右就会帮你把东西送到家。",
            "pinyin": "Bǎ xiǎng mǎi de cài fàng dào gòuwùchē lǐ, wàimàiyuán sānshí fēnzhōng zuǒyòu jiù huì bāng nǐ bǎ dōngxi sòng dào jiā.",
            "translation": "Put the groceries you want to buy into the shopping cart, and the rider will deliver the items to your home in about 30 minutes."
          }
        ]
      },
      {
        "title": "4. Polite Requests with '麻烦您/你……' and '你可以帮我……吗？'",
        "structure": "麻烦您 / 你 + Verb Phrase  |  你 / 您可以帮我 + Verb Phrase + 吗？",
        "explanation": "When asking a clerk, courier, or friend for assistance, start with '麻烦您/你……' ('Excuse me for troubling you to...') or use '你可以帮我……吗？' ('Could you help me...?').",
        "tip": "Pair 麻烦您 with verb reduplication (看看, 问问) to make the request sound warm, natural, and polite.",
        "examples": [
          {
            "hanzi": "麻烦您帮我看看单子填得对不对。",
            "pinyin": "Máfan nín bāng wǒ kànkan dānzi tián de duì bu duì.",
            "translation": "Could I trouble you to help me check whether the form is filled out correctly?"
          },
          {
            "hanzi": "麻烦你再问问那里留的是不是我的新号码。",
            "pinyin": "Máfan nǐ zài wènwen nàlǐ liú de shì bu shì wǒ de xīn hàomǎ.",
            "translation": "Please trouble yourself to ask again whether the number left there is my new number."
          },
          {
            "hanzi": "你可以帮我问问还有几天能到吗？",
            "pinyin": "Nǐ kěyǐ bāng wǒ wènwen hái yǒu jǐ tiān néng dào ma?",
            "translation": "Could you help me ask how many more days until it arrives?"
          }
        ]
      },
      {
        "title": "5. Asking Degree with '多 + Adj (+ N)' & Reading Phone Numbers ('幺 yāo')",
        "structure": "多 + 重 / 远 / 大 / 高 / 长时间  |  Digit-by-Digit Reading ('1' read as yāo)",
        "explanation": "'多 (duō)' placed before a single-syllable adjective (多重 how heavy, 多远 how far, 多大 how old/big, 多高 how tall) or '多长时间 (how long)' queries exact measurements. When reading phone numbers, room numbers, or tracking numbers digit-by-digit, the digit '1' is pronounced '幺 (yāo)' to avoid confusion with '7 (qī)', and '2' is always read '二 (èr)', never '两'.",
        "tip": "Example: 10353508899 is read 'yāo líng sān wǔ sān wǔ líng bā bā jiǔ jiǔ'.",
        "examples": [
          {
            "hanzi": "我看看这个包裹多重。——两公斤。",
            "pinyin": "Wǒ kànkan zhège bāoguǒ duō zhòng. — Liǎng gōngjīn.",
            "translation": "Let me see how heavy this parcel is. — Two kilograms."
          },
          {
            "hanzi": "从你家到邮局有多远？走路要多长时间？",
            "pinyin": "Cóng nǐ jiā dào yóujú yǒu duō yuǎn? Zǒulù yào duō cháng shíjiān?",
            "translation": "How far is it from your home to the post office? How long does it take to walk?"
          },
          {
            "hanzi": "我的新手机号码是10353508899（幺零三五三五零八八九九）。",
            "pinyin": "Wǒ de xīn shǒujī hàomǎ shì yāo líng sān wǔ sān wǔ líng bā bā jiǔ jiǔ.",
            "translation": "My new mobile phone number is 103-5350-8899."
          }
        ]
      }
    ],
    "exercises": [
      {
        "question": "In Dialogue 1, what advice does Judy give Lily when Lily realizes it is already 4:00 PM and the post office closes at 5:00 PM?",
        "promptHanzi": "你先在手机上填好单子，再去邮局寄东西，很快就能办好。",
        "promptPinyin": "Nǐ xiān zài shǒujī shang tiánhǎo dānzi, zài qù yóujú jì dōngxi, hěn kuài jiù néng bànhǎo.",
        "options": [
          "First fill out the shipping form on her phone (先在手机上填好单子), and then go to the post office to mail the parcel (再去邮局寄东西).",
          "Wait until next week to mail the parcel because the post office is already closed.",
          "Ask the taxi driver to mail the parcel without filling out any form.",
          "Go to the bank first to exchange US dollars before buying a suitcase."
        ],
        "answerIndex": 0,
        "explanation": "Judy uses the sequential pattern '先 a，再 b': “你先在手机上填好单子，再去邮局寄东西，很快就能办好。”"
      },
      {
        "question": "Which sentence from Lily's letter correctly uses the '把' construction to show moving an object to a specific location?",
        "options": [
          "司机师傅帮我把东西搬到宿舍门口。",
          "司机师傅把搬到宿舍门口东西帮我。",
          "我把宿舍门口搬到东西。",
          "把司机师傅帮我搬到东西宿舍门口。"
        ],
        "answerIndex": 0,
        "explanation": "The structure is Subject + (帮 + Person) + 把 + Object (东西) + Verb (搬) + 到 + Location (宿舍门口): “司机师傅帮我把东西搬到宿舍门口。”"
      },
      {
        "question": "Suppose you are upstairs in your apartment and the supermarket rider brings your groceries upstairs to your door. Which compound directional verb matches the textbook passage?",
        "promptHanzi": "等了25分钟，外卖员就带着我的菜______了。",
        "promptPinyin": "Děngle èrshíwǔ fēnzhōng, wàimàiyuán jiù dàizhe wǒ de cài ______ le.",
        "options": [
          "上来 (shànglái — come up toward the speaker)",
          "下去 (xiàqù — go down away from the speaker)",
          "出去 (chūqù — go out away from the speaker)",
          "回去 (huíqù — go back away from the speaker)"
        ],
        "answerIndex": 0,
        "explanation": "Since the speaker is upstairs at home and the rider moves upward toward the speaker, the passage uses '上来': “等了25分钟，外卖员就带着我的菜上来了。”"
      },
      {
        "question": "How is the digit '1' pronounced when reading a Chinese mobile phone number such as 10353508899 aloud?",
        "options": [
          "幺 (yāo) — to distinguish it clearly from 七 (qī).",
          "两 (liǎng) — because it is a measure word.",
          "零 (líng) — because all phone numbers start with zero.",
          "双 (shuāng) — to indicate a pair of numbers."
        ],
        "answerIndex": 0,
        "explanation": "In spoken Mandarin, the digit '1' in phone numbers, room numbers, and bus/train numbers is read '幺 (yāo)' so it is never confused with '七 (qī)'."
      }
    ]
  },
  {
    "id": "lesson14",
    "title": "Lesson 11: My Head Is Hurting More and More — 第11课：头越来越疼了",
    "chineseTitle": "第11课：头越来越疼了",
    "unitBadge": "Mastering Chinese · Elementary 4 (会通汉语 精编版·初级4)",
    "description": "Learn how to describe symptoms at a hospital clinic, discuss body temperature and medical treatments, visit a friend recovering from surgery, and give health and lifestyle advice using '越来越', '开始……，后来……', '只是', and '应该多/少 + V'.",
    "content": "Synthesized from all four parts of Lesson 11 (第11课《头越来越疼了》（一）–（四）) in Mastering Chinese: Elementary 4 (会通汉语 精编版·初级4). Learners master 6 look-alike character pairs (工/红, 元/园, 坐/座, 过/对, 晴/睛, 超/起), 4 health/body/plant/clothing radicals (月, 疒, 艹, 衤), medical consultations for acute appendicitis (急性阑尾炎) and fevers, narrative progression (开始……，后来……; 越来越……), degree adverbs (比较 vs. 有点儿), mild contrast (只是), and giving health advice (应该多休息、少熬夜).",
    "hskLevel": 4,
    "objectives": [
      "Distinguish 6 pairs of look-alike characters (工/红, 元/园, 坐/座, 过/对, 晴/睛, 超/起) and recognize 4 semantic radicals: 月 (flesh/body organs), 疒 (illness/pain), 艹 (plants/herbs/medicine), and 衤 (clothing).",
      "Describe physical symptoms and medical exams at a clinic (肚子疼、想吐、没有力气、发烧、量体温38.3度、急性阑尾炎、做小手术、住院治疗).",
      "Use '开始……，后来……' and '越来越 + Adj / Mental Verb' to narrate how a condition or situation develops over time.",
      "Give caring lifestyle and health advice using '应该 + V (+ N)', '多 / 少 + V (+ N)', '好好 + V', and '别再熬夜了'."
    ],
    "phoneticsAndCharacters": {
      "title": "Look-Alike Character Pairs (形近字) & Health Radicals (月 · 疒 · 艹 · 衤)",
      "sections": [
        {
          "subtitle": "1. Six Look-Alike Character Pairs (比一比，读一读：形近字辨析)",
          "summary": "Compare base characters with characters that add a semantic radical or modify an enclosure:",
          "items": [
            {
              "label": "工 (gōng) vs. 红 (hóng)",
              "pinyin": "gōng · hóng",
              "detail": "工 is a standalone character meaning 'work' (工作 gōngzuò); adding the silk radical 纟 on the left forms 红 'red' (红绿灯 hónglǜdēng, traffic light).",
              "examples": "工作 (gōngzuò) · 红绿灯 (hónglǜdēng)"
            },
            {
              "label": "元 (yuán) vs. 园 (yuán)",
              "pinyin": "yuán · yuán",
              "detail": "元 is the currency unit 'yuan' (一元 yì yuán); enclosing 元 inside 囗 forms 园 'garden/park' (公园 gōngyuán).",
              "examples": "一元 (yì yuán) · 公园 (gōngyuán)"
            },
            {
              "label": "坐 (zuò) vs. 座 (zuò)",
              "pinyin": "zuò · zuò",
              "detail": "坐 (two people 两人 on earth 土) is the verb 'to sit' (坐下 zuòxià); adding the building radical 广 forms the noun/measure word 座 'seat' (座位 zuòwèi).",
              "examples": "坐下 (zuòxià) · 座位 (zuòwèi)"
            },
            {
              "label": "过 (guò) vs. 对 (duì)",
              "pinyin": "guò · duì",
              "detail": "过 combines 寸 with the walking radical 辶 (过来 guòlái, come over); 对 combines 又 with 寸 (对面 duìmiàn, opposite side).",
              "examples": "过来 (guòlái) · 对面 (duìmiàn)"
            },
            {
              "label": "晴 (qíng) vs. 睛 (jīng)",
              "pinyin": "qíng · jīng",
              "detail": "晴 has the sun radical 日 on the left (晴天 qíngtiān, sunny day); 睛 has the eye radical 目 on the left (眼睛 yǎnjing, eye).",
              "examples": "晴天 (qíngtiān) · 眼睛 (yǎnjing)"
            },
            {
              "label": "超 (chāo) vs. 起 (qǐ)",
              "pinyin": "chāo · qǐ",
              "detail": "Both share the walking/running radical 走; 超 has 召 inside (超市 chāoshì, supermarket), while 起 has 己 inside (一起 yìqǐ, together).",
              "examples": "超市 (chāoshì) · 一起 (yìqǐ)"
            }
          ]
        },
        {
          "subtitle": "2. Four Essential Radicals: 月 (肉), 疒, 艹, and 衤 (认识常用偏旁)",
          "summary": "These four radicals are essential for reading medical, anatomical, herbal, and everyday vocabulary:",
          "items": [
            {
              "label": "月 (肉月旁 ròuyuèpáng — Flesh / Body Organ Radical)",
              "pinyin": "ròu / yuè (left or bottom)",
              "detail": "Derived from 肉 (flesh), this radical appears on the left or bottom of characters denoting parts of the human body or physical build.",
              "examples": "肚 (dù, belly in 肚子) · 胃 (wèi, stomach) · 胖 (pàng, fat/plump) · 腰 (yāo, waist) · 脖 (bó, neck) · 腿 (tuǐ, leg)"
            },
            {
              "label": "疒 (病字旁 bìngzìpáng — Sickness / Illness Radical)",
              "pinyin": "nè (top-left enclosure)",
              "detail": "Represents a person lying on a sickbed and encloses the top-left of characters related to pain, disease, and physical weakness.",
              "examples": "疼 (téng, ache/hurt) · 病 (bìng, illness/sick) · 瘦 (shòu, thin/weight loss)"
            },
            {
              "label": "艹 (草字头 cǎozìtóu — Grass / Plant / Herb Radical)",
              "pinyin": "cǎo (at the top)",
              "detail": "Appears at the top of characters related to plants, vegetables, tea leaves, and herbal medicine.",
              "examples": "药 (yào, medicine) · 茶 (chá, tea) · 菜 (cài, vegetable/dish)"
            },
            {
              "label": "衤 (衣字旁 yīzìpáng — Clothing / Garment Radical)",
              "pinyin": "yī (on the left)",
              "detail": "Appears on the left of characters related to clothing and garments (note the single dot on the right, distinct from 礻).",
              "examples": "裤 (kù, trousers) · 裙 (qún, skirt) · 衫 (shān, shirt)"
            }
          ]
        }
      ]
    },
    "dialogue": [
      {
        "character": "医生",
        "hanzi": "你好！怎么了？哪儿不舒服？",
        "pinyin": "Nǐ hǎo! Zěnme le? Nǎr bù shūfu?",
        "translation": "Hello! What's wrong? Where do you feel unwell?"
      },
      {
        "character": "马克",
        "hanzi": "我肚子疼，很想吐，也没有力气。开始只是有点儿疼，后来越来越疼。",
        "pinyin": "Wǒ dùzi téng, hěn xiǎng tù, yě méiyǒu lìqi. Kāishǐ zhǐshì yǒudiǎnr téng, hòulái yuèláiyuè téng.",
        "translation": "My stomach hurts, I really feel like throwing up, and I have no strength. At first it only hurt a little, and later it hurt more and more."
      },
      {
        "character": "医生",
        "hanzi": "发烧吗？刚才量体温了吧？多少度？",
        "pinyin": "Fāshāo ma? Gāngcái liáng tǐwēn le ba? Duōshao dù?",
        "translation": "Do you have a fever? You just took your temperature, right? How many degrees?"
      },
      {
        "character": "马克",
        "hanzi": "量了，38.3度。医生，我得了什么病？严重吗？",
        "pinyin": "Liáng le, sānshíbā diǎn sān dù. Yīshēng, wǒ déle shénme bìng? Yánzhòng ma?",
        "translation": "I took it—38.3 degrees. Doctor, what illness did I get? Is it serious?"
      },
      {
        "character": "医生",
        "hanzi": "不太严重，是急性阑尾炎。做手术比较好，就是个小手术，半个小时到一个小时就做好了。",
        "pinyin": "Bú tài yánzhòng, shì jíxìng lánwěiyán. Zuò shǒushù bǐjiào hǎo, jiùshì ge xiǎo shǒushù, bàn ge xiǎoshí dào yí ge xiǎoshí jiù zuòhǎo le.",
        "translation": "Not too serious—it's acute appendicitis. Having surgery is better; it's just a minor operation and will be done in half an hour to an hour."
      }
    ],
    "dialogues": [
      {
        "title": "Dialogue 1: At the Hospital Clinic — Diagnosing Acute Appendicitis (在医院看病：急性阑尾炎)",
        "context": "Mark (马克) goes to the hospital clinic with worsening abdominal pain, nausea, weakness, and a 38.3°C fever. The doctor examines him, diagnoses acute appendicitis (急性阑尾炎), and reassures him that a minor 30–60 minute surgery will resolve it.",
        "lines": [
          {
            "character": "马克",
            "hanzi": "医生，您好。",
            "pinyin": "Yīshēng, nín hǎo.",
            "translation": "Hello, Doctor."
          },
          {
            "character": "医生",
            "hanzi": "你好！怎么了？哪儿不舒服？",
            "pinyin": "Nǐ hǎo! Zěnme le? Nǎr bù shūfu?",
            "translation": "Hello! What's the matter? Where do you feel unwell?"
          },
          {
            "character": "马克",
            "hanzi": "我肚子疼，很想吐，也没有力气。",
            "pinyin": "Wǒ dùzi téng, hěn xiǎng tù, yě méiyǒu lìqi.",
            "translation": "My stomach hurts, I really feel like vomiting, and I have no strength."
          },
          {
            "character": "医生",
            "hanzi": "什么时候开始的？",
            "pinyin": "Shénme shíhou kāishǐ de?",
            "translation": "When did it start?"
          },
          {
            "character": "马克",
            "hanzi": "前天早上。",
            "pinyin": "Qiántiān zǎoshang.",
            "translation": "The morning before yesterday."
          },
          {
            "character": "医生",
            "hanzi": "是这儿疼吗？",
            "pinyin": "Shì zhèr téng ma?",
            "translation": "Does it hurt right here?"
          },
          {
            "character": "马克",
            "hanzi": "对对对！开始只是有点儿疼，后来越来越疼。",
            "pinyin": "Duì duì duì! Kāishǐ zhǐshì yǒudiǎnr téng, hòulái yuèláiyuè téng.",
            "translation": "Yes, yes, yes! At first it only hurt a little bit, and later it hurt more and more."
          },
          {
            "character": "医生",
            "hanzi": "发烧吗？刚才量体温了吧？多少度？",
            "pinyin": "Fāshāo ma? Gāngcái liáng tǐwēn le ba? Duōshao dù?",
            "translation": "Do you have a fever? You took your temperature just now, right? How many degrees?"
          },
          {
            "character": "马克",
            "hanzi": "量了，38.3度。医生，我得了什么病？严重吗？",
            "pinyin": "Liáng le, sānshíbā diǎn sān dù. Yīshēng, wǒ déle shénme bìng? Yánzhòng ma?",
            "translation": "I took it—38.3°C. Doctor, what illness do I have? Is it serious?"
          },
          {
            "character": "医生",
            "hanzi": "不太严重，是急性阑尾炎。",
            "pinyin": "Bú tài yánzhòng, shì jíxìng lánwěiyán.",
            "translation": "It's not too serious; it's acute appendicitis."
          },
          {
            "character": "马克",
            "hanzi": "啊？那是不是要做手术？吃药行吗？",
            "pinyin": "Á? Nà shì bu shì yào zuò shǒushù? Chī yào xíng ma?",
            "translation": "Huh? Then do I have to have surgery? Will taking medicine work?"
          },
          {
            "character": "医生",
            "hanzi": "做手术比较好，就是个小手术，半个小时到一个小时就做好了。",
            "pinyin": "Zuò shǒushù bǐjiào hǎo, jiùshì ge xiǎo shǒushù, bàn ge xiǎoshí dào yí ge xiǎoshí jiù zuòhǎo le.",
            "translation": "Having surgery is better—it's just a minor surgery and takes only half an hour to an hour to complete."
          },
          {
            "character": "马克",
            "hanzi": "哦，好吧。谢谢医生。",
            "pinyin": "Ò, hǎo ba. Xièxie yīshēng.",
            "translation": "Oh, alright then. Thank you, Doctor."
          }
        ]
      },
      {
        "title": "Dialogue 2: Checking on a Sick Friend & Offering Health Advice (关心生病的朋友与健康建议)",
        "context": "Ali (阿里) checks on Judy (朱迪) after hearing she caught a cold and headache from staying up late studying, and advises her on healthy daily habits.",
        "lines": [
          {
            "character": "阿里",
            "hanzi": "朱迪，听说你昨天感冒了，怎么了？哪儿不舒服？",
            "pinyin": "Zhūdí, tīngshuō nǐ zuótiān gǎnmào le, zěnme le? Nǎr bù shūfu?",
            "translation": "Judy, I heard you caught a cold yesterday—what happened? Where do you feel unwell?"
          },
          {
            "character": "朱迪",
            "hanzi": "我前天开始头疼、嗓子疼，还有点儿咳嗽，后来头越来越疼了。",
            "pinyin": "Wǒ qiántiān kāishǐ tóuténg, sǎngzi téng, hái yǒudiǎnr késou, hòulái tóu yuèláiyuè téng le.",
            "translation": "The day before yesterday my head and throat started hurting and I had a slight cough; later my head hurt more and more."
          },
          {
            "character": "阿里",
            "hanzi": "严重吗？去医院看了吗？",
            "pinyin": "Yánzhòng ma? Qù yīyuàn kàn le ma?",
            "translation": "Is it serious? Did you go to the hospital to see a doctor?"
          },
          {
            "character": "朱迪",
            "hanzi": "去了。大夫给我量了体温，开了点儿感冒药。今天已经好点儿了，只是还没有力气。",
            "pinyin": "Qù le. Dàifu gěi wǒ liángle tǐwēn, kāile diǎnr gǎnmàoyào. Jīntiān yǐjīng hǎo diǎnr le, zhǐshì hái méiyǒu lìqi.",
            "translation": "I went. The doctor took my temperature and prescribed some cold medicine. Today I'm already a bit better, only I still don't have much strength."
          },
          {
            "character": "阿里",
            "hanzi": "你要好好休息，按时吃药！以后别再熬夜了，应该多喝水、多运动。",
            "pinyin": "Nǐ yào hǎohǎo xiūxi, ànshí chī yào! Yǐhòu bié zài áoyè le, yīnggāi duō hē shuǐ, duō yùndòng.",
            "translation": "You must rest well and take your medicine on time! Stop staying up late in the future—you should drink more water and exercise more."
          },
          {
            "character": "朱迪",
            "hanzi": "谢谢你的关心，我一定改一改不健康的生活习惯！",
            "pinyin": "Xièxie nǐ de guānxīn, wǒ yídìng gǎi yi gǎi bù jiànkāng de shēnghuó xíguàn!",
            "translation": "Thank you for your concern—I will definitely change my unhealthy lifestyle habits!"
          }
        ]
      }
    ],
    "readingPassage": {
      "title": "Reading: Mark's Hospital Recovery & Jin Zhiying's Weight-Loss Lesson (马克住院恢复与金志英减肥的故事)",
      "subtitle": "Synthesized from Lesson 11 Section 3·2 (马克住院治疗) and Section 4 (综合表达训练：金志英减肥).",
      "paragraphs": [
        {
          "hanzi": "马克得了阑尾炎，这几天在医院住院治疗。大夫给他做了手术，他身体很棒，恢复得不错，第二天就好点儿了，伤口也不太疼了，只是还不能下床。他的几个好朋友都担心他，跑到医院来看他。阿里说：“你要好好休息，按时吃药！”杰希说：“你以后别再熬夜了，要改一改不健康的生活习惯。”莉莉说：“你应该少吃凉的、辣的，少玩儿游戏，多运动运动。”",
          "pinyin": "Mǎkè déle lánwěiyán, zhè jǐ tiān zài yīyuàn zhùyuàn zhìliáo. Dàifu gěi tā zuòle shǒushù, tā shēntǐ hěn bàng, huīfù de búcuò, dì-èr tiān jiù hǎo diǎnr le, shāngkǒu yě bú tài téng le, zhǐshì hái bù néng xià chuáng. Tā de jǐ ge hǎo péngyou dōu dānxīn tā, pǎo dào yīyuàn lái kàn tā. Ālǐ shuō: “Nǐ yào hǎohǎo xiūxi, ànshí chī yào!” Jiéxī shuō: “Nǐ yǐhòu bié zài áoyè le, yào gǎi yi gǎi bù jiànkāng de shēnghuó xíguàn.” Lìlì shuō: “Nǐ yīnggāi shǎo chī liáng de, là de, shǎo wánr yóuxì, duō yùndòng yùndòng.”",
          "translation": "Mark got appendicitis and has been hospitalized for treatment these past few days. The doctor performed surgery on him; his physique is great and he is recovering well—by the second day he was already a bit better and his incision didn't hurt too much anymore, only he still couldn't get out of bed. Several of his good friends were worried about him and ran to the hospital to visit him. Ali said: 'You must rest well and take your medicine on time!' Jessie said: 'Don't stay up late anymore in the future; you need to change your unhealthy lifestyle habits.' Lily said: 'You should eat less cold and spicy food, play fewer video games, and exercise more.'"
        },
        {
          "hanzi": "三个好朋友像妈妈一样的关心，让马克好感动啊！马克告诉三个朋友：“放心吧，三个小大夫！我很快就会恢复健康的。到那时，我们又可以一起上课，一起跑跳，一起开心快乐了！”",
          "pinyin": "Sān ge hǎo péngyou xiàng māma yíyàng de guānxīn, ràng Mǎkè hǎo gǎndòng a! Mǎkè gàosu sān ge péngyou: “Fàngxīn ba, sān ge xiǎo dàifu! Wǒ hěn kuài jiù huì huīfù jiànkāng de. Dào nà shí, wǒmen yòu kěyǐ yìqǐ shàngkè, yìqǐ pǎo tiào, yìqǐ kāixīn kuàilè le!”",
          "translation": "The mother-like care of his three good friends deeply moved Mark! Mark told his three friends: 'Rest assured, my three little doctors! I will recover my health very soon. When that time comes, we can attend class together, run and jump together, and be happy together again!'"
        },
        {
          "hanzi": "金志英觉得瘦一点儿的女孩子比较好看，所以她想减肥。她减肥的方法是每天只吃两个苹果，不吃别的饭。第一个星期她瘦了三斤，可是开始觉得没有力气，有点儿难受；后来情况越来越严重了，她不但头晕，而且胃疼。莉莉知道了以后，让她别担心，还告诉她：正确的减肥方法要少吃饭，可是不能不吃饭，减肥还应该早睡早起、多运动，要有一个健康的生活习惯。",
          "pinyin": "Jīn Zhìyīng juéde shòu yìdiǎnr de nǚháizi bǐjiào hǎokàn, suǒyǐ tā xiǎng jiǎnféi. Tā jiǎnféi de fāngfǎ shì měitiān zhǐ chī liǎng ge píngguǒ, bù chī biéde fàn. Dì-yī ge xīngqī tā shòule sān jīn, kěshì kāishǐ juéde méiyǒu lìqi, yǒudiǎnr nánshòu; hòulái qíngkuàng yuèláiyuè yánzhòng le, tā búdàn tóuyūn, érqiě wèiténg. Lìlì zhīdào le yǐhòu, ràng tā bié dānxīn, hái gàosu tā: zhèngquè de jiǎnféi fāngfǎ yào shǎo chīfàn, kěshì bù néng bù chīfàn, jiǎnféi hái yīnggāi zǎoshuì-zǎoqǐ, duō yùndòng, yào yǒu yí ge jiànkāng de shēnghuó xíguàn.",
          "translation": "Jin Zhiying felt that girls who are a bit thinner look prettier, so she wanted to lose weight. Her weight-loss method was to eat only two apples every day and no other meals. In the first week she lost three jin, but at first she started feeling weak and a bit unwell; later the situation became more and more serious—she not only felt dizzy, but also had stomach pain. After Lily found out, she told her not to worry and advised her: the right way to lose weight is to eat less, but you cannot skip meals altogether; losing weight also requires going to bed early and rising early, exercising more, and maintaining healthy lifestyle habits."
        }
      ]
    },
    "vocabularyExplanation": [
      {
        "hanzi": "肚子",
        "pinyin": "dùzi",
        "english": "belly; abdomen; stomach",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "我肚子疼，很想吐。",
        "examplePinyin": "Wǒ dùzi téng, hěn xiǎng tù.",
        "exampleTranslation": "My stomach hurts and I really feel like throwing up."
      },
      {
        "hanzi": "疼",
        "pinyin": "téng",
        "english": "to ache; to hurt; painful",
        "partOfSpeech": "动/形 (verb/adj.)",
        "exampleHanzi": "开始只是有点儿疼，后来越来越疼。",
        "examplePinyin": "Kāishǐ zhǐshì yǒudiǎnr téng, hòulái yuèláiyuè téng.",
        "exampleTranslation": "At first it only hurt a little, and later it hurt more and more."
      },
      {
        "hanzi": "吐",
        "pinyin": "tù",
        "english": "to vomit; to throw up",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "他吃了不干净的东西，一直想吐。",
        "examplePinyin": "Tā chīle bù gānjìng de dōngxi, yīzhí xiǎng tù.",
        "exampleTranslation": "He ate something unclean and keeps feeling like throwing up."
      },
      {
        "hanzi": "力气",
        "pinyin": "lìqi",
        "english": "physical strength; energy",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "我发烧了，浑身没有力气。",
        "examplePinyin": "Wǒ fāshāo le, húnshēn méiyǒu lìqi.",
        "exampleTranslation": "I have a fever and have no strength all over my body."
      },
      {
        "hanzi": "前天",
        "pinyin": "qiántiān",
        "english": "the day before yesterday",
        "partOfSpeech": "名 (time noun)",
        "exampleHanzi": "肚子疼是前天早上开始的。",
        "examplePinyin": "Dùzi téng shì qiántiān zǎoshang kāishǐ de.",
        "exampleTranslation": "The stomachache started the morning before yesterday."
      },
      {
        "hanzi": "开始",
        "pinyin": "kāishǐ",
        "english": "to begin; at the beginning / at first",
        "partOfSpeech": "动/名 (verb/noun)",
        "exampleHanzi": "开始只是有点儿疼，后来越来越疼。",
        "examplePinyin": "Kāishǐ zhǐshì yǒudiǎnr téng, hòulái yuèláiyuè téng.",
        "exampleTranslation": "At first it only hurt a little, and later it hurt more and more."
      },
      {
        "hanzi": "后来",
        "pinyin": "hòulái",
        "english": "afterward; later (in the past)",
        "partOfSpeech": "名 (time noun)",
        "exampleHanzi": "后来情况越来越严重了。",
        "examplePinyin": "Hòulái qíngkuàng yuèláiyuè yánzhòng le.",
        "exampleTranslation": "Later the situation became more and more serious."
      },
      {
        "hanzi": "越来越",
        "pinyin": "yuèláiyuè",
        "english": "more and more...",
        "partOfSpeech": "副 (adverb)",
        "exampleHanzi": "你的汉语越说越好了，我也越来越喜欢中国了。",
        "examplePinyin": "Nǐ de Hànyǔ yuè shuō yuè hǎo le, wǒ yě yuèláiyuè xǐhuan Zhōngguó le.",
        "exampleTranslation": "Your Chinese is getting better and better, and I also like China more and more."
      },
      {
        "hanzi": "发烧",
        "pinyin": "fāshāo",
        "english": "to have a fever",
        "partOfSpeech": "动 (VO verb)",
        "exampleHanzi": "你发烧吗？刚才量体温了吧？",
        "examplePinyin": "Nǐ fāshāo ma? Gāngcái liáng tǐwēn le ba?",
        "exampleTranslation": "Do you have a fever? You took your temperature just now, right?"
      },
      {
        "hanzi": "量",
        "pinyin": "liáng",
        "english": "to measure; to take (temperature)",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "大夫给我量了体温，38.3度。",
        "examplePinyin": "Dàifu gěi wǒ liángle tǐwēn, sānshíbā diǎn sān dù.",
        "exampleTranslation": "The doctor took my temperature—38.3 degrees."
      },
      {
        "hanzi": "体温",
        "pinyin": "tǐwēn",
        "english": "body temperature",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "看病以前要先量一下体温。",
        "examplePinyin": "Kànbìng yǐqián yào xiān liáng yíxià tǐwēn.",
        "exampleTranslation": "Before seeing the doctor, you should measure your body temperature first."
      },
      {
        "hanzi": "得病",
        "pinyin": "dé bìng",
        "english": "to fall ill; to contract a disease",
        "partOfSpeech": "动 (VO verb)",
        "exampleHanzi": "医生，我得了什么病？",
        "examplePinyin": "Yīshēng, wǒ déle shénme bìng?",
        "exampleTranslation": "Doctor, what illness did I get?"
      },
      {
        "hanzi": "严重",
        "pinyin": "yánzhòng",
        "english": "serious; severe; grave",
        "partOfSpeech": "形 (adj.)",
        "exampleHanzi": "不太严重，是急性阑尾炎。",
        "examplePinyin": "Bú tài yánzhòng, shì jíxìng lánwěiyán.",
        "exampleTranslation": "It's not too serious; it's acute appendicitis."
      },
      {
        "hanzi": "手术",
        "pinyin": "shǒushù",
        "english": "surgery; surgical operation",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "做手术比较好，就是个小手术。",
        "examplePinyin": "Zuò shǒushù bǐjiào hǎo, jiùshì ge xiǎo shǒushù.",
        "exampleTranslation": "Having surgery is better; it's just a minor operation."
      },
      {
        "hanzi": "药",
        "pinyin": "yào",
        "english": "medicine; drug",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "你要好好休息，按时吃药！",
        "examplePinyin": "Nǐ yào hǎohǎo xiūxi, ànshí chī yào!",
        "exampleTranslation": "You must rest well and take your medicine on time!"
      },
      {
        "hanzi": "行",
        "pinyin": "xíng",
        "english": "to be okay; to work; will do",
        "partOfSpeech": "动/形 (verb/adj.)",
        "exampleHanzi": "不做手术，吃药行吗？",
        "examplePinyin": "Bú zuò shǒushù, chī yào xíng ma?",
        "exampleTranslation": "Instead of having surgery, will taking medicine work?"
      },
      {
        "hanzi": "比较",
        "pinyin": "bǐjiào",
        "english": "fairly; relatively; quite",
        "partOfSpeech": "副 (adverb)",
        "exampleHanzi": "金志英觉得瘦一点儿的女孩子比较好看。",
        "examplePinyin": "Jīn Zhìyīng juéde shòu yìdiǎnr de nǚháizi bǐjiào hǎokàn.",
        "exampleTranslation": "Jin Zhiying feels that girls who are a bit thinner look relatively prettier."
      },
      {
        "hanzi": "胃",
        "pinyin": "wèi",
        "english": "stomach",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "不按时吃饭容易胃疼。",
        "examplePinyin": "Bù ànshí chīfàn róngyì wèiténg.",
        "exampleTranslation": "Not eating meals on time easily causes stomach pain."
      },
      {
        "hanzi": "咳嗽",
        "pinyin": "késou",
        "english": "to cough",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "我感冒了，嗓子疼，还一直咳嗽。",
        "examplePinyin": "Wǒ gǎnmào le, sǎngzi téng, hái yīzhí késou.",
        "exampleTranslation": "I caught a cold, my throat hurts, and I keep coughing."
      },
      {
        "hanzi": "嗓子",
        "pinyin": "sǎngzi",
        "english": "throat; voice",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "嗓子疼的时候应该多喝温水。",
        "examplePinyin": "Sǎngzi téng de shíhou yīnggāi duō hē wēnshuǐ.",
        "exampleTranslation": "When your throat hurts, you should drink more warm water."
      },
      {
        "hanzi": "感冒",
        "pinyin": "gǎnmào",
        "english": "to catch a cold; common cold",
        "partOfSpeech": "动/名 (verb/noun)",
        "exampleHanzi": "天冷了，多穿点儿衣服，别感冒了。",
        "examplePinyin": "Tiān lěng le, duō chuān diǎnr yīfu, bié gǎnmào le.",
        "exampleTranslation": "The weather has turned cold; wear more clothes so you don't catch a cold."
      },
      {
        "hanzi": "住院",
        "pinyin": "zhùyuàn",
        "english": "to be in the hospital; to be hospitalized",
        "partOfSpeech": "动 (VO verb)",
        "exampleHanzi": "马克得了阑尾炎，这几天在医院住院治疗。",
        "examplePinyin": "Mǎkè déle lánwěiyán, zhè jǐ tiān zài yīyuàn zhùyuàn zhìliáo.",
        "exampleTranslation": "Mark got appendicitis and has been hospitalized for treatment these past few days."
      },
      {
        "hanzi": "治疗",
        "pinyin": "zhìliáo",
        "english": "to treat; medical treatment",
        "partOfSpeech": "动/名 (verb/noun)",
        "exampleHanzi": "他在医院住院治疗，恢复得很快。",
        "examplePinyin": "Tā zài yīyuàn zhùyuàn zhìliáo, huīfù de hěn kuài.",
        "exampleTranslation": "He is hospitalized for treatment and is recovering very quickly."
      },
      {
        "hanzi": "大夫",
        "pinyin": "dàifu",
        "english": "doctor; physician (colloquial for 医生)",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "大夫给他做了手术。",
        "examplePinyin": "Dàifu gěi tā zuòle shǒushù.",
        "exampleTranslation": "The doctor performed surgery on him."
      },
      {
        "hanzi": "棒",
        "pinyin": "bàng",
        "english": "great; awesome; strong/fit",
        "partOfSpeech": "形 (adj.)",
        "exampleHanzi": "马克身体很棒，恢复得不错。",
        "examplePinyin": "Mǎkè shēntǐ hěn bàng, huīfù de búcuò.",
        "exampleTranslation": "Mark's body is very strong, and he is recovering quite well."
      },
      {
        "hanzi": "恢复",
        "pinyin": "huīfù",
        "english": "to recover; to restore",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "放心吧，我很快就会恢复健康的。",
        "examplePinyin": "Fàngxīn ba, wǒ hěn kuài jiù huì huīfù jiànkāng de.",
        "exampleTranslation": "Rest assured, I will recover my health very soon."
      },
      {
        "hanzi": "伤口",
        "pinyin": "shāngkǒu",
        "english": "wound; surgical incision; cut",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "第二天就好点儿了，伤口也不太疼了。",
        "examplePinyin": "Dì-èr tiān jiù hǎo diǎnr le, shāngkǒu yě bú tài téng le.",
        "exampleTranslation": "By the second day he was a bit better, and the wound didn't hurt too much anymore."
      },
      {
        "hanzi": "只是",
        "pinyin": "zhǐshì",
        "english": "merely; only; however (mild contrast)",
        "partOfSpeech": "副/连 (adv./conj.)",
        "exampleHanzi": "伤口不太疼了，只是还不能下床。",
        "examplePinyin": "Shāngkǒu bú tài téng le, zhǐshì hái bù néng xià chuáng.",
        "exampleTranslation": "The wound doesn't hurt much anymore, only he still cannot get out of bed."
      },
      {
        "hanzi": "担心",
        "pinyin": "dānxīn",
        "english": "to worry; to feel anxious about",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "他的几个好朋友都担心他，跑到医院来看他。",
        "examplePinyin": "Tā de jǐ ge hǎo péngyou dōu dānxīn tā, pǎo dào yīyuàn lái kàn tā.",
        "exampleTranslation": "Several of his good friends were worried about him and ran to the hospital to visit him."
      },
      {
        "hanzi": "好好",
        "pinyin": "hǎohǎo",
        "english": "properly; well; thoroughly (before a verb)",
        "partOfSpeech": "副 (adverb)",
        "exampleHanzi": "你要好好休息，按时吃药！",
        "examplePinyin": "Nǐ yào hǎohǎo xiūxi, ànshí chī yào!",
        "exampleTranslation": "You must rest well and take your medicine on time!"
      },
      {
        "hanzi": "按时",
        "pinyin": "ànshí",
        "english": "on time; on schedule",
        "partOfSpeech": "副 (adverb)",
        "exampleHanzi": "生病的时候一定要按时吃药、按时吃饭。",
        "examplePinyin": "Shēngbìng de shíhou yídìng yào ànshí chī yào, ànshí chīfàn.",
        "exampleTranslation": "When you are sick, you must take medicine on time and eat meals on time."
      },
      {
        "hanzi": "熬夜",
        "pinyin": "áoyè",
        "english": "to stay up late / all night",
        "partOfSpeech": "动 (VO verb)",
        "exampleHanzi": "你以后别再熬夜了！",
        "examplePinyin": "Nǐ yǐhòu bié zài áoyè le!",
        "exampleTranslation": "Don't stay up late anymore in the future!"
      },
      {
        "hanzi": "改",
        "pinyin": "gǎi",
        "english": "to change; to correct; to alter",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "要改一改不健康的生活习惯。",
        "examplePinyin": "Yào gǎi yi gǎi bù jiànkāng de shēnghuó xíguàn.",
        "exampleTranslation": "You need to change your unhealthy lifestyle habits."
      },
      {
        "hanzi": "习惯",
        "pinyin": "xíguàn",
        "english": "habit; custom; to be accustomed to",
        "partOfSpeech": "名/动 (noun/verb)",
        "exampleHanzi": "早睡早起是一个健康的生活习惯。",
        "examplePinyin": "Zǎoshuì-zǎoqǐ shì yí ge jiànkāng de shēnghuó xíguàn.",
        "exampleTranslation": "Going to bed early and getting up early is a healthy lifestyle habit."
      },
      {
        "hanzi": "应该",
        "pinyin": "yīnggāi",
        "english": "should; ought to",
        "partOfSpeech": "动 (modal verb)",
        "exampleHanzi": "你应该少吃凉的、辣的，多运动运动。",
        "examplePinyin": "Nǐ yīnggāi shǎo chī liáng de, là de, duō yùndòng yùndòng.",
        "exampleTranslation": "You should eat less cold and spicy food, and exercise more."
      },
      {
        "hanzi": "凉",
        "pinyin": "liáng",
        "english": "cold; cool (of food, drinks, or weather)",
        "partOfSpeech": "形 (adj.)",
        "exampleHanzi": "肚子不舒服的时候要少吃凉的东西。",
        "examplePinyin": "Dùzi bù shūfu de shíhou yào shǎo chī liáng de dōngxi.",
        "exampleTranslation": "When your stomach feels unwell, you should eat less cold food."
      },
      {
        "hanzi": "游戏",
        "pinyin": "yóuxì",
        "english": "game; video game",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "应该少玩儿手机游戏，多运动。",
        "examplePinyin": "Yīnggāi shǎo wánr shǒujī yóuxì, duō yùndòng.",
        "exampleTranslation": "You should play fewer mobile games and exercise more."
      },
      {
        "hanzi": "像",
        "pinyin": "xiàng",
        "english": "to be like; to resemble",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "三个好朋友像妈妈一样的关心，让马克好感动。",
        "examplePinyin": "Sān ge hǎo péngyou xiàng māma yíyàng de guānxīn, ràng Mǎkè hǎo gǎndòng.",
        "exampleTranslation": "The mother-like care of his three good friends deeply moved Mark."
      },
      {
        "hanzi": "让",
        "pinyin": "ràng",
        "english": "to make; to let; to cause (someone to feel/do)",
        "partOfSpeech": "动 (pivotal verb)",
        "exampleHanzi": "朋友们的关心让马克好感动啊！",
        "examplePinyin": "Péngyoumen de guānxīn ràng Mǎkè hǎo gǎndòng a!",
        "exampleTranslation": "His friends' care made Mark so moved!"
      },
      {
        "hanzi": "感动",
        "pinyin": "gǎndòng",
        "english": "moved; touched (emotionally)",
        "partOfSpeech": "形/动 (adj./verb)",
        "exampleHanzi": "他说的话让我非常感动。",
        "examplePinyin": "Tā shuō de huà ràng wǒ fēicháng gǎndòng.",
        "exampleTranslation": "What he said made me very touched."
      },
      {
        "hanzi": "瘦",
        "pinyin": "shòu",
        "english": "thin; slim; to lose weight",
        "partOfSpeech": "形/动 (adj./verb)",
        "exampleHanzi": "第一个星期她瘦了三斤。",
        "examplePinyin": "Dì-yī ge xīngqī tā shòule sān jīn.",
        "exampleTranslation": "In the first week she lost three jin (1.5 kg)."
      },
      {
        "hanzi": "减肥",
        "pinyin": "jiǎnféi",
        "english": "to lose weight",
        "partOfSpeech": "动 (VO verb)",
        "exampleHanzi": "减肥还应该早睡早起、多运动。",
        "examplePinyin": "Jiǎnféi hái yīnggāi zǎoshuì-zǎoqǐ, duō yùndòng.",
        "exampleTranslation": "To lose weight, you should also go to bed early, get up early, and exercise more."
      },
      {
        "hanzi": "晕",
        "pinyin": "yūn",
        "english": "dizzy; giddy (头晕 tóuyūn)",
        "partOfSpeech": "形/动 (adj./verb)",
        "exampleHanzi": "她每天只吃两个苹果，不但头晕，而且胃疼。",
        "examplePinyin": "Tā měitiān zhǐ chī liǎng ge píngguǒ, búdàn tóuyūn, érqiě wèiténg.",
        "exampleTranslation": "She only ate two apples a day and not only felt dizzy, but also had stomach pain."
      },
      {
        "hanzi": "方法",
        "pinyin": "fāngfǎ",
        "english": "method; way",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "不吃饭不是正确的减肥方法。",
        "examplePinyin": "Bù chīfàn bú shì zhèngquè de jiǎnféi fāngfǎ.",
        "exampleTranslation": "Skipping meals is not the right weight-loss method."
      },
      {
        "hanzi": "难受",
        "pinyin": "nánshòu",
        "english": "uncomfortable; feeling unwell; miserable",
        "partOfSpeech": "形 (adj.)",
        "exampleHanzi": "开始觉得没有力气，有点儿难受。",
        "examplePinyin": "Kāishǐ juéde méiyǒu lìqi, yǒudiǎnr nánshòu.",
        "exampleTranslation": "At first she felt weak and a bit unwell."
      }
    ],
    "grammarPoint": "Describing Symptoms, '开始……，后来……', '越来越 + Adj/V', '只是', and Health Advice ('应该多/少 + V')",
    "structure": "开始 + Clause 1，后来 + 越来越 + Adj  |  应该 + 多 / 少 + Verb (+ Object)",
    "explanation": "Lesson 11 focuses on medical consultations and health communication: (1) asking what is wrong with '怎么了？哪儿不舒服？' and naming body aches ('[Body Part] + 疼/难受'); (2) narrating how a condition develops with '开始……，后来……' and '越来越 + Adj/Mental Verb'; (3) expressing moderate degree with '比较 + Adj' vs. '有点儿 + Adj'; (4) introducing a mild limitation with '只是'; and (5) giving health advice with '应该多/少 + Verb'.",
    "examples": [
      {
        "hanzi": "开始只是有点儿疼，后来越来越疼。",
        "pinyin": "Kāishǐ zhǐshì yǒudiǎnr téng, hòulái yuèláiyuè téng.",
        "translation": "At first it only hurt a little bit, and later it hurt more and more."
      },
      {
        "hanzi": "第二天就好点儿了，伤口也不太疼了，只是还不能下床。",
        "pinyin": "Dì-èr tiān jiù hǎo diǎnr le, shāngkǒu yě bú tài téng le, zhǐshì hái bù néng xià chuáng.",
        "translation": "By the second day he was a bit better and the wound didn't hurt much anymore, only he still couldn't get out of bed."
      },
      {
        "hanzi": "你应该少吃凉的、辣的，少玩儿游戏，多运动运动。",
        "pinyin": "Nǐ yīnggāi shǎo chī liáng de, là de, shǎo wánr yóuxì, duō yùndòng yùndòng.",
        "translation": "You should eat less cold and spicy food, play fewer video games, and exercise more."
      }
    ],
    "grammarNotes": [
      {
        "title": "1. Asking About & Describing Symptoms ('怎么了？哪儿不舒服？' & '[部位] + 疼/难受')",
        "structure": "怎么了？ / 哪儿不舒服？  →  我 + [身体部位 (头/肚子/胃/嗓子)] + 疼 / 不舒服 / 难受",
        "explanation": "Doctors and friends ask '怎么了？' ('What's wrong?') or '哪儿不舒服？' ('Where do you feel unwell?'). In Chinese, body-part aches are expressed directly with a Subject-Predicate predicate: Subject + Body Part + 疼 (e.g., 我肚子疼, 我头疼, 我嗓子疼) without needing a verb like 'have'.",
        "tip": "To ask about severity, use '严重吗？' ('Is it serious?') or '重吗？' (for a cold/illness: 感冒重不重？).",
        "examples": [
          {
            "hanzi": "你好！怎么了？哪儿不舒服？——我肚子疼，很想吐，也没有力气。",
            "pinyin": "Nǐ hǎo! Zěnme le? Nǎr bù shūfu? — Wǒ dùzi téng, hěn xiǎng tù, yě méiyǒu lìqi.",
            "translation": "Hello! What's wrong? Where do you feel unwell? — My stomach hurts, I feel like vomiting, and I have no strength."
          },
          {
            "hanzi": "医生，我得了什么病？严重吗？——不太严重，是急性阑尾炎。",
            "pinyin": "Yīshēng, wǒ déle shénme bìng? Yánzhòng ma? — Bú tài yánzhòng, shì jíxìng lánwěiyán.",
            "translation": "Doctor, what illness did I get? Is it serious? — Not too serious; it's acute appendicitis."
          }
        ]
      },
      {
        "title": "2. Narrative Progression with '开始……，后来……' & Changing Degree '越来越……'",
        "structure": "开始 + Situation A，后来 + Situation B  |  越来越 + Adj / Mental Verb",
        "explanation": "'开始……，后来……' contrasts how something was at the beginning ('开始') with how it changed later ('后来'). '越来越 + Adj/Mental Verb' ('more and more...') indicates that a quality or feeling continuously increases over time.",
        "tip": "Do NOT add degree adverbs like 很 or 非常 after 越来越 (say 越来越疼, never *越来越很疼).",
        "examples": [
          {
            "hanzi": "开始只是有点儿疼，后来越来越疼。",
            "pinyin": "Kāishǐ zhǐshì yǒudiǎnr téng, hòulái yuèláiyuè téng.",
            "translation": "At first it only hurt a little bit, and later it hurt more and more."
          },
          {
            "hanzi": "开始觉得没有力气，有点儿难受；后来情况越来越严重了。",
            "pinyin": "Kāishǐ juéde méiyǒu lìqi, yǒudiǎnr nánshòu; hòulái qíngkuàng yuèláiyuè yánzhòng le.",
            "translation": "At first she felt weak and a bit unwell; later the situation became more and more serious."
          }
        ]
      },
      {
        "title": "3. Comparing Degree Adverbs: '比较 + Adj' vs. '有点儿 + Adj' vs. '非常 + Adj'",
        "structure": "比较 + Adj (fairly/relatively)  |  有点儿 + Adj (slightly, often undesirable)  |  很 / 非常 + Adj (very/extremely)",
        "explanation": "'比较 (bǐjiào)' expresses a moderate, objective degree ('fairly / relatively / quite') and can modify both positive adjectives (比较好看, 比较好) and neutral ones. By contrast, '有点儿 (yǒudiǎnr)' means 'a little bit' and is mainly used before undesirable or uncomfortable states (有点儿疼, 有点儿难受, 有点儿贵).",
        "tip": "'做手术比较好' means 'Having surgery is relatively better / preferable'.",
        "examples": [
          {
            "hanzi": "做手术比较好，就是个小手术。",
            "pinyin": "Zuò shǒushù bǐjiào hǎo, jiùshì ge xiǎo shǒushù.",
            "translation": "Having surgery is better; it's just a minor surgery."
          },
          {
            "hanzi": "金志英觉得瘦一点儿的女孩子比较好看。",
            "pinyin": "Jīn Zhìyīng juéde shòu yìdiǎnr de nǚháizi bǐjiào hǎokàn.",
            "translation": "Jin Zhiying feels that girls who are a bit thinner look relatively prettier."
          }
        ]
      },
      {
        "title": "4. Mild Contrast with '只是' & Physical Capability '能' vs. '会'",
        "structure": "Clause 1 (positive statement)，只是 + Clause 2 (minor limitation/exception)",
        "explanation": "'只是 (zhǐshì)' can function as an adverb meaning 'merely/only' ('开始只是有点儿疼') or as a conjunction between two clauses meaning 'only / it's just that...' with a much softer tone than '可是/但是'. In '还不能下床', '能 (néng)' expresses physical capability or permission allowed by circumstances, whereas '会 (huì)' expresses a learned skill or future likelihood ('我很快就会恢复健康的').",
        "tip": "Use 不能 (not 不会) when an injury or illness prevents someone from doing an action like getting out of bed (不能下床).",
        "examples": [
          {
            "hanzi": "他恢复得不错，第二天就好点儿了，伤口也不太疼了，只是还不能下床。",
            "pinyin": "Tā huīfù de búcuò, dì-èr tiān jiù hǎo diǎnr le, shāngkǒu yě bú tài téng le, zhǐshì hái bù néng xià chuáng.",
            "translation": "He is recovering well—by the second day he was a bit better and the wound didn't hurt much anymore, only he still cannot get out of bed."
          },
          {
            "hanzi": "放心吧，我很快就会恢复健康的！",
            "pinyin": "Fàngxīn ba, wǒ hěn kuài jiù huì huīfù jiànkāng de!",
            "translation": "Rest assured, I will recover my health very soon!"
          }
        ]
      },
      {
        "title": "5. Giving Health & Lifestyle Advice: '应该 + V', '多 / 少 + V (+ N)', and '好好 + V'",
        "structure": "应该 + 多 / 少 + Verb (+ Object)  |  要 + 好好 + Verb  |  别再 + Verb + 了",
        "explanation": "In Chinese, '多 (duō)' and '少 (shǎo)' are placed directly BEFORE a verb as adverbs ('do more of / do less of'): 多喝水 (drink more water), 多运动 (exercise more), 少吃凉的、辣的 (eat less cold and spicy food), 少玩儿游戏 (play fewer games). Pair them with '应该 (should)', '好好 (properly/well)', or '别再……了 (stop doing... anymore)' to give warm, idiomatic health advice.",
        "tip": "Never place 多 or 少 after the verb when giving advice—say 多休息 / 少吃凉的.",
        "examples": [
          {
            "hanzi": "你应该少吃凉的、辣的，少玩儿游戏，多运动运动。",
            "pinyin": "Nǐ yīnggāi shǎo chī liáng de, là de, shǎo wánr yóuxì, duō yùndòng yùndòng.",
            "translation": "You should eat less cold and spicy food, play fewer video games, and exercise more."
          },
          {
            "hanzi": "你要好好休息，按时吃药！你以后别再熬夜了。",
            "pinyin": "Nǐ yào hǎohǎo xiūxi, ànshí chī yào! Nǐ yǐhòu bié zài áoyè le.",
            "translation": "You must rest well and take your medicine on time! Don't stay up late anymore in the future."
          }
        ]
      }
    ],
    "exercises": [
      {
        "question": "In Dialogue 1, what illness does Mark have, and what treatment does the doctor recommend?",
        "promptHanzi": "不太严重，是急性阑尾炎。做手术比较好，就是个小手术，半个小时到一个小时就做好了。",
        "promptPinyin": "Bú tài yánzhòng, shì jíxìng lánwěiyán. Zuò shǒushù bǐjiào hǎo, jiùshì ge xiǎo shǒushù, bàn ge xiǎoshí dào yí ge xiǎoshí jiù zuòhǎo le.",
        "options": [
          "Acute appendicitis (急性阑尾炎); having a minor surgery (做个小手术) that takes 30 to 60 minutes.",
          "A common cold (感冒); drinking two apples and going home without treatment.",
          "A toothache; staying in bed for three months without surgery.",
          "Stomach flu; taking cold medicine only."
        ],
        "answerIndex": 0,
        "explanation": "The doctor tells Mark: “不太严重，是急性阑尾炎……做手术比较好，就是个小手术，半个小时到一个小时就做好了。”"
      },
      {
        "question": "Which sentence correctly uses '多 / 少 + Verb' to give health advice as Lily does in the reading passage?",
        "options": [
          "你应该少吃凉的、辣的，少玩儿游戏，多运动运动。",
          "你应该吃少凉的、辣的，玩儿少游戏，运动多。",
          "你应该多吃越来越凉的，少运动。",
          "你应该只是吃凉的、辣的。"
        ],
        "answerIndex": 0,
        "explanation": "In Mandarin, '多' and '少' precede the verb when advising someone to do more or less of an action: '少吃凉的、辣的，少玩儿游戏，多运动运动'."
      },
      {
        "question": "Look at the characters 肚 (dù), 胃 (wèi), 胖 (pàng), 疼 (téng), and 病 (bìng). What do the radicals 月 (肉月旁) and 疒 (病字旁) indicate?",
        "options": [
          "月 (肉月旁) relates to parts of the body/flesh, while 疒 (病字旁) relates to illness and pain.",
          "月 relates to the phases of the moon, while 疒 relates to spacious buildings.",
          "Both radicals relate to bamboo tools and stationery.",
          "月 relates to clothing, while 疒 relates to herbal tea."
        ],
        "answerIndex": 0,
        "explanation": "As taught in Section 2, 肉月旁 (月) appears in body/flesh characters (肚、胃、胖、腰、腿), and 病字旁 (疒) appears in illness/pain characters (疼、病、瘦)."
      },
      {
        "question": "Why did Jin Zhiying end up feeling dizzy (头晕) and having stomach pain (胃疼) during her weight-loss attempt?",
        "options": [
          "Because she only ate two apples a day and skipped all other meals (每天只吃两个苹果，不吃别的饭).",
          "Because she exercised for ten hours every day in the snow.",
          "Because she ate too much spicy hotpot late at night.",
          "Because she had appendicitis surgery."
        ],
        "answerIndex": 0,
        "explanation": "The Section 4 passage explains: “她减肥的方法是每天只吃两个苹果，不吃别的饭……后来情况越来越严重了，她不但头晕，而且胃疼。”"
      }
    ]
  },
  {
    "id": "lesson15",
    "title": "Lesson 12: I Want to Go Traveling — 第12课：我想去旅游",
    "chineseTitle": "第12课：我想去旅游",
    "unitBadge": "Mastering Chinese · Elementary 4 (会通汉语 精编版·初级4)",
    "description": "Plan holiday trips across China—comparing Northern ice lanterns in Harbin with Southern sunshine in Yunnan and Hainan, weighing group tours vs. independent travel ('自由行'), and booking train sleepers and hotel rooms using 'Adj + 极了' and '[时间] + 前后'.",
    "content": "Synthesized from all four parts of Lesson 12 (第12课《我想去旅游》（一）–（四）) in Mastering Chinese: Elementary 4 (会通汉语 精编版·初级4). Learners master 8 look-alike character triplets (同/司/向, 问/间/同, 请/清/晴, 北/比/非, 国/图/园, 时/对/双, 大/天/夫, 日/白/自), 4 high-frequency radicals (彳, 刂, 纟, 土), travel planning structures ('[想法]，怎么样？', '去哪儿/什么时候/怎么 + V + 好？'), approximate time '[时间点] + 前后', extreme degree 'Adj + 极了', and humorous stories about buying train sleeper tickets (硬座、硬卧、软卧) and booking hotels (快捷酒店、单人间、双人间).",
    "hskLevel": 4,
    "objectives": [
      "Distinguish 8 groups of three look-alike characters (such as 请/清/晴, 国/图/园, 日/白/自) and recognize 4 core radicals: 彳 (walking), 刂 (knife/cutting), 纟 (silk/threads), and 土 (earth/land).",
      "Discuss travel destinations in Northern and Southern China (哈尔滨的冰灯、云南的风景、海南的阳光大海沙滩、桂林、北京长城) and compare travel styles: group tour (跟团), independent travel (自己玩儿), and agency air+hotel packages (自由行).",
      "Book train tickets (硬座、软座、硬卧、软卧) and hotel rooms (快捷酒店、单人间、双人间), and state ticket/room prices per unit ('513.5元一张', '328元一天').",
      "Use '[时间点] + 前后' for approximate dates, '要 + V' vs. '想 + V' for intentions, and the extreme degree complement 'Adj + 极了' (美极了、多极了、方便极了)."
    ],
    "phoneticsAndCharacters": {
      "title": "Look-Alike Character Triplets (形近字三字组) & Radicals (彳 · 刂 · 纟 · 土)",
      "sections": [
        {
          "subtitle": "1. Eight Groups of Look-Alike Character Triplets (比一比，读一读：三字形近字辨析)",
          "summary": "Master these 8 sets of three visually similar characters from Lesson 12 Section 1:",
          "items": [
            {
              "label": "同 (tóng) · 司 (sī) · 向 (xiàng)",
              "pinyin": "tóng · sī · xiàng",
              "detail": "同 has an outer frame 冂 enclosing 一 and 口 (同事 tóngshì, colleague); 司 is open on the bottom-left (司机 sījī, driver); 向 has a top-left撇 stroke above 冂 and 口 (方向 fāngxiàng, direction).",
              "examples": "同事 (tóngshì) · 司机 (sījī) · 方向 (fāngxiàng)"
            },
            {
              "label": "问 (wèn) · 间 (jiān) · 同 (tóng)",
              "pinyin": "wèn · jiān · tóng",
              "detail": "问 places 口 inside the gate 门 (问路 wènlù); 间 places 日 inside 门 (房间 fángjiān, room); 同 uses 冂 with 一 and 口 (同样 tóngyàng, same).",
              "examples": "问路 (wènlù) · 房间 (fángjiān) · 同样 (tóngyàng)"
            },
            {
              "label": "请 (qǐng) · 清 (qīng) · 晴 (qíng)",
              "pinyin": "qǐng · qīng · qíng",
              "detail": "All three share the phonetic component 青 (qīng): speech 讠 gives 请 'please/invite' (请坐 qǐng zuò), water 氵 gives 清 'clear/light' (清淡 qīngdàn), and sun 日 gives 晴 'sunny' (晴天 qíngtiān).",
              "examples": "请坐 (qǐng zuò) · 清淡 (qīngdàn) · 晴天 (qíngtiān)"
            },
            {
              "label": "北 (běi) · 比 (bǐ) · 非 (fēi)",
              "pinyin": "běi · bǐ · fēi",
              "detail": "北 means 'north' (北方 běifāng); 比 means 'compare' (比较 bǐjiào); 非 has three horizontal strokes on each side and means 'not/extraordinary' (非常 fēicháng).",
              "examples": "北方 (běifāng) · 比较 (bǐjiào) · 非常 (fēicháng)"
            },
            {
              "label": "国 (guó) · 图 (tú) · 园 (yuán)",
              "pinyin": "guó · tú · yuán",
              "detail": "All three use the full enclosure 囗: 玉 inside forms 国 'country' (中国 Zhōngguó), 冬 inside forms 图 'map/picture' (地图 dìtú), and 元 inside forms 园 'garden' (花园 huāyuán).",
              "examples": "中国 (Zhōngguó) · 地图 (dìtú) · 花园 (huāyuán)"
            },
            {
              "label": "时 (shí) · 对 (duì) · 双 (shuāng)",
              "pinyin": "shí · duì · shuāng",
              "detail": "时 combines 日 + 寸 (时间 shíjiān, time); 对 combines 又 + 寸 (对错 duìcuò, right and wrong); 双 combines two 又 components (双人 shuāngrén, double/two-person).",
              "examples": "时间 (shíjiān) · 对错 (duìcuò) · 双人 (shuāngrén)"
            },
            {
              "label": "大 (dà) · 天 (tiān) · 夫 (fū)",
              "pinyin": "dà · tiān · fū",
              "detail": "大 is 'big' (大号 dàhào); adding a top horizontal stroke forms 天 'sky/day' (白天 báitiān); extending the vertical-left stroke through the top horizontal stroke forms 夫 'husband/man' (夫妻 fūqī).",
              "examples": "大号 (dàhào) · 白天 (báitiān) · 夫妻 (fūqī)"
            },
            {
              "label": "日 (rì) · 白 (bái) · 自 (zì)",
              "pinyin": "rì · bái · zì",
              "detail": "日 is 'sun/day' (日本 Rìběn); adding a top撇 stroke forms 白 'white' (白色 báisè); adding two internal horizontal strokes below the top撇 forms 自 'self' (自己 zìjǐ).",
              "examples": "日本 (Rìběn) · 白色 (báisè) · 自己 (zìjǐ)"
            }
          ]
        },
        {
          "subtitle": "2. Four Essential Radicals: 彳, 刂, 纟, and 土 (认识常用偏旁)",
          "summary": "Recognize the position and core meaning of these four common radicals from Lesson 12 Section 2:",
          "items": [
            {
              "label": "彳 (双人旁 shuāngrénpáng — Walking / Road Radical)",
              "pinyin": "chì (on the left)",
              "detail": "Appears on the left side of a character and relates to walking, roads, and movement.",
              "examples": "很 (hěn, very) · 行 (xíng, walk/travel/okay) · 往 (wǎng, toward) · 得 (dé/děi, obtain/must)"
            },
            {
              "label": "刂 (立刀旁 lìdāopáng — Standing Knife Radical)",
              "pinyin": "dāo (on the right)",
              "detail": "Appears on the right side of a character and relates to knives, cutting, dividing, or arriving at a sharp boundary.",
              "examples": "到 (dào, arrive) · 别 (bié, separate/don't) · 利 (lì, sharp/benefit)"
            },
            {
              "label": "纟 (绞丝旁 jiǎosīpáng — Silk / Thread Radical)",
              "pinyin": "sī (on the left)",
              "detail": "Appears on the left side of a character and relates to silk, threads, fabrics, or continuous lines/levels.",
              "examples": "纸 (zhǐ, paper) · 经 (jīng, warp threads/pass through in 经理/已经) · 级 (jí, grade/star level in 星级) · 练 (liàn, practice)"
            },
            {
              "label": "土 (提土旁 títǔpáng — Earth / Land Radical)",
              "pinyin": "tǔ (on the left or bottom)",
              "detail": "Relates to earth, soil, land, places, or structures built on the ground.",
              "examples": "块 (kuài, piece/lump) · 地 (dì, ground/place) · 坏 (huài, bad/broken) · 城 (chéng, city wall/city in 长城) · 场 (chǎng, open ground/plaza)"
            }
          ]
        }
      ]
    },
    "dialogue": [
      {
        "character": "马克",
        "hanzi": "快放假了，我们去旅游怎么样？去南方吧，云南怎么样？风景美，天气也暖和。",
        "pinyin": "Kuài fàngjià le, wǒmen qù lǚyóu zěnmeyàng? Qù nánfāng ba, Yúnnán zěnmeyàng? Fēngjǐng měi, tiānqì yě nuǎnhuo.",
        "translation": "The holiday is coming up soon—how about we go traveling? Let's go south; how about Yunnan? The scenery is beautiful and the weather is warm."
      },
      {
        "character": "莉莉",
        "hanzi": "我看过何大华在海南拍的照片，有阳光、大海、沙滩，非常美。我们去海南怎么样？",
        "pinyin": "Wǒ kànguo Hé Dàhuá zài Hǎinán pāi de zhàopiàn, yǒu yángguāng, dàhǎi, shātān, fēicháng měi. Wǒmen qù Hǎinán zěnmeyàng?",
        "translation": "I've seen the photos He Dahua took in Hainan—there's sunshine, the sea, and sandy beaches, very beautiful. How about we go to Hainan?"
      },
      {
        "character": "阿里",
        "hanzi": "你们觉得怎么去好？自己玩儿还是跟团？",
        "pinyin": "Nǐmen juéde zěnme qù hǎo? Zìjǐ wánr háishi gēntuán?",
        "translation": "How do you think we should go? Travel on our own or join a tour group?"
      },
      {
        "character": "平田",
        "hanzi": "我听说旅行社有一种“自由行”的旅行方式，可以帮客人订票，订宾馆，到了地方客人自己玩儿，我觉得这种更好。",
        "pinyin": "Wǒ tīngshuō lǚxíngshè yǒu yì zhǒng “zìyóuxíng” de lǚxíng fāngshì, kěyǐ bāng kèrén dìng piào, dìng bīnguǎn, dàole dìfang kèrén zìjǐ wánr, wǒ juéde zhè zhǒng gèng hǎo.",
        "translation": "I heard travel agencies have a 'free-and-easy independent package' travel style where they help guests book tickets and hotels, and once there the guests explore on their own—I think this kind is even better."
      },
      {
        "character": "马克",
        "hanzi": "那我们就选这一种吧，我上网查一下哪个旅行社更好。",
        "pinyin": "Nà wǒmen jiù xuǎn zhè yì zhǒng ba, wǒ shàngwǎng chá yíxià nǎge lǚxíngshè gèng hǎo.",
        "translation": "Then let's choose this one! I'll go online and check which travel agency is better."
      }
    ],
    "dialogues": [
      {
        "title": "Dialogue 1: Planning a Holiday Trip — Harbin vs. Yunnan & Hainan, Group Tour vs. 'Ziyouxing' (商量假期旅游计划)",
        "context": "With the winter vacation approaching, Mark (马克), Hirata (平田), Jessie (杰希), Ali (阿里), and Lily (莉莉) debate going north to see Harbin's ice lanterns vs. heading south to Yunnan and Hainan around the Spring Festival, and decide on a '自由行' (independent package) through a travel agency.",
        "lines": [
          {
            "character": "马克",
            "hanzi": "快放假了，我们去旅游怎么样？",
            "pinyin": "Kuài fàngjià le, wǒmen qù lǚyóu zěnmeyàng?",
            "translation": "Vacation is coming up soon—how about we go traveling?"
          },
          {
            "character": "平田",
            "hanzi": "好啊，去哪儿玩儿好？南方还是北方？",
            "pinyin": "Hǎo a, qù nǎr wánr hǎo? Nánfāng háishi běifāng?",
            "translation": "Great! Where would be a good place to visit? The South or the North?"
          },
          {
            "character": "杰希",
            "hanzi": "听说哈尔滨的冰灯很漂亮！",
            "pinyin": "Tīngshuō Hā'ěrbīn de bīngdēng hěn piàoliang!",
            "translation": "I've heard the ice lanterns in Harbin are very pretty!"
          },
          {
            "character": "阿里",
            "hanzi": "我不去，那儿太冷了。",
            "pinyin": "Wǒ bú qù, nàr tài lěng le.",
            "translation": "I'm not going—it's too cold there."
          },
          {
            "character": "马克",
            "hanzi": "去南方吧，云南怎么样？风景美，天气也暖和。",
            "pinyin": "Qù nánfāng ba, Yúnnán zěnmeyàng? Fēngjǐng měi, tiānqì yě nuǎnhuo.",
            "translation": "Let's go to the South—how about Yunnan? The scenery is beautiful and the weather is warm."
          },
          {
            "character": "莉莉",
            "hanzi": "我看过何大华在海南拍的照片，有阳光、大海、沙滩，非常美。我们去海南怎么样？",
            "pinyin": "Wǒ kànguo Hé Dàhuá zài Hǎinán pāi de zhàopiàn, yǒu yángguāng, dàhǎi, shātān, fēicháng měi. Wǒmen qù Hǎinán zěnmeyàng?",
            "translation": "I've seen the photos He Dahua took in Hainan—there's sunshine, the ocean, and sandy beaches, very beautiful. How about we go to Hainan?"
          },
          {
            "character": "平田",
            "hanzi": "假期那么长，都去吧。什么时候去好？一放假就走吗？",
            "pinyin": "Jiàqī nàme cháng, dōu qù ba. Shénme shíhou qù hǎo? Yí fàngjià jiù zǒu ma?",
            "translation": "The holiday is so long, let's go to both! When would be a good time to go? Should we leave as soon as the holiday starts?"
          },
          {
            "character": "杰希",
            "hanzi": "放假第二周，春节前后去吧，第一周可以准备一下。",
            "pinyin": "Fàngjià dì-èr zhōu, Chūnjié qiánhòu qù ba, dì-yī zhōu kěyǐ zhǔnbèi yíxià.",
            "translation": "Let's go in the second week of the vacation, around the Spring Festival; we can use the first week to prepare."
          },
          {
            "character": "阿里",
            "hanzi": "你们觉得怎么去好？自己玩儿还是跟团？",
            "pinyin": "Nǐmen juéde zěnme qù hǎo? Zìjǐ wánr háishi gēntuán?",
            "translation": "How do you think we should go? Travel on our own or join a tour group?"
          },
          {
            "character": "莉莉",
            "hanzi": "我觉得跟团更方便，也更安全。",
            "pinyin": "Wǒ juéde gēntuán gèng fāngbiàn, yě gèng ānquán.",
            "translation": "I think joining a tour group is more convenient and also safer."
          },
          {
            "character": "马克",
            "hanzi": "我觉得自己玩儿更自由，时间、地方都可以自己决定。",
            "pinyin": "Wǒ juéde zìjǐ wánr gèng zìyóu, shíjiān, dìfang dōu kěyǐ zìjǐ juédìng.",
            "translation": "I think traveling on our own is freer—we can decide both the schedule and the places ourselves."
          },
          {
            "character": "平田",
            "hanzi": "我听说旅行社有一种“自由行”的旅行方式，可以帮客人订票，订宾馆，到了地方客人自己玩儿，我觉得这种更好。",
            "pinyin": "Wǒ tīngshuō lǚxíngshè yǒu yì zhǒng “zìyóuxíng” de lǚxíng fāngshì, kěyǐ bāng kèrén dìng piào, dìng bīnguǎn, dàole dìfang kèrén zìjǐ wánr, wǒ juéde zhè zhǒng gèng hǎo.",
            "translation": "I heard travel agencies have a 'free-and-easy package' travel style where they help guests book tickets and hotels, and once at the destination the guests explore on their own—I think this kind is better."
          },
          {
            "character": "马克",
            "hanzi": "那我们就选这一种吧，我上网查一下哪个旅行社更好。",
            "pinyin": "Nà wǒmen jiù xuǎn zhè yì zhǒng ba, wǒ shàngwǎng chá yíxià nǎge lǚxíngshè gèng hǎo.",
            "translation": "Then let's choose this one! I'll go online to check which travel agency is better."
          }
        ]
      },
      {
        "title": "Dialogue 2: Recommending Guilin Before the National Day Holiday (推荐去桂林旅游)",
        "context": "From Lesson 12 Section 4: Lily (莉莉) asks her Chinese friend He Dahua (何大华) for a travel recommendation since she has already visited Beijing, Xi'an, Shanghai, Hangzhou, and Harbin. He recommends Guilin (桂林) and reminds her to book tickets and a hotel early before the National Day rush.",
        "lines": [
          {
            "character": "何大华",
            "hanzi": "你好，莉莉！",
            "pinyin": "Nǐ hǎo, Lìlì!",
            "translation": "Hello, Lily!"
          },
          {
            "character": "莉莉",
            "hanzi": "你好！好久不见。你看见我的邮件了吗？",
            "pinyin": "Nǐ hǎo! Hǎojiǔ bú jiàn. Nǐ kànjiàn wǒ de yóujiàn le ma?",
            "translation": "Hello! Long time no see. Did you see my email?"
          },
          {
            "character": "何大华",
            "hanzi": "什么邮件？我最近没上网，不知道啊。",
            "pinyin": "Shénme yóujiàn? Wǒ zuìjìn méi shàngwǎng, bù zhīdào a.",
            "translation": "What email? I haven't been online recently, so I didn't know."
          },
          {
            "character": "莉莉",
            "hanzi": "哦，那我现在跟你说吧。快放假了，我想去旅游，你说去哪儿好？",
            "pinyin": "Ò, nà wǒ xiànzài gēn nǐ shuō ba. Kuài fàngjià le, wǒ xiǎng qù lǚyóu, nǐ shuō qù nǎr hǎo?",
            "translation": "Oh, then I'll tell you right now. Vacation is coming up soon and I want to go traveling—where do you think would be a good place to go?"
          },
          {
            "character": "何大华",
            "hanzi": "你以前去过哪儿？",
            "pinyin": "Nǐ yǐqián qùguo nǎr?",
            "translation": "Where have you been before?"
          },
          {
            "character": "莉莉",
            "hanzi": "我去过北京、西安、上海、杭州、哈尔滨，这次我想去别的地方看看。",
            "pinyin": "Wǒ qùguo Běijīng, Xī'ān, Shànghǎi, Hángzhōu, Hā'ěrbīn, zhècì wǒ xiǎng qù biéde dìfang kànkan.",
            "translation": "I have been to Beijing, Xi'an, Shanghai, Hangzhou, and Harbin; this time I want to visit somewhere else."
          },
          {
            "character": "何大华",
            "hanzi": "你觉得桂林怎么样？",
            "pinyin": "Nǐ juéde Guìlín zěnmeyàng?",
            "translation": "What do you think of Guilin?"
          },
          {
            "character": "莉莉",
            "hanzi": "哦，我很早就听说桂林美极了！你去过吗？",
            "pinyin": "Ò, wǒ hěn zǎo jiù tīngshuō Guìlín měi jí le! Nǐ qùguo ma?",
            "translation": "Oh, I heard a long time ago that Guilin is extremely beautiful! Have you been there?"
          },
          {
            "character": "何大华",
            "hanzi": "我前两天刚去了一趟，那儿的天气非常舒服。对了，国庆节前后人非常多，你早点儿上网买票和找宾馆吧。",
            "pinyin": "Wǒ qián liǎng tiān gāng qùle yí tàng, nàr de tiānqì fēicháng shūfu. Duìle, Guóqìngjié qiánhòu rén fēicháng duō, nǐ zǎodiǎnr shàngwǎng mǎi piào hé zhǎo bīnguǎn ba.",
            "translation": "I just made a trip there two days ago, and the weather there is very comfortable. By the way, there are huge crowds around National Day, so go online early to buy tickets and find a hotel."
          },
          {
            "character": "莉莉",
            "hanzi": "哦，好的，谢谢！",
            "pinyin": "Ò, hǎo de, xièxie!",
            "translation": "Oh, alright, thank you!"
          }
        ]
      }
    ],
    "readingPassage": {
      "title": "Reading: Funny Stories Booking Sleeper Tickets & a '10-Star Hotel' + May Day Trip to the Great Wall (买卧铺票与订宾馆的笑话 · 五一爬长城)",
      "subtitle": "Synthesized from Lesson 12 Section 3·2 (平田和马克闹的笑话) and Section 4 (五一去北京爬长城).",
      "paragraphs": [
        {
          "hanzi": "留学生在中国可能都会闹点儿笑话，今天就说说平田、马克他们闹的笑话吧。几个朋友商量好春节前后要去云南和海南旅行。平田负责买票，他问售票员：“有1月30号去昆明的火车票吗？不要坐的，要睡觉的。”售票员一听就笑了：“是不要硬座，要卧铺吧？”“对对，软的卧铺多少钱一张？”“K2288次的只有硬卧了，513.5元一张，早上8:57从天津出发，第二天6:08到昆明。”“那好吧，就要这个吧。”",
          "pinyin": "Liúxuéshēng zài Zhōngguó kěnéng dōu huì nào diǎnr xiàohua, jīntiān jiù shuōshuo Píngtián, Mǎkè tāmen nào de xiàohua ba. Jǐ ge péngyou shāngliang hǎo Chūnjié qiánhòu yào qù Yúnnán hé Hǎinán lǚxíng. Píngtián fùzé mǎi piào, tā wèn shòupiàoyuán: “Yǒu yī yuè sānshí hào qù Kūnmíng de huǒchēpiào ma? Bú yào zuò de, yào shuìjiào de.” Shòupiàoyuán yì tīng jiù xiào le: “Shì bú yào yìngzuò, yào wòpù ba?” “Duì duì, ruǎn de wòpù duōshao qián yì zhāng?” “K èr èr bā bā cì de zhǐyǒu yìngwò le, wǔbǎi yīshísān diǎn wǔ yuán yì zhāng, zǎoshang bā diǎn wǔshíqī cóng Tiānjīn chūfā, dì-èr tiān liù diǎn líng bā dào Kūnmíng.” “Nà hǎo ba, jiù yào zhège ba.”",
          "translation": "International students in China probably all make a few funny blunders—today let's talk about the funny stories Hirata and Mark had. Several friends agreed to travel to Yunnan and Hainan around the Spring Festival. Hirata was in charge of buying tickets, and he asked the ticket clerk: 'Are there train tickets to Kunming for January 30? I don't want sitting ones; I want sleeping ones.' As soon as the clerk heard this, she laughed: 'You mean you don't want a hard seat, you want a sleeper berth, right?' 'Yes, yes! How much is a soft sleeper ticket?' 'Train K2288 only has hard sleepers left—513.5 yuan per ticket, departing from Tianjin at 8:57 AM and arriving in Kunming at 6:08 AM the next day.' 'Alright then, I'll take that.'"
        },
        {
          "hanzi": "马克负责订宾馆，他想过几天再订。中国朋友告诉他春节前后旅游的人多极了，不早点儿订可能就没地方住了。马克一听着急了，马上上网订宾馆。他找到一家三亚的快捷酒店，打电话联系时他跟经理说：“我的朋友有的要订交通方便的，有的要可以上网的，有的要能看见大海的，我要‘十星级’的！”经理听了哈哈大笑：“你们是外星人啊？都这个时候了，还有这么多的要求，能订上就不错了，还‘十星级’呢！”马克笑着说：“我是开玩笑的。”",
          "pinyin": "Mǎkè fùzé dìng bīnguǎn, tā xiǎng guò jǐ tiān zài dìng. Zhōngguó péngyou gàosu tā Chūnjié qiánhòu lǚyóu de rén duō jí le, bù zǎodiǎnr dìng kěnéng jiù méi dìfang zhù le. Mǎkè yì tīng zháojí le, mǎshàng shàngwǎng dìng bīnguǎn. Tā zhǎodào yì jiā Sānyà de kuàijié jiǔdiàn, dǎ diànhuà liánxì shí tā gēn jīnglǐ shuō: “Wǒ de péngyou yǒude yào dìng jiāotōng fāngbiàn de, yǒude yào kěyǐ shàngwǎng de, yǒude yào néng kànjiàn dàhǎi de, wǒ yào ‘shíxīngjí’ de!” Jīnglǐ tīngle hāhā dàxiào: “Nǐmen shì wàixīngrén a? Dōu zhège shíhou le, hái yǒu zhème duō de yāoqiú, néng dìngshàng jiù búcuò le, hái ‘shíxīngjí’ ne!” Mǎkè xiàozhe shuō: “Wǒ shì kāi wánxiào de.”",
          "translation": "Mark was in charge of booking the hotel and wanted to wait a few days before booking. His Chinese friend told him that there are an extreme number of tourists around the Spring Festival, and if he didn't book early there might be nowhere to stay. Hearing this, Mark got anxious and immediately went online to book a hotel. He found an express hotel in Sanya, and when calling to contact them he told the manager: 'Some of my friends want to book one with convenient transportation, some want internet access, some want an ocean view, and I want a \"ten-star\" one!' Hearing this, the manager burst out laughing: 'Are you guys aliens? At this late hour you still have so many requirements—you're lucky if you can book a room at all, let alone a \"ten-star\" one!' Mark said with a smile: 'I was just joking.'"
        },
        {
          "hanzi": "经理说：“我帮你联系一家在海边的快捷酒店吧。”“太好了！谢谢您啊！那家酒店在什么路附近？有单人间吗？多少钱一天？”“哦，没有单人间了，双人间还有，328元一天。”马克只好要了三个双人间。宾馆是贵了点儿，可是风景美极了，交通也方便极了。",
          "pinyin": "Jīnglǐ shuō: “Wǒ bāng nǐ liánxì yì jiā zài hǎibiān de kuàijié jiǔdiàn ba.” “Tài hǎo le! Xièxie nín a! Nà jiā jiǔdiàn zài shénme lù fùjìn? Yǒu dānrénjiān ma? Duōshao qián yì tiān?” “Ò, méiyǒu dānrénjiān le, shuāngrénjiān hái yǒu, sānbǎi èrshíbā yuán yì tiān.” Mǎkè zhǐhǎo yàole sān ge shuāngrénjiān. Bīnguǎn shì guìle diǎnr, kěshì fēngjǐng měi jí le, jiāotōng yě fāngbiàn jí le.",
          "translation": "The manager said: 'Let me help you contact an express hotel by the seaside.' 'Wonderful! Thank you! Near what road is that hotel located? Do they have single rooms? How much per day?' 'Oh, there are no single rooms left, but there are still double rooms at 328 yuan per day.' Mark had no choice but to take three double rooms. The hotel was a bit pricey, but the scenery was extremely beautiful and the transportation was extremely convenient."
        },
        {
          "hanzi": "我来中国半年了，一直很想去旅游。五一的时候，学校放了三天假，我去了北京。我买了张硬座票，座票21.5元一张，早上八点出发，早上九点四十五到了北京。我先找了一家宾馆，宾馆在长城附近，半个小时就能走到长城。第二天一大早我就开始爬长城，门票45元一张。五一前后天气很舒服，花开了，风景很美，爬长城的人多极了。我觉得这次旅游很有意思，花钱不多，可是看了风景，吃了小吃，还学了汉语。以后有时间，我还要去旅游。",
          "pinyin": "Wǒ lái Zhōngguó bàn nián le, yīzhí hěn xiǎng qù lǚyóu. Wǔ-Yī de shíhou, xuéxiào fàngle sān tiān jià, wǒ qùle Běijīng. Wǒ mǎile zhāng yìngzuò piào, zuòpiào èrshíyī diǎn wǔ yuán yì zhāng, zǎoshang bā diǎn chūfā, zǎoshang jiǔ diǎn sìshíwǔ dàole Běijīng. Wǒ xiān zhǎole yì jiā bīnguǎn, bīnguǎn zài Chángchéng fùjìn, bàn ge xiǎoshí jiù néng zǒu dào Chángchéng. Dì-èr tiān yídàzǎo wǒ jiù kāishǐ pá Chángchéng, ménpiào sìshíwǔ yuán yì zhāng. Wǔ-Yī qiánhòu tiānqì hěn shūfu, huā kāi le, fēngjǐng hěn měi, pá Chángchéng de rén duō jí le. Wǒ juéde zhècì lǚyóu hěn yǒu yìsi, huā qián bù duō, kěshì kànle fēngjǐng, chīle xiǎochī, hái xuéle Hànyǔ. Yǐhòu yǒu shíjiān, wǒ hái yào qù lǚyóu.",
          "translation": "I have been in China for half a year and had always wanted to go traveling. During the May Day holiday, school gave us three days off and I went to Beijing. I bought a hard-seat train ticket at 21.5 yuan per ticket, departed at 8:00 AM, and arrived in Beijing at 9:45 AM. First I found a hotel near the Great Wall—it was just a half-hour walk to the Great Wall. Bright and early the next morning I started climbing the Great Wall; admission tickets were 45 yuan each. Around May Day the weather was very comfortable, flowers were in bloom, the scenery was beautiful, and the crowd climbing the Great Wall was huge. I felt this trip was very meaningful—I didn't spend much money, yet I saw the scenery, ate local snacks, and practiced Chinese. When I have time in the future, I definitely want to travel again."
        }
      ]
    },
    "vocabularyExplanation": [
      {
        "hanzi": "旅游",
        "pinyin": "lǚyóu",
        "english": "to travel; tourism; sightseeing trip",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "快放假了，我们去旅游怎么样？",
        "examplePinyin": "Kuài fàngjià le, wǒmen qù lǚyóu zěnmeyàng?",
        "exampleTranslation": "Vacation is coming up soon—how about we go traveling?"
      },
      {
        "hanzi": "南方",
        "pinyin": "nánfāng",
        "english": "the South (southern China)",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "去南方吧，云南风景美，天气也暖和。",
        "examplePinyin": "Qù nánfāng ba, Yúnnán fēngjǐng měi, tiānqì yě nuǎnhuo.",
        "exampleTranslation": "Let's go south—the scenery in Yunnan is beautiful and the weather is warm."
      },
      {
        "hanzi": "北方",
        "pinyin": "běifāng",
        "english": "the North (northern China)",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "去哪儿玩儿好？南方还是北方？",
        "examplePinyin": "Qù nǎr wánr hǎo? Nánfāng háishi běifāng?",
        "exampleTranslation": "Where is a good place to visit? The South or the North?"
      },
      {
        "hanzi": "听说",
        "pinyin": "tīngshuō",
        "english": "to hear (it said that...)",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "听说哈尔滨的冰灯很漂亮！",
        "examplePinyin": "Tīngshuō Hā'ěrbīn de bīngdēng hěn piàoliang!",
        "exampleTranslation": "I heard that the ice lanterns in Harbin are very pretty!"
      },
      {
        "hanzi": "冰灯",
        "pinyin": "bīngdēng",
        "english": "ice lantern",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "冬天很多人去哈尔滨看冰灯。",
        "examplePinyin": "Dōngtiān hěn duō rén qù Hā'ěrbīn kàn bīngdēng.",
        "exampleTranslation": "In winter many people go to Harbin to see the ice lanterns."
      },
      {
        "hanzi": "风景",
        "pinyin": "fēngjǐng",
        "english": "scenery; landscape",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "宾馆是贵了点儿，可是风景美极了。",
        "examplePinyin": "Bīnguǎn shì guìle diǎnr, kěshì fēngjǐng měi jí le.",
        "exampleTranslation": "The hotel is a bit pricey, but the scenery is extremely beautiful."
      },
      {
        "hanzi": "美",
        "pinyin": "měi",
        "english": "beautiful; pretty",
        "partOfSpeech": "形 (adj.)",
        "exampleHanzi": "我很早就听说桂林美极了！",
        "examplePinyin": "Wǒ hěn zǎo jiù tīngshuō Guìlín měi jí le!",
        "exampleTranslation": "I heard a long time ago that Guilin is extremely beautiful!"
      },
      {
        "hanzi": "阳光",
        "pinyin": "yángguāng",
        "english": "sunlight; sunshine",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "海南有阳光、大海、沙滩，非常美。",
        "examplePinyin": "Hǎinán yǒu yángguāng, dàhǎi, shātān, fēicháng měi.",
        "exampleTranslation": "Hainan has sunshine, the sea, and sandy beaches—very beautiful."
      },
      {
        "hanzi": "大海",
        "pinyin": "dàhǎi",
        "english": "the sea; the ocean",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "有的朋友要订能看见大海的房间。",
        "examplePinyin": "Yǒude péngyou yào dìng néng kànjiàn dàhǎi de fángjiān.",
        "exampleTranslation": "Some friends want to book a room with an ocean view."
      },
      {
        "hanzi": "沙滩",
        "pinyin": "shātān",
        "english": "sandy beach",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "我们在海边的沙滩上拍了很多照片。",
        "examplePinyin": "Wǒmen zài hǎibiān de shātān shang pāile hěn duō zhàopiàn.",
        "exampleTranslation": "We took many photos on the sandy beach by the sea."
      },
      {
        "hanzi": "假期",
        "pinyin": "jiàqī",
        "english": "holiday; vacation period",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "假期那么长，云南和海南都去吧。",
        "examplePinyin": "Jiàqī nàme cháng, Yúnnán hé Hǎinán dōu qù ba.",
        "exampleTranslation": "Since the vacation is so long, let's go to both Yunnan and Hainan."
      },
      {
        "hanzi": "春节",
        "pinyin": "Chūnjié",
        "english": "Spring Festival (Chinese New Year)",
        "partOfSpeech": "专名 (proper noun)",
        "exampleHanzi": "几个朋友商量好春节前后要去云南和海南旅行。",
        "examplePinyin": "Jǐ ge péngyou shāngliang hǎo Chūnjié qiánhòu yào qù Yúnnán hé Hǎinán lǚxíng.",
        "exampleTranslation": "Several friends agreed to travel to Yunnan and Hainan around the Spring Festival."
      },
      {
        "hanzi": "前后",
        "pinyin": "qiánhòu",
        "english": "around (a date, festival, or point in time)",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "春节前后旅游的人多极了。",
        "examplePinyin": "Chūnjié qiánhòu lǚyóu de rén duō jí le.",
        "exampleTranslation": "Around the Spring Festival, the number of tourists is extremely large."
      },
      {
        "hanzi": "准备",
        "pinyin": "zhǔnbèi",
        "english": "to prepare; to get ready",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "放假第一周可以准备一下。",
        "examplePinyin": "Fàngjià dì-yī zhōu kěyǐ zhǔnbèi yíxià.",
        "exampleTranslation": "We can use the first week of the vacation to prepare a bit."
      },
      {
        "hanzi": "跟团",
        "pinyin": "gēntuán",
        "english": "to join a tour group",
        "partOfSpeech": "动 (VO verb)",
        "exampleHanzi": "莉莉觉得跟团更方便，也更安全。",
        "examplePinyin": "Lìlì juéde gēntuán gèng fāngbiàn, yě gèng ānquán.",
        "exampleTranslation": "Lily thinks joining a tour group is more convenient and safer."
      },
      {
        "hanzi": "安全",
        "pinyin": "ānquán",
        "english": "safe; secure; safety",
        "partOfSpeech": "形/名 (adj./noun)",
        "exampleHanzi": "出国旅行要注意安全。",
        "examplePinyin": "Chūguó lǚxíng yào zhùyì ānquán.",
        "exampleTranslation": "When traveling abroad, you should pay attention to safety."
      },
      {
        "hanzi": "自由",
        "pinyin": "zìyóu",
        "english": "free; unrestrained; freedom",
        "partOfSpeech": "形/名 (adj./noun)",
        "exampleHanzi": "我觉得自己玩儿更自由。",
        "examplePinyin": "Wǒ juéde zìjǐ wánr gèng zìyóu.",
        "exampleTranslation": "I think traveling on our own is freer."
      },
      {
        "hanzi": "决定",
        "pinyin": "juédìng",
        "english": "to decide; decision",
        "partOfSpeech": "动/名 (verb/noun)",
        "exampleHanzi": "时间、地方都可以自己决定。",
        "examplePinyin": "Shíjiān, dìfang dōu kěyǐ zìjǐ juédìng.",
        "exampleTranslation": "Both the time and the places can be decided by ourselves."
      },
      {
        "hanzi": "旅行社",
        "pinyin": "lǚxíngshè",
        "english": "travel agency",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "我上网查一下哪个旅行社更好。",
        "examplePinyin": "Wǒ shàngwǎng chá yíxià nǎge lǚxíngshè gèng hǎo.",
        "exampleTranslation": "I'll go online to check which travel agency is better."
      },
      {
        "hanzi": "自由行",
        "pinyin": "zìyóuxíng",
        "english": "independent package travel (agency books transport/hotels, traveler explores freely)",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "旅行社的“自由行”可以帮客人订票、订宾馆，到了地方客人自己玩儿。",
        "examplePinyin": "Lǚxíngshè de “zìyóuxíng” kěyǐ bāng kèrén dìng piào, dìng bīnguǎn, dàole dìfang kèrén zìjǐ wánr.",
        "exampleTranslation": "A travel agency's 'free-and-easy package' helps guests book tickets and hotels while letting them explore on their own once there."
      },
      {
        "hanzi": "订",
        "pinyin": "dìng",
        "english": "to book; to reserve (tickets, hotel rooms)",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "不早点儿订宾馆可能就没地方住了。",
        "examplePinyin": "Bù zǎodiǎnr dìng bīnguǎn kěnéng jiù méi dìfang zhù le.",
        "exampleTranslation": "If you don't book a hotel early, there might be nowhere to stay."
      },
      {
        "hanzi": "宾馆",
        "pinyin": "bīnguǎn",
        "english": "hotel; guesthouse",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "我先找了一家在长城附近的宾馆。",
        "examplePinyin": "Wǒ xiān zhǎole yì jiā zài Chángchéng fùjìn de bīnguǎn.",
        "exampleTranslation": "First I found a hotel near the Great Wall."
      },
      {
        "hanzi": "查",
        "pinyin": "chá",
        "english": "to check; to look up; to search",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "去旅游以前要先上网查一下天气和地图。",
        "examplePinyin": "Qù lǚyóu yǐqián yào xiān shàngwǎng chá yíxià tiānqì hé dìtú.",
        "exampleTranslation": "Before going traveling, you should go online to check the weather and map first."
      },
      {
        "hanzi": "闹笑话",
        "pinyin": "nào xiàohua",
        "english": "to make a funny mistake / blunder; to make a fool of oneself",
        "partOfSpeech": "动 (VO phrase)",
        "exampleHanzi": "留学生在中国可能都会闹点儿笑话。",
        "examplePinyin": "Liúxuéshēng zài Zhōngguó kěnéng dōu huì nào diǎnr xiàohua.",
        "exampleTranslation": "International students in China probably all make a few funny blunders."
      },
      {
        "hanzi": "商量",
        "pinyin": "shāngliang",
        "english": "to discuss; to consult; to talk over",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "几个朋友商量好春节前后要去云南和海南旅行。",
        "examplePinyin": "Jǐ ge péngyou shāngliang hǎo Chūnjié qiánhòu yào qù Yúnnán hé Hǎinán lǚxíng.",
        "exampleTranslation": "Several friends discussed and agreed to travel to Yunnan and Hainan around the Spring Festival."
      },
      {
        "hanzi": "负责",
        "pinyin": "fùzé",
        "english": "to be in charge of; to be responsible for",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "平田负责买火车票，马克负责订宾馆。",
        "examplePinyin": "Píngtián fùzé mǎi huǒchēpiào, Mǎkè fùzé dìng bīnguǎn.",
        "exampleTranslation": "Hirata is in charge of buying train tickets, and Mark is in charge of booking hotels."
      },
      {
        "hanzi": "硬座",
        "pinyin": "yìngzuò",
        "english": "hard seat (on a train)",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "是不要硬座，要卧铺吧？",
        "examplePinyin": "Shì bú yào yìngzuò, yào wòpù ba?",
        "exampleTranslation": "You mean you don't want a hard seat, you want a sleeper berth, right?"
      },
      {
        "hanzi": "卧铺",
        "pinyin": "wòpù",
        "english": "sleeper berth (on a train, divided into 硬卧 hard sleeper and 软卧 soft sleeper)",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "K2288次的只有硬卧了，513.5元一张。",
        "examplePinyin": "K èr èr bā bā cì de zhǐyǒu yìngwò le, wǔbǎi yīshísān diǎn wǔ yuán yì zhāng.",
        "exampleTranslation": "Train K2288 only has hard sleepers left, at 513.5 yuan per ticket."
      },
      {
        "hanzi": "出发",
        "pinyin": "chūfā",
        "english": "to set off; to depart",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "早上8:57从天津出发，第二天6:08到昆明。",
        "examplePinyin": "Zǎoshang bā diǎn wǔshíqī cóng Tiānjīn chūfā, dì-èr tiān liù diǎn líng bā dào Kūnmíng.",
        "exampleTranslation": "Departing from Tianjin at 8:57 AM and arriving in Kunming at 6:08 AM the next day."
      },
      {
        "hanzi": "极",
        "pinyin": "jí",
        "english": "extremely (used in Adj + 极了)",
        "partOfSpeech": "副 (adverb)",
        "exampleHanzi": "风景美极了，交通也方便极了。",
        "examplePinyin": "Fēngjǐng měi jí le, jiāotōng yě fāngbiàn jí le.",
        "exampleTranslation": "The scenery is extremely beautiful, and transportation is extremely convenient."
      },
      {
        "hanzi": "着急",
        "pinyin": "zháojí",
        "english": "anxious; worried; in a hurry",
        "partOfSpeech": "形 (adj.)",
        "exampleHanzi": "马克一听着急了，马上上网订宾馆。",
        "examplePinyin": "Mǎkè yì tīng zháojí le, mǎshàng shàngwǎng dìng bīnguǎn.",
        "exampleTranslation": "As soon as Mark heard this, he got anxious and immediately went online to book a hotel."
      },
      {
        "hanzi": "快捷酒店",
        "pinyin": "kuàijié jiǔdiàn",
        "english": "express / budget chain hotel",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "我帮你联系一家在海边的快捷酒店吧。",
        "examplePinyin": "Wǒ bāng nǐ liánxì yì jiā zài hǎibiān de kuàijié jiǔdiàn ba.",
        "exampleTranslation": "Let me help you contact an express hotel by the seaside."
      },
      {
        "hanzi": "联系",
        "pinyin": "liánxì",
        "english": "to contact; to get in touch with",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "他找到一家三亚的快捷酒店，打电话联系经理。",
        "examplePinyin": "Tā zhǎodào yì jiā Sānyà de kuàijié jiǔdiàn, dǎ diànhuà liánxì jīnglǐ.",
        "exampleTranslation": "He found an express hotel in Sanya and called to contact the manager."
      },
      {
        "hanzi": "交通",
        "pinyin": "jiāotōng",
        "english": "transportation; traffic",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "我的朋友有的要订交通方便的宾馆。",
        "examplePinyin": "Wǒ de péngyou yǒude yào dìng jiāotōng fāngbiàn de bīnguǎn.",
        "exampleTranslation": "Some of my friends want to book a hotel with convenient transportation."
      },
      {
        "hanzi": "要求",
        "pinyin": "yāoqiú",
        "english": "requirement; request; demand",
        "partOfSpeech": "名/动 (noun/verb)",
        "exampleHanzi": "都这个时候了，还有这么多的要求！",
        "examplePinyin": "Dōu zhège shíhou le, hái yǒu zhème duō de yāoqiú!",
        "exampleTranslation": "Even at this late hour, you still have so many requirements!"
      },
      {
        "hanzi": "开玩笑",
        "pinyin": "kāi wánxiào",
        "english": "to joke; to make a joke",
        "partOfSpeech": "动 (VO phrase)",
        "exampleHanzi": "马克笑着说：“我是开玩笑的。”",
        "examplePinyin": "Mǎkè xiàozhe shuō: “Wǒ shì kāi wánxiào de.”",
        "exampleTranslation": "Mark said with a smile: 'I was just joking.'"
      },
      {
        "hanzi": "单人间",
        "pinyin": "dānrénjiān",
        "english": "single room (in a hotel)",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "请问有单人间吗？多少钱一天？",
        "examplePinyin": "Qǐngwèn yǒu dānrénjiān ma? Duōshao qián yì tiān?",
        "exampleTranslation": "Excuse me, do you have single rooms? How much per day?"
      },
      {
        "hanzi": "双人间",
        "pinyin": "shuāngrénjiān",
        "english": "double / twin room (in a hotel)",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "没有单人间了，双人间还有，328元一天。",
        "examplePinyin": "Méiyǒu dānrénjiān le, shuāngrénjiān hái yǒu, sānbǎi èrshíbā yuán yì tiān.",
        "exampleTranslation": "There are no single rooms left, but double rooms are still available at 328 yuan per day."
      },
      {
        "hanzi": "只好",
        "pinyin": "zhǐhǎo",
        "english": "to have no choice but to; can only",
        "partOfSpeech": "副 (adverb)",
        "exampleHanzi": "没有单人间了，马克只好要了三个双人间。",
        "examplePinyin": "Méiyǒu dānrénjiān le, Mǎkè zhǐhǎo yàole sān ge shuāngrénjiān.",
        "exampleTranslation": "Since there were no single rooms left, Mark had no choice but to take three double rooms."
      }
    ],
    "grammarPoint": "Consulting Plans ('去哪儿/怎么 + V + 好？'), Approximate Time ('[时间] + 前后'), and Extreme Degree ('Adj + 极了')",
    "structure": "去哪儿 / 什么时候 / 怎么 + V + 好？  |  [时间点] + 前后  |  Adj + 极了",
    "explanation": "Lesson 12 equips learners to discuss and book travel plans: (1) proposing ideas with '[想法]，怎么样？' and consulting others with '去哪儿/什么时候/怎么 + V + 好？'; (2) distinguishing '[时间点] + 前后' (around a specific date/festival) from '[数量] + 左右' (an approximate quantity or duration); (3) contrasting firm determination '要 + V' with a desire '想 + V'; (4) expressing extreme degree with 'Adj + 极了'; and (5) stating unit prices for tickets and hotel rooms ('513.5元一张', '328元一天').",
    "examples": [
      {
        "hanzi": "去哪儿玩儿好？什么时候去好？你们觉得怎么去好？",
        "pinyin": "Qù nǎr wánr hǎo? Shénme shíhou qù hǎo? Nǐmen juéde zěnme qù hǎo?",
        "translation": "Where is a good place to visit? When is a good time to go? How do you think we should go?"
      },
      {
        "hanzi": "春节前后旅游的人多极了，宾馆的风景美极了，交通也方便极了。",
        "pinyin": "Chūnjié qiánhòu lǚyóu de rén duō jí le, bīnguǎn de fēngjǐng měi jí le, jiāotōng yě fāngbiàn jí le.",
        "translation": "Around the Spring Festival there are an extreme number of tourists; the hotel's scenery is extremely beautiful, and transportation is extremely convenient."
      },
      {
        "hanzi": "K2288次的硬卧513.5元一张；双人间328元一天。",
        "pinyin": "K èr èr bā bā cì de yìngwò wǔbǎi yīshísān diǎn wǔ yuán yì zhāng; shuāngrénjiān sānbǎi èrshíbā yuán yì tiān.",
        "translation": "Hard sleepers on Train K2288 are 513.5 yuan per ticket; double rooms are 328 yuan per day."
      }
    ],
    "grammarNotes": [
      {
        "title": "1. Proposing & Consulting Travel Plans: '[想法]，怎么样？' & '去哪儿/什么时候/怎么 + V + 好？'",
        "structure": "[Proposal]，怎么样？  |  (你说 / 你们觉得) + 去哪儿 / 什么时候 / 怎么 + Verb + 好？",
        "explanation": "Add '怎么样？' after a proposal ('我们去旅游怎么样？', '云南怎么样？') to ask for others' opinions. When asking someone to recommend the best destination, time, or method, place '好' at the end of a question-word verb phrase: '去哪儿玩儿好？' ('Where would be good to go?'), '什么时候去好？' ('When would be good to go?'), '怎么去好？' ('How would be good to go?').",
        "tip": "You can preface the question with 你说…… or 你们觉得…… ('Where do you think is best to go?').",
        "examples": [
          {
            "hanzi": "快放假了，我们去旅游怎么样？去南方吧，云南怎么样？",
            "pinyin": "Kuài fàngjià le, wǒmen qù lǚyóu zěnmeyàng? Qù nánfāng ba, Yúnnán zěnmeyàng?",
            "translation": "Vacation is coming up soon—how about we go traveling? Let's go south; how about Yunnan?"
          },
          {
            "hanzi": "去哪儿玩儿好？什么时候去好？你们觉得怎么去好？自己玩儿还是跟团？",
            "pinyin": "Qù nǎr wánr hǎo? Shénme shíhou qù hǎo? Nǐmen juéde zěnme qù hǎo? Zìjǐ wánr háishi gēntuán?",
            "translation": "Where is a good place to visit? When is a good time to go? How do you think we should go—on our own or with a tour group?"
          }
        ]
      },
      {
        "title": "2. Approximate Point in Time '[时间点] + 前后' vs. Approximate Quantity '[数量] + 左右'",
        "structure": "[Festival / Date / Point in Time] + 前后  vs.  [Number + Measure Word] + 左右",
        "explanation": "'前后 (qiánhòu)' follows a specific point in time or holiday (春节前后 around Spring Festival, 国庆节前后 around National Day, 五一前后 around May Day, 八点前后 around 8 o'clock) to mean 'a few days/minutes before and after that time'. It cannot be used after pure quantities or durations. Conversely, '左右 (zuǒyòu)' can follow both points in time and quantities/durations (30分钟左右 around 30 minutes, 五百元左右 around 500 yuan).",
        "tip": "Say 春节前后 (around Spring Festival), never *春节左右; say 三十岁左右 or 三天左右, never *三天前后.",
        "examples": [
          {
            "hanzi": "放假第二周，春节前后去吧，第一周可以准备一下。",
            "pinyin": "Fàngjià dì-èr zhōu, Chūnjié qiánhòu qù ba, dì-yī zhōu kěyǐ zhǔnbèi yíxià.",
            "translation": "Let's go in the second week of the holiday, around the Spring Festival; we can prepare during the first week."
          },
          {
            "hanzi": "国庆节前后人非常多，你早点儿上网买票和找宾馆吧。",
            "pinyin": "Guóqìngjié qiánhòu rén fēicháng duō, nǐ zǎodiǎnr shàngwǎng mǎi piào hé zhǎo bīnguǎn ba.",
            "translation": "Around National Day there are huge crowds, so go online early to buy tickets and find a hotel."
          }
        ]
      },
      {
        "title": "3. Expressing Firm Intention '要 + V' vs. Wish/Plan '想 + V'",
        "structure": "要 + Verb (firm decision / determination)  vs.  想 + Verb (wish / desire / plan)",
        "explanation": "'想 + V' expresses a wish, desire, or tentative thought ('我想去旅游', '他想过几天再订'). '要 + V' expresses a firm decision, strong requirement, or scheduled commitment ('几个朋友商量好春节前后要去云南和海南旅行', '以后有时间，我还要去旅游').",
        "tip": "In negative answers to 'Want to go?', use 不去 or 不想去了 rather than 不要去.",
        "examples": [
          {
            "hanzi": "几个朋友商量好春节前后要去云南和海南旅行。",
            "pinyin": "Jǐ ge péngyou shāngliang hǎo Chūnjié qiánhòu yào qù Yúnnán hé Hǎinán lǚxíng.",
            "translation": "Several friends discussed and decided they are going to travel to Yunnan and Hainan around the Spring Festival."
          },
          {
            "hanzi": "我的朋友有的要订交通方便的，有的要可以上网的，有的要能看见大海的。",
            "pinyin": "Wǒ de péngyou yǒude yào dìng jiāotōng fāngbiàn de, yǒude yào kěyǐ shàngwǎng de, yǒude yào néng kànjiàn dàhǎi de.",
            "translation": "Some of my friends want to book one with convenient transport, some want internet access, and some want an ocean view."
          }
        ]
      },
      {
        "title": "4. Extreme Degree Complement: 'Adj + 极了'",
        "structure": "Adjective (美 / 多 / 方便 / 好 / 高兴 / 舒服) + 极了",
        "explanation": "Placing '极了 (jí le)' immediately after an adjective expresses an exclamation of extreme degree ('extremely...', '...to the utmost').",
        "tip": "Just like 越来越, never place 很 or 太 before an adjective that is followed by 极了 (say 美极了, never *很美极了).",
        "examples": [
          {
            "hanzi": "春节前后旅游的人多极了，不早点儿订可能就没地方住了。",
            "pinyin": "Chūnjié qiánhòu lǚyóu de rén duō jí le, bù zǎodiǎnr dìng kěnéng jiù méi dìfang zhù le.",
            "translation": "Around the Spring Festival the number of tourists is extremely large; if you don't book early there might be nowhere to stay."
          },
          {
            "hanzi": "宾馆是贵了点儿，可是风景美极了，交通也方便极了。",
            "pinyin": "Bīnguǎn shì guìle diǎnr, kěshì fēngjǐng měi jí le, jiāotōng yě fāngbiàn jí le.",
            "translation": "The hotel is a bit expensive, but the scenery is extremely beautiful and the transportation is extremely convenient."
          }
        ]
      },
      {
        "title": "5. Booking Train Tickets & Hotel Rooms ('有去 [地点] 的 [票] 吗？' & Unit Pricing)",
        "structure": "有 (+ Date) + 去 + [Place] + 的 + [Ticket] + 吗？  |  [Item] + [Price] + 元 + 一张 / 一天",
        "explanation": "When buying tickets or booking rooms, ask '有1月30号去昆明的火车票吗？' or '有单人间吗？多少钱一天？'. Unit prices are stated as '[Price] + 元/块 + 一张 (per ticket) / 一天 (per day)'. When forced by circumstances to accept an alternative, use the adverb '只好 (zhǐhǎo, had no choice but to)'.",
        "tip": "Train seat/berth types in China: 硬座 (hard seat), 软座 (soft seat), 硬卧 (hard sleeper), 软卧 (soft sleeper).",
        "examples": [
          {
            "hanzi": "K2288次的只有硬卧了，513.5元一张，早上8:57从天津出发。",
            "pinyin": "K èr èr bā bā cì de zhǐyǒu yìngwò le, wǔbǎi yīshísān diǎn wǔ yuán yì zhāng, zǎoshang bā diǎn wǔshíqī cóng Tiānjīn chūfā.",
            "translation": "Train K2288 only has hard sleepers left, 513.5 yuan per ticket, departing from Tianjin at 8:57 AM."
          },
          {
            "hanzi": "没有单人间了，双人间还有，328元一天。马克只好要了三个双人间。",
            "pinyin": "Méiyǒu dānrénjiān le, shuāngrénjiān hái yǒu, sānbǎi èrshíbā yuán yì tiān. Mǎkè zhǐhǎo yàole sān ge shuāngrénjiān.",
            "translation": "There were no single rooms left, but double rooms were available at 328 yuan per day. Mark had no choice but to take three double rooms."
          }
        ]
      }
    ],
    "exercises": [
      {
        "question": "In Dialogue 1, why do Mark and his friends ultimately choose the '自由行' (free-and-easy independent package) travel option?",
        "promptHanzi": "旅行社有一种“自由行”的旅行方式，可以帮客人订票，订宾馆，到了地方客人自己玩儿，我觉得这种更好。",
        "promptPinyin": "Lǚxíngshè yǒu yì zhǒng “zìyóuxíng” de lǚxíng fāngshì, kěyǐ bāng kèrén dìng piào, dìng bīnguǎn, dàole dìfang kèrén zìjǐ wánr, wǒ juéde zhè zhǒng gèng hǎo.",
        "options": [
          "Because the travel agency helps book tickets and hotels (帮客人订票、订宾馆), and once at the destination travelers explore freely on their own (到了地方客人自己玩儿).",
          "Because '自由行' means traveling without buying any train tickets or staying in any hotels.",
          "Because Ali insists on going to Harbin to see the ice lanterns.",
          "Because the tour guide decides every minute of their schedule."
        ],
        "answerIndex": 0,
        "explanation": "'自由行' combines the convenience of agency ticket/hotel booking with the freedom of independent sightseeing once at the destination."
      },
      {
        "question": "What funny mistake (闹笑话) did Hirata make when buying train tickets to Kunming?",
        "options": [
          "He forgot the word '卧铺' (sleeper berth) and told the clerk '不要坐的，要睡觉的' ('I don't want sitting ones, I want sleeping ones').",
          "He accidentally bought plane tickets to Tokyo instead of train tickets to Kunming.",
          "He asked for a 'ten-star train' (十星级火车).",
          "He bought tickets for May Day instead of January 30."
        ],
        "answerIndex": 0,
        "explanation": "In the reading passage, Hirata asks the ticket clerk: “有1月30号去昆明的火车票吗？不要坐的，要睡觉的。” The clerk laughs and replies: “是不要硬座，要卧铺吧？”"
      },
      {
        "question": "Look at the character triplet 请 (qǐng), 清 (qīng), and 晴 (qíng). How do their radicals distinguish their meanings?",
        "options": [
          "请 has 讠 (speech -> polite request 'please'), 清 has 氵 (water -> 'clear/light'), and 晴 has 日 (sun -> 'sunny day').",
          "All three mean 'sunny weather' and can be used interchangeably.",
          "请 relates to bamboo, 清 relates to sickness, and 晴 relates to clothing.",
          "请 has 彳, 清 has 刂, and 晴 has 土."
        ],
        "answerIndex": 0,
        "explanation": "All three share the phonetic component 青 (qīng), while their semantic radicals (讠 speech, 氵 water, 日 sun) distinguish 请坐, 清淡, and 晴天."
      },
      {
        "question": "Which sentence correctly uses '前后' or '极了' according to Lesson 12 grammar?",
        "options": [
          "春节前后旅游的人多极了，宾馆的风景美极了。",
          "春节前后旅游的人很极了多，风景太美极了。",
          "我等了三十分钟前后。",
          "这个包裹十公斤前后。"
        ],
        "answerIndex": 0,
        "explanation": "'前后' is used after points in time/festivals (春节前后, 五一前后), and 'Adj + 极了' (多极了, 美极了) takes no preceding degree adverb like 很 or 太."
      }
    ]
  },
  {
    "id": "lesson16",
    "title": "Cultural Reader 4: Where Is a Good Place to Travel? — 文化读本4：去哪儿旅行好",
    "chineseTitle": "文化读本4：去哪儿旅行好",
    "unitBadge": "Mastering Chinese · Elementary 4 (会通汉语 精编版·初级4 · 文化读本)",
    "description": "Explore China's three major travel experiences: famous mountains and great rivers ('名山大川' with spiritual energy '灵气'), urban historical sites ('历史古迹') paired with local street snacks, and relaxing weekend rural farmhouse retreats ('农家乐').",
    "content": "Synthesized from Cultural Reader 4 (文化读本4《去哪儿旅行好》) in Mastering Chinese: Elementary 4 (会通汉语 精编版·初级4). Learners read the complete authentic essay introducing China's famous mountains and rivers (泰山、黄山、华山、峨眉山、嵩山、武当山、长江三峡、杭州西湖) and their signature wonders (日出、奇松、怪石、云海、中国功夫、小猴子), iconic historical monuments (长城、故宫、孔庙、兵马俑、苏州园林) and local snacks, and the popular weekend '农家乐' (rural farmhouse tourism) trend, while mastering '有……才……', '除了……，还……', and '顺便 + V'.",
    "hskLevel": 4,
    "objectives": [
      "Understand the Chinese cultural concept of '有山有水才有灵气' (where there are mountains and water, there is spiritual vitality) and identify China's famous mountains and rivers (泰山、黄山、华山、峨眉山、嵩山、武当山、长江三峡、杭州西湖).",
      "Match famous scenic mountains with their signature attractions: Mount Huangshan's wondrous pines, grotesque rocks, and sea of clouds (奇松、怪石、云海), Mount Tai's sunrise (日出), Mount Song & Wudang's Chinese kung fu (中国功夫), and Mount Emei's cute monkeys (可爱的小猴子).",
      "Describe China's major historical monuments (长城、故宫、孔庙、兵马俑、苏州园林) and explain why visiting them makes it easy to sample local street snacks along the way (顺便尝尝地方小吃).",
      "Explain what '农家乐' (nóngjiālè, rural farmhouse tourism) is and why it is popular among urban Chinese residents and international students with limited time or budget."
    ],
    "phoneticsAndCharacters": {
      "title": "Cultural Guide: Famous Mountains & Rivers (名山大川), Historical Sites (历史古迹) & Rural Retreats (农家乐)",
      "sections": [
        {
          "subtitle": "1. Famous Mountains & Great Rivers of China (中国的名山大川)",
          "summary": "Chinese culture holds that '有山有水才有灵气' (landscapes possess spiritual vitality only when mountains and water come together):",
          "items": [
            {
              "label": "泰山 (Tài Shān) · 华山 (Huà Shān)",
              "pinyin": "Tài Shān · Huà Shān",
              "detail": "Mount Tai in Shandong (renowned for viewing the sacred sunrise 看日出) and Mount Hua in Shaanxi (famous for its sheer, precipitous peaks).",
              "examples": "去泰山看日出 (watch the sunrise on Mount Tai)"
            },
            {
              "label": "黄山 (Huáng Shān — Mount Huangshan in Anhui)",
              "pinyin": "Huáng Shān",
              "detail": "Celebrated across China for its 'Four Wonders', especially wondrous pines (奇松 qísōng), grotesque rocks (怪石 guàishí), and the sea of clouds (云海 yúnhǎi).",
              "examples": "奇松 (qísōng) · 怪石 (guàishí) · 云海 (yúnhǎi)"
            },
            {
              "label": "嵩山 (Sōng Shān) · 武当山 (Wǔdāng Shān)",
              "pinyin": "Sōng Shān · Wǔdāng Shān",
              "detail": "Mount Song in Henan (home of the Shaolin Temple 少林寺) and the Wudang Mountains in Hubei—the two legendary cradles where visitors can learn Chinese kung fu (学学中国功夫).",
              "examples": "学学中国功夫 (learn Chinese martial arts / kung fu)"
            },
            {
              "label": "峨眉山 (Éméi Shān) · 长江三峡 (Chángjiāng Sānxiá) · 杭州西湖 (Hángzhōu Xīhú)",
              "pinyin": "Éméi Shān · Chángjiāng Sānxiá · Hángzhōu Xīhú",
              "detail": "Mount Emei in Sichuan (famous for its lively wild monkeys 可爱的小猴子), the Three Gorges of the Yangtze River, and the poetic West Lake in Hangzhou.",
              "examples": "看看可爱的小猴子 · 长江三峡 · 杭州西湖"
            }
          ]
        },
        {
          "subtitle": "2. Historical Monuments (历史古迹) & 'Nongjiale' Rural Tourism (农家乐)",
          "summary": "Beyond natural landscapes, travelers can explore urban heritage sites or relax in the countryside:",
          "items": [
            {
              "label": "长城 (Chángchéng) · 故宫 (Gùgōng) · 孔庙 (Kǒngmiào)",
              "pinyin": "Chángchéng · Gùgōng · Kǒngmiào",
              "detail": "The Great Wall and the Forbidden City in Beijing, and the Temple of Confucius in Qufu (and Beijing)—monuments to China's imperial and philosophical history.",
              "examples": "爬长城 · 参观故宫和孔庙"
            },
            {
              "label": "兵马俑 (Bīngmǎyǒng) · 苏州园林 (Sūzhōu Yuánlín)",
              "pinyin": "Bīngmǎyǒng · Sūzhōu Yuánlín",
              "detail": "The Terracotta Warriors and Horses in Xi'an and the Classical Gardens of Suzhou. Because these historical sites are inside or close to cities, visitors can conveniently sample local street snacks along the way (顺便尝尝这些地方的小吃).",
              "examples": "西安兵马俑 · 苏州园林 · 顺便尝尝小吃"
            },
            {
              "label": "农家乐 (nóngjiālè — Rural Farmhouse Tourism)",
              "pinyin": "nóngjiālè",
              "detail": "A popular weekend travel style where city residents and students visit villages near the city (城市附近的农村) to eat fresh farmhouse food, relax (放松放松), and experience rural life without needing a lot of time or money.",
              "examples": "周末去城市附近的农村放松放松，过几天农村生活"
            }
          ]
        }
      ]
    },
    "dialogue": [
      {
        "character": "马克",
        "hanzi": "李老师，中国好玩儿的地方太多了，我常常不知道去哪儿旅行好。您能给我介绍一下吗？",
        "pinyin": "Lǐ lǎoshī, Zhōngguó hǎowánr de dìfang tài duō le, wǒ chángcháng bù zhīdào qù nǎr lǚxíng hǎo. Nín néng gěi wǒ jièshào yíxià ma?",
        "translation": "Teacher Li, there are so many fun places in China that I often don't know where is best to travel. Could you introduce some to me?"
      },
      {
        "character": "李老师",
        "hanzi": "如果你喜欢山水，可以去泰山、黄山、峨眉山或者杭州西湖。中国人觉得有山有水才有灵气。",
        "pinyin": "Rúguǒ nǐ xǐhuan shānshuǐ, kěyǐ qù Tài Shān, Huáng Shān, Éméi Shān huòzhě Hángzhōu Xīhú. Zhōngguórén juéde yǒu shān yǒu shuǐ cái yǒu língqì.",
        "translation": "If you like mountains and water, you can go to Mount Tai, Mount Huangshan, Mount Emei, or West Lake in Hangzhou. Chinese people believe that only where there are mountains and water is there spiritual vitality."
      },
      {
        "character": "马克",
        "hanzi": "除了名山大川，我还想看历史古迹，吃好吃的小吃！",
        "pinyin": "Chúle míngshān-dàchuān, wǒ hái xiǎng kàn lìshǐ gǔjì, chī hǎochī de xiǎochī!",
        "translation": "Besides famous mountains and great rivers, I also want to see historical sites and eat delicious local snacks!"
      },
      {
        "character": "李老师",
        "hanzi": "那你可以去长城、故宫、兵马俑或者苏州园林。这些古迹离城市很近，自己去很方便，顺便可以尝尝当地的小吃。",
        "pinyin": "Nà nǐ kěyǐ qù Chángchéng, Gùgōng, Bīngmǎyǒng huòzhě Sūzhōu Yuánlín. Zhèxiē gǔjì lí chéngshì hěn jìn, zìjǐ qù hěn fāngbiàn, shùnbiàn kěyǐ chángchang dāngdì de xiǎochī.",
        "translation": "Then you can go to the Great Wall, the Forbidden City, the Terracotta Warriors, or the Suzhou Gardens. These historical sites are close to cities, very convenient to visit on your own, and you can sample local snacks along the way."
      }
    ],
    "dialogues": [
      {
        "title": "Dialogue 1: Why Chinese People Love Famous Mountains & Great Rivers (为什么中国人喜欢名山大川)",
        "context": "Based on the Cultural Reader 4 discussion prompts (话题讨论 1): Mark (马克) asks Teacher Li (李老师) about the meaning of '名山大川' and why Chinese travelers love scenic mountains and rivers.",
        "lines": [
          {
            "character": "马克",
            "hanzi": "李老师，课文里说“中国名山大川多极了”，请问“名山大川”是什么意思？",
            "pinyin": "Lǐ lǎoshī, kèwén lǐ shuō “Zhōngguó míngshān-dàchuān duō jí le”, qǐngwèn “míngshān-dàchuān” shì shénme yìsi?",
            "translation": "Teacher Li, the text says 'China has an extreme number of míngshān-dàchuān'—may I ask what 'míngshān-dàchuān' means?"
          },
          {
            "character": "李老师",
            "hanzi": "“名山大川”就是有名的山和大江大河。因为中国人觉得有山有水才有灵气，而且这些地方一般都有自己的历史和故事。",
            "pinyin": "“Míngshān-dàchuān” jiùshì yǒumíng de shān hé dàjiāng-dàhé. Yīnwèi Zhōngguórén juéde yǒu shān yǒu shuǐ cái yǒu língqì, érqiě zhèxiē dìfang yìbān dōu yǒu zìjǐ de lìshǐ hé gùshi.",
            "translation": "'Míngshān-dàchuān' means famous mountains and great rivers. Because Chinese people feel that a place has spiritual vitality only when it has both mountains and water, and these places usually have their own history and stories."
          },
          {
            "character": "马克",
            "hanzi": "如果我想看奇松、怪石、云海，或者想学中国功夫，应该去哪座山呢？",
            "pinyin": "Rúguǒ wǒ xiǎng kàn qísōng, guàishí, yúnhǎi, huòzhě xiǎng xué Zhōngguó gōngfu, yīnggāi qù nǎ zuò shān ne?",
            "translation": "If I want to see wondrous pines, grotesque rocks, and a sea of clouds, or if I want to learn Chinese kung fu, which mountains should I visit?"
          },
          {
            "character": "李老师",
            "hanzi": "看奇松、怪石和云海可以去安徽黄山；看日出可以去山东泰山；想学中国功夫可以去嵩山或者武当山；去四川峨眉山还能看到可爱的小猴子呢！",
            "pinyin": "Kàn qísōng, guàishí hé yúnhǎi kěyǐ qù Ānhuī Huáng Shān; kàn rìchū kěyǐ qù Shāndōng Tài Shān; xiǎng xué Zhōngguó gōngfu kěyǐ qù Sōng Shān huòzhě Wǔdāng Shān; qù Sìchuān Éméi Shān hái néng kàndào kě'ài de xiǎo hóuzi ne!",
            "translation": "To see wondrous pines, grotesque rocks, and the sea of clouds, you can go to Mount Huangshan in Anhui; to watch the sunrise, go to Mount Tai in Shandong; to learn Chinese kung fu, go to Mount Song or the Wudang Mountains; and on Mount Emei in Sichuan you can even see cute little monkeys!"
          }
        ]
      },
      {
        "title": "Dialogue 2: Choosing Between Urban Historical Sites & Weekend 'Nongjiale' (历史古迹与周末“农家乐”)",
        "context": "Based on the Cultural Reader 4 discussion prompts (话题讨论 2): Jin Zhiying (金志英) and her classmate Lin Na (林娜) talk about visiting urban historical sites and trying '农家乐' (rural farmhouse tourism) on the weekend.",
        "lines": [
          {
            "character": "金志英",
            "hanzi": "林娜，这个周末我们没有太多的时间和钱，不敢去很远的地方，你说去哪儿玩儿好？",
            "pinyin": "Lín Nà, zhège zhōumò wǒmen méiyǒu tài duō de shíjiān hé qián, bù gǎn qù hěn yuǎn de dìfang, nǐ shuō qù nǎr wánr hǎo?",
            "translation": "Lin Na, this weekend we don't have too much time or money and don't dare go somewhere very far—where do you think would be a good place to go?"
          },
          {
            "character": "林娜",
            "hanzi": "我们可以试试“农家乐”！这种旅游最近在中国很流行。",
            "pinyin": "Wǒmen kěyǐ shìshi “nóngjiālè”! Zhè zhǒng lǚyóu zuìjìn zài Zhōngguó hěn liúxíng.",
            "translation": "We can try 'Nongjiale' (rural farmhouse tourism)! This kind of travel has been very popular in China recently."
          },
          {
            "character": "金志英",
            "hanzi": "什么是“农家乐”呀？",
            "pinyin": "Shénme shì “nóngjiālè” ya?",
            "translation": "What is 'Nongjiale'?"
          },
          {
            "character": "林娜",
            "hanzi": "就是周末的时候去城市附近的农村放松放松，吃农家菜，过几天农村生活。或者我们也可以去市里的历史古迹，顺便尝尝那儿的小吃。",
            "pinyin": "Jiùshì zhōumò de shíhou qù chéngshì fùjìn de nóngcūn fàngsōng fàngsōng, chī nóngjiācài, guò jǐ tiān nóngcūn shēnghuó. Huòzhě wǒmen yě kěyǐ qù shì lǐ de lìshǐ gǔjì, shùnbiàn chángchang nàr de xiǎochī.",
            "translation": "It means going to the countryside near the city on the weekend to relax, eat farmhouse dishes, and experience rural life for a couple of days. Or we can visit historical sites in the city and sample the local snacks there along the way."
          },
          {
            "character": "金志英",
            "hanzi": "太棒了！那我们这周去“农家乐”放松放松，下个月再去西安看兵马俑、去苏州看园林！",
            "pinyin": "Tài bàng le! Nà wǒmen zhè zhōu qù “nóngjiālè” fàngsōng fàngsōng, xià ge yuè zài qù Xī'ān kàn Bīngmǎyǒng, qù Sūzhōu kàn yuánlín!",
            "translation": "Awesome! Then let's go to a 'Nongjiale' to relax this week, and next month go to Xi'an to see the Terracotta Warriors and to Suzhou to see the classical gardens!"
          }
        ]
      }
    ],
    "readingPassage": {
      "title": "Cultural Reader 4: Where Is a Good Place to Travel? (去哪儿旅行好)",
      "subtitle": "Complete authentic reading text from Mastering Chinese: Elementary 4 (会通汉语 精编版·初级4 · 文化读本4).",
      "paragraphs": [
        {
          "hanzi": "很多留学生都喜欢旅游，可是中国好玩儿的地方、好看的风景、好吃的东西太多了，他们常常不知道去哪儿旅行好。我跟大家说说自己的体会吧。",
          "pinyin": "Hěn duō liúxuéshēng dōu xǐhuan lǚyóu, kěshì Zhōngguó hǎowánr de dìfang, hǎokàn de fēngjǐng, hǎochī de dōngxi tài duō le, tāmen chángcháng bù zhīdào qù nǎr lǚxíng hǎo. Wǒ gēn dàjiā shuōshuo zìjǐ de tǐhuì ba.",
          "translation": "Many international students love traveling, but because China has so many fun places, beautiful sights, and delicious foods, they often don't know where is best to travel. Let me share my own personal experiences and insights with everyone."
        },
        {
          "hanzi": "中国名山大川多极了，因为中国人觉得有山有水才有灵气。名山大川一般都有自己的历史和故事，风景也很美丽。如果你喜欢山水，可以去泰山、黄山、华山、峨眉山、嵩山、武当山、长江三峡和杭州西湖，去看看日出、奇松、怪石、云海，学学中国功夫，看看可爱的小猴子。",
          "pinyin": "Zhōngguó míngshān-dàchuān duō jí le, yīnwèi Zhōngguórén juéde yǒu shān yǒu shuǐ cái yǒu língqì. Míngshān-dàchuān yìbān dōu yǒu zìjǐ de lìshǐ hé gùshi, fēngjǐng yě hěn měilì. Rúguǒ nǐ xǐhuan shānshuǐ, kěyǐ qù Tài Shān, Huáng Shān, Huà Shān, Éméi Shān, Sōng Shān, Wǔdāng Shān, Chángjiāng Sānxiá hé Hángzhōu Xīhú, qù kànkan rìchū, qísōng, guàishí, yúnhǎi, xuéxue Zhōngguó gōngfu, kànkan kě'ài de xiǎo hóuzi.",
          "translation": "China has an extraordinary number of famous mountains and great rivers, because Chinese people believe that only where there are mountains and water is there spiritual vitality. Famous mountains and great rivers generally have their own history and stories, and their scenery is also very beautiful. If you like mountains and water, you can go to Mount Tai, Mount Huangshan, Mount Hua, Mount Emei, Mount Song, the Wudang Mountains, the Three Gorges of the Yangtze River, and West Lake in Hangzhou—to see the sunrise, wondrous pines, grotesque rocks, and sea of clouds, learn a bit of Chinese kung fu, and see the cute little monkeys."
        },
        {
          "hanzi": "除了名山大川，中国还有很多历史古迹，比如长城、故宫、孔庙、兵马俑、苏州园林。这些古迹常常在城市里或者离城市很近，自己去很方便，顺便可以尝尝这些地方的小吃，听说都好吃极了。",
          "pinyin": "Chúle míngshān-dàchuān, Zhōngguó hái yǒu hěn duō lìshǐ gǔjì, bǐrú Chángchéng, Gùgōng, Kǒngmiào, Bīngmǎyǒng, Sūzhōu Yuánlín. Zhèxiē gǔjì chángcháng zài chéngshì lǐ huòzhě lí chéngshì hěn jìn, zìjǐ qù hěn fāngbiàn, shùnbiàn kěyǐ chángchang zhèxiē dìfang de xiǎochī, tīngshuō dōu hǎochī jí le.",
          "translation": "Besides famous mountains and great rivers, China also has many historical sites, such as the Great Wall, the Forbidden City, the Temple of Confucius, the Terracotta Warriors, and the Classical Gardens of Suzhou. These historical sites are often located inside cities or very close to cities, making it very convenient to visit on your own, and along the way you can sample the local snacks of these places—I hear they are all extremely delicious."
        },
        {
          "hanzi": "如果你觉得自己汉语还不太好，也没有太多的时间和钱，不敢去很远的地方，你还可以试试“农家乐”。这种旅游最近在中国很流行，很多中国人周末的时候都会去城市附近的农村放松放松，过几天农村生活。",
          "pinyin": "Rúguǒ nǐ juéde zìjǐ Hànyǔ hái bú tài hǎo, yě méiyǒu tài duō de shíjiān hé qián, bù gǎn qù hěn yuǎn de dìfang, nǐ hái kěyǐ shìshi “nóngjiālè”. Zhè zhǒng lǚyóu zuìjìn zài Zhōngguó hěn liúxíng, hěn duō Zhōngguórén zhōumò de shíhou dōu huì qù chéngshì fùjìn de nóngcūn fàngsōng fàngsōng, guò jǐ tiān nóngcūn shēnghuó.",
          "translation": "If you feel that your Chinese is still not very good, and you don't have too much time or money and don't dare go to very distant places, you can also try 'Nongjiale' (rural farmhouse tourism). This type of travel has been very popular in China recently; on weekends, many Chinese people go to the countryside near the city to relax and spend a few days living a rural life."
        }
      ]
    },
    "vocabularyExplanation": [
      {
        "hanzi": "体会",
        "pinyin": "tǐhuì",
        "english": "personal experience; insight; understanding learned from experience",
        "partOfSpeech": "名/动 (noun/verb)",
        "exampleHanzi": "我跟大家说说自己的体会吧。",
        "examplePinyin": "Wǒ gēn dàjiā shuōshuo zìjǐ de tǐhuì ba.",
        "exampleTranslation": "Let me share my own personal insights with everyone."
      },
      {
        "hanzi": "名山大川",
        "pinyin": "míngshān-dàchuān",
        "english": "famous mountains and great rivers",
        "partOfSpeech": "成语 (four-character idiom)",
        "exampleHanzi": "中国名山大川多极了，风景也很美丽。",
        "examplePinyin": "Zhōngguó míngshān-dàchuān duō jí le, fēngjǐng yě hěn měilì.",
        "exampleTranslation": "China has an extreme number of famous mountains and great rivers, and the scenery is very beautiful."
      },
      {
        "hanzi": "灵气",
        "pinyin": "língqì",
        "english": "spiritual energy / vitality (of mountains and waters); intelligence",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "中国人觉得有山有水才有灵气。",
        "examplePinyin": "Zhōngguórén juéde yǒu shān yǒu shuǐ cái yǒu língqì.",
        "exampleTranslation": "Chinese people believe that only where there are mountains and water is there spiritual vitality."
      },
      {
        "hanzi": "历史",
        "pinyin": "lìshǐ",
        "english": "history",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "名山大川一般都有自己的历史和故事。",
        "examplePinyin": "Míngshān-dàchuān yìbān dōu yǒu zìjǐ de lìshǐ hé gùshi.",
        "exampleTranslation": "Famous mountains and great rivers generally have their own history and stories."
      },
      {
        "hanzi": "故事",
        "pinyin": "gùshi",
        "english": "story; tale",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "杭州西湖有很多美丽的历史故事。",
        "examplePinyin": "Hángzhōu Xīhú yǒu hěn duō měilì de lìshǐ gùshi.",
        "exampleTranslation": "West Lake in Hangzhou has many beautiful historical stories."
      },
      {
        "hanzi": "美丽",
        "pinyin": "měilì",
        "english": "beautiful",
        "partOfSpeech": "形 (adj.)",
        "exampleHanzi": "这些地方的风景都很美丽。",
        "examplePinyin": "Zhèxiē dìfang de fēngjǐng dōu hěn měilì.",
        "exampleTranslation": "The scenery of these places is all very beautiful."
      },
      {
        "hanzi": "如果",
        "pinyin": "rúguǒ",
        "english": "if; in case",
        "partOfSpeech": "连 (conj.)",
        "exampleHanzi": "如果你喜欢山水，可以去泰山、黄山和杭州西湖。",
        "examplePinyin": "Rúguǒ nǐ xǐhuan shānshuǐ, kěyǐ qù Tài Shān, Huáng Shān hé Hángzhōu Xīhú.",
        "exampleTranslation": "If you like mountains and water, you can go to Mount Tai, Mount Huangshan, and West Lake in Hangzhou."
      },
      {
        "hanzi": "奇松",
        "pinyin": "qísōng",
        "english": "wondrous / uniquely shaped pine trees (famous on Mount Huangshan)",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "去黄山可以看看日出、奇松、怪石、云海。",
        "examplePinyin": "Qù Huáng Shān kěyǐ kànkan rìchū, qísōng, guàishí, yúnhǎi.",
        "exampleTranslation": "Going to Mount Huangshan, you can see the sunrise, wondrous pines, grotesque rocks, and sea of clouds."
      },
      {
        "hanzi": "怪石",
        "pinyin": "guàishí",
        "english": "grotesque / fantastically shaped rocks",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "黄山的奇松和怪石非常有名。",
        "examplePinyin": "Huáng Shān de qísōng hé guàishí fēicháng yǒumíng.",
        "exampleTranslation": "Mount Huangshan's wondrous pines and grotesque rocks are very famous."
      },
      {
        "hanzi": "功夫",
        "pinyin": "gōngfu",
        "english": "kung fu (Chinese martial arts); skill",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "去嵩山或者武当山可以学学中国功夫。",
        "examplePinyin": "Qù Sōng Shān huòzhě Wǔdāng Shān kěyǐ xuéxue Zhōngguó gōngfu.",
        "exampleTranslation": "Going to Mount Song or the Wudang Mountains, you can learn some Chinese kung fu."
      },
      {
        "hanzi": "猴子",
        "pinyin": "hóuzi",
        "english": "monkey",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "去峨眉山可以看看可爱的小猴子。",
        "examplePinyin": "Qù Éméi Shān kěyǐ kànkan kě'ài de xiǎo hóuzi.",
        "exampleTranslation": "Going to Mount Emei, you can see the cute little monkeys."
      },
      {
        "hanzi": "除了",
        "pinyin": "chúle",
        "english": "besides; in addition to; except for",
        "partOfSpeech": "介 (preposition)",
        "exampleHanzi": "除了名山大川，中国还有很多历史古迹。",
        "examplePinyin": "Chúle míngshān-dàchuān, Zhōngguó hái yǒu hěn duō lìshǐ gǔjì.",
        "exampleTranslation": "Besides famous mountains and great rivers, China also has many historical sites."
      },
      {
        "hanzi": "古迹",
        "pinyin": "gǔjì",
        "english": "historical site; historic monument / relic",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "这些古迹常常在城市里或者离城市很近。",
        "examplePinyin": "Zhèxiē gǔjì chángcháng zài chéngshì lǐ huòzhě lí chéngshì hěn jìn.",
        "exampleTranslation": "These historical sites are often inside cities or very close to cities."
      },
      {
        "hanzi": "顺便",
        "pinyin": "shùnbiàn",
        "english": "conveniently along the way; in passing; while one is at it",
        "partOfSpeech": "副 (adverb)",
        "exampleHanzi": "自己去很方便，顺便可以尝尝这些地方的小吃。",
        "examplePinyin": "Zìjǐ qù hěn fāngbiàn, shùnbiàn kěyǐ chángchang zhèxiē dìfang de xiǎochī.",
        "exampleTranslation": "Going on your own is very convenient, and along the way you can sample the local snacks of these places."
      },
      {
        "hanzi": "敢",
        "pinyin": "gǎn",
        "english": "to dare; to have the courage to",
        "partOfSpeech": "动 (modal verb)",
        "exampleHanzi": "因为汉语还不太好，他不敢一个人去很远的地方。",
        "examplePinyin": "Yīnwèi Hànyǔ hái bú tài hǎo, tā bù gǎn yí ge rén qù hěn yuǎn de dìfang.",
        "exampleTranslation": "Because his Chinese is still not very good, he doesn't dare go to very distant places alone."
      },
      {
        "hanzi": "农家乐",
        "pinyin": "nóngjiālè",
        "english": "rural farmhouse tourism / country homestay recreation",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "你还可以试试“农家乐”，去城市附近的农村放松放松。",
        "examplePinyin": "Nǐ hái kěyǐ shìshi “nóngjiālè”, qù chéngshì fùjìn de nóngcūn fàngsōng fàngsōng.",
        "exampleTranslation": "You can also try 'Nongjiale' and go to the countryside near the city to relax."
      },
      {
        "hanzi": "流行",
        "pinyin": "liúxíng",
        "english": "popular; fashionable; prevalent",
        "partOfSpeech": "形/动 (adj./verb)",
        "exampleHanzi": "这种旅游最近在中国很流行。",
        "examplePinyin": "Zhè zhǒng lǚyóu zuìjìn zài Zhōngguó hěn liúxíng.",
        "exampleTranslation": "This kind of travel has been very popular in China recently."
      },
      {
        "hanzi": "农村",
        "pinyin": "nóngcūn",
        "english": "countryside; rural area; village",
        "partOfSpeech": "名 (noun)",
        "exampleHanzi": "很多中国人周末都会去城市附近的农村过几天农村生活。",
        "examplePinyin": "Hěn duō Zhōngguórén zhōumò dōu huì qù chéngshì fùjìn de nóngcūn guò jǐ tiān nóngcūn shēnghuó.",
        "exampleTranslation": "Many Chinese people go to the countryside near the city on weekends to spend a few days living a rural life."
      },
      {
        "hanzi": "放松",
        "pinyin": "fàngsōng",
        "english": "to relax; to unwind",
        "partOfSpeech": "动 (verb)",
        "exampleHanzi": "周末去农村放松放松，身体和心情都会很好。",
        "examplePinyin": "Zhōumò qù nóngcūn fàngsōng fàngsōng, shēntǐ hé xīnqíng dōu huì hěn hǎo.",
        "exampleTranslation": "Going to the countryside to relax on the weekend is great for both your body and mood."
      }
    ],
    "grammarPoint": "Necessary Conditions ('有……才……'), Additive Scope ('除了……，还……'), and '顺便 + V'",
    "structure": "有 + Condition + 才 + Result  |  除了 + A (以外)，Subject + 还 / 也 + B  |  顺便 + Verb",
    "explanation": "Cultural Reader 4 highlights three high-frequency HSK 4 discourse structures: (1) '有……才……' ('only when there is... is there...'), expressing a necessary condition; (2) '除了……，还……' ('besides / in addition to A, also B'), expanding a topic from natural landscapes to historical monuments; and (3) the adverb '顺便 (shùnbiàn)' ('conveniently along the way / while at it') paired with '如果……，(还)可以……' to offer practical travel suggestions.",
    "examples": [
      {
        "hanzi": "中国名山大川多极了，因为中国人觉得有山有水才有灵气。",
        "pinyin": "Zhōngguó míngshān-dàchuān duō jí le, yīnwèi Zhōngguórén juéde yǒu shān yǒu shuǐ cái yǒu língqì.",
        "translation": "China has an extreme number of famous mountains and great rivers, because Chinese people believe that only where there are mountains and water is there spiritual vitality."
      },
      {
        "hanzi": "除了名山大川，中国还有很多历史古迹，比如长城、故宫、孔庙、兵马俑、苏州园林。",
        "pinyin": "Chúle míngshān-dàchuān, Zhōngguó hái yǒu hěn duō lìshǐ gǔjì, bǐrú Chángchéng, Gùgōng, Kǒngmiào, Bīngmǎyǒng, Sūzhōu Yuánlín.",
        "translation": "Besides famous mountains and great rivers, China also has many historical sites, such as the Great Wall, the Forbidden City, the Temple of Confucius, the Terracotta Warriors, and the Classical Gardens of Suzhou."
      },
      {
        "hanzi": "这些古迹离城市很近，自己去很方便，顺便可以尝尝这些地方的小吃。",
        "pinyin": "Zhèxiē gǔjì lí chéngshì hěn jìn, zìjǐ qù hěn fāngbiàn, shùnbiàn kěyǐ chángchang zhèxiē dìfang de xiǎochī.",
        "translation": "These historical sites are close to cities, making it convenient to go on your own, and along the way you can sample the local snacks of these places."
      }
    ],
    "grammarNotes": [
      {
        "title": "1. Necessary Condition with '(因为……) 有 / 只有……才……'",
        "structure": "(只有) / 有 + Condition + 才 + Result",
        "explanation": "The adverb '才 (cái)' placed before a verb or '有' indicates that the preceding condition is essential before the result can happen ('only if / only when...'). In '有山有水才有灵气', having both mountains and water is the necessary condition for a landscape to possess spiritual vitality.",
        "tip": "Contrast 才 (necessary condition or later than expected) with 就 (sufficient condition or early/fast).",
        "examples": [
          {
            "hanzi": "中国人觉得有山有水才有灵气。",
            "pinyin": "Zhōngguórén juéde yǒu shān yǒu shuǐ cái yǒu língqì.",
            "translation": "Chinese people believe that only when there are both mountains and water is there spiritual vitality."
          },
          {
            "hanzi": "只有早睡早起、多运动，才能有一个健康的身体。",
            "pinyin": "Zhǐyǒu zǎoshuì-zǎoqǐ, duō yùndòng, cái néng yǒu yí ge jiànkāng de shēntǐ.",
            "translation": "Only by going to bed early, rising early, and exercising more can you have a healthy body."
          }
        ]
      },
      {
        "title": "2. Additive Scope with '除了……(以外)，还 / 也……' & Listing Examples with '比如'",
        "structure": "除了 + Category A (以外)，Subject + 还 / 也 + Verb + Category B，比如 + Examples",
        "explanation": "When '除了 (chúle)' is paired with '还 (hái)' or '也 (yě)' in the main clause, it is inclusive ('in addition to A, there is also B'). Follow the statement with '比如 (bǐrú, for example / such as)' to list representative examples.",
        "tip": "除了……还…… includes A and adds B; 除了……都…… excludes A.",
        "examples": [
          {
            "hanzi": "除了名山大川，中国还有很多历史古迹，比如长城、故宫、孔庙、兵马俑、苏州园林。",
            "pinyin": "Chúle míngshān-dàchuān, Zhōngguó hái yǒu hěn duō lìshǐ gǔjì, bǐrú Chángchéng, Gùgōng, Kǒngmiào, Bīngmǎyǒng, Sūzhōu Yuánlín.",
            "translation": "Besides famous mountains and great rivers, China also has many historical sites, such as the Great Wall, the Forbidden City, the Temple of Confucius, the Terracotta Warriors, and the Classical Gardens of Suzhou."
          }
        ]
      },
      {
        "title": "3. Conditional Recommendations '如果……，(还)可以……' & Doing Something Along the Way '顺便 + V'",
        "structure": "如果 + Condition，(Subject) + 可以 / 还可以 + Action  |  顺便 (+ 可以) + Verb Phrase",
        "explanation": "'如果……，可以 / 还可以……' tailors recommendations to different listener situations (whether someone loves nature or has limited time and budget). The adverb '顺便 (shùnbiàn)' means doing a secondary action conveniently as part of the same trip without extra effort.",
        "tip": "Place 顺便 before the modal verb or main verb: 顺便可以尝尝小吃 / 你出去寄包裹的时候，顺便帮我取一下外卖吧。",
        "examples": [
          {
            "hanzi": "这些古迹常常在城市里或者离城市很近，自己去很方便，顺便可以尝尝这些地方的小吃。",
            "pinyin": "Zhèxiē gǔjì chángcháng zài chéngshì lǐ huòzhě lí chéngshì hěn jìn, zìjǐ qù hěn fāngbiàn, shùnbiàn kěyǐ chángchang zhèxiē dìfang de xiǎochī.",
            "translation": "These historical sites are often in or near cities, so going on your own is very convenient, and along the way you can sample the local snacks."
          },
          {
            "hanzi": "如果你觉得自己汉语还不太好，也没有太多的时间和钱，不敢去很远的地方，你还可以试试“农家乐”。",
            "pinyin": "Rúguǒ nǐ juéde zìjǐ Hànyǔ hái bú tài hǎo, yě méiyǒu tài duō de shíjiān hé qián, bù gǎn qù hěn yuǎn de dìfang, nǐ hái kěyǐ shìshi “nóngjiālè”.",
            "translation": "If you feel your Chinese is still not very good, and you don't have much time or money and don't dare go far, you can also try 'Nongjiale'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "question": "According to Cultural Reader 4, why do Chinese people love '名山大川' (famous mountains and great rivers)?",
        "promptHanzi": "中国名山大川多极了，因为中国人觉得有山有水才有灵气。名山大川一般都有自己的历史和故事，风景也很美丽。",
        "promptPinyin": "Zhōngguó míngshān-dàchuān duō jí le, yīnwèi Zhōngguórén juéde yǒu shān yǒu shuǐ cái yǒu língqì. Míngshān-dàchuān yìbān dōu yǒu zìjǐ de lìshǐ hé gùshi, fēngjǐng yě hěn měilì.",
        "options": [
          "Because Chinese people believe that only where there are mountains and water is there spiritual vitality (有山有水才有灵气), and they have rich history, stories, and beautiful scenery.",
          "Because all famous mountains are located inside city shopping malls.",
          "Because international students are not allowed to visit historical sites.",
          "Because mountains and rivers have no history or stories."
        ],
        "answerIndex": 0,
        "explanation": "Paragraph 2 states: “因为中国人觉得有山有水才有灵气。名山大川一般都有自己的历史和故事，风景也很美丽。”"
      },
      {
        "question": "Which group of attractions is specifically mentioned in the text as sights and experiences you can enjoy when visiting famous mountains and rivers (泰山、黄山、峨眉山、嵩山、武当山等)?",
        "options": [
          "Watching the sunrise (日出), wondrous pines (奇松), grotesque rocks (怪石), and sea of clouds (云海), learning Chinese kung fu (中国功夫), and seeing cute monkeys (可爱的小猴子).",
          "Visiting the Terracotta Warriors and Forbidden City inside a supermarket.",
          "Exchanging US dollars into RMB and mailing a 10-kg parcel.",
          "Buying hard-seat tickets to Ottawa in winter."
        ],
        "answerIndex": 0,
        "explanation": "Paragraph 2 lists: “去看看日出、奇松、怪石、云海，学学中国功夫，看看可爱的小猴子。”"
      },
      {
        "question": "Which five historical sites (历史古迹) are given as examples in Paragraph 3, and what can travelers conveniently do along the way (顺便)?",
        "options": [
          "Great Wall (长城), Forbidden City (故宫), Temple of Confucius (孔庙), Terracotta Warriors (兵马俑), and Classical Gardens of Suzhou (苏州园林); sample delicious local snacks along the way (顺便尝尝这些地方的小吃).",
          "Mount Tai, Mount Huangshan, Mount Hua, Mount Emei, and Mount Song; go skiing.",
          "Harbin, Sanya, Ottawa, Tokyo, and London; open a bank card.",
          "Hospital, post office, bank, supermarket, and KTV."
        ],
        "answerIndex": 0,
        "explanation": "Paragraph 3 states: “除了名山大川，中国还有很多历史古迹，比如长城、故宫、孔庙、兵马俑、苏州园林。这些古迹常常在城市里或者离城市很近，自己去很方便，顺便可以尝尝这些地方的小吃，听说都好吃极了。”"
      },
      {
        "question": "What does the author recommend for an international student whose Chinese isn't very fluent yet and who doesn't have much time or money to travel far?",
        "options": [
          "Try '农家乐' (rural farmhouse tourism) in the countryside near the city (城市附近的农村) to relax and experience rural life for a few days.",
          "Book a 'ten-star hotel' (十星级酒店) in Sanya during the Spring Festival.",
          "Stay up all night playing mobile games in the dormitory.",
          "Never leave the dormitory on weekends."
        ],
        "answerIndex": 0,
        "explanation": "Paragraph 4 concludes: “如果你觉得自己汉语还不太好，也没有太多的时间和钱，不敢去很远的地方，你还可以试试‘农家乐’……去城市附近的农村放松放松，过几天农村生活。”"
      }
    ]
  }
];

