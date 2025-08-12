import React, { useState } from 'react';

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
    theme, toggleTheme, showFeatureModal, currentPage, 
    navigateToHome, navigateToLearn, navigateToPractice, navigateToQuizzes, navigateToDictionary, navigateToStudyPlan, navigateToLessons, navigateToAbout,
    isAuthenticated, onSignInClick, onSignUpClick, onSignOut
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleFeatureLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    showFeatureModal();
  };

  const handleNavClick = (cb: () => void) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      cb();
      setIsMobileMenuOpen(false); // Close mobile menu on navigation
  }
  
  const handleAuthClick = (cb: () => void) => {
    cb();
    setIsMobileMenuOpen(false);
  }



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
