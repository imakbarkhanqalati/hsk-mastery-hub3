import React, { useState, useRef, useEffect } from 'react';
import { DailyStreakData, getLastSevenDaysStatus, getLocalDateString } from '../utils/streak';

type Page = 'home' | 'learn' | 'practice' | 'quizzes' | 'dictionary' | 'studyPlan' | 'lessons' | 'lessonDetail' | 'about';
interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  showFeatureModal: () => void;
  currentPage: Page;
  navigateToHome: () => void;
  navigateToLearn: () => void;
  navigateToPractice: () => void;
  navigateToQuizzes: () => void;
  navigateToDictionary: () => void;
  navigateToStudyPlan: () => void;
  navigateToLessons: () => void;
  navigateToAbout: () => void;
  isAuthenticated: boolean;
  onSignInClick: () => void;
  onSignUpClick: () => void;
  onSignOut: () => void;
  streakData: DailyStreakData;
}

const NavLink: React.FC<{
  href?: string;
  isCurrent?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
  className?: string;
}> = ({ href = "#", isCurrent = false, onClick, children, className = '' }) => {
  const currentClass = isCurrent ? 'nav-link--current' : '';
  
  return (
    <a href={href} onClick={onClick} className={`nav-link ${currentClass} ${className}`}>
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ 
    theme, toggleTheme, currentPage, 
    navigateToHome, navigateToLearn, navigateToPractice, navigateToQuizzes, navigateToDictionary, navigateToStudyPlan, navigateToLessons, navigateToAbout,
    isAuthenticated, onSignInClick, onSignUpClick, onSignOut, streakData
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStreakOpen, setIsStreakOpen] = useState(false);
  const streakDropdownRef = useRef<HTMLDivElement>(null);

  const todayStr = getLocalDateString();
  const practicedToday = streakData.lastPracticeDate === todayStr;
  const weekDays = getLastSevenDaysStatus(streakData.practiceHistory);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (streakDropdownRef.current && !streakDropdownRef.current.contains(event.target as Node)) {
        setIsStreakOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (cb: () => void) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      cb();
      setIsMobileMenuOpen(false);
  };
  
  const handleAuthClick = (cb: () => void) => {
    cb();
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="container header__nav">
        <div className="header__brand">
          <a href="#" onClick={handleNavClick(navigateToHome)} className="header__logo-link">
            <svg className="header__logo-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><path d="m14 13-1-4-1 4"/><path d="M10 13h4"/></svg>
            <span className="header__logo-text">HSK Hub</span>
          </a>
        </div>

        <div className="header__nav-links">
            <NavLink onClick={handleNavClick(navigateToHome)} isCurrent={currentPage === 'home'}>Home</NavLink>
            <NavLink onClick={handleNavClick(navigateToLearn)} isCurrent={currentPage === 'learn'}>Learn</NavLink>
            <NavLink onClick={handleNavClick(navigateToPractice)} isCurrent={currentPage === 'practice'}>Practice</NavLink>
            <NavLink onClick={handleNavClick(navigateToQuizzes)} isCurrent={currentPage === 'quizzes'}>Quizzes</NavLink>
            <NavLink onClick={handleNavClick(navigateToDictionary)} isCurrent={currentPage === 'dictionary'}>Dictionary</NavLink>
            <NavLink onClick={handleNavClick(navigateToStudyPlan)} isCurrent={currentPage === 'studyPlan'}>Study Plan</NavLink>
            <NavLink onClick={handleNavClick(navigateToLessons)} isCurrent={currentPage === 'lessons'}>Lessons</NavLink>
            <NavLink onClick={handleNavClick(navigateToAbout)} isCurrent={currentPage === 'about'}>About</NavLink>
        </div>
          
        <div className="header__actions">
            {/* Daily Streak Tracker */}
            <div className="streak-widget" ref={streakDropdownRef}>
              <button
                type="button"
                onClick={() => setIsStreakOpen(prev => !prev)}
                className={`streak-badge ${practicedToday ? 'streak-badge--active' : 'streak-badge--inactive'}`}
                aria-label={`Daily practice streak: ${streakData.currentStreak} ${streakData.currentStreak === 1 ? 'day' : 'days'}`}
                title={practicedToday ? `${streakData.currentStreak} day streak! You practiced today.` : `${streakData.currentStreak} day streak. Practice today to keep it going!`}
              >
                <svg
                  className="streak-badge__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 23C7.58172 23 4 19.4183 4 15C4 11.4919 6.23819 8.43683 9.10802 6.08681C10.3052 5.10646 11.4255 4.0279 12.1647 2.55974C12.4048 2.08286 13.0954 2.13804 13.2571 2.64642C14.1292 5.38818 15.8628 7.21164 17.2725 8.95853C18.9693 11.0612 20 12.8781 20 15C20 19.4183 16.4183 23 12 23ZM12 20.5C14.4853 20.5 16.5 18.4853 16.5 16C16.5 14.6649 15.8154 13.4894 14.6143 12.0128C13.9412 11.1852 13.2194 10.2201 12.6951 9.0355C12.4879 8.56734 11.8158 8.58319 11.6305 9.05988C11.0056 10.6673 9.87861 11.8135 8.93836 12.9277C7.98967 14.0519 7.5 14.9565 7.5 16C7.5 18.4853 9.51472 20.5 12 20.5Z" />
                </svg>
                <span className="streak-badge__count">{streakData.currentStreak}</span>
              </button>

              {isStreakOpen && (
                <div className="streak-popover animate-fade-in">
                  <div className="streak-popover__header">
                    <div className={`streak-popover__flame ${practicedToday ? 'streak-popover__flame--active' : ''}`}>
                      🔥
                    </div>
                    <div>
                      <h4 className="streak-popover__title">
                        {streakData.currentStreak} {streakData.currentStreak === 1 ? 'Day' : 'Days'} Streak
                      </h4>
                      <p className="streak-popover__subtitle">
                        {practicedToday
                          ? "Great job! You've practiced today."
                          : 'Complete a practice or quiz today!'}
                      </p>
                    </div>
                  </div>

                  <div className="streak-popover__week">
                    {weekDays.map((item) => (
                      <div key={item.date} className={`streak-day ${item.isToday ? 'streak-day--today' : ''}`}>
                        <span className="streak-day__label">{item.dayLabel}</span>
                        <div className={`streak-day__dot ${item.practiced ? 'streak-day__dot--done' : ''}`}>
                          {item.practiced ? '✓' : ''}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="streak-popover__stats">
                    <div className="streak-popover__stat">
                      <span className="streak-popover__stat-label">Current Streak</span>
                      <span className="streak-popover__stat-value">{streakData.currentStreak}d</span>
                    </div>
                    <div className="streak-popover__stat">
                      <span className="streak-popover__stat-label">Longest Streak</span>
                      <span className="streak-popover__stat-value">{streakData.longestStreak}d</span>
                    </div>
                  </div>

                  {!practicedToday && (
                    <button
                      type="button"
                      className="button button--primary streak-popover__cta"
                      onClick={() => {
                        setIsStreakOpen(false);
                        navigateToPractice();
                      }}
                    >
                      Practice Now
                    </button>
                  )}
                </div>
              )}
            </div>

            {isAuthenticated ? (
                <div className="header__user-info">
                    <span className="header__user-name">Hi, User!</span>
                    <button onClick={onSignOut} className="button button--outline">
                        Sign Out
                    </button>
                </div>
            ) : (
                <div className="header__auth-buttons">
                    <button onClick={onSignInClick} className="button button--secondary">
                        Sign In
                    </button>
                    <button onClick={onSignUpClick} className="button button--primary">
                        Sign Up
                    </button>
                </div>
            )}
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                 {theme === 'light' ? 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                 }
            </button>
            <div className="header__mobile-menu-toggle">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="mobile-menu-button">
                  {isMobileMenuOpen ? (
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  ) : (
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                  )}
              </button>
            </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
          <div className="mobile-menu">
              <NavLink onClick={handleNavClick(navigateToHome)} isCurrent={currentPage === 'home'}>Home</NavLink>
              <NavLink onClick={handleNavClick(navigateToLearn)} isCurrent={currentPage === 'learn'}>Learn</NavLink>
              <NavLink onClick={handleNavClick(navigateToPractice)} isCurrent={currentPage === 'practice'}>Practice</NavLink>
              <NavLink onClick={handleNavClick(navigateToQuizzes)} isCurrent={currentPage === 'quizzes'}>Quizzes</NavLink>
              <NavLink onClick={handleNavClick(navigateToDictionary)} isCurrent={currentPage === 'dictionary'}>Dictionary</NavLink>
              <NavLink onClick={handleNavClick(navigateToStudyPlan)} isCurrent={currentPage === 'studyPlan'}>Study Plan</NavLink>
              <NavLink onClick={handleNavClick(navigateToLessons)} isCurrent={currentPage === 'lessons'}>Lessons</NavLink>
              <NavLink onClick={handleNavClick(navigateToAbout)} isCurrent={currentPage === 'about'}>About</NavLink>
              <div className="mobile-menu__divider"></div>
              <div className="mobile-menu__streak">
                  <span>🔥 Daily Streak: <strong>{streakData.currentStreak} {streakData.currentStreak === 1 ? 'day' : 'days'}</strong></span>
                  <span className="mobile-menu__streak-best">Best: {streakData.longestStreak}d</span>
              </div>
              <div className="mobile-menu__divider"></div>
              {isAuthenticated ? (
                  <div className="mobile-menu__auth">
                      <span className="header__user-name">Hi, User!</span>
                      <button onClick={() => { onSignOut(); setIsMobileMenuOpen(false); }} className="button button--outline">
                          Sign Out
                      </button>
                  </div>
              ) : (
                  <div className="mobile-menu__auth">
                      <button onClick={() => handleAuthClick(onSignInClick)} className="button button--secondary">
                          Sign In
                      </button>
                      <button onClick={() => handleAuthClick(onSignUpClick)} className="button button--primary">
                          Sign Up
                      </button>
                  </div>
              )}
          </div>
      )}
    </header>
  );
};

export default Header;
