# HSK Mastery Hub (`HSK Hub`) — Complete Project & Continuation Blueprint

> **Purpose of this Document**: This file serves as the 100% authoritative engineering, curriculum, and design handoff blueprint so any future development session can immediately resume building, extending lessons, or adding features without losing context or introducing duplicates.
>
> **MANDATORY STANDING RULE**: Update `/PROJECT_CONTINUATION.md` (including the Curriculum Table, Feature Specifications, and Session Changelog) at the completion of **every user prompt** so this blueprint always reflects 100% of the live codebase.

---

## 1. Architecture & File Map

```text
/
├── App.tsx                         # Root SPA state, navigation router, theme controller, global modal, reminder scheduler & offline cache manager
├── index.tsx                       # React DOM entry point
├── index.html                      # HTML shell + PWA/iOS meta tags + Google Fonts (Plus Jakarta Sans, Noto Sans SC, Noto Serif SC, JetBrains Mono)
├── index.css                       # Global design system, Dual-Theme (Light/Dark) tokens, component styles
├── vite.config.ts                  # Vite bundler + VitePWA (Workbox precaching + Google Fonts & Hanzi stroke order runtime caching)
├── types.ts                        # Core TypeScript interfaces for Vocabulary (Word, Example, GrammarTip)
├── server.ts                       # Express + Vite server (Port 3000)
├── public/
│   ├── manifest.json               # Web App Manifest (standalone display, 192x192, 512x512, maskable icons)
│   ├── sw-offline.js               # Service Worker script for offline app-shell, core HSK vocabulary, lessons, and stroke order caching
│   ├── icon.svg                    # Vector brand emblem (汉 HSK HUB)
│   ├── pwa-192x192.png             # Standard 192x192 PWA icon
│   ├── pwa-512x512.png             # Standard 512x512 PWA icon
│   ├── pwa-maskable-512x512.png    # Maskable 512x512 PWA icon with safe-zone margin
│   └── apple-touch-icon.png        # 180x180 PNG icon for iOS Safari Home Screen
├── data/
│   ├── vocab.ts / hsk.ts           # Complete deduplicated HSK 1–6 Vocabulary Lexicon (5,000+ words)
│   └── lessons.ts                  # Structured Textbook Curriculum (HSK 1 & HSK 2 units, dialogues, grammar, cultural readers, exercises)
├── utils/
│   ├── progress.ts                 # LocalStorage persistence for mastered words, bookmarks, daily goal target, and per-date studied words
│   ├── streak.ts                   # Daily study streak engine (currentStreak, longestStreak, 7-day history)
│   ├── reminders.ts                # Daily study reminder preferences in localStorage + Web Notification API & time evaluation helpers
│   ├── offlineCache.ts             # Service Worker registration, Cache Storage sync for HSK 1–6 vocab/lessons, stroke pre-cacher & online status hook
│   ├── usePWAInstall.ts            # React hook for beforeinstallprompt, standalone mode detection, and iOS install flow
│   ├── lessonCharacters.ts         # Canonical Mastering Chinese (会通汉语 精编版) textbook character directory, portraits, and dialogue speaker resolver
│   └── speech.ts                   # Web Speech API TTS (zh-CN pronunciation) + SpeechRecognition + Pinyin/Hanzi similarity scoring
└── components/
    ├── Header.tsx                  # 3-Zone Top Bar: Brand (汉 HSK Hub) | 6 Core Study Links | Unified Goal + Streak + Reminder + Offline Status + PWA Install + Profile/Auth
    ├── Footer.tsx                  # 4-Column Platform Footer: Brand & HSK 1–6 Quick Jumps | Study Workspace | Resources (Study Plan, About) | Contact
    ├── StudyReminderToast.tsx      # Global on-screen toast notification when user hasn't practiced by their preferred reminder time
    ├── OfflineStatusBanner.tsx     # Floating offline mode banner + interactive Service Worker & Cache Storage management modal
    ├── PWAInstallButton.tsx        # In-app PWA install trigger button (Desktop/Android native prompt + iOS Safari instruction modal)
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

## 2. Vocabulary Database (`/data/hsk.ts` & `/data/vocab.ts`)

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
All 16 lessons are authored in `/data/lessons.ts` from the uploaded *Mastering Chinese: Elementary 1, 2, 3 & 4 (会通汉语 精编版·初级1, 初级2, 初级3 & 初级4)* PDFs in `/public/assets/aistudio/` with zero duplication across sub-parts.

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
| `lesson9` | Unit 9 | **HSK 3** | 第7课：你怎么去的 | Lesson 7: How Did You Go There? (Past Experiences `V+过`, Transport, Duration & `(是…)的`) | 第7课 (一), (二), (三), (四) |
| `lesson10` | Unit 10 | **HSK 3** | 第8课：今天比昨天冷多了 | Lesson 8: Today Is Much Colder Than Yesterday (Weather, Seasons, Comparisons `比/更/一样` & `正…呢/着`) | 第8课 (一), (二), (三), (四) |
| `lesson11` | Unit 11 | **HSK 3** | 第9课：地铁站在哪儿 | Lesson 9: Where Is the Subway Station? (Location Words, Distance `离/从…到…`, Route Directions & `过来/过去`) | 第9课 (一), (二), (三), (四) |
| `lesson12` | Unit 12 | **HSK 3** | 文化读本3：中国的二十四节气 | Cultural Reader 3: China's Twenty-Four Solar Terms (Fifth Great Invention, Farming Wisdom & Seasonal Customs) | 文化读本3 (Comprehensive Synthesis) |
| `lesson13` | Unit 13 | **HSK 4** | 第10课：我想把这个寄回家 | Lesson 10: I Want to Mail This Home (Currency Exchange, Bank Cards, Takeout, Mobile Courier & `把 + N + V + 到/在/回`) | 第10课 (一), (二), (三), (四) |
| `lesson14` | Unit 14 | **HSK 4** | 第11课：头越来越疼了 | Lesson 11: My Head Is Hurting More and More (Hospital Clinic, Appendicitis Surgery, `开始…后来… / 越来越` & Health Advice) | 第11课 (一), (二), (三), (四) |
| `lesson15` | Unit 15 | **HSK 4** | 第12课：我想去旅游 | Lesson 12: I Want to Go Traveling (Harbin vs. Yunnan/Hainan, `自由行`, Sleeper Tickets, Hotel Rooms & `Adj + 极了`) | 第12课 (一), (二), (三), (四) |
| `lesson16` | Unit 16 | **HSK 4** | 文化读本4：去哪儿旅行好 | Cultural Reader 4: Where Is a Good Place to Travel? (`名山大川`, `历史古迹` + Local Snacks & `农家乐`) | 文化读本4 (Comprehensive Synthesis) |

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
4. **Enforce Authentic Textbook Character Profiles (`/utils/lessonCharacters.ts`)**:
   - **Strict Zero-Randomness Rule**: Always use the **exact character names** that appear in the uploaded textbook PDF for each lesson (e.g., `马克`, `金志英`, `莉莉`, `阿里`, `平田`, `杰希`, `朱迪`, `李老师 / 李悦`, `何大华`, `王老师`, `医生`, `营业员`, `服务员`, `售货员`, `小贩`, `行人`, `司机`). Never invent random names.
   - If a new textbook unit introduces a new supporting speaker not yet in `TEXTBOOK_CHARACTER_DIRECTORY` inside `/utils/lessonCharacters.ts`, register their exact Chinese name, Pinyin, English name, textbook role, and portrait/avatar in `/utils/lessonCharacters.ts`.
   - `getLessonCharacters(lesson)` and `resolveSpeakerGroup(speaker)` automatically render the **"Characters in This Lesson · 本课出场人物"** cards, dialogue speaker avatars in `LessonDetailPage.tsx`, and unit card character cast stacks in `LessonsPage.tsx` for every new lesson.
5. **Check `LessonsPage.tsx`**: Level filter tabs automatically detect any new `hskLevel` values added to `lessonsData`.

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
   - LocalStorage key: `'hsk-daily-streak'`
   - Tracks `currentStreak`, `longestStreak`, `lastPracticeDate`, and `practiceHistory: string[]`.

3. **Daily Study Reminder & Notification Engine (`/utils/reminders.ts` & `/components/StudyReminderToast.tsx`)**:
   - LocalStorage key: `'hsk_hub_study_reminder_v1'`
   - Schema:
     ```ts
     export interface StudyReminderSettings {
       enabled: boolean;
       reminderTime: string;           // "HH:mm" in 24h format, default "19:00"
       lastNotifiedDate: string | null; // "YYYY-MM-DD"
       snoozedUntil: number | null;     // epoch ms
     }
     ```
   - **Header Bell Widget & Popover (`Header.tsx`)**: Allows users to toggle daily reminders ON/OFF, choose a custom time (`<input type="time" />`) or quick preset (`Morning 08:30`, `Midday 13:00`, `Evening 19:00`, `Night 21:30`), request browser notification permissions, and test the notification immediately (`Test Notification Now`).
   - **Background Scheduler (`App.tsx`)**: Evaluates every 15 seconds whether `enabled === true`, the user has not yet practiced today, and the current local time has reached `reminderTime`. When triggered, it dispatches a native **Browser Notification** (when granted) and opens the **On-Screen Toast (`StudyReminderToast.tsx`)** with `Practice Now →`, `Browse Words`, `Snooze 15m`, and `Dismiss` actions.

4. **Offline Service Worker, PWA Compliance & Local Vocabulary Cache (`vite.config.ts`, `/public/sw-offline.js`, `/utils/offlineCache.ts`, `/components/OfflineStatusBanner.tsx`, `/components/PWAInstallButton.tsx`)**:
   - **Workbox + Fallback Service Worker**: Configured via `vite-plugin-pwa` in `vite.config.ts` (`maximumFileSizeToCacheInBytes: 6MB`) plus `/public/sw-offline.js` to precache all JS/CSS/HTML chunks (including `vocab-data-chunk`) and runtime-cache Google Fonts (`google-fonts-cache`, `gstatic-fonts-cache`) and Hanzi stroke order JSON (`hanzi-stroke-data-cache`).
   - **Direct Cache Storage Synchronization (`utils/offlineCache.ts`)**: On application startup, `syncCoreVocabAndAssetsToCache()` writes the entire HSK 1–6 vocabulary dataset (`/offline-cache/hsk-vocabulary.json`) and textbook lessons (`/offline-cache/hsk-lessons.json`) into the browser's Cache Storage (`'hsk-hub-core-vocab-v1'`) and supports one-click pre-caching of essential Hanzi stroke order animations (`precacheEssentialHanziStrokes`).
   - **Offline Connectivity Indicator & Cache Modal (`OfflineStatusBanner.tsx`)**: Automatically displays a floating offline status banner when `!navigator.onLine`, and provides a detailed modal (accessible via the cloud-check button in `Header.tsx`) showing cached word counts, lesson units, cached Hanzi stroke diagrams, and Service Worker status.
   - **In-App PWA Install Prompt (`PWAInstallButton.tsx` & `usePWAInstall.ts`)**: Mounted in `Header.tsx` to trigger native installation on Chromium/Desktop/Android and display an installation guide on iOS Safari.

5. **Animated Stroke Order Visualizer (`/components/StrokeOrderVisualizer.tsx`)**:
   - Fetches official stroke medians & SVG paths from `https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0.1/${encodeURIComponent(char)}.json` (cached automatically by the Service Worker in `'hanzi-stroke-data-cache'` for offline reuse).
   - Supports multi-character words (character selector tabs), Play/Pause, Step Backward/Forward, Speed (`0.5x`, `1x`, `2x`), Outline/Numbers toggles, Interactive Freehand Brush Tracing (`<canvas>`), and a clickable Stroke-by-Stroke Sequence Strip.

6. **Speech Recognition Pronunciation Lab (`/components/WordDetailModal.tsx` & `/utils/speech.ts`)**:
   - Uses browser `SpeechRecognition` / `webkitSpeechRecognition` (`lang = 'zh-CN'`) + `MediaRecorder` audio playback so learners can listen to native TTS (`1.0x` and `0.65x` slow speed), record their own voice, replay their recording, and get an instant accuracy score (`0–100%`) comparing their spoken Hanzi/Pinyin against the target word.

7. **Asymmetric 2-Column Bento Scholar Profile & Learning Milestone Badges (`/components/Badges.tsx`, Route: `currentPage === 'profile'`)**:
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
    - **Right**: Unified Telemetry Group (`🎯 Studied/Goal` + `🔥 Streak` + `🔔 Study Reminder` + `☁️✓ Offline Cache` popovers/modals) + `<PWAInstallButton />` + Auth / Signed-In Top-Bar Profile Button (`[学] Name` -> opens `'profile'` page) + Theme Toggle (`Light` / `Dark`)
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
- **Phase 8 — Daily Study Reminder & Notification Engine**:
  - Created `/utils/reminders.ts` and `/components/StudyReminderToast.tsx`.
  - Added a Daily Study Reminder bell widget & popover in `Header.tsx` allowing users to toggle reminders on/off, select their preferred time (`HH:mm` or Morning/Midday/Evening/Night presets) persisted in `localStorage` (`'hsk_hub_study_reminder_v1'`), grant optional Browser Notification permission, and trigger a live test notification.
  - Added a background scheduler in `App.tsx` that triggers both a Browser Notification (when permitted) and an on-screen toast message (`StudyReminderToast.tsx`) if the user hasn't practiced by their target reminder time.
- **Phase 9 — Offline Service Worker, Local HSK Vocabulary Caching & PWA Compliance**:
  - Integrated `vite-plugin-pwa` in `vite.config.ts` and created `/public/sw-offline.js` to precache application bundles and runtime-cache Google Fonts and Hanzi stroke order JSON files (`hanzi-stroke-data-cache`).
  - Created `/utils/offlineCache.ts` to register the Service Worker, store the complete HSK 1–6 vocabulary dataset and textbook lessons in browser Cache Storage (`'hsk-hub-core-vocab-v1'`), and support pre-caching essential Hanzi stroke order diagrams.
  - Created `/components/OfflineStatusBanner.tsx`, `/components/PWAInstallButton.tsx`, and `/utils/usePWAInstall.ts`, and generated compliant PWA icons (`icon.svg`, `pwa-192x192.png`, `pwa-512x512.png`, `pwa-maskable-512x512.png`, `apple-touch-icon.png`).
- **Phase 10 — Comprehensive Visual Audit, Anti-Crowding Refinements & Editorial About Page**:
  - **Header (`Header.tsx`)**: De-crowded the right-hand telemetry bar by turning the Study Reminder bell into a compact icon + active indicator dot (`reminder-badge__dot`), integrating the Offline Cache status & modal trigger cleanly inside the Reminder popover (`reminder-popover__offline-strip`) when online, and keeping Sign Out exclusively inside the Scholar Profile view.
  - **Home Dashboard (`HomePage.tsx`)**: Eliminated duplicate Daily Study Goal cards by refining the Hero telemetry bar into a balanced 3-column strip (`Words Mastered`, `Saved Bookmarks`, `Active Study Streak`) paired with the interactive `Daily Study Goal` & `7-Day Activity` section below, and streamlined Hero CTAs to 2 primary actions.
  - **Lessons Hub (`LessonsPage.tsx`)**: Reduced card text density by capping preview objectives at 2 concise items and simplifying unit footer metadata (`Words · Dialogues · Notes & Drills`).
  - **About Page (`AboutPage.tsx`)**: Upgraded the legacy plain-text layout into an editorial 3-pillar layout (`about-mission-card`, `about-pillars-grid`, `about-contact-card`) consistent with the rest of `HSK Hub`.
- **Phase 11 — All-Device Responsive Engineering (`320px` Mobile to `1536px+` Desktop) & Base Path Compatibility**:
  - **Global Box-Sizing & Overflow Guard (`index.css`)**: Added universal `box-sizing: border-box` and `overflow-x: hidden` guards so `.container` and multi-column grids never trigger horizontal page scrollbars on mobile devices.
  - **Viewport-Clamped Mobile Popovers & Modals**: Anchored `.goal-popover`, `.streak-popover`, and `.reminder-popover` with fixed viewport clamping on `< 640px` screens so header popovers never clip off-screen on narrow phones; scaled `WordDetailModal`, `StrokeOrderVisualizer` (`mizige-stage`), and `OfflineStatusBanner` for mobile viewports.
  - **Responsive Grids & Touch-Scroll Navigation**: Updated `.lessons-grid`, `.plan-grid`, `.badges-grid`, `.vocab-grid`, and `.dictionary-grid` to use `minmax(min(100%, ...), 1fr)` tracks; added smooth horizontal touch scrolling to the 7-tab `LessonDetailPage` bar; stacked `DictionaryPage` filter controls on mobile/tablet; and converted mobile `QuizzesPage` level tabs into a compact 3x2 grid.
  - **Base Path Support (`utils/offlineCache.ts`)**: Updated Service Worker registration and Cache Storage URLs to resolve dynamically against `import.meta.env.BASE_URL` (supporting both `/` and `/hsk-mastery-hub3/`).
- **Phase 12 — Categorized Hover / Mouseover Dropdown Navigation (`Header.tsx` & `index.css`)**:
  - **Categorized Top Navigation**: Grouped all platform destinations into a direct `Home` link plus 3 hover/mouseover category dropdowns with a 150ms hover-intent grace delay and an invisible CSS cursor bridge:
    1. **Curriculum ▾**: *HSK 1–6 Vocabulary Lexicon* (`词`), *Structured Textbook Units* (`课`), interactive `HSK 1 (A1)`–`HSK 6 (C2)` quick-jump chips, and unit shortcuts.
    2. **Practice & Lab ▾**: *Flashcards & Recall Studio* (`练`), *HSK Proficiency Quizzes* (`测`), and *Daily Target & 7-Day Activity* (`标`).
    3. **Resources ▾**: *HSK 1–6 Searchable Dictionary* (`典`), *Custom Study Roadmaps* (`划`), *Offline Review Cache* (`云`), and *About HSK Hub & Methodology* (`介`).
  - **Mobile Category Accordions**: Mirrored the 3 categories in the mobile navigation drawer with expandable accordions and HSK 1–6 level chips.
- **Phase 13 — Minimalist Card Design System (Anti-Crowding Card Architecture)**:
  - **HSK 1–6 Level Matrix Cards (`HomePage.tsx` & `index.css`)**: Eliminated multi-line header wrapping and title-row collisions by removing the inline 5-word sample list and redundant word counts. Each level card now presents a single-line header (`CEFR · Band` + `%` pill), a non-wrapping `HSK Level X` title, a 2-line clamped description, a slim 4px progress bar, and a clean `{mastered} / {total} words` + `Study Level X →` footer.
  - **Minimalist Vocabulary Cards (`VocabCard.tsx` & `index.css`)**: Removed noisy `#01/600` index counters and the redundant bottom divider bar (`Inspect & Practice Tones →`), leaving a clean 3-element lexical card (`HSK X · Part of Speech` header, large Hanzi, Pinyin, and 2-line clamped English meaning).
  - **Minimalist Textbook Lesson Cards (`LessonsPage.tsx` & `index.css`)**: Removed preview bullet lists from unit cards (`LessonCard`) so each card cleanly displays `HSK X · Unit XX`, Chinese title, English title, a 2-line clamped summary, and `{Words} · {Dialogues}` + `Study Unit →`.
  - **Minimalist Feature, Spotlight, Daily Goal & Milestone Badge Cards (`HomePage.tsx`, `Badges.tsx`, `index.css`)**: Streamlined card density across Hero Spotlight, Daily Study Goal, Four-Stage Workflow cards, and Scholar Profile Milestone Badge cards with generous padding (`1.35rem–1.75rem`) and zero duplicate percentages.
- **Phase 14 — Global Keyboard Shortcuts & Accessibility for Flashcard Interface (`PracticePage.tsx` & `index.css`)**:
  - **Global Keydown Listener (`PracticePage.tsx`)**: Added an input-safe global `keydown` handler supporting `Space` / `Enter` / `ArrowUp` / `ArrowDown` to flip cards, `ArrowLeft` / `ArrowRight` to navigate to the previous/next card (`goToPreviousCard` / `goToNextCard`), `1` / `X` to mark *Needs Review*, `2` / `K` to mark *I Knew It*, `H` to toggle Pinyin hints, `A` / `S` to play native TTS pronunciation, and `1`–`4` for Multiple-Choice answers.
  - **Accessible Controls & Visual `<kbd>` Feedback Bar**: Added an `aria-live="polite"` screen-reader announcer, keyboard-focusable flashcard wrapper, Previous (`← Previous`) / Next (`Next →`) / Listen (`🔊 Listen`) buttons, and a live `<kbd>` shortcut bar (`flashcard-shortcuts-bar`) that briefly highlights each pressed shortcut key.
- **Phase 15 — Google OAuth Authentication & Cloud SQL PostgreSQL User Persistence (`src/lib/firebase.ts`, `src/lib/firebase-admin.ts`, `src/middleware/auth.ts`, `src/db/*`, `server.ts`, `AuthModal.tsx`, `App.tsx`)**:
  - **Provisioned Cloud SQL (`asia-south1`) & Firebase Auth (Google OAuth)**: Provisioned Cloud SQL PostgreSQL instance (`ai-studio-a886606c`) and Google Sign-In OAuth (`firebase-applet-config.json`).
  - **Drizzle ORM Schema & Lazy Object-Method Pool (`src/db/schema.ts`, `src/db/index.ts`, `src/db/drizzle.config.ts`, `src/db/users.ts`)**: Created and verified the `users` table in PostgreSQL storing `uid`, `email`, `display_name`, `photo_url`, `daily_goal_target`, `current_streak`, `longest_streak`, `last_practice_date`, `mastered_chars_json`, `bookmarked_chars_json`, `daily_studied_json`, and `practice_history_json` with upsert (`onConflictDoUpdate`) and two-layer error sanitization.
  - **Client & Backend Auth Flow (`AuthModal.tsx`, `App.tsx`, `server.ts`)**: Wired `signInWithPopup(auth, googleAuthProvider)`, in-memory ID token storage (`authTokenRef`), `GET /api/me` and `POST /api/me/sync` protected by `requireAuth` (`firebase-admin` token verification), and automatic two-way merging of cloud and local HSK study progress (`mergeCloudVocabProgress`, `mergeCloudStreakData`).
- **Phase 16 — Multi-Provider Authentication UI (`Google`, `Facebook`, & `Email/Password` in `AuthModal.tsx`, `src/lib/firebase.ts`, `index.css`)**:
  - **All 3 Enabled Firebase Providers**: Added `FacebookAuthProvider` (`signInWithPopup(auth, facebookAuthProvider)`), `GoogleAuthProvider` (`signInWithPopup(auth, googleAuthProvider)`), and Email/Password authentication (`signInWithEmailAndPassword`, `createUserWithEmailAndPassword`, `updateProfile`, `sendPasswordResetEmail`).
  - **Redesigned Sign In & Sign Up Modal (`AuthModal.tsx` & `index.css`)**: Added segmented `Sign In` / `Create Account` mode tabs, a 2-column Google & Facebook OAuth button grid, an `or continue with email` divider, Email/Password inputs with a Show/Hide password toggle, `Forgot password?` email reset flow, and human-friendly Firebase error messages.
- **Phase 17 — *Mastering Chinese: Elementary 3 (会通汉语 精编版·初级3)* HSK 3 Curriculum (`lesson9`–`lesson12` in `/data/lessons.ts` & `Header.tsx`)**:
  - **Zero-Duplication Synthesis of All 13 Uploaded Elementary 3 PDFs**: Authored 4 comprehensive **HSK 3 (`hskLevel: 3`)** units consolidating sub-parts `(一)`, `(二)`, `(三)`, and `(四)` plus *Cultural Reader 3*:
    - **`lesson9` (Unit 9 — 第7课：你怎么去的 / *Lesson 7: How Did You Go There?*)**: Pictophonetic characters (`形声字`: 饭, 问, 期, 汽, 什, 们, 漂, 作) and radicals (`饣`, `讠`, `木`, `扌`), dialogues on character dictation before an exam and buying a qipao / traveling to Beijing, reading passage on Jin Zhiying's bicycle commute & weekend trips, 32 deduplicated vocabulary items, 5 grammar notes (`V+过`, `[short/early time]+就+V`, `V+过/了+[时段]`, `(是…)的`, `不是…吗？`), and 4 comprehension exercises.
    - **`lesson10` (Unit 10 — 第8课：今天比昨天冷多了 / *Lesson 8: Today Is Much Colder Than Yesterday*)**: Look-alike character pairs (`了/子`, `少/小`, `几/儿`, `千/干`, `白/百`, `老/考`) and weather/temperature radicals (`日`, `冫`, `火`, `灬`), dialogues on windy autumn weather in Tokyo and Saudi summers vs. Ottawa winters (`零下三十五六度`), Hirata's global weather reading essay, 21 deduplicated vocabulary items, 5 grammar notes (`又+V+了` vs. `再+V`, `挺+Adj+的` & `左右`/adjacent digits, `跟…一样`/`更`/`比…多了/一点儿/[数量]`, `快…了` & `不会…吧？`, `正…呢` & `V+着`), and 4 exercises.
    - **`lesson11` (Unit 11 — 第9课：地铁站在哪儿 / *Lesson 9: Where Is the Subway Station?*)**: Initial/final discrimination drills (`b-p`, `d-t`, `z-zh`, `c-ch`, `s-sh`, `an-ang`, `in-ing`), 9 look-alike character pairs (`左/右`, `往/住`, etc.), and movement/place radicals (`辶`, `⺶/足`, `阝`), dialogues on asking a passerby for directions to a department store restroom and meeting at the subway station, reading passages on a residential complex (`小区`) and route directions to KTV, 22 deduplicated vocabulary items, 5 grammar notes (location words with `有/在/是`, distance with `离` & `从…到…`, route directions with `一直往…走` & `拐`, `一…就…`, `过来` vs. `过去`), and 4 exercises.
    - **`lesson12` (Unit 12 — 文化读本3：中国的二十四节气 / *Cultural Reader 3: China's Twenty-Four Solar Terms*)**: Detailed guide to the 7 featured solar terms (`立春`, `清明`, `小暑`, `大暑`, `冬至`, `小寒`, `大寒`), 2 discussion dialogues on agricultural origins and modern urban customs, the full 3-paragraph authentic essay on "China's Fifth Great Invention" (`中国的第五大发明`), 16 deduplicated vocabulary items, 3 discourse/grammar notes (`通过…总结出…`, `一是…；二是…`, `这么说吧 / 比如说我吧`), and 4 exercises.
- **Phase 18 — *Mastering Chinese: Elementary 4 (会通汉语 精编版·初级4)* HSK 4 Curriculum (`lesson13`–`lesson16` in `/data/lessons.ts` & `Header.tsx`)**:
  - **Zero-Duplication Synthesis of All 13 Uploaded Elementary 4 PDFs**: Authored 4 comprehensive **HSK 4 (`hskLevel: 4`)** units consolidating sub-parts `(一)`, `(二)`, `(三)`, and `(四)` plus *Cultural Reader 4*:
    - **`lesson13` (Unit 13 — 第10课：我想把这个寄回家 / *Lesson 10: I Want to Mail This Home*)**: 6 look-alike character pairs (`同/问`, `那/哪`, `休/体`, `直/真`, `看/着`, `住/往`) and 4 radicals (`宀`, `⺮`, `心`, `广`), dialogues on USD-to-RMB exchange rates (`汇率 1∶6.37`), opening a bank card with a passport, ordering set-meal takeout, and filling out mobile shipping forms before mailing parcels to Tokyo, reading passages on Lily's Chinese letter to her brother and 24-hour supermarket App grocery delivery, 46 deduplicated vocabulary items, 5 grammar notes (compound directional complements `下去/出去/过来/上来`, `先 a，再 b` & business hours, `把 + N + V + 到/在/回 + Place`, polite requests with `麻烦您/你……`, and `多 + Adj` degree questions + reading phone numbers with `yāo`), and 4 exercises.
    - **`lesson14` (Unit 14 — 第11课：头越来越疼了 / *Lesson 11: My Head Is Hurting More and More*)**: 6 look-alike character pairs (`工/红`, `元/园`, `坐/座`, `过/对`, `晴/睛`, `超/起`) and 4 health/body/plant/clothing radicals (`月`, `疒`, `艹`, `衤`), dialogues on diagnosing acute appendicitis (`急性阑尾炎`) and minor surgery at the hospital clinic and checking on a sick friend, reading passages on Mark's hospital recovery (`住院治疗`) and Jin Zhiying's weight-loss lesson (`减肥`), 45 deduplicated vocabulary items, 5 grammar notes (describing symptoms with `怎么了 / 哪儿不舒服`, `开始……，后来……` & `越来越 + Adj/V`, `比较` vs. `有点儿`, mild contrast `只是` & `能` vs. `会`, and giving health advice with `应该多/少 + V` & `好好 + V`), and 4 exercises.
    - **`lesson15` (Unit 15 — 第12课：我想去旅游 / *Lesson 12: I Want to Go Traveling*)**: 8 look-alike character triplets (`同/司/向`, `问/间/同`, `请/清/晴`, `北/比/非`, `国/图/园`, `时/对/双`, `大/天/夫`, `日/白/自`) and 4 radicals (`彳`, `刂`, `纟`, `土`), dialogues on planning holiday travel to Harbin, Yunnan, Hainan, and Guilin and choosing agency `自由行` packages, reading passages on Hirata and Mark's funny stories buying train sleeper tickets (`硬座`, `卧铺`, `硬卧`) and booking a "10-star hotel" (`快捷酒店`, `单人间`, `双人间`) plus a May Day trip to the Great Wall, 39 deduplicated vocabulary items, 5 grammar notes (`去哪儿/什么时候/怎么 + V + 好？`, `[时间点] + 前后` vs. `左右`, `要 + V` vs. `想 + V`, extreme degree `Adj + 极了`, and ticket/room unit pricing), and 4 exercises.
    - **`lesson16` (Unit 16 — 文化读本4：去哪儿旅行好 / *Cultural Reader 4: Where Is a Good Place to Travel?*)**: Cultural guide to China's famous mountains and rivers (`名山大川`: 泰山, 黄山, 华山, 峨眉山, 嵩山, 武当山, 长江三峡, 杭州西湖), historical monuments (`历史古迹`: 长城, 故宫, 孔庙, 兵马俑, 苏州园林), and weekend rural farmhouse retreats (`农家乐`), 2 discussion dialogues, the complete 4-paragraph authentic essay, 19 deduplicated vocabulary items, 3 discourse/grammar notes (`有山有水才有灵气`, `除了……，还……`, and `如果……，可以……` + `顺便 + V`), and 4 exercises.
- **Phase 19 — Textbook Character Cast System & Dialogue Avatars Across All Lessons (`/utils/lessonCharacters.ts`, `/src/assets/images/char_*.jpg`, `LessonDetailPage.tsx`, `LessonsPage.tsx`, `data/lessons.ts`, `index.css`)**:
  - **Canonical Textbook Cast Directory (`/utils/lessonCharacters.ts`)**: Created the authoritative character registry for *Mastering Chinese (会通汉语 精编版)* using strictly the exact textbook character names across `lesson1`–`lesson16` with zero random names.
  - **Bespoke Character Portraits**: Generated 8 minimalist editorial portraits in `/src/assets/images/` for the recurring textbook cast (`马克` Mark, `金志英` Jin Zhiying, `莉莉` Lily, `阿里` Ali, `平田` Hirata, `杰希` Jessie, `朱迪` Judy, and `李老师 / 李悦` Teacher Li Yue) plus custom SVG editorial avatars for all supporting textbook speakers (`何大华`, `王老师`, `林娜`, `李明`, `卢卡`, `妈妈`, `司机`, `小贩`, `售货员`, `服务员`, `行人`, `营业员`, `医生`).
  - **Complete 16-Lesson Coverage (`data/lessons.ts`)**: Added authentic textbook character dialogues (`马克`, `金志英`, `莉莉`, `李老师`) and `readingPassage` to `lesson8` (*Cultural Reader 2*) so all 16 units feature interactive character casts and dialogues.
  - **Minimalist Character Cast UI (`LessonDetailPage.tsx`, `LessonsPage.tsx`, `index.css`)**: Added the **"Characters in This Lesson · 本课出场人物"** cast strip on every lesson page (with circular portrait, Hanzi badge, Chinese name, Pinyin, English name, textbook origin/role, and click-to-listen TTS), speaker portrait avatars next to every dialogue turn (including dual-speaker turns like `马克、金志英`), and compact character avatar stacks (`lesson-card__cast`) on every unit card in `LessonsPage.tsx`.
- **Phase 20 — GitHub Push Payload Optimization & Attachment Cleanup (`.gitignore`, `/public/assets`, `/src/assets/images/`)**:
  - **Resolved `Failed to push commit to GitHub: Request contains an invalid argument`**: Removed the `267 MB` of already-extracted raw textbook PDFs and screenshots in `/public/assets/aistudio/` (including single 48 MB and 39 MB PDFs that exceeded GitHub's commit API payload limit) and cleaned `.aistudio` temporary media storage.
  - **Optimized Character Portrait Assets**: Compressed the 8 character portraits in `/src/assets/images/char_*.jpg` to `256x256` (`~10–15 KB` each, `101 KB` total down from `4.3 MB`) and added `.aistudio/` and `public/assets/aistudio/` to `.gitignore`.

