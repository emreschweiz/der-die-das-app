import type { AppStats } from './types';

export const createEmptyStats = (): AppStats => ({
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

export function getPerformanceColor(ratio: number) {
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
