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
];