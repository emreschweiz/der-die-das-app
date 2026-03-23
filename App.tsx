import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Article = 'der' | 'die' | 'das';
type CategoryId = 'mixed' | 'home' | 'animals' | 'food' | 'daily';
type Screen = 'onboarding' | 'home' | 'category' | 'game' | 'results' | 'mistakes' | 'stats';

type WordItem = {
  id: string;
  word: string;
  article: Article;
  translation: string;
  category: Exclude<CategoryId, 'mixed'>;
  difficulty: 'easy' | 'medium';
};

type GameQuestion = WordItem;

type CategoryStats = Record<Exclude<CategoryId, 'mixed'>, { correct: number; wrong: number }>;

type MistakeMap = Record<
  string,
  {
    count: number;
    lastSeen: number;
  }
>;

type AppStats = {
  totalRounds: number;
  totalAnswers: number;
  correctAnswers: number;
  wrongAnswers: number;
  bestScore: number;
  bestStreak: number;
  dailyPlays: number;
  lastPlayedOn: string | null;
  categoryStats: CategoryStats;
};

type AppData = {
  onboardingSeen: boolean;
  stats: AppStats;
  mistakes: MistakeMap;
};

type RoundSummary = {
  score: number;
  correct: number;
  wrong: number;
  bestStreak: number;
  category: CategoryId;
  mistakes: WordItem[];
};

const STORAGE_KEY = 'derdiedas.app.v1';
const ROUND_LENGTH = 12;
const STARTING_LIVES = 3;
const ARTICLES: Article[] = ['der', 'die', 'das'];
const TODAY = new Date().toISOString().slice(0, 10);

const ARTICLE_COLORS: Record<Article, string> = {
  der: '#4A90E2',
  die: '#FF5C8A',
  das: '#2DBE7F',
};

const CATEGORY_META: Record<
  CategoryId,
  {
    label: string;
    subtitle: string;
  }
> = {
  mixed: {
    label: 'Karisik',
    subtitle: 'Tum kategorilerden karisik mini tur',
  },
  home: {
    label: 'Ev Esyalari',
    subtitle: 'Masa, sandalye, lamba gibi nesneler',
  },
  animals: {
    label: 'Hayvanlar',
    subtitle: 'Sik kullanilan hayvan isimleriyle calis',
  },
  food: {
    label: 'Yiyecekler',
    subtitle: 'Gunluk hayatta gorecegin yemek kelimeleri',
  },
  daily: {
    label: 'Gunluk Nesneler',
    subtitle: 'Telefon, anahtar, bilgisayar gibi kelimeler',
  },
};

const WORD_BANK: WordItem[] = [
  { id: 'table', word: 'Tisch', article: 'der', translation: 'masa', category: 'home', difficulty: 'easy' },
  { id: 'lamp', word: 'Lampe', article: 'die', translation: 'lamba', category: 'home', difficulty: 'easy' },
  { id: 'bed', word: 'Bett', article: 'das', translation: 'yatak', category: 'home', difficulty: 'easy' },
  { id: 'sofa', word: 'Sofa', article: 'das', translation: 'kanepe', category: 'home', difficulty: 'easy' },
  { id: 'mirror', word: 'Spiegel', article: 'der', translation: 'ayna', category: 'home', difficulty: 'medium' },
  { id: 'door', word: 'Tur', article: 'die', translation: 'kapi', category: 'home', difficulty: 'easy' },
  { id: 'window', word: 'Fenster', article: 'das', translation: 'pencere', category: 'home', difficulty: 'easy' },
  { id: 'fridge', word: 'Kuhlschrank', article: 'der', translation: 'buzdolabi', category: 'home', difficulty: 'medium' },
  { id: 'couch', word: 'Couch', article: 'die', translation: 'koltuk', category: 'home', difficulty: 'medium' },
  { id: 'carpet', word: 'Teppich', article: 'der', translation: 'hali', category: 'home', difficulty: 'medium' },
  { id: 'dog', word: 'Hund', article: 'der', translation: 'kopek', category: 'animals', difficulty: 'easy' },
  { id: 'cat', word: 'Katze', article: 'die', translation: 'kedi', category: 'animals', difficulty: 'easy' },
  { id: 'horse', word: 'Pferd', article: 'das', translation: 'at', category: 'animals', difficulty: 'easy' },
  { id: 'bird', word: 'Vogel', article: 'der', translation: 'kus', category: 'animals', difficulty: 'easy' },
  { id: 'mouse', word: 'Maus', article: 'die', translation: 'fare', category: 'animals', difficulty: 'easy' },
  { id: 'sheep', word: 'Schaf', article: 'das', translation: 'koyun', category: 'animals', difficulty: 'easy' },
  { id: 'lion', word: 'Lowe', article: 'der', translation: 'aslan', category: 'animals', difficulty: 'medium' },
  { id: 'snake', word: 'Schlange', article: 'die', translation: 'yilan', category: 'animals', difficulty: 'medium' },
  { id: 'monkey', word: 'Affe', article: 'der', translation: 'maymun', category: 'animals', difficulty: 'medium' },
  { id: 'insect', word: 'Insekt', article: 'das', translation: 'bocek', category: 'animals', difficulty: 'medium' },
  { id: 'bread', word: 'Brot', article: 'das', translation: 'ekmek', category: 'food', difficulty: 'easy' },
  { id: 'cheese', word: 'Kase', article: 'der', translation: 'peynir', category: 'food', difficulty: 'easy' },
  { id: 'milk', word: 'Milch', article: 'die', translation: 'sut', category: 'food', difficulty: 'easy' },
  { id: 'juice', word: 'Saft', article: 'der', translation: 'meyve suyu', category: 'food', difficulty: 'easy' },
  { id: 'egg', word: 'Ei', article: 'das', translation: 'yumurta', category: 'food', difficulty: 'easy' },
  { id: 'banana', word: 'Banane', article: 'die', translation: 'muz', category: 'food', difficulty: 'easy' },
  { id: 'salad', word: 'Salat', article: 'der', translation: 'salata', category: 'food', difficulty: 'easy' },
  { id: 'icecream', word: 'Eis', article: 'das', translation: 'dondurma', category: 'food', difficulty: 'easy' },
  { id: 'soup', word: 'Suppe', article: 'die', translation: 'corba', category: 'food', difficulty: 'easy' },
  { id: 'rice', word: 'Reis', article: 'der', translation: 'pirinc', category: 'food', difficulty: 'medium' },
  { id: 'computer', word: 'Computer', article: 'der', translation: 'bilgisayar', category: 'daily', difficulty: 'easy' },
  { id: 'bag', word: 'Tasche', article: 'die', translation: 'canta', category: 'daily', difficulty: 'easy' },
  { id: 'phone', word: 'Handy', article: 'das', translation: 'telefon', category: 'daily', difficulty: 'easy' },
  { id: 'key', word: 'Schlussel', article: 'der', translation: 'anahtar', category: 'daily', difficulty: 'easy' },
  { id: 'newspaper', word: 'Zeitung', article: 'die', translation: 'gazete', category: 'daily', difficulty: 'easy' },
  { id: 'bicycle', word: 'Fahrrad', article: 'das', translation: 'bisiklet', category: 'daily', difficulty: 'easy' },
  { id: 'wallet', word: 'Geldbeutel', article: 'der', translation: 'cuzdan', category: 'daily', difficulty: 'medium' },
  { id: 'glasses', word: 'Brille', article: 'die', translation: 'gozluk', category: 'daily', difficulty: 'easy' },
  { id: 'ticket', word: 'Ticket', article: 'das', translation: 'bilet', category: 'daily', difficulty: 'easy' },
  { id: 'pen', word: 'Stift', article: 'der', translation: 'kalem', category: 'daily', difficulty: 'easy' },
];

const createEmptyStats = (): AppStats => ({
  totalRounds: 0,
  totalAnswers: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  bestScore: 0,
  bestStreak: 0,
  dailyPlays: 0,
  lastPlayedOn: null,
  categoryStats: {
    home: { correct: 0, wrong: 0 },
    animals: { correct: 0, wrong: 0 },
    food: { correct: 0, wrong: 0 },
    daily: { correct: 0, wrong: 0 },
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

const buildRound = (category: CategoryId, mistakes: MistakeMap): GameQuestion[] => {
  const pool =
    category === 'mixed'
      ? WORD_BANK
      : WORD_BANK.filter((word) => word.category === category);

  const prioritized = [...pool].sort((a, b) => {
    const aMistakes = mistakes[a.id]?.count ?? 0;
    const bMistakes = mistakes[b.id]?.count ?? 0;
    return bMistakes - aMistakes;
  });

  const boosted = prioritized.slice(0, 6);
  const rest = shuffle(prioritized.slice(6));
  const round = [...shuffle(boosted), ...rest].slice(0, ROUND_LENGTH);

  return shuffle(round);
};

export default function App() {
  const [screen, setScreen] = useState<Screen>('onboarding');
  const [isReady, setIsReady] = useState(false);
  const [stats, setStats] = useState<AppStats>(createEmptyStats);
  const [mistakes, setMistakes] = useState<MistakeMap>({});
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('mixed');
  const [currentRound, setCurrentRound] = useState<GameQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(STARTING_LIVES);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [roundBestStreak, setRoundBestStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [answerState, setAnswerState] = useState<{
    selected: Article;
    correct: boolean;
  } | null>(null);
  const [roundMistakes, setRoundMistakes] = useState<WordItem[]>([]);
  const [lastSummary, setLastSummary] = useState<RoundSummary | null>(null);
  const [onboardingSeen, setOnboardingSeen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentQuestion = currentRound[currentIndex];
  const accuracy =
    stats.totalAnswers === 0
      ? 0
      : Math.round((stats.correctAnswers / stats.totalAnswers) * 100);

  const mistakeWords = useMemo(() => {
    return Object.entries(mistakes)
      .sort(([, left], [, right]) => right.count - left.count)
      .map(([id, value]) => {
        const word = WORD_BANK.find((entry) => entry.id === id);
        return word
          ? {
              ...word,
              mistakeCount: value.count,
            }
          : null;
      })
      .filter(Boolean) as Array<WordItem & { mistakeCount: number }>;
  }, [mistakes]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);

        if (!raw) {
          setScreen('onboarding');
          setIsReady(true);
          return;
        }

        const parsed = JSON.parse(raw) as Partial<AppData>;
        setOnboardingSeen(Boolean(parsed.onboardingSeen));
        setStats(parsed.stats ? { ...createEmptyStats(), ...parsed.stats } : createEmptyStats());
        setMistakes(parsed.mistakes ?? {});
        setScreen(parsed.onboardingSeen ? 'home' : 'onboarding');
      } catch {
        setScreen('onboarding');
      } finally {
        setIsReady(true);
      }
    };

    loadData();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    const payload: AppData = {
      onboardingSeen,
      stats,
      mistakes,
    };

    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(payload)).catch(() => null);
  }, [isReady, mistakes, onboardingSeen, stats]);

  const startGame = (category: CategoryId, presetRound?: GameQuestion[]) => {
    const round = presetRound ?? buildRound(category, mistakes);

    setSelectedCategory(category);
    setCurrentRound(round);
    setCurrentIndex(0);
    setScore(0);
    setLives(STARTING_LIVES);
    setCurrentStreak(0);
    setRoundBestStreak(0);
    setCorrectCount(0);
    setWrongCount(0);
    setAnswerState(null);
    setRoundMistakes([]);
    setScreen('game');
  };

  const finishRound = (
    finalScore: number,
    finalCorrect: number,
    finalWrong: number,
    finalBestStreak: number,
    finalMistakes: WordItem[],
  ) => {
    const summary: RoundSummary = {
      score: finalScore,
      correct: finalCorrect,
      wrong: finalWrong,
      bestStreak: finalBestStreak,
      category: selectedCategory,
      mistakes: finalMistakes,
    };

    setLastSummary(summary);
    setStats((previous) => {
      const isNewDay = previous.lastPlayedOn !== TODAY;
      const updated = {
        ...previous,
        totalRounds: previous.totalRounds + 1,
        totalAnswers: previous.totalAnswers + finalCorrect + finalWrong,
        correctAnswers: previous.correctAnswers + finalCorrect,
        wrongAnswers: previous.wrongAnswers + finalWrong,
        bestScore: Math.max(previous.bestScore, finalScore),
        bestStreak: Math.max(previous.bestStreak, finalBestStreak),
        dailyPlays: isNewDay ? 1 : previous.dailyPlays + 1,
        lastPlayedOn: TODAY,
      };

      if (selectedCategory !== 'mixed') {
        updated.categoryStats = {
          ...previous.categoryStats,
          [selectedCategory]: {
            correct: previous.categoryStats[selectedCategory].correct + finalCorrect,
            wrong: previous.categoryStats[selectedCategory].wrong + finalWrong,
          },
        };
      }

      return updated;
    });
    setScreen('results');
  };

  const handleAnswer = (selected: Article) => {
    if (!currentQuestion || answerState) {
      return;
    }

    const isCorrect = currentQuestion.article === selected;
    const nextCorrect = isCorrect ? correctCount + 1 : correctCount;
    const nextWrong = isCorrect ? wrongCount : wrongCount + 1;
    const nextStreak = isCorrect ? currentStreak + 1 : 0;
    const nextBestStreak = Math.max(roundBestStreak, nextStreak);
    const nextLives = isCorrect ? lives : lives - 1;
    const nextScore = isCorrect ? score + 10 + currentStreak * 2 : Math.max(0, score - 4);
    const nextMistakes = isCorrect ? roundMistakes : [...roundMistakes, currentQuestion];

    setAnswerState({ selected, correct: isCorrect });
    setScore(nextScore);
    setCurrentStreak(nextStreak);
    setRoundBestStreak(nextBestStreak);
    setCorrectCount(nextCorrect);
    setWrongCount(nextWrong);
    setRoundMistakes(nextMistakes);

    if (!isCorrect) {
      setLives(nextLives);
      setMistakes((previous) => ({
        ...previous,
        [currentQuestion.id]: {
          count: (previous[currentQuestion.id]?.count ?? 0) + 1,
          lastSeen: Date.now(),
        },
      }));
    } else {
      setMistakes((previous) => {
        if (!previous[currentQuestion.id]) {
          return previous;
        }

        const reducedCount = Math.max(previous[currentQuestion.id].count - 1, 0);

        if (reducedCount === 0) {
          const { [currentQuestion.id]: removed, ...rest } = previous;
          return rest;
        }

        return {
          ...previous,
          [currentQuestion.id]: {
            count: reducedCount,
            lastSeen: Date.now(),
          },
        };
      });
    }

    timeoutRef.current = setTimeout(() => {
      const reachedEnd = currentIndex + 1 >= currentRound.length;
      const isOutOfLives = !isCorrect && nextLives <= 0;

      if (reachedEnd || isOutOfLives) {
        setAnswerState(null);
        finishRound(nextScore, nextCorrect, nextWrong, nextBestStreak, nextMistakes);
        return;
      }

      setCurrentIndex((previous) => previous + 1);
      setAnswerState(null);
    }, 700);
  };

  const beginMistakePractice = () => {
    const pool = mistakeWords.slice(0, ROUND_LENGTH).map(({ mistakeCount, ...word }) => word);

    if (pool.length === 0) {
      setScreen('mistakes');
      return;
    }

    startGame('mixed', shuffle(pool));
  };

  const resetProgress = async () => {
    setStats(createEmptyStats());
    setMistakes({});
    setLastSummary(null);
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        onboardingSeen: true,
        stats: createEmptyStats(),
        mistakes: {},
      } satisfies AppData),
    );
  };

  if (!isReady) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="light" />
        <View style={[styles.screen, styles.centered]}>
          <Text style={styles.loadingTitle}>Der Die Das</Text>
          <Text style={styles.loadingSubtitle}>Ilk tur hazirlaniyor...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      {screen === 'onboarding' && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.heroCard}>
            <Text style={styles.eyebrow}>Mini game ile Almanca artikel pratigi</Text>
            <Text style={styles.heroTitle}>Der Die Das</Text>
            <Text style={styles.heroSubtitle}>
              Hedef tek: kelimeyi gorur gormez dogru artikeli secmek.
            </Text>

            <View style={styles.articleRow}>
              {ARTICLES.map((article) => (
                <View key={article} style={[styles.articleBadge, { backgroundColor: ARTICLE_COLORS[article] }]}>
                  <Text style={styles.articleBadgeText}>{article}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.panel}>
            <Text style={styles.panelTitle}>Nasil oynanir?</Text>
            <Text style={styles.panelText}>1. Kelimeyi gor.</Text>
            <Text style={styles.panelText}>2. Der, die veya das sec.</Text>
            <Text style={styles.panelText}>3. Seri yap, puan topla, yanlislari tekrar et.</Text>
          </View>

          <View style={styles.panel}>
            <Text style={styles.panelTitle}>Ilk surum neler iceriyor?</Text>
            <Text style={styles.panelText}>
              Hizli oyun modu, kategori secimi, tekrar listesi ve basit istatistikler.
            </Text>
          </View>

          <Pressable
            style={styles.primaryButton}
            onPress={() => {
              setOnboardingSeen(true);
              setScreen('home');
            }}
          >
            <Text style={styles.primaryButtonText}>Baslayalim</Text>
          </Pressable>
        </ScrollView>
      )}

      {screen === 'home' && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.heroCard}>
            <Text style={styles.eyebrow}>Gunluk hedef</Text>
            <Text style={styles.heroTitle}>{stats.dailyPlays}/3 tur</Text>
            <Text style={styles.heroSubtitle}>
              Her mini tur, artikel secme refleksini biraz daha hizlandirir.
            </Text>
          </View>

          <View style={styles.statGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>En iyi skor</Text>
              <Text style={styles.statValue}>{stats.bestScore}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Dogruluk</Text>
              <Text style={styles.statValue}>%{accuracy}</Text>
            </View>
          </View>

          <View style={styles.panel}>
            <Text style={styles.panelTitle}>Hizli baslangic</Text>
            <Text style={styles.panelText}>12 kelimelik mini tur, 3 can ve anlik geri bildirim.</Text>
          </View>

          <Pressable style={styles.primaryButton} onPress={() => setScreen('category')}>
            <Text style={styles.primaryButtonText}>Oyuna Basla</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton} onPress={() => setScreen('mistakes')}>
            <Text style={styles.secondaryButtonText}>Yanlislarimi Calis</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton} onPress={() => setScreen('stats')}>
            <Text style={styles.secondaryButtonText}>Istatistikler</Text>
          </Pressable>
        </ScrollView>
      )}

      {screen === 'category' && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.sectionTitle}>Kategori Sec</Text>
          {(['mixed', 'home', 'animals', 'food', 'daily'] as CategoryId[]).map((category) => (
            <Pressable key={category} style={styles.categoryCard} onPress={() => startGame(category)}>
              <Text style={styles.categoryTitle}>{CATEGORY_META[category].label}</Text>
              <Text style={styles.categorySubtitle}>{CATEGORY_META[category].subtitle}</Text>
            </Pressable>
          ))}

          <Pressable style={styles.secondaryButton} onPress={() => setScreen('home')}>
            <Text style={styles.secondaryButtonText}>Geri Don</Text>
          </Pressable>
        </ScrollView>
      )}

      {screen === 'game' && currentQuestion && (
        <View style={styles.screen}>
          <View style={styles.gameTopRow}>
            <View>
              <Text style={styles.topMetaLabel}>Kategori</Text>
              <Text style={styles.topMetaValue}>{CATEGORY_META[selectedCategory].label}</Text>
            </View>
            <View>
              <Text style={styles.topMetaLabel}>Ilerleme</Text>
              <Text style={styles.topMetaValue}>
                {currentIndex + 1}/{currentRound.length}
              </Text>
            </View>
          </View>

          <View style={styles.gameStatsRow}>
            <View style={styles.gameStatPill}>
              <Text style={styles.gameStatText}>Skor {score}</Text>
            </View>
            <View style={styles.gameStatPill}>
              <Text style={styles.gameStatText}>Seri {currentStreak}</Text>
            </View>
            <View style={styles.gameStatPill}>
              <Text style={styles.gameStatText}>Can {'❤'.repeat(lives)}</Text>
            </View>
          </View>

          <View style={styles.questionCard}>
            <Text style={styles.translationLabel}>{currentQuestion.translation}</Text>
            <Text style={styles.wordText}>{currentQuestion.word}</Text>
            <Text style={styles.helperText}>Dogru artikeli sec.</Text>

            {answerState && (
              <View
                style={[
                  styles.feedbackBox,
                  answerState.correct ? styles.feedbackCorrect : styles.feedbackWrong,
                ]}
              >
                <Text style={styles.feedbackText}>
                  {answerState.correct
                    ? 'Dogru cevap'
                    : `Dogrusu ${currentQuestion.article} ${currentQuestion.word}`}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.answerColumn}>
            {ARTICLES.map((article) => {
              const isSelected = answerState?.selected === article;
              const isCorrectAnswer = answerState && currentQuestion.article === article;

              return (
                <Pressable
                  key={article}
                  style={[
                    styles.answerButton,
                    { borderColor: ARTICLE_COLORS[article] },
                    isSelected && !answerState.correct && styles.answerButtonWrong,
                    isCorrectAnswer && styles.answerButtonCorrect,
                  ]}
                  disabled={Boolean(answerState)}
                  onPress={() => handleAnswer(article)}
                >
                  <Text style={[styles.answerText, { color: ARTICLE_COLORS[article] }]}>{article}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      )}

      {screen === 'results' && lastSummary && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.heroCard}>
            <Text style={styles.eyebrow}>Tur Tamamlandi</Text>
            <Text style={styles.heroTitle}>{lastSummary.score} puan</Text>
            <Text style={styles.heroSubtitle}>
              {lastSummary.correct} dogru, {lastSummary.wrong} yanlis, en iyi seri {lastSummary.bestStreak}.
            </Text>
          </View>

          <View style={styles.statGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Kategori</Text>
              <Text style={styles.statValueSmall}>{CATEGORY_META[lastSummary.category].label}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Dogruluk</Text>
              <Text style={styles.statValue}>
                %
                {Math.round(
                  (lastSummary.correct / Math.max(lastSummary.correct + lastSummary.wrong, 1)) * 100,
                )}
              </Text>
            </View>
          </View>

          <View style={styles.panel}>
            <Text style={styles.panelTitle}>Bu turda zorlayan kelimeler</Text>
            {lastSummary.mistakes.length === 0 ? (
              <Text style={styles.panelText}>Harika, bu tur hic hata yapmadin.</Text>
            ) : (
              lastSummary.mistakes.slice(0, 5).map((item) => (
                <Text key={`${item.id}-result`} style={styles.panelText}>
                  {item.article} {item.word} - {item.translation}
                </Text>
              ))
            )}
          </View>

          <Pressable style={styles.primaryButton} onPress={() => startGame(lastSummary.category)}>
            <Text style={styles.primaryButtonText}>Tekrar Oyna</Text>
          </Pressable>
          <Pressable style={styles.secondaryButton} onPress={() => setScreen('mistakes')}>
            <Text style={styles.secondaryButtonText}>Yanlislarimi Calis</Text>
          </Pressable>
          <Pressable style={styles.secondaryButton} onPress={() => setScreen('home')}>
            <Text style={styles.secondaryButtonText}>Ana Menu</Text>
          </Pressable>
        </ScrollView>
      )}
      {screen === 'mistakes' && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.sectionTitle}>Yanlislarim</Text>
          {mistakeWords.length === 0 ? (
            <View style={styles.panel}>
              <Text style={styles.panelTitle}>Su an liste bos</Text>
              <Text style={styles.panelText}>
                Bir tur oynadiginda zorlandigin kelimeler burada birikecek.
              </Text>
            </View>
          ) : (
            <>
              <View style={styles.panel}>
                <Text style={styles.panelTitle}>Oncelikli tekrar listesi</Text>
                <Text style={styles.panelText}>En cok hata yaptigin kelimeler ustte gorunur.</Text>
              </View>

              {mistakeWords.slice(0, 12).map((item) => (
                <View key={item.id} style={styles.mistakeCard}>
                  <View>
                    <Text style={styles.mistakeWord}>
                      {item.article} {item.word}
                    </Text>
                    <Text style={styles.mistakeTranslation}>{item.translation}</Text>
                  </View>
                  <View style={styles.mistakeCountBadge}>
                    <Text style={styles.mistakeCountText}>{item.mistakeCount}x</Text>
                  </View>
                </View>
              ))}

              <Pressable style={styles.primaryButton} onPress={beginMistakePractice}>
                <Text style={styles.primaryButtonText}>Bu Kelimelerle Tur Baslat</Text>
              </Pressable>
            </>
          )}

          <Pressable style={styles.secondaryButton} onPress={() => setScreen('home')}>
            <Text style={styles.secondaryButtonText}>Ana Menu</Text>
          </Pressable>
        </ScrollView>
      )}

      {screen === 'stats' && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.sectionTitle}>Istatistikler</Text>

          <View style={styles.statGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Toplam tur</Text>
              <Text style={styles.statValue}>{stats.totalRounds}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Toplam cevap</Text>
              <Text style={styles.statValue}>{stats.totalAnswers}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Dogruluk</Text>
              <Text style={styles.statValue}>%{accuracy}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>En iyi seri</Text>
              <Text style={styles.statValue}>{stats.bestStreak}</Text>
            </View>
          </View>

          <View style={styles.panel}>
            <Text style={styles.panelTitle}>Kategori performansi</Text>
            {(Object.keys(stats.categoryStats) as Array<keyof CategoryStats>).map((category) => {
              const total = stats.categoryStats[category].correct + stats.categoryStats[category].wrong;
              const ratio = total === 0 ? 0 : Math.round((stats.categoryStats[category].correct / total) * 100);

              return (
                <Text key={category} style={styles.panelText}>
                  {CATEGORY_META[category].label}: %{ratio} ({stats.categoryStats[category].correct}/{total})
                </Text>
              );
            })}
          </View>

          <Pressable style={styles.secondaryButton} onPress={resetProgress}>
            <Text style={styles.secondaryButtonText}>Ilerlemeyi Sifirla</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton} onPress={() => setScreen('home')}>
            <Text style={styles.secondaryButtonText}>Ana Menu</Text>
          </Pressable>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#102033',
  },
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 16,
  },
  loadingTitle: {
    color: '#F4F7FB',
    fontSize: 34,
    fontWeight: '800',
  },
  loadingSubtitle: {
    marginTop: 8,
    color: '#AFC4D9',
    fontSize: 16,
  },
  heroCard: {
    borderRadius: 28,
    padding: 24,
    backgroundColor: '#16314F',
    borderWidth: 1,
    borderColor: '#2A4B70',
  },
  eyebrow: {
    color: '#8FB6DA',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  heroTitle: {
    marginTop: 10,
    color: '#F9FBFF',
    fontSize: 34,
    fontWeight: '800',
  },
  heroSubtitle: {
    marginTop: 10,
    color: '#D7E5F2',
    fontSize: 16,
    lineHeight: 24,
  },
  articleRow: {
    flexDirection: 'row',
    marginTop: 18,
    gap: 10,
  },
  articleBadge: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  articleBadgeText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  panel: {
    borderRadius: 22,
    padding: 20,
    backgroundColor: '#F4F7FB',
  },
  panelTitle: {
    color: '#11263C',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  panelText: {
    color: '#38516A',
    fontSize: 15,
    lineHeight: 22,
  },
  primaryButton: {
    borderRadius: 20,
    backgroundColor: '#FFC857',
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#3A2A00',
    fontSize: 17,
    fontWeight: '800',
  },
  secondaryButton: {
    borderRadius: 20,
    backgroundColor: '#1A3553',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#335479',
  },
  secondaryButtonText: {
    color: '#E6EFF8',
    fontSize: 16,
    fontWeight: '700',
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
    backgroundColor: '#F4F7FB',
  },
  statLabel: {
    color: '#54708B',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  statValue: {
    marginTop: 8,
    color: '#11263C',
    fontSize: 28,
    fontWeight: '800',
  },
  statValueSmall: {
    marginTop: 8,
    color: '#11263C',
    fontSize: 18,
    fontWeight: '800',
  },
  sectionTitle: {
    color: '#F4F7FB',
    fontSize: 30,
    fontWeight: '800',
  },
  categoryCard: {
    borderRadius: 24,
    padding: 22,
    backgroundColor: '#F4F7FB',
  },
  categoryTitle: {
    color: '#102033',
    fontSize: 20,
    fontWeight: '800',
  },
  categorySubtitle: {
    color: '#49637D',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 6,
  },
  gameTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  topMetaLabel: {
    color: '#84A7C9',
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  topMetaValue: {
    marginTop: 4,
    color: '#F4F7FB',
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
    backgroundColor: '#17304B',
    alignItems: 'center',
  },
  gameStatText: {
    color: '#F4F7FB',
    fontWeight: '700',
  },
  questionCard: {
    backgroundColor: '#F4F7FB',
    borderRadius: 28,
    paddingHorizontal: 24,
    paddingVertical: 30,
    alignItems: 'center',
  },
  translationLabel: {
    color: '#57708B',
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  wordText: {
    marginTop: 12,
    color: '#0E2438',
    fontSize: 42,
    fontWeight: '800',
  },
  helperText: {
    marginTop: 10,
    color: '#49637D',
    fontSize: 16,
  },
  feedbackBox: {
    marginTop: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
  },
  feedbackCorrect: {
    backgroundColor: '#DCF6E9',
  },
  feedbackWrong: {
    backgroundColor: '#FFE3EA',
  },
  feedbackText: {
    color: '#102033',
    fontWeight: '700',
  },
  answerColumn: {
    gap: 12,
    marginTop: 18,
  },
  answerButton: {
    borderRadius: 22,
    borderWidth: 2,
    backgroundColor: '#F9FBFF',
    paddingVertical: 20,
    alignItems: 'center',
  },
  answerButtonCorrect: {
    backgroundColor: '#E6FFF2',
  },
  answerButtonWrong: {
    backgroundColor: '#FFE8EE',
  },
  answerText: {
    fontSize: 24,
    fontWeight: '800',
  },
  mistakeCard: {
    borderRadius: 22,
    padding: 18,
    backgroundColor: '#F4F7FB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mistakeWord: {
    color: '#102033',
    fontSize: 20,
    fontWeight: '800',
  },
  mistakeTranslation: {
    marginTop: 4,
    color: '#55708A',
    fontSize: 15,
  },
  mistakeCountBadge: {
    borderRadius: 999,
    backgroundColor: '#16314F',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  mistakeCountText: {
    color: '#F4F7FB',
    fontWeight: '800',
  },
});
