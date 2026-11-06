# HSK Mastery Hub (`HSK Hub`)

A comprehensive Mandarin Chinese proficiency platform featuring the complete HSK 1–6 vocabulary lexicon, structured *Mastering Chinese (会通汉语)* textbook lessons, an animated Mi Zi Ge (`米字格`) stroke order visualizer, speech-recognition pronunciation practice, daily study goal tracking, and interactive quizzes.

> **For Future Continuation**: See [`PROJECT_CONTINUATION.md`](./PROJECT_CONTINUATION.md) for the complete technical architecture, data schemas, curriculum inventory, and step-by-step guide for adding new textbook units or features.

---

## Key Features

- **Complete HSK 1–6 Lexicon (`Learn` & `Dictionary`)**:
  - Over 5,000 deduplicated HSK 1–6 vocabulary entries with simplified characters, tone-marked Pinyin, English meanings, contextual example sentences, and grammar tips.
  - Instant search by Hanzi, tone-marked Pinyin, tone-stripped Pinyin, or English definition in both Grid and Table views.
- **Interactive Word Detail Lab (`WordDetailModal`)**:
  - **Animated Stroke Order Visualizer**: Brush-by-brush SVG animation on a traditional Mi Zi Ge (`米字格`) calligraphy grid with multi-character support, playback speed controls (`0.5x`, `1x`, `2x`), step-by-step stroke breakdown strip, and freehand canvas tracing.
  - **Pronunciation Practice Lab**: Native `zh-CN` text-to-speech (`1.0x` normal & `0.65x` slow) paired with microphone recording, self-playback, and real-time speech-recognition pronunciation scoring.
- **Structured Textbook Curriculum (`Lessons`)**:
  - Complete interactive units from *Mastering Chinese: Elementary 1 & 2 (会通汉语 精编版·初级1 & 2)* across HSK 1 and HSK 2, including learning objectives, vocabulary tables, multi-part situational dialogues, narrative reading passages, phonetics & tone sandhi notes, grammar pattern cards, cultural readers (`文化读本`), and interactive self-check exercises.
- **Daily Study Goal & Streak Tracking (`Header` & `HomePage`)**:
  - Customizable daily word target (`1–200` words/day, presets `5, 10, 15, 20, 30, 50`) that automatically tracks unique words studied across vocabulary inspection, mastery toggles, flashcards, and quizzes.
  - Header status popovers and a dedicated Dashboard tracker with a 7-day activity chart and clickable chips for words studied today.
- **Flashcards, Recall Drills & Proficiency Quizzes (`Practice` & `Quizzes`)**:
  - Level-filtered flashcard decks, active recall multiple-choice drills, and scored HSK proficiency quizzes.
- **Study Plan & Roadmaps (`Study Plan` via Footer)**:
  - Structured weekly study schedules and milestone checklists tailored to each HSK level.

---

## Project Structure

- `/App.tsx` — Root application state, router, theme manager (`light` / `dark`), and modal orchestration
- `/data/hsk.ts` — Complete deduplicated HSK 1–6 vocabulary dataset
- `/data/lessons.ts` — Structured HSK textbook units, dialogues, grammar points, cultural readers, and exercises
- `/utils/progress.ts` — LocalStorage persistence for mastered words, bookmarks, and daily study goals
- `/utils/streak.ts` — Daily practice streak calculation and 7-day history
- `/utils/speech.ts` — Web Speech API synthesis (`zh-CN`) and speech recognition scoring
- `/components/` — Modular React UI components (`Header`, `Footer`, `HomePage`, `MainContent`, `LessonsPage`, `LessonDetailPage`, `WordDetailModal`, `StrokeOrderVisualizer`, `PracticePage`, `QuizzesPage`, `DictionaryPage`, `StudyPlanPage`, `AboutPage`)
- `/PROJECT_CONTINUATION.md` — Full technical & curriculum continuation blueprint

---

## Development & Build

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type-check with TypeScript
npm run lint

# Build for production
npm run build
```
