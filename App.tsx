import AsyncStorage from '@react-native-async-storage/async-storage';
import { BlurView } from 'expo-blur';
import { createAudioPlayer, setAudioModeAsync } from 'expo-audio';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef, useState } from 'react';
import { WORD_LISTS } from './src/data/wordLists';
import {
  Alert,
  Animated,
  BackHandler,
  Easing,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Vibration,
  View,
} from 'react-native';

type Article = 'der' | 'die' | 'das';
type LevelId = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
type Screen = 'home' | 'levels' | 'gameModes' | 'articleGameModes' | 'caseGameModes' | 'game' | 'results' | 'stats' | 'settings' | 'wordList';
type Language = 'tr' | 'en';
type ThemeMode = 'light' | 'dark';

type WordSeed = {
  id: string;
  word: string;
  article: Article;
  translation: Record<Language, string>;
  level: LevelId;
};

type QuestionKind = 'article' | 'nominative' | 'accusative' | 'dative' | 'find_wrong';

type GameQuestion = WordSeed & {
  kind: QuestionKind;
  prompt: string;
  answer: string;
  options: string[];
  label: Record<Language, string>;
};

type GameMode = 'classic' | 'timed' | 'one_life' | 'review' | 'find_wrong';
type GameFamily = 'article' | 'case';

type LevelStats = Record<LevelId, { correct: number; wrong: number }>;

type Settings = {
  soundEnabled: boolean;
  vibrationEnabled: boolean;
  language: Language;
  theme: ThemeMode;
};

type WordListMode = 'menu' | 'letters' | 'articles' | 'levels';

type AppStats = {
  totalRounds: number;
  totalAnswers: number;
  correctAnswers: number;
  wrongAnswers: number;
  bestScore: number;
  bestStreak: number;
  levelStats: LevelStats;
};

type AppData = {
  stats: AppStats;
  settings: Settings;
  mistakes?: WordSeed[];
};

type RoundSummary = {
  score: number;
  correct: number;
  wrong: number;
  bestStreak: number;
  level: LevelId;
  family: GameFamily;
  mode: GameMode;
};

type FloatingArticleConfig = {
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

type WordListItem = {
  article: Article;
  word: string;
  level: LevelId;
  translation: Record<Language, string>;
};

type ConfettiSeed = {
  dx: number;
  dy: number;
  rotate: string;
  color: string;
};

type GradientButtonVariant = 'gold' | 'blue' | 'berry' | 'teal' | 'slate';

const STORAGE_KEY = 'derdiedas.levels.v4';
const ROUND_LENGTH = 10;
const STARTING_LIVES = 3;
const LEVEL_POOL_SIZE = 500;
const ANSWER_DELAY_MS = 1850;
const ARTICLES: Article[] = ['der', 'die', 'das'];
const ARTICLE_OPTIONS = ['der', 'die', 'das', 'den', 'dem'] as const;
const LEVELS: LevelId[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const WORDS_PER_PAGE = 100;
const TIMED_MODE_SECONDS = 60;
const CASE_WORD_COUNT = 3;

const ARTICLE_COLORS: Record<Article, string> = {
  der: '#3498db',
  die: '#ff5b8a',
  das: '#2ecc71',
};

const ARTICLE_FORM_COLORS: Record<(typeof ARTICLE_OPTIONS)[number], string> = {
  der: '#3498db',
  die: '#ff5b8a',
  das: '#2ecc71',
  den: '#f59e0b',
  dem: '#8b5cf6',
};

const CASE_ARTICLES: Record<Article, Record<'nominative' | 'accusative' | 'dative', string>> = {
  der: {
    nominative: 'der',
    accusative: 'den',
    dative: 'dem',
  },
  die: {
    nominative: 'die',
    accusative: 'die',
    dative: 'der',
  },
  das: {
    nominative: 'das',
    accusative: 'das',
    dative: 'dem',
  },
};

const CASE_KIND_DESCRIPTIONS: Record<
  Exclude<QuestionKind, 'find_wrong'>,
  { tr: string; en: string }
> = {
  article: { tr: 'Artikel', en: 'Article' },
  nominative: { tr: 'Yalın hali', en: 'Base form' },
  accusative: { tr: 'Belirtme hali', en: 'Accusative object' },
  dative: { tr: 'Yönelme hali', en: 'Dative object' },
};

const ARTICLE_CARD_GRADIENTS: Record<Article, [string, string, string]> = {
  der: ['#7fbfff', '#3478f6', '#1d4ed8'],
  die: ['#ff8db2', '#e94b7d', '#be185d'],
  das: ['#6fdf9c', '#22c55e', '#15803d'],
};

const LEVEL_META: Record<Language, Record<LevelId, { subtitle: string }>> = {
  tr: {
    A1: { subtitle: 'Başlangıç' },
    A2: { subtitle: 'Temel' },
    B1: { subtitle: 'Orta' },
    B2: { subtitle: 'Orta-Üstü' },
    C1: { subtitle: 'İleri' },
    C2: { subtitle: 'Anadile yakın' },
  },
  en: {
    A1: { subtitle: 'Beginner' },
    A2: { subtitle: 'Elementary' },
    B1: { subtitle: 'Intermediate' },
    B2: { subtitle: 'Upper-Intermediate' },
    C1: { subtitle: 'Advanced' },
    C2: { subtitle: 'Near-Native' },
  },
};

const LEVEL_GRADIENTS: Record<LevelId, { colors: [string, string, string]; textColor: string; metaColor: string }> = {
  A1: { colors: ['#00C853', '#28D65D', '#78E67B'], textColor: '#ffffff', metaColor: '#eafff0' },
  A2: { colors: ['#6EDB1F', '#AEEA00', '#D6F56A'], textColor: '#173100', metaColor: '#355200' },
  B1: { colors: ['#D8EF00', '#FFD600', '#FFE76A'], textColor: '#4a3200', metaColor: '#6b4a00' },
  B2: { colors: ['#FFC400', '#FF9100', '#FFB74D'], textColor: '#ffffff', metaColor: '#fff0d8' },
  C1: { colors: ['#FF5A36', '#D50000', '#A30000'], textColor: '#ffffff', metaColor: '#ffd9d9' },
  C2: { colors: ['#5C5C5C', '#333333', '#212121'], textColor: '#ffffff', metaColor: '#d7d7d7' },
};

const BUTTON_GRADIENTS: Record<
  GradientButtonVariant,
  { colors: [string, string, string]; textColor: string }
> = {
  gold: { colors: ['#ffe066', '#ff8c42', '#d7263d'], textColor: '#ffffff' },
  blue: { colors: ['#5da8ff', '#3478f6', '#2451d1'], textColor: '#ffffff' },
  berry: { colors: ['#ff7aa2', '#e94b7d', '#c92f6a'], textColor: '#ffffff' },
  teal: { colors: ['#4cd6c9', '#14b8a6', '#0f8f88'], textColor: '#ffffff' },
  slate: { colors: ['#7d8797', '#4b5563', '#1f2937'], textColor: '#ffffff' },
};

const APP_THEMES: Record<'light' | 'dark', { background: string; title: string; loadingTitle: string; loadingSubtitle: string }> = {
  light: {
    background: '#f6f4ee',
    title: '#1f2937',
    loadingTitle: '#1f2a37',
    loadingSubtitle: '#6b7280',
  },
  dark: {
    background: '#111827',
    title: '#f8fafc',
    loadingTitle: '#f8fafc',
    loadingSubtitle: '#cbd5e1',
  },
};

const COPY = {
  tr: {
    heroEyebrow: 'Seviye bazlı mini oyun',
    heroSubtitle: 'Her seviyede 500 kelimelik havuzdan rastgele seçilen 10 soruluk tur seni bekliyor.',
    start: 'BAŞLA',
    statistics: 'İSTATİSTİKLER',
    wordList: 'KELİME LİSTESİ',
    sortByLetter: 'HARFE GÖRE SIRALA',
    sortByArticle: 'ARTİKELE GÖRE SIRALA',
    sortByLevel: 'SEVİYEYE GÖRE SIRALA',
    chooseLetter: 'Harf seç',
    chooseArticle: 'Artikel seç',
    chooseLevelForWords: 'Seviye seç',
    chooseGameMode: 'Oyun türü seç',
    articleGameFamily: 'Der Die Das Bilme Oyunu',
    articleGameFamilyHint: 'Artikel odaklı 4 farklı oyun modu.',
    modeClassic: '3 Can 10 Soru',
    modeClassicHint: 'Klasik mod. 3 canla 10 soruyu bitir.',
    modeCaseClassic: '3 Can 12 Soru',
    modeCaseClassicHint: 'Klasik mod. 3 canla 12 kasus sorusunu bitir.',
    modeCase: 'Kasus Oyunu',
    modeCaseHint: 'Artikel ve hâl çekimlerini 4 modla çalış.',
    caseGameFamilyHint: 'Önce artikel, sonra Nominativ, Akkusativ ve Dativ soruları.',
    modeTimed: 'Süreye Karşı',
    modeTimedHint: '60 saniyede en yüksek skoru yap.',
    modeOneLife: 'Tek Can',
    modeOneLifeHint: 'Tek hata hakkın var.',
    modeReview: 'Tekrar Modu',
    modeReviewHint: 'Yanlış yaptığın kelimeleri çalış.',
    modeFindWrong: 'Yanlışı Bul',
    modeFindWrongHint: 'Hatalı artikel-kelime eşleşmesini seç.',
    time: 'Süre',
    noReviewWords: 'Bu seviye için tekrar kelimesi henüz yok.',
    backToWordList: 'KELİME LİSTESİNE DÖN',
    wordSourceTitle: 'Kelime Kaynağı',
    wordSourceBody: 'Bu uygulamadaki kelime havuzu, Almanca isim listeleri ve CEFR seviye mantığı temel alınarak derlenmiş ve uygulama için düzenlenmiştir.',
    settings: 'AYARLAR',
    exit: 'ÇIKIŞ',
    chooseLevel: 'Dil seviyesi seç',
    poolLabel: '500 kelime havuzu',
    totalWords: '3000 kelime',
    home: 'ANA MENÜ',
    page: 'Sayfa',
    previous: 'ÖNCEKİ',
    next: 'SONRAKİ',
    level: 'Seviye',
    progress: 'İlerleme',
    score: 'Skor',
    streak: 'Seri',
    lives: 'Can',
    pickArticle: 'Doğru artikeli seç.',
    correctAnswer: 'Doğru cevap',
    correctIs: 'Doğrusu',
    roundDone: 'Tur tamamlandı',
    correct: 'doğru',
    wrong: 'yanlış',
    points: 'puan',
    bestStreak: 'En iyi seri',
    accuracy: 'Doğruluk',
    replayLevel: 'AYNI SEVİYEYİ TEKRARLA',
    levels: 'SEVİYELER',
    totalRounds: 'Toplam tur',
    totalAnswers: 'Toplam cevap',
    bestScore: 'En iyi skor',
    levelPerformance: 'Seviye performansı',
    resetStats: 'İSTATİSTİKLERİ SIFIRLA',
    confirmHomeTitle: 'Ana menüye dön',
    confirmHomeBody: 'Bu turdan çıkıp ana menüye dönmek istiyor musunuz?',
    cancel: 'Vazgeç',
    back: 'Geri',
    confirmResetTitle: 'İstatistikleri sıfırla',
    confirmResetBody: 'Gerçekten sıfırlamak istiyor musunuz?',
    reset: 'Sıfırla',
    info: 'Bilgi',
    iosExitInfo: 'iPhone tarafında uygulama içinden çıkış yapılamaz.',
    loading: 'Yükleniyor...',
    soundEffects: 'Ses efektleri',
    vibration: 'Titreşim',
    language: 'Dil',
    theme: 'Tema',
    light: 'Açık',
    dark: 'Koyu',
    turkish: 'Türkçe',
    english: 'İngilizce',
    on: 'Açık',
    off: 'Kapalı',
    settingsHint: 'Sesleri ve uygulama dilini buradan yönetebilirsin.',
    wordListHint: '3000 kelime alfabetik sırayla 100’erli sayfalar halinde listelenir.',
  },
  en: {
    heroEyebrow: 'Level-based mini game',
    heroSubtitle: 'Each level gives you a 10-question round picked randomly from a 500-word pool.',
    start: 'START',
    statistics: 'STATISTICS',
    wordList: 'WORD LIST',
    sortByLetter: 'SORT BY LETTER',
    sortByArticle: 'SORT BY ARTICLE',
    sortByLevel: 'SORT BY LEVEL',
    chooseLetter: 'Choose a letter',
    chooseArticle: 'Choose an article',
    chooseLevelForWords: 'Choose a level',
    chooseGameMode: 'Choose a game mode',
    articleGameFamily: 'Der Die Das Game',
    articleGameFamilyHint: 'Four different article-focused game modes.',
    modeClassic: '3 Lives 10 Questions',
    modeClassicHint: 'Classic mode. Finish 10 questions with 3 lives.',
    modeCaseClassic: '3 Lives 12 Questions',
    modeCaseClassicHint: 'Classic mode. Finish 12 case questions with 3 lives.',
    modeCase: 'Case Game',
    modeCaseHint: 'Practice article and case forms with 4 modes.',
    caseGameFamilyHint: 'First article, then Nominative, Accusative, and Dative questions.',
    modeTimed: 'Time Attack',
    modeTimedHint: 'Score as much as you can in 60 seconds.',
    modeOneLife: 'One Life',
    modeOneLifeHint: 'You only have one mistake chance.',
    modeReview: 'Review Mode',
    modeReviewHint: 'Practice the words you got wrong.',
    modeFindWrong: 'Find the Wrong One',
    modeFindWrongHint: 'Pick the wrong article-word match.',
    time: 'Time',
    noReviewWords: 'There are no review words for this level yet.',
    backToWordList: 'BACK TO WORD LIST',
    wordSourceTitle: 'Word Source',
    wordSourceBody: 'The word pool in this app was compiled from German noun lists and CEFR-style level groupings, then adapted for this app.',
    settings: 'SETTINGS',
    exit: 'EXIT',
    chooseLevel: 'Choose a level',
    poolLabel: '500-word pool',
    totalWords: '3000 words',
    home: 'HOME',
    page: 'Page',
    previous: 'PREVIOUS',
    next: 'NEXT',
    level: 'Level',
    progress: 'Progress',
    score: 'Score',
    streak: 'Streak',
    lives: 'Lives',
    pickArticle: 'Choose the correct article.',
    correctAnswer: 'Correct answer',
    correctIs: 'Correct:',
    roundDone: 'Round complete',
    correct: 'correct',
    wrong: 'wrong',
    points: 'points',
    bestStreak: 'Best streak',
    accuracy: 'Accuracy',
    replayLevel: 'REPLAY THIS LEVEL',
    levels: 'LEVELS',
    totalRounds: 'Total rounds',
    totalAnswers: 'Total answers',
    bestScore: 'Best score',
    levelPerformance: 'Level performance',
    resetStats: 'RESET STATISTICS',
    confirmHomeTitle: 'Return home',
    confirmHomeBody: 'Do you want to leave this round and go back to the home screen?',
    cancel: 'Cancel',
    back: 'Leave',
    confirmResetTitle: 'Reset statistics',
    confirmResetBody: 'Do you really want to reset all statistics?',
    reset: 'Reset',
    info: 'Info',
    iosExitInfo: 'On iPhone, apps cannot be closed from inside the app.',
    loading: 'Loading...',
    soundEffects: 'Sound effects',
    vibration: 'Vibration',
    language: 'Language',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    turkish: 'Turkish',
    english: 'English',
    on: 'On',
    off: 'Off',
    settingsHint: 'Manage sounds and app language here.',
    wordListHint: 'All 3000 words are listed alphabetically in pages of 100.',
  },
} as const;

const CONFETTI_COLORS = ['#ff6b6b', '#ffd166', '#f368e0', '#48dbfb', '#10ac84', '#ff9f43', '#54a0ff', '#5f27cd', '#00d2d3', '#ee5253'];

const buildConfettiSeeds = (count = 24): ConfettiSeed[] =>
  Array.from({ length: count }, (_, index) => {
    const baseAngle = (Math.PI * 2 * index) / count;
    const randomOffset = (Math.random() - 0.5) * 0.8;
    const angle = baseAngle + randomOffset;
    const distance = 110 + Math.random() * 120;
    return {
      dx: Math.cos(angle) * distance,
      dy: Math.sin(angle) * distance,
      rotate: `${Math.round((Math.random() - 0.5) * 220)}deg`,
      color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
    };
  });

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

const FLOATING_ARTICLES = [
  { word: 'der', left: '8%', top: '10%', size: 34, duration: 7500, dx: 18, dy: 22, scale: 1.08, rotate: '-5deg' },
  { word: 'die', left: '65%', top: '8%', size: 54, duration: 9000, dx: -18, dy: 24, scale: 1.12, rotate: '4deg' },
  { word: 'das', left: '28%', top: '24%', size: 42, duration: 8000, dx: 22, dy: -14, scale: 1.06, rotate: '-4deg' },
  { word: 'die', left: '74%', top: '34%', size: 36, duration: 8750, dx: 16, dy: 20, scale: 1.07, rotate: '6deg' },
  { word: 'der', left: '14%', top: '48%', size: 60, duration: 9500, dx: -18, dy: 18, scale: 1.1, rotate: '-6deg' },
  { word: 'das', left: '56%', top: '54%', size: 40, duration: 8500, dx: 18, dy: -20, scale: 1.08, rotate: '5deg' },
  { word: 'der', left: '22%', top: '70%', size: 32, duration: 7250, dx: 14, dy: 14, scale: 1.05, rotate: '-3deg' },
  { word: 'die', left: '68%', top: '74%', size: 48, duration: 9250, dx: -16, dy: 18, scale: 1.1, rotate: '5deg' },
  { word: 'das', left: '40%', top: '84%', size: 38, duration: 7750, dx: 18, dy: -12, scale: 1.06, rotate: '-4deg' },
  { word: 'der', left: '2%', top: '30%', size: 26, duration: 8200, dx: 16, dy: -10, scale: 1.04, rotate: '3deg' },
  { word: 'die', left: '86%', top: '18%', size: 30, duration: 7800, dx: -14, dy: 12, scale: 1.05, rotate: '-5deg' },
  { word: 'das', left: '6%', top: '60%', size: 28, duration: 8900, dx: 12, dy: 18, scale: 1.03, rotate: '4deg' },
  { word: 'die', left: '88%', top: '56%', size: 34, duration: 8300, dx: -18, dy: -12, scale: 1.06, rotate: '-6deg' },
  { word: 'der', left: '48%', top: '40%', size: 24, duration: 7600, dx: 10, dy: 14, scale: 1.04, rotate: '2deg' },
  { word: 'das', left: '50%', top: '94%', size: 30, duration: 9100, dx: -12, dy: -16, scale: 1.05, rotate: '-3deg' },
] satisfies FloatingArticleConfig[];

const defaultSettings: Settings = {
  soundEnabled: true,
  vibrationEnabled: true,
  language: 'tr',
  theme: 'light',
};

const createEmptyStats = (): AppStats => ({
  totalRounds: 0,
  totalAnswers: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  bestScore: 0,
  bestStreak: 0,
  levelStats: {
    A1: { correct: 0, wrong: 0 },
    A2: { correct: 0, wrong: 0 },
    B1: { correct: 0, wrong: 0 },
    B2: { correct: 0, wrong: 0 },
    C1: { correct: 0, wrong: 0 },
    C2: { correct: 0, wrong: 0 },
  },
});

const shuffle = <T,>(items: T[]) => {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
};

const WORD_SEED_TRANSLATIONS = new Map(
  WORD_SEEDS.map((word) => [`${word.level}-${word.article}-${word.word}`, word.translation] as const),
);

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

const LEVEL_POOLS: Record<LevelId, WordSeed[]> = {
  A1: buildLevelPool('A1'),
  A2: buildLevelPool('A2'),
  B1: buildLevelPool('B1'),
  B2: buildLevelPool('B2'),
  C1: buildLevelPool('C1'),
  C2: buildLevelPool('C2'),
};

const buildRound = (level: LevelId) => {
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

const buildRoundFromPool = (pool: WordSeed[], count: number) => {
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

const buildQuestionOptions = (correctAnswer: string) =>
  shuffle([correctAnswer, ...shuffle(ARTICLE_OPTIONS.filter((option) => option !== correctAnswer)).slice(0, 2)]);

type CasePromptCategory =
  | 'person'
  | 'animal'
  | 'food'
  | 'place'
  | 'vehicle'
  | 'document'
  | 'abstract'
  | 'object';

const PERSON_KEYWORDS = ['person', 'people', 'man', 'woman', 'child', 'teacher', 'student', 'doctor', 'worker', 'citizen', 'president', 'member', 'friend', 'guest', 'tourist', 'european', 'deputy', 'human'];
const ANIMAL_KEYWORDS = ['dog', 'cat', 'bird', 'mouse', 'lion', 'snake', 'insect', 'sheep', 'eagle', 'monkey', 'fish', 'horse', 'bear', 'tiger', 'wolf', 'animal', 'eel'];
const FOOD_KEYWORDS = ['bread', 'banana', 'egg', 'salad', 'rice', 'soup', 'ice cream', 'dinner', 'food', 'meal', 'drink', 'coffee', 'tea', 'cake', 'fruit', 'vegetable', 'meat', 'cheese'];
const PLACE_KEYWORDS = ['city', 'country', 'village', 'garden', 'forest', 'office', 'market', 'school', 'university', 'factory', 'room', 'house', 'home', 'park', 'station', 'hospital', 'company', 'environment', 'building'];
const VEHICLE_KEYWORDS = ['car', 'bus', 'train', 'bike', 'bicycle', 'plane', 'ship', 'truck', 'vehicle'];
const DOCUMENT_KEYWORDS = ['document', 'newspaper', 'ticket', 'passport', 'letter', 'book', 'paper', 'report', 'illustration', 'query', 'preparation', 'post'];
const ABSTRACT_KEYWORDS = ['freedom', 'health', 'system', 'progress', 'experience', 'knowledge', 'discourse', 'behavior', 'perception', 'viewpoint', 'method', 'consensus', 'consequence', 'paradigm', 'contradiction', 'interaction', 'phenomenon', 'exchange', 'justification', 'structure', 'impulse', 'aesthetics', 'analogy', 'alignment', 'prevention', 'potential', 'leadership', 'departure', 'takeoff', 'tax', 'cancellation'];

function pickCasePromptCategory(word: WordSeed): CasePromptCategory {
  const translation = word.translation.en.toLowerCase();

  if (PERSON_KEYWORDS.some((keyword) => translation.includes(keyword))) {
    return 'person';
  }
  if (ANIMAL_KEYWORDS.some((keyword) => translation.includes(keyword))) {
    return 'animal';
  }
  if (FOOD_KEYWORDS.some((keyword) => translation.includes(keyword))) {
    return 'food';
  }
  if (PLACE_KEYWORDS.some((keyword) => translation.includes(keyword))) {
    return 'place';
  }
  if (VEHICLE_KEYWORDS.some((keyword) => translation.includes(keyword))) {
    return 'vehicle';
  }
  if (DOCUMENT_KEYWORDS.some((keyword) => translation.includes(keyword))) {
    return 'document';
  }
  if (ABSTRACT_KEYWORDS.some((keyword) => translation.includes(keyword))) {
    return 'abstract';
  }

  return 'object';
}

function buildCasePrompt(word: WordSeed, kind: 'nominative' | 'accusative' | 'dative') {
  const category = pickCasePromptCategory(word);

  const prompts: Record<CasePromptCategory, Record<'nominative' | 'accusative' | 'dative', string>> = {
    person: {
      nominative: `Das ist ___ ${word.word}.`,
      accusative: `Ich kenne ___ ${word.word}.`,
      dative: `Ich helfe ___ ${word.word}.`,
    },
    animal: {
      nominative: `Das ist ___ ${word.word}.`,
      accusative: `Ich sehe ___ ${word.word}.`,
      dative: `Ich spiele mit ___ ${word.word}.`,
    },
    food: {
      nominative: `Hier ist ___ ${word.word}.`,
      accusative: `Ich bestelle ___ ${word.word}.`,
      dative: `Ich koche mit ___ ${word.word}.`,
    },
    place: {
      nominative: `Dort ist ___ ${word.word}.`,
      accusative: `Ich besuche ___ ${word.word}.`,
      dative: `Ich bin in ___ ${word.word}.`,
    },
    vehicle: {
      nominative: `Das ist ___ ${word.word}.`,
      accusative: `Ich benutze ___ ${word.word}.`,
      dative: `Ich fahre mit ___ ${word.word}.`,
    },
    document: {
      nominative: `Das ist ___ ${word.word}.`,
      accusative: `Ich lese ___ ${word.word}.`,
      dative: `Ich arbeite mit ___ ${word.word}.`,
    },
    abstract: {
      nominative: `Das ist ___ ${word.word}.`,
      accusative: `Wir besprechen ___ ${word.word}.`,
      dative: `Wir arbeiten mit ___ ${word.word}.`,
    },
    object: {
      nominative: `Das ist ___ ${word.word}.`,
      accusative: `Ich benutze ___ ${word.word}.`,
      dative: `Ich arbeite mit ___ ${word.word}.`,
    },
  };

  return prompts[category][kind];
}

const buildClassicQuestions = (words: WordSeed[]): GameQuestion[] =>
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

const buildFindWrongQuestions = (words: WordSeed[]) =>
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

const buildCaseQuestions = (words: WordSeed[]): GameQuestion[] =>
  words.flatMap((word) => {
    const nominative = CASE_ARTICLES[word.article].nominative;
    const accusative = CASE_ARTICLES[word.article].accusative;
    const dative = CASE_ARTICLES[word.article].dative;

    return [
      {
        ...word,
        id: `${word.id}-article`,
        kind: 'article',
        prompt: `___ ${word.word}`,
        answer: word.article,
        options: [...ARTICLES],
        label: {
          tr: 'Artikel',
          en: 'Article',
        },
      },
      {
        ...word,
        id: `${word.id}-nom`,
        kind: 'nominative',
        prompt: buildCasePrompt(word, 'nominative'),
        answer: nominative,
        options: buildQuestionOptions(nominative),
        label: {
          tr: 'Nominativ',
          en: 'Nominative',
        },
      },
      {
        ...word,
        id: `${word.id}-akk`,
        kind: 'accusative',
        prompt: buildCasePrompt(word, 'accusative'),
        answer: accusative,
        options: buildQuestionOptions(accusative),
        label: {
          tr: 'Akkusativ',
          en: 'Accusative',
        },
      },
      {
        ...word,
        id: `${word.id}-dat`,
        kind: 'dative',
        prompt: buildCasePrompt(word, 'dative'),
        answer: dative,
        options: buildQuestionOptions(dative),
        label: {
          tr: 'Dativ',
          en: 'Dative',
        },
      },
    ];
  });

function FloatingArticlesBackground() {
  const animatedValues = useRef(
    FLOATING_ARTICLES.map(() => ({
      x: new Animated.Value(0),
      y: new Animated.Value(0),
      scale: new Animated.Value(1),
    })),
  ).current;

  useEffect(() => {
    const animations = animatedValues.map((value, index) => {
      const item = FLOATING_ARTICLES[index];
      return Animated.loop(
        Animated.sequence([
          Animated.parallel([
            Animated.timing(value.x, {
              toValue: item.dx,
              duration: item.duration,
              easing: Easing.inOut(Easing.sin),
              useNativeDriver: true,
            }),
            Animated.timing(value.y, {
              toValue: item.dy,
              duration: item.duration,
              easing: Easing.inOut(Easing.sin),
              useNativeDriver: true,
            }),
            Animated.timing(value.scale, {
              toValue: item.scale,
              duration: item.duration,
              easing: Easing.inOut(Easing.sin),
              useNativeDriver: true,
            }),
          ]),
          Animated.parallel([
            Animated.timing(value.x, {
              toValue: 0,
              duration: item.duration,
              easing: Easing.inOut(Easing.sin),
              useNativeDriver: true,
            }),
            Animated.timing(value.y, {
              toValue: 0,
              duration: item.duration,
              easing: Easing.inOut(Easing.sin),
              useNativeDriver: true,
            }),
            Animated.timing(value.scale, {
              toValue: 1,
              duration: item.duration,
              easing: Easing.inOut(Easing.sin),
              useNativeDriver: true,
            }),
          ]),
        ]),
      );
    });

    animations.forEach((animation) => animation.start());
    return () => animations.forEach((animation) => animation.stop());
  }, [animatedValues]);

  return (
    <View pointerEvents="none" style={styles.levelBackgroundLayer}>
      <LinearGradient
        colors={['#fbfcfd', '#f4f7f8', '#eef3f5']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={[styles.backgroundGlow, styles.backgroundGlowLeft]} />
      <View style={[styles.backgroundGlow, styles.backgroundGlowRight]} />
      {FLOATING_ARTICLES.map((item, index) => (
        <Animated.Text
          key={`${item.word}-${index}`}
          style={[
            styles.floatingArticle,
            {
              left: item.left,
              top: item.top,
              fontSize: item.size,
              transform: [
                { translateX: animatedValues[index].x },
                { translateY: animatedValues[index].y },
                { scale: animatedValues[index].scale },
                { rotate: item.rotate },
              ],
            },
          ]}
        >
          {item.word}
        </Animated.Text>
      ))}
      <BlurView tint="light" intensity={2} style={StyleSheet.absoluteFillObject} />
    </View>
  );
}

function HomePremiumBackground() {
  return (
    <View pointerEvents="none" style={styles.homeBackgroundLayer}>
      <LinearGradient
        colors={['#fffdf7', '#f7efe1', '#eef2f7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFillObject}
      />
      <LinearGradient
        colors={['rgba(255,255,255,0.72)', 'rgba(255,255,255,0.18)', 'rgba(255,255,255,0.00)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.homeBackgroundWash}
      />
      <LinearGradient
        colors={['rgba(244, 181, 70, 0.34)', 'rgba(244, 181, 70, 0.08)', 'rgba(244, 181, 70, 0.00)']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.9, y: 0.9 }}
        style={styles.homeBackgroundBlobWarm}
      />
      <LinearGradient
        colors={['rgba(125, 161, 214, 0.30)', 'rgba(125, 161, 214, 0.08)', 'rgba(125, 161, 214, 0.00)']}
        start={{ x: 0.2, y: 0.2 }}
        end={{ x: 1, y: 1 }}
        style={styles.homeBackgroundBlobCool}
      />
      <LinearGradient
        colors={['rgba(255,255,255,0.46)', 'rgba(255,255,255,0.04)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.homeBackgroundRibbon}
      />
    </View>
  );
}

function GradientButton({
  label,
  onPress,
  variant = 'blue',
  small = false,
  square = false,
  animated = false,
  tall = false,
}: {
  label: string;
  onPress: () => void;
  variant?: GradientButtonVariant;
  small?: boolean;
  square?: boolean;
  animated?: boolean;
  tall?: boolean;
}) {
  const theme = BUTTON_GRADIENTS[variant];
  const gradientShift = useRef(new Animated.Value(0)).current;
  const directionRef = useRef(Math.random() > 0.5 ? 1 : -1);

  useEffect(() => {
    if (!animated) {
      return;
    }

    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(gradientShift, {
          toValue: 1,
          duration: 1900,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(gradientShift, {
          toValue: 0,
          duration: 1900,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    );

    loop.start();
    return () => loop.stop();
  }, [animated, gradientShift]);

  const animatedTranslate = gradientShift.interpolate({
    inputRange: [0, 1],
    outputRange:
      directionRef.current === 1
        ? [-90, 30]
        : [30, -90],
  });

  return (
    <Pressable
      style={[styles.gradientButtonShell, small && styles.gradientButtonShellSmall, square && styles.gradientButtonShellSquare]}
      onPress={onPress}
    >
      {animated ? (
        <View style={[styles.gradientButtonFill, styles.gradientButtonAnimatedWrap, small && styles.gradientButtonFillSmall, square && styles.gradientButtonFillSquare, tall && styles.gradientButtonFillTall]}>
          <Animated.View
            style={[
              styles.gradientButtonAnimatedTrack,
              { transform: [{ translateX: animatedTranslate }] },
            ]}
          >
            <LinearGradient
              colors={[theme.colors[0], theme.colors[1], theme.colors[2], theme.colors[1], theme.colors[0]]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.gradientButtonAnimatedFill}
            />
          </Animated.View>
          <Text
            style={[
              styles.gradientButtonText,
              styles.gradientButtonTextOverlay,
              { color: theme.textColor },
              small && styles.gradientButtonTextSmall,
              square && styles.gradientButtonTextSquare,
              tall && styles.gradientButtonTextTall,
            ]}
          >
            {label}
          </Text>
        </View>
      ) : (
        <LinearGradient
          colors={theme.colors}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={[styles.gradientButtonFill, small && styles.gradientButtonFillSmall, square && styles.gradientButtonFillSquare, tall && styles.gradientButtonFillTall]}
        >
          <Text
            style={[
              styles.gradientButtonText,
              styles.gradientButtonTextOverlay,
              { color: theme.textColor },
              small && styles.gradientButtonTextSmall,
              square && styles.gradientButtonTextSquare,
              tall && styles.gradientButtonTextTall,
            ]}
          >
            {label}
          </Text>
        </LinearGradient>
      )}
    </Pressable>
  );
}

function RotatingWordBadge({ label }: { label: string }) {
  const spin = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(spin, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    loop.start();
    return () => loop.stop();
  }, [spin]);

  const rotate = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.wordBadgeWrap}>
      <Animated.View style={[styles.wordBadgeStar, { transform: [{ rotate }] }]}>
        <Text style={styles.wordBadgeStarText}>✷</Text>
      </Animated.View>
      <Text style={styles.wordBadgeLabelTop}>{label.split(' ')[0]}</Text>
      <Text style={styles.wordBadgeLabelBottom}>{label.split(' ').slice(1).join(' ')}</Text>
    </View>
  );
}

function FlippableWordCard({
  item,
  language,
  isFlipped,
  onPress,
}: {
  item: WordListItem;
  language: Language;
  isFlipped: boolean;
  onPress: () => void;
}) {
  const rotation = useRef(new Animated.Value(isFlipped ? 180 : 0)).current;

  useEffect(() => {
    Animated.timing(rotation, {
      toValue: isFlipped ? 180 : 0,
      duration: 280,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [isFlipped, rotation]);

  const frontRotate = rotation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backRotate = rotation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  return (
    <Pressable style={styles.wordCardPressable} onPress={onPress}>
      <View style={styles.wordCardFlipContainer}>
        <Animated.View
          style={[
            styles.wordCardFace,
            {
              transform: [
                { perspective: 1000 },
                { rotateY: frontRotate },
              ],
            },
          ]}
        >
          <LinearGradient
            colors={ARTICLE_CARD_GRADIENTS[item.article]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.wordCard, { borderColor: `${ARTICLE_COLORS[item.article]}88` }]}
          >
            <Text style={styles.wordCardLevelText}>{item.level}</Text>
            <Text style={styles.wordCardArticle}>{item.article}</Text>
            <Text style={styles.wordCardWord}>{item.word}</Text>
          </LinearGradient>
        </Animated.View>

        <Animated.View
          style={[
            styles.wordCardFace,
            {
              transform: [
                { perspective: 1000 },
                { rotateY: backRotate },
              ],
            },
          ]}
        >
          <LinearGradient
            colors={ARTICLE_CARD_GRADIENTS[item.article]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.wordCard, styles.wordCardBackFace, { borderColor: `${ARTICLE_COLORS[item.article]}88` }]}
          >
            <Text style={styles.wordCardTranslation}>
              {item.translation[language]}
            </Text>
          </LinearGradient>
        </Animated.View>
      </View>
    </Pressable>
  );
}

function hexToRgb(hex: string) {
  const normalized = hex.replace('#', '');
  const value = normalized.length === 3
    ? normalized.split('').map((char) => char + char).join('')
    : normalized;

  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16),
  };
}

function rgbToHex(r: number, g: number, b: number) {
  return `#${[r, g, b]
    .map((channel) => Math.max(0, Math.min(255, Math.round(channel))).toString(16).padStart(2, '0'))
    .join('')}`;
}

function interpolateColor(startHex: string, endHex: string, amount: number) {
  const start = hexToRgb(startHex);
  const end = hexToRgb(endHex);

  return rgbToHex(
    start.r + (end.r - start.r) * amount,
    start.g + (end.g - start.g) * amount,
    start.b + (end.b - start.b) * amount,
  );
}

function getPerformanceColor(ratio: number) {
  const safeRatio = Math.max(0, Math.min(100, ratio));
  const colorStops = [
    { stop: 0, color: '#dc2626' },
    { stop: 45, color: '#f97316' },
    { stop: 70, color: '#eab308' },
    { stop: 85, color: '#84cc16' },
    { stop: 100, color: '#15803d' },
  ];

  for (let index = 0; index < colorStops.length - 1; index += 1) {
    const current = colorStops[index];
    const next = colorStops[index + 1];

    if (safeRatio <= next.stop) {
      const range = next.stop - current.stop;
      const amount = range === 0 ? 0 : (safeRatio - current.stop) / range;
      return interpolateColor(current.color, next.color, amount);
    }
  }

  return colorStops[colorStops.length - 1].color;
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [isReady, setIsReady] = useState(false);
  const [stats, setStats] = useState<AppStats>(createEmptyStats);
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [selectedLevel, setSelectedLevel] = useState<LevelId>('A1');
  const [selectedGameFamily, setSelectedGameFamily] = useState<GameFamily>('article');
  const [selectedGameMode, setSelectedGameMode] = useState<GameMode>('classic');
  const [wordListPage, setWordListPage] = useState(0);
  const [wordListMode, setWordListMode] = useState<WordListMode>('menu');
  const [activeWordCardId, setActiveWordCardId] = useState<string | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [selectedArticleFilter, setSelectedArticleFilter] = useState<Article | null>(null);
  const [selectedWordLevel, setSelectedWordLevel] = useState<LevelId | null>(null);
  const [currentRound, setCurrentRound] = useState<GameQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(STARTING_LIVES);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [roundBestStreak, setRoundBestStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [answerState, setAnswerState] = useState<{ selected: string; correct: boolean } | null>(null);
  const [selectedWrongArticle, setSelectedWrongArticle] = useState<string | null>(null);
  const [lastSummary, setLastSummary] = useState<RoundSummary | null>(null);
  const [mistakes, setMistakes] = useState<WordSeed[]>([]);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [confettiSeeds, setConfettiSeeds] = useState<ConfettiSeed[]>(() => buildConfettiSeeds());

  const truePlayer = useMemo(() => createAudioPlayer(require('./assets/sounds/true.wav')), []);
  const falsePlayer = useMemo(() => createAudioPlayer(require('./assets/sounds/false.wav')), []);
  const buttonPlayer = useMemo(() => createAudioPlayer(require('./assets/sounds/button.wav')), []);
  const completePlayer = useMemo(() => createAudioPlayer(require('./assets/sounds/complete.wav')), []);
  const failPlayer = useMemo(() => createAudioPlayer(require('./assets/sounds/fail.wav')), []);
  const shakeValue = useRef(new Animated.Value(0)).current;
  const confettiValue = useRef(new Animated.Value(0)).current;
  const currentQuestion = currentRound[currentIndex];
  const t = COPY[settings.language];
  const effectiveTheme = settings.theme;
  const uiTheme = APP_THEMES[effectiveTheme];
  const allWordListItems = useMemo<WordListItem[]>(
    () =>
      LEVELS.flatMap((level) =>
        WORD_LISTS[level].map((item) => ({
          ...item,
          level,
        })),
      ).sort((a, b) => a.word.localeCompare(b.word, 'de')),
    [],
  );
  const wordListLetters = useMemo(
    () => Array.from(new Set(allWordListItems.map((item) => item.word.charAt(0).toUpperCase()))).sort((a, b) => a.localeCompare(b, 'de')),
    [allWordListItems],
  );
  const totalWordPages = Math.ceil(allWordListItems.length / WORDS_PER_PAGE);
  const currentWordListPageItems = useMemo(
    () => allWordListItems.slice(wordListPage * WORDS_PER_PAGE, (wordListPage + 1) * WORDS_PER_PAGE),
    [allWordListItems, wordListPage],
  );
  const filteredWordListItems = useMemo(() => {
    if (wordListMode === 'letters' && selectedLetter) {
      return allWordListItems.filter((item) => item.word.toUpperCase().startsWith(selectedLetter));
    }

    if (wordListMode === 'articles' && selectedArticleFilter) {
      return allWordListItems.filter((item) => item.article === selectedArticleFilter);
    }

    if (wordListMode === 'levels' && selectedWordLevel) {
      return allWordListItems.filter((item) => item.level === selectedWordLevel);
    }

    return [];
  }, [allWordListItems, selectedArticleFilter, selectedLetter, selectedWordLevel, wordListMode]);
  const wordListSelectionLabel = selectedLetter ?? selectedArticleFilter ?? selectedWordLevel ?? '';
  const paginatedWordListTotalPages =
    (wordListMode === 'levels' && selectedWordLevel) || (wordListMode === 'articles' && selectedArticleFilter)
      ? Math.max(1, Math.ceil(filteredWordListItems.length / WORDS_PER_PAGE))
      : 0;
  const visibleWordListItems =
    ((wordListMode === 'levels' && selectedWordLevel) || (wordListMode === 'articles' && selectedArticleFilter))
      ? filteredWordListItems.slice(wordListPage * WORDS_PER_PAGE, (wordListPage + 1) * WORDS_PER_PAGE)
      : filteredWordListItems;
  const showPaginatedNavigation =
    (((wordListMode === 'levels' && selectedWordLevel) || (wordListMode === 'articles' && selectedArticleFilter))
      && paginatedWordListTotalPages > 1);

  const accuracy =
    stats.totalAnswers === 0 ? 0 : Math.round((stats.correctAnswers / stats.totalAnswers) * 100);
  const statsCards = [
    { key: 'rounds', label: t.totalRounds, value: String(stats.totalRounds), color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
    { key: 'answers', label: t.totalAnswers, value: String(stats.totalAnswers), color: '#0f766e', bg: '#ecfdf5', border: '#99f6e4' },
    { key: 'accuracy', label: t.accuracy, value: `%${accuracy}`, color: '#ca8a04', bg: '#fffbeb', border: '#fde68a' },
    { key: 'score', label: t.bestScore, value: String(stats.bestScore), color: '#c2410c', bg: '#fff7ed', border: '#fdba74' },
  ];

  const confettiOpacity = confettiValue.interpolate({
    inputRange: [0, 0.2, 1],
    outputRange: [0, 1, 0],
  });

  const confettiPieces = useMemo(
    () =>
      confettiSeeds.map((piece, index) => {
        const translateX = confettiValue.interpolate({
          inputRange: [0, 0.18, 1],
          outputRange: [0, piece.dx * 0.35, piece.dx],
        });
        const translateY = confettiValue.interpolate({
          inputRange: [0, 0.18, 1],
          outputRange: [0, piece.dy * 0.35, piece.dy],
        });
        const scale = confettiValue.interpolate({
          inputRange: [0, 0.15, 1],
          outputRange: [0.4, 1, 0.7],
        });
        const spin = confettiValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', piece.rotate],
        });
        return { ...piece, translateX, translateY, scale, spin };
      }),
    [confettiSeeds, confettiValue],
  );

  useEffect(() => {
    const loadData = async () => {
      try {
        await setAudioModeAsync({ playsInSilentMode: true });
        const raw = await AsyncStorage.getItem(STORAGE_KEY);

        if (raw) {
          const parsed = JSON.parse(raw) as Partial<AppData>;
          setStats(parsed.stats ? { ...createEmptyStats(), ...parsed.stats } : createEmptyStats());
          setSettings(parsed.settings ? { ...defaultSettings, ...parsed.settings } : defaultSettings);
          setMistakes(parsed.mistakes ?? []);
        }
      } finally {
        setIsReady(true);
      }
    };

    loadData();

    return () => {
      truePlayer.remove?.();
      falsePlayer.remove?.();
      buttonPlayer.remove?.();
      completePlayer.remove?.();
      failPlayer.remove?.();
    };
  }, [buttonPlayer, completePlayer, failPlayer, falsePlayer, truePlayer]);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ stats, settings, mistakes })).catch(() => null);
  }, [isReady, mistakes, settings, stats]);

  useEffect(() => {
    setActiveWordCardId(null);
  }, [screen, wordListMode, wordListPage, selectedLetter, selectedArticleFilter, selectedWordLevel]);

  const playFeedbackSound = (kind: 'true' | 'false') => {
    if (!settings.soundEnabled) {
      return;
    }

    const player = kind === 'true' ? truePlayer : falsePlayer;
    try {
      player.seekTo(0);
      player.play();
    } catch {
      return;
    }
  };

  const playButtonSound = () => {
    if (!settings.soundEnabled) {
      return;
    }

    try {
      buttonPlayer.seekTo(0);
      buttonPlayer.play();
    } catch {
      return;
    }
  };

  const playRoundEndSound = (kind: 'complete' | 'fail') => {
    if (!settings.soundEnabled) {
      return;
    }

    const player = kind === 'complete' ? completePlayer : failPlayer;
    try {
      player.seekTo(0);
      player.play();
    } catch {
      return;
    }
  };

  useEffect(() => {
    if (screen !== 'game' || selectedGameMode !== 'timed' || timeLeft === null) {
      return;
    }

    if (timeLeft <= 0) {
      playRoundEndSound('complete');
      finishRound(score, correctCount, wrongCount, roundBestStreak);
      return;
    }

    const timeoutId = setTimeout(() => {
      setTimeLeft((previous) => (previous === null ? previous : previous - 1));
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [correctCount, roundBestStreak, score, screen, selectedGameMode, timeLeft, wrongCount]);

  const handleButtonPress = (action: () => void) => {
    playButtonSound();
    action();
  };

  const startConfetti = () => {
    setConfettiSeeds(buildConfettiSeeds());
    confettiValue.setValue(0);
    Animated.timing(confettiValue, {
      toValue: 1,
      duration: ANSWER_DELAY_MS - 150,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  };

  const startShake = () => {
    shakeValue.setValue(0);
    Animated.sequence([
      Animated.timing(shakeValue, { toValue: 1, duration: 70, useNativeDriver: true }),
      Animated.timing(shakeValue, { toValue: -1, duration: 70, useNativeDriver: true }),
      Animated.timing(shakeValue, { toValue: 1, duration: 60, useNativeDriver: true }),
      Animated.timing(shakeValue, { toValue: -1, duration: 60, useNativeDriver: true }),
      Animated.timing(shakeValue, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  const startGame = (level: LevelId, family: GameFamily = 'article', mode: GameMode = 'classic') => {
    const reviewPool =
      mode === 'review'
        ? mistakes.filter((item) => item.level === level)
        : [];
    const nextWords =
      mode === 'timed'
        ? buildRoundFromPool(LEVEL_POOLS[level], LEVEL_POOLS[level].length)
        : mode === 'review'
          ? buildRoundFromPool(reviewPool, ROUND_LENGTH)
          : family === 'case'
            ? buildRound(level).slice(0, CASE_WORD_COUNT)
          : buildRound(level);

    if (mode === 'review' && nextWords.length === 0) {
      Alert.alert(t.info, t.noReviewWords);
      return;
    }

    const nextRound =
      family === 'case'
        ? buildCaseQuestions(nextWords)
        : mode === 'find_wrong'
          ? buildFindWrongQuestions(nextWords)
          : buildClassicQuestions(nextWords);

    setSelectedLevel(level);
    setSelectedGameFamily(family);
    setSelectedGameMode(mode);
    setCurrentRound(nextRound);
    setCurrentIndex(0);
    setScore(0);
    setLives(mode === 'timed' ? 0 : mode === 'one_life' ? 1 : STARTING_LIVES);
    setCurrentStreak(0);
    setRoundBestStreak(0);
    setCorrectCount(0);
    setWrongCount(0);
    setAnswerState(null);
    setSelectedWrongArticle(null);
    setTimeLeft(mode === 'timed' ? TIMED_MODE_SECONDS : null);
    setScreen('game');
  };

  const finishRound = (
    finalScore: number,
    finalCorrect: number,
    finalWrong: number,
    finalBestStreak: number,
  ) => {
    setLastSummary({
      score: finalScore,
      correct: finalCorrect,
      wrong: finalWrong,
      bestStreak: finalBestStreak,
      level: selectedLevel,
      family: selectedGameFamily,
      mode: selectedGameMode,
    });

    setStats((previous) => ({
      ...previous,
      totalRounds: previous.totalRounds + 1,
      totalAnswers: previous.totalAnswers + finalCorrect + finalWrong,
      correctAnswers: previous.correctAnswers + finalCorrect,
      wrongAnswers: previous.wrongAnswers + finalWrong,
      bestScore: Math.max(previous.bestScore, finalScore),
      bestStreak: Math.max(previous.bestStreak, finalBestStreak),
      levelStats: {
        ...previous.levelStats,
        [selectedLevel]: {
          correct: previous.levelStats[selectedLevel].correct + finalCorrect,
          wrong: previous.levelStats[selectedLevel].wrong + finalWrong,
        },
      },
    }));

    setTimeLeft(null);
    setScreen('results');
  };

  const handleAnswer = (selected: string) => {
    if (!currentQuestion || answerState) {
      return;
    }

    const isCorrect = selected === currentQuestion.answer;
    const nextCorrect = isCorrect ? correctCount + 1 : correctCount;
    const nextWrong = isCorrect ? wrongCount : wrongCount + 1;
    const nextStreak = isCorrect ? currentStreak + 1 : 0;
    const nextBestStreak = Math.max(roundBestStreak, nextStreak);
    const nextLives = selectedGameMode === 'timed' ? lives : isCorrect ? lives : lives - 1;
    const nextScore = isCorrect ? score + 10 + currentStreak * 2 : Math.max(0, score - 4);

    setAnswerState({ selected, correct: isCorrect });
    setScore(nextScore);
    setCorrectCount(nextCorrect);
    setWrongCount(nextWrong);
    setCurrentStreak(nextStreak);
    setRoundBestStreak(nextBestStreak);

    if (isCorrect) {
      playFeedbackSound('true');
      startConfetti();
    } else {
      playFeedbackSound('false');
      setSelectedWrongArticle(selected);
      setMistakes((previous) => {
        const exists = previous.some((item) => item.level === currentQuestion.level && item.word === currentQuestion.word && item.article === currentQuestion.article);
        if (exists) {
          return previous;
        }
        return [currentQuestion, ...previous].slice(0, 250);
      });
      if (settings.vibrationEnabled) {
        Vibration.vibrate(120);
      }
      startShake();
    }

    setTimeout(() => {
      const roundFinished = currentIndex + 1 >= currentRound.length;
      const noLivesLeft = selectedGameMode !== 'timed' && !isCorrect && nextLives <= 0;

      if (!isCorrect && selectedGameMode !== 'timed') {
        setLives(nextLives);
      }

      if (roundFinished || noLivesLeft) {
        playRoundEndSound(noLivesLeft ? 'fail' : 'complete');
        setAnswerState(null);
        setSelectedWrongArticle(null);
        finishRound(nextScore, nextCorrect, nextWrong, nextBestStreak);
        return;
      }

      setCurrentIndex((previous) => previous + 1);
      setAnswerState(null);
      setSelectedWrongArticle(null);
    }, ANSWER_DELAY_MS);
  };

  const confirmReturnHome = () => {
    Alert.alert(t.confirmHomeTitle, t.confirmHomeBody, [
      { text: t.cancel, style: 'cancel' },
      {
        text: t.back,
        style: 'destructive',
        onPress: () => {
          setAnswerState(null);
          setSelectedWrongArticle(null);
          setScreen('home');
        },
      },
    ]);
  };

  const resetProgress = () => {
    Alert.alert(t.confirmResetTitle, t.confirmResetBody, [
      { text: t.cancel, style: 'cancel' },
      {
        text: t.reset,
        style: 'destructive',
        onPress: async () => {
          const empty = createEmptyStats();
          setStats(empty);
          setMistakes([]);
          setLastSummary(null);
          await AsyncStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ stats: empty, settings, mistakes: [] }),
          );
        },
      },
    ]);
  };

  const handleExit = () => {
    if (Platform.OS === 'android') {
      BackHandler.exitApp();
      return;
    }

    Alert.alert(t.info, t.iosExitInfo);
  };

  const answerButtonStyle = (option: string) => {
    const isSelected = answerState?.selected === option;
    const isCorrectAnswer = answerState && currentQuestion?.answer === option;
    const isWrongSelection = selectedWrongArticle === option;
    const optionColor = ARTICLE_FORM_COLORS[option as keyof typeof ARTICLE_FORM_COLORS] ?? '#64748b';
    const animatedTransform =
      isWrongSelection
        ? {
            transform: [
              {
                translateX: shakeValue.interpolate({
                  inputRange: [-1, 1],
                  outputRange: [-10, 10],
                }),
              },
            ],
          }
        : undefined;

    return {
      wrapper: animatedTransform,
      button: [
        styles.answerButton,
        { backgroundColor: optionColor, borderColor: optionColor },
        isSelected && !answerState?.correct && styles.answerButtonWrong,
        isCorrectAnswer && styles.answerButtonCorrect,
      ],
    };
  };

  if (!isReady) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: uiTheme.background }]}>
        <StatusBar style={effectiveTheme === 'dark' ? 'light' : 'dark'} />
        <View style={[styles.screen, styles.centered]}>
          <Text style={[styles.loadingTitle, { color: uiTheme.loadingTitle }]}>Der Die Das</Text>
          <Text style={[styles.loadingSubtitle, { color: uiTheme.loadingSubtitle }]}>{t.loading}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: uiTheme.background }]}>
      <StatusBar style={effectiveTheme === 'dark' ? 'light' : 'dark'} />

      {screen === 'home' && (
        <View style={styles.screen}>
          <View style={styles.logoWrap}>
            <Image
              source={require('./assets/logo/logo.png')}
              style={styles.homeLogo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.homeStartWrap}>
            <View style={styles.homeStartButton}>
              <GradientButton tall animated label={t.start} variant="gold" onPress={() => handleButtonPress(() => setScreen('levels'))} />
            </View>
          </View>

          <View style={styles.homeMenuGrid}>
            <GradientButton square label={t.statistics} variant="blue" onPress={() => handleButtonPress(() => setScreen('stats'))} />
            <GradientButton
              square
              label={t.wordList}
              variant="teal"
              onPress={() =>
                handleButtonPress(() => {
                  setWordListMode('menu');
                  setSelectedLetter(null);
                  setSelectedArticleFilter(null);
                  setScreen('wordList');
                })
              }
            />
            <GradientButton square label={t.settings} variant="berry" onPress={() => handleButtonPress(() => setScreen('settings'))} />
            <GradientButton square label={t.exit} variant="slate" onPress={() => handleButtonPress(handleExit)} />
          </View>
        </View>
      )}

      {screen === 'levels' && (
        <View style={styles.levelsScreen}>
          <ScrollView contentContainerStyle={styles.levelsScrollContent}>
            <View style={styles.levelHeaderRow}>
              <Text style={[styles.sectionTitle, { color: uiTheme.title }]}>{t.chooseLevel}</Text>
              <RotatingWordBadge label={t.totalWords} />
            </View>

            {LEVELS.map((level) => (
              <Pressable
                key={level}
                style={styles.levelCard}
                onPress={() =>
                  handleButtonPress(() => {
                    setSelectedLevel(level);
                    setScreen('gameModes');
                  })
                }
              >
                <LinearGradient
                  colors={LEVEL_GRADIENTS[level].colors}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={styles.levelGradient}
                >
                  <View>
                    <Text style={[styles.levelTitle, { color: LEVEL_GRADIENTS[level].textColor }]}>{level}</Text>
                    <Text style={[styles.levelSubtitle, { color: LEVEL_GRADIENTS[level].textColor }]}>
                      {LEVEL_META[settings.language][level].subtitle}
                    </Text>
                  </View>
                </LinearGradient>
              </Pressable>
            ))}

            <GradientButton label={t.home} variant="slate" onPress={() => handleButtonPress(() => setScreen('home'))} />
          </ScrollView>
        </View>
      )}

      {screen === 'gameModes' && (
        <View style={styles.levelsScreen}>
          <ScrollView contentContainerStyle={styles.levelsScrollContent}>
            <Text style={[styles.sectionTitle, { color: uiTheme.title }]}>{t.chooseGameMode}</Text>

            <Pressable
              key="article-family-mode"
              style={styles.levelCard}
              onPress={() =>
                handleButtonPress(() => {
                  setSelectedGameFamily('article');
                  setScreen('articleGameModes');
                })
              }
            >
              <LinearGradient
                colors={BUTTON_GRADIENTS.gold.colors}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.levelGradient}
              >
                <View>
                  <Text style={[styles.levelTitle, { color: BUTTON_GRADIENTS.gold.textColor }]}>{t.articleGameFamily}</Text>
                  <Text style={[styles.levelSubtitle, { color: BUTTON_GRADIENTS.gold.textColor }]}>
                    {t.articleGameFamilyHint}
                  </Text>
                </View>
              </LinearGradient>
            </Pressable>

            <Pressable
              key="case-mode"
              style={styles.levelCard}
              onPress={() =>
                handleButtonPress(() => {
                  setSelectedGameFamily('case');
                  setScreen('caseGameModes');
                })
              }
            >
              <LinearGradient colors={BUTTON_GRADIENTS.teal.colors} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.levelGradient}>
                <View>
                  <Text style={[styles.levelTitle, { color: BUTTON_GRADIENTS.teal.textColor }]}>{t.modeCase}</Text>
                  <Text style={[styles.levelSubtitle, { color: BUTTON_GRADIENTS.teal.textColor }]}>{t.modeCaseHint}</Text>
                </View>
              </LinearGradient>
            </Pressable>

            <GradientButton label={t.levels} variant="blue" onPress={() => handleButtonPress(() => setScreen('levels'))} />
            <GradientButton label={t.home} variant="slate" onPress={() => handleButtonPress(() => setScreen('home'))} />
          </ScrollView>
        </View>
      )}

      {screen === 'articleGameModes' && (
        <View style={styles.levelsScreen}>
          <ScrollView contentContainerStyle={styles.levelsScrollContent}>
            <Text style={[styles.sectionTitle, { color: uiTheme.title }]}>{t.articleGameFamily}</Text>

            <Pressable key="classic-mode" style={styles.levelCard} onPress={() => handleButtonPress(() => startGame(selectedLevel, 'article', 'classic'))}>
              <LinearGradient
                colors={BUTTON_GRADIENTS.gold.colors}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.levelGradient}
              >
                <View>
                  <Text style={[styles.levelTitle, { color: BUTTON_GRADIENTS.gold.textColor }]}>{t.modeClassic}</Text>
                  <Text style={[styles.levelSubtitle, { color: BUTTON_GRADIENTS.gold.textColor }]}>
                    {t.modeClassicHint}
                  </Text>
                </View>
              </LinearGradient>
            </Pressable>

            <Pressable key="timed-mode" style={styles.levelCard} onPress={() => handleButtonPress(() => startGame(selectedLevel, 'article', 'timed'))}>
              <LinearGradient colors={BUTTON_GRADIENTS.blue.colors} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.levelGradient}>
                <View>
                  <Text style={[styles.levelTitle, { color: BUTTON_GRADIENTS.blue.textColor }]}>{t.modeTimed}</Text>
                  <Text style={[styles.levelSubtitle, { color: BUTTON_GRADIENTS.blue.textColor }]}>{t.modeTimedHint}</Text>
                </View>
              </LinearGradient>
            </Pressable>

            <Pressable key="one-life-mode" style={styles.levelCard} onPress={() => handleButtonPress(() => startGame(selectedLevel, 'article', 'one_life'))}>
              <LinearGradient colors={BUTTON_GRADIENTS.berry.colors} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.levelGradient}>
                <View>
                  <Text style={[styles.levelTitle, { color: BUTTON_GRADIENTS.berry.textColor }]}>{t.modeOneLife}</Text>
                  <Text style={[styles.levelSubtitle, { color: BUTTON_GRADIENTS.berry.textColor }]}>{t.modeOneLifeHint}</Text>
                </View>
              </LinearGradient>
            </Pressable>

            <Pressable key="review-mode" style={styles.levelCard} onPress={() => handleButtonPress(() => startGame(selectedLevel, 'article', 'review'))}>
              <LinearGradient colors={BUTTON_GRADIENTS.teal.colors} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.levelGradient}>
                <View>
                  <Text style={[styles.levelTitle, { color: BUTTON_GRADIENTS.teal.textColor }]}>{t.modeReview}</Text>
                  <Text style={[styles.levelSubtitle, { color: BUTTON_GRADIENTS.teal.textColor }]}>{t.modeReviewHint}</Text>
                </View>
              </LinearGradient>
            </Pressable>

            <Pressable key="find-wrong-mode" style={styles.levelCard} onPress={() => handleButtonPress(() => startGame(selectedLevel, 'article', 'find_wrong'))}>
              <LinearGradient colors={BUTTON_GRADIENTS.slate.colors} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.levelGradient}>
                <View>
                  <Text style={[styles.levelTitle, { color: BUTTON_GRADIENTS.slate.textColor }]}>{t.modeFindWrong}</Text>
                  <Text style={[styles.levelSubtitle, { color: BUTTON_GRADIENTS.slate.textColor }]}>{t.modeFindWrongHint}</Text>
                </View>
              </LinearGradient>
            </Pressable>

            <GradientButton label={t.back} variant="blue" onPress={() => handleButtonPress(() => setScreen('gameModes'))} />
            <GradientButton label={t.home} variant="slate" onPress={() => handleButtonPress(() => setScreen('home'))} />
          </ScrollView>
        </View>
      )}

      {screen === 'caseGameModes' && (
        <View style={styles.levelsScreen}>
          <ScrollView contentContainerStyle={styles.levelsScrollContent}>
            <Text style={[styles.sectionTitle, { color: uiTheme.title }]}>{t.modeCase}</Text>

            <Pressable key="case-classic-mode" style={styles.levelCard} onPress={() => handleButtonPress(() => startGame(selectedLevel, 'case', 'classic'))}>
              <LinearGradient
                colors={BUTTON_GRADIENTS.gold.colors}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.levelGradient}
              >
                <View>
                  <Text style={[styles.levelTitle, { color: BUTTON_GRADIENTS.gold.textColor }]}>{t.modeCaseClassic}</Text>
                  <Text style={[styles.levelSubtitle, { color: BUTTON_GRADIENTS.gold.textColor }]}>{t.modeCaseClassicHint}</Text>
                </View>
              </LinearGradient>
            </Pressable>

            <Pressable key="case-timed-mode" style={styles.levelCard} onPress={() => handleButtonPress(() => startGame(selectedLevel, 'case', 'timed'))}>
              <LinearGradient colors={BUTTON_GRADIENTS.blue.colors} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.levelGradient}>
                <View>
                  <Text style={[styles.levelTitle, { color: BUTTON_GRADIENTS.blue.textColor }]}>{t.modeTimed}</Text>
                  <Text style={[styles.levelSubtitle, { color: BUTTON_GRADIENTS.blue.textColor }]}>{t.modeTimedHint}</Text>
                </View>
              </LinearGradient>
            </Pressable>

            <Pressable key="case-one-life-mode" style={styles.levelCard} onPress={() => handleButtonPress(() => startGame(selectedLevel, 'case', 'one_life'))}>
              <LinearGradient colors={BUTTON_GRADIENTS.berry.colors} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.levelGradient}>
                <View>
                  <Text style={[styles.levelTitle, { color: BUTTON_GRADIENTS.berry.textColor }]}>{t.modeOneLife}</Text>
                  <Text style={[styles.levelSubtitle, { color: BUTTON_GRADIENTS.berry.textColor }]}>{t.modeOneLifeHint}</Text>
                </View>
              </LinearGradient>
            </Pressable>

            <Pressable key="case-review-mode" style={styles.levelCard} onPress={() => handleButtonPress(() => startGame(selectedLevel, 'case', 'review'))}>
              <LinearGradient colors={BUTTON_GRADIENTS.teal.colors} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.levelGradient}>
                <View>
                  <Text style={[styles.levelTitle, { color: BUTTON_GRADIENTS.teal.textColor }]}>{t.modeReview}</Text>
                  <Text style={[styles.levelSubtitle, { color: BUTTON_GRADIENTS.teal.textColor }]}>{t.modeReviewHint}</Text>
                </View>
              </LinearGradient>
            </Pressable>

            <GradientButton label={t.back} variant="blue" onPress={() => handleButtonPress(() => setScreen('gameModes'))} />
            <GradientButton label={t.home} variant="slate" onPress={() => handleButtonPress(() => setScreen('home'))} />
          </ScrollView>
        </View>
      )}

      {screen === 'wordList' && (
        <ScrollView
          bounces={false}
          alwaysBounceVertical={false}
          overScrollMode="never"
          contentContainerStyle={styles.wordListScrollContent}
        >
          <View style={styles.wordListTopActions}>
            {wordListMode !== 'menu' && (
              <GradientButton
                label={t.back}
                variant="blue"
                onPress={() =>
                  handleButtonPress(() => {
                    if (wordListMode === 'letters' && selectedLetter) {
                      setSelectedLetter(null);
                      return;
                    }

                    if (wordListMode === 'articles' && selectedArticleFilter) {
                      setSelectedArticleFilter(null);
                      return;
                    }

                    if (wordListMode === 'levels' && selectedWordLevel) {
                      setSelectedWordLevel(null);
                      return;
                    }

                    setWordListMode('menu');
                  })
                }
              />
            )}
            <GradientButton label={t.home} variant="slate" onPress={() => handleButtonPress(() => setScreen('home'))} />
          </View>

          {wordListMode === 'menu' && (
            <View style={styles.wordListModeGrid}>
              <GradientButton square label={t.sortByLetter} variant="blue" onPress={() => handleButtonPress(() => setWordListMode('letters'))} />
              <GradientButton square label={t.sortByArticle} variant="berry" onPress={() => handleButtonPress(() => setWordListMode('articles'))} />
              <GradientButton
                square
                label={t.sortByLevel}
                variant="teal"
                onPress={() =>
                  handleButtonPress(() => {
                    setWordListPage(0);
                    setWordListMode('levels');
                  })
                }
              />
            </View>
          )}

          {wordListMode === 'letters' && !selectedLetter && (
            <>
              <Text style={[styles.sectionTitle, { color: uiTheme.title }]}>{t.chooseLetter}</Text>
              <View style={styles.wordFilterGrid}>
                {wordListLetters.map((letter) => (
                  <Pressable key={letter} style={styles.wordFilterCardShell} onPress={() => handleButtonPress(() => setSelectedLetter(letter))}>
                    <LinearGradient colors={BUTTON_GRADIENTS.blue.colors} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.wordFilterCard}>
                      <Text style={styles.wordFilterCardText}>{letter}</Text>
                    </LinearGradient>
                  </Pressable>
                ))}
                <Pressable
                  style={styles.wordFilterCardShell}
                  onPress={() => handleButtonPress(() => Alert.alert(t.wordSourceTitle, t.wordSourceBody))}
                >
                  <LinearGradient colors={BUTTON_GRADIENTS.slate.colors} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.wordFilterCard}>
                    <View style={styles.wordFilterInfoBadge}>
                      <Text style={styles.wordFilterInfoText}>i</Text>
                    </View>
                  </LinearGradient>
                </Pressable>
              </View>
            </>
          )}

          {wordListMode === 'articles' && !selectedArticleFilter && (
            <>
              <Text style={[styles.sectionTitle, { color: uiTheme.title }]}>{t.chooseArticle}</Text>
              <View style={styles.wordArticleFilterGrid}>
                {ARTICLES.map((article) => (
                  <Pressable
                    key={article}
                    style={styles.wordArticleFilterCardShell}
                    onPress={() =>
                      handleButtonPress(() => {
                        setWordListPage(0);
                        setSelectedArticleFilter(article);
                      })
                    }
                  >
                    <LinearGradient colors={ARTICLE_CARD_GRADIENTS[article]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.wordFilterCard}>
                      <Text style={styles.wordFilterCardText}>{article}</Text>
                    </LinearGradient>
                  </Pressable>
                ))}
              </View>
            </>
          )}

          {wordListMode === 'levels' && !selectedWordLevel && (
            <>
              <Text style={[styles.sectionTitle, { color: uiTheme.title }]}>{t.chooseLevelForWords}</Text>
              <View style={styles.wordLevelFilterGrid}>
                {LEVELS.map((level) => (
                  <Pressable
                    key={level}
                    style={styles.wordLevelFilterCardShell}
                    onPress={() =>
                      handleButtonPress(() => {
                        setWordListPage(0);
                        setSelectedWordLevel(level);
                      })
                    }
                  >
                    <LinearGradient colors={LEVEL_GRADIENTS[level].colors} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.wordFilterCard}>
                      <Text style={styles.wordFilterCardText}>{level}</Text>
                    </LinearGradient>
                  </Pressable>
                ))}
              </View>
            </>
          )}

          {filteredWordListItems.length > 0 && (
            <>
              <LinearGradient
                colors={BUTTON_GRADIENTS.slate.colors}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.wordListPageBadge}
              >
                <Text style={styles.wordListPageText}>
                  {wordListSelectionLabel} • {filteredWordListItems.length}
                </Text>
              </LinearGradient>

              {showPaginatedNavigation && (
                <View style={styles.wordListPagination}>
                  <GradientButton
                    small
                    label={t.previous}
                    variant="blue"
                    onPress={() => handleButtonPress(() => setWordListPage((prev) => Math.max(prev - 1, 0)))}
                  />
                  <LinearGradient
                    colors={BUTTON_GRADIENTS.slate.colors}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.wordListPageBadge}
                  >
                    <Text style={styles.wordListPageText}>
                      {t.page} {wordListPage + 1}/{paginatedWordListTotalPages}
                    </Text>
                  </LinearGradient>
                  <GradientButton
                    small
                    label={t.next}
                    variant="teal"
                    onPress={() => handleButtonPress(() => setWordListPage((prev) => Math.min(prev + 1, paginatedWordListTotalPages - 1)))}
                  />
                </View>
              )}

              <View style={styles.wordGrid}>
                {visibleWordListItems.map((item, index) => (
                  <FlippableWordCard
                    key={`${item.level}-${item.article}-${item.word}-${index}`}
                    item={item}
                    language={settings.language}
                    isFlipped={activeWordCardId === `${item.level}-${item.article}-${item.word}-${index}`}
                    onPress={() => setActiveWordCardId((previous) => (previous === `${item.level}-${item.article}-${item.word}-${index}` ? null : `${item.level}-${item.article}-${item.word}-${index}`))}
                  />
                ))}
              </View>

              {showPaginatedNavigation && (
                <View style={styles.wordListPagination}>
                  <GradientButton
                    small
                    label={t.previous}
                    variant="blue"
                    onPress={() => handleButtonPress(() => setWordListPage((prev) => Math.max(prev - 1, 0)))}
                  />
                  <LinearGradient
                    colors={BUTTON_GRADIENTS.slate.colors}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.wordListPageBadge}
                  >
                    <Text style={styles.wordListPageText}>
                      {t.page} {wordListPage + 1}/{paginatedWordListTotalPages}
                    </Text>
                  </LinearGradient>
                  <GradientButton
                    small
                    label={t.next}
                    variant="teal"
                    onPress={() => handleButtonPress(() => setWordListPage((prev) => Math.min(prev + 1, paginatedWordListTotalPages - 1)))}
                  />
                </View>
              )}
            </>
          )}

          {false && <View style={styles.wordGrid}>
            {currentWordListPageItems.map((item, index) => {
              return (
                <LinearGradient
                  key={`${item.level}-${item.article}-${item.word}-${index}`}
                  colors={ARTICLE_CARD_GRADIENTS[item.article]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={[styles.wordCard, { borderColor: `${ARTICLE_COLORS[item.article]}88` }]}
                >
                  <Text style={styles.wordCardLevelText}>{item.level}</Text>
                  <Text style={styles.wordCardArticle}>{item.article}</Text>
                  <Text style={styles.wordCardWord}>{item.word}</Text>
                </LinearGradient>
              );
            })}
            <Pressable style={styles.wordCardBack} onPress={() => handleButtonPress(() => setScreen('home'))}>
              <Text style={styles.backArrowText}>←</Text>
            </Pressable>
          </View>}

          {false && <View style={styles.wordListPagination}>
            <GradientButton
              small
              label={t.previous}
              variant="blue"
              onPress={() => handleButtonPress(() => setWordListPage((prev) => Math.max(prev - 1, 0)))}
            />
            <LinearGradient
              colors={BUTTON_GRADIENTS.slate.colors}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.wordListPageBadge}
            >
              <Text style={styles.wordListPageText}>
                {t.page} {wordListPage + 1}/{totalWordPages}
              </Text>
            </LinearGradient>
            <GradientButton
              small
              label={t.next}
              variant="teal"
              onPress={() => handleButtonPress(() => setWordListPage((prev) => Math.min(prev + 1, totalWordPages - 1)))}
            />
          </View>}
        </ScrollView>
      )}

      {screen === 'game' && currentQuestion && (
        <View style={styles.screen}>
          <View style={styles.gameTopBar}>
            <GradientButton label={t.home} variant="slate" small onPress={() => handleButtonPress(confirmReturnHome)} />
          </View>

          <View style={styles.gameInfoRow}>
            <View style={styles.gameInfoLevelShell}>
              <LinearGradient
                colors={LEVEL_GRADIENTS[selectedLevel].colors}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.gameInfoLevelCard}
              >
                <Text style={[styles.gameInfoLabel, styles.gameInfoLevelLabel, { color: LEVEL_GRADIENTS[selectedLevel].metaColor }]}>
                  {t.level}
                </Text>
                <Text style={[styles.gameInfoValue, styles.gameInfoLevelValue, { color: LEVEL_GRADIENTS[selectedLevel].textColor }]}>
                  {selectedLevel}
                </Text>
              </LinearGradient>
            </View>

            <View style={styles.gameInfoCard}>
              <Text style={styles.gameInfoLabel}>{t.progress}</Text>
              <Text style={styles.gameInfoValue}>{currentIndex + 1}</Text>
            </View>
          </View>

          <View style={styles.gameStatsRow}>
            <View style={[styles.gameStatCard, styles.gameStatCardBlue]}>
              <Text style={styles.gameStatLabel}>{t.score}</Text>
              <Text style={styles.gameStatValue}>{score}</Text>
            </View>
            <View style={[styles.gameStatCard, styles.gameStatCardGold]}>
              <Text style={styles.gameStatLabel}>{t.streak}</Text>
              <Text style={styles.gameStatValue}>{currentStreak}</Text>
            </View>
            {selectedGameMode !== 'timed' && (
              <View style={[styles.gameStatCard, styles.gameStatCardRose]}>
                <Text style={styles.gameStatLabel}>{t.lives}</Text>
                <Text style={styles.gameStatValue}>{'\u2665'.repeat(lives)}</Text>
              </View>
            )}
            {selectedGameMode === 'timed' && (
              <View style={[styles.gameStatCard, styles.gameStatCardTeal]}>
                <Text style={styles.gameStatLabel}>{t.time}</Text>
                <Text style={styles.gameStatValue}>{timeLeft ?? TIMED_MODE_SECONDS}</Text>
              </View>
            )}
          </View>

          <View style={styles.questionArea}>
            <Animated.View pointerEvents="none" style={[styles.confettiLayer, { opacity: confettiOpacity }]}>
              {confettiPieces.map((piece, index) => (
                <Animated.View
                  key={`${piece.color}-${index}`}
                  style={[
                    styles.confettiPiece,
                    {
                      backgroundColor: piece.color,
                      transform: [
                        { translateX: piece.translateX },
                        { translateY: piece.translateY },
                        { rotate: piece.spin },
                        { scale: piece.scale },
                      ],
                    },
                  ]}
                />
              ))}
            </Animated.View>

            <View style={styles.questionCard}>
              {selectedGameFamily === 'case' && (
                <Text style={styles.caseQuestionLabel}>
                  {currentQuestion.kind === 'article'
                    ? currentQuestion.label[settings.language]
                    : `${currentQuestion.label[settings.language]} \u00b7 ${CASE_KIND_DESCRIPTIONS[currentQuestion.kind as Exclude<QuestionKind, 'find_wrong' | 'article'>][settings.language]}`}
                </Text>
              )}
              {currentQuestion.kind === 'find_wrong' && (
                <Text style={styles.findWrongQuestionLabel}>{currentQuestion.prompt}</Text>
              )}

              {answerState && (
                <View
                  style={[
                    styles.articleRevealBadge,
                    {
                      backgroundColor: `${(ARTICLE_FORM_COLORS[currentQuestion.answer as keyof typeof ARTICLE_FORM_COLORS] ?? ARTICLE_COLORS[currentQuestion.article])}18`,
                      borderColor: ARTICLE_FORM_COLORS[currentQuestion.answer as keyof typeof ARTICLE_FORM_COLORS] ?? ARTICLE_COLORS[currentQuestion.article],
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.articleRevealText,
                      { color: ARTICLE_FORM_COLORS[currentQuestion.answer as keyof typeof ARTICLE_FORM_COLORS] ?? ARTICLE_COLORS[currentQuestion.article] },
                    ]}
                  >
                    {currentQuestion.kind === 'find_wrong' ? `${currentQuestion.article} ${currentQuestion.word}` : currentQuestion.answer}
                  </Text>
                </View>
              )}

              {currentQuestion.kind !== 'find_wrong' && (
                <Text style={[styles.wordText, selectedGameFamily === 'case' && currentQuestion.kind !== 'article' && styles.wordTextCase]}>
                  {selectedGameFamily === 'case' && currentQuestion.kind !== 'article' ? currentQuestion.prompt : currentQuestion.word}
                </Text>
              )}
              {currentQuestion.translation[settings.language] && currentQuestion.kind !== 'find_wrong' ? (
                <Text style={styles.questionTranslation}>
                  {currentQuestion.translation[settings.language]}
                </Text>
              ) : null}
            </View>
          </View>

          <View style={styles.answerColumn}>
            {currentQuestion.options.map((option) => {
              const style = answerButtonStyle(option);
              return (
                <Animated.View key={option} style={style.wrapper}>
                  <Pressable
                    style={style.button}
                    disabled={Boolean(answerState)}
                    onPress={() => handleAnswer(option)}
                  >
                    <Text style={styles.answerText}>{option}</Text>
                  </Pressable>
                </Animated.View>
              );
            })}
          </View>
        </View>
      )}

      {screen === 'results' && lastSummary && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.heroCard}>
            <Text style={styles.eyebrow}>{t.roundDone}</Text>
            <Text style={styles.heroTitle}>{lastSummary.level}</Text>
            <Text style={styles.heroSubtitle}>
              {lastSummary.correct} {t.correct}, {lastSummary.wrong} {t.wrong}, {lastSummary.score} {t.points}.
            </Text>
          </View>

          <View style={styles.statGrid}>
            <View style={styles.statCard}>
              <View style={styles.statMetaRow}>
                <View style={[styles.statAccentDot, { backgroundColor: '#8b5cf6' }]} />
                <Text style={styles.statLabel}>{t.bestStreak}</Text>
              </View>
              <Text style={styles.statValue}>{lastSummary.bestStreak}</Text>
            </View>
            <View style={styles.statCard}>
              <View style={styles.statMetaRow}>
                <View style={[styles.statAccentDot, { backgroundColor: '#ca8a04' }]} />
                <Text style={styles.statLabel}>{t.accuracy}</Text>
              </View>
              <Text style={styles.statValue}>
                %{Math.round((lastSummary.correct / Math.max(lastSummary.correct + lastSummary.wrong, 1)) * 100)}
              </Text>
            </View>
          </View>

          <GradientButton label={t.replayLevel} variant="gold" onPress={() => handleButtonPress(() => startGame(lastSummary.level, lastSummary.family, lastSummary.mode))} />
          <GradientButton label={t.levels} variant="blue" onPress={() => handleButtonPress(() => setScreen('levels'))} />
          <GradientButton label={t.home} variant="slate" onPress={() => handleButtonPress(() => setScreen('home'))} />
        </ScrollView>
      )}

      {screen === 'stats' && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.sectionHeaderRow}>
            <View style={styles.sectionHeaderBackWrap}>
              <GradientButton small label={t.back} variant="slate" onPress={() => handleButtonPress(() => setScreen('home'))} />
            </View>
            <Text style={[styles.sectionTitle, { color: uiTheme.title }]}>{t.statistics}</Text>
          </View>

          <View style={styles.statGrid}>
            {statsCards.map((card) => (
              <View
                key={card.key}
                style={[
                  styles.statCard,
                  {
                    backgroundColor: card.bg,
                    borderColor: card.border,
                  },
                ]}
              >
                <View style={[styles.statCardTopBar, { backgroundColor: card.color }]} />
                <View style={styles.statMetaRow}>
                  <View style={[styles.statAccentDot, { backgroundColor: card.color }]} />
                  <Text style={styles.statLabel}>{card.label}</Text>
                </View>
                <View style={styles.statValueWrap}>
                  <Text style={[styles.statValue, { color: card.color }]}>{card.value}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.panel}>
            <Text style={styles.panelTitle}>{t.levelPerformance}</Text>
            {LEVELS.map((level) => {
              const total = stats.levelStats[level].correct + stats.levelStats[level].wrong;
              const ratio = total === 0 ? 0 : Math.round((stats.levelStats[level].correct / total) * 100);
              const performanceColor = getPerformanceColor(ratio);
              return (
                <View key={level} style={styles.levelPerformanceRow}>
                  <View style={styles.levelPerformanceHeader}>
                    <View style={styles.levelPerformanceTitleWrap}>
                      <Text style={styles.levelPerformanceLevel}>{level}</Text>
                      <Text style={styles.levelPerformanceMeta}>
                        {stats.levelStats[level].correct}/{total || 0}
                      </Text>
                    </View>
                    <Text style={[styles.levelPerformanceRatio, { color: performanceColor }]}>%{ratio}</Text>
                  </View>
                  <View style={styles.levelPerformanceTrack}>
                    <View style={[styles.levelPerformanceFill, { width: `${ratio}%`, backgroundColor: performanceColor }]} />
                  </View>
                </View>
              );
            })}
          </View>

          <GradientButton label={t.resetStats} variant="berry" onPress={() => handleButtonPress(resetProgress)} />
        </ScrollView>
      )}

      {screen === 'settings' && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={[styles.sectionTitle, { color: uiTheme.title }]}>{t.settings}</Text>

          <View style={styles.panel}>
            <View style={styles.settingHeaderRow}>
              <Text style={styles.settingIconText}>♪</Text>
              <Text style={styles.panelTitleNoMargin}>{t.soundEffects}</Text>
            </View>
            <View style={styles.toggleRow}>
              <GradientButton
                label={t.on}
                variant={settings.soundEnabled ? 'teal' : 'slate'}
                onPress={() => handleButtonPress(() => setSettings((previous) => ({ ...previous, soundEnabled: true })))}
              />
              <GradientButton
                label={t.off}
                variant={!settings.soundEnabled ? 'berry' : 'slate'}
                onPress={() => handleButtonPress(() => setSettings((previous) => ({ ...previous, soundEnabled: false })))}
              />
            </View>
          </View>

          <View style={styles.panel}>
            <View style={styles.settingHeaderRow}>
              <Text style={styles.settingIconText}>≈</Text>
              <Text style={styles.panelTitleNoMargin}>{t.vibration}</Text>
            </View>
            <View style={styles.toggleRow}>
              <GradientButton
                label={t.on}
                variant={settings.vibrationEnabled ? 'teal' : 'slate'}
                onPress={() => handleButtonPress(() => setSettings((previous) => ({ ...previous, vibrationEnabled: true })))}
              />
              <GradientButton
                label={t.off}
                variant={!settings.vibrationEnabled ? 'berry' : 'slate'}
                onPress={() => handleButtonPress(() => setSettings((previous) => ({ ...previous, vibrationEnabled: false })))}
              />
            </View>
          </View>

          <View style={styles.panel}>
            <View style={styles.settingHeaderRow}>
              <Text style={styles.settingIconText}>Aa</Text>
              <Text style={styles.panelTitleNoMargin}>{t.language}</Text>
            </View>
            <View style={styles.toggleRow}>
              <GradientButton label={t.turkish} variant={settings.language === 'tr' ? 'teal' : 'slate'} onPress={() => handleButtonPress(() => setSettings((previous) => ({ ...previous, language: 'tr' })))} />
              <GradientButton label={t.english} variant={settings.language === 'en' ? 'blue' : 'slate'} onPress={() => handleButtonPress(() => setSettings((previous) => ({ ...previous, language: 'en' })))} />
            </View>
          </View>

          <View style={styles.panel}>
            <View style={styles.settingHeaderRow}>
              <Text style={styles.settingIconText}>◐</Text>
              <Text style={styles.panelTitleNoMargin}>{t.theme}</Text>
            </View>
            <View style={styles.toggleRow}>
              <GradientButton label={t.light} variant={settings.theme === 'light' ? 'gold' : 'slate'} onPress={() => handleButtonPress(() => setSettings((previous) => ({ ...previous, theme: 'light' })))} />
              <GradientButton label={t.dark} variant={settings.theme === 'dark' ? 'blue' : 'slate'} onPress={() => handleButtonPress(() => setSettings((previous) => ({ ...previous, theme: 'dark' })))} />
            </View>
          </View>

          <GradientButton label={t.home} variant="slate" onPress={() => handleButtonPress(() => setScreen('home'))} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'transparent',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 16,
    backgroundColor: 'transparent',
  },
  wordListScrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 0,
    gap: 10,
    backgroundColor: 'transparent',
  },
  levelsScreen: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  levelsScrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 16,
    backgroundColor: 'transparent',
  },
  homeBackgroundLayer: {
    ...StyleSheet.absoluteFillObject,
  },
  homeBackgroundWash: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '58%',
  },
  homeBackgroundBlobWarm: {
    position: 'absolute',
    width: 520,
    height: 520,
    borderRadius: 999,
    left: -170,
    top: -30,
    transform: [{ rotate: '-14deg' }],
  },
  homeBackgroundBlobCool: {
    position: 'absolute',
    width: 500,
    height: 500,
    borderRadius: 999,
    right: -180,
    bottom: -10,
    transform: [{ rotate: '16deg' }],
  },
  homeBackgroundRibbon: {
    position: 'absolute',
    left: '-12%',
    right: '-12%',
    top: '34%',
    height: 240,
    borderRadius: 48,
    transform: [{ rotate: '-8deg' }],
  },
  levelBackgroundLayer: {
    ...StyleSheet.absoluteFillObject,
  },
  backgroundGlow: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 999,
    backgroundColor: 'rgba(255, 214, 0, 0.11)',
  },
  backgroundGlowLeft: {
    top: 120,
    left: -40,
  },
  backgroundGlowRight: {
    right: -30,
    bottom: 140,
    backgroundColor: 'rgba(0, 200, 83, 0.11)',
  },
  floatingArticle: {
    position: 'absolute',
    color: '#1f2937',
    opacity: 0.18,
    fontWeight: '800',
    letterSpacing: 1,
    textShadowColor: 'rgba(255,255,255,0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
  loadingTitle: {
    color: '#1f2a37',
    fontSize: 34,
    fontWeight: '800',
  },
  loadingSubtitle: {
    marginTop: 8,
    color: '#6b7280',
    fontSize: 16,
  },
  heroCard: {
    borderRadius: 28,
    padding: 24,
    backgroundColor: '#fffaf3',
    borderWidth: 1,
    borderColor: '#eadcc8',
    shadowColor: '#d9c9b4',
    shadowOpacity: 0.3,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  eyebrow: {
    color: '#a16207',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  heroTitle: {
    marginTop: 10,
    color: '#1f2937',
    fontSize: 34,
    fontWeight: '800',
  },
  heroSubtitle: {
    marginTop: 10,
    color: '#4b5563',
    fontSize: 16,
    lineHeight: 24,
  },
  logoWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
    marginBottom: 4,
  },
  homeLogo: {
    width: '100%',
    height: 284,
  },
  menuColumn: {
    flex: 1,
    justifyContent: 'center',
    gap: 14,
  },
  homeMenuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    alignContent: 'flex-start',
  },
  homeStartWrap: {
    marginBottom: 12,
  },
  homeStartButton: {
    borderRadius: 22,
  },
  gradientButtonShell: {
    borderRadius: 22,
    overflow: 'hidden',
    shadowColor: 'rgba(22, 24, 29, 0.95)',
    shadowOpacity: 0.24,
    shadowRadius: 10,
    shadowOffset: { width: -5, height: 5 },
    elevation: 4,
  },
  gradientButtonShellSmall: {
    minWidth: 118,
  },
  gradientButtonShellSquare: {
    width: '47.7%',
    aspectRatio: 1,
  },
  gradientButtonFill: {
    paddingVertical: 19,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientButtonAnimatedWrap: {
    position: 'relative',
    overflow: 'hidden',
  },
  gradientButtonAnimatedTrack: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '-60%',
    width: '220%',
  },
  gradientButtonAnimatedFill: {
    width: '100%',
    height: '100%',
  },
  gradientButtonFillSmall: {
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  gradientButtonFillTall: {
    paddingVertical: 28,
  },
  gradientButtonFillSquare: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 14,
  },
  gradientButtonText: {
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
  gradientButtonTextOverlay: {
    zIndex: 1,
  },
  gradientButtonTextSmall: {
    fontSize: 12,
  },
  gradientButtonTextSquare: {
    fontSize: 20,
  },
  gradientButtonTextTall: {
    fontSize: 18,
  },
  primaryButton: {
    borderRadius: 22,
    backgroundColor: '#f59e0b',
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#f59e0b',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '800',
  },
  secondaryButton: {
    borderRadius: 22,
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5d8c7',
  },
  secondaryButtonText: {
    color: '#1f2937',
    fontSize: 16,
    fontWeight: '700',
  },
  sectionTitle: {
    color: '#1f2937',
    fontSize: 30,
    fontWeight: '800',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  sectionHeaderBackWrap: {
    minWidth: 104,
  },
  levelHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: -10,
    marginBottom: -18,
  },
  levelCard: {
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#d1c1ae',
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  levelGradient: {
    padding: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  levelTitle: {
    fontSize: 24,
    fontWeight: '800',
  },
  levelSubtitle: {
    fontSize: 15,
    lineHeight: 22,
    marginTop: 6,
    maxWidth: 220,
  },
  levelMeta: {
    fontSize: 13,
    fontWeight: '700',
  },
  wordBadgeWrap: {
    width: 132,
    height: 132,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: -18,
  },
  wordBadgeStar: {
    position: 'absolute',
    width: 132,
    height: 132,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#f0b429',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  wordBadgeStarText: {
    color: '#f59e0b',
    fontSize: 106,
    lineHeight: 108,
    fontWeight: '800',
  },
  wordBadgeLabelTop: {
    color: '#8a5a00',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    lineHeight: 22,
  },
  wordBadgeLabelBottom: {
    color: '#8a5a00',
    fontSize: 13,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 15,
  },
  wordListLevelGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  wordListLevelCard: {
    width: '47.5%',
    aspectRatio: 1,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#d1c1ae',
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  wordListLevelGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  wordListLevelTitle: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 1,
  },
  gameTopBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 12,
  },
  menuSmallButton: {
    borderRadius: 16,
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#e4d8cb',
  },
  menuSmallButtonText: {
    color: '#1f2937',
    fontWeight: '700',
    fontSize: 12,
  },
  gameInfoRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 14,
  },
  gameInfoCard: {
    flex: 1,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#eadcc8',
    paddingVertical: 14,
    paddingHorizontal: 16,
    shadowColor: '#d1c1ae',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  gameInfoLevelShell: {
    flex: 1,
    borderRadius: 22,
    overflow: 'hidden',
    shadowColor: '#d1c1ae',
    shadowOpacity: 0.16,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  gameInfoLevelCard: {
    borderRadius: 22,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  gameInfoLabel: {
    color: '#8b5e34',
    fontSize: 11,
    textTransform: 'uppercase',
    fontWeight: '800',
    letterSpacing: 0.7,
  },
  gameInfoValue: {
    marginTop: 6,
    color: '#111827',
    fontSize: 24,
    fontWeight: '900',
  },
  gameInfoLevelLabel: {
    color: '#ecfdf5',
  },
  gameInfoLevelValue: {
    color: '#ffffff',
  },
  gameStatsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18,
  },
  gameStatCard: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    alignItems: 'center',
    shadowColor: '#d1c1ae',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  gameStatCardBlue: {
    backgroundColor: '#eef6ff',
    borderColor: '#bfdbfe',
  },
  gameStatCardGold: {
    backgroundColor: '#fff7e6',
    borderColor: '#fde68a',
  },
  gameStatCardRose: {
    backgroundColor: '#fff1f2',
    borderColor: '#fecdd3',
  },
  gameStatCardTeal: {
    backgroundColor: '#ecfeff',
    borderColor: '#99f6e4',
  },
  gameStatLabel: {
    color: '#6b7280',
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  gameStatValue: {
    marginTop: 6,
    color: '#111827',
    fontSize: 24,
    fontWeight: '900',
  },
  questionArea: {
    position: 'relative',
  },
  confettiLayer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 0,
    height: 0,
    zIndex: 2,
  },
  confettiPiece: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 12,
    height: 20,
    borderRadius: 4,
  },
  questionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 28,
    paddingHorizontal: 24,
    paddingVertical: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eadcc8',
  },
  articleRevealBadge: {
    marginTop: 12,
    borderRadius: 999,
    paddingHorizontal: 18,
    paddingVertical: 7,
    borderWidth: 1,
  },
  articleRevealText: {
    fontSize: 22,
    fontWeight: '900',
    textTransform: 'lowercase',
  },
  caseQuestionLabel: {
    color: '#8b5e34',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  findWrongQuestionLabel: {
    color: '#8b5e34',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  questionTranslation: {
    marginTop: 4,
    color: '#4b5563',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
  wordText: {
    marginTop: 12,
    color: '#111827',
    fontSize: 42,
    fontWeight: '800',
    textAlign: 'center',
  },
  wordTextCase: {
    fontSize: 28,
    lineHeight: 36,
  },
  answerColumn: {
    gap: 12,
    marginTop: 18,
  },
  answerButton: {
    borderRadius: 22,
    borderWidth: 2,
    paddingVertical: 20,
    alignItems: 'center',
  },
  answerButtonCorrect: {
    opacity: 0.88,
  },
  answerButtonWrong: {
    opacity: 0.82,
  },
  answerText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
  },
  wordGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  wordListModeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  wordListTopActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  wordFilterGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  wordArticleFilterGrid: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    gap: 8,
  },
  wordLevelFilterGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  wordFilterCardShell: {
    width: '23%',
    aspectRatio: 1,
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  wordArticleFilterCardShell: {
    width: '31%',
    aspectRatio: 1,
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  wordLevelFilterCardShell: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  wordFilterCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  wordFilterCardText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  wordFilterInfoBadge: {
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordFilterInfoText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
  },
  wordListPagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginVertical: 4,
  },
  wordListPageBadge: {
    flex: 1,
    minHeight: 54,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    shadowColor: '#94a3b8',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  wordListPageText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
    textAlign: 'center',
  },
  wordCard: {
    width: '100%',
    height: '100%',
    aspectRatio: undefined,
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    overflow: 'hidden',
  },
  wordCardPressable: {
    width: '23%',
    aspectRatio: 1,
  },
  wordCardFlipContainer: {
    flex: 1,
    position: 'relative',
  },
  wordCardFace: {
    ...StyleSheet.absoluteFillObject,
    backfaceVisibility: 'hidden',
  },
  wordCardBackFace: {
    paddingHorizontal: 12,
  },
  wordCardTranslation: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '800',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.14)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    lineHeight: 17,
  },
  wordCardBack: {
    width: '23%',
    aspectRatio: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#eadcc8',
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  wordCardBackInner: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#eadcc8',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#d1c1ae',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  wordCardLevelText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '900',
    marginBottom: 6,
    opacity: 0.95,
  },
  wordCardArticle: {
    fontSize: 14,
    fontWeight: '900',
    textTransform: 'lowercase',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.12)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  wordCardWord: {
    marginTop: 4,
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.14)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  backArrowText: {
    color: '#1f2937',
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 30,
  },
  statGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
  },
  statCard: {
    flexBasis: '48%',
    flexGrow: 1,
    borderRadius: 24,
    padding: 18,
    paddingTop: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    borderWidth: 1,
    borderColor: '#efe1cf',
    shadowColor: 'rgba(96, 73, 42, 0.14)',
    shadowOpacity: 0.18,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
    position: 'relative',
    overflow: 'hidden',
  },
  statCardTopBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 6,
  },
  statMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statAccentDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
  },
  statLabel: {
    color: '#7c5b34',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.7,
    textTransform: 'uppercase',
  },
  statValue: {
    fontSize: 30,
    fontWeight: '800',
  },
  statValueWrap: {
    marginTop: 14,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.72)',
  },
  panel: {
    borderRadius: 22,
    padding: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#eadcc8',
  },
  panelTitle: {
    color: '#1f2937',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },
  panelTitleNoMargin: {
    color: '#1f2937',
    fontSize: 20,
    fontWeight: '800',
  },
  panelText: {
    color: '#4b5563',
    fontSize: 15,
    lineHeight: 24,
  },
  levelPerformanceRow: {
    marginTop: 14,
    paddingBottom: 2,
  },
  levelPerformanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  levelPerformanceTitleWrap: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 10,
  },
  levelPerformanceLevel: {
    color: '#1f2937',
    fontSize: 17,
    fontWeight: '800',
  },
  levelPerformanceMeta: {
    color: '#7c6a55',
    fontSize: 13,
    fontWeight: '700',
  },
  levelPerformanceRatio: {
    color: '#8b5e34',
    fontSize: 15,
    fontWeight: '800',
  },
  levelPerformanceTrack: {
    height: 12,
    borderRadius: 999,
    backgroundColor: '#f4eadb',
    overflow: 'hidden',
  },
  levelPerformanceFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#f59e0b',
  },
  settingHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  settingIconText: {
    color: '#a16207',
    fontSize: 22,
    fontWeight: '800',
  },
  toggleRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  optionButton: {
    flex: 1,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: '#fffaf3',
    borderWidth: 1,
    borderColor: '#eadcc8',
  },
  optionButtonActive: {
    backgroundColor: '#f59e0b',
    borderColor: '#f59e0b',
  },
  optionButtonText: {
    color: '#1f2937',
    fontWeight: '700',
  },
  optionButtonTextActive: {
    color: '#ffffff',
  },
});


