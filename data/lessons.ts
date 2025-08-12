export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  hskLevel: 1 | 2 | 3 | 4 | 5 | 6;
  dialogue: Array<{
    character: string;
    hanzi: string;
    pinyin: string;
    translation: string;
  }>;
  vocabularyExplanation: Array<{
    hanzi: string;
    pinyin: string;
    english: string;
  }>;
  grammarPoint: string;
  structure: string;
  explanation: string;
  examples: Array<{
    hanzi: string;
    pinyin: string;
    translation: string;
  }>;
}

export const lessons: Lesson[] = [
  {
    id: 'lesson1',
    title: 'Lesson 1: Greetings and Introductions (问候和介绍)',
    description: 'Learn how to greet people, introduce yourself, and respond to introductions in Mandarin.',
    content: 'This lesson covers the fundamental phrases for meeting people for the first time. You will learn how to say hello, ask for a name, and express that you are pleased to meet someone.',
    dialogue: [
      { character: 'A', hanzi: '你好！', pinyin: 'nǐ hǎo!', translation: 'Hello!' },
      { character: 'B', hanzi: '你好！', pinyin: 'nǐ hǎo!', translation: 'Hello!' },
      { character: 'A', hanzi: '我叫李明。你叫什么名字？', pinyin: 'wǒ jiào lǐ míng. nǐ jiào shén me míng zi?', translation: 'I am called Li Ming. What is your name?' },
      { character: 'B', hanzi: '我叫王伟。很高兴认识你。', pinyin: 'wǒ jiào wáng wěi. hěn gāo xìng rèn shi nǐ.', translation: 'I am called Wang Wei. Very happy to meet you.' },
      { character: 'A', hanzi: '我也很高兴认识你。', pinyin: 'wǒ yě hěn gāo xìng rèn shi nǐ.', translation: 'I am also very happy to meet you.' }
    ],
    vocabularyExplanation: [
      { hanzi: '你', pinyin: 'nǐ', english: 'you' },
      { hanzi: '好', pinyin: 'hǎo', english: 'good, well' },
      { hanzi: '我', pinyin: 'wǒ', english: 'I, me' },
      { hanzi: '叫', pinyin: 'jiào', english: 'to be called, to call' },
      { hanzi: '什么', pinyin: 'shén me', english: 'what' },
      { hanzi: '名字', pinyin: 'míng zi', english: 'name' },
      { hanzi: '很', pinyin: 'hěn', english: 'very' },
      { hanzi: '高兴', pinyin: 'gāo xìng', english: 'happy, pleased' },
      { hanzi: '认识', pinyin: 'rèn shi', english: 'to know, to meet' },
      { hanzi: '也', pinyin: 'yě', english: 'also, too' }
    ],
    grammarPoint: 'Asking a Name: ...叫什么名字？ (...jiào shén me míng zi?)',
    structure: 'Subject + 叫 (jiào) + 什么 (shén me) + 名字 (míng zi)?',
    explanation: 'This is the most common way to ask for a name. It literally translates to "You are called what name?". The subject can be changed to ask about other people.',
    examples: [
      { hanzi: '他叫什么名字？', pinyin: 'tā jiào shén me míng zi?', translation: 'What is his name?' },
      { hanzi: '你的老师叫什么名字？', pinyin: 'nǐ de lǎo shī jiào shén me míng zi?', translation: "What is your teacher's name?" }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson2',
    title: 'Lesson 2: Talking About Family (谈论家庭)',
    description: 'Learn essential vocabulary for family members and how to ask about the size of a family.',
    content: 'In this lesson, you will learn to identify your dad and mom, use the possessive particle "的" (de), and ask how many people are in someone\'s family.',
    dialogue: [
      { character: 'A', hanzi: '这是你的照片吗？', pinyin: 'zhè shì nǐ de zhào piàn ma?', translation: 'Is this your photo?' },
      { character: 'B', hanzi: '是。这是我爸爸，这是我妈妈。', pinyin: 'shì. zhè shì wǒ bà ba, zhè shì wǒ mā ma.', translation: 'Yes. This is my dad, this is my mom.' },
      { character: 'A', hanzi: '你家有几个人？', pinyin: 'nǐ jiā yǒu jǐ kǒu rén?', translation: 'How many people are in your family?' },
      { character: 'B', hanzi: '我家有三个人：爸爸、妈妈和我。', pinyin: 'wǒ jiā yǒu sān kǒu rén: bà ba, mā ma hé wǒ.', translation: 'There are three people in my family: dad, mom, and me.' }
    ],
    vocabularyExplanation: [
      { hanzi: '这', pinyin: 'zhè', english: 'this' },
      { hanzi: '是', pinyin: 'shì', english: 'to be (am, is, are)' },
      { hanzi: '的', pinyin: 'de', english: 'a possessive particle' },
      { hanzi: '照片', pinyin: 'zhào piàn', english: 'photo, picture' },
      { hanzi: '吗', pinyin: 'ma', english: 'yes/no question particle' },
      { hanzi: '爸爸', pinyin: 'bà ba', english: 'dad' },
      { hanzi: '妈妈', pinyin: 'mā ma', english: 'mom' },
      { hanzi: '家', pinyin: 'jiā', english: 'family, home' },
      { hanzi: '有', pinyin: 'yǒu', english: 'to have, there is/are' },
      { hanzi: '几', pinyin: 'jǐ', english: 'how many (for small numbers)' },
      { hanzi: '口', pinyin: 'kǒu', english: 'measure word for family members' },
      { hanzi: '人', pinyin: 'rén', english: 'person, people' },
      { hanzi: '和', pinyin: 'hé', english: 'and' }
    ],
    grammarPoint: 'The Possessive Particle 的 (de)',
    structure: 'Noun/Pronoun + 的 (de) + Noun',
    explanation: 'The particle "的 (de)" indicates possession, similar to "\'s" in English. The "owner" always comes before "的 (de)". For close relationships like immediate family, "的 (de)" can often be omitted (e.g., 我妈妈 instead of 我的妈妈).',
    examples: [
      { hanzi: '这是我的书。', pinyin: 'zhè shì wǒ de shū.', translation: 'This is my book.' },
      { hanzi: '他的猫很可爱。', pinyin: 'tā de māo hěn kě ài.', translation: 'His cat is very cute.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson3',
    title: 'Lesson 3: Numbers and Age (数字和年龄)',
    description: 'Learn how to count and ask for a young person\'s age.',
    content: 'This lesson introduces basic numbers and the common question structure for asking a child\'s age. You will also learn how to give compliments and say thank you.',
    dialogue: [
      { character: 'A', hanzi: '你好，你女儿很漂亮！', pinyin: 'nǐ hǎo, nǐ nǚ\'ér hěn piào liang!', translation: 'Hello, your daughter is very beautiful!' },
      { character: 'B', hanzi: '谢谢！', pinyin: 'xiè xie!', translation: 'Thank you!' },
      { character: 'A', hanzi: '她几岁了？', pinyin: 'tā jǐ suì le?', translation: 'How old is she?' },
      { character: 'B', hanzi: '她今年五岁了。', pinyin: 'tā jīn nián wǔ suì le.', translation: 'She is five years old this year.' }
    ],
    vocabularyExplanation: [
      { hanzi: '女儿', pinyin: 'nǚ\'ér', english: 'daughter' },
      { hanzi: '漂亮', pinyin: 'piào liang', english: 'beautiful' },
      { hanzi: '谢谢', pinyin: 'xiè xie', english: 'thank you' },
      { hanzi: '她', pinyin: 'tā', english: 'she, her' },
      { hanzi: '几', pinyin: 'jǐ', english: 'how many' },
      { hanzi: '岁', pinyin: 'suì', english: 'year (of age)' },
      { hanzi: '了', pinyin: 'le', english: 'modal particle' },
      { hanzi: '今年', pinyin: 'jīn nián', english: 'this year' },
      { hanzi: '五', pinyin: 'wǔ', english: 'five' }
    ],
    grammarPoint: 'Asking Age with 几岁 (jǐ suì)',
    structure: 'Subject + 几 (jǐ) + 岁 (suì) + 了 (le)?',
    explanation: 'This question structure is used to ask the age of young children, typically under 10. To answer, simply replace the question word "几 (jǐ)" with the number.',
    examples: [
      { hanzi: '你儿子几岁了？', pinyin: 'nǐ ér zi jǐ suì le?', translation: 'How old is your son?' },
      { hanzi: '他七岁了。', pinyin: 'tā qī suì le.', translation: 'He is seven years old.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson4',
    title: 'Lesson 4: Likes and Dislikes (喜好)',
    description: 'Learn how to express what you like and dislike, focusing on food and drinks.',
    content: 'This lesson teaches the verb "喜欢" (xǐhuān) for "to like" and its negation "不喜欢" (bù xǐhuān). You will practice with common words for drinks and food.',
    dialogue: [
      { character: 'A', hanzi: '你喜欢喝茶吗？', pinyin: 'nǐ xǐ huān hē chá ma?', translation: 'Do you like to drink tea?' },
      { character: 'B', hanzi: '我不喜欢喝茶。我喜欢喝水。', pinyin: 'wǒ bù xǐ huān hē chá. wǒ xǐ huān hē shuǐ.', translation: 'I don\'t like to drink tea. I like to drink water.' },
      { character: 'A', hanzi: '你想吃米饭吗？', pinyin: 'nǐ xiǎng chī mǐ fàn ma?', translation: 'Do you want to eat rice?' },
      { character: 'B', hanzi: '想，谢谢。', pinyin: 'xiǎng, xiè xie.', translation: 'Yes, I do. Thank you.' }
    ],
    vocabularyExplanation: [
      { hanzi: '喜欢', pinyin: 'xǐ huān', english: 'to like' },
      { hanzi: '喝', pinyin: 'hē', english: 'to drink' },
      { hanzi: '茶', pinyin: 'chá', english: 'tea' },
      { hanzi: '不', pinyin: 'bù', english: 'not, no' },
      { hanzi: '水', pinyin: 'shuǐ', english: 'water' },
      { hanzi: '想', pinyin: 'xiǎng', english: 'to want, to think' },
      { hanzi: '吃', pinyin: 'chī', english: 'to eat' },
      { hanzi: '米饭', pinyin: 'mǐ fàn', english: 'cooked rice' }
    ],
    grammarPoint: 'Negation with 不 (bù)',
    structure: 'Subject + 不 (bù) + Verb/Adjective',
    explanation: 'The word "不 (bù)" is the most common adverb used to negate a verb or adjective. It is placed directly before the word it modifies. Note that its tone changes to "bú" (2nd tone) when it comes before a 4th tone syllable, like in "不是" (bú shì).',
    examples: [
      { hanzi: '我不是学生。', pinyin: 'wǒ bú shì xué sheng.', translation: 'I am not a student.' },
      { hanzi: '今天天气不好。', pinyin: 'jīn tiān tiān qì bù hǎo.', translation: 'The weather is not good today.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson5',
    title: 'Lesson 5: Location (位置)',
    description: 'Learn to ask and answer questions about where people and things are located.',
    content: 'This lesson focuses on the verb "在" (zài), which is essential for talking about location. You will learn to ask "where" using "哪儿" (nǎr) and describe locations like school, home, and on the table.',
    dialogue: [
      { character: 'A', hanzi: '喂？你在哪儿？', pinyin: 'wéi? nǐ zài nǎr?', translation: 'Hello? Where are you?' },
      { character: 'B', hanzi: '我在学校。', pinyin: 'wǒ zài xué xiào.', translation: 'I am at school.' },
      { character: 'A', hanzi: '你的汉语书在哪儿？', pinyin: 'nǐ de hàn yǔ shū zài nǎr?', translation: 'Where is your Chinese book?' },
      { character: 'B', hanzi: '在桌子上。', pinyin: 'zài zhuō zi shàng.', translation: 'It\'s on the table.' }
    ],
    vocabularyExplanation: [
      { hanzi: '喂', pinyin: 'wéi', english: 'hello (on the phone)' },
      { hanzi: '在', pinyin: 'zài', english: 'to be at, in, on' },
      { hanzi: '哪儿', pinyin: 'nǎr', english: 'where' },
      { hanzi: '学校', pinyin: 'xué xiào', english: 'school' },
      { hanzi: '汉语', pinyin: 'hàn yǔ', english: 'Chinese language' },
      { hanzi: '书', pinyin: 'shū', english: 'book' },
      { hanzi: '桌子', pinyin: 'zhuō zi', english: 'table, desk' },
      { hanzi: '上', pinyin: 'shàng', english: 'on, above, up' }
    ],
    grammarPoint: 'Using 在 (zài) for Location',
    structure: '1. As a verb: Subject + 在 + Location. | 2. As a preposition: Subject + 在 + Location + Verb.',
    explanation: '在 (zài) can act as a main verb meaning "to be at a location". It can also act as a preposition to state where an action takes place. To ask where, you use the question word 哪儿 (nǎr).',
    examples: [
      { hanzi: '我妈妈在家。', pinyin: 'wǒ mā ma zài jiā.', translation: 'My mom is at home. (在 as a verb)' },
      { hanzi: '我在家吃饭。', pinyin: 'wǒ zài jiā chī fàn.', translation: 'I eat at home. (在 as a preposition)' },
      { hanzi: '你的杯子在哪儿？', pinyin: 'nǐ de bēi zi zài nǎr?', translation: 'Where is your cup?' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson6',
    title: 'Lesson 6: Shopping and Money (买东西和钱)',
    description: 'Learn how to ask for prices and buy things in a store.',
    content: 'This lesson introduces key phrases for shopping, such as asking "how much is it?", understanding prices, and expressing that something is too expensive.',
    dialogue: [
      { character: 'A', hanzi: '你好，这个杯子多少钱？', pinyin: 'nǐ hǎo, zhè ge bēi zi duō shao qián?', translation: 'Hello, how much is this cup?' },
      { character: 'B', hanzi: '这个十八块钱。', pinyin: 'zhè ge shí bā kuài qián.', translation: 'This one is eighteen yuan.' },
      { character: 'A', hanzi: '太贵了。那个呢？', pinyin: 'tài guì le. nà ge ne?', translation: 'That\'s too expensive. What about that one?' },
      { character: 'B', hanzi: '那个十二块。', pinyin: 'nà ge shí èr kuài.', translation: 'That one is twelve yuan.' },
      { character: 'A', hanzi: '好的，我买那个。', pinyin: 'hǎo de, wǒ mǎi nà ge.', translation: 'Okay, I\'ll buy that one.' }
    ],
    vocabularyExplanation: [
      { hanzi: '这个 (zhè ge)', pinyin: 'zhè ge', english: 'this one' },
      { hanzi: '杯子 (bēi zi)', pinyin: 'bēi zi', english: 'cup, glass' },
      { hanzi: '多少钱 (duō shao qián)', pinyin: 'duō shao qián', english: 'how much money?' },
      { hanzi: '块 (kuài)', pinyin: 'kuài', english: 'a colloquial measure word for money (like "buck")' },
      { hanzi: '太...了 (tài...le)', pinyin: 'tài...le', english: 'too; excessively' },
      { hanzi: '贵 (guì)', pinyin: 'guì', english: 'expensive' },
      { hanzi: '那个 (nà ge)', pinyin: 'nà ge', english: 'that one' },
      { hanzi: '买 (mǎi)', pinyin: 'mǎi', english: 'to buy' }
    ],
    grammarPoint: 'Asking "How much/many" with 多少 (duō shao)',
    structure: 'Subject + 多少 (duō shao) + (Measure Word) + Noun?',
    explanation: '多少 (duō shao) is a question word used to ask about quantity, usually when the expected number is over 10. For prices, the set phrase is "多少钱 (duō shao qián)?". Unlike "几 (jǐ)", you don\'t strictly need a measure word after 多少, but it can be used.',
    examples: [
      { hanzi: '你们学校有多少个老师？', pinyin: 'nǐ men xué xiào yǒu duō shao ge lǎo shī?', translation: 'How many teachers does your school have?' },
      { hanzi: '这件衣服多少钱？', pinyin: 'zhè jiàn yī fu duō shao qián?', translation: 'How much are these clothes?' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson7',
    title: 'Lesson 7: Talking About the Weather (谈论天气)',
    description: 'Learn to ask about and describe basic weather conditions.',
    content: 'In this lesson, you will learn how to ask "How is the weather?", and describe conditions like hot, cold, and raining. This is a very common topic in daily conversation.',
    dialogue: [
      { character: 'A', hanzi: '今天天气怎么样？', pinyin: 'jīn tiān tiān qì zěn me yàng?', translation: 'How is the weather today?' },
      { character: 'B', hanzi: '今天很冷，下雨了。', pinyin: 'jīn tiān hěn lěng, xià yǔ le.', translation: 'It\'s very cold today, and it\'s raining.' },
      { character: 'A', hanzi: '明天呢？', pinyin: 'míng tiān ne?', translation: 'What about tomorrow?' },
      { character: 'B', hanzi: '明天天气很好，不冷也不热。', pinyin: 'míng tiān tiān qì hěn hǎo, bù lěng yě bù rè.', translation: 'The weather will be very good tomorrow, not cold and not hot.' }
    ],
    vocabularyExplanation: [
      { hanzi: '今天 (jīn tiān)', pinyin: 'jīn tiān', english: 'today' },
      { hanzi: '天气 (tiān qì)', pinyin: 'tiān qì', english: 'weather' },
      { hanzi: '怎么样 (zěn me yàng)', pinyin: 'zěn me yàng', english: 'how is it?' },
      { hanzi: '冷 (lěng)', pinyin: 'lěng', english: 'cold' },
      { hanzi: '下雨 (xià yǔ)', pinyin: 'xià yǔ', english: 'to rain' },
      { hanzi: '明天 (míng tiān)', pinyin: 'míng tiān', english: 'tomorrow' },
      { hanzi: '热 (rè)', pinyin: 'rè', english: 'hot' }
    ],
    grammarPoint: 'Asking for Opinion/Condition with 怎么样 (zěn me yàng)',
    structure: 'Subject + 怎么样 (zěn me yàng)?',
    explanation: '怎么样 (zěn me yàng) is used at the end of a sentence to ask for someone\'s opinion or to ask about the condition of something. It is a very versatile and common question phrase.',
    examples: [
      { hanzi: '这道菜怎么样？', pinyin: 'zhè dào cài zěn me yàng?', translation: 'How is this dish?' },
      { hanzi: '你的中文怎么样？', pinyin: 'nǐ de zhōng wén zěn me yàng?', translation: 'How is your Chinese?' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson8',
    title: 'Lesson 8: Asking About Time (询问时间)',
    description: 'Learn how to ask for the current time and ask when something will happen.',
    content: 'This lesson covers the essentials of time. You will learn how to ask "What time is it?" using "现在几点？" and how to ask "when?" using "什么时候?".',
    dialogue: [
      { character: 'A', hanzi: '请问，现在几点了？', pinyin: 'qǐng wèn, xiàn zài jǐ diǎn le?', translation: 'Excuse me, what time is it now?' },
      { character: 'B', hanzi: '现在上午十点。', pinyin: 'xiàn zài shàng wǔ shí diǎn.', translation: 'It is 10 AM now.' },
      { character: 'A', hanzi: '你什么时候去学校？', pinyin: 'nǐ shén me shí hou qù xué xiào?', translation: 'When are you going to school?' },
      { character: 'B', hanzi: '我下午一点去。', pinyin: 'wǒ xià wǔ yī diǎn qù.', translation: 'I am going at 1 PM.' }
    ],
    vocabularyExplanation: [
      { hanzi: '请问 (qǐng wèn)', pinyin: 'qǐng wèn', english: 'excuse me, may I ask...' },
      { hanzi: '现在 (xiàn zài)', pinyin: 'xiàn zài', english: 'now' },
      { hanzi: '点 (diǎn)', pinyin: 'diǎn', english: 'o\'clock (measure word for time)' },
      { hanzi: '上午 (shàng wǔ)', pinyin: 'shàng wǔ', english: 'morning (before noon)' },
      { hanzi: '什么时候 (shén me shí hou)', pinyin: 'shén me shí hou', english: 'when, what time' },
      { hanzi: '去 (qù)', pinyin: 'qù', english: 'to go' },
      { hanzi: '下午 (xià wǔ)', pinyin: 'xià wǔ', english: 'afternoon' }
    ],
    grammarPoint: 'Asking "When?" with 什么时候 (shén me shí hou)',
    structure: 'Subject + 什么时候 (shén me shí hou) + Verb?',
    explanation: 'The phrase 什么时候 (shén me shí hou) is used to ask "when" an action will take place. It can be placed either before or after the subject, but it is most commonly placed after.',
    examples: [
      { hanzi: '你什么时候回家？', pinyin: 'nǐ shén me shí hou huí jiā?', translation: 'When are you coming home?' },
      { hanzi: '电影什么时候开始？', pinyin: 'diàn yǐng shén me shí hou kāi shǐ?', translation: 'When does the movie start?' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson9',
    title: 'Lesson 9: Abilities and Skills (能力和技能)',
    description: 'Learn how to talk about what you can and cannot do using the modal verb "会" (huì).',
    content: 'In this lesson, you will learn to express learned skills, such as speaking a language, cooking, or driving, by using "会" (huì) for "can" and "不会" (bú huì) for "cannot".',
    dialogue: [
      { character: 'A', hanzi: '你会说汉语吗？', pinyin: 'nǐ huì shuō hàn yǔ ma?', translation: 'Can you speak Chinese?' },
      { character: 'B', hanzi: '我会说一点儿。你呢？', pinyin: 'wǒ huì shuō yī diǎnr. nǐ ne?', translation: 'I can speak a little. And you?' },
      { character: 'A', hanzi: '我不会说，但我会写汉字。', pinyin: 'wǒ bú huì shuō, dàn wǒ huì xiě hàn zì.', translation: 'I can\'t speak, but I can write Chinese characters.' },
      { character: 'B', hanzi: '你太厉害了！', pinyin: 'nǐ tài lì hai le!', translation: 'You are so awesome!' }
    ],
    vocabularyExplanation: [
      { hanzi: '会 (huì)', pinyin: 'huì', english: 'can (know how to)' },
      { hanzi: '说 (shuō)', pinyin: 'shuō', english: 'to speak, to say' },
      { hanzi: '汉语 (hàn yǔ)', pinyin: 'hàn yǔ', english: 'Chinese language' },
      { hanzi: '一点儿 (yī diǎnr)', pinyin: 'yī diǎnr', english: 'a little bit' },
      { hanzi: '写 (xiě)', pinyin: 'xiě', english: 'to write' },
      { hanzi: '汉字 (hàn zì)', pinyin: 'hàn zì', english: 'Chinese character' },
      { hanzi: '厉害 (lì hai)', pinyin: 'lì hai', english: 'awesome, amazing' }
    ],
    grammarPoint: 'Expressing Learned Skills with 会 (huì)',
    structure: 'Subject + 会 / 不会 (huì / bú huì) + Verb (Phrase)',
    explanation: 'The modal verb "会" (huì) is used to express an ability or skill that has been learned or acquired through practice, like a language or a craft. The negative form is "不会" (bú huì).',
    examples: [
      { hanzi: '我妈妈会做中国菜。', pinyin: 'wǒ mā ma huì zuò zhōng guó cài.', translation: 'My mom can cook Chinese food.' },
      { hanzi: '他不会开车。', pinyin: 'tā bú huì kāi chē.', translation: 'He can\'t drive.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson10',
    title: 'Lesson 10: At a Restaurant (在饭店)',
    description: 'Learn basic phrases for ordering food and drinks in a restaurant setting.',
    content: 'This lesson prepares you for a common real-life situation: eating out. You will learn how to ask for things, order a dish, and use the most common measure word, "个" (ge).',
    dialogue: [
      { character: 'A', hanzi: '你好，请坐。想喝点儿什么？', pinyin: 'nǐ hǎo, qǐng zuò. xiǎng hē diǎnr shén me?', translation: 'Hello, please have a seat. What would you like to drink?' },
      { character: 'B', hanzi: '我喝水，谢谢。', pinyin: 'wǒ hē shuǐ, xiè xie.', translation: 'I\'ll have water, thank you.' },
      { character: 'A', hanzi: '好的。你想吃什么菜？', pinyin: 'hǎo de. nǐ xiǎng chī shén me cài?', translation: 'Okay. What dish would you like to eat?' },
      { character: 'B', hanzi: '我想吃这个菜，再来一个米饭。', pinyin: 'wǒ xiǎng chī zhè ge cài, zài lái yī ge mǐ fàn.', translation: 'I want to eat this dish, and also have a bowl of rice.' }
    ],
    vocabularyExplanation: [
      { hanzi: '请 (qǐng)', pinyin: 'qǐng', english: 'please' },
      { hanzi: '坐 (zuò)', pinyin: 'zuò', english: 'to sit' },
      { hanzi: '喝 (hē)', pinyin: 'hē', english: 'to drink' },
      { hanzi: '水 (shuǐ)', pinyin: 'shuǐ', english: 'water' },
      { hanzi: '吃 (chī)', pinyin: 'chī', english: 'to eat' },
      { hanzi: '菜 (cài)', pinyin: 'cài', english: 'dish, cuisine' },
      { hanzi: '个 (ge)', pinyin: 'ge', english: 'a common measure word' },
      { hanzi: '米饭 (mǐ fàn)', pinyin: 'mǐ fàn', english: 'cooked rice' }
    ],
    grammarPoint: 'The Universal Measure Word: 个 (ge)',
    structure: 'Number + 个 (ge) + Noun',
    explanation: 'In Mandarin, you use a "measure word" between a number and a noun. While there are many specific measure words, "个 (ge)" is the most common and can sometimes be used as a substitute when the correct one is unknown. It is frequently used with demonstrative pronouns like "这 (zhè)" and "那 (nà)".',
    examples: [
      { hanzi: '我有一个苹果。', pinyin: 'wǒ yǒu yī ge píng guǒ.', translation: 'I have one apple.' },
      { hanzi: '那个学生是我的朋友。', pinyin: 'nà ge xué sheng shì wǒ de péng you.', translation: 'That student is my friend.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson11',
    title: 'Lesson 11: Directions and Transportation (方向和交通)',
    description: 'Learn to ask for and give simple directions, and talk about taking different modes of transportation.',
    content: 'This lesson will help you navigate a Chinese-speaking environment. You will learn key vocabulary for directions (front, back, left, right) and how to say you are taking a taxi, train, or plane.',
    dialogue: [
      { character: 'A', hanzi: '请问，火车站怎么走？', pinyin: 'qǐng wèn, huǒ chē zhàn zěn me zǒu?', translation: 'Excuse me, how do I get to the train station?' },
      { character: 'B', hanzi: '往前走，就在你的右边。', pinyin: 'wǎng qián zǒu, jiù zài nǐ de yòu bian.', translation: 'Go straight ahead, it\'s on your right side.' },
      { character: 'A', hanzi: '谢谢。你坐出租车去哪儿？', pinyin: 'xiè xie. nǐ zuò chū zū chē qù nǎr?', translation: 'Thanks. Where are you going by taxi?' },
      { character: 'B', hanzi: '我坐出租车去飞机场，我要坐飞机。', pinyin: 'wǒ zuò chū zū chē qù fēi jī chǎng, wǒ yào zuò fēi jī.', translation: 'I\'m taking a taxi to the airport, I need to take a plane.' }
    ],
    vocabularyExplanation: [
      { hanzi: '火车站 (huǒ chē zhàn)', pinyin: 'huǒ chē zhàn', english: 'train station' },
      { hanzi: '怎么走 (zěn me zǒu)', pinyin: 'zěn me zǒu', english: 'how to get to...?' },
      { hanzi: '往 (wǎng)', pinyin: 'wǎng', english: 'towards' },
      { hanzi: '前 (qián)', pinyin: 'qián', english: 'front, ahead' },
      { hanzi: '右边 (yòu bian)', pinyin: 'yòu bian', english: 'right side' },
      { hanzi: '坐 (zuò)', pinyin: 'zuò', english: 'to sit, to take (transport)' },
      { hanzi: '出租车 (chū zū chē)', pinyin: 'chū zū chē', english: 'taxi' },
      { hanzi: '飞机场 (fēi jī chǎng)', pinyin: 'fēi jī chǎng', english: 'airport' },
      { hanzi: '飞机 (fēi jī)', pinyin: 'fēi jī', english: 'airplane' }
    ],
    grammarPoint: 'Using 坐 (zuò) for Transportation',
    structure: 'Subject + 坐 (zuò) + Vehicle + (去 + Place)',
    explanation: 'The verb 坐 (zuò) means "to sit," but it is also the primary verb for saying you "take" or "travel by" a form of transportation that you sit in. This includes cars, buses, trains, and planes.',
    examples: [
      { hanzi: '我明天坐飞机去美国。', pinyin: 'wǒ míng tiān zuò fēi jī qù měi guó.', translation: 'I am going to America by plane tomorrow.' },
      { hanzi: '他喜欢坐火车看外面的天气。', pinyin: 'tā xǐ huān zuò huǒ chē kàn wài miàn de tiān qì.', translation: 'He likes to watch the weather outside while taking the train.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson12',
    title: 'Lesson 12: Talking About Work and School (谈论工作和学校)',
    description: 'Learn to talk about your profession and what you do at school or work.',
    content: 'This lesson focuses on vocabulary for common professions (doctor, teacher, student) and the structure used to describe where you work or study.',
    dialogue: [
      { character: 'A', hanzi: '你的工作是什么？', pinyin: 'nǐ de gōng zuò shì shén me?', translation: 'What is your job?' },
      { character: 'B', hanzi: '我是医生，在医院工作。你呢？', pinyin: 'wǒ shì yī shēng, zài yī yuàn gōng zuò. nǐ ne?', translation: 'I am a doctor, I work at a hospital. And you?' },
      { character: 'A', hanzi: '我是学生，我在学校学习汉语。', pinyin: 'wǒ shì xué sheng, wǒ zài xué xiào xué xí hàn yǔ.', translation: 'I am a student, I study Chinese at school.' },
      { character: 'B', hanzi: '那是你的同学吗？', pinyin: 'nà shì nǐ de tóng xué ma?', translation: 'Is that your classmate?' }
    ],
    vocabularyExplanation: [
      { hanzi: '工作 (gōng zuò)', pinyin: 'gōng zuò', english: 'job, to work' },
      { hanzi: '医生 (yī shēng)', pinyin: 'yī shēng', english: 'doctor' },
      { hanzi: '医院 (yī yuàn)', pinyin: 'yī yuàn', english: 'hospital' },
      { hanzi: '学生 (xué sheng)', pinyin: 'xué sheng', english: 'student' },
      { hanzi: '学习 (xué xí)', pinyin: 'xué xí', english: 'to study, to learn' },
      { hanzi: '汉语 (hàn yǔ)', pinyin: 'hàn yǔ', english: 'Chinese language' },
      { hanzi: '同学 (tóng xué)', pinyin: 'tóng xué', english: 'classmate' }
    ],
    grammarPoint: 'Stating Where an Action Happens: 在 + Place + Verb',
    structure: 'Subject + 在 (zài) + Place + Verb',
    explanation: 'This structure is crucial for explaining where an activity takes place. 在 (zài) acts as a preposition meaning "at," "in," or "on." The location always comes before the action verb.',
    examples: [
      { hanzi: '我爸爸在商店工作。', pinyin: 'wǒ bà ba zài shāng diàn gōng zuò.', translation: 'My dad works at a store.' },
      { hanzi: '我喜欢在家看电视。', pinyin: 'wǒ xǐ huān zài jiā kàn diàn shì.', translation: 'I like to watch TV at home.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson13',
    title: 'Lesson 13: Describing Things (描述事物)',
    description: 'Learn more adjectives and how to use them to describe people, animals, and objects.',
    content: 'This lesson expands your descriptive vocabulary. You will learn adjectives like big, small, and cute, and the correct grammatical structure for making simple descriptive sentences.',
    dialogue: [
      { character: 'A', hanzi: '你看，那只小狗很可爱！', pinyin: 'nǐ kàn, nà zhī xiǎo gǒu hěn kě ài!', translation: 'Look, that little dog is very cute!' },
      { character: 'B', hanzi: '是啊。它的眼睛很大。', pinyin: 'shì a. tā de yǎn jīng hěn dà.', translation: 'Yes. Its eyes are very big.' },
      { character: 'A', hanzi: '这件衣服漂亮吗？', pinyin: 'zhè jiàn yī fu piào liang ma?', translation: 'Is this piece of clothing beautiful?' },
      { character: 'B', hanzi: '很漂亮，但是有点儿小。', pinyin: 'hěn piào liang, dàn shì yǒu diǎnr xiǎo.', translation: 'Very beautiful, but it\'s a little small.' }
    ],
    vocabularyExplanation: [
      { hanzi: '看 (kàn)', pinyin: 'kàn', english: 'to look, to see, to watch' },
      { hanzi: '小 (xiǎo)', pinyin: 'xiǎo', english: 'small, little' },
      { hanzi: '狗 (gǒu)', pinyin: 'gǒu', english: 'dog' },
      { hanzi: '可爱 (kě ài)', pinyin: 'kě ài', english: 'cute, lovely' },
      { hanzi: '眼睛 (yǎn jīng)', pinyin: 'yǎn jīng', english: 'eye' },
      { hanzi: '大 (dà)', pinyin: 'dà', english: 'big, large' },
      { hanzi: '衣服 (yī fu)', pinyin: 'yī fu', english: 'clothes' },
      { hanzi: '漂亮 (piào liang)', pinyin: 'piào liang', english: 'beautiful' }
    ],
    grammarPoint: 'Using Adjectives with 很 (hěn)',
    structure: 'Subject + 很 (hěn) + Adjective',
    explanation: 'In a simple Chinese sentence describing something with an adjective (e.g., "The dog is cute"), the adjective cannot stand alone. It is usually preceded by an adverb like 很 (hěn). In this context, 很 (hěn) often loses its meaning of "very" and simply serves to link the subject and the adjective. "他很高" just means "He is tall."',
    examples: [
      { hanzi: '中国菜很好吃。', pinyin: 'zhōng guó cài hěn hǎo chī.', translation: 'Chinese food is delicious.' },
      { hanzi: '今天天气很好。', pinyin: 'jīn tiān tiān qì hěn hǎo.', translation: 'The weather is good today.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson14',
    title: 'Lesson 14: Talking About Past Actions (谈论过去的活动)',
    description: 'Learn how to talk about what you did yesterday using the particle "了" (le).',
    content: 'This lesson introduces the concept of past tense in Mandarin. You will learn to use "了" (le) to indicate that an action has been completed, focusing on activities from yesterday.',
    dialogue: [
      { character: 'A', hanzi: '你昨天去哪儿了？', pinyin: 'nǐ zuó tiān qù nǎr le?', translation: 'Where did you go yesterday?' },
      { character: 'B', hanzi: '我昨天去商店了。', pinyin: 'wǒ zuó tiān qù shāng diàn le.', translation: 'I went to the store yesterday.' },
      { character: 'A', hanzi: '你买什么了？', pinyin: 'nǐ mǎi shén me le?', translation: 'What did you buy?' },
      { character: 'B', hanzi: '我买了一些苹果。', pinyin: 'wǒ mǎi le yī xiē píng guǒ.', translation: 'I bought some apples.' }
    ],
    vocabularyExplanation: [
      { hanzi: '昨天 (zuó tiān)', pinyin: 'zuó tiān', english: 'yesterday' },
      { hanzi: '了 (le)', pinyin: 'le', english: 'a particle indicating completion or change' },
      { hanzi: '商店 (shāng diàn)', pinyin: 'shāng diàn', english: 'store, shop' },
      { hanzi: '买 (mǎi)', pinyin: 'mǎi', english: 'to buy' },
      { hanzi: '一些 (yī xiē)', pinyin: 'yī xiē', english: 'some, a few' },
      { hanzi: '苹果 (píng guǒ)', pinyin: 'píng guǒ', english: 'apple' }
    ],
    grammarPoint: 'Indicating Completed Actions with 了 (le)',
    structure: 'Subject + Verb + 了 (le) + (Object)',
    explanation: 'To show that an action is completed, especially in the past, the particle 了 (le) is placed directly after the verb. It is one of the most common ways to express the past tense in Chinese. Note that 了 (le) indicates completion, not necessarily the past (it can be used for future completion too), but for HSK 1, it\'s easiest to associate it with past actions.',
    examples: [
      { hanzi: '我昨天看了一个电影。', pinyin: 'wǒ zuó tiān kàn le yī ge diàn yǐng.', translation: 'I watched a movie yesterday.' },
      { hanzi: '她吃了很多米饭。', pinyin: 'tā chī le hěn duō mǐ fàn.', translation: 'She ate a lot of rice.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson15',
    title: 'Lesson 15: Politeness and Etiquette (礼貌和礼节)',
    description: 'Learn the most important phrases for being polite: saying sorry and responding to thanks.',
    content: 'This lesson covers the essential conversational formulas for social etiquette. You will learn the correct ways to say "you\'re welcome" and "it\'s okay" in response to thanks and apologies.',
    dialogue: [
      { character: 'A', hanzi: '对不起，我来晚了。', pinyin: 'duì bu qǐ, wǒ lái wǎn le.', translation: 'Sorry, I am late.' },
      { character: 'B', hanzi: '没关系。', pinyin: 'méi guān xi.', translation: 'It\'s okay / No problem.' },
      { character: 'A', hanzi: '这个给你，谢谢你的帮助。', pinyin: 'zhè ge gěi nǐ, xiè xie nǐ de bāng zhù.', translation: 'This is for you, thank you for your help.' },
      { character: 'B', hanzi: '不客气！', pinyin: 'bú kè qi!', translation: 'You\'re welcome!' }
    ],
    vocabularyExplanation: [
      { hanzi: '对不起 (duì bu qǐ)', pinyin: 'duì bu qǐ', english: 'sorry, excuse me' },
      { hanzi: '来 (lái)', pinyin: 'lái', english: 'to come' },
      { hanzi: '晚 (wǎn)', pinyin: 'wǎn', english: 'late' },
      { hanzi: '没关系 (méi guān xi)', pinyin: 'méi guān xi', english: 'it doesn\'t matter, it\'s okay' },
      { hanzi: '给 (gěi)', pinyin: 'gěi', english: 'to give' },
      { hanzi: '帮助 (bāng zhù)', pinyin: 'bāng zhù', english: 'help, to help' },
      { hanzi: '不客气 (bú kè qi)', pinyin: 'bú kè qi', english: 'you\'re welcome' }
    ],
    grammarPoint: 'Essential Politeness Formulas',
    structure: '谢谢 (xièxie) -> 不客气 (bú kèqi) | 对不起 (duìbuqǐ) -> 没关系 (méi guānxi)',
    explanation: 'These phrases are fixed conversational pairs. When someone says "谢谢 (xièxie)" (Thank you), the standard reply is "不客气 (bú kèqi)" (You\'re welcome). When someone says "对不起 (duìbuqǐ)" (Sorry), the standard reply is "没关系 (méi guānxi)" (It\'s okay / No problem). It is best to memorize these as complete social formulas.',
    examples: [
      { hanzi: 'A: 谢谢你。 B: 不客气。', pinyin: 'A: xiè xie nǐ. B: bú kè qi.', translation: 'A: Thank you. B: You\'re welcome.' },
      { hanzi: 'A: 对不起。 B: 没关系。', pinyin: 'A: duì bu qǐ. B: méi guān xi.', translation: 'A: Sorry. B: It\'s okay.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson16',
    title: 'Lesson 16: Days of the Week (星期)',
    description: 'Learn how to say the days of the week from Monday to Sunday and ask "What day is it today?".',
    content: 'This lesson introduces the simple and logical pattern for naming the days of the week. This is a fundamental skill for making plans and talking about your weekly schedule.',
    dialogue: [
      { character: 'A', hanzi: '今天星期几？', pinyin: 'jīn tiān xīng qī jǐ?', translation: 'What day of the week is it today?' },
      { character: 'B', hanzi: '今天星期三。', pinyin: 'jīn tiān xīng qī sān.', translation: 'Today is Wednesday.' },
      { character: 'A', hanzi: '你星期五下午有时间吗？', pinyin: 'nǐ xīng qī wǔ xià wǔ yǒu shí jiān ma?', translation: 'Do you have time on Friday afternoon?' },
      { character: 'B', hanzi: '有。我星期六和星期天休息。', pinyin: 'yǒu. wǒ xīng qī liù hé xīng qī tiān xiū xi.', translation: 'Yes. I rest on Saturday and Sunday.' }
    ],
    vocabularyExplanation: [
      { hanzi: '星期 (xīng qī)', pinyin: 'xīng qī', english: 'week' },
      { hanzi: '星期一 (xīng qī yī)', pinyin: 'xīng qī yī', english: 'Monday' },
      { hanzi: '星期三 (xīng qī sān)', pinyin: 'xīng qī sān', english: 'Wednesday' },
      { hanzi: '星期五 (xīng qī wǔ)', pinyin: 'xīng qī wǔ', english: 'Friday' },
      { hanzi: '星期六 (xīng qī liù)', pinyin: 'xīng qī liù', english: 'Saturday' },
      { hanzi: '星期天 (xīng qī tiān)', pinyin: 'xīng qī tiān', english: 'Sunday' },
      { hanzi: '时间 (shí jiān)', pinyin: 'shí jiān', english: 'time' },
      { hanzi: '休息 (xiū xi)', pinyin: 'xiū xi', english: 'to rest' }
    ],
    grammarPoint: 'Forming and Asking the Day of the Week',
    structure: '星期 (xīngqī) + Number (1-6) | Question: 星期几 (xīngqī jǐ)?',
    explanation: 'Days of the week in Chinese follow a simple pattern: "星期" (xīngqī) plus a number from 1 for Monday to 6 for Saturday. Sunday is an exception, called "星期天" (xīngqītiān) or "星期日" (xīngqīrì). To ask "what day of the week," you use the question form "星期几 (xīngqī jǐ)?".',
    examples: [
      { hanzi: '昨天是星期二。', pinyin: 'zuó tiān shì xīng qī èr.', translation: 'Yesterday was Tuesday.' },
      { hanzi: '我星期一有汉语课。', pinyin: 'wǒ xīng qī yī yǒu hàn yǔ kè.', translation: 'I have Chinese class on Monday.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson17',
    title: 'Lesson 17: Expressing Possession with 有 (yǒu)',
    description: 'Learn how to talk about having or not having something.',
    content: 'This lesson focuses on the verb "有" (yǒu) to express possession. You will learn the correct way to form the negative, which is a crucial and unique grammar rule in Chinese.',
    dialogue: [
      { character: 'A', hanzi: '你有电脑吗？', pinyin: 'nǐ yǒu diàn nǎo ma?', translation: 'Do you have a computer?' },
      { character: 'B', hanzi: '我没有电脑，我有一个手机。', pinyin: 'wǒ méi yǒu diàn nǎo, wǒ yǒu yī ge shǒu jī.', translation: 'I don\'t have a computer, I have a mobile phone.' },
      { character: 'A', hanzi: '你有几本汉语书？', pinyin: 'nǐ yǒu jǐ běn hàn yǔ shū?', translation: 'How many Chinese books do you have?' },
      { character: 'B', hanzi: '我有五本。', pinyin: 'wǒ yǒu wǔ běn.', translation: 'I have five.' }
    ],
    vocabularyExplanation: [
      { hanzi: '有 (yǒu)', pinyin: 'yǒu', english: 'to have, to possess' },
      { hanzi: '没有 (méi yǒu)', pinyin: 'méi yǒu', english: 'to not have' },
      { hanzi: '电脑 (diàn nǎo)', pinyin: 'diàn nǎo', english: 'computer' },
      { hanzi: '手机 (shǒu jī)', pinyin: 'shǒu jī', english: 'mobile phone' },
      { hanzi: '几 (jǐ)', pinyin: 'jǐ', english: 'how many (for small numbers)' },
      { hanzi: '本 (běn)', pinyin: 'běn', english: 'measure word for books' },
      { hanzi: '书 (shū)', pinyin: 'shū', english: 'book' }
    ],
    grammarPoint: 'Negating 有 (yǒu) with 没有 (méi yǒu)',
    structure: 'Positive: Subject + 有 + Object. | Negative: Subject + 没有 + Object.',
    explanation: 'The verb "有" (yǒu), meaning "to have," has a special rule for negation. Unlike most other verbs that use "不" (bù), the negative form of "有" is always "没有" (méi yǒu). You can never say "不有" (bù yǒu).',
    examples: [
      { hanzi: '我没有哥哥。', pinyin: 'wǒ méi yǒu gē ge.', translation: 'I don\'t have an older brother.' },
      { hanzi: '他没有钱。', pinyin: 'tā méi yǒu qián.', translation: 'He doesn\'t have any money.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson18',
    title: 'Lesson 18: Making Basic Comparisons with 比 (bǐ)',
    description: 'Learn how to compare two people or things using the "比" (bǐ) structure.',
    content: 'This lesson introduces the fundamental structure for making comparisons in Chinese. You will learn how to say someone is taller, older, or bigger than someone else.',
    dialogue: [
      { character: 'A', hanzi: '那是你哥哥吗？', pinyin: 'nà shì nǐ gē ge ma?', translation: 'Is that your older brother?' },
      { character: 'B', hanzi: '是，他是我哥哥。', pinyin: 'shì, tā shì wǒ gē ge.', translation: 'Yes, he is my older brother.' },
      { character: 'A', hanzi: '你哥哥比你高。', pinyin: 'nǐ gē ge bǐ nǐ gāo.', translation: 'Your older brother is taller than you.' },
      { character: 'B', hanzi: '是的，我比他小三岁。', pinyin: 'shì de, wǒ bǐ tā xiǎo sān suì.', translation: 'Yes, I am three years younger than him.' }
    ],
    vocabularyExplanation: [
      { hanzi: '比 (bǐ)', pinyin: 'bǐ', english: 'than (used for comparison)' },
      { hanzi: '哥哥 (gē ge)', pinyin: 'gē ge', english: 'older brother' },
      { hanzi: '高 (gāo)', pinyin: 'gāo', english: 'tall, high' },
      { hanzi: '小 (xiǎo)', pinyin: 'xiǎo', english: 'small, young (in age)' },
      { hanzi: '岁 (suì)', pinyin: 'suì', english: 'year (of age)' }
    ],
    grammarPoint: 'The Comparison Structure with 比 (bǐ)',
    structure: 'Noun A + 比 (bǐ) + Noun B + Adjective',
    explanation: 'To compare two things, Chinese uses the preposition "比" (bǐ). The structure is straightforward: the first item (A), followed by 比, the second item (B), and finally the adjective of comparison. Adverbs like "很" (hěn) are not used before the adjective in this structure.',
    examples: [
      { hanzi: '苹果比西瓜小。', pinyin: 'píng guǒ bǐ xī guā xiǎo.', translation: 'Apples are smaller than watermelons.' },
      { hanzi: '今天比昨天热。', pinyin: 'jīn tiān bǐ zuó tiān rè.', translation: 'Today is hotter than yesterday.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson19',
    title: 'Lesson 19: Expressing Degrees (太...了 and 有点儿)',
    description: 'Learn how to express "too much" of a quality and "a little bit" of a quality.',
    content: 'This lesson teaches two important ways to express degree. "太...了" (tài...le) is used for emphasis, while "有点儿" (yǒudiǎnr) is often used to express a slight complaint.',
    dialogue: [
      { character: 'A', hanzi: '今天太热了！', pinyin: 'jīn tiān tài rè le!', translation: 'It\'s too hot today!' },
      { character: 'B', hanzi: '是啊。我想喝水。', pinyin: 'shì a. wǒ xiǎng hē shuǐ.', translation: 'Yeah. I want to drink some water.' },
      { character: 'A', hanzi: '这件衣服怎么样？', pinyin: 'zhè jiàn yī fu zěn me yàng?', translation: 'How are these clothes?' },
      { character: 'B', hanzi: '颜色很好看，但是有点儿贵。', pinyin: 'yán sè hěn hǎo kàn, dàn shì yǒu diǎnr guì.', translation: 'The color is nice, but it\'s a little expensive.' }
    ],
    vocabularyExplanation: [
      { hanzi: '太...了 (tài...le)', pinyin: 'tài...le', english: 'too, so, excessively' },
      { hanzi: '热 (rè)', pinyin: 'rè', english: 'hot' },
      { hanzi: '有点儿 (yǒu diǎnr)', pinyin: 'yǒu diǎnr', english: 'a little bit, somewhat' },
      { hanzi: '颜色 (yán sè)', pinyin: 'yán sè', english: 'color' },
      { hanzi: '好看 (hǎo kàn)', pinyin: 'hǎo kàn', english: 'good-looking, pretty' },
      { hanzi: '贵 (guì)', pinyin: 'guì', english: 'expensive' }
    ],
    grammarPoint: 'Contrasting 太...了 (tài...le) and 有点儿 (yǒudiǎnr)',
    structure: '太 + Adj. + 了 | 有点儿 + Adj.',
    explanation: 'Both structures express degree. "太...了" indicates a very high degree and can express surprise or excitement (e.g., 太好了! - Great!). "有点儿" indicates a moderate degree, but crucially, it almost always carries a negative or complaining tone, suggesting the speaker is slightly dissatisfied with the quality described.',
    examples: [
      { hanzi: '这个菜太好吃了！', pinyin: 'zhè ge cài tài hǎo chī le!', translation: 'This dish is so delicious!' },
      { hanzi: '我今天有点儿累。', pinyin: 'wǒ jīn tiān yǒu diǎnr lèi.', translation: 'I\'m a little tired today.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson20',
    title: 'Lesson 20: Asking "Why" and Giving Reasons',
    description: 'Learn how to ask "why" with "为什么" and answer with "因为".',
    content: 'This lesson covers the fundamental cause-and-effect language. You will learn the basic question-and-answer pattern for asking about and explaining reasons for actions or feelings.',
    dialogue: [
      { character: 'A', hanzi: '你今天为什么很高兴？', pinyin: 'nǐ jīn tiān wèi shén me hěn gāo xìng?', translation: 'Why are you so happy today?' },
      { character: 'B', hanzi: '因为今天是我的生日。', pinyin: 'yīn wèi jīn tiān shì wǒ de shēng rì.', translation: 'Because today is my birthday.' },
      { character: 'A', hanzi: '你为什么不喝茶？', pinyin: 'nǐ wèi shén me bù hē chá?', translation: 'Why don\'t you drink tea?' },
      { character: 'B', hanzi: '因为我不喜欢。', pinyin: 'yīn wèi wǒ bù xǐ huān.', translation: 'Because I don\'t like it.' }
    ],
    vocabularyExplanation: [
      { hanzi: '为什么 (wèi shén me)', pinyin: 'wèi shén me', english: 'why' },
      { hanzi: '高兴 (gāo xìng)', pinyin: 'gāo xìng', english: 'happy, glad' },
      { hanzi: '因为 (yīn wèi)', pinyin: 'yīn wèi', english: 'because' },
      { hanzi: '生日 (shēng rì)', pinyin: 'shēng rì', english: 'birthday' },
      { hanzi: '喝 (hē)', pinyin: 'hē', english: 'to drink' },
      { hanzi: '茶 (chá)', pinyin: 'chá', english: 'tea' }
    ],
    grammarPoint: 'Asking "Why" and Answering with "Because"',
    structure: 'Question: ...为什么...? | Answer: 因为...',
    explanation: 'The question word for "why" is "为什么" (wèishénme). The most direct way to answer is by starting your sentence with "因为" (yīnwèi), which means "because". This creates a simple and clear cause-and-effect statement.',
    examples: [
      { hanzi: 'A: 你为什么学习汉语？ B: 因为我想去中国工作。', pinyin: 'A: nǐ wèi shén me xué xí hàn yǔ? B: yīn wèi wǒ xiǎng qù zhōng guó gōng zuò.', translation: 'A: Why do you study Chinese? B: Because I want to go to China to work.' },
      { hanzi: '他没来，因为他生病了。', pinyin: 'tā méi lái, yīn wèi tā shēng bìng le.', translation: 'He didn\'t come because he was sick.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson21',
    title: 'Lesson 21: Asking "Who?" and Introducing People (问"谁"和介绍人)',
    description: 'Learn how to use the question word "谁" (shéi) to ask who someone is and practice introducing friends and colleagues.',
    content: 'This lesson focuses on identifying people. You will learn the important question word for "who" and review vocabulary for friend, classmate, and formal titles like Mr. and Miss.',
    dialogue: [
      { character: 'A', hanzi: '请问，那个人是谁？', pinyin: 'qǐng wèn, nà ge rén shì shéi?', translation: 'Excuse me, who is that person?' },
      { character: 'B', hanzi: '他是我们的新老师，王先生。', pinyin: 'tā shì wǒ men de xīn lǎo shī, Wáng xiān sheng.', translation: 'He is our new teacher, Mr. Wang.' },
      { character: 'A', hanzi: '你认识前面那位小姐吗？', pinyin: 'nǐ rèn shi qián miàn nà wèi xiǎo jiě ma?', translation: 'Do you know that young lady in the front?' },
      { character: 'B', hanzi: '认识，她是我朋友。', pinyin: 'rèn shi, tā shì wǒ péng you.', translation: 'Yes, she is my friend.' }
    ],
    vocabularyExplanation: [
      { hanzi: '谁 (shéi)', pinyin: 'shéi (or shuí)', english: 'who, whom' },
      { hanzi: '人 (rén)', pinyin: 'rén', english: 'person, people' },
      { hanzi: '新 (xīn)', pinyin: 'xīn', english: 'new' },
      { hanzi: '老师 (lǎo shī)', pinyin: 'lǎo shī', english: 'teacher' },
      { hanzi: '先生 (xiān sheng)', pinyin: 'xiān sheng', english: 'Mr., husband, gentleman' },
      { hanzi: '小姐 (xiǎo jiě)', pinyin: 'xiǎo jiě', english: 'Miss, young lady' },
      { hanzi: '朋友 (péng you)', pinyin: 'péng you', english: 'friend' }
    ],
    grammarPoint: 'The Question Word 谁 (shéi)',
    structure: 'Subject + Verb + 谁?  OR  谁 + Verb + Object?',
    explanation: '谁 (shéi) is the question pronoun for "who". You simply replace the person in a statement with 谁 to form the question. It can be used as either the subject or the object of the sentence.',
    examples: [
      { hanzi: '谁是你的医生？', pinyin: 'shéi shì nǐ de yī shēng?', translation: 'Who is your doctor?' },
      { hanzi: '你想请谁吃饭？', pinyin: 'nǐ xiǎng qǐng shéi chī fàn?', translation: 'Who do you want to invite to eat?' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson22',
    title: 'Lesson 22: Expressing Desire with 要 (yào) and 想 (xiǎng)',
    description: 'Learn the difference between wanting an object (要) and wanting to do an action (想).',
    content: 'This lesson clarifies two important verbs for expressing what you want. "要" (yào) is primarily used for wanting objects, while "想" (xiǎng) is used for wanting to perform an action.',
    dialogue: [
      { character: 'A', hanzi: '你好，你要买什么？', pinyin: 'nǐ hǎo, nǐ yào mǎi shén me?', translation: 'Hello, what do you want to buy?' },
      { character: 'B', hanzi: '我要一杯咖啡，谢谢。', pinyin: 'wǒ yào yī bēi kā fēi, xiè xie.', translation: 'I want a cup of coffee, thanks.' },
      { character: 'A', hanzi: '好的。你想吃什么菜？', pinyin: 'hǎo de. nǐ xiǎng chī shén me cài?', translation: 'Okay. What dish would you like to eat?' },
      { character: 'B', hanzi: '我想吃这个菜，再来一个米饭。', pinyin: 'wǒ xiǎng chī zhè ge cài, zài lái yī ge mǐ fàn.', translation: 'I want to eat this dish, and also have a bowl of rice.' }
    ],
    vocabularyExplanation: [
      { hanzi: '要 (yào)', pinyin: 'yào', english: 'to want (an object); to need' },
      { hanzi: '买 (mǎi)', pinyin: 'mǎi', english: 'to buy' },
      { hanzi: '杯 (bēi)', pinyin: 'bēi', english: 'cup, glass (measure word)' },
      { hanzi: '咖啡 (kā fēi)', pinyin: 'kā fēi', english: 'coffee' },
      { hanzi: '想 (xiǎng)', pinyin: 'xiǎng', english: 'to want (to do something); to think' },
      { hanzi: '做 (zuò)', pinyin: 'zuò', english: 'to do, to make' },
      { hanzi: '睡觉 (shuì jiào)', pinyin: 'shuì jiào', english: 'to sleep' }
    ],
    grammarPoint: 'Differentiating 要 (yào) and 想 (xiǎng)',
    structure: '要 + Noun | 想 + Verb',
    explanation: 'Both verbs can mean "to want". The key difference is what follows them. Use "要 (yào)" when you want a noun (an object). Use "想 (xiǎng)" when you want to do a verb (an action). For example, "我要水" (I want water), but "我想喝水" (I want to drink water).',
    examples: [
      { hanzi: '我女儿要一个新电脑。', pinyin: 'wǒ nǚ ér yào yī ge xīn diàn nǎo.', translation: 'My daughter wants a new computer.' },
      { hanzi: '他想学习汉语。', pinyin: 'tā xiǎng xué xí hàn yǔ.', translation: 'He wants to study Chinese.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson23',
    title: 'Lesson 23: Verb-Not-Verb Questions',
    description: 'Learn an alternative way to ask yes-no questions without using "吗" (ma).',
    content: 'This lesson introduces the "A-not-A" or "Verb-not-Verb" question form. It is a very common conversational pattern that offers a choice between the affirmative and negative of a verb.',
    dialogue: [
      { character: 'A', hanzi: '你是不是王先生？', pinyin: 'nǐ shì bu shì Wáng xiān sheng?', translation: 'Are you Mr. Wang?' },
      { character: 'B', hanzi: '是，我就是。', pinyin: 'shì, wǒ jiù shì.', translation: 'Yes, I am.' },
      { character: 'A', hanzi: '你明天去不去商店？', pinyin: 'nǐ míng tiān qù bu qù shāng diàn?', translation: 'Are you going to the store tomorrow or not?' },
      { character: 'B', hanzi: '我去。你想不想和我一起去？', pinyin: 'wǒ qù. nǐ xiǎng bu xiǎng hé wǒ yī qǐ qù?', translation: 'I am going. Do you want to go with me?' }
    ],
    vocabularyExplanation: [
      { hanzi: '是不是 (shì bu shì)', pinyin: 'shì bu shì', english: 'is or is not?' },
      { hanzi: '去不去 (qù bu qù)', pinyin: 'qù bu qù', english: 'go or not go?' },
      { hanzi: '想不想 (xiǎng bu xiǎng)', pinyin: 'xiǎng bu xiǎng', english: 'want to or not want to?' },
      { hanzi: '商店 (shāng diàn)', pinyin: 'shāng diàn', english: 'store, shop' },
      { hanzi: '一起 (yī qǐ)', pinyin: 'yī qǐ', english: 'together' }
    ],
    grammarPoint: 'The A-not-A Question Form',
    structure: 'Subject + Verb + 不 (bu) + Verb + (Object)?',
    explanation: 'This structure provides another way to ask a yes-no question, equivalent to ending a statement with "吗" (ma). You simply state the verb, its negative form "不," and the verb again. This form is very common in spoken Chinese. Note that for two-syllable verbs, the pattern is often AB-not-A (e.g., 喜欢不喜欢 xǐhuan bu xǐhuan).',
    examples: [
      { hanzi: '这件衣服好不好看？', pinyin: 'zhè jiàn yī fu hǎo bu hǎo kàn?', translation: 'Is this piece of clothing good-looking?' },
      { hanzi: '你爱不爱你的小狗？', pinyin: 'nǐ ài bu ài nǐ de xiǎo gǒu?', translation: 'Do you love your puppy?' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson24',
    title: 'Lesson 24: Expressing Ability with 能 (néng)',
    description: 'Learn to use "能" (néng) to talk about being able to do something or having permission.',
    content: 'This lesson introduces the modal verb "能" (néng), which means "can" or "to be able to". It often relates to circumstances or permission, as opposed to a learned skill.',
    dialogue: [
      { character: 'A', hanzi: '对不起，我现在很忙，不能帮你。', pinyin: 'duì bu qǐ, wǒ xiàn zài hěn máng, bù néng bāng nǐ.', translation: 'Sorry, I am busy right now, I am not able to help you.' },
      { character: 'B', hanzi: '没关系。你什么时候能回家？', pinyin: 'méi guān xi. nǐ shén me shí hou néng huí jiā?', translation: 'No problem. When will you be able to come home?' },
      { character: 'A', hanzi: '请问，我能在这里坐吗？', pinyin: 'qǐng wèn, wǒ néng zài zhè lǐ zuò ma?', translation: 'Excuse me, may I sit here?' },
      { character: 'B', hanzi: '能，请坐。', pinyin: 'néng, qǐng zuò.', translation: 'Yes, you can. Please sit.' }
    ],
    vocabularyExplanation: [
      { hanzi: '能 (néng)', pinyin: 'néng', english: 'can, to be able to' },
      { hanzi: '忙 (máng)', pinyin: 'máng', english: 'busy' },
      { hanzi: '帮 (bāng)', pinyin: 'bāng', english: 'to help' },
      { hanzi: '回家 (huí jiā)', pinyin: 'huí jiā', english: 'to go home' },
      { hanzi: '这里 (zhè lǐ)', pinyin: 'zhè lǐ', english: 'here' },
      { hanzi: '坐 (zuò)', pinyin: 'zuò', english: 'to sit' }
    ],
    grammarPoint: 'The Modal Verb 能 (néng)',
    structure: 'Subject + 能 / 不能 + Verb',
    explanation: '"能" (néng) expresses ability based on circumstances or having permission. It answers the question "Is it possible?" or "Am I allowed?". This differs from "会" (huì), which expresses a learned skill. For example, you "会" speak Chinese (a skill), but you "能" speak Chinese here because it\'s not a library (permission/circumstance).',
    examples: [
      { hanzi: '今天下雨了，我们不能去公园了。', pinyin: 'jīn tiān xià yǔ le, wǒ men bù néng qù gōng yuán le.', translation: 'It\'s raining today, so we can\'t go to the park.' },
      { hanzi: '我能用一下你的电脑吗？', pinyin: 'wǒ néng yòng yī xià nǐ de diàn nǎo ma?', translation: 'Can I use your computer for a moment?' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson25',
    title: 'Lesson 25: Months and Dates (月和号)',
    description: 'Learn how to say the months of the year and ask for and state specific dates.',
    content: 'This lesson completes your knowledge of telling time by introducing months and days. You will learn the simple numerical pattern for months and how to combine them with days to talk about dates like birthdays.',
    dialogue: [
      { character: 'A', hanzi: '今天几月几号？', pinyin: 'jīn tiān jǐ yuè jǐ hào?', translation: 'What is the date today?' },
      { character: 'B', hanzi: '今天七月十九号。', pinyin: 'jīn tiān qī yuè shí jiǔ hào.', translation: 'Today is July 19th.' },
      { character: 'A', hanzi: '你的生日是几月几号？', pinyin: 'nǐ de shēng rì shì jǐ yuè jǐ hào?', translation: 'When is your birthday?' },
      { character: 'B', hanzi: '我的生日是三月五号。', pinyin: 'wǒ de shēng rì shì sān yuè wǔ hào.', translation: 'My birthday is March 5th.' }
    ],
    vocabularyExplanation: [
      { hanzi: '月 (yuè)', pinyin: 'yuè', english: 'month' },
      { hanzi: '号 (hào)', pinyin: 'hào', english: 'day of the month (colloquial)' },
      { hanzi: '日 (rì)', pinyin: 'rì', english: 'day of the month (written/formal)' },
      { hanzi: '七月 (qī yuè)', pinyin: 'qī yuè', english: 'July' },
      { hanzi: '三月 (sān yuè)', pinyin: 'sān yuè', english: 'March' },
      { hanzi: '生日 (shēng rì)', pinyin: 'shēng rì', english: 'birthday' }
    ],
    grammarPoint: 'Stating Months and Dates',
    structure: 'Number + 月 (yuè) | Number + 号 (hào) / 日 (rì)',
    explanation: 'Similar to days of the week, months in Chinese follow a simple pattern: just say the number (1-12) followed by "月" (yuè). For the day of the month, say the number followed by "号" (hào) in spoken Chinese, or "日" (rì) in written Chinese. The word order is always from the largest unit to the smallest: Year, Month, Day.',
    examples: [
      { hanzi: '一月一日是新年。', pinyin: 'yī yuè yī rì shì xīn nián.', translation: 'January 1st is New Year\'s Day.' },
      { hanzi: '今天是二零二五年七月十九号。', pinyin: 'jīn tiān shì èr líng èr wǔ nián qī yuè shí jiǔ hào.', translation: 'Today is July 19th, 2025.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson26',
    title: 'Lesson 26: At Home - Where You Live (在家 - 住在哪儿)',
    description: 'Learn how to talk about where you live and common home activities like watching TV.',
    content: 'This lesson focuses on home life. You will learn the verb "住" (zhù) for "to live," practice using the location words "这儿" (here) and "那儿" (there), and talk about watching TV.',
    dialogue: [
      { character: 'A', hanzi: '你住在哪儿？', pinyin: 'nǐ zhù zài nǎr?', translation: 'Where do you live?' },
      { character: 'B', hanzi: '我住在这儿。这是我的家。', pinyin: 'wǒ zhù zài zhèr. zhè shì wǒ de jiā.', translation: 'I live here. This is my home.' },
      { character: 'A', hanzi: '你家有电视吗？', pinyin: 'nǐ jiā yǒu diàn shì ma?', translation: 'Do you have a TV at your home?' },
      { character: 'B', hanzi: '有，我喜欢在家看电视。', pinyin: 'yǒu, wǒ xǐ huān zài jiā kàn diàn shì.', translation: 'Yes, I like to watch TV at home.' }
    ],
    vocabularyExplanation: [
      { hanzi: '住 (zhù)', pinyin: 'zhù', english: 'to live, to reside' },
      { hanzi: '这儿 (zhèr)', pinyin: 'zhèr', english: 'here' },
      { hanzi: '那儿 (nàr)', pinyin: 'nàr', english: 'there' },
      { hanzi: '家 (jiā)', pinyin: 'jiā', english: 'home, family' },
      { hanzi: '电视 (diàn shì)', pinyin: 'diàn shì', english: 'television' },
      { hanzi: '看电视 (kàn diàn shì)', pinyin: 'kàn diàn shì', english: 'to watch TV' }
    ],
    grammarPoint: 'Locational Pronouns: 这儿 (zhèr) and 那儿 (nàr)',
    structure: '在 (zài) + 这儿 / 那儿',
    explanation: '这儿 (zhèr) means "here" or "this place," referring to a location close to the speaker. 那儿 (nàr) means "there" or "that place," referring to a location farther from the speaker. They are often used after the preposition 在 (zài) to specify a location.',
    examples: [
      { hanzi: '我的朋友住在那儿。', pinyin: 'wǒ de péng you zhù zài nàr.', translation: 'My friend lives there.' },
      { hanzi: '请坐在这儿。', pinyin: 'qǐng zuò zài zhèr.', translation: 'Please sit here.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson27',
    title: 'Lesson 27: The Senses - Reading and Listening (感官 - 读和听)',
    description: 'Learn the verbs for reading and listening, and understand the difference between looking and seeing.',
    content: 'This lesson covers verbs related to language and perception. You will learn "读" (dú) for reading and "听" (tīng) for listening, and explore the important concept of resultative verbs with "看见" (kànjiàn).',
    dialogue: [
      { character: 'A', hanzi: '你在做什么？', pinyin: 'nǐ zài zuò shén me?', translation: 'What are you doing?' },
      { character: 'B', hanzi: '我在读汉语书。', pinyin: 'wǒ zài dú hàn yǔ shū.', translation: 'I am reading a Chinese book.' },
      { character: 'A', hanzi: '你看，那是什么？', pinyin: 'nǐ kàn, nà shì shén me?', translation: 'Look, what is that?' },
      { character: 'B', hanzi: '对不起，我没看见。', pinyin: 'duì bu qǐ, wǒ méi kàn jiàn.', translation: 'Sorry, I didn\'t see it.' }
    ],
    vocabularyExplanation: [
      { hanzi: '读 (dú)', pinyin: 'dú', english: 'to read' },
      { hanzi: '听 (tīng)', pinyin: 'tīng', english: 'to listen' },
      { hanzi: '看 (kàn)', pinyin: 'kàn', english: 'to look, to watch' },
      { hanzi: '看见 (kàn jiàn)', pinyin: 'kàn jiàn', english: 'to see (result of looking)' },
      { hanzi: '没 (méi)', pinyin: 'méi', english: 'not (used with 有 and some past actions)' }
    ],
    grammarPoint: 'Resultative Complements: 看 (kàn) vs. 看见 (kànjiàn)',
    structure: 'Verb + Resultative Complement',
    explanation: 'In Chinese, a second verb can be attached to the first to show the result of the action. "看" (kàn) is the action of "looking," while "见" (jiàn) is the result of "perceiving." Therefore, "看" means "to look," but "看见" means "to see" (i.e., to successfully look at something). The negative form is "没看见" (méi kànjiàn), not "不看见".',
    examples: [
      { hanzi: '我听了，但是没听懂。', pinyin: 'wǒ tīng le, dàn shì méi tīng dǒng.', translation: 'I listened, but I didn\'t understand. (听懂 is another resultative verb)' },
      { hanzi: '你看见我的手机了吗？', pinyin: 'nǐ kàn jiàn wǒ de shǒu jī le ma?', translation: 'Did you see my mobile phone?' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson28',
    title: 'Lesson 28: Using "都 (dōu)" for "All" (用"都"表达"全部")',
    description: 'Learn how to use the essential adverb "都" (dōu) to mean "all" or "both".',
    content: 'This lesson focuses on "都" (dōu), an adverb used to summarize a preceding noun or pronoun. It is crucial for saying things like "We all are..." or "They both like...".',
    dialogue: [
      { character: 'A', hanzi: '你和你的朋友都是学生吗？', pinyin: 'nǐ hé nǐ de péng you dōu shì xué sheng ma?', translation: 'Are you and your friend both students?' },
      { character: 'B', hanzi: '是的，我们都是学生。', pinyin: 'shì de, wǒ men dōu shì xué sheng.', translation: 'Yes, we are all students.' },
      { character: 'A', hanzi: '这些水果你都喜欢吃吗？', pinyin: 'zhè xiē shuǐ guǒ nǐ dōu xǐ huān chī ma?', translation: 'Do you like to eat all of these fruits?' },
      { character: 'B', hanzi: '是的，苹果和西瓜我都喜欢。', pinyin: 'shì de, píng guǒ hé xī guā wǒ dōu xǐ huān.', translation: 'Yes, I like both apples and watermelons.' }
    ],
    vocabularyExplanation: [
      { hanzi: '都 (dōu)', pinyin: 'dōu', english: 'all, both' },
      { hanzi: '我们 (wǒ men)', pinyin: 'wǒ men', english: 'we, us' },
      { hanzi: '这些 (zhè xiē)', pinyin: 'zhè xiē', english: 'these' },
      { hanzi: '水果 (shuǐ guǒ)', pinyin: 'shuǐ guǒ', english: 'fruit' }
    ],
    grammarPoint: 'The Adverb 都 (dōu)',
    structure: 'Subject (Plural/List) + 都 (dōu) + Verb',
    explanation: 'The adverb "都" (dōu) is used to emphasize that everything mentioned in the subject is included in the action or state that follows. It must be placed after the subject (or list of things) and before the verb. It cannot be placed at the beginning or end of the sentence.',
    examples: [
      { hanzi: '我的爸爸妈妈都是医生。', pinyin: 'wǒ de bà ba mā ma dōu shì yī shēng.', translation: 'My dad and mom are both doctors.' },
      { hanzi: '这些汉字我都会写。', pinyin: 'zhè xiē hàn zì wǒ dōu huì xiě.', translation: 'I can write all of these Chinese characters.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson29',
    title: 'Lesson 29: Making a Phone Call (打电话)',
    description: 'Learn the basic etiquette and phrases for making a simple phone call in Chinese.',
    content: 'This lesson walks you through a typical phone conversation, from the initial greeting "喂" (wéi) to asking if someone is available and saying you will call back.',
    dialogue: [
      { character: 'A', hanzi: '喂？请问，李小姐在吗？', pinyin: 'wéi? qǐng wèn, Lǐ xiǎo jiě zài ma?', translation: 'Hello? Excuse me, is Miss Li there?' },
      { character: 'B', hanzi: '她不在。你是谁？', pinyin: 'tā bù zài. nǐ shì shéi?', translation: 'She is not here. Who are you?' },
      { character: 'A', hanzi: '我是她的朋友。我下午再给她打电话。', pinyin: 'wǒ shì tā de péng you. wǒ xià wǔ zài gěi tā dǎ diàn huà.', translation: 'I am her friend. I will call her again in the afternoon.' },
      { character: 'B', hanzi: '好的。再见。', pinyin: 'hǎo de. zài jiàn.', translation: 'Okay. Goodbye.' }
    ],
    vocabularyExplanation: [
      { hanzi: '喂 (wéi)', pinyin: 'wéi', english: 'hello (on the phone)' },
      { hanzi: '在吗 (zài ma)', pinyin: 'zài ma', english: 'Is...there? / Are you there?' },
      { hanzi: '再 (zài)', pinyin: 'zài', english: 'again' },
      { hanzi: '给 (gěi)', pinyin: 'gěi', english: 'to; for (preposition)' },
      { hanzi: '打电话 (dǎ diàn huà)', pinyin: 'dǎ diàn huà', english: 'to make a phone call' },
      { hanzi: '再见 (zài jiàn)', pinyin: 'zài jiàn', english: 'goodbye' }
    ],
    grammarPoint: 'Calling Someone: 给...打电话 (gěi...dǎ diànhuà)',
    structure: '给 (gěi) + Person + 打电话 (dǎ diànhuà)',
    explanation: 'To say you are calling a specific person, you use the structure "给 (gěi) + person + 打电话 (dǎ diànhuà)". Here, "给" functions as a preposition meaning "to". It specifies the recipient of the action (the phone call).',
    examples: [
      { hanzi: '我想给妈妈打个电话。', pinyin: 'wǒ xiǎng gěi mā ma dǎ ge diàn huà.', translation: 'I want to give my mom a call.' },
      { hanzi: '他昨天没给我打电话。', pinyin: 'tā zuó tiān méi gěi wǒ dǎ diàn huà.', translation: 'He didn\'t call me yesterday.' }
    ],
    hskLevel: 1
  },
  {
    id: 'lesson30',
    title: 'Lesson 30: Expressing Affection with 爱 (ài)',
    description: 'Learn how to use the verb "爱" (ài) to express love and deep affection.',
    content: 'This final HSK 1 lesson covers the verb "爱" (ài). You will learn the difference between the strong emotion of "爱" (love) and the general preference of "喜欢" (like), a key cultural and linguistic distinction.',
    dialogue: [
      { character: 'A', hanzi: '这是你的小猫吗？', pinyin: 'zhè shì nǐ de xiǎo māo ma?', translation: 'Is this your kitten?' },
      { character: 'B', hanzi: '是，它很可爱。我爱我的小猫。', pinyin: 'shì, tā hěn kě ài. wǒ ài wǒ de xiǎo māo.', translation: 'Yes, it is very cute. I love my kitten.' },
      { character: 'A', hanzi: '我也爱小动物。你爱喝中国茶吗？', pinyin: 'wǒ yě ài xiǎo dòng wù. nǐ ài hē zhōng guó chá ma?', translation: 'I love small animals too. Do you love drinking Chinese tea?' },
      { character: 'B', hanzi: '我不爱喝茶，但是我喜欢喝。', pinyin: 'wǒ bù ài hē chá, dàn shì wǒ xǐ huān hē.', translation: 'I don\'t "love" drinking tea, but I like drinking it.' }
    ],
    vocabularyExplanation: [
      { hanzi: '爱 (ài)', pinyin: 'ài', english: 'to love' },
      { hanzi: '小猫 (xiǎo māo)', pinyin: 'xiǎo māo', english: 'kitten, cat' },
      { hanzi: '可爱 (kě ài)', pinyin: 'kě ài', english: 'cute, lovely' },
      { hanzi: '动物 (dòng wù)', pinyin: 'dòng wù', english: 'animal' },
      { hanzi: '喜欢 (xǐ huān)', pinyin: 'xǐ huān', english: 'to like' }
    ],
    grammarPoint: 'Differentiating 爱 (ài) and 喜欢 (xǐhuān)',
    structure: '爱 (for deep affection) vs. 喜欢 (for general preference)',
    explanation: '"爱" (ài) signifies a deep, strong emotional connection. It\'s used for family, partners, pets, and your country. "喜欢" (xǐhuān) signifies a general liking or preference. It\'s used for hobbies, food, colors, etc. Using "爱" for something like tea or a book can sound overly dramatic, so "喜欢" is more appropriate in those cases.',
    examples: [
      { hanzi: '我爱我的爸爸妈妈。', pinyin: 'wǒ ài wǒ de bà ba mā ma.', translation: 'I love my dad and mom.' },
      { hanzi: '我喜欢吃米饭，但是我不爱吃米饭。', pinyin: 'wǒ xǐ huān chī mǐ fàn, dàn shì wǒ bù ài chī mǐ fàn.', translation: 'I like to eat rice, but I don\'t love to eat rice.' }
    ],
    hskLevel: 1
  },
  {
    id: "hsk2-lesson1",
    title: "Lesson 1: My Family and Work (我的家庭和工作)",
    description: "Expand your vocabulary for family members and learn to talk about your spouse, children, and workplace.",
    content: "Building on HSK 1, this lesson introduces new words for family like 'husband' (丈夫) and 'wife' (妻子). You'll practice describing your family and where you work in more detail.",
    dialogue: [
      { character: "A", hanzi: "你丈夫在哪儿工作？", pinyin: "nǐ zhàng fu zài nǎr gōng zuò?", translation: "Where does your husband work?" },
      { character: "B", hanzi: "他在我们公司工作。他每天早上八点上班。", pinyin: "tā zài wǒ men gōng sī gōng zuò. tā měi tiān zǎo shang bā diǎn shàng bān.", translation: "He works at our company. He starts work at 8 AM every day." },
      { character: "A", hanzi: "你的孩子多大了？", pinyin: "nǐ de hái zi duō dà le?", translation: "How old is your child?" },
      { character: "B", hanzi: "她七岁了，她很喜欢唱歌、跳舞。", pinyin: "tā qī suì le, tā hěn xǐ huān chàng gē, tiào wǔ.", translation: "She is seven years old. She really likes singing and dancing." }
    ],
    vocabularyExplanation: [
      { hanzi: "丈夫", pinyin: "zhàng fu", english: "husband" },
      { hanzi: "公司", pinyin: "gōng sī", english: "company" },
      { hanzi: "上班", pinyin: "shàng bān", english: "to go to work" },
      { hanzi: "孩子", pinyin: "hái zi", english: "child" },
      { hanzi: "唱歌", pinyin: "chàng gē", english: "to sing" },
      { hanzi: "跳舞", pinyin: "tiào wǔ", english: "to dance" },
      { hanzi: "妻子", pinyin: "qī zi", english: "wife" }
    ],
    grammarPoint: "Using '从...到...' (cóng...dào...) for time ranges",
    structure: "从 + Time A + 到 + Time B",
    explanation: "This structure is used to express a duration from a starting point to an ending point, similar to 'from...to...' in English. It's commonly used for work hours, school schedules, or opening times.",
    examples: [
      { hanzi: "我每天从早上九点工作到下午五点。", pinyin: "wǒ měi tiān cóng zǎo shang jiǔ diǎn gōng zuò dào xià wǔ wǔ diǎn.", "translation": "I work from 9 AM to 5 PM every day." },
      { hanzi: "商店从上午十点到晚上十点开门。", pinyin: "shāng diàn cóng shàng wǔ shí diǎn dào wǎn shang shí diǎn kāi mén.", "translation": "The store is open from 10 AM to 10 PM." }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson2",
    title: "Lesson 2: Shopping and Prices (买东西和价格)",
    description: "Learn how to ask for prices and bargain in simple terms.",
    content: "This lesson focuses on practical vocabulary for shopping, including how to ask 'how much' and express that something is too expensive.",
    dialogue: [
      { character: "A", hanzi: "这个杯子多少钱？", pinyin: "zhè ge bēi zi duō shǎo qián?", translation: "How much is this cup?" },
      { character: "B", hanzi: "十八块。", pinyin: "shí bā kuài.", translation: "Eighteen kuai." },
      { character: "A", hanzi: "太贵了，便宜一点儿，可以吗？", pinyin: "tài guì le, pián yi yì diǎnr, kě yǐ ma?", translation: "That's too expensive. Can it be a little cheaper?" },
      { character: "B", hanzi: "好吧，十五块。", pinyin: "hǎo ba, shí wǔ kuài.", translation: "Alright, fifteen kuai." }
    ],
    vocabularyExplanation: [
      { hanzi: "杯子", pinyin: "bēi zi", english: "cup" },
      { hanzi: "多少钱", pinyin: "duō shǎo qián", english: "how much money" },
      { hanzi: "块", pinyin: "kuài", english: "measure word for money" },
      { hanzi: "贵", pinyin: "guì", english: "expensive" },
      { hanzi: "便宜", pinyin: "pián yi", english: "cheap" },
      { hanzi: "可以", pinyin: "kě yǐ", english: "can, may" }
    ],
    grammarPoint: "Using '太...了' (tài...le) for emphasis",
    structure: "太 + Adjective + 了",
    explanation: "This structure is used to express 'too' or 'very' and indicates a high degree. It often carries a sense of exclamation or complaint.",
    examples: [
      { hanzi: "这个菜太辣了。", pinyin: "zhè ge cài tài là le.", translation: "This dish is too spicy." },
      { hanzi: "今天天气太好了！", pinyin: "jīn tiān tiān qì tài hǎo le!", translation: "The weather is so good today!" }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson3",
    title: "Lesson 3: Talking About Hobbies (谈论爱好)",
    description: "Discuss your interests and hobbies like sports, reading, and watching movies.",
    content: "Learn the vocabulary and sentence patterns to talk about what you like to do in your free time, such as playing sports, reading, or watching movies.",
    dialogue: [
      { character: "A", hanzi: "你有什么爱好？", pinyin: "nǐ yǒu shén me ài hào?", translation: "What hobbies do you have?" },
      { character: "B", hanzi: "我喜欢看书和看电影。你呢？", pinyin: "wǒ xǐ huān kàn shū hé kàn diàn yǐng. nǐ ne?", translation: "I like reading books and watching movies. How about you?" },
      { character: "A", hanzi: "我喜欢运动，特别是踢足球。", pinyin: "wǒ xǐ huān yùn dòng, tè bié shì tī zú qiú.", translation: "I like sports, especially playing soccer." },
      { character: "B", hanzi: "真的吗？我也觉得踢足球很有意思。", pinyin: "zhēn de ma? wǒ yě jué de tī zú qiú hěn yǒu yì si.", translation: "Really? I also think playing soccer is very interesting." }
    ],
    vocabularyExplanation: [
      { hanzi: "爱好", pinyin: "ài hào", english: "hobby" },
      { hanzi: "看书", pinyin: "kàn shū", english: "to read books" },
      { hanzi: "看电影", pinyin: "kàn diàn yǐng", english: "to watch movies" },
      { hanzi: "运动", pinyin: "yùn dòng", english: "sports, exercise" },
      { hanzi: "踢足球", pinyin: "tī zú qiú", english: "to play soccer" },
      { hanzi: "觉得", pinyin: "jué de", english: "to feel, to think" },
      { hanzi: "有意思", pinyin: "yǒu yì si", english: "interesting" }
    ],
    grammarPoint: "Asking questions with '...呢?' (...ne?)",
    structure: "Statement + ...呢?",
    explanation: "'呢' (ne) is often used at the end of a question to ask 'how about...?' or 'what about...?'. It's a way to return a question that has just been asked.",
    examples: [
      { hanzi: "我很好，你呢？", pinyin: "wǒ hěn hǎo, nǐ ne?", translation: "I am fine, and you?" },
      { hanzi: "我想喝茶，你呢？", pinyin: "wǒ xiǎng hē chá, nǐ ne?", translation: "I want to drink tea, how about you?" }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson4",
    title: "Lesson 4: Making Phone Calls (打电话)",
    description: "Learn the basics of making and receiving phone calls in Chinese.",
    content: "This lesson covers essential phrases for phone conversations, from answering the phone with '喂' to asking to speak with someone.",
    dialogue: [
      { character: "A", hanzi: "喂，请问王老师在吗？", pinyin: "wèi, qǐng wèn wáng lǎo shī zài ma?", translation: "Hello, may I ask if Teacher Wang is in?" },
      { character: "B", hanzi: "他不在，他出去了。你下午再打吧。", pinyin: "tā bú zài, tā chū qù le. nǐ xià wǔ zài dǎ ba.", translation: "He is not in, he went out. You can call again in the afternoon." },
      { character: "A", hanzi: "好的，谢谢你。", pinyin: "hǎo de, xiè xiè nǐ.", translation: "Okay, thank you." },
      { character: "B", hanzi: "不客气。", pinyin: "bú kè qì.", translation: "You're welcome." }
    ],
    vocabularyExplanation: [
      { hanzi: "喂", pinyin: "wèi", english: "hello (on the phone)" },
      { hanzi: "请问", pinyin: "qǐng wèn", english: "excuse me, may I ask" },
      { hanzi: "老师", pinyin: "lǎo shī", english: "teacher" },
      { hanzi: "出去", pinyin: "chū qù", english: "to go out" },
      { hanzi: "再", pinyin: "zài", english: "again" },
      { hanzi: "打", pinyin: "dǎ", english: "to hit, to make (a call)" },
      { hanzi: "吧", pinyin: "ba", english: "particle for suggestions" }
    ],
    grammarPoint: "The directional complement '出去' (chū qù)",
    structure: "Verb + 出去",
    explanation: "'出去' (chū qù) indicates movement from inside to outside, away from the speaker. It follows a verb to show the direction of the action.",
    examples: [
      { hanzi: "他跑出去了。", pinyin: "tā pǎo chū qù le.", translation: "He ran outside." },
      { hanzi: "请你拿出你的书。", pinyin: "qǐng nǐ ná chū qù nǐ de shū.", translation: "Please take out your book." }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson5",
    title: "Lesson 5: Asking for Directions (问路)",
    description: "Learn how to ask for and give simple directions.",
    content: "This lesson introduces key vocabulary and sentence structures for navigating, including words for 'left', 'right', 'front', and 'back'.",
    dialogue: [
      { character: "A", hanzi: "请问，去火车站怎么走？", pinyin: "qǐng wèn, qù huǒ chē zhàn zěn me zǒu?", translation: "Excuse me, how do I get to the train station?" },
      { character: "B", hanzi: "你从这儿一直往前走，到第一个路口向右拐。", pinyin: "nǐ cóng zhèr yì zhí wǎng qián zǒu, dào dì yī ge lù kǒu xiàng yòu guǎi.", translation: "From here, go straight ahead, and turn right at the first intersection." },
      { character: "A", hanzi: "离这儿远吗？", pinyin: "lí zhèr yuǎn ma?", translation: "Is it far from here?" },
      { character: "B", hanzi: "不远，走路十分钟就到了。", pinyin: "bù yuǎn, zǒu lù shí fēn zhōng jiù dào le.", translation: "Not far, it's a ten-minute walk." }
    ],
    vocabularyExplanation: [
      { hanzi: "火车站", pinyin: "huǒ chē zhàn", english: "train station" },
      { hanzi: "怎么走", pinyin: "zěn me zǒu", english: "how to get to" },
      { hanzi: "一直", pinyin: "yì zhí", english: "straight" },
      { hanzi: "往", pinyin: "wǎng", english: "towards" },
      { hanzi: "右", pinyin: "yòu", english: "right" },
      { hanzi: "拐", pinyin: "guǎi", english: "to turn" },
      { hanzi: "离", pinyin: "lí", english: "from (distance)" },
      { hanzi: "远", pinyin: "yuǎn", english: "far" }
    ],
    grammarPoint: "Using '离' (lí) to talk about distance",
    structure: "A + 离 + B + Adjective (远/近)",
    explanation: "'离' (lí) is a preposition used to express the distance between two places. It is often followed by adjectives like '远' (yuǎn, far) or '近' (jìn, near).",
    examples: [
      { hanzi: "我家离公司很近。", pinyin: "wǒ jiā lí gōng sī hěn jìn.", translation: "My home is very close to the company." },
      { hanzi: "学校离火车站有多远？", pinyin: "xué xiào lí huǒ chē zhàn yǒu duō yuǎn?", translation: "How far is the school from the train station?" }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson6",
    title: "Lesson 6: Daily Routine (日常生活)",
    description: "Describe your daily activities from morning to night.",
    content: "This lesson focuses on verbs and time words to describe a typical day, including getting up, eating meals, and going to bed.",
    dialogue: [
      { character: "A", hanzi: "你每天早上几点起床？", pinyin: "nǐ měi tiān zǎo shang jǐ diǎn qǐ chuáng?", translation: "What time do you get up every morning?" },
      { character: "B", hanzi: "我早上七点起床，然后吃早饭。", pinyin: "wǒ zǎo shang qī diǎn qǐ chuáng, rán hòu chī zǎo fàn.", translation: "I get up at 7 AM, then I eat breakfast." },
      { character: "A", hanzi: "你晚上常常做什么？", pinyin: "nǐ wǎn shang cháng cháng zuò shén me?", translation: "What do you often do in the evening?" },
      { character: "B", hanzi: "我常常看电视和上网，十一点睡觉。", pinyin: "wǒ cháng cháng kàn diàn shì hé shàng wǎng, shí yī diǎn shuì jiào.", translation: "I often watch TV and surf the internet, and go to bed at 11." }
    ],
    vocabularyExplanation: [
      { hanzi: "起床", pinyin: "qǐ chuáng", english: "to get up" },
      { hanzi: "然后", pinyin: "rán hòu", english: "then, afterwards" },
      { hanzi: "早饭", pinyin: "zǎo fàn", english: "breakfast" },
      { hanzi: "常常", pinyin: "cháng cháng", english: "often" },
      { hanzi: "上网", pinyin: "shàng wǎng", english: "to go online" },
      { hanzi: "睡觉", pinyin: "shuì jiào", english: "to sleep" }
    ],
    grammarPoint: "Using '然后' (rán hòu) to sequence actions",
    structure: "Action 1, 然后 + Action 2",
    explanation: "'然后' (rán hòu) means 'then' or 'afterwards' and is used to connect two actions in chronological order. It helps to structure a narrative of events.",
    examples: [
      { hanzi: "我先做作业，然后去公园玩儿。", pinyin: "wǒ xiān zuò zuò yè, rán hòu qù gōng yuán wánr.", translation: "I do my homework first, and then I go to the park to play." },
      { hanzi: "我们吃了晚饭，然后去看电影。", pinyin: "wǒ men chī le wǎn fàn, rán hòu qù kàn diàn yǐng.", translation: "We had dinner, and then we went to see a movie." }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson7",
    title: "Lesson 7: Taking Transportation (乘坐交通工具)",
    description: "Learn to talk about different modes of transportation.",
    content: "This lesson introduces vocabulary for common transportation methods like buses, subways, and taxis, and how to say you are taking them.",
    dialogue: [
      { character: "A", hanzi: "你每天怎么去公司？", pinyin: "nǐ měi tiān zěn me qù gōng sī?", translation: "How do you go to the company every day?" },
      { character: "B", hanzi: "我坐公共汽车去。", pinyin: "wǒ zuò gōng gòng qì chē qù.", translation: "I take the bus." },
      { character: "A", hanzi: "坐公共汽车要多长时间？", pinyin: "zuò gōng gòng qì chē yào duō cháng shí jiān?", translation: "How long does it take by bus?" },
      { character: "B", hanzi: "大概三十分钟。", pinyin: "dà gài sān shí fēn zhōng.", translation: "About 30 minutes." }
    ],
    vocabularyExplanation: [
      { hanzi: "怎么", pinyin: "zěn me", english: "how" },
      { hanzi: "坐", pinyin: "zuò", english: "to sit, to take (transport)" },
      { hanzi: "公共汽车", pinyin: "gōng gòng qì chē", english: "bus" },
      { hanzi: "多长时间", pinyin: "duō cháng shí jiān", english: "how long (time)" },
      { hanzi: "大概", pinyin: "dà gài", english: "about, approximately" },
      { hanzi: "分钟", pinyin: "fēn zhōng", english: "minute" },
      { hanzi: "地铁", pinyin: "dì tiě", english: "subway" }
    ],
    grammarPoint: "Asking 'how' with '怎么' (zěn me)",
    structure: "怎么 + Verb",
    explanation: "'怎么' (zěn me) is a question pronoun used to ask about the manner or method of an action. It is placed before the verb.",
    examples: [
      { hanzi: "这个汉字怎么写？", pinyin: "zhè ge hàn zì zěn me xiě?", translation: "How do you write this Chinese character?" },
      { hanzi: "你今天怎么没来上课？", pinyin: "nǐ jīn tiān zěn me méi lái shàng kè?", translation: "How come you didn't come to class today?" }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson8",
    title: "Lesson 8: Weather and Seasons (天气和季节)",
    description: "Discuss the weather and the four seasons.",
    content: "Learn to describe weather conditions like sunny, rainy, and cold, and talk about the different seasons.",
    dialogue: [
      { character: "A", hanzi: "今天天气怎么样？", pinyin: "jīn tiān tiān qì zěn me yàng?", translation: "How is the weather today?" },
      { character: "B", hanzi: "今天是晴天，不冷也不热。", pinyin: "jīn tiān shì qíng tiān, bù lěng yě bù rè.", translation: "Today is a sunny day, not cold and not hot." },
      { character: "A", hanzi: "你最喜欢哪个季节？", pinyin: "nǐ zuì xǐ huān nǎ ge jì jié?", translation: "Which season do you like the most?" },
      { character: "B", hanzi: "我最喜欢春天，因为很暖和。", pinyin: "wǒ zuì xǐ huān chūn tiān, yīn wèi hěn nuǎn huo.", translation: "I like spring the most, because it's very warm." }
    ],
    vocabularyExplanation: [
      { hanzi: "天气", pinyin: "tiān qì", english: "weather" },
      { hanzi: "晴天", pinyin: "qíng tiān", english: "sunny day" },
      { hanzi: "冷", pinyin: "lěng", english: "cold" },
      { hanzi: "热", pinyin: "rè", english: "hot" },
      { hanzi: "最", pinyin: "zuì", english: "most" },
      { hanzi: "季节", pinyin: "jì jié", english: "season" },
      { hanzi: "春天", pinyin: "chūn tiān", english: "spring" },
      { hanzi: "因为", pinyin: "yīn wèi", english: "because" }
    ],
    grammarPoint: "Using '最' (zuì) for superlatives",
    structure: "最 + Adjective/Verb",
    explanation: "'最' (zuì) is used to form the superlative degree, equivalent to '-est' or 'most' in English. It indicates the highest degree among a group.",
    examples: [
      { hanzi: "他是我最好的朋友。", pinyin: "tā shì wǒ zuì hǎo de péng you.", translation: "He is my best friend." },
      { hanzi: "我最喜欢吃米饭。", pinyin: "wǒ zuì xǐ huān chī mǐ fàn.", translation: "I like eating rice the most." }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson9",
    title: "Lesson 9: Invitations (邀请)",
    description: "Learn how to invite someone to do something and respond to invitations.",
    content: "This lesson provides phrases for making plans with friends, such as inviting them to dinner or a movie, and accepting or declining invitations.",
    dialogue: [
      { character: "A", hanzi: "你明天晚上有时间吗？", pinyin: "nǐ míng tiān wǎn shang yǒu shí jiān ma?", translation: "Do you have time tomorrow evening?" },
      { character: "B", hanzi: "有啊，怎么了？", pinyin: "yǒu a, zěn me le?", translation: "Yes, what's up?" },
      { character: "A", hanzi: "我想请你吃饭，怎么样？", pinyin: "wǒ xiǎng qǐng nǐ chī fàn, zěn me yàng?", translation: "I'd like to invite you to dinner, how about it?" },
      { character: "B", hanzi: "太好了！谢谢你的邀请。", pinyin: "tài hǎo le! xiè xiè nǐ de yāo qǐng.", translation: "Great! Thank you for your invitation." }
    ],
    vocabularyExplanation: [
      { hanzi: "明天", pinyin: "míng tiān", english: "tomorrow" },
      { hanzi: "时间", pinyin: "shí jiān", english: "time" },
      { hanzi: "请", pinyin: "qǐng", english: "to invite, please" },
      { hanzi: "吃饭", pinyin: "chī fàn", english: "to have a meal" },
      { hanzi: "怎么样", pinyin: "zěn me yàng", english: "how about it?" },
      { hanzi: "邀请", pinyin: "yāo qǐng", english: "invitation, to invite" }
    ],
    grammarPoint: "Making suggestions with '...怎么样?' (...zěn me yàng?)",
    structure: "Suggestion + 怎么样?",
    explanation: "'怎么样?' (zěn me yàng?) is used at the end of a sentence to ask for someone's opinion or suggestion, similar to 'how about it?' or 'is that okay?'.",
    examples: [
      { hanzi: "我们一起去看电影，怎么样？", pinyin: "wǒ men yì qǐ qù kàn diàn yǐng, zěn me yàng?", translation: "Let's go watch a movie together, how about it?" },
      { hanzi: "明天下午三点在咖啡馆见面，怎么样？", pinyin: "míng tiān xià wǔ sān diǎn zài kā fēi guǎn jiàn miàn, zěn me yàng?", translation: "Let's meet at the coffee shop at 3 PM tomorrow, is that okay?" }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson10",
    title: "Lesson 10: Health and Sickness (健康和生病)",
    description: "Learn to talk about feeling unwell and seeing a doctor.",
    content: "This lesson covers essential vocabulary for describing health problems, such as having a fever or a headache, and phrases used at a hospital.",
    dialogue: [
      { character: "A", hanzi: "你怎么了？看起来不舒服。", pinyin: "nǐ zěn me le? kàn qǐ lái bù shū fu.", translation: "What's wrong with you? You don't look well." },
      { character: "B", hanzi: "我有点儿发烧，还头疼。", pinyin: "wǒ yǒu diǎnr fā shāo, hái tóu téng.", translation: "I have a bit of a fever, and also a headache." },
      { character: "A", hanzi: "你去看医生了吗？要多喝水，多休息。", pinyin: "nǐ qù kàn yī shēng le ma? yào duō hē shuǐ, duō xiū xi.", translation: "Have you seen a doctor? You should drink more water and get more rest." },
      { character: "B", hanzi: "我吃了药了。谢谢你的关心。", pinyin: "wǒ chī le yào le. xiè xiè nǐ de guān xīn.", translation: "I took some medicine. Thank you for your concern." }
    ],
    vocabularyExplanation: [
      { hanzi: "不舒服", pinyin: "bù shū fu", english: "unwell, uncomfortable" },
      { hanzi: "发烧", pinyin: "fā shāo", english: "to have a fever" },
      { hanzi: "头疼", pinyin: "tóu téng", english: "headache" },
      { hanzi: "看医生", pinyin: "kàn yī shēng", english: "to see a doctor" },
      { hanzi: "喝水", pinyin: "hē shuǐ", english: "to drink water" },
      { hanzi: "休息", pinyin: "xiū xi", english: "to rest" },
      { hanzi: "药", pinyin: "yào", english: "medicine" }
    ],
    grammarPoint: "Indicating a change of state with '了' (le)",
    structure: "Subject + Verb/Adjective + 了",
    explanation: "One use of '了' (le) is to indicate that a new situation has appeared or a change has occurred. It's often used when someone gets sick, the weather changes, etc.",
    examples: [
      { hanzi: "下雨了。", pinyin: "xià yǔ le.", translation: "It's raining now (it wasn't before)." },
      { hanzi: "我没钱了。", pinyin: "wǒ méi qián le.", translation: "I don't have any money anymore (I had some before)." }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson11",
    title: "Lesson 11: At the Airport (在机场)",
    description: "Learn vocabulary and phrases needed for checking in and boarding a plane.",
    content: "This lesson prepares you for air travel, covering terms for passport, ticket, and asking for flight information.",
    dialogue: [
      { character: "A", hanzi: "你好，请给我你的护照和机票。", pinyin: "nǐ hǎo, qǐng gěi wǒ nǐ de hù zhào hé jī piào.", translation: "Hello, please give me your passport and ticket." },
      { character: "B", hanzi: "好的，给你。我的飞机什么时候起飞？", pinyin: "hǎo de, gěi nǐ. wǒ de fēi jī shén me shí hou qǐ fēi?", translation: "Okay, here you are. When does my plane take off?" },
      { character: "A", hanzi: "上午十点二十分起飞。你还有一个小时。", pinyin: "shàng wǔ shí diǎn èr shí fēn qǐ fēi. nǐ hái yǒu yí ge xiǎo shí.", translation: "It takes off at 10:20 AM. You still have one hour." },
      { character: "B", hanzi: "谢谢！", pinyin: "xiè xiè!", translation: "Thank you!" }
    ],
    vocabularyExplanation: [
      { hanzi: "机场", pinyin: "jī chǎng", english: "airport" },
      { hanzi: "护照", pinyin: "hù zhào", english: "passport" },
      { hanzi: "机票", pinyin: "jī piào", english: "plane ticket" },
      { hanzi: "飞机", pinyin: "fēi jī", english: "airplane" },
      { hanzi: "起飞", pinyin: "qǐ fēi", english: "to take off" },
      { hanzi: "小时", pinyin: "xiǎo shí", english: "hour" }
    ],
    grammarPoint: "Using '...的时候' (...de shí hou) for 'when...'",
    structure: "Action/Event + 的时候, ...",
    explanation: "The structure '...的时候' (de shí hou) is used to mean 'when' or 'during the time that...'. It connects a time clause to a main clause.",
    examples: [
      { hanzi: "我到北京的时候，会给你打电话。", pinyin: "wǒ dào běi jīng de shí hou, huì gěi nǐ dǎ diàn huà.", translation: "When I arrive in Beijing, I will call you." },
      { hanzi: "我七岁的时候，开始学习汉语。", pinyin: "wǒ qī suì de shí hou, kāi shǐ xué xí hàn yǔ.", translation: "When I was seven years old, I started learning Chinese." }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson12",
    title: "Lesson 12: Describing People (介绍人)",
    description: "Learn to describe people's appearance, such as their height and hair.",
    content: "This lesson provides adjectives and sentence patterns to talk about what people look like, focusing on comparisons.",
    dialogue: [
      { character: "A", hanzi: "你看，那个眼睛大大的女孩子是谁？", pinyin: "nǐ kàn, nà ge yǎn jing dà da de nǚ hái zi shì shéi?", translation: "Look, who is that girl with the big eyes?" },
      { character: "B", hanzi: "她是我姐姐。她比我高。", pinyin: "tā shì wǒ jiě jie. tā bǐ wǒ gāo.", translation: "She is my older sister. She is taller than me." },
      { character: "A", hanzi: "你姐姐的头发真漂亮！", pinyin: "nǐ jiě jie de tóu fa zhēn piào liang!", translation: "Your sister's hair is really beautiful!" },
      { character: "B", hanzi: "是啊，她的头发比我的长。", pinyin: "shì a, tā de tóu fa bǐ wǒ de cháng.", translation: "Yes, her hair is longer than mine." }
    ],
    vocabularyExplanation: [
      { hanzi: "眼睛", pinyin: "yǎn jing", english: "eye" },
      { hanzi: "女孩子", pinyin: "nǚ hái zi", english: "girl" },
      { hanzi: "姐姐", pinyin: "jiě jie", english: "older sister" },
      { hanzi: "高", pinyin: "gāo", english: "tall, high" },
      { hanzi: "头发", pinyin: "tóu fa", english: "hair" },
      { hanzi: "漂亮", pinyin: "piào liang", english: "beautiful" },
      { hanzi: "长", pinyin: "cháng", english: "long" }
    ],
    grammarPoint: "Making comparisons with '比' (bǐ)",
    structure: "Noun A + 比 + Noun B + Adjective",
    explanation: "The '比' (bǐ) structure is the most common way to compare two things. Note that adverbs like '很' (hěn) cannot be used to modify the adjective in a '比' sentence.",
    examples: [
      { hanzi: "今天比昨天热。", pinyin: "jīn tiān bǐ zuó tiān rè.", translation: "Today is hotter than yesterday." },
      { hanzi: "哥哥比弟弟跑得快。", pinyin: "gē ge bǐ dì di pǎo de kuài.", translation: "The older brother runs faster than the younger brother." }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson13",
    title: "Lesson 13: Talking About Past Events (谈论过去)",
    description: "Learn how to ask about and describe the details of past events.",
    content: "This lesson introduces the '是...的' (shì...de) construction, which is used to emphasize details like the time, place, or manner of a completed action.",
    dialogue: [
      { character: "A", hanzi: "你是什么时候来中国的？", pinyin: "nǐ shì shén me shí hou lái zhōng guó de?", translation: "When did you come to China?" },
      { character: "B", hanzi: "我是去年九月来的。", pinyin: "wǒ shì qù nián jiǔ yuè lái de.", translation: "I came last September." },
      { character: "A", hanzi: "你是怎么来的？", pinyin: "nǐ shì zěn me lái de?", translation: "How did you come?" },
      { character: "B", hanzi: "我是坐飞机来的。", pinyin: "wǒ shì zuò fēi jī lái de.", translation: "I came by plane." }
    ],
    vocabularyExplanation: [
      { hanzi: "去年", pinyin: "qù nián", english: "last year" },
      { hanzi: "月", pinyin: "yuè", english: "month" },
      { hanzi: "来", pinyin: "lái", english: "to come" },
      { hanzi: "坐", pinyin: "zuò", english: "to sit, to take (transport)" },
      { hanzi: "中国", pinyin: "zhōng guó", english: "China" }
    ],
    grammarPoint: "Emphasizing details with '是...的' (shì...de)",
    structure: "Subject + 是 + Detail (Time/Place/Manner) + Verb + 的",
    explanation: "This pattern is used to ask for or emphasize specific information about a past action. It focuses on the 'who, what, when, where, why, how' of something that has already happened.",
    examples: [
      { hanzi: "这件衣服是在那个商店买的。", pinyin: "zhè jiàn yī fu shì zài nà ge shāng diàn mǎi de.", translation: "This piece of clothing was bought at that store." },
      { hanzi: "他是和朋友一起来的。", pinyin: "tā shì hé péng you yì qǐ lái de.", translation: "He came together with friends." }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson14",
    title: "Lesson 14: Giving Advice (给建议)",
    description: "Learn how to tell people not to do something and give simple advice.",
    content: "This lesson focuses on using '别...了' to gently command or advise someone to stop an action, and other useful phrases for giving suggestions.",
    dialogue: [
      { character: "A", hanzi: "外面下雪了，天气很冷。", pinyin: "wài miàn xià xuě le, tiān qì hěn lěng.", translation: "It's snowing outside, the weather is very cold." },
      { character: "B", hanzi: "真的吗？我还想出去玩儿呢。", pinyin: "zhēn de ma? wǒ hái xiǎng chū qu wánr ne.", translation: "Really? I was still thinking of going out to play." },
      { character: "A", hanzi: "别去了，在家看电视吧。", pinyin: "bié qù le, zài jiā kàn diàn shì ba.", translation: "Don't go, just watch TV at home." },
      { character: "B", hanzi: "好吧，听你的。", pinyin: "hǎo ba, tīng nǐ de.", translation: "Alright, I'll listen to you." }
    ],
    vocabularyExplanation: [
      { hanzi: "下雪", pinyin: "xià xuě", english: "to snow" },
      { hanzi: "外面", pinyin: "wài miàn", english: "outside" },
      { hanzi: "玩儿", pinyin: "wánr", english: "to play" },
      { hanzi: "别", pinyin: "bié", english: "don't" },
      { hanzi: "电视", pinyin: "diàn shì", english: "television" },
      { hanzi: "听", pinyin: "tīng", english: "to listen" }
    ],
    grammarPoint: "Telling someone not to do something with '别...了' (bié...le)",
    structure: "别 + Verb + 了",
    explanation: "This structure is a common way to give a negative command or suggestion, meaning 'don't do...'. The '了' at the end softens the tone.",
    examples: [
      { hanzi: "别看手机了，对眼睛不好。", pinyin: "bié kàn shǒu jī le, duì yǎn jing bù hǎo.", translation: "Don't look at your phone, it's not good for your eyes." },
      { hanzi: "太晚了，别喝咖啡了。", pinyin: "tài wǎn le, bié hē kā fēi le.", translation: "It's too late, don't drink coffee." }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson15",
    title: "Lesson 15: Something is About to Happen (快要发生了)",
    description: "Learn to express that an action or event is about to happen soon.",
    content: "This lesson introduces the '要...了' pattern to talk about the immediate future, such as an upcoming trip or event.",
    dialogue: [
      { character: "A", hanzi: "快看，天阴了，要下雨了。", pinyin: "kuài kàn, tiān yīn le, yào xià yǔ le.", translation: "Look quickly, the sky has become overcast, it's going to rain." },
      { character: "B", hanzi: "是啊，我们快点儿回家吧。", pinyin: "shì a, wǒ men kuài diǎnr huí jiā ba.", translation: "Yeah, let's go home quickly." },
      { character: "A", hanzi: "电影要开始了，你买票了吗？", pinyin: "diàn yǐng yào kāi shǐ le, nǐ mǎi piào le ma?", translation: "The movie is about to start, did you buy the tickets?" },
      { character: "B", hanzi: "我买了，我们进去吧。", pinyin: "wǒ mǎi le, wǒ men jìn qù ba.", translation: "I bought them, let's go in." }
    ],
    vocabularyExplanation: [
      { hanzi: "阴", pinyin: "yīn", english: "overcast" },
      { hanzi: "下雨", pinyin: "xià yǔ", english: "to rain" },
      { hanzi: "快点儿", pinyin: "kuài diǎnr", english: "quickly" },
      { hanzi: "开始", pinyin: "kāi shǐ", english: "to start" },
      { hanzi: "票", pinyin: "piào", english: "ticket" },
      { hanzi: "进去", pinyin: "jìn qù", english: "to go in" }
    ],
    grammarPoint: "Indicating imminent action with '(快)要...了' ((kuài) yào...le)",
    structure: "(快)要 + Verb + 了",
    explanation: "This structure indicates that an action or event is about to happen very soon. Adding '快' (kuài) emphasizes the immediacy.",
    examples: [
      { hanzi: "火车要开了。", pinyin: "huǒ chē yào kāi le.", translation: "The train is about to depart." },
      { hanzi: "快要过新年了，真高兴！", pinyin: "kuài yào guò xīn nián le, zhēn gāo xìng!", translation: "The New Year is coming soon, I'm so happy!" }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson16",
    title: "Lesson 16: Abilities and Skills (能力和技能)",
    description: "Talk about what you can and cannot do using '会'.",
    content: "This lesson focuses on the modal verb '会' (huì) to express learned skills, such as speaking a language, driving, or cooking.",
    dialogue: [
      { character: "A", hanzi: "你会说汉语吗？", pinyin: "nǐ huì shuō hàn yǔ ma?", translation: "Can you speak Chinese?" },
      { character: "B", hanzi: "我会说一点儿，说得不太好。", pinyin: "wǒ huì shuō yì diǎnr, shuō de bú tài hǎo.", translation: "I can speak a little, but not very well." },
      { character: "A", hanzi: "你真棒！你会开车吗？", pinyin: "nǐ zhēn bàng! nǐ huì kāi chē ma?", translation: "You're great! Can you drive a car?" },
      { character: "B", hanzi: "我不会开车，我哥哥会。", pinyin: "wǒ bú huì kāi chē, wǒ gē ge huì.", translation: "I can't drive, my older brother can." }
    ],
    vocabularyExplanation: [
      { hanzi: "会", pinyin: "huì", english: "can, to know how to" },
      { hanzi: "说", pinyin: "shuō", english: "to speak" },
      { hanzi: "汉语", pinyin: "hàn yǔ", english: "Chinese language" },
      { hanzi: "棒", pinyin: "bàng", english: "great, awesome" },
      { hanzi: "开车", pinyin: "kāi chē", english: "to drive a car" },
      { hanzi: "哥哥", pinyin: "gē ge", english: "older brother" }
    ],
    grammarPoint: "Expressing ability with '会' (huì)",
    structure: "Subject + 会 + Verb (Phrase)",
    explanation: "'会' (huì) is a modal verb used to indicate a learned skill or ability. The negative form is '不会' (bú huì).",
    examples: [
      { hanzi: "他会做饭。", pinyin: "tā huì zuò fàn.", translation: "He knows how to cook." },
      { hanzi: "我不会用电脑。", pinyin: "wǒ bú huì yòng diàn nǎo.", translation: "I don't know how to use a computer." }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson17",
    title: "Lesson 17: At the Restaurant (在饭馆)",
    description: "Learn to order food and understand the waiter.",
    content: "This lesson focuses on practical restaurant scenarios and introduces resultative complements to confirm understanding or completion of an action.",
    dialogue: [
      { character: "A", hanzi: "服务员，点菜！", pinyin: "fú wù yuán, diǎn cài!", translation: "Waiter, we'd like to order!" },
      { character: "B", hanzi: "好的，这是菜单。你们看懂了吗？", pinyin: "hǎo de, zhè shì cài dān. nǐ men kàn dǒng le ma?", translation: "Okay, this is the menu. Can you understand it (by reading)?" },
      { character: "A", hanzi: "我们看懂了。我们要一个鱼和一个牛肉。", pinyin: "wǒ men kàn dǒng le. wǒ men yào yí ge yú hé yí ge niú ròu.", translation: "We understand it. We want one fish and one beef." },
      { character: "B", hanzi: "好的，我听见了。请等一会儿。", pinyin: "hǎo de, wǒ tīng jiàn le. qǐng děng yí huìr.", translation: "Okay, I've heard you. Please wait a moment." }
    ],
    vocabularyExplanation: [
      { hanzi: "服务员", pinyin: "fú wù yuán", english: "waiter, waitress" },
      { hanzi: "点菜", pinyin: "diǎn cài", english: "to order dishes" },
      { hanzi: "菜单", pinyin: "cài dān", english: "menu" },
      { hanzi: "懂", pinyin: "dǒng", english: "to understand" },
      { hanzi: "鱼", pinyin: "yú", english: "fish" },
      { hanzi: "牛肉", pinyin: "niú ròu", english: "beef" },
      { hanzi: "见", pinyin: "jiàn", english: "to see, (used as a result complement)" }
    ],
    grammarPoint: "Resultative Complements (e.g., 看懂, 听见)",
    structure: "Verb + Resultative Complement",
    explanation: "Resultative complements are words that follow a verb to show the result of the action. '懂' (dǒng) means 'to understand' as a result, while '见' (jiàn) can mean 'to perceive' as a result of looking or listening.",
    examples: [
      { hanzi: "我看见王老师了。", pinyin: "wǒ kàn jiàn wáng lǎo shī le.", translation: "I saw Teacher Wang." },
      { hanzi: "对不起，我没听懂你的问题。", pinyin: "duì bù qǐ, wǒ méi tīng dǒng nǐ de wèn tí.", translation: "Sorry, I didn't understand your question." }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson18",
    title: "Lesson 18: Celebrating a Birthday (过生日)",
    description: "Learn how to wish someone a happy birthday and talk about birthday celebrations.",
    content: "This lesson introduces vocabulary for birthdays, gifts, and expressing good wishes using '希望' (xīwàng).",
    dialogue: [
      { character: "A", hanzi: "小红，祝你生日快乐！", pinyin: "xiǎo hóng, zhù nǐ shēng rì kuài lè!", translation: "Xiao Hong, wish you a happy birthday!" },
      { character: "B", hanzi: "谢谢！你能来我太高兴了！", pinyin: "xiè xiè! nǐ néng lái wǒ tài gāo xìng le!", translation: "Thank you! I'm so happy you could come!" },
      { character: "A", hanzi: "这是我送给你的礼物，希望你喜欢。", pinyin: "zhè shì wǒ sòng gěi nǐ de lǐ wù, xī wàng nǐ xǐ huān.", translation: "This is the gift I'm giving you, I hope you like it." },
      { character: "B", hanzi: "谢谢！礼物很漂亮！", pinyin: "xiè xiè! lǐ wù hěn piào liang!", translation: "Thank you! The gift is very beautiful!" }
    ],
    vocabularyExplanation: [
      { hanzi: "祝", pinyin: "zhù", english: "to wish" },
      { hanzi: "生日", pinyin: "shēng rì", english: "birthday" },
      { hanzi: "快乐", pinyin: "kuài lè", english: "happy" },
      { hanzi: "送", pinyin: "sòng", english: "to give (as a gift)" },
      { hanzi: "礼物", pinyin: "lǐ wù", english: "gift, present" },
      { hanzi: "希望", pinyin: "xī wàng", english: "to hope, to wish" }
    ],
    grammarPoint: "Expressing hope with '希望' (xīwàng)",
    structure: "希望 + Subject + Verb/Clause",
    explanation: "'希望' (xīwàng) is a verb used to express a wish or hope. It is followed by a clause that describes what is being hoped for.",
    examples: [
      { hanzi: "我希望明天是个晴天。", pinyin: "wǒ xī wàng míng tiān shì ge qíng tiān.", translation: "I hope tomorrow is a sunny day." },
      { hanzi: "他希望能找到一个好工作。", pinyin: "tā xī wàng néng zhǎo dào yí ge hǎo gōng zuò.", translation: "He hopes to be able to find a good job." }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson19",
    title: "Lesson 19: As Soon As... (一...就...)",
    description: "Learn to connect two actions that happen in quick succession.",
    content: "This lesson teaches the '一...就...' (yī...jiù...) pattern, which is used to say that the second action happens immediately after the first.",
    dialogue: [
      { character: "A", hanzi: "你每天怎么上班？", pinyin: "nǐ měi tiān zěn me shàng bān?", translation: "How do you go to work every day?" },
      { character: "B", hanzi: "我坐地铁。我家离地铁站很近，我一出门就到。", pinyin: "wǒ zuò dì tiě. wǒ jiā lí dì tiě zhàn hěn jìn, wǒ yì chū mén jiù dào.", translation: "I take the subway. My home is very close to the subway station, I arrive as soon as I leave the house." },
      { character: "A", hanzi: "真方便！那你每天几点到公司？", pinyin: "zhēn fāng biàn! nà nǐ měi tiān jǐ diǎn dào gōng sī?", translation: "So convenient! Then what time do you arrive at the company every day?" },
      { character: "B", hanzi: "我一下地铁就到公司了。", pinyin: "wǒ yí xià dì tiě jiù dào gōng sī le.", translation: "I arrive at the company as soon as I get off the subway." }
    ],
    vocabularyExplanation: [
      { hanzi: "地铁", pinyin: "dì tiě", english: "subway" },
      { hanzi: "离", pinyin: "lí", english: "from (distance)" },
      { hanzi: "近", pinyin: "jìn", english: "near, close" },
      { hanzi: "出门", pinyin: "chū mén", english: "to go out, to leave home" },
      { hanzi: "方便", pinyin: "fāng biàn", english: "convenient" },
      { hanzi: "到", pinyin: "dào", english: "to arrive" }
    ],
    grammarPoint: "Connecting two quick actions with '一...就...' (yī...jiù...)",
    structure: "一 + Action 1, 就 + Action 2",
    explanation: "This structure indicates that the second action happens immediately after the first one. It emphasizes the close connection and speed between the two events.",
    examples: [
      { hanzi: "他一到家就睡觉。", pinyin: "tā yí dào jiā jiù shuì jiào.", translation: "He goes to sleep as soon as he gets home." },
      { hanzi: "我一上课就想睡觉。", pinyin: "wǒ yí shàng kè jiù xiǎng shuì jiào.", translation: "I feel sleepy as soon as class starts." }
    ],
    hskLevel: 2
  },
  {
    id: "hsk2-lesson20",
    title: "Lesson 20: Cause and Effect (原因和结果)",
    description: "Learn to explain reasons for actions using 'because... so...'.",
    content: "This lesson introduces the '因为...所以...' structure to clearly state a cause and its resulting effect, a fundamental pattern in Chinese.",
    dialogue: [
      { character: "A", hanzi: "你昨天为什么没来上课？", pinyin: "nǐ zuó tiān wèi shén me méi lái shàng kè?", translation: "Why didn't you come to class yesterday?" },
      { character: "B", hanzi: "因为我生病了，所以没来。", pinyin: "yīn wèi wǒ shēng bìng le, suǒ yǐ méi lái.", translation: "Because I was sick, so I didn't come." },
      { character: "A", hanzi: "现在好点儿了吗？", pinyin: "xiàn zài hǎo diǎnr le ma?", translation: "Are you a bit better now?" },
      { character: "B", hanzi: "好多了，谢谢。因为吃了药，所以现在不头疼了。", pinyin: "hǎo duō le, xiè xiè. yīn wèi chī le yào, suǒ yǐ xiàn zài bù tóu téng le.", translation: "Much better, thanks. Because I took medicine, so I don't have a headache now." }
    ],
    vocabularyExplanation: [
      { hanzi: "为什么", pinyin: "wèi shén me", english: "why" },
      { hanzi: "上课", pinyin: "shàng kè", english: "to attend class" },
      { hanzi: "因为", pinyin: "yīn wèi", english: "because" },
      { hanzi: "生病", pinyin: "shēng bìng", english: "to get sick" },
      { hanzi: "所以", pinyin: "suǒ yǐ", english: "so, therefore" },
      { hanzi: "药", pinyin: "yào", english: "medicine" }
    ],
    grammarPoint: "Explaining reason and result with '因为...所以...' (yīnwèi...suǒyǐ...)",
    structure: "因为 + Cause, 所以 + Effect",
    explanation: "This is a fixed structure to show cause and effect. '因为' introduces the reason, and '所以' introduces the result. In Chinese, it's common to use both, unlike in English where 'because' or 'so' is usually sufficient on its own.",
    examples: [
      { hanzi: "因为下雨了，所以我们没去公园。", pinyin: "yīn wèi xià yǔ le, suǒ yǐ wǒ men méi qù gōng yuán.", translation: "Because it rained, so we didn't go to the park." },
      { hanzi: "因为他工作很努力，所以老板喜欢他。", pinyin: "yīn wèi tā gōng zuò hěn nǔ lì, suǒ yǐ lǎo bǎn xǐ huān tā.", translation: "Because he works very hard, so the boss likes him." }
    ],
    hskLevel: 2
  }
];

export default lessons;