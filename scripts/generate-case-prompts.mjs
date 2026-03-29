const { WORD_LISTS } = await import('../src/data/wordLists.ts');
import { writeFile } from 'node:fs/promises';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const CASE_KINDS = ['nominative', 'accusative', 'dative'];

const CATEGORY_RULES = [
  {
    category: 'person',
    keywords: ['person', 'people', 'man', 'woman', 'child', 'boy', 'girl', 'teacher', 'student', 'doctor', 'patient', 'worker', 'employee', 'boss', 'friend', 'guest', 'tourist', 'visitor', 'customer', 'colleague', 'neighbor', 'mother', 'father', 'son', 'daughter', 'artist', 'musician', 'author', 'journalist', 'scientist', 'professor', 'leader', 'member', 'citizen', 'driver', 'police'],
  },
  {
    category: 'animal',
    keywords: ['animal', 'dog', 'cat', 'bird', 'mouse', 'lion', 'snake', 'insect', 'sheep', 'eagle', 'monkey', 'fish', 'horse', 'bear', 'tiger', 'wolf', 'cow', 'pig', 'chicken', 'goat', 'rabbit', 'deer', 'bee', 'butterfly'],
  },
  {
    category: 'drink',
    keywords: ['water', 'coffee', 'tea', 'juice', 'milk', 'beer', 'wine', 'alcohol', 'lemonade', 'cola'],
  },
  {
    category: 'food',
    keywords: ['bread', 'banana', 'egg', 'salad', 'rice', 'soup', 'ice cream', 'dinner', 'breakfast', 'lunch', 'meal', 'food', 'cake', 'cookie', 'fruit', 'vegetable', 'potato', 'tomato', 'onion', 'carrot', 'pizza', 'pasta', 'chocolate', 'meat', 'cheese', 'apple', 'orange'],
  },
  {
    category: 'document',
    keywords: ['document', 'newspaper', 'magazine', 'passport', 'ticket', 'letter', 'report', 'contract', 'text', 'article', 'book', 'paper', 'email', 'message', 'note', 'photo', 'picture', 'image', 'film', 'song', 'album'],
  },
  {
    category: 'clothing',
    keywords: ['shirt', 'jacket', 'coat', 'dress', 'shoe', 'sock', 'hat', 'trousers', 'pants', 'skirt', 'scarf', 'glasses', 'ring', 'necklace', 'bag', 'backpack'],
  },
  {
    category: 'vehicle',
    keywords: ['car', 'bus', 'train', 'bike', 'bicycle', 'plane', 'ship', 'truck', 'taxi', 'scooter', 'motorcycle', 'vehicle'],
  },
  {
    category: 'device',
    keywords: ['phone', 'computer', 'laptop', 'tablet', 'printer', 'machine', 'camera', 'radio', 'television', 'tv', 'microphone', 'keyboard', 'mouse', 'charger', 'battery', 'pen', 'pencil', 'key', 'tool', 'hammer', 'brush', 'scissors'],
  },
  {
    category: 'household',
    keywords: ['table', 'lamp', 'bed', 'window', 'door', 'mirror', 'fridge', 'couch', 'sofa', 'chair', 'wardrobe', 'shelf', 'cupboard', 'bottle', 'cup', 'plate', 'box', 'wallet', 'glasses'],
  },
  {
    category: 'place',
    keywords: ['city', 'country', 'village', 'island', 'region', 'street', 'square', 'park', 'market', 'beach', 'forest', 'mountain', 'river', 'lake', 'sea', 'garden', 'field', 'world', 'environment', 'office', 'school', 'university', 'hospital', 'factory', 'station', 'museum', 'library', 'church', 'hotel', 'shop', 'supermarket', 'restaurant', 'cafe', 'bank', 'theater', 'cinema', 'stadium', 'airport', 'house', 'home', 'apartment', 'room', 'kitchen', 'bathroom', 'bedroom', 'building'],
  },
  {
    category: 'event',
    keywords: ['meeting', 'conference', 'lesson', 'exam', 'course', 'training', 'celebration', 'conversation', 'discussion', 'interview', 'project', 'trip', 'journey', 'game', 'program', 'plan', 'appointment', 'start', 'end', 'departure', 'takeoff', 'landing', 'vacation', 'holiday', 'break'],
  },
  {
    category: 'nature',
    keywords: ['tree', 'flower', 'plant', 'wind', 'rain', 'snow', 'sun', 'moon', 'star', 'stone', 'earth', 'air', 'fire', 'waterfall', 'forest', 'wood', 'field', 'grass'],
  },
  {
    category: 'abstract',
    keywords: ['freedom', 'health', 'system', 'progress', 'experience', 'knowledge', 'discourse', 'behavior', 'perception', 'viewpoint', 'method', 'consensus', 'consequence', 'paradigm', 'contradiction', 'interaction', 'phenomenon', 'exchange', 'justification', 'structure', 'impulse', 'aesthetics', 'analogy', 'alignment', 'prevention', 'potential', 'leadership', 'intention', 'distance', 'quality', 'energy', 'culture', 'society', 'language', 'idea', 'problem', 'solution', 'result', 'question', 'answer', 'chance', 'fear', 'hope', 'love', 'peace', 'war', 'logic', 'theory', 'strategy', 'behavior', 'knowledge', 'experience'],
  },
];

const PROMPT_TEMPLATES = {
  person: {
    nominative: [
      'Hier ist ___ {word}.',
      'Dort wartet ___ {word}.',
      'Im Büro arbeitet ___ {word}.',
      'Vor dem Gebäude steht ___ {word}.',
    ],
    accusative: [
      'Ich kenne ___ {word}.',
      'Ich treffe ___ {word}.',
      'Ich besuche ___ {word}.',
      'Ich sehe ___ {word}.',
    ],
    dative: [
      'Ich helfe ___ {word}.',
      'Ich danke ___ {word}.',
      'Ich antworte ___ {word}.',
      'Ich spreche mit ___ {word}.',
    ],
  },
  animal: {
    nominative: [
      'Im Garten ist ___ {word}.',
      'Dort läuft ___ {word}.',
      'Auf dem Feld steht ___ {word}.',
      'Im Zoo ist ___ {word}.',
    ],
    accusative: [
      'Ich sehe ___ {word}.',
      'Ich füttere ___ {word}.',
      'Ich beobachte ___ {word}.',
      'Ich streichle ___ {word}.',
    ],
    dative: [
      'Ich spiele mit ___ {word}.',
      'Ich stehe neben ___ {word}.',
      'Ich bin bei ___ {word}.',
      'Ich komme mit ___ {word}.',
    ],
  },
  drink: {
    nominative: [
      'Im Glas ist ___ {word}.',
      'Hier ist ___ {word}.',
      'Auf dem Tisch steht ___ {word}.',
      'Im Kühlschrank ist ___ {word}.',
    ],
    accusative: [
      'Ich trinke ___ {word}.',
      'Ich bestelle ___ {word}.',
      'Ich kaufe ___ {word}.',
      'Ich probiere ___ {word}.',
    ],
    dative: [
      'Zu ___ {word} esse ich Kuchen.',
      'Mit ___ {word} stoßen wir an.',
      'Ich beginne mit ___ {word}.',
      'Zu ___ {word} passt ein Dessert.',
    ],
  },
  food: {
    nominative: [
      'Auf dem Tisch liegt ___ {word}.',
      'Hier ist ___ {word}.',
      'Im Kühlschrank ist ___ {word}.',
      'Auf dem Teller liegt ___ {word}.',
    ],
    accusative: [
      'Ich esse ___ {word}.',
      'Ich kaufe ___ {word}.',
      'Ich bestelle ___ {word}.',
      'Ich probiere ___ {word}.',
    ],
    dative: [
      'Zu ___ {word} passt Brot.',
      'Mit ___ {word} koche ich heute.',
      'Ich beginne mit ___ {word}.',
      'Zu ___ {word} nehme ich ein Getränk.',
    ],
  },
  document: {
    nominative: [
      'Auf dem Tisch liegt ___ {word}.',
      'Hier ist ___ {word}.',
      'Im Regal steht ___ {word}.',
      'Dort hängt ___ {word}.',
    ],
    accusative: [
      'Ich lese ___ {word}.',
      'Ich schreibe ___ {word}.',
      'Ich öffne ___ {word}.',
      'Ich drucke ___ {word}.',
    ],
    dative: [
      'In ___ {word} steht alles.',
      'Ich arbeite mit ___ {word}.',
      'Aus ___ {word} lerne ich viel.',
      'Ich suche in ___ {word} nach Infos.',
    ],
  },
  clothing: {
    nominative: [
      'Im Schrank hängt ___ {word}.',
      'Hier ist ___ {word}.',
      'Auf dem Bett liegt ___ {word}.',
      'Im Laden ist ___ {word}.',
    ],
    accusative: [
      'Ich trage ___ {word}.',
      'Ich kaufe ___ {word}.',
      'Ich suche ___ {word}.',
      'Ich wasche ___ {word}.',
    ],
    dative: [
      'Zu ___ {word} passt die Tasche.',
      'Ich gehe mit ___ {word} raus.',
      'In ___ {word} fühle ich mich wohl.',
      'Neben ___ {word} liegt ein Schal.',
    ],
  },
  vehicle: {
    nominative: [
      'Dort steht ___ {word}.',
      'Vor dem Haus ist ___ {word}.',
      'Auf der Straße fährt ___ {word}.',
      'Am Bahnhof steht ___ {word}.',
    ],
    accusative: [
      'Ich nehme ___ {word}.',
      'Ich miete ___ {word}.',
      'Ich parke ___ {word}.',
      'Ich sehe ___ {word}.',
    ],
    dative: [
      'Ich fahre mit ___ {word}.',
      'Ich komme mit ___ {word}.',
      'Ich sitze in ___ {word}.',
      'Ich reise mit ___ {word}.',
    ],
  },
  device: {
    nominative: [
      'Auf dem Tisch liegt ___ {word}.',
      'Hier ist ___ {word}.',
      'Im Büro steht ___ {word}.',
      'Neben mir liegt ___ {word}.',
    ],
    accusative: [
      'Ich benutze ___ {word}.',
      'Ich kaufe ___ {word}.',
      'Ich repariere ___ {word}.',
      'Ich suche ___ {word}.',
    ],
    dative: [
      'Ich arbeite mit ___ {word}.',
      'Ich schreibe mit ___ {word}.',
      'Ich telefoniere mit ___ {word}.',
      'Ich lerne mit ___ {word}.',
    ],
  },
  household: {
    nominative: [
      'Im Zimmer steht ___ {word}.',
      'Im Haus ist ___ {word}.',
      'Hier ist ___ {word}.',
      'Neben der Tür steht ___ {word}.',
    ],
    accusative: [
      'Ich kaufe ___ {word}.',
      'Ich putze ___ {word}.',
      'Ich suche ___ {word}.',
      'Ich sehe ___ {word}.',
    ],
    dative: [
      'Neben ___ {word} steht ein Stuhl.',
      'Vor ___ {word} liegt ein Teppich.',
      'Ich stehe bei ___ {word}.',
      'Hinter ___ {word} ist ein Fenster.',
    ],
  },
  place: {
    nominative: [
      'Dort ist ___ {word}.',
      'In der Stadt ist ___ {word}.',
      'Auf der Karte steht ___ {word}.',
      'In der Nähe ist ___ {word}.',
    ],
    accusative: [
      'Ich besuche ___ {word}.',
      'Ich suche ___ {word}.',
      'Ich fotografiere ___ {word}.',
      'Ich sehe ___ {word}.',
    ],
    dative: [
      'Ich bin in ___ {word}.',
      'Wir treffen uns bei ___ {word}.',
      'Ich bleibe in ___ {word}.',
      'Ich warte vor ___ {word}.',
    ],
  },
  event: {
    nominative: [
      'Heute ist ___ {word}.',
      'Morgen beginnt ___ {word}.',
      'Im Kalender steht ___ {word}.',
      'Bald startet ___ {word}.',
    ],
    accusative: [
      'Ich plane ___ {word}.',
      'Ich organisiere ___ {word}.',
      'Ich erwarte ___ {word}.',
      'Ich starte ___ {word}.',
    ],
    dative: [
      'Nach ___ {word} fahre ich nach Hause.',
      'Vor ___ {word} bin ich nervös.',
      'Bei ___ {word} lerne ich viel.',
      'Nach ___ {word} mache ich eine Pause.',
    ],
  },
  nature: {
    nominative: [
      'Dort ist ___ {word}.',
      'In der Natur gibt es ___ {word}.',
      'Am Weg liegt ___ {word}.',
      'Im Wald ist ___ {word}.',
    ],
    accusative: [
      'Ich sehe ___ {word}.',
      'Ich fotografiere ___ {word}.',
      'Ich beobachte ___ {word}.',
      'Ich entdecke ___ {word}.',
    ],
    dative: [
      'Ich bin bei ___ {word}.',
      'Ich stehe vor ___ {word}.',
      'Ich gehe zu ___ {word}.',
      'Ich sitze an ___ {word}.',
    ],
  },
  abstract: {
    nominative: [
      'Das ist ___ {word}.',
      'Heute ist ___ {word} wichtig.',
      'Im Gespräch zählt ___ {word}.',
      'Für uns bleibt ___ {word} zentral.',
    ],
    accusative: [
      'Ich brauche ___ {word}.',
      'Wir besprechen ___ {word}.',
      'Ich erkläre ___ {word}.',
      'Wir verstehen ___ {word}.',
    ],
    dative: [
      'Mit ___ {word} wird alles leichter.',
      'An ___ {word} arbeiten wir.',
      'Bei ___ {word} brauche ich Hilfe.',
      'Ich beschäftige mich mit ___ {word}.',
    ],
  },
  object: {
    nominative: [
      'Hier ist ___ {word}.',
      'Dort liegt ___ {word}.',
      'Auf dem Tisch ist ___ {word}.',
      'Im Raum steht ___ {word}.',
    ],
    accusative: [
      'Ich sehe ___ {word}.',
      'Ich kaufe ___ {word}.',
      'Ich suche ___ {word}.',
      'Ich nehme ___ {word}.',
    ],
    dative: [
      'Mit ___ {word} arbeite ich.',
      'Neben ___ {word} liegt ein Heft.',
      'Vor ___ {word} steht ein Stuhl.',
      'Ich gehe mit ___ {word}.',
    ],
  },
};

function normalize(text) {
  return String(text ?? '').toLowerCase();
}

function hash(input) {
  let value = 0;
  for (const char of input) {
    value = (value * 31 + char.charCodeAt(0)) >>> 0;
  }
  return value;
}

function pickCategory(entry) {
  const haystack = `${normalize(entry.word)} ${normalize(entry.translation?.en)} ${normalize(entry.translation?.tr)}`;
  for (const rule of CATEGORY_RULES) {
    if (rule.keywords.some((keyword) => haystack.includes(keyword))) {
      return rule.category;
    }
  }
  return 'object';
}

function renderTemplate(template, word) {
  return template.replaceAll('{word}', word);
}

function buildCasePrompts(entry) {
  const category = pickCategory(entry);
  const prompts = {};

  for (const kind of CASE_KINDS) {
    const variants = PROMPT_TEMPLATES[category][kind];
    const index = hash(`${entry.word}-${entry.translation?.en}-${kind}`) % variants.length;
    prompts[kind] = renderTemplate(variants[index], entry.word);
  }

  return prompts;
}

const enriched = Object.fromEntries(
  LEVELS.map((level) => [
    level,
    WORD_LISTS[level].map((entry) => ({
      ...entry,
      casePrompts: buildCasePrompts(entry),
    })),
  ]),
);

const output = `export type WordListLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type CasePromptSet = {
  nominative: string;
  accusative: string;
  dative: string;
};

export type WordListEntry = {
  article: 'der' | 'die' | 'das';
  word: string;
  translation: {
    tr: string;
    en: string;
  };
  casePrompts: CasePromptSet;
};

export const WORD_LISTS: Record<WordListLevel, WordListEntry[]> = ${JSON.stringify(enriched, null, 2)};
`;

await writeFile(new URL('../src/data/wordLists.ts', import.meta.url), output, 'utf8');
console.log('wordLists.ts updated with case prompts.');
