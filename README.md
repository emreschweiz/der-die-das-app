# Der Die Das

Simple mobile learning game built with Expo and React Native to practice German noun articles: `der`, `die`, and `das`.

## Overview

This project is an early MVP focused on one core goal:

- help users build fast article recognition reflexes
- keep sessions short and game-like
- run on both iOS and Android through Expo Go

The current version includes:

- onboarding screen
- home screen
- category selection
- quick-answer game mode
- score, streak, and lives system
- results screen
- mistake review screen
- basic local statistics

## Tech Stack

- Expo SDK 54
- React Native
- TypeScript
- AsyncStorage for local persistence

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the project

```bash
npm start
```

If needed, use LAN mode with cache reset:

```bash
npm start -- --lan -c
```

### 3. Open on phone

- install `Expo Go` on your phone
- make sure your phone and computer are on the same network
- scan the QR code shown in the terminal or Expo browser page

## Current Game Flow

1. Onboarding
2. Home
3. Category selection
4. Game round
5. Results
6. Mistakes review
7. Statistics

## Gameplay Rules

- each round contains 12 words
- player starts with 3 lives
- correct answers increase score
- consecutive correct answers build streak
- wrong answers reduce lives
- mistakes are stored locally for later review

## Categories

The current MVP includes these categories:

- Mixed
- Home
- Animals
- Food
- Daily Objects

## Project Structure

At the moment the app is intentionally simple and most of the MVP lives in a single file:

- `App.tsx`: screens, game logic, local state, persistence
- `index.ts`: Expo entry point
- `app.json`: Expo app configuration

This structure is temporary and can be split into smaller modules later.

## Notes

- this is a first playable prototype
- UI and content are intentionally simple
- word data is currently hardcoded
- no backend is used yet

## Next Ideas

- improve visual design
- expand the word bank
- add sounds and animations
- introduce spaced repetition logic
- move to proper navigation and modular folder structure

