import React from 'react';

type Page = 'home' | 'learn' | 'practice' | 'quizzes' | 'dictionary' | 'studyPlan' | 'lessons' | 'lessonDetail' | 'about' | 'profile';

interface FooterProps {
  currentPage?: Page;
  navigateToHome?: () => void;
  navigateToLearn?: () => void;
  navigateToLessons?: () => void;
  navigateToPractice?: () => void;
  navigateToQuizzes?: () => void;
  navigateToDictionary?: () => void;
  navigateToStudyPlan?: () => void;
  navigateToAbout?: () => void;
  onSelectHSKLevel?: (level: number) => void;
}

const Footer: React.FC<FooterProps> = ({
  currentPage,
  navigateToHome,
  navigateToLearn,
  navigateToLessons,
  navigateToPractice,
  navigateToQuizzes,
  navigateToDictionary,
  navigateToStudyPlan,
  navigateToAbout,
  onSelectHSKLevel,
}) => {
  const handleNav = (cb?: () => void) => (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    if (cb) {
      cb();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleJumpToHSK = (level: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onSelectHSKLevel) {
      onSelectHSKLevel(level);
    }
    if (navigateToLearn) {
      navigateToLearn();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__grid">
          {/* Column 1: Brand & Platform Overview */}
          <div className="footer__brand-col">
            <a href="#" onClick={handleNav(navigateToHome)} className="footer__logo-link">
              <span className="header__logo-mark" aria-hidden="true">
                汉
              </span>
              <span className="footer__logo-text">HSK Hub</span>
            </a>
            <p className="footer__tagline">
              Comprehensive Mandarin proficiency workspace covering the complete HSK 1–6 lexicon, interactive textbook
              units, animated calligraphy stroke order, and speech-recognition pronunciation drills.
            </p>
            <div className="footer__hsk-jumps">
              <span className="footer__hsk-jumps-label">Quick Jump by Level</span>
              <div className="footer__hsk-chips">
                {[1, 2, 3, 4, 5, 6].map(lvl => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={handleJumpToHSK(lvl)}
                    className="footer__hsk-chip tabular-nums"
                  >
                    HSK {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Core Study Modules */}
          <div className="footer__nav-col">
            <h4 className="footer__col-title">Study Workspace</h4>
            <ul className="footer__link-list">
              <li>
                <a
                  href="#home"
                  onClick={handleNav(navigateToHome)}
                  className={`footer__nav-link ${currentPage === 'home' ? 'footer__nav-link--active' : ''}`}
                >
                  Dashboard & Daily Goal
                </a>
              </li>
              <li>
                <a
                  href="#learn"
                  onClick={handleNav(navigateToLearn)}
                  className={`footer__nav-link ${currentPage === 'learn' ? 'footer__nav-link--active' : ''}`}
                >
                  HSK 1–6 Vocabulary
                </a>
              </li>
              <li>
                <a
                  href="#lessons"
                  onClick={handleNav(navigateToLessons)}
                  className={`footer__nav-link ${
                    currentPage === 'lessons' || currentPage === 'lessonDetail' ? 'footer__nav-link--active' : ''
                  }`}
                >
                  Textbook Lessons
                </a>
              </li>
              <li>
                <a
                  href="#practice"
                  onClick={handleNav(navigateToPractice)}
                  className={`footer__nav-link ${currentPage === 'practice' ? 'footer__nav-link--active' : ''}`}
                >
                  Flashcards & Recall
                </a>
              </li>
              <li>
                <a
                  href="#quizzes"
                  onClick={handleNav(navigateToQuizzes)}
                  className={`footer__nav-link ${currentPage === 'quizzes' ? 'footer__nav-link--active' : ''}`}
                >
                  Proficiency Quizzes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources, Planning & About */}
          <div className="footer__nav-col">
            <h4 className="footer__col-title">Resources & Planning</h4>
            <ul className="footer__link-list">
              <li>
                <a
                  href="#study-plan"
                  onClick={handleNav(navigateToStudyPlan)}
                  className={`footer__nav-link ${currentPage === 'studyPlan' ? 'footer__nav-link--active' : ''}`}
                >
                  Study Plan & Roadmaps
                </a>
              </li>
              <li>
                <a
                  href="#dictionary"
                  onClick={handleNav(navigateToDictionary)}
                  className={`footer__nav-link ${currentPage === 'dictionary' ? 'footer__nav-link--active' : ''}`}
                >
                  HSK Dictionary & Stroke Lab
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={handleNav(navigateToAbout)}
                  className={`footer__nav-link ${currentPage === 'about' ? 'footer__nav-link--active' : ''}`}
                >
                  About HSK Hub
                </a>
              </li>
              <li>
                <a
                  href="#daily-goal-tracker"
                  onClick={e => {
                    e.preventDefault();
                    if (navigateToHome) navigateToHome();
                    setTimeout(() => {
                      const el = document.getElementById('daily-goal-tracker');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 80);
                  }}
                  className="footer__nav-link"
                >
                  Daily Target Settings
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Author & Contact */}
          <div className="footer__nav-col">
            <h4 className="footer__col-title">Connect & Support</h4>
            <div className="footer__contact-stack">
              <div className="contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="contact-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:akq.qalati@gmail.com" className="contact-link">
                  akq.qalati@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="contact-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <a
                  href="https://www.linkedin.com/in/imakbarkhanqalati/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  linkedin.com/in/imakbarkhanqalati
                </a>
              </div>

              <div className="contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="contact-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <a
                  href="https://github.com/imakbarkhanqalati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  github.com/imakbarkhanqalati
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">&copy; 2026 HSK Mastery Hub. All Rights Reserved.</p>
          <div className="footer__bottom-links">
            <a href="#about" onClick={handleNav(navigateToAbout)} className="footer__bottom-link">
              About
            </a>
            <span aria-hidden="true">·</span>
            <a href="#study-plan" onClick={handleNav(navigateToStudyPlan)} className="footer__bottom-link">
              Study Plan
            </a>
            <span aria-hidden="true">·</span>
            <a href="#lessons" onClick={handleNav(navigateToLessons)} className="footer__bottom-link">
              Curriculum
            </a>
            <span aria-hidden="true">·</span>
            <button type="button" onClick={handleScrollTop} className="footer__top-btn">
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
