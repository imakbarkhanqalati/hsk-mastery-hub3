
export interface Example {
  sentence: string;
  translation: string;
}

export interface Word {
  char: string;
  pinyin: string;
  meaning:string;
  grammar: string;
  examples: Example[];
}
