import React from 'react';
import { formatTime12Hour } from '../utils/reminders';

interface StudyReminderToastProps {
  isOpen: boolean;
  reminderTime: string;
  todayStudiedCount: number;
  dailyGoalTarget: number;
  currentStreak: number;
  isPreview?: boolean;
  onStartPractice: () => void;
  onStartLearn: () => void;
  onSnooze: () => void;
  onDismiss: () => void;
}

const StudyReminderToast: React.FC<StudyReminderToastProps> = ({
  isOpen,
  reminderTime,
  todayStudiedCount,
  dailyGoalTarget,
  currentStreak,
  isPreview = false,
  onStartPractice,
  onStartLearn,
  onSnooze,
  onDismiss,
}) => {
  if (!isOpen) return null;

  const remainingWords = Math.max(0, dailyGoalTarget - todayStudiedCount);
  const formattedTime = formatTime12Hour(reminderTime);

  return (
    <div
      className="study-reminder-toast animate-fade-in"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="study-reminder-toast__glow" aria-hidden="true" />

      <div className="study-reminder-toast__top">
        <div className="study-reminder-toast__badge-group">
          <span className="study-reminder-toast__icon-wrap" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </span>
          <span className="study-reminder-toast__kicker">
            {isPreview ? 'Reminder Preview' : `Daily Study Reminder · ${formattedTime}`}
          </span>
          <span className="study-reminder-toast__seal font-noto-sc">温故知新</span>
        </div>

        <button
          type="button"
          onClick={onDismiss}
          className="study-reminder-toast__close"
          aria-label="Dismiss study reminder"
          title="Dismiss"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className="study-reminder-toast__body">
        <h4 className="study-reminder-toast__title">
          {todayStudiedCount === 0
            ? "You haven't practiced Mandarin yet today!"
            : `Keep going — ${remainingWords} ${remainingWords === 1 ? 'word' : 'words'} left for today's goal!`}
        </h4>
        <p className="study-reminder-toast__desc">
          {remainingWords > 0
            ? `Complete a quick session to learn ${remainingWords} more ${
                remainingWords === 1 ? 'word' : 'words'
              } (${todayStudiedCount}/${dailyGoalTarget} today)${
                currentStreak > 0 ? ` and protect your ${currentStreak}-day streak.` : '.'
              }`
            : `Your ${formattedTime} study check-in is here. Review a few flashcards to reinforce retention!`}
        </p>
      </div>

      <div className="study-reminder-toast__actions">
        <button
          type="button"
          onClick={onStartPractice}
          className="button button--primary button--sm study-reminder-toast__primary-btn"
        >
          Practice Now →
        </button>
        <button
          type="button"
          onClick={onStartLearn}
          className="study-reminder-toast__secondary-btn"
        >
          Browse Words
        </button>
        <button
          type="button"
          onClick={onSnooze}
          className="study-reminder-toast__snooze-btn tabular-nums"
          title="Remind me again in 15 minutes"
        >
          Snooze 15m
        </button>
      </div>
    </div>
  );
};

export default StudyReminderToast;
