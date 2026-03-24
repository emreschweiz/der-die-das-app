import AsyncStorage from '@react-native-async-storage/async-storage';
import { BlurView } from 'expo-blur';
import { createAudioPlayer, setAudioModeAsync } from 'expo-audio';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef, useState } from 'react';
import { WORD_LISTS, type WordListLevel } from './src/data/wordLists';
import {
  Alert,
  Animated,
  BackHandler,
  Easing,
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
type Screen = 'home' | 'levels' | 'game' | 'results' | 'stats' | 'settings' | 'wordListLevels' | 'wordList';
type Language = 'tr' | 'en';

type WordSeed = {
  id: string;
  word: string;
  article: Article;
  translation: Record<Language, string>;
  level: LevelId;
};

type LevelStats = Record<LevelId, { correct: number; wrong: number }>;

type Settings = {
  soundEnabled: boolean;
  vibrationEnabled: boolean;
  language: Language;
};

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
};

type RoundSummary = {
  score: number;
  correct: number;
  wrong: number;
  bestStreak: number;
  level: LevelId;
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

const STORAGE_KEY = 'derdiedas.levels.v4';
const ROUND_LENGTH = 10;
const STARTING_LIVES = 3;
const LEVEL_POOL_SIZE = 500;
const ANSWER_DELAY_MS = 850;
const ARTICLES: Article[] = ['der', 'die', 'das'];
const LEVELS: LevelId[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const ARTICLE_COLORS: Record<Article, string> = {
  der: '#3498db',
  die: '#ff5b8a',
  das: '#2ecc71',
};

const LEVEL_META: Record<Language, Record<LevelId, { subtitle: string }>> = {
  tr: {
    A1: { subtitle: 'En temel isimler' },
    A2: { subtitle: 'Günlük hayatta sık geçen kelimeler' },
    B1: { subtitle: 'Daha geniş kelime hazinesi' },
    B2: { subtitle: 'Orta-ileri seviye isimler' },
    C1: { subtitle: 'İleri seviye kavramlar' },
    C2: { subtitle: 'En ileri seviye isimler' },
  },
  en: {
    A1: { subtitle: 'Most basic nouns' },
    A2: { subtitle: 'Common everyday words' },
    B1: { subtitle: 'Broader vocabulary' },
    B2: { subtitle: 'Upper-intermediate nouns' },
    C1: { subtitle: 'Advanced concepts' },
    C2: { subtitle: 'Near-native level nouns' },
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

const COPY = {
  tr: {
    heroEyebrow: 'Seviye bazlı mini oyun',
    heroSubtitle: 'Her seviyede 500 kelimelik havuzdan rastgele seçilen 10 soruluk tur seni bekliyor.',
    start: 'BAŞLA',
    statistics: 'İSTATİSTİKLER',
    wordList: 'KELİME LİSTESİ',
    settings: 'AYARLAR',
    exit: 'ÇIKIŞ',
    chooseLevel: 'Dil seviyesi seç',
    chooseWordListLevel: 'Kelime listesi seviyesi seç',
    poolLabel: '500 kelime havuzu',
    home: 'ANA MENÜ',
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
    back: 'Dön',
    confirmResetTitle: 'İstatistikleri sıfırla',
    confirmResetBody: 'Gerçekten sıfırlamak istiyor musunuz?',
    reset: 'Sıfırla',
    info: 'Bilgi',
    iosExitInfo: 'iPhone tarafında uygulama içinden çıkış yapılamaz.',
    loading: 'Yükleniyor...',
    soundEffects: 'Ses efektleri',
    vibration: 'Titreşim',
    language: 'Dil',
    turkish: 'Türkçe',
    english: 'İngilizce',
    on: 'Açık',
    off: 'Kapalı',
    settingsHint: 'Sesleri ve uygulama dilini buradan yönetebilirsin.',
    wordListHint: 'Seçtiğin seviyedeki kelimeler alfabetik sırayla listelenir.',
  },
  en: {
    heroEyebrow: 'Level-based mini game',
    heroSubtitle: 'Each level gives you a 10-question round picked randomly from a 500-word pool.',
    start: 'START',
    statistics: 'STATISTICS',
    wordList: 'WORD LIST',
    settings: 'SETTINGS',
    exit: 'EXIT',
    chooseLevel: 'Choose a level',
    chooseWordListLevel: 'Choose a word list level',
    poolLabel: '500-word pool',
    home: 'HOME',
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
    turkish: 'Turkish',
    english: 'English',
    on: 'On',
    off: 'Off',
    settingsHint: 'Manage sounds and app language here.',
    wordListHint: 'Words are listed alphabetically for the selected level.',
  },
} as const;

const CONFETTI_PIECES = [
  { x: -110, rotate: '-30deg', color: '#ff6b6b' },
  { x: -80, rotate: '20deg', color: '#feca57' },
  { x: -55, rotate: '-15deg', color: '#48dbfb' },
  { x: -25, rotate: '35deg', color: '#1dd1a1' },
  { x: 0, rotate: '-10deg', color: '#5f27cd' },
  { x: 25, rotate: '15deg', color: '#ff9ff3' },
  { x: 50, rotate: '-25deg', color: '#54a0ff' },
  { x: 80, rotate: '30deg', color: '#00d2d3' },
  { x: 110, rotate: '-20deg', color: '#ff9f43' },
];

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
  { id: 'a1-bird', word: 'Vogel', article: 'der', translation: { tr: 'kuş', en: 'bird' }, level: 'A1' },
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
  { id: 'b1-snake', word: 'Schlange', article: 'die', translation: { tr: 'yılan', en: 'snake' }, level: 'B1' },
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
  { id: 'b2-health', word: 'Gesundheit', article: 'die', translation: { tr: 'sağlık', en: 'health' }, level: 'B2' },
  { id: 'b2-system', word: 'System', article: 'das', translation: { tr: 'sistem', en: 'system' }, level: 'B2' },
  { id: 'b2-market', word: 'Markt', article: 'der', translation: { tr: 'pazar', en: 'market' }, level: 'B2' },
  { id: 'c1-progress', word: 'Fortschritt', article: 'der', translation: { tr: 'ilerleme', en: 'progress' }, level: 'C1' },
  { id: 'c1-experience', word: 'Erfahrung', article: 'die', translation: { tr: 'deneyim', en: 'experience' }, level: 'C1' },
  { id: 'c1-document', word: 'Dokument', article: 'das', translation: { tr: 'doküman', en: 'document' }, level: 'C1' },
  { id: 'c1-knowledge', word: 'Kenntnis', article: 'die', translation: { tr: 'bilgi birikimi', en: 'knowledge' }, level: 'C1' },
  { id: 'c1-discourse', word: 'Diskurs', article: 'der', translation: { tr: 'söylem', en: 'discourse' }, level: 'C1' },
  { id: 'c1-behavior', word: 'Verhalten', article: 'das', translation: { tr: 'davranış', en: 'behavior' }, level: 'C1' },
  { id: 'c1-perception', word: 'Wahrnehmung', article: 'die', translation: { tr: 'algılama', en: 'perception' }, level: 'C1' },
  { id: 'c1-viewpoint', word: 'Standpunkt', article: 'der', translation: { tr: 'bakış açısı', en: 'viewpoint' }, level: 'C1' },
  { id: 'c1-method', word: 'Verfahren', article: 'das', translation: { tr: 'yöntem', en: 'method' }, level: 'C1' },
  { id: 'c1-environment', word: 'Umgebung', article: 'die', translation: { tr: 'çevre', en: 'environment' }, level: 'C1' },
  { id: 'c2-consensus', word: 'Konsens', article: 'der', translation: { tr: 'uzlaşı', en: 'consensus' }, level: 'C2' },
  { id: 'c2-consequence', word: 'Konsequenz', article: 'die', translation: { tr: 'sonuç', en: 'consequence' }, level: 'C2' },
  { id: 'c2-paradigm', word: 'Paradigma', article: 'das', translation: { tr: 'paradigma', en: 'paradigm' }, level: 'C2' },
  { id: 'c2-contradiction', word: 'Widerspruch', article: 'der', translation: { tr: 'çelişki', en: 'contradiction' }, level: 'C2' },
  { id: 'c2-interaction', word: 'Interaktion', article: 'die', translation: { tr: 'etkileşim', en: 'interaction' }, level: 'C2' },
  { id: 'c2-phenomenon', word: 'Phänomen', article: 'das', translation: { tr: 'fenomen', en: 'phenomenon' }, level: 'C2' },
  { id: 'c2-exchange', word: 'Austausch', article: 'der', translation: { tr: 'fikir alışverişi', en: 'exchange' }, level: 'C2' },
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

const buildLevelPool = (level: LevelId) => {
  const seeds = WORD_SEEDS.filter((word) => word.level === level);
  const expanded: WordSeed[] = [];
  let cycle = 0;
  while (expanded.length < LEVEL_POOL_SIZE) {
    expanded.push(
      ...shuffle(seeds).map((seed) => ({
        ...seed,
        id: `${seed.id}-${cycle}`,
      })),
    );
    cycle += 1;
  }
  return expanded.slice(0, LEVEL_POOL_SIZE);
};

const LEVEL_POOLS: Record<LevelId, WordSeed[]> = {
  A1: buildLevelPool('A1'),
  A2: buildLevelPool('A2'),
  B1: buildLevelPool('B1'),
  B2: buildLevelPool('B2'),
  C1: buildLevelPool('C1'),
  C2: buildLevelPool('C2'),
};

const buildRound = (level: LevelId) => shuffle(LEVEL_POOLS[level]).slice(0, ROUND_LENGTH);

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

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [isReady, setIsReady] = useState(false);
  const [stats, setStats] = useState<AppStats>(createEmptyStats);
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [selectedLevel, setSelectedLevel] = useState<LevelId>('A1');
  const [selectedWordListLevel, setSelectedWordListLevel] = useState<WordListLevel>('A1');
  const [currentRound, setCurrentRound] = useState<WordSeed[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(STARTING_LIVES);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [roundBestStreak, setRoundBestStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [answerState, setAnswerState] = useState<{ selected: Article; correct: boolean } | null>(null);
  const [selectedWrongArticle, setSelectedWrongArticle] = useState<Article | null>(null);
  const [lastSummary, setLastSummary] = useState<RoundSummary | null>(null);

  const truePlayer = useMemo(() => createAudioPlayer(require('./assets/sounds/true.wav')), []);
  const falsePlayer = useMemo(() => createAudioPlayer(require('./assets/sounds/false.wav')), []);
  const buttonPlayer = useMemo(() => createAudioPlayer(require('./assets/sounds/button.wav')), []);
  const completePlayer = useMemo(() => createAudioPlayer(require('./assets/sounds/complete.wav')), []);
  const failPlayer = useMemo(() => createAudioPlayer(require('./assets/sounds/fail.wav')), []);
  const shakeValue = useRef(new Animated.Value(0)).current;
  const confettiValue = useRef(new Animated.Value(0)).current;
  const currentQuestion = currentRound[currentIndex];
  const t = COPY[settings.language];
  const currentWordList = WORD_LISTS[selectedWordListLevel];

  const accuracy =
    stats.totalAnswers === 0 ? 0 : Math.round((stats.correctAnswers / stats.totalAnswers) * 100);

  const confettiOpacity = confettiValue.interpolate({
    inputRange: [0, 0.2, 1],
    outputRange: [0, 1, 0],
  });

  const confettiPieces = useMemo(
    () =>
      CONFETTI_PIECES.map((piece, index) => {
        const translateY = confettiValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 180 + index * 10],
        });
        const scale = confettiValue.interpolate({
          inputRange: [0, 0.15, 1],
          outputRange: [0.4, 1, 0.7],
        });
        return { ...piece, translateY, scale };
      }),
    [confettiValue],
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

    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ stats, settings })).catch(() => null);
  }, [isReady, settings, stats]);

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

  const handleButtonPress = (action: () => void) => {
    playButtonSound();
    action();
  };

  const startConfetti = () => {
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

  const startGame = (level: LevelId) => {
    setSelectedLevel(level);
    setCurrentRound(buildRound(level));
    setCurrentIndex(0);
    setScore(0);
    setLives(STARTING_LIVES);
    setCurrentStreak(0);
    setRoundBestStreak(0);
    setCorrectCount(0);
    setWrongCount(0);
    setAnswerState(null);
    setSelectedWrongArticle(null);
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

    setScreen('results');
  };

  const handleAnswer = (selected: Article) => {
    if (!currentQuestion || answerState) {
      return;
    }

    const isCorrect = selected === currentQuestion.article;
    const nextCorrect = isCorrect ? correctCount + 1 : correctCount;
    const nextWrong = isCorrect ? wrongCount : wrongCount + 1;
    const nextStreak = isCorrect ? currentStreak + 1 : 0;
    const nextBestStreak = Math.max(roundBestStreak, nextStreak);
    const nextLives = isCorrect ? lives : lives - 1;
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
      if (settings.vibrationEnabled) {
        Vibration.vibrate(120);
      }
      startShake();
    }

    setTimeout(() => {
      const roundFinished = currentIndex + 1 >= currentRound.length;
      const noLivesLeft = !isCorrect && nextLives <= 0;

      if (!isCorrect) {
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
          setLastSummary(null);
          await AsyncStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ stats: empty, settings }),
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

  const answerButtonStyle = (article: Article) => {
    const isSelected = answerState?.selected === article;
    const isCorrectAnswer = answerState && currentQuestion?.article === article;
    const isWrongSelection = selectedWrongArticle === article;
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
        { backgroundColor: ARTICLE_COLORS[article], borderColor: ARTICLE_COLORS[article] },
        isSelected && !answerState?.correct && styles.answerButtonWrong,
        isCorrectAnswer && styles.answerButtonCorrect,
      ],
    };
  };

  if (!isReady) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />
        <View style={[styles.screen, styles.centered]}>
          <Text style={styles.loadingTitle}>Der Die Das</Text>
          <Text style={styles.loadingSubtitle}>{t.loading}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      {screen !== 'game' && <FloatingArticlesBackground />}

      {screen === 'home' && (
        <View style={styles.screen}>
          <View style={styles.heroCard}>
            <Text style={styles.eyebrow}>{t.heroEyebrow}</Text>
            <Text style={styles.heroTitle}>Der Die Das</Text>
            <Text style={styles.heroSubtitle}>{t.heroSubtitle}</Text>
          </View>

          <View style={styles.menuColumn}>
            <Pressable style={styles.primaryButton} onPress={() => handleButtonPress(() => setScreen('levels'))}>
              <Text style={styles.primaryButtonText}>{t.start}</Text>
            </Pressable>

            <Pressable style={styles.secondaryButton} onPress={() => handleButtonPress(() => setScreen('stats'))}>
              <Text style={styles.secondaryButtonText}>{t.statistics}</Text>
            </Pressable>

            <Pressable style={styles.secondaryButton} onPress={() => handleButtonPress(() => setScreen('wordListLevels'))}>
              <Text style={styles.secondaryButtonText}>{t.wordList}</Text>
            </Pressable>

            <Pressable style={styles.secondaryButton} onPress={() => handleButtonPress(() => setScreen('settings'))}>
              <Text style={styles.secondaryButtonText}>{t.settings}</Text>
            </Pressable>

            <Pressable style={styles.secondaryButton} onPress={() => handleButtonPress(handleExit)}>
              <Text style={styles.secondaryButtonText}>{t.exit}</Text>
            </Pressable>
          </View>
        </View>
      )}

      {screen === 'levels' && (
        <View style={styles.levelsScreen}>
          <ScrollView contentContainerStyle={styles.levelsScrollContent}>
            <Text style={styles.sectionTitle}>{t.chooseLevel}</Text>

            {LEVELS.map((level) => (
              <Pressable key={level} style={styles.levelCard} onPress={() => handleButtonPress(() => startGame(level))}>
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
                  <Text style={[styles.levelMeta, { color: LEVEL_GRADIENTS[level].metaColor }]}>
                    {t.poolLabel}
                  </Text>
                </LinearGradient>
              </Pressable>
            ))}

            <Pressable style={styles.secondaryButton} onPress={() => handleButtonPress(() => setScreen('home'))}>
              <Text style={styles.secondaryButtonText}>{t.home}</Text>
            </Pressable>
          </ScrollView>
        </View>
      )}

      {screen === 'wordListLevels' && (
        <View style={styles.levelsScreen}>
          <ScrollView contentContainerStyle={styles.levelsScrollContent}>
            <Text style={styles.sectionTitle}>{t.chooseWordListLevel}</Text>

            {LEVELS.map((level) => (
              <Pressable
                key={`word-list-${level}`}
                style={styles.levelCard}
                onPress={() =>
                  handleButtonPress(() => {
                    setSelectedWordListLevel(level);
                    setScreen('wordList');
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
                  <Text style={[styles.levelMeta, { color: LEVEL_GRADIENTS[level].metaColor }]}>
                    {t.wordList}
                  </Text>
                </LinearGradient>
              </Pressable>
            ))}

            <Pressable style={styles.secondaryButton} onPress={() => handleButtonPress(() => setScreen('home'))}>
              <Text style={styles.secondaryButtonText}>{t.home}</Text>
            </Pressable>
          </ScrollView>
        </View>
      )}

      {screen === 'wordList' && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.heroCard}>
            <Text style={styles.eyebrow}>{t.wordList}</Text>
            <Text style={styles.heroTitle}>{selectedWordListLevel}</Text>
            <Text style={styles.heroSubtitle}>{t.wordListHint}</Text>
          </View>

          <View style={styles.wordGrid}>
            {currentWordList.map((item, index) => (
              <View key={`${item.article}-${item.word}-${index}`} style={styles.wordCard}>
                <Text style={styles.wordCardArticle}>{item.article}</Text>
                <Text style={styles.wordCardWord}>{item.word}</Text>
              </View>
            ))}
          </View>

          <Pressable style={styles.secondaryButton} onPress={() => handleButtonPress(() => setScreen('wordListLevels'))}>
            <Text style={styles.secondaryButtonText}>{t.levels}</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton} onPress={() => handleButtonPress(() => setScreen('home'))}>
            <Text style={styles.secondaryButtonText}>{t.home}</Text>
          </Pressable>
        </ScrollView>
      )}

      {screen === 'game' && currentQuestion && (
        <View style={styles.screen}>
          <View style={styles.gameHeaderRow}>
            <Pressable style={styles.menuSmallButton} onPress={() => handleButtonPress(confirmReturnHome)}>
              <Text style={styles.menuSmallButtonText}>{t.home}</Text>
            </Pressable>

            <View style={styles.gameMetaBlock}>
              <Text style={styles.topMetaLabel}>{t.level}</Text>
              <Text style={styles.topMetaValue}>{selectedLevel}</Text>
            </View>

            <View style={styles.gameMetaBlock}>
              <Text style={styles.topMetaLabel}>{t.progress}</Text>
              <Text style={styles.topMetaValue}>
                {currentIndex + 1}/{currentRound.length}
              </Text>
            </View>
          </View>

          <View style={styles.gameStatsRow}>
            <View style={styles.gameStatPill}>
              <Text style={styles.gameStatText}>{t.score} {score}</Text>
            </View>
            <View style={styles.gameStatPill}>
              <Text style={styles.gameStatText}>{t.streak} {currentStreak}</Text>
            </View>
            <View style={styles.gameStatPill}>
              <Text style={styles.gameStatText}>{t.lives} {'❤'.repeat(lives)}</Text>
            </View>
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
                        { translateX: piece.x },
                        { translateY: piece.translateY },
                        { rotate: piece.rotate },
                        { scale: piece.scale },
                      ],
                    },
                  ]}
                />
              ))}
            </Animated.View>

            <View style={styles.questionCard}>
              <Text style={styles.translationLabel}>{currentQuestion.translation[settings.language]}</Text>
              <Text style={styles.wordText}>{currentQuestion.word}</Text>
              <Text style={styles.helperText}>{t.pickArticle}</Text>

              {answerState && (
                <View
                  style={[
                    styles.feedbackBox,
                    answerState.correct ? styles.feedbackCorrect : styles.feedbackWrong,
                  ]}
                >
                  <Text style={styles.feedbackText}>
                    {answerState.correct
                      ? t.correctAnswer
                      : `${t.correctIs} ${currentQuestion.article} ${currentQuestion.word}`}
                  </Text>
                </View>
              )}
            </View>
          </View>

          <View style={styles.answerColumn}>
            {ARTICLES.map((article) => {
              const style = answerButtonStyle(article);
              return (
                <Animated.View key={article} style={style.wrapper}>
                  <Pressable
                    style={style.button}
                    disabled={Boolean(answerState)}
                    onPress={() => handleAnswer(article)}
                  >
                    <Text style={styles.answerText}>{article}</Text>
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
              <Text style={styles.statLabel}>{t.bestStreak}</Text>
              <Text style={styles.statValue}>{lastSummary.bestStreak}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>{t.accuracy}</Text>
              <Text style={styles.statValue}>
                %{Math.round((lastSummary.correct / Math.max(lastSummary.correct + lastSummary.wrong, 1)) * 100)}
              </Text>
            </View>
          </View>

          <Pressable style={styles.primaryButton} onPress={() => handleButtonPress(() => startGame(lastSummary.level))}>
            <Text style={styles.primaryButtonText}>{t.replayLevel}</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton} onPress={() => handleButtonPress(() => setScreen('levels'))}>
            <Text style={styles.secondaryButtonText}>{t.levels}</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton} onPress={() => handleButtonPress(() => setScreen('home'))}>
            <Text style={styles.secondaryButtonText}>{t.home}</Text>
          </Pressable>
        </ScrollView>
      )}

      {screen === 'stats' && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.sectionTitle}>{t.statistics}</Text>

          <View style={styles.statGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>{t.totalRounds}</Text>
              <Text style={styles.statValue}>{stats.totalRounds}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>{t.totalAnswers}</Text>
              <Text style={styles.statValue}>{stats.totalAnswers}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>{t.accuracy}</Text>
              <Text style={styles.statValue}>%{accuracy}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>{t.bestScore}</Text>
              <Text style={styles.statValue}>{stats.bestScore}</Text>
            </View>
          </View>

          <View style={styles.panel}>
            <Text style={styles.panelTitle}>{t.levelPerformance}</Text>
            {LEVELS.map((level) => {
              const total = stats.levelStats[level].correct + stats.levelStats[level].wrong;
              const ratio = total === 0 ? 0 : Math.round((stats.levelStats[level].correct / total) * 100);
              return (
                <Text key={level} style={styles.panelText}>
                  {level}: %{ratio} ({stats.levelStats[level].correct}/{total})
                </Text>
              );
            })}
          </View>

          <Pressable style={styles.secondaryButton} onPress={() => handleButtonPress(resetProgress)}>
            <Text style={styles.secondaryButtonText}>{t.resetStats}</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton} onPress={() => handleButtonPress(() => setScreen('home'))}>
            <Text style={styles.secondaryButtonText}>{t.home}</Text>
          </Pressable>
        </ScrollView>
      )}

      {screen === 'settings' && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.sectionTitle}>{t.settings}</Text>

          <View style={styles.panel}>
            <Text style={styles.panelTitle}>{t.settingsHint}</Text>
            <Text style={styles.panelText}>Der Die Das</Text>
          </View>

          <View style={styles.panel}>
            <View style={styles.settingHeaderRow}>
              <View style={styles.settingIconBadge}>
                <Text style={styles.settingIconText}>♪</Text>
              </View>
              <Text style={styles.panelTitleNoMargin}>{t.soundEffects}</Text>
            </View>
            <View style={styles.toggleRow}>
              <Pressable
                style={[styles.optionButton, settings.soundEnabled && styles.optionButtonActive]}
                onPress={() => handleButtonPress(() => setSettings((previous) => ({ ...previous, soundEnabled: true })))}
              >
                <Text style={[styles.optionButtonText, settings.soundEnabled && styles.optionButtonTextActive]}>
                  {t.on}
                </Text>
              </Pressable>
              <Pressable
                style={[styles.optionButton, !settings.soundEnabled && styles.optionButtonActive]}
                onPress={() => handleButtonPress(() => setSettings((previous) => ({ ...previous, soundEnabled: false })))}
              >
                <Text style={[styles.optionButtonText, !settings.soundEnabled && styles.optionButtonTextActive]}>
                  {t.off}
                </Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.panel}>
            <View style={styles.settingHeaderRow}>
              <View style={styles.settingIconBadge}>
                <Text style={styles.settingIconText}>≈</Text>
              </View>
              <Text style={styles.panelTitleNoMargin}>{t.vibration}</Text>
            </View>
            <View style={styles.toggleRow}>
              <Pressable
                style={[styles.optionButton, settings.vibrationEnabled && styles.optionButtonActive]}
                onPress={() => handleButtonPress(() => setSettings((previous) => ({ ...previous, vibrationEnabled: true })))}
              >
                <Text style={[styles.optionButtonText, settings.vibrationEnabled && styles.optionButtonTextActive]}>
                  {t.on}
                </Text>
              </Pressable>
              <Pressable
                style={[styles.optionButton, !settings.vibrationEnabled && styles.optionButtonActive]}
                onPress={() => handleButtonPress(() => setSettings((previous) => ({ ...previous, vibrationEnabled: false })))}
              >
                <Text style={[styles.optionButtonText, !settings.vibrationEnabled && styles.optionButtonTextActive]}>
                  {t.off}
                </Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.panel}>
            <View style={styles.settingHeaderRow}>
              <View style={styles.settingIconBadge}>
                <Text style={styles.settingIconText}>文</Text>
              </View>
              <Text style={styles.panelTitleNoMargin}>{t.language}</Text>
            </View>
            <View style={styles.toggleRow}>
              <Pressable
                style={[styles.optionButton, settings.language === 'tr' && styles.optionButtonActive]}
                onPress={() => handleButtonPress(() => setSettings((previous) => ({ ...previous, language: 'tr' })))}
              >
                <Text style={[styles.optionButtonText, settings.language === 'tr' && styles.optionButtonTextActive]}>
                  {t.turkish}
                </Text>
              </Pressable>
              <Pressable
                style={[styles.optionButton, settings.language === 'en' && styles.optionButtonActive]}
                onPress={() => handleButtonPress(() => setSettings((previous) => ({ ...previous, language: 'en' })))}
              >
                <Text style={[styles.optionButtonText, settings.language === 'en' && styles.optionButtonTextActive]}>
                  {t.english}
                </Text>
              </Pressable>
            </View>
          </View>

          <Pressable style={styles.secondaryButton} onPress={() => handleButtonPress(() => setScreen('home'))}>
            <Text style={styles.secondaryButtonText}>{t.home}</Text>
          </Pressable>
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
  menuColumn: {
    flex: 1,
    justifyContent: 'center',
    gap: 14,
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
  gameHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
    gap: 10,
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
  gameMetaBlock: {
    alignItems: 'flex-end',
  },
  topMetaLabel: {
    color: '#8b5e34',
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  topMetaValue: {
    marginTop: 4,
    color: '#1f2937',
    fontSize: 18,
    fontWeight: '800',
  },
  gameStatsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 18,
  },
  gameStatPill: {
    flex: 1,
    borderRadius: 16,
    paddingVertical: 12,
    backgroundColor: '#fffaf3',
    borderWidth: 1,
    borderColor: '#eadcc8',
    alignItems: 'center',
  },
  gameStatText: {
    color: '#1f2937',
    fontWeight: '700',
  },
  questionArea: {
    position: 'relative',
  },
  confettiLayer: {
    position: 'absolute',
    top: -10,
    left: '50%',
    width: 0,
    height: 250,
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
  translationLabel: {
    color: '#8b5e34',
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  wordText: {
    marginTop: 12,
    color: '#111827',
    fontSize: 42,
    fontWeight: '800',
    textAlign: 'center',
  },
  helperText: {
    marginTop: 10,
    color: '#6b7280',
    fontSize: 16,
  },
  feedbackBox: {
    marginTop: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
  },
  feedbackCorrect: {
    backgroundColor: '#dcfce7',
  },
  feedbackWrong: {
    backgroundColor: '#ffe4e6',
  },
  feedbackText: {
    color: '#1f2937',
    fontWeight: '700',
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
    gap: 8,
  },
  wordCard: {
    width: '18.4%',
    aspectRatio: 1,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#eadcc8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
  wordCardArticle: {
    color: '#a16207',
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'lowercase',
  },
  wordCardWord: {
    marginTop: 4,
    color: '#1f2937',
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
  },
  statGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    flexBasis: '48%',
    flexGrow: 1,
    borderRadius: 22,
    padding: 18,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#eadcc8',
  },
  statLabel: {
    color: '#8b5e34',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  statValue: {
    marginTop: 8,
    color: '#1f2937',
    fontSize: 28,
    fontWeight: '800',
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
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  panelTitleNoMargin: {
    color: '#1f2937',
    fontSize: 18,
    fontWeight: '700',
  },
  panelText: {
    color: '#4b5563',
    fontSize: 15,
    lineHeight: 24,
  },
  settingHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  settingIconBadge: {
    width: 34,
    height: 34,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff4da',
    borderWidth: 1,
    borderColor: '#f0d79f',
  },
  settingIconText: {
    color: '#a16207',
    fontSize: 16,
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
