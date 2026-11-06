import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const LoadingSpinner = () => (
  <div className="loading-spinner-container">
    <div className="loading-spinner"></div>
  </div>
);

// Lazy load components to reduce initial bundle size
const HomePage = lazy(() => import('./components/HomePage'));
const MainContent = lazy(() => import('./components/MainContent'));
const PracticePage = lazy(() => import('./components/PracticePage'));
const QuizzesPage = lazy(() => import('./components/QuizzesPage'));
const DictionaryPage = lazy(() => import('./components/DictionaryPage'));
const StudyPlanPage = lazy(() => import('./components/StudyPlanPage'));
const FeatureModal = lazy(() => import('./components/FeatureModal'));
const WordDetailModal = lazy(() => import('./components/WordDetailModal'));
const AuthModal = lazy(() => import('./components/AuthModal'));
const LessonsPage = lazy(() => import('./components/LessonsPage'));
const LessonDetailPage = lazy(() => import('./components/LessonDetailPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const Badges = lazy(() => import('./components/Badges'));

import { lessons as lessonsData } from './data/lessons';
import { Word } from './types';
import { AuthModalState } from './components/AuthModal';
import { DailyStreakData, getStreakData, recordDailyPractice } from './utils/streak';
import {
  UserVocabProgress,
  getVocabProgress,
  toggleBookmarkedWord,
  toggleMasteredWord,
  recordWordStudied,
  setDailyGoalTarget,
} from './utils/progress';
import './index.css';

type Page =
  | 'home'
  | 'learn'
  | 'practice'
  | 'quizzes'
  | 'dictionary'
  | 'studyPlan'
  | 'lessons'
  | 'lessonDetail'
  | 'about'
  | 'profile';

const AUTH_STORAGE_KEY = 'hsk_hub_auth_user_v1';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false);
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const raw = localStorage.getItem(AUTH_STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          return Boolean(parsed.isAuthenticated);
        }
      } catch {
        // ignore
      }
    }
    return false;
  });

  const [userDisplayName, setUserDisplayName] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const raw = localStorage.getItem(AUTH_STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed.displayName) return String(parsed.displayName);
        }
      } catch {
        // ignore
      }
    }
    return 'Akbar Qalati';
  });

  const [authModalState, setAuthModalState] = useState<AuthModalState>('closed');
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [selectedHSKLevel, setSelectedHSKLevel] = useState<number | undefined>(undefined);
  const [streakData, setStreakData] = useState<DailyStreakData>(() => getStreakData());
  const [vocabProgress, setVocabProgress] = useState<UserVocabProgress>(() => getVocabProgress());

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.className = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'light';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem(
          AUTH_STORAGE_KEY,
          JSON.stringify({ isAuthenticated, displayName: userDisplayName })
        );
      } catch {
        // ignore
      }
    }
  }, [isAuthenticated, userDisplayName]);

  useEffect(() => {
    const handleStreakUpdated = (event: Event) => {
      const customEvent = event as CustomEvent<DailyStreakData>;
      if (customEvent.detail) {
        setStreakData(customEvent.detail);
      } else {
        setStreakData(getStreakData());
      }
    };
    const handleProgressUpdated = (event: Event) => {
      const customEvent = event as CustomEvent<UserVocabProgress>;
      if (customEvent.detail) {
        setVocabProgress(customEvent.detail);
      } else {
        setVocabProgress(getVocabProgress());
      }
    };
    window.addEventListener('streak-updated', handleStreakUpdated);
    window.addEventListener('vocab-progress-updated', handleProgressUpdated);
    return () => {
      window.removeEventListener('streak-updated', handleStreakUpdated);
      window.removeEventListener('vocab-progress-updated', handleProgressUpdated);
    };
  }, []);

  const handleToggleMastered = useCallback((char: string) => {
    const updated = toggleMasteredWord(char);
    setVocabProgress(updated);
    recordDailyPractice();
  }, []);

  const handleToggleBookmark = useCallback((char: string) => {
    const updated = toggleBookmarkedWord(char);
    setVocabProgress(updated);
  }, []);

  const handleUpdateDailyGoal = useCallback((target: number) => {
    const updated = setDailyGoalTarget(target);
    setVocabProgress(updated);
  }, []);

  const navigateToHome = useCallback(() => {
    setCurrentPage('home');
    setSelectedHSKLevel(undefined);
  }, []);
  const navigateToLearn = useCallback(() => setCurrentPage('learn'), []);
  const navigateToPractice = useCallback(() => setCurrentPage('practice'), []);
  const navigateToQuizzes = useCallback(() => setCurrentPage('quizzes'), []);
  const navigateToDictionary = useCallback(() => setCurrentPage('dictionary'), []);
  const navigateToStudyPlan = useCallback(() => setCurrentPage('studyPlan'), []);
  const navigateToLessons = useCallback(() => setCurrentPage('lessons'), []);
  const navigateToAbout = useCallback(() => setCurrentPage('about'), []);
  const navigateToProfile = useCallback(() => setCurrentPage('profile'), []);

  const navigateToLessonDetail = useCallback((lessonId: string) => {
    setSelectedLessonId(lessonId);
    setCurrentPage('lessonDetail');
    recordDailyPractice();
  }, []);
  const handleBackToLessons = useCallback(() => {
    setCurrentPage('lessons');
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      document.body.className = newTheme;
      return newTheme;
    });
  }, []);

  const handleShowFeatureModal = useCallback(() => {
    setIsFeatureModalOpen(true);
  }, []);

  const handleCloseFeatureModal = useCallback(() => {
    setIsFeatureModalOpen(false);
  }, []);

  const handleSelectWord = useCallback((word: Word) => {
    setSelectedWord(word);
    recordDailyPractice();
    const updated = recordWordStudied(word.char);
    setVocabProgress(updated);
  }, []);

  const handleCloseWordDetailModal = useCallback(() => {
    setSelectedWord(null);
  }, []);

  const handleOpenSignIn = useCallback(() => setAuthModalState('signin'), []);
  const handleOpenSignUp = useCallback(() => setAuthModalState('signup'), []);
  const handleCloseAuthModal = useCallback(() => setAuthModalState('closed'), []);

  const handleSwitchAuthMode = useCallback(() => {
    setAuthModalState(prev => (prev === 'signin' ? 'signup' : 'signin'));
  }, []);

  const handleSignIn = useCallback(
    (data: { email?: string; name?: string }) => {
      if (data?.name) {
        setUserDisplayName(data.name);
      }
      setIsAuthenticated(true);
      handleCloseAuthModal();
    },
    [handleCloseAuthModal]
  );

  const handleSignUp = useCallback(
    (data: { email?: string; name?: string }) => {
      if (data?.name) {
        setUserDisplayName(data.name);
      }
      setIsAuthenticated(true);
      handleCloseAuthModal();
    },
    [handleCloseAuthModal]
  );

  const handleSignOut = useCallback(() => {
    setIsAuthenticated(false);
    setCurrentPage(prev => (prev === 'profile' ? 'home' : prev));
  }, []);

  return (
    <div id="app-wrapper">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        showFeatureModal={handleShowFeatureModal}
        currentPage={currentPage}
        navigateToHome={navigateToHome}
        navigateToLearn={navigateToLearn}
        navigateToPractice={navigateToPractice}
        navigateToQuizzes={navigateToQuizzes}
        navigateToDictionary={navigateToDictionary}
        navigateToStudyPlan={navigateToStudyPlan}
        navigateToLessons={navigateToLessons}
        navigateToAbout={navigateToAbout}
        navigateToProfile={navigateToProfile}
        isAuthenticated={isAuthenticated}
        userDisplayName={userDisplayName}
        onSignInClick={handleOpenSignIn}
        onSignUpClick={handleOpenSignUp}
        onSignOut={handleSignOut}
        streakData={streakData}
        vocabProgress={vocabProgress}
        onUpdateDailyGoal={handleUpdateDailyGoal}
      />
      <div className="main-layout">
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            {currentPage === 'home' && (
              <HomePage
                onGetStartedClick={handleOpenSignUp}
                navigateToLearn={navigateToLearn}
                navigateToPractice={navigateToPractice}
                navigateToQuizzes={navigateToQuizzes}
                navigateToStudyPlan={navigateToStudyPlan}
                navigateToDictionary={navigateToDictionary}
                onSelectHSKLevel={level => {
                  setSelectedHSKLevel(level);
                }}
                onWordSelect={handleSelectWord}
                vocabProgress={vocabProgress}
                streakData={streakData}
                onToggleBookmark={handleToggleBookmark}
                onToggleMastered={handleToggleMastered}
                onUpdateDailyGoal={handleUpdateDailyGoal}
              />
            )}
            {currentPage === 'learn' && (
              <MainContent
                onWordSelect={handleSelectWord}
                initialHSKLevel={selectedHSKLevel}
                vocabProgress={vocabProgress}
                onToggleMastered={handleToggleMastered}
                onToggleBookmark={handleToggleBookmark}
              />
            )}
            {currentPage === 'practice' && <PracticePage />}
            {currentPage === 'quizzes' && <QuizzesPage />}
            {currentPage === 'dictionary' && (
              <DictionaryPage
                onWordSelect={handleSelectWord}
                vocabProgress={vocabProgress}
                onToggleMastered={handleToggleMastered}
                onToggleBookmark={handleToggleBookmark}
              />
            )}
            {currentPage === 'studyPlan' && <StudyPlanPage />}
            {currentPage === 'lessons' && (
              <LessonsPage lessons={lessonsData} onLessonSelect={navigateToLessonDetail} />
            )}
            {currentPage === 'lessonDetail' && selectedLessonId && (
              <LessonDetailPage
                lesson={lessonsData.find(l => l.id === selectedLessonId)!}
                onBack={handleBackToLessons}
                onWordSelect={handleSelectWord}
                vocabProgress={vocabProgress}
                onToggleMastered={handleToggleMastered}
                onToggleBookmark={handleToggleBookmark}
                onSelectLesson={navigateToLessonDetail}
              />
            )}
            {currentPage === 'about' && <AboutPage />}
            {currentPage === 'profile' && (
              <Badges
                vocabProgress={vocabProgress}
                streakData={streakData}
                userDisplayName={userDisplayName}
                onUpdateDisplayName={setUserDisplayName}
                onNavigateToHome={navigateToHome}
                onNavigateToLearn={navigateToLearn}
                onNavigateToLessons={navigateToLessons}
                onNavigateToPractice={navigateToPractice}
                onSelectHSKLevel={level => {
                  setSelectedHSKLevel(level);
                }}
                onSignOut={handleSignOut}
              />
            )}
          </Suspense>
        </main>
      </div>
      <Footer
        currentPage={currentPage}
        navigateToHome={navigateToHome}
        navigateToLearn={navigateToLearn}
        navigateToLessons={navigateToLessons}
        navigateToPractice={navigateToPractice}
        navigateToQuizzes={navigateToQuizzes}
        navigateToDictionary={navigateToDictionary}
        navigateToStudyPlan={navigateToStudyPlan}
        navigateToAbout={navigateToAbout}
        onSelectHSKLevel={level => {
          setSelectedHSKLevel(level);
        }}
      />
      <Suspense fallback={<LoadingSpinner />}>
        {isFeatureModalOpen && (
          <FeatureModal isOpen={isFeatureModalOpen} onClose={handleCloseFeatureModal} />
        )}
        {selectedWord && (
          <WordDetailModal word={selectedWord} onClose={handleCloseWordDetailModal} />
        )}
        {authModalState !== 'closed' && (
          <AuthModal
            state={authModalState}
            onClose={handleCloseAuthModal}
            onSwitch={handleSwitchAuthMode}
            onSignIn={handleSignIn}
            onSignUp={handleSignUp}
          />
        )}
      </Suspense>
    </div>
  );
}

export default App;
