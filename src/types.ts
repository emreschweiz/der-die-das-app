export type Article = 'der' | 'die' | 'das';
export type LevelId = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type Screen = 'home' | 'levels' | 'gameModes' | 'game' | 'results' | 'stats' | 'settings' | 'wordList';
export type Language = 'tr' | 'en';
export type ThemeMode = 'light' | 'dark';

export type WordSeed = {
  id: string;
  word: string;
  article: Article;
  translation: Record<Language, string>;
  level: LevelId;
};

export type QuestionKind = 'article' | 'find_wrong';

export type GameQuestion = WordSeed & {
  kind: QuestionKind;
  prompt: string;
  answer: string;
  options: string[];
  label: Record<Language, string>;
};

export type GameMode = 'classic' | 'timed' | 'one_life' | 'review' | 'find_wrong' | 'developer';
export type LevelStats = Record<LevelId, { correct: number; wrong: number }>;

export type Settings = {
  soundEnabled: boolean;
  vibrationEnabled: boolean;
  language: Language;
  theme: ThemeMode;
};

export type WordListMode = 'menu' | 'letters' | 'articles' | 'levels';

export type AppStats = {
  totalRounds: number;
  totalAnswers: number;
  correctAnswers: number;
  wrongAnswers: number;
  bestScore: number;
  bestStreak: number;
  levelStats: LevelStats;
};

export type AppData = {
  stats: AppStats;
  settings: Settings;
  mistakes?: WordSeed[];
};

export type RoundSummary = {
  score: number;
  correct: number;
  wrong: number;
  bestStreak: number;
  level: LevelId;
  mode: GameMode;
};

export type FloatingArticleConfig = {
  word: Article;
  left: `${number}%`;
  top: `${number}%`;
  size: number;
  duration: number;
  dx: number;
  dy: number;
  scale: number;
  rotate: string;
};

export type WordListItem = {
  article: Article;
  word: string;
  level: LevelId;
  translation: Record<Language, string>;
};

export type ConfettiSeed = {
  dx: number;
  dy: number;
  rotate: string;
  color: string;
};

export type DeveloperVisual = {
  emoji: string;
  colors: [string, string];
};

export type GradientButtonVariant = 'gold' | 'blue' | 'berry' | 'teal' | 'slate';
