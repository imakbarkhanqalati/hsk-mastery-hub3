import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../src/lib/firebase';

export type AuthModalState = 'closed' | 'signin' | 'signup';

export interface AuthUserData {
  uid?: string;
  email?: string;
  name?: string;
  photoUrl?: string;
}

interface AuthModalProps {
  state: AuthModalState;
  onClose: () => void;
  onSwitch: () => void;
  onSignIn: (data: AuthUserData) => void;
  onSignUp: (data: AuthUserData) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ state, onClose, onSwitch, onSignIn }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (state === 'closed') return null;

  const isSignIn = state === 'signin';
  const title = isSignIn ? 'Sign In to HSK Hub' : 'Create Your Scholar Account';
  const subtitle = isSignIn
    ? 'Sign in with Google to synchronize your HSK 1–6 mastery, bookmarks, and daily study streak across devices.'
    : 'Join HSK Hub with your Google account to save your vocabulary progress, milestones, and daily study goals.';
  const switchText = isSignIn
    ? "New to HSK Hub? Create your scholar account"
    : 'Already have a scholar account? Sign In';

  const handleGoogleSignIn = async () => {
    setErrorMsg(null);
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      const derivedName =
        user.displayName ||
        (user.email
          ? user.email
              .split('@')[0]
              .replace(/[._-]+/g, ' ')
              .replace(/\b\w/g, c => c.toUpperCase())
          : 'Mandarin Scholar');

      onSignIn({
        uid: user.uid,
        email: user.email || undefined,
        name: derivedName,
        photoUrl: user.photoURL || undefined,
      });
    } catch (error: any) {
      const code = error?.code || '';
      if (code === 'auth/popup-closed-by-user') {
        setErrorMsg('The sign-in window was closed before completing authentication. Please try again.');
      } else if (code === 'auth/popup-blocked') {
        setErrorMsg('Your browser blocked the sign-in popup. Please allow popups for this site and try again.');
      } else {
        setErrorMsg(error?.message || 'Unable to complete Google Sign-In. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content auth-modal-card" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-button" aria-label="Close modal">
          &times;
        </button>
        <div className="modal-header auth-modal-header">
          <div className="auth-modal-seal" aria-hidden="true">
            汉
          </div>
          <h2 className="modal-title">{title}</h2>
          <p className="auth-modal-subtitle">{subtitle}</p>
        </div>

        <div className="modal-body auth-modal-body">
          {errorMsg && (
            <p className="lesson-exercise-feedback lesson-exercise-feedback--incorrect" role="alert">
              {errorMsg}
            </p>
          )}

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="auth-google-btn"
          >
            <svg
              className="auth-google-btn__icon"
               width="20"
              height="20"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
              />
            </svg>
            <span>
              {isLoading
                ? 'Connecting to Google...'
                : isSignIn
                  ? 'Continue with Google'
                  : 'Sign Up with Google'}
            </span>
          </button>

          <div className="auth-modal-features">
            <div className="auth-modal-feature-item">
              <span className="auth-modal-feature-check">✓</span>
              <span>Cloud-synced HSK 1–6 mastered words &amp; bookmarks</span>
            </div>
            <div className="auth-modal-feature-item">
              <span className="auth-modal-feature-check">✓</span>
              <span>Persistent daily study streak &amp; 12 scholar milestones</span>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            onClick={() => {
              setErrorMsg(null);
              onSwitch();
            }}
            className="modal-switch-button"
          >
            {switchText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
