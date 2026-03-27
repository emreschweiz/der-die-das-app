import { writeFile } from 'node:fs/promises';

const { WORD_LISTS } = await import('../src/data/wordLists.ts');

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const BATCH_SIZE = 40;
const REQUEST_DELAY_MS = 120;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function sanitizeTranslation(value) {
  return value
    .replace(/\s+/g, ' ')
    .replace(/\s([,.;!?])/g, '$1')
    .trim();
}

async function translateBatch(words, targetLanguage) {
  const query = words.join('\n');
  const url =
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(query)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Translation request failed with status ${response.status}`);
  }

  const data = await response.json();
  const joined = data?.[0]?.map((segment) => segment?.[0] ?? '').join('') ?? '';
  const parts = joined.split('\n').map(sanitizeTranslation).filter((part, index, array) => !(part === '' && index === array.length - 1));

  if (parts.length !== words.length) {
    throw new Error(`Expected ${words.length} translations for ${targetLanguage}, got ${parts.length}`);
  }

  return parts;
}

async function translateWords(words, targetLanguage) {
  const translations = new Map();

  for (let index = 0; index < words.length; index += BATCH_SIZE) {
    const batch = words.slice(index, index + BATCH_SIZE);

    try {
      const results = await translateBatch(batch, targetLanguage);
      batch.forEach((word, batchIndex) => {
        translations.set(word, results[batchIndex]);
      });
    } catch (error) {
      console.warn(`Batch fallback for ${targetLanguage} at index ${index}: ${error.message}`);

      for (const word of batch) {
        const [result] = await translateBatch([word], targetLanguage);
        translations.set(word, result);
        await sleep(REQUEST_DELAY_MS);
      }
    }

    process.stdout.write(`\r${targetLanguage.toUpperCase()} ${Math.min(index + BATCH_SIZE, words.length)}/${words.length}`);
    await sleep(REQUEST_DELAY_MS);
  }

  process.stdout.write('\n');
  return translations;
}

const uniqueWords = Array.from(
  new Set(
    LEVELS.flatMap((level) => WORD_LISTS[level].map((entry) => entry.word)),
  ),
);

console.log(`Translating ${uniqueWords.length} unique words to English...`);
const englishTranslations = await translateWords(uniqueWords, 'en');

console.log(`Translating ${uniqueWords.length} unique words to Turkish...`);
const turkishTranslations = await translateWords(uniqueWords, 'tr');

const enrichedWordLists = Object.fromEntries(
  LEVELS.map((level) => [
    level,
    WORD_LISTS[level].map((entry) => ({
      article: entry.article,
      word: entry.word,
      translation: {
        tr: turkishTranslations.get(entry.word) ?? '',
        en: englishTranslations.get(entry.word) ?? '',
      },
    })),
  ]),
);

const nextFileContents = `export type WordListLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type WordListEntry = {
  article: 'der' | 'die' | 'das';
  word: string;
  translation: {
    tr: string;
    en: string;
  };
};

export const WORD_LISTS: Record<WordListLevel, WordListEntry[]> = ${JSON.stringify(enrichedWordLists, null, 2)};
`;

await writeFile(new URL('../src/data/wordLists.ts', import.meta.url), nextFileContents, 'utf8');
console.log('wordLists.ts updated with tr/en translations.');
