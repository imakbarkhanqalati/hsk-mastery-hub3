# HSK Mastery Hub (`HSK Hub`) — Complete Project & Continuation Blueprint

> **Purpose of this Document**: This file serves as the 100% authoritative engineering, curriculum, and design handoff blueprint so any future development session can immediately resume building, extending lessons, or adding features without losing context or introducing duplicates.
>
> **MANDATORY STANDING RULE**: Update `/PROJECT_CONTINUATION.md` (including the Curriculum Table, Feature Specifications, and Session Changelog) at the completion of **every user prompt** so this blueprint always reflects 100% of the live codebase.

---

## 1. Architecture & File Map

```text
/
├── App.tsx                         # Root SPA state, navigation router, theme controller, global modal manager
├── index.tsx                       # React DOM entry point
├── index.html                      # HTML shell + Google Fonts (Plus Jakarta Sans, Noto Sans SC, Noto Serif SC, JetBrains Mono)
├── index.css                       # Global design system, Dual-Theme (Light/Dark) tokens, component styles
├── types.ts                        # Core TypeScript interfaces for Vocabulary (Word, Example, GrammarTip)
├── server.ts                       # Express + Vite server (Port 3000)
├── data/
│   ├── hsk.ts                      # Complete deduplicated HSK 1–6 Vocabulary Lexicon (5,000+ words)
│   └── lessons.ts                  # Structured Textbook Curriculum (HSK 1 & HSK 2 units, dialogues, grammar, cultural readers, exercises)
├── utils/
│   ├── progress.ts                 # LocalStorage persistence for mastered words, bookmarks, daily goal target, and per-date studied words
│   ├── streak.ts                   # Daily study streak engine (currentStreak, longestStreak, 7-day history)
│   └── speech.ts                   # Web Speech API TTS (zh-CN pronunciation) + SpeechRecognition + Pinyin/Hanzi similarity scoring
└── components/
    ├── Header.tsx                  # 3-Zone Top Bar: Brand (汉 HSK Hub) | 6 Core Study Links | Unified Daily Goal + Streak Telemetry + Signed-In Profile Trigger / Auth
    ├── Footer.tsx                  # 4-Column Platform Footer: Brand & HSK 1–6 Quick Jumps | Study Workspace | Resources (Study Plan, About) | Contact
    ├── HomePage.tsx                # Dashboard: Split Hero + Word of the Day Spotlight, 4-KPI Strip, Daily Study Goal Tracker + 7-Day Bar Chart, HSK 1–6 Mastery Matrix
    ├── Badges.tsx                  # Dedicated 'profile' page: 2-Column Bento Scholar Profile & 12 Milestone Badges (accessed via top-bar Profile button when signed in)
    ├── MainContent.tsx             # Learn Page: HSK 1–6 Vocabulary Browser with level filters, search, audio playback, mastery/bookmark toggles
    ├── WordCard.tsx                # Interactive vocabulary card with Pinyin, English meaning, audio trigger, mastery & bookmark buttons
    ├── WordDetailModal.tsx         # Deep-dive modal: Animated Stroke Order Visualizer + Freehand Tracing, Microphone Pronunciation Practice, Examples & Grammar
    ├── StrokeOrderVisualizer.tsx   # SVG Mi Zi Ge (米字格) animated stroke order engine using hanzi-writer-data CDN with play/pause/step/speed/trace modes
    ├── LessonsPage.tsx             # Textbook Curriculum Hub: HSK level filter tabs, search, unit cards with objectives, dialogue/grammar/exercise counts
    ├── LessonDetailPage.tsx        # 7-Tab Interactive Lesson Reader: Vocabulary, Dialogues, Reading, Phonetics, Grammar, Cultural Insights, Interactive Exercises
    ├── PracticePage.tsx            # Flashcards & Multiple-Choice Recall Drills (auto-records studied words toward Daily Goal)
    ├── QuizzesPage.tsx             # Timed / Untimed HSK 1–6 Proficiency Quizzes (auto-records studied words toward Daily Goal)
    ├── DictionaryPage.tsx          # Searchable HSK 1–6 Lexicon (Grid & Table views, Hanzi / Pinyin / tone-stripped / English search)
    ├── StudyPlanPage.tsx           # Customizable HSK 1–6 Study Roadmaps & Weekly Milestone Planner
    ├── AboutPage.tsx               # Platform methodology, HSK 1–6 overview, and creator information
    └── AuthModal.tsx               # Sign In / Sign Up modal dialog
```

---

## 2. Vocabulary Database (`/data/hsk.ts`)

- **Source**: Official HSK 1–6 PDF vocabulary lists uploaded in `/public/assets/aistudio/HSK-1-Vocabulary_*.pdf` through `HSK-6-Vocabulary_*.pdf`.
- **Zero-Duplication Guarantee**:
  - Every entry in `hskWords: Word[]` is strictly deduplicated across HSK 1 through HSK 6 (assigned to its lowest/first-introduced HSK level).
  - Each `Word` object follows the schema in `/types.ts`:
    ```ts
    export interface Word {
      char: string;       // Simplified Chinese characters
      pinyin: string;     // Tone-marked Pinyin
      en: string;         // English definition
      hsk: number;        // HSK Level (1 to 6)
      examples?: Example[];
      grammar?: GrammarTip;
      category?: string;
    }
    ```

---

## 3. Textbook Curriculum (`/data/lessons.ts`)

### Current Curriculum Status
All lessons are authored in `/data/lessons.ts` from the uploaded *Mastering Chinese: Elementary 1 & 2 (会通汉语 精编版·初级1 & 初级2)* PDFs in `/public/assets/aistudio/`.

| Lesson ID | Unit Number | HSK Level | Chinese Title | English Title | Sub-Parts Covered |
| :--- | :---: | :---: | :--- | :--- | :--- |
| `lesson1` | Unit 1 | **HSK 1** | 第1课：他叫什么名字 | What Is His Name? (Greetings, Introductions & Nationality) | (一), (二), (三), (四) + 文化读本1 |
| `lesson2` | Unit 2 | **HSK 1** | 第2课：我和我的家人 | My Family and I (Family, Ages, Occupations & Pets) | (一), (二), (三), (四) + 文化读本1 |
| `lesson3` | Unit 3 | **HSK 1** | 第3课：你每天几点睡觉 | What Time Do You Sleep Every Day? (Time, Dates & Daily Routines) | (一), (二), (三), (四) + 文化读本1 |
| `lesson4` | Unit 4 | **HSK 1** | 文化读本1：走近中国与汉字 | Cultural Reader 1: Approaching China, Pinyin & Chinese Characters | 文化读本1 (Comprehensive Synthesis) |
| `lesson5` | Unit 5 | **HSK 2** | 第4课：一共多少钱 | How Much Is It Altogether? (Shopping, Bargaining & Mobile Payment) | (一), (二), (三), (四) + 文化读本2 |
| `lesson6` | Unit 6 | **HSK 2** | 第5课：你去那儿干什么 | What Are You Going There to Do? (Directions, Campus Places & Errands) | (一), (二), (三), (四) + 文化读本2 |
| `lesson7` | Unit 7 | **HSK 2** | 第6课：再点一个素的吧 | Let's Order One More Vegetarian Dish (Dining Out, Ordering & Dietary Preferences) | (一), (二), (三), (四) + 文化读本2 |
| `lesson8` | Unit 8 | **HSK 2** | 文化读本2：中国人的日常饮食与消费文化 | Cultural Reader 2: Chinese Culinary Traditions, Tea Culture & Digital Life | 文化读本2 (Comprehensive Synthesis) |

### How to Add Future Textbook Lessons (e.g., Elementary 3 / HSK 2–6 Units)
When the user uploads the next batch of PDFs (such as Lesson 7, Lesson 8, Lesson 9, Cultural Reader 3, or HSK 3–6 textbook chapters):
1. **Inspect the uploaded PDFs** in `/public/assets/aistudio/` using `view_file` or a quick `pdftotext` / Python extraction script.
2. **Consolidate sub-parts (`(一)`, `(二)`, `(三)`, `(四)`) into a single cohesive `Lesson` object** in `/data/lessons.ts` rather than creating fragmented stub cards.
3. **Populate all 7 sections of the `Lesson` interface** in `/data/lessons.ts`:
   - `objectives: string[]` (4 clear communicative learning goals)
   - `vocabulary: Word[]` (all new words from parts 1–4 with accurate `char`, `pinyin`, `en`, `hsk`, `examples`, and `grammar`, zero duplicates within the unit)
   - `dialogues: DialogueSection[]` (4 contextualized dialogues matching parts 一, 二, 三, 四 with `context`, speaker turns, `pinyin`, and `english`)
   - `reading: ReadingPassage` (integrated narrative passage synthesizing the unit's themes)
   - `phonetics: PhoneticNote[]` (tone sandhi, neutral tones, initials/finals, or prosody drills from the textbook)
   - `grammar: GrammarPoint[]` (4–5 detailed grammar structures with `structure`, `explanation`, `tip`, and `examples`)
   - `culturalNotes: CulturalNote[]` (cultural essays and insights from the textbook & Cultural Reader)
   - `exercises: LessonExercise[]` (6–8 interactive multiple-choice comprehension & grammar questions with `explanation`)
4. **Check `LessonsPage.tsx`**: Level filter tabs automatically detect any new `hskLevel` values added to `lessonsData`.

---

## 4. Core Interactive Features & Persistence

1. **Daily Study Goal & Progress Engine (`/utils/progress.ts`)**:
   - LocalStorage key: `'hsk_hub_vocab_progress_v1'`
   - Schema:
     ```ts
     export interface UserVocabProgress {
       masteredChars: string[];
       bookmarkedChars: string[];
       lastStudiedChar?: string;
       dailyGoalTarget: number;                    // Default: 10 (Range: 1–200)
       dailyStudiedByDate: Record<string, string[]>; // Maps 'YYYY-MM-DD' -> unique Hanzi studied that day
     }
     ```
   - `recordWordStudied(char)` is automatically invoked when a user:
     - Opens a word in `WordDetailModal` (`App.tsx`)
     - Marks a word as mastered (`toggleMasteredWord` / `markWordMastered`)
     - Answers a flashcard or recall drill in `PracticePage.tsx`
     - Answers a quiz question in `QuizzesPage.tsx`
   - Dispatches `window.dispatchEvent(new CustomEvent('vocab-progress-updated', { detail: data }))` for instant UI reactivity across `Header.tsx` and `HomePage.tsx`.

2. **Daily Streak Engine (`/utils/streak.ts`)**:
   - LocalStorage key: `'hsk_hub_daily_streak_v1'`
   - Tracks `currentStreak`, `longestStreak`, `lastPracticeDate`, and `practiceHistory: string[]`.

3. **Animated Stroke Order Visualizer (`/components/StrokeOrderVisualizer.tsx`)**:
   - Fetches official stroke medians & SVG paths from `https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0.1/${encodeURIComponent(char)}.json`.
   - Supports multi-character words (character selector tabs), Play/Pause, Step Backward/Forward, Speed (`0.5x`, `1x`, `2x`), Outline/Numbers toggles, Interactive Freehand Brush Tracing (`<canvas>`), and a clickable Stroke-by-Stroke Sequence Strip.

4. **Speech Recognition Pronunciation Lab (`/components/WordDetailModal.tsx` & `/utils/speech.ts`)**:
   - Uses browser `SpeechRecognition` / `webkitSpeechRecognition` (`lang = 'zh-CN'`) + `MediaRecorder` audio playback so learners can listen to native TTS (`1.0x` and `0.65x` slow speed), record their own voice, replay their recording, and get an instant accuracy score (`0–100%`) comparing their spoken Hanzi/Pinyin against the target word.

5. **Asymmetric 2-Column Bento Scholar Profile & Learning Milestone Badges (`/components/Badges.tsx`, Route: `currentPage === 'profile'`)**:
   - **Access Flow**: Shown exclusively on the dedicated `'profile'` page when the user is signed in (`isAuthenticated === true`, persisted in `localStorage` under `'hsk_hub_auth_user_v1'`) and clicks their **Profile button (`[学] Name`)** in the top header (`Header.tsx`)—not rendered on `HomePage.tsx`.
   - **Breadcrumb Header**: Contextual `Scholars › [Scholar Name]` bar with `← Back to Dashboard`, `Customize Profile`, and `Sign Out` controls.
   - **Left Column (Tall Identity Card)**:
     - Gradient mesh cover banner with vector geometry, `✓ Active Scholar` badge, and overlapping square Hanzi seal avatar.
     - Editable Scholar Name, Chinese Seal (`汉字`), Rank Badge (`初学门生` to `翰林学士`), Core Mandarin Competency tags, Study Mode tags, Target Focus & Local Timezone boxes, and clickable **Active Curriculum Tracks** (`HSK 1`, `HSK 2`, `HSK 1–6 Complete Lexicon`, plus expandable HSK 3–6 tracks).
   - **Right Column (3-Row Bento Analytics & Milestone Grid)**:
     - **Row 1**: 3 top percentage KPI cards (`Daily Goal %`, `Retention & Quiz Mastery %`, `Milestones Unlocked %`).
     - **Row 2**: **Semi-Circular SVG Arc Gauge (`Proficiency Index`)** with glowing indigo-blue gradient stroke + **Overall Summary** card with 3 icon-annotated highlight rows.
     - **Row 3**: **3-Column Glowing Stat Filter Cards** (`All Milestones`, `Unlocked`, `In Progress`) with bottom progress bars that filter the 12 interactive learning milestone badges.

---

## 5. Navigation & Layout Contract

- **Header (`Header.tsx`)**:
  - Follows a strict 3-zone layout with `gap: 2rem` so elements never crowd or collide:
    - **Left**: Brand mark (`汉 HSK Hub`)
    - **Center**: 6 concise single-word primary study links (`Home`, `Learn`, `Lessons`, `Practice`, `Quizzes`, `Dictionary`)
    - **Right**: Unified Telemetry Group (`🎯 Studied/Goal` + `🔥 Streak` popovers) + Auth / Signed-In Top-Bar Profile Button (`[学] Name` -> opens `'profile'` page) + Theme Toggle (`Light` / `Dark`)
- **Footer (`Footer.tsx`)**:
  - Houses the 4-column platform sitemap including secondary and planning pages (`Study Plan & Roadmaps`, `About HSK Hub`, `Daily Target Settings`), `HSK 1–6` quick-jump level chips, and creator contact links (`akq.qalati@gmail.com`, LinkedIn, GitHub).

---

## 6. Build & Verification Commands

Before finishing any future turn, always:
1. Update `/PROJECT_CONTINUATION.md` with all changes made during the turn.
2. Run both compilation and TypeScript linting together:
   - `compile_applet` (`npm run build`)
   - `lint_applet` (`tsc --noEmit`)

---

## 7. Session Changelog

- **Phase 1 — Core Redesign & Audio/Stroke Labs**:
  - Removed legacy ad-space placeholders and redesigned the interface with dual-theme (`light` / `dark`) support.
  - Added microphone speech-recognition pronunciation practice (`WordDetailModal.tsx`, `utils/speech.ts`) and animated SVG Mi Zi Ge (`米字格`) stroke order visualization (`StrokeOrderVisualizer.tsx`).
- **Phase 2 — Complete Deduplicated HSK 1–6 Lexicon**:
  - Parsed and deduplicated all official HSK 1–6 PDF vocabulary lists into `/data/hsk.ts`.
- **Phase 3 — Textbook Curriculum (*Mastering Chinese: Elementary 1 & 2 / 会通汉语 精编版·初级1 & 2*)**:
  - Authored `lesson1`–`lesson4` (HSK 1: Lessons 1–3 + Cultural Reader 1) and `lesson5`–`lesson8` (HSK 2: Lessons 4–6 + Cultural Reader 2) in `/data/lessons.ts` with 7 interactive sections per unit.
- **Phase 4 — Daily Study Goal & Header/Footer Architecture**:
  - Added customizable Daily Study Goal tracking (`1–200` words/day) in `/utils/progress.ts`, `Header.tsx`, and `HomePage.tsx`.
  - Streamlined `Header.tsx` into a 3-zone top bar with a unified Goal + Streak telemetry group, and upgraded `Footer.tsx` into a 4-column navigation and resource hub (`Study Plan`, `About`, `HSK 1–6 Quick Jumps`, and contact links).
  - Established `/PROJECT_CONTINUATION.md` with the standing rule to update this file upon every prompt completion.
- **Phase 5 — Scholar Profile & Milestone Badges (`Badges.tsx`)**:
  - Created `/components/Badges.tsx` with 12 milestone badges, dynamic Scholar Rank tiers, progress bars, filter tabs, and interactive quick-jump actions.
- **Phase 6 — Asymmetric 2-Column Bento Scholar Profile & Analytics Redesign**:
  - Redesigned `/components/Badges.tsx` and `/index.css` into a 2-column Bento Scholar Profile layout featuring a breadcrumb header, customizable scholar identity card with gradient mesh banner and overlapping Hanzi seal avatar, Active Curriculum Tracks list, 3 top percentage KPI cards, a glowing SVG Semi-Circular Proficiency Index arc gauge, an Overall Summary card, and 3-column glowing stat filter cards with bottom progress bars.
- **Phase 7 — Top-Bar Signed-In Profile Trigger & Dedicated Profile Route**:
  - Removed `<Badges />` from `HomePage.tsx` and wired it to a dedicated `'profile'` route in `App.tsx`.
  - Added persistent authentication state (`'hsk_hub_auth_user_v1'`) and a top-bar Profile button (`header__profile-trigger`) in `Header.tsx` that appears when the user signs in and opens the Bento Scholar Profile page when clicked.




