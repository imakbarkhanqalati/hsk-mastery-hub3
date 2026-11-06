import React, { useState, useRef, useEffect } from 'react';
import { DailyStreakData, getLastSevenDaysStatus, getLocalDateString } from '../utils/streak';
import {
  UserVocabProgress,
  DEFAULT_DAILY_GOAL,
  getTodayStudiedWords,
  getLastSevenDaysGoalStatus,
} from '../utils/progress';
import {
  StudyReminderSettings,
  formatTime12Hour,
  getBrowserNotificationPermission,
  requestBrowserNotificationPermission,
} from '../utils/reminders';
import { useOnlineStatus, OfflineCacheStats } from '../utils/offlineCache';
import PWAInstallButton from './PWAInstallButton';

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
  navigateToProfile: () => void;
  isAuthenticated: boolean;
  userDisplayName?: string;
  onSignInClick: () => void;
  onSignUpClick: () => void;
  onSignOut: () => void;
  streakData: DailyStreakData;
  vocabProgress: UserVocabProgress;
  onUpdateDailyGoal: (target: number) => void;
  reminderSettings: StudyReminderSettings;
  onUpdateReminderSettings: (next: Partial<StudyReminderSettings>) => void;
  onTriggerPreviewReminder: () => void;
  offlineCacheStats: OfflineCacheStats;
  onOpenOfflineModal: () => void;
}

const GOAL_PRESETS = [5, 10, 15, 20, 30, 50];

const REMINDER_TIME_PRESETS = [
  { label: 'Morning', time: '08:30' },
  { label: 'Midday', time: '13:00' },
  { label: 'Evening', time: '19:00' },
  { label: 'Night', time: '21:30' },
];

const NavLink: React.FC<{
  href?: string;
  isCurrent?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
  className?: string;
}> = ({ href = '#', isCurrent = false, onClick, children, className = '' }) => {
  const currentClass = isCurrent ? 'nav-link--current' : '';

  return (
    <a href={href} onClick={onClick} className={`nav-link ${currentClass} ${className}`}>
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({
  theme,
  toggleTheme,
  currentPage,
  navigateToHome,
  navigateToLearn,
  navigateToPractice,
  navigateToQuizzes,
  navigateToDictionary,
  navigateToStudyPlan,
  navigateToLessons,
  navigateToAbout,
  navigateToProfile,
  isAuthenticated,
  userDisplayName = 'Akbar Qalati',
  onSignInClick,
  onSignUpClick,
  onSignOut,
  streakData,
  vocabProgress,
  onUpdateDailyGoal,
  reminderSettings,
  onUpdateReminderSettings,
  onTriggerPreviewReminder,
  offlineCacheStats,
  onOpenOfflineModal,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStreakOpen, setIsStreakOpen] = useState(false);
  const [isGoalOpen, setIsGoalOpen] = useState(false);
  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const [customGoalInput, setCustomGoalInput] = useState<string>(
    String(vocabProgress.dailyGoalTarget || DEFAULT_DAILY_GOAL)
  );
  const [notificationPermission, setNotificationPermission] = useState<
    NotificationPermission | 'unsupported'
  >(() => getBrowserNotificationPermission());

  const isOnline = useOnlineStatus();

  const streakDropdownRef = useRef<HTMLDivElement>(null);
  const goalDropdownRef = useRef<HTMLDivElement>(null);
  const reminderDropdownRef = useRef<HTMLDivElement>(null);

  const todayStr = getLocalDateString();
  const todayStudiedWords = getTodayStudiedWords(vocabProgress);
  const todayCount = todayStudiedWords.length;
  const practicedToday = streakData.lastPracticeDate === todayStr || todayCount > 0;
  const weekDays = getLastSevenDaysStatus(streakData.practiceHistory);

  const dailyGoalTarget = vocabProgress.dailyGoalTarget || DEFAULT_DAILY_GOAL;
  const goalMetToday = todayCount >= dailyGoalTarget;
  const goalProgressPct = Math.min(100, Math.round((todayCount / dailyGoalTarget) * 100));
  const sevenDayGoals = getLastSevenDaysGoalStatus(vocabProgress);

  useEffect(() => {
    setCustomGoalInput(String(vocabProgress.dailyGoalTarget || DEFAULT_DAILY_GOAL));
  }, [vocabProgress.dailyGoalTarget]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (streakDropdownRef.current && !streakDropdownRef.current.contains(event.target as Node)) {
        setIsStreakOpen(false);
      }
      if (goalDropdownRef.current && !goalDropdownRef.current.contains(event.target as Node)) {
        setIsGoalOpen(false);
      }
      if (reminderDropdownRef.current && !reminderDropdownRef.current.contains(event.target as Node)) {
        setIsReminderOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (cb: () => void) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    cb();
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAuthClick = (cb: () => void) => {
    cb();
    setIsMobileMenuOpen(false);
  };

  const handleCustomGoalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(customGoalInput, 10);
    if (!Number.isNaN(parsed) && parsed >= 1 && parsed <= 200) {
      onUpdateDailyGoal(parsed);
    } else {
      setCustomGoalInput(String(dailyGoalTarget));
    }
  };

  const handleToggleReminder = async () => {
    const nextEnabled = !reminderSettings.enabled;
    onUpdateReminderSettings({
      enabled: nextEnabled,
      snoozedUntil: null,
    });
    if (nextEnabled && notificationPermission === 'default') {
      const perm = await requestBrowserNotificationPermission();
      setNotificationPermission(perm);
    }
  };

  const handleRequestBrowserPermission = async () => {
    const perm = await requestBrowserNotificationPermission();
    setNotificationPermission(perm);
  };

  const shortFirstName = userDisplayName.trim().split(/\s+/)[0] || 'Scholar';
  const formattedReminderTime = formatTime12Hour(reminderSettings.reminderTime);

  return (
    <header className="header">
      <nav className="container header__nav" aria-label="Main Navigation">
        {/* Zone 1: Brand Wordmark */}
        <div className="header__brand">
          <a href="#" onClick={handleNavClick(navigateToHome)} className="header__logo-link">
            <span className="header__logo-mark" aria-hidden="true">
              汉
            </span>
            <span className="header__logo-text">HSK Hub</span>
          </a>
        </div>

        {/* Zone 2: Primary Study Navigation (6 concise single-word items) */}
        <div className="header__nav-links">
          <NavLink onClick={handleNavClick(navigateToHome)} isCurrent={currentPage === 'home'}>
            Home
          </NavLink>
          <NavLink onClick={handleNavClick(navigateToLearn)} isCurrent={currentPage === 'learn'}>
            Learn
          </NavLink>
          <NavLink
            onClick={handleNavClick(navigateToLessons)}
            isCurrent={currentPage === 'lessons' || currentPage === 'lessonDetail'}
          >
            Lessons
          </NavLink>
          <NavLink onClick={handleNavClick(navigateToPractice)} isCurrent={currentPage === 'practice'}>
            Practice
          </NavLink>
          <NavLink onClick={handleNavClick(navigateToQuizzes)} isCurrent={currentPage === 'quizzes'}>
            Quizzes
          </NavLink>
          <NavLink onClick={handleNavClick(navigateToDictionary)} isCurrent={currentPage === 'dictionary'}>
            Dictionary
          </NavLink>
        </div>

        {/* Zone 3: Streamlined Telemetry & Account Controls */}
        <div className="header__actions">
          <div className="header__telemetry-group">
            {/* 1. Daily Study Goal Widget */}
            <div className="goal-widget" ref={goalDropdownRef}>
              <button
                type="button"
                onClick={() => {
                  setIsGoalOpen(prev => !prev);
                  setIsStreakOpen(false);
                  setIsReminderOpen(false);
                }}
                className={`goal-badge ${
                  goalMetToday
                    ? 'goal-badge--complete'
                    : todayCount > 0
                    ? 'goal-badge--progress'
                    : 'goal-badge--idle'
                }`}
                aria-label={`Daily study goal: ${todayCount} of ${dailyGoalTarget} words learned today`}
                title={`Daily Study Goal: ${todayCount}/${dailyGoalTarget} words (${goalProgressPct}%)`}
              >
                <svg
                  className="goal-badge__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
                <span className="goal-badge__count tabular-nums">
                  {todayCount}/{dailyGoalTarget}
                </span>
              </button>

              {isGoalOpen && (
                <div className="goal-popover animate-fade-in">
                  <div className="goal-popover__header">
                    <div className={`goal-popover__ring ${goalMetToday ? 'goal-popover__ring--complete' : ''}`}>
                      <span className="tabular-nums">{goalProgressPct}%</span>
                    </div>
                    <div>
                      <h4 className="goal-popover__title">Daily Study Goal</h4>
                      <p className="goal-popover__subtitle">
                        {goalMetToday
                          ? `Target reached! ${todayCount} of ${dailyGoalTarget} words studied.`
                          : `${todayCount} of ${dailyGoalTarget} words studied today`}
                      </p>
                    </div>
                  </div>

                  <div className="goal-popover__progress-track">
                    <div
                      className={`goal-popover__progress-fill ${
                        goalMetToday ? 'goal-popover__progress-fill--complete' : ''
                      }`}
                      style={{ width: `${goalProgressPct}%` }}
                    />
                  </div>

                  <div className="goal-popover__section">
                    <span className="goal-popover__label">Set Daily Target (Words / Day)</span>
                    <div className="goal-popover__presets">
                      {GOAL_PRESETS.map(preset => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => onUpdateDailyGoal(preset)}
                          className={`goal-preset-btn tabular-nums ${
                            dailyGoalTarget === preset ? 'goal-preset-btn--active' : ''
                          }`}
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                    <form onSubmit={handleCustomGoalSubmit} className="goal-popover__custom-form">
                      <label htmlFor="header-custom-goal" className="sr-only">
                        Custom daily word goal
                      </label>
                      <input
                        id="header-custom-goal"
                        type="number"
                        min={1}
                        max={200}
                        value={customGoalInput}
                        onChange={e => setCustomGoalInput(e.target.value)}
                        className="goal-popover__input tabular-nums"
                        placeholder="Custom (1–200)"
                      />
                      <button type="submit" className="button button--secondary button--sm">
                        Save
                      </button>
                    </form>
                  </div>

                  <div className="goal-popover__week">
                    {sevenDayGoals.map(item => (
                      <div key={item.date} className={`streak-day ${item.isToday ? 'streak-day--today' : ''}`}>
                        <span className="streak-day__label">{item.dayLabel}</span>
                        <div
                          className={`goal-day__dot tabular-nums ${
                            item.met ? 'goal-day__dot--met' : item.count > 0 ? 'goal-day__dot--partial' : ''
                          }`}
                          title={`${item.date}: ${item.count}/${item.target} words`}
                        >
                          {item.met ? '✓' : item.count > 0 ? item.count : ''}
                        </div>
                      </div>
                    ))}
                  </div>

                  {todayStudiedWords.length > 0 && (
                    <div className="goal-popover__today-words">
                      <span className="goal-popover__label">Studied Today ({todayCount})</span>
                      <div className="goal-popover__chips">
                        {todayStudiedWords.slice(-8).map(char => (
                          <span key={char} className="goal-popover__chip font-noto-sc">
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    className="button button--primary streak-popover__cta"
                    onClick={() => {
                      setIsGoalOpen(false);
                      navigateToPractice();
                    }}
                  >
                    {goalMetToday ? 'Keep Practicing →' : 'Practice Words Now →'}
                  </button>
                </div>
              )}
            </div>

            <span className="header__telemetry-divider" aria-hidden="true" />

            {/* 2. Daily Streak Tracker */}
            <div className="streak-widget" ref={streakDropdownRef}>
              <button
                type="button"
                onClick={() => {
                  setIsStreakOpen(prev => !prev);
                  setIsGoalOpen(false);
                  setIsReminderOpen(false);
                }}
                className={`streak-badge ${practicedToday ? 'streak-badge--active' : 'streak-badge--inactive'}`}
                aria-label={`Daily practice streak: ${streakData.currentStreak} ${
                  streakData.currentStreak === 1 ? 'day' : 'days'
                }`}
                title={
                  practicedToday
                    ? `${streakData.currentStreak} day streak! You practiced today.`
                    : `${streakData.currentStreak} day streak. Practice today to keep it going!`
                }
              >
                <svg
                  className="streak-badge__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 23C7.58172 23 4 19.4183 4 15C4 11.4919 6.23819 8.43683 9.10802 6.08681C10.3052 5.10646 11.4255 4.0279 12.1647 2.55974C12.4048 2.08286 13.0954 2.13804 13.2571 2.64642C14.1292 5.38818 15.8628 7.21164 17.2725 8.95853C18.9693 11.0612 20 12.8781 20 15C20 19.4183 16.4183 23 12 23ZM12 20.5C14.4853 20.5 16.5 18.4853 16.5 16C16.5 14.6649 15.8154 13.4894 14.6143 12.0128C13.9412 11.1852 13.2194 10.2201 12.6951 9.0355C12.4879 8.56734 11.8158 8.58319 11.6305 9.05988C11.0056 10.6673 9.87861 11.8135 8.93836 12.9277C7.98967 14.0519 7.5 14.9565 7.5 16C7.5 18.4853 9.51472 20.5 12 20.5Z" />
                </svg>
                <span className="streak-badge__count tabular-nums">{streakData.currentStreak}</span>
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
                        {practicedToday ? "Great job! You've practiced today." : 'Complete a practice or quiz today!'}
                      </p>
                    </div>
                  </div>

                  <div className="streak-popover__week">
                    {weekDays.map(item => (
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

            <span className="header__telemetry-divider" aria-hidden="true" />

            {/* 3. Compact Study Reminder & Offline Cache Hub Bell */}
            <div className="reminder-widget" ref={reminderDropdownRef}>
              <button
                type="button"
                onClick={() => {
                  setIsReminderOpen(prev => !prev);
                  setIsGoalOpen(false);
                  setIsStreakOpen(false);
                  setNotificationPermission(getBrowserNotificationPermission());
                }}
                className={`reminder-badge ${
                  !isOnline
                    ? 'offline-status-btn--offline'
                    : reminderSettings.enabled
                    ? 'reminder-badge--enabled'
                    : 'reminder-badge--disabled'
                }`}
                aria-label={
                  reminderSettings.enabled
                    ? `Daily study reminder enabled at ${formattedReminderTime}`
                    : 'Study reminders & offline cache settings'
                }
                title={
                  !isOnline
                    ? 'Offline Mode Active — Click for settings'
                    : reminderSettings.enabled
                    ? `Study Reminder ON (${formattedReminderTime}) · Offline Cache Ready`
                    : 'Study Reminders & Offline Cache'
                }
              >
                <svg
                  className="reminder-badge__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
                {reminderSettings.enabled && <span className="reminder-badge__dot" aria-hidden="true" />}
              </button>

              {isReminderOpen && (
                <div className="reminder-popover animate-fade-in">
                  <div className="reminder-popover__top">
                    <div className="reminder-popover__title-group">
                      <h4 className="reminder-popover__title">Daily Study Reminder</h4>
                      <p className="reminder-popover__subtitle">
                        Get notified if you haven&apos;t practiced by your target time.
                      </p>
                    </div>

                    <button
                      type="button"
                      role="switch"
                      aria-checked={reminderSettings.enabled}
                      onClick={handleToggleReminder}
                      className={`reminder-switch ${
                        reminderSettings.enabled ? 'reminder-switch--on' : ''
                      }`}
                      aria-label="Toggle daily study reminder"
                    >
                      <span className="reminder-switch__thumb" />
                    </button>
                  </div>

                  {/* Today's Practice Status Banner */}
                  <div
                    className={`reminder-popover__status ${
                      practicedToday
                        ? 'reminder-popover__status--done'
                        : reminderSettings.enabled
                        ? 'reminder-popover__status--pending'
                        : 'reminder-popover__status--off'
                    }`}
                  >
                    <span className="reminder-popover__status-dot" aria-hidden="true" />
                    <span>
                      {practicedToday
                        ? `You've practiced today! Next check-in tomorrow at ${formattedReminderTime}.`
                        : reminderSettings.enabled
                        ? `Scheduled for ${formattedReminderTime} today if you haven't practiced yet.`
                        : 'Reminders are paused. Toggle the switch above to activate.'}
                    </span>
                  </div>

                  {/* Time Picker & Presets */}
                  <div className="reminder-popover__section">
                    <label htmlFor="header-reminder-time" className="goal-popover__label">
                      Preferred Reminder Time
                    </label>
                    <div className="reminder-popover__time-row">
                      <input
                        id="header-reminder-time"
                        type="time"
                        value={reminderSettings.reminderTime}
                        onChange={e => {
                          if (e.target.value) {
                            onUpdateReminderSettings({
                              reminderTime: e.target.value,
                              enabled: true,
                              lastNotifiedDate: null,
                              snoozedUntil: null,
                            });
                          }
                        }}
                        className="reminder-popover__time-input tabular-nums"
                      />
                      <span className="reminder-popover__time-formatted tabular-nums">
                        {formattedReminderTime}
                      </span>
                    </div>

                    <div className="reminder-popover__presets">
                      {REMINDER_TIME_PRESETS.map(preset => (
                        <button
                          key={preset.time}
                          type="button"
                          onClick={() =>
                            onUpdateReminderSettings({
                              reminderTime: preset.time,
                              enabled: true,
                              lastNotifiedDate: null,
                              snoozedUntil: null,
                            })
                          }
                          className={`reminder-preset-btn ${
                            reminderSettings.reminderTime === preset.time
                              ? 'reminder-preset-btn--active'
                              : ''
                          }`}
                        >
                          <span>{preset.label}</span>
                          <small className="tabular-nums">{preset.time}</small>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Browser Notification Channel Status */}
                  <div className="reminder-popover__channel">
                    <div className="reminder-popover__channel-info">
                      <span className="reminder-popover__channel-label">Notification Channel</span>
                      <span className="reminder-popover__channel-desc">
                        {notificationPermission === 'granted'
                          ? 'Browser Alert + On-Screen Toast'
                          : 'On-Screen Toast (Browser optional)'}
                      </span>
                    </div>
                    {notificationPermission === 'default' && (
                      <button
                        type="button"
                        onClick={handleRequestBrowserPermission}
                        className="reminder-popover__perm-btn"
                      >
                        Allow Browser
                      </button>
                    )}
                    {notificationPermission === 'granted' && (
                      <span className="reminder-popover__perm-tag">✓ Active</span>
                    )}
                  </div>

                  {/* Offline Service Worker Cache Status Row */}
                  <div className="reminder-popover__channel">
                    <div className="reminder-popover__channel-info">
                      <span className="reminder-popover__channel-label">Offline Review Cache</span>
                      <span className="reminder-popover__channel-desc tabular-nums">
                        {offlineCacheStats.cachedWordCount.toLocaleString()} words &amp;{' '}
                        {offlineCacheStats.cachedLessonCount} units cached
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setIsReminderOpen(false);
                        onOpenOfflineModal();
                      }}
                      className="reminder-popover__perm-btn"
                    >
                      Manage Cache
                    </button>
                  </div>

                  {/* Preview / Test Button */}
                  <div className="reminder-popover__footer">
                    <button
                      type="button"
                      onClick={() => {
                        setIsReminderOpen(false);
                        onTriggerPreviewReminder();
                      }}
                      className="button button--secondary button--sm reminder-popover__test-btn"
                    >
                      Test Notification Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <PWAInstallButton />

          <span className="header__action-divider" aria-hidden="true" />

          {isAuthenticated ? (
            <div className="header__user-info">
              <button
                type="button"
                onClick={() => {
                  navigateToProfile();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`header__profile-trigger ${
                  currentPage === 'profile' ? 'header__profile-trigger--active' : ''
                }`}
                title="Open Scholar Profile & Milestone Badges"
              >
                <span className="header__profile-avatar font-noto-sc" aria-hidden="true">
                  学
                </span>
                <span className="header__profile-name">{shortFirstName}</span>
              </button>
            </div>
          ) : (
            <div className="header__auth-buttons">
              <button onClick={onSignInClick} className="header__signin-link">
                Sign In
              </button>
              <button onClick={onSignUpClick} className="button button--primary header__signup-btn">
                Sign Up
              </button>
            </div>
          )}

          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle color theme" title="Toggle theme">
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>

          <div className="header__mobile-menu-toggle">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-button"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <NavLink onClick={handleNavClick(navigateToHome)} isCurrent={currentPage === 'home'}>
            Home
          </NavLink>
          <NavLink onClick={handleNavClick(navigateToLearn)} isCurrent={currentPage === 'learn'}>
            Learn Vocabulary
          </NavLink>
          <NavLink
            onClick={handleNavClick(navigateToLessons)}
            isCurrent={currentPage === 'lessons' || currentPage === 'lessonDetail'}
          >
            Textbook Lessons
          </NavLink>
          <NavLink onClick={handleNavClick(navigateToPractice)} isCurrent={currentPage === 'practice'}>
            Practice Drills
          </NavLink>
          <NavLink onClick={handleNavClick(navigateToQuizzes)} isCurrent={currentPage === 'quizzes'}>
            Quizzes
          </NavLink>
          <NavLink onClick={handleNavClick(navigateToDictionary)} isCurrent={currentPage === 'dictionary'}>
            Dictionary
          </NavLink>
          <div className="mobile-menu__divider"></div>
          <NavLink onClick={handleNavClick(navigateToStudyPlan)} isCurrent={currentPage === 'studyPlan'}>
            Study Plan & Roadmaps
          </NavLink>
          <NavLink onClick={handleNavClick(navigateToAbout)} isCurrent={currentPage === 'about'}>
            About HSK Hub
          </NavLink>
          <div className="mobile-menu__divider"></div>
          <div className="mobile-menu__streak">
            <span>
              Daily Goal: <strong>{todayCount}/{dailyGoalTarget} words</strong>
            </span>
            <span className="mobile-menu__streak-best tabular-nums">{goalProgressPct}%</span>
          </div>
          <div className="mobile-menu__streak">
            <span>
              Daily Streak:{' '}
              <strong>
                {streakData.currentStreak} {streakData.currentStreak === 1 ? 'day' : 'days'}
              </strong>
            </span>
            <span className="mobile-menu__streak-best tabular-nums">Best: {streakData.longestStreak}d</span>
          </div>
          <div className="mobile-menu__streak">
            <span>
              Study Reminder:{' '}
              <strong>{reminderSettings.enabled ? formattedReminderTime : 'Off'}</strong>
            </span>
            <button
              type="button"
              onClick={handleToggleReminder}
              className="reminder-popover__perm-btn"
            >
              {reminderSettings.enabled ? 'Turn Off' : 'Turn On'}
            </button>
          </div>
          <div className="mobile-menu__streak">
            <span>
              Offline Cache:{' '}
              <strong>{offlineCacheStats.cachedWordCount.toLocaleString()} words ready</strong>
            </span>
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenOfflineModal();
              }}
              className="reminder-popover__perm-btn"
            >
              Manage
            </button>
          </div>
          <div className="mobile-menu__divider"></div>
          {isAuthenticated ? (
            <div className="mobile-menu__auth">
              <button
                type="button"
                onClick={() => {
                  navigateToProfile();
                  setIsMobileMenuOpen(false);
                }}
                className="button button--primary"
              >
                Open Scholar Profile ({shortFirstName})
              </button>
              <button
                onClick={() => {
                  onSignOut();
                  setIsMobileMenuOpen(false);
                }}
                className="button button--outline"
              >
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
