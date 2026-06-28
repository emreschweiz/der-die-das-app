import AsyncStorage from '@react-native-async-storage/async-storage';
import { BlurView } from 'expo-blur';
import { createAudioPlayer, setAudioModeAsync } from 'expo-audio';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef, useState } from 'react';
import { WORD_LISTS } from './src/data/wordLists';
import {
  ARTICLES,
  LEVELS,
  LEVEL_POOLS,
  ROUND_LENGTH,
  STARTING_LIVES,
  TIMED_MODE_SECONDS,
  buildClassicQuestions,
  buildDeveloperPool,
  buildFindWrongQuestions,
  buildRound,
  buildRoundFromPool,
} from './src/game';
import { createEmptyStats, getPerformanceColor } from './src/progress';
import type {
  AppData,
  AppStats,
  Article,
  ConfettiSeed,
  DeveloperVisual,
  FloatingArticleConfig,
  GameMode,
  GameQuestion,
  GradientButtonVariant,
  Language,
  LevelId,
  RoundSummary,
  Screen,
  Settings,
  WordListItem,
  WordListMode,
  WordSeed,
} from './src/types';
import { styles } from './src/styles';
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

const STORAGE_KEY = 'derdiedas.levels.v4';
const ANSWER_DELAY_MS = 1850;
const WORDS_PER_PAGE = 100;

const ARTICLE_COLORS: Record<Article, string> = {
  der: '#3498db',
  die: '#ff5b8a',
  das: '#2ecc71',
};

const ANSWER_COLORS: Record<Article, string> = {
  der: '#3498db',
  die: '#ff5b8a',
  das: '#2ecc71',
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
    modeTimed: 'Süreye Karşı',
    modeTimedHint: '60 saniyede en yüksek skoru yap.',
    modeOneLife: 'Tek Can',
    modeOneLifeHint: 'Tek hata hakkın var.',
    modeReview: 'Tekrar Modu',
    modeReviewHint: 'Yanlış yaptığın kelimeleri çalış.',
    modeFindWrong: 'Yanlışı Bul',
    modeFindWrongHint: 'Hatalı artikel-kelime eşleşmesini seç.',
    modeDeveloper: 'Geliştirici Oyunu',
    modeDeveloperHint: 'Can ve süre olmadan 100 rastgele soruyu test et.',
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
    modeTimed: 'Time Attack',
    modeTimedHint: 'Score as much as you can in 60 seconds.',
    modeOneLife: 'One Life',
    modeOneLifeHint: 'You only have one mistake chance.',
    modeReview: 'Review Mode',
    modeReviewHint: 'Practice the words you got wrong.',
    modeFindWrong: 'Find the Wrong One',
    modeFindWrongHint: 'Pick the wrong article-word match.',
    modeDeveloper: 'Developer Mode',
    modeDeveloperHint: 'Test 100 random questions without lives or timer.',
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

type WordCategory =
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

const DEVELOPER_VISUAL_MATCHERS: Array<{ keywords: string[]; visual: DeveloperVisual }> = [
  { keywords: ['dog'], visual: { emoji: '🐶', colors: ['#fed7aa', '#f97316'] } },
  { keywords: ['cat'], visual: { emoji: '🐱', colors: ['#fde68a', '#eab308'] } },
  { keywords: ['bird', 'eagle'], visual: { emoji: '🐦', colors: ['#bfdbfe', '#3b82f6'] } },
  { keywords: ['fish', 'eel'], visual: { emoji: '🐟', colors: ['#a5f3fc', '#0891b2'] } },
  { keywords: ['horse'], visual: { emoji: '🐴', colors: ['#fdba74', '#ea580c'] } },
  { keywords: ['bear'], visual: { emoji: '🐻', colors: ['#d6d3d1', '#78716c'] } },
  { keywords: ['tiger', 'lion'], visual: { emoji: '🐯', colors: ['#fdba74', '#f59e0b'] } },
  { keywords: ['snake'], visual: { emoji: '🐍', colors: ['#86efac', '#16a34a'] } },
  { keywords: ['mouse'], visual: { emoji: '🐭', colors: ['#e5e7eb', '#9ca3af'] } },
  { keywords: ['sheep'], visual: { emoji: '🐑', colors: ['#f8fafc', '#cbd5e1'] } },
  { keywords: ['monkey'], visual: { emoji: '🐵', colors: ['#fdba74', '#92400e'] } },
  { keywords: ['bread'], visual: { emoji: '🍞', colors: ['#fdba74', '#f59e0b'] } },
  { keywords: ['banana'], visual: { emoji: '🍌', colors: ['#fef08a', '#eab308'] } },
  { keywords: ['egg'], visual: { emoji: '🥚', colors: ['#f8fafc', '#d6d3d1'] } },
  { keywords: ['salad'], visual: { emoji: '🥗', colors: ['#bbf7d0', '#16a34a'] } },
  { keywords: ['rice'], visual: { emoji: '🍚', colors: ['#f8fafc', '#cbd5e1'] } },
  { keywords: ['soup'], visual: { emoji: '🍲', colors: ['#fed7aa', '#f97316'] } },
  { keywords: ['ice cream'], visual: { emoji: '🍨', colors: ['#fecdd3', '#ec4899'] } },
  { keywords: ['coffee'], visual: { emoji: '☕', colors: ['#d6d3d1', '#78716c'] } },
  { keywords: ['tea'], visual: { emoji: '🍵', colors: ['#bbf7d0', '#15803d'] } },
  { keywords: ['water'], visual: { emoji: '💧', colors: ['#bae6fd', '#0284c7'] } },
  { keywords: ['milk'], visual: { emoji: '🥛', colors: ['#f8fafc', '#cbd5e1'] } },
  { keywords: ['beer'], visual: { emoji: '🍺', colors: ['#fde68a', '#d97706'] } },
  { keywords: ['wine', 'alcohol'], visual: { emoji: '🍷', colors: ['#fbcfe8', '#be185d'] } },
  { keywords: ['cake'], visual: { emoji: '🍰', colors: ['#fecdd3', '#f472b6'] } },
  { keywords: ['fruit', 'apple', 'orange', 'pineapple'], visual: { emoji: '🍎', colors: ['#fecaca', '#dc2626'] } },
  { keywords: ['vegetable', 'carrot', 'tomato', 'potato', 'onion'], visual: { emoji: '🥕', colors: ['#fdba74', '#ea580c'] } },
  { keywords: ['cheese'], visual: { emoji: '🧀', colors: ['#fde68a', '#eab308'] } },
  { keywords: ['meat'], visual: { emoji: '🥩', colors: ['#fca5a5', '#dc2626'] } },
  { keywords: ['pizza'], visual: { emoji: '🍕', colors: ['#fde68a', '#f97316'] } },
  { keywords: ['pasta'], visual: { emoji: '🍝', colors: ['#fdba74', '#ea580c'] } },
  { keywords: ['chocolate'], visual: { emoji: '🍫', colors: ['#d6d3d1', '#6b4423'] } },
  { keywords: ['table'], visual: { emoji: '🪑', colors: ['#fed7aa', '#b45309'] } },
  { keywords: ['lamp'], visual: { emoji: '💡', colors: ['#fef08a', '#f59e0b'] } },
  { keywords: ['bed'], visual: { emoji: '🛏️', colors: ['#ddd6fe', '#7c3aed'] } },
  { keywords: ['window'], visual: { emoji: '🪟', colors: ['#bfdbfe', '#2563eb'] } },
  { keywords: ['door'], visual: { emoji: '🚪', colors: ['#d6d3d1', '#78716c'] } },
  { keywords: ['mirror'], visual: { emoji: '🪞', colors: ['#e0f2fe', '#0ea5e9'] } },
  { keywords: ['fridge'], visual: { emoji: '🧊', colors: ['#dbeafe', '#60a5fa'] } },
  { keywords: ['couch', 'sofa'], visual: { emoji: '🛋️', colors: ['#ddd6fe', '#8b5cf6'] } },
  { keywords: ['chair'], visual: { emoji: '🪑', colors: ['#fed7aa', '#c2410c'] } },
  { keywords: ['glasses'], visual: { emoji: '👓', colors: ['#cbd5e1', '#475569'] } },
  { keywords: ['wallet'], visual: { emoji: '👛', colors: ['#fecdd3', '#e11d48'] } },
  { keywords: ['key'], visual: { emoji: '🔑', colors: ['#fde68a', '#eab308'] } },
  { keywords: ['bag', 'backpack'], visual: { emoji: '🎒', colors: ['#bfdbfe', '#2563eb'] } },
  { keywords: ['phone'], visual: { emoji: '📱', colors: ['#c7d2fe', '#4338ca'] } },
  { keywords: ['computer', 'laptop'], visual: { emoji: '💻', colors: ['#bae6fd', '#0284c7'] } },
  { keywords: ['camera'], visual: { emoji: '📷', colors: ['#e5e7eb', '#4b5563'] } },
  { keywords: ['radio'], visual: { emoji: '📻', colors: ['#fbcfe8', '#be185d'] } },
  { keywords: ['television', 'tv'], visual: { emoji: '📺', colors: ['#ddd6fe', '#7c3aed'] } },
  { keywords: ['printer'], visual: { emoji: '🖨️', colors: ['#e5e7eb', '#6b7280'] } },
  { keywords: ['pen', 'pencil'], visual: { emoji: '✏️', colors: ['#fde68a', '#f59e0b'] } },
  { keywords: ['ticket'], visual: { emoji: '🎫', colors: ['#fecaca', '#ef4444'] } },
  { keywords: ['passport'], visual: { emoji: '🛂', colors: ['#bfdbfe', '#1d4ed8'] } },
  { keywords: ['newspaper'], visual: { emoji: '📰', colors: ['#e5e7eb', '#4b5563'] } },
  { keywords: ['book'], visual: { emoji: '📘', colors: ['#bfdbfe', '#2563eb'] } },
  { keywords: ['letter', 'email', 'message', 'note'], visual: { emoji: '✉️', colors: ['#f8fafc', '#94a3af'] } },
  { keywords: ['document', 'report', 'paper', 'text', 'file'], visual: { emoji: '📄', colors: ['#f8fafc', '#6b7280'] } },
  { keywords: ['photo', 'picture', 'image', 'illustration'], visual: { emoji: '🖼️', colors: ['#ddd6fe', '#8b5cf6'] } },
  { keywords: ['song', 'album'], visual: { emoji: '🎵', colors: ['#fbcfe8', '#db2777'] } },
  { keywords: ['car', 'taxi'], visual: { emoji: '🚗', colors: ['#bae6fd', '#0284c7'] } },
  { keywords: ['bus'], visual: { emoji: '🚌', colors: ['#fde68a', '#f59e0b'] } },
  { keywords: ['train'], visual: { emoji: '🚆', colors: ['#cbd5e1', '#475569'] } },
  { keywords: ['bike', 'bicycle'], visual: { emoji: '🚲', colors: ['#bbf7d0', '#16a34a'] } },
  { keywords: ['plane', 'airport'], visual: { emoji: '✈️', colors: ['#bfdbfe', '#2563eb'] } },
  { keywords: ['ship'], visual: { emoji: '🚢', colors: ['#a5f3fc', '#0891b2'] } },
  { keywords: ['truck'], visual: { emoji: '🚚', colors: ['#fed7aa', '#ea580c'] } },
  { keywords: ['city', 'village', 'country', 'old town'], visual: { emoji: '🏘️', colors: ['#c7d2fe', '#4f46e5'] } },
  { keywords: ['garden', 'park'], visual: { emoji: '🌳', colors: ['#bbf7d0', '#15803d'] } },
  { keywords: ['forest'], visual: { emoji: '🌲', colors: ['#86efac', '#166534'] } },
  { keywords: ['market', 'shop', 'supermarket'], visual: { emoji: '🛒', colors: ['#fde68a', '#ca8a04'] } },
  { keywords: ['school', 'university', 'lesson', 'course', 'training', 'academy'], visual: { emoji: '🎓', colors: ['#c7d2fe', '#4338ca'] } },
  { keywords: ['hospital'], visual: { emoji: '🏥', colors: ['#fecaca', '#dc2626'] } },
  { keywords: ['station'], visual: { emoji: '🚉', colors: ['#cbd5e1', '#64748b'] } },
  { keywords: ['office', 'company', 'factory', 'department', 'agency'], visual: { emoji: '🏢', colors: ['#dbeafe', '#2563eb'] } },
  { keywords: ['house', 'home', 'apartment', 'building', 'room'], visual: { emoji: '🏠', colors: ['#fed7aa', '#f97316'] } },
  { keywords: ['kitchen'], visual: { emoji: '🍳', colors: ['#fde68a', '#f59e0b'] } },
  { keywords: ['bathroom'], visual: { emoji: '🛁', colors: ['#bae6fd', '#0ea5e9'] } },
  { keywords: ['bedroom'], visual: { emoji: '🛏️', colors: ['#ddd6fe', '#8b5cf6'] } },
  { keywords: ['museum'], visual: { emoji: '🏛️', colors: ['#e5e7eb', '#6b7280'] } },
  { keywords: ['library'], visual: { emoji: '📚', colors: ['#bfdbfe', '#2563eb'] } },
  { keywords: ['restaurant', 'cafe'], visual: { emoji: '🍽️', colors: ['#fecaca', '#ef4444'] } },
  { keywords: ['bank'], visual: { emoji: '🏦', colors: ['#dbeafe', '#1d4ed8'] } },
  { keywords: ['theater', 'cinema'], visual: { emoji: '🎭', colors: ['#fbcfe8', '#be185d'] } },
  { keywords: ['stadium'], visual: { emoji: '🏟️', colors: ['#bbf7d0', '#16a34a'] } },
  { keywords: ['meeting', 'conference', 'discussion', 'conversation', 'interview'], visual: { emoji: '🗣️', colors: ['#ddd6fe', '#7c3aed'] } },
  { keywords: ['exam'], visual: { emoji: '📝', colors: ['#fde68a', '#ca8a04'] } },
  { keywords: ['project', 'program', 'plan', 'process'], visual: { emoji: '📋', colors: ['#bfdbfe', '#2563eb'] } },
  { keywords: ['trip', 'journey', 'vacation', 'holiday'], visual: { emoji: '🧳', colors: ['#fed7aa', '#ea580c'] } },
  { keywords: ['game'], visual: { emoji: '🎮', colors: ['#c7d2fe', '#4338ca'] } },
  { keywords: ['tree', 'flower', 'plant', 'grass'], visual: { emoji: '🌿', colors: ['#bbf7d0', '#16a34a'] } },
  { keywords: ['wind', 'air'], visual: { emoji: '💨', colors: ['#e0f2fe', '#38bdf8'] } },
  { keywords: ['rain'], visual: { emoji: '🌧️', colors: ['#bae6fd', '#0284c7'] } },
  { keywords: ['snow'], visual: { emoji: '❄️', colors: ['#f8fafc', '#93c5fd'] } },
  { keywords: ['sun'], visual: { emoji: '☀️', colors: ['#fde68a', '#f59e0b'] } },
  { keywords: ['moon', 'evening'], visual: { emoji: '🌙', colors: ['#c7d2fe', '#4f46e5'] } },
  { keywords: ['star'], visual: { emoji: '⭐', colors: ['#fde68a', '#ca8a04'] } },
  { keywords: ['stone'], visual: { emoji: '🪨', colors: ['#d6d3d1', '#78716c'] } },
  { keywords: ['earth', 'world'], visual: { emoji: '🌍', colors: ['#bbf7d0', '#0f766e'] } },
  { keywords: ['freedom', 'peace', 'hope', 'love'], visual: { emoji: '🕊️', colors: ['#dbeafe', '#60a5fa'] } },
  { keywords: ['health'], visual: { emoji: '❤️', colors: ['#fecaca', '#dc2626'] } },
  { keywords: ['system', 'structure', 'method', 'algorithm'], visual: { emoji: '⚙️', colors: ['#e5e7eb', '#6b7280'] } },
  { keywords: ['progress', 'potential'], visual: { emoji: '📈', colors: ['#bbf7d0', '#16a34a'] } },
  { keywords: ['experience', 'knowledge', 'idea'], visual: { emoji: '🧠', colors: ['#ddd6fe', '#8b5cf6'] } },
  { keywords: ['discourse', 'language', 'answer', 'question', 'accent', 'abbreviation', 'alphabet'], visual: { emoji: '💬', colors: ['#c7d2fe', '#4338ca'] } },
  { keywords: ['behavior', 'interaction', 'exchange', 'agreement', 'alliance'], visual: { emoji: '🤝', colors: ['#bfdbfe', '#2563eb'] } },
  { keywords: ['perception', 'viewpoint', 'attention'], visual: { emoji: '👁️', colors: ['#e0f2fe', '#0284c7'] } },
  { keywords: ['consensus', 'alignment', 'acceptance', 'adoption'], visual: { emoji: '✅', colors: ['#bbf7d0', '#16a34a'] } },
  { keywords: ['consequence', 'result', 'graduation'], visual: { emoji: '🎯', colors: ['#fecaca', '#ef4444'] } },
  { keywords: ['contradiction', 'problem', 'crash', 'abort', 'abyss'], visual: { emoji: '⚠️', colors: ['#fdba74', '#ea580c'] } },
  { keywords: ['justification', 'logic', 'theory', 'strategy', 'analysis', 'analogy'], visual: { emoji: '📚', colors: ['#ddd6fe', '#7c3aed'] } },
  { keywords: ['impulse', 'energy', 'activity', 'action'], visual: { emoji: '⚡', colors: ['#fde68a', '#eab308'] } },
  { keywords: ['culture', 'society'], visual: { emoji: '🌐', colors: ['#bfdbfe', '#2563eb'] } },
  { keywords: ['tax', 'share', 'shareholder', 'levy'], visual: { emoji: '💰', colors: ['#fde68a', '#ca8a04'] } },
];

function pickWordCategory(word: WordSeed): WordCategory {
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

function getDeveloperVisualMatch(word: WordSeed) {
  const source = `${word.word.toLowerCase()} ${word.translation.en.toLowerCase()} ${word.translation.tr.toLowerCase()}`;
  return DEVELOPER_VISUAL_MATCHERS.find(({ keywords }) =>
    keywords.some((keyword) => source.includes(keyword.toLowerCase())),
  );
}

function getWordVisual(word: WordSeed) {
  const directMatch = getDeveloperVisualMatch(word);
  if (directMatch) {
    return directMatch.visual;
  }

  const translation = word.translation.en.toLowerCase();

  const keywordVisuals: Array<{ keywords: string[]; visual: { emoji: string; colors: [string, string] } }> = [
    { keywords: ['dog'], visual: { emoji: '🐶', colors: ['#fed7aa', '#f97316'] } },
    { keywords: ['cat'], visual: { emoji: '🐱', colors: ['#fde68a', '#eab308'] } },
    { keywords: ['bird', 'eagle'], visual: { emoji: '🐦', colors: ['#bfdbfe', '#3b82f6'] } },
    { keywords: ['fish', 'eel'], visual: { emoji: '🐟', colors: ['#a5f3fc', '#0891b2'] } },
    { keywords: ['horse'], visual: { emoji: '🐴', colors: ['#fdba74', '#ea580c'] } },
    { keywords: ['bear'], visual: { emoji: '🐻', colors: ['#d6d3d1', '#78716c'] } },
    { keywords: ['tiger', 'lion'], visual: { emoji: '🐯', colors: ['#fdba74', '#f59e0b'] } },
    { keywords: ['snake'], visual: { emoji: '🐍', colors: ['#86efac', '#16a34a'] } },
    { keywords: ['mouse'], visual: { emoji: '🐭', colors: ['#e5e7eb', '#9ca3af'] } },
    { keywords: ['sheep'], visual: { emoji: '🐑', colors: ['#f8fafc', '#cbd5e1'] } },
    { keywords: ['monkey'], visual: { emoji: '🐵', colors: ['#fdba74', '#92400e'] } },
    { keywords: ['bread'], visual: { emoji: '🍞', colors: ['#fdba74', '#f59e0b'] } },
    { keywords: ['banana'], visual: { emoji: '🍌', colors: ['#fef08a', '#eab308'] } },
    { keywords: ['egg'], visual: { emoji: '🥚', colors: ['#f8fafc', '#d6d3d1'] } },
    { keywords: ['salad'], visual: { emoji: '🥗', colors: ['#bbf7d0', '#16a34a'] } },
    { keywords: ['rice'], visual: { emoji: '🍚', colors: ['#f8fafc', '#cbd5e1'] } },
    { keywords: ['soup'], visual: { emoji: '🍲', colors: ['#fed7aa', '#f97316'] } },
    { keywords: ['ice cream'], visual: { emoji: '🍨', colors: ['#fecdd3', '#ec4899'] } },
    { keywords: ['coffee'], visual: { emoji: '☕', colors: ['#d6d3d1', '#78716c'] } },
    { keywords: ['tea'], visual: { emoji: '🍵', colors: ['#bbf7d0', '#15803d'] } },
    { keywords: ['water'], visual: { emoji: '💧', colors: ['#bae6fd', '#0284c7'] } },
    { keywords: ['milk'], visual: { emoji: '🥛', colors: ['#f8fafc', '#cbd5e1'] } },
    { keywords: ['beer'], visual: { emoji: '🍺', colors: ['#fde68a', '#d97706'] } },
    { keywords: ['wine', 'alcohol'], visual: { emoji: '🍷', colors: ['#fbcfe8', '#be185d'] } },
    { keywords: ['cake'], visual: { emoji: '🍰', colors: ['#fecdd3', '#f472b6'] } },
    { keywords: ['fruit', 'apple', 'orange'], visual: { emoji: '🍎', colors: ['#fecaca', '#dc2626'] } },
    { keywords: ['vegetable', 'carrot', 'tomato', 'potato', 'onion'], visual: { emoji: '🥕', colors: ['#fdba74', '#ea580c'] } },
    { keywords: ['cheese'], visual: { emoji: '🧀', colors: ['#fde68a', '#eab308'] } },
    { keywords: ['meat'], visual: { emoji: '🥩', colors: ['#fca5a5', '#dc2626'] } },
    { keywords: ['pizza'], visual: { emoji: '🍕', colors: ['#fde68a', '#f97316'] } },
    { keywords: ['pasta'], visual: { emoji: '🍝', colors: ['#fdba74', '#ea580c'] } },
    { keywords: ['chocolate'], visual: { emoji: '🍫', colors: ['#d6d3d1', '#6b4423'] } },
    { keywords: ['table'], visual: { emoji: '🪑', colors: ['#fed7aa', '#b45309'] } },
    { keywords: ['lamp'], visual: { emoji: '💡', colors: ['#fef08a', '#f59e0b'] } },
    { keywords: ['bed'], visual: { emoji: '🛏️', colors: ['#ddd6fe', '#7c3aed'] } },
    { keywords: ['window'], visual: { emoji: '🪟', colors: ['#bfdbfe', '#2563eb'] } },
    { keywords: ['door'], visual: { emoji: '🚪', colors: ['#d6d3d1', '#78716c'] } },
    { keywords: ['mirror'], visual: { emoji: '🪞', colors: ['#e0f2fe', '#0ea5e9'] } },
    { keywords: ['fridge'], visual: { emoji: '🧊', colors: ['#dbeafe', '#60a5fa'] } },
    { keywords: ['couch', 'sofa'], visual: { emoji: '🛋️', colors: ['#ddd6fe', '#8b5cf6'] } },
    { keywords: ['chair'], visual: { emoji: '🪑', colors: ['#fed7aa', '#c2410c'] } },
    { keywords: ['glasses'], visual: { emoji: '👓', colors: ['#cbd5e1', '#475569'] } },
    { keywords: ['wallet'], visual: { emoji: '👛', colors: ['#fecdd3', '#e11d48'] } },
    { keywords: ['key'], visual: { emoji: '🔑', colors: ['#fde68a', '#eab308'] } },
    { keywords: ['bag', 'backpack'], visual: { emoji: '🎒', colors: ['#bfdbfe', '#2563eb'] } },
    { keywords: ['phone'], visual: { emoji: '📱', colors: ['#c7d2fe', '#4338ca'] } },
    { keywords: ['computer', 'laptop'], visual: { emoji: '💻', colors: ['#bae6fd', '#0284c7'] } },
    { keywords: ['camera'], visual: { emoji: '📷', colors: ['#e5e7eb', '#4b5563'] } },
    { keywords: ['radio'], visual: { emoji: '📻', colors: ['#fbcfe8', '#be185d'] } },
    { keywords: ['television', 'tv'], visual: { emoji: '📺', colors: ['#ddd6fe', '#7c3aed'] } },
    { keywords: ['printer'], visual: { emoji: '🖨️', colors: ['#e5e7eb', '#6b7280'] } },
    { keywords: ['pen', 'pencil'], visual: { emoji: '✏️', colors: ['#fde68a', '#f59e0b'] } },
    { keywords: ['ticket'], visual: { emoji: '🎫', colors: ['#fecaca', '#ef4444'] } },
    { keywords: ['passport'], visual: { emoji: '🛂', colors: ['#bfdbfe', '#1d4ed8'] } },
    { keywords: ['newspaper'], visual: { emoji: '📰', colors: ['#e5e7eb', '#4b5563'] } },
    { keywords: ['book'], visual: { emoji: '📘', colors: ['#bfdbfe', '#2563eb'] } },
    { keywords: ['letter', 'email', 'message', 'note'], visual: { emoji: '✉️', colors: ['#f8fafc', '#94a3b8'] } },
    { keywords: ['document', 'report', 'paper', 'text'], visual: { emoji: '📄', colors: ['#f8fafc', '#6b7280'] } },
    { keywords: ['photo', 'picture', 'image'], visual: { emoji: '🖼️', colors: ['#ddd6fe', '#8b5cf6'] } },
    { keywords: ['song', 'album'], visual: { emoji: '🎵', colors: ['#fbcfe8', '#db2777'] } },
    { keywords: ['car', 'taxi'], visual: { emoji: '🚗', colors: ['#bae6fd', '#0284c7'] } },
    { keywords: ['bus'], visual: { emoji: '🚌', colors: ['#fde68a', '#f59e0b'] } },
    { keywords: ['train'], visual: { emoji: '🚆', colors: ['#cbd5e1', '#475569'] } },
    { keywords: ['bike', 'bicycle'], visual: { emoji: '🚲', colors: ['#bbf7d0', '#16a34a'] } },
    { keywords: ['plane', 'airport', 'takeoff', 'landing'], visual: { emoji: '✈️', colors: ['#bfdbfe', '#2563eb'] } },
    { keywords: ['ship'], visual: { emoji: '🚢', colors: ['#a5f3fc', '#0891b2'] } },
    { keywords: ['truck'], visual: { emoji: '🚚', colors: ['#fed7aa', '#ea580c'] } },
    { keywords: ['city', 'village', 'country'], visual: { emoji: '🏘️', colors: ['#c7d2fe', '#4f46e5'] } },
    { keywords: ['garden', 'park'], visual: { emoji: '🌳', colors: ['#bbf7d0', '#15803d'] } },
    { keywords: ['forest'], visual: { emoji: '🌲', colors: ['#86efac', '#166534'] } },
    { keywords: ['market', 'shop', 'supermarket'], visual: { emoji: '🛒', colors: ['#fde68a', '#ca8a04'] } },
    { keywords: ['school', 'university', 'lesson', 'course', 'training'], visual: { emoji: '🎓', colors: ['#c7d2fe', '#4338ca'] } },
    { keywords: ['hospital'], visual: { emoji: '🏥', colors: ['#fecaca', '#dc2626'] } },
    { keywords: ['station'], visual: { emoji: '🚉', colors: ['#cbd5e1', '#64748b'] } },
    { keywords: ['office', 'company', 'factory'], visual: { emoji: '🏢', colors: ['#dbeafe', '#2563eb'] } },
    { keywords: ['house', 'home', 'apartment', 'building', 'room'], visual: { emoji: '🏠', colors: ['#fed7aa', '#f97316'] } },
    { keywords: ['kitchen'], visual: { emoji: '🍳', colors: ['#fde68a', '#f59e0b'] } },
    { keywords: ['bathroom'], visual: { emoji: '🛁', colors: ['#bae6fd', '#0ea5e9'] } },
    { keywords: ['bedroom'], visual: { emoji: '🛏️', colors: ['#ddd6fe', '#8b5cf6'] } },
    { keywords: ['museum'], visual: { emoji: '🏛️', colors: ['#e5e7eb', '#6b7280'] } },
    { keywords: ['library'], visual: { emoji: '📚', colors: ['#bfdbfe', '#2563eb'] } },
    { keywords: ['restaurant', 'cafe'], visual: { emoji: '🍽️', colors: ['#fecaca', '#ef4444'] } },
    { keywords: ['bank'], visual: { emoji: '🏦', colors: ['#dbeafe', '#1d4ed8'] } },
    { keywords: ['theater', 'cinema'], visual: { emoji: '🎭', colors: ['#fbcfe8', '#be185d'] } },
    { keywords: ['stadium'], visual: { emoji: '🏟️', colors: ['#bbf7d0', '#16a34a'] } },
    { keywords: ['meeting', 'conference', 'discussion', 'conversation', 'interview'], visual: { emoji: '🗣️', colors: ['#ddd6fe', '#7c3aed'] } },
    { keywords: ['exam'], visual: { emoji: '📝', colors: ['#fde68a', '#ca8a04'] } },
    { keywords: ['project', 'program', 'plan'], visual: { emoji: '📋', colors: ['#bfdbfe', '#2563eb'] } },
    { keywords: ['trip', 'journey', 'vacation', 'holiday'], visual: { emoji: '🧳', colors: ['#fed7aa', '#ea580c'] } },
    { keywords: ['game'], visual: { emoji: '🎮', colors: ['#c7d2fe', '#4338ca'] } },
    { keywords: ['tree', 'flower', 'plant', 'grass'], visual: { emoji: '🌿', colors: ['#bbf7d0', '#16a34a'] } },
    { keywords: ['wind', 'air'], visual: { emoji: '💨', colors: ['#e0f2fe', '#38bdf8'] } },
    { keywords: ['rain', 'waterfall'], visual: { emoji: '🌧️', colors: ['#bae6fd', '#0284c7'] } },
    { keywords: ['snow'], visual: { emoji: '❄️', colors: ['#f8fafc', '#93c5fd'] } },
    { keywords: ['sun'], visual: { emoji: '☀️', colors: ['#fde68a', '#f59e0b'] } },
    { keywords: ['moon', 'evening'], visual: { emoji: '🌙', colors: ['#c7d2fe', '#4f46e5'] } },
    { keywords: ['star'], visual: { emoji: '⭐', colors: ['#fde68a', '#ca8a04'] } },
    { keywords: ['stone'], visual: { emoji: '🪨', colors: ['#d6d3d1', '#78716c'] } },
    { keywords: ['earth', 'world'], visual: { emoji: '🌍', colors: ['#bbf7d0', '#0f766e'] } },
    { keywords: ['freedom', 'peace', 'hope', 'love'], visual: { emoji: '🕊️', colors: ['#dbeafe', '#60a5fa'] } },
    { keywords: ['health'], visual: { emoji: '❤️', colors: ['#fecaca', '#dc2626'] } },
    { keywords: ['system', 'structure', 'method'], visual: { emoji: '⚙️', colors: ['#e5e7eb', '#6b7280'] } },
    { keywords: ['progress', 'potential'], visual: { emoji: '📈', colors: ['#bbf7d0', '#16a34a'] } },
    { keywords: ['experience', 'knowledge', 'idea'], visual: { emoji: '🧠', colors: ['#ddd6fe', '#8b5cf6'] } },
    { keywords: ['discourse', 'language', 'answer', 'question'], visual: { emoji: '💬', colors: ['#c7d2fe', '#4338ca'] } },
    { keywords: ['behavior', 'interaction', 'exchange'], visual: { emoji: '🤝', colors: ['#bfdbfe', '#2563eb'] } },
    { keywords: ['perception', 'viewpoint'], visual: { emoji: '👁️', colors: ['#e0f2fe', '#0284c7'] } },
    { keywords: ['consensus', 'alignment'], visual: { emoji: '✅', colors: ['#bbf7d0', '#16a34a'] } },
    { keywords: ['consequence', 'result'], visual: { emoji: '🎯', colors: ['#fecaca', '#ef4444'] } },
    { keywords: ['contradiction', 'problem'], visual: { emoji: '⚠️', colors: ['#fdba74', '#ea580c'] } },
    { keywords: ['justification', 'logic', 'theory', 'strategy'], visual: { emoji: '📚', colors: ['#ddd6fe', '#7c3aed'] } },
    { keywords: ['impulse', 'energy'], visual: { emoji: '⚡', colors: ['#fde68a', '#eab308'] } },
    { keywords: ['culture', 'society'], visual: { emoji: '🌐', colors: ['#bfdbfe', '#2563eb'] } },
    { keywords: ['tax'], visual: { emoji: '💰', colors: ['#fde68a', '#ca8a04'] } },
  ];

  const matchedVisual = keywordVisuals.find(({ keywords }) => keywords.some((keyword) => translation.includes(keyword)));
  if (matchedVisual) {
    return matchedVisual.visual;
  }

  const category = pickWordCategory(word);
  const baseVisuals: Record<Exclude<WordCategory, 'object'>, { emoji: string; colors: [string, string] }> = {
    person: { emoji: '🧑', colors: ['#fde68a', '#f59e0b'] },
    animal: { emoji: '🐾', colors: ['#bfdbfe', '#3b82f6'] },
    food: { emoji: '🍽️', colors: ['#fecaca', '#ef4444'] },
    place: { emoji: '🏛️', colors: ['#c7d2fe', '#6366f1'] },
    vehicle: { emoji: '🚗', colors: ['#bae6fd', '#0ea5e9'] },
    document: { emoji: '📄', colors: ['#e5e7eb', '#6b7280'] },
    abstract: { emoji: '💡', colors: ['#ddd6fe', '#8b5cf6'] },
  };

  if (category !== 'object') {
    return baseVisuals[category];
  }

  const objectVisuals = [
    { emoji: '🧩', colors: ['#bbf7d0', '#22c55e'] as [string, string] },
    { emoji: '🔑', colors: ['#fde68a', '#f59e0b'] as [string, string] },
    { emoji: '🪑', colors: ['#fed7aa', '#f97316'] as [string, string] },
    { emoji: '💼', colors: ['#bfdbfe', '#2563eb'] as [string, string] },
    { emoji: '📦', colors: ['#fecdd3', '#e11d48'] as [string, string] },
    { emoji: '🛋️', colors: ['#ddd6fe', '#7c3aed'] as [string, string] },
    { emoji: '💻', colors: ['#a5f3fc', '#0891b2'] as [string, string] },
    { emoji: '📱', colors: ['#c7d2fe', '#4f46e5'] as [string, string] },
  ];

  const hash = word.word.split('').reduce((total, char) => total + char.charCodeAt(0), 0);
  return objectVisuals[hash % objectVisuals.length];
}

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

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [isReady, setIsReady] = useState(false);
  const [stats, setStats] = useState<AppStats>(createEmptyStats);
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [selectedLevel, setSelectedLevel] = useState<LevelId>('A1');
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

  const startGame = (level: LevelId, mode: GameMode = 'classic') => {
    const reviewPool =
      mode === 'review'
        ? mistakes.filter((item) => item.level === level)
        : [];
    const nextWords =
      mode === 'timed'
        ? buildRoundFromPool(LEVEL_POOLS[level], LEVEL_POOLS[level].length)
        : mode === 'developer'
          ? buildDeveloperPool()
        : mode === 'review'
          ? buildRoundFromPool(reviewPool, ROUND_LENGTH)
          : buildRound(level);

    if (mode === 'review' && nextWords.length === 0) {
      Alert.alert(t.info, t.noReviewWords);
      return;
    }

    const nextRound =
      mode === 'find_wrong'
        ? buildFindWrongQuestions(nextWords)
        : buildClassicQuestions(nextWords);

    setSelectedLevel(level);
    setSelectedGameMode(mode);
    setCurrentRound(nextRound);
    setCurrentIndex(0);
    setScore(0);
    setLives(mode === 'timed' || mode === 'developer' ? 0 : mode === 'one_life' ? 1 : STARTING_LIVES);
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
    const nextLives = selectedGameMode === 'timed' || selectedGameMode === 'developer' ? lives : isCorrect ? lives : lives - 1;
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
      const noLivesLeft = selectedGameMode !== 'timed' && selectedGameMode !== 'developer' && !isCorrect && nextLives <= 0;

      if (!isCorrect && selectedGameMode !== 'timed' && selectedGameMode !== 'developer') {
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
    const optionColor = ANSWER_COLORS[option as Article] ?? '#64748b';
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

            <Pressable key="classic-mode" style={styles.levelCard} onPress={() => handleButtonPress(() => startGame(selectedLevel, 'classic'))}>
              <LinearGradient
                colors={BUTTON_GRADIENTS.gold.colors}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.levelGradient}
              >
                <View>
                  <Text style={[styles.levelTitle, { color: BUTTON_GRADIENTS.gold.textColor }]}>{t.modeClassic}</Text>
                  <Text style={[styles.levelSubtitle, { color: BUTTON_GRADIENTS.gold.textColor }]}>{t.modeClassicHint}</Text>
                </View>
              </LinearGradient>
            </Pressable>

            <Pressable key="timed-mode" style={styles.levelCard} onPress={() => handleButtonPress(() => startGame(selectedLevel, 'timed'))}>
              <LinearGradient colors={BUTTON_GRADIENTS.blue.colors} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.levelGradient}>
                <View>
                  <Text style={[styles.levelTitle, { color: BUTTON_GRADIENTS.blue.textColor }]}>{t.modeTimed}</Text>
                  <Text style={[styles.levelSubtitle, { color: BUTTON_GRADIENTS.blue.textColor }]}>{t.modeTimedHint}</Text>
                </View>
              </LinearGradient>
            </Pressable>

            <Pressable key="one-life-mode" style={styles.levelCard} onPress={() => handleButtonPress(() => startGame(selectedLevel, 'one_life'))}>
              <LinearGradient colors={BUTTON_GRADIENTS.berry.colors} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.levelGradient}>
                <View>
                  <Text style={[styles.levelTitle, { color: BUTTON_GRADIENTS.berry.textColor }]}>{t.modeOneLife}</Text>
                  <Text style={[styles.levelSubtitle, { color: BUTTON_GRADIENTS.berry.textColor }]}>{t.modeOneLifeHint}</Text>
                </View>
              </LinearGradient>
            </Pressable>

            <Pressable key="review-mode" style={styles.levelCard} onPress={() => handleButtonPress(() => startGame(selectedLevel, 'review'))}>
              <LinearGradient colors={BUTTON_GRADIENTS.teal.colors} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.levelGradient}>
                <View>
                  <Text style={[styles.levelTitle, { color: BUTTON_GRADIENTS.teal.textColor }]}>{t.modeReview}</Text>
                  <Text style={[styles.levelSubtitle, { color: BUTTON_GRADIENTS.teal.textColor }]}>{t.modeReviewHint}</Text>
                </View>
              </LinearGradient>
            </Pressable>

            <Pressable key="find-wrong-mode" style={styles.levelCard} onPress={() => handleButtonPress(() => startGame(selectedLevel, 'find_wrong'))}>
              <LinearGradient colors={BUTTON_GRADIENTS.slate.colors} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.levelGradient}>
                <View>
                  <Text style={[styles.levelTitle, { color: BUTTON_GRADIENTS.slate.textColor }]}>{t.modeFindWrong}</Text>
                  <Text style={[styles.levelSubtitle, { color: BUTTON_GRADIENTS.slate.textColor }]}>{t.modeFindWrongHint}</Text>
                </View>
              </LinearGradient>
            </Pressable>

            <Pressable key="developer-mode" style={styles.levelCard} onPress={() => handleButtonPress(() => startGame(selectedLevel, 'developer'))}>
              <LinearGradient colors={BUTTON_GRADIENTS.berry.colors} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.levelGradient}>
                <View>
                  <Text style={[styles.levelTitle, { color: BUTTON_GRADIENTS.berry.textColor }]}>{t.modeDeveloper}</Text>
                  <Text style={[styles.levelSubtitle, { color: BUTTON_GRADIENTS.berry.textColor }]}>{t.modeDeveloperHint}</Text>
                </View>
              </LinearGradient>
            </Pressable>

            <GradientButton label={t.levels} variant="blue" onPress={() => handleButtonPress(() => setScreen('levels'))} />
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
            {selectedGameMode !== 'timed' && selectedGameMode !== 'developer' && (
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
              {currentQuestion.kind === 'find_wrong' && (
                <Text style={styles.findWrongQuestionLabel}>{currentQuestion.prompt}</Text>
              )}

              <LinearGradient
                colors={getWordVisual(currentQuestion).colors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.developerVisualCard}
              >
                <Text style={styles.developerVisualEmoji}>{getWordVisual(currentQuestion).emoji}</Text>
              </LinearGradient>

              {answerState && (
                <View
                  style={[
                    styles.articleRevealBadge,
                    {
                      backgroundColor: `${(ANSWER_COLORS[currentQuestion.answer as Article] ?? ARTICLE_COLORS[currentQuestion.article])}18`,
                      borderColor: ANSWER_COLORS[currentQuestion.answer as Article] ?? ARTICLE_COLORS[currentQuestion.article],
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.articleRevealText,
                      { color: ANSWER_COLORS[currentQuestion.answer as Article] ?? ARTICLE_COLORS[currentQuestion.article] },
                    ]}
                  >
                    {currentQuestion.kind === 'find_wrong' ? `${currentQuestion.article} ${currentQuestion.word}` : currentQuestion.answer}
                  </Text>
                </View>
              )}

              {currentQuestion.kind !== 'find_wrong' && <Text style={styles.wordText}>{currentQuestion.word}</Text>}
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

          <GradientButton label={t.replayLevel} variant="gold" onPress={() => handleButtonPress(() => startGame(lastSummary.level, lastSummary.mode))} />
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
