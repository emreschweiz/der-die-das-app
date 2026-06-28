import { WORD_LISTS } from './data/wordLists';
import type { Article, GameQuestion, LevelId, WordSeed } from './types';

export const ROUND_LENGTH = 10;
export const DEVELOPER_ROUND_LENGTH = 100;
export const STARTING_LIVES = 3;
export const LEVEL_POOL_SIZE = 500;
export const ARTICLES: Article[] = ['der', 'die', 'das'];
export const LEVELS: LevelId[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
export const TIMED_MODE_SECONDS = 60;

const WORD_SEEDS: WordSeed[] = [
  { id: 'a1-table', word: 'Tisch', article: 'der', translation: { tr: 'masa', en: 'table' }, level: 'A1' },
  { id: 'a1-lamp', word: 'Lampe', article: 'die', translation: { tr: 'lamba', en: 'lamp' }, level: 'A1' },
  { id: 'a1-bed', word: 'Bett', article: 'das', translation: { tr: 'yatak', en: 'bed' }, level: 'A1' },
  { id: 'a1-dog', word: 'Hund', article: 'der', translation: { tr: 'köpek', en: 'dog' }, level: 'A1' },
  { id: 'a1-cat', word: 'Katze', article: 'die', translation: { tr: 'kedi', en: 'cat' }, level: 'A1' },
  { id: 'a1-bread', word: 'Brot', article: 'das', translation: { tr: 'ekmek', en: 'bread' }, level: 'A1' },
  { id: 'a1-key', word: 'Schlüssel', article: 'der', translation: { tr: 'anahtar', en: 'key' }, level: 'A1' },
  { id: 'a1-bag', word: 'Tasche', article: 'die', translation: { tr: 'çanta', en: 'bag' }, level: 'A1' },
  { id: 'a1-phone', word: 'Handy', article: 'das', translation: { tr: 'telefon', en: 'phone' }, level: 'A1' },
  { id: 'a1-bird', word: 'Vogel', article: 'der', translation: { tr: 'kus', en: 'bird' }, level: 'A1' },
  { id: 'a2-window', word: 'Fenster', article: 'das', translation: { tr: 'pencere', en: 'window' }, level: 'A2' },
  { id: 'a2-door', word: 'Tür', article: 'die', translation: { tr: 'kapı', en: 'door' }, level: 'A2' },
  { id: 'a2-mirror', word: 'Spiegel', article: 'der', translation: { tr: 'ayna', en: 'mirror' }, level: 'A2' },
  { id: 'a2-banana', word: 'Banane', article: 'die', translation: { tr: 'muz', en: 'banana' }, level: 'A2' },
  { id: 'a2-egg', word: 'Ei', article: 'das', translation: { tr: 'yumurta', en: 'egg' }, level: 'A2' },
  { id: 'a2-salad', word: 'Salat', article: 'der', translation: { tr: 'salata', en: 'salad' }, level: 'A2' },
  { id: 'a2-newspaper', word: 'Zeitung', article: 'die', translation: { tr: 'gazete', en: 'newspaper' }, level: 'A2' },
  { id: 'a2-bicycle', word: 'Fahrrad', article: 'das', translation: { tr: 'bisiklet', en: 'bicycle' }, level: 'A2' },
  { id: 'a2-pen', word: 'Stift', article: 'der', translation: { tr: 'kalem', en: 'pen' }, level: 'A2' },
  { id: 'a2-mouse', word: 'Maus', article: 'die', translation: { tr: 'fare', en: 'mouse' }, level: 'A2' },
  { id: 'b1-fridge', word: 'Kühlschrank', article: 'der', translation: { tr: 'buzdolabı', en: 'fridge' }, level: 'B1' },
  { id: 'b1-couch', word: 'Couch', article: 'die', translation: { tr: 'koltuk', en: 'couch' }, level: 'B1' },
  { id: 'b1-sheep', word: 'Schaf', article: 'das', translation: { tr: 'koyun', en: 'sheep' }, level: 'B1' },
  { id: 'b1-lion', word: 'Löwe', article: 'der', translation: { tr: 'aslan', en: 'lion' }, level: 'B1' },
  { id: 'b1-snake', word: 'Schlange', article: 'die', translation: { tr: 'yilan', en: 'snake' }, level: 'B1' },
  { id: 'b1-insect', word: 'Insekt', article: 'das', translation: { tr: 'böcek', en: 'insect' }, level: 'B1' },
  { id: 'b1-rice', word: 'Reis', article: 'der', translation: { tr: 'pirinç', en: 'rice' }, level: 'B1' },
  { id: 'b1-soup', word: 'Suppe', article: 'die', translation: { tr: 'çorba', en: 'soup' }, level: 'B1' },
  { id: 'b1-ticket', word: 'Ticket', article: 'das', translation: { tr: 'bilet', en: 'ticket' }, level: 'B1' },
  { id: 'b1-wallet', word: 'Geldbeutel', article: 'der', translation: { tr: 'cüzdan', en: 'wallet' }, level: 'B1' },
  { id: 'b2-computer', word: 'Computer', article: 'der', translation: { tr: 'bilgisayar', en: 'computer' }, level: 'B2' },
  { id: 'b2-glasses', word: 'Brille', article: 'die', translation: { tr: 'gözlük', en: 'glasses' }, level: 'B2' },
  { id: 'b2-ice', word: 'Eis', article: 'das', translation: { tr: 'dondurma', en: 'ice cream' }, level: 'B2' },
  { id: 'b2-garden', word: 'Garten', article: 'der', translation: { tr: 'bahçe', en: 'garden' }, level: 'B2' },
  { id: 'b2-freedom', word: 'Freiheit', article: 'die', translation: { tr: 'özgürlük', en: 'freedom' }, level: 'B2' },
  { id: 'b2-office', word: 'Büro', article: 'das', translation: { tr: 'ofis', en: 'office' }, level: 'B2' },
  { id: 'b2-forest', word: 'Wald', article: 'der', translation: { tr: 'orman', en: 'forest' }, level: 'B2' },
  { id: 'b2-health', word: 'Gesundheit', article: 'die', translation: { tr: 'saglik', en: 'health' }, level: 'B2' },
  { id: 'b2-system', word: 'System', article: 'das', translation: { tr: 'sistem', en: 'system' }, level: 'B2' },
  { id: 'b2-market', word: 'Markt', article: 'der', translation: { tr: 'pazar', en: 'market' }, level: 'B2' },
  { id: 'c1-progress', word: 'Fortschritt', article: 'der', translation: { tr: 'ilerleme', en: 'progress' }, level: 'C1' },
  { id: 'c1-experience', word: 'Erfahrung', article: 'die', translation: { tr: 'deneyim', en: 'experience' }, level: 'C1' },
  { id: 'c1-document', word: 'Dokument', article: 'das', translation: { tr: 'doküman', en: 'document' }, level: 'C1' },
  { id: 'c1-knowledge', word: 'Kenntnis', article: 'die', translation: { tr: 'bilgi birikimi', en: 'knowledge' }, level: 'C1' },
  { id: 'c1-discourse', word: 'Diskurs', article: 'der', translation: { tr: 'söylem', en: 'discourse' }, level: 'C1' },
  { id: 'c1-behavior', word: 'Verhalten', article: 'das', translation: { tr: 'davranis', en: 'behavior' }, level: 'C1' },
  { id: 'c1-perception', word: 'Wahrnehmung', article: 'die', translation: { tr: 'algilama', en: 'perception' }, level: 'C1' },
  { id: 'c1-viewpoint', word: 'Standpunkt', article: 'der', translation: { tr: 'bakış açısı', en: 'viewpoint' }, level: 'C1' },
  { id: 'c1-method', word: 'Verfahren', article: 'das', translation: { tr: 'yöntem', en: 'method' }, level: 'C1' },
  { id: 'c1-environment', word: 'Umgebung', article: 'die', translation: { tr: 'çevre', en: 'environment' }, level: 'C1' },
  { id: 'c2-consensus', word: 'Konsens', article: 'der', translation: { tr: 'uzlasi', en: 'consensus' }, level: 'C2' },
  { id: 'c2-consequence', word: 'Konsequenz', article: 'die', translation: { tr: 'sonuç', en: 'consequence' }, level: 'C2' },
  { id: 'c2-paradigm', word: 'Paradigma', article: 'das', translation: { tr: 'paradigma', en: 'paradigm' }, level: 'C2' },
  { id: 'c2-contradiction', word: 'Widerspruch', article: 'der', translation: { tr: 'çelişki', en: 'contradiction' }, level: 'C2' },
  { id: 'c2-interaction', word: 'Interaktion', article: 'die', translation: { tr: 'etkilesim', en: 'interaction' }, level: 'C2' },
  { id: 'c2-phenomenon', word: 'Phänomen', article: 'das', translation: { tr: 'fenomen', en: 'phenomenon' }, level: 'C2' },
  { id: 'c2-exchange', word: 'Austausch', article: 'der', translation: { tr: 'fikir alisverisi', en: 'exchange' }, level: 'C2' },
  { id: 'c2-justification', word: 'Begründung', article: 'die', translation: { tr: 'gerekçelendirme', en: 'justification' }, level: 'C2' },
  { id: 'c2-structure', word: 'Gefüge', article: 'das', translation: { tr: 'yapı', en: 'structure' }, level: 'C2' },
  { id: 'c2-impulse', word: 'Anstoß', article: 'der', translation: { tr: 'itki', en: 'impulse' }, level: 'C2' },
];

const WORD_SEED_TRANSLATIONS = new Map(
  WORD_SEEDS.map((word) => [`${word.level}-${word.article}-${word.word}`, word.translation] as const),
);

const shuffle = <T,>(items: T[]) => {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
};

const buildLevelPool = (level: LevelId) => {
  return WORD_LISTS[level].slice(0, LEVEL_POOL_SIZE).map((item, index) => ({
    id: `${level}-${item.article}-${item.word}-${index}`,
    word: item.word,
    article: item.article,
    level,
    translation:
      item.translation ?? WORD_SEED_TRANSLATIONS.get(`${level}-${item.article}-${item.word}`) ?? {
        tr: '',
        en: '',
      },
  }));
};

export const LEVEL_POOLS: Record<LevelId, WordSeed[]> = {
  A1: buildLevelPool('A1'),
  A2: buildLevelPool('A2'),
  B1: buildLevelPool('B1'),
  B2: buildLevelPool('B2'),
  C1: buildLevelPool('C1'),
  C2: buildLevelPool('C2'),
};

export const buildDeveloperPool = () => {
  const allWords = LEVELS.flatMap((level) => LEVEL_POOLS[level]);
  const uniqueRound: WordSeed[] = [];
  const seenWords = new Set<string>();

  for (const item of allWords.sort((a, b) => a.word.localeCompare(b.word, 'de'))) {
    const key = `${item.article}-${item.word}`;
    if (seenWords.has(key)) {
      continue;
    }
    seenWords.add(key);
    uniqueRound.push(item);
    if (uniqueRound.length === DEVELOPER_ROUND_LENGTH) {
      break;
    }
  }

  return uniqueRound;
};

export const buildRound = (level: LevelId) => {
  const uniqueRound: WordSeed[] = [];
  const seenWords = new Set<string>();

  for (const item of shuffle(LEVEL_POOLS[level])) {
    const key = `${item.article}-${item.word}`;
    if (seenWords.has(key)) {
      continue;
    }

    seenWords.add(key);
    uniqueRound.push(item);

    if (uniqueRound.length === ROUND_LENGTH) {
      break;
    }
  }

  return uniqueRound;
};

export const buildRoundFromPool = (pool: WordSeed[], count: number) => {
  const uniqueRound: WordSeed[] = [];
  const seenWords = new Set<string>();

  for (const item of shuffle(pool)) {
    const key = `${item.article}-${item.word}`;
    if (seenWords.has(key)) {
      continue;
    }
    seenWords.add(key);
    uniqueRound.push(item);
    if (uniqueRound.length === count) {
      break;
    }
  }

  return uniqueRound;
};

export const buildClassicQuestions = (words: WordSeed[]): GameQuestion[] =>
  words.map((word) => ({
    ...word,
    kind: 'article',
    prompt: word.word,
    answer: word.article,
    options: [...ARTICLES],
    label: {
      tr: 'Artikel',
      en: 'Article',
    },
  }));

export const buildFindWrongQuestions = (words: WordSeed[]) =>
  words.map((word, index, allWords) => {
    const wrongArticle = ARTICLES.find((article) => article !== word.article) ?? 'der';
    const wrongOption = `${wrongArticle} ${word.word}`;
    const distractors = shuffle(
      allWords
        .filter((candidate) => candidate.word !== word.word)
        .map((candidate) => `${candidate.article} ${candidate.word}`),
    ).slice(0, 2);

    const options = shuffle([wrongOption, ...distractors]);

    return {
      ...word,
      id: `${word.id}-find-wrong-${index}`,
      kind: 'find_wrong' as const,
      prompt: 'Yanlış artikel eşleşmesini seç.',
      answer: wrongOption,
      options,
      label: {
        tr: 'Yanlışı Bul',
        en: 'Find the Wrong One',
      },
    };
  });
