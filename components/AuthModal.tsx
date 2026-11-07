import React, { useState } from 'react';
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  User,
} from 'firebase/auth';
import { auth, googleAuthProvider, facebookAuthProvider } from '../src/lib/firebase';

export type AuthModalState = 'closed' | 'signin' | 'signup';

export interface AuthUserData {
  uid?: string;
  email?: string;
  name?: string;
  photoUrl?: string;
  provider?: 'google' | 'facebook' | 'email';
}

interface AuthModalProps {
  state: AuthModalState;
  onClose: () => void;
  onSwitch: () => void;
  onSignIn: (data: AuthUserData) => void;
  onSignUp: (data: AuthUserData) => void;
}

function formatFirebaseAuthError(error: any): string {
  const code = String(error?.code || '');
  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Invalid email or password. Please double-check your credentials or reset your password.';
    case 'auth/email-already-in-use':
      return 'An account with this email already exists. Try signing in or using Google / Facebook.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters long.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/account-exists-with-different-credential':
      return 'An account already exists with this email using a different sign-in provider (e.g. Google or Email).';
    case 'auth/popup-closed-by-user':
      return 'The sign-in window was closed before completing authentication.';
    case 'auth/popup-blocked':
      return 'Your browser blocked the sign-in popup. Please allow popups for this site and try again.';
    case 'auth/too-many-requests':
      return 'Too many unsuccessful attempts. Please wait a moment or reset your password.';
    default:
      return error?.message || 'Unable to complete authentication. Please try again.';
  }
}

function deriveScholarName(user: User, fallbackName?: string): string {
  if (fallbackName && fallbackName.trim()) {
    return fallbackName.trim();
  }
  if (user.displayName && user.displayName.trim()) {
    return user.displayName.trim();
  }
  if (user.email && user.email.includes('@')) {
    return user.email
      .split('@')[0]
      .replace(/[._-]+/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
  }
  return 'Mandarin Scholar';
}

const AuthModal: React.FC<AuthModalProps> = ({
  state,
  onClose,
  onSwitch,
  onSignIn,
  onSignUp,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeLoading, setActiveLoading] = useState<'google' | 'facebook' | 'email' | 'reset' | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (state === 'closed') return null;

  const isSignIn = state === 'signin';
  const title = isSignIn ? 'Welcome Back, Scholar' : 'Create Scholar Account';
  const subtitle = isSignIn
    ? 'Sign in to synchronize your HSK 1–6 mastery, bookmarks, and daily study streak.'
    : 'Join HSK Hub to save your vocabulary progress, milestones, and daily study goals.';

  const resetFeedback = () => {
    setErrorMsg(null);
    setSuccessMsg(null);
  };

  const handleOAuthSignIn = async (providerType: 'google' | 'facebook') => {
    resetFeedback();
    setActiveLoading(providerType);
    try {
      const provider = providerType === 'google' ? googleAuthProvider : facebookAuthProvider;
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const scholarName = deriveScholarName(user);
      const payload: AuthUserData = {
        uid: user.uid,
        email: user.email || undefined,
        name: scholarName,
        photoUrl: user.photoURL || undefined,
        provider: providerType,
      };
      if (isSignIn) {
        onSignIn(payload);
      } else {
        onSignUp(payload);
      }
    } catch (error: any) {
      setErrorMsg(formatFirebaseAuthError(error));
    } finally {
      setActiveLoading(null);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetFeedback();

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setErrorMsg('Please enter your email address.');
      return;
    }

    if (!isSignIn) {
      if (password.length < 6) {
        setErrorMsg('Password must be at least 6 characters long.');
        return;
      }
      if (password !== confirmPassword) {
        setErrorMsg('Passwords do not match. Please check and try again.');
        return;
      }
    }

    setActiveLoading('email');
    try {
      if (isSignIn) {
        const credential = await signInWithEmailAndPassword(auth, trimmedEmail, password);
        const scholarName = deriveScholarName(credential.user);
        onSignIn({
          uid: credential.user.uid,
          email: credential.user.email || trimmedEmail,
          name: scholarName,
          photoUrl: credential.user.photoURL || undefined,
          provider: 'email',
        });
      } else {
        const credential = await createUserWithEmailAndPassword(auth, trimmedEmail, password);
        const scholarName = deriveScholarName(credential.user, name);
        if (name.trim()) {
          try {
            await updateProfile(credential.user, { displayName: name.trim() });
          } catch {
            // Non-blocking profile display name update
          }
        }
        onSignUp({
          uid: credential.user.uid,
          email: credential.user.email || trimmedEmail,
          name: scholarName,
          photoUrl: credential.user.photoURL || undefined,
          provider: 'email',
        });
      }
    } catch (error: any) {
      setErrorMsg(formatFirebaseAuthError(error));
    } finally {
      setActiveLoading(null);
    }
  };

  const handleForgotPassword = async () => {
    resetFeedback();
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setErrorMsg('Enter your email address above first, then click "Forgot password?" to receive a reset link.');
      return;
    }
    setActiveLoading('reset');
    try {
      await sendPasswordResetEmail(auth, trimmedEmail);
      setSuccessMsg(`Password reset instructions have been sent to ${trimmedEmail}.`);
    } catch (error: any) {
      setErrorMsg(formatFirebaseAuthError(error));
    } finally {
      setActiveLoading(null);
    }
  };

  const isBusy = activeLoading !== null;

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

        {/* Mode Switcher Tabs (Sign In / Sign Up) */}
        <div className="auth-mode-tabs" role="tablist" aria-label="Authentication mode">
          <button
            type="button"
            role="tab"
            aria-selected={isSignIn}
            className={`auth-mode-tab ${isSignIn ? 'auth-mode-tab--active' : ''}`}
            onClick={() => {
              if (!isSignIn) {
                resetFeedback();
                onSwitch();
              }
            }}
          >
            Sign In
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={!isSignIn}
            className={`auth-mode-tab ${!isSignIn ? 'auth-mode-tab--active' : ''}`}
            onClick={() => {
              if (isSignIn) {
                resetFeedback();
                onSwitch();
              }
            }}
          >
            Create Account
          </button>
        </div>

        <div className="modal-body auth-modal-body">
          {/* OAuth Providers Grid: Google & Facebook */}
          <div className="auth-oauth-grid">
            <button
              type="button"
              onClick={() => handleOAuthSignIn('google')}
              disabled={isBusy}
              className="auth-provider-btn auth-provider-btn--google"
            >
              <svg
                className="auth-provider-btn__icon"
                width="19"
                height="19"
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
              <span>{activeLoading === 'google' ? 'Connecting...' : 'Google'}</span>
            </button>

            <button
              type="button"
              onClick={() => handleOAuthSignIn('facebook')}
              disabled={isBusy}
              className="auth-provider-btn auth-provider-btn--facebook"
            >
              <svg
                className="auth-provider-btn__icon"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="#1877F2"
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
              <span>{activeLoading === 'facebook' ? 'Connecting...' : 'Facebook'}</span>
            </button>
          </div>

          <div className="auth-divider" role="separator">
            <span>or continue with email</span>
          </div>

          {errorMsg && (
            <div className="auth-feedback auth-feedback--error" role="alert">
              {errorMsg}
            </div>
          )}

          {successMsg && (
            <div className="auth-feedback auth-feedback--success" role="status">
              {successMsg}
            </div>
          )}

          <form onSubmit={handleEmailSubmit} className="auth-email-form">
            {!isSignIn && (
              <div className="auth-field">
                <label htmlFor="auth-name" className="auth-field__label">
                  Scholar Display Name
                </label>
                <input
                  type="text"
                  id="auth-name"
                  className="auth-field__input"
                  placeholder="e.g. Akbar Qalati"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  autoComplete="name"
                />
              </div>
            )}

            <div className="auth-field">
              <label htmlFor="auth-email" className="auth-field__label">
                Email Address
              </label>
              <input
                type="email"
                id="auth-email"
                className="auth-field__input"
                placeholder="scholar@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <div className="auth-field">
              <div className="auth-field__label-row">
                <label htmlFor="auth-password" className="auth-field__label">
                  Password
                </label>
                {isSignIn && (
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    disabled={isBusy}
                    className="auth-forgot-link"
                  >
                    {activeLoading === 'reset' ? 'Sending...' : 'Forgot password?'}
                  </button>
                )}
              </div>
              <div className="auth-password-wrap">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="auth-password"
                  className="auth-field__input auth-field__input--password"
                  placeholder={isSignIn ? 'Enter your password' : 'At least 6 characters'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  minLength={isSignIn ? undefined : 6}
                  autoComplete={isSignIn ? 'current-password' : 'new-password'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="auth-password-toggle"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {!isSignIn && (
              <div className="auth-field">
                <label htmlFor="auth-confirm-password" className="auth-field__label">
                  Confirm Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="auth-confirm-password"
                  className="auth-field__input"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                  autoComplete="new-password"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isBusy}
              className="button button--primary auth-submit-btn"
            >
              {activeLoading === 'email'
                ? isSignIn
                  ? 'Signing In...'
                  : 'Creating Account...'
                : isSignIn
                  ? 'Sign In with Email'
                  : 'Create Scholar Account'}
            </button>
          </form>
        </div>

        <div className="modal-footer auth-modal-footer">
          <button
            type="button"
            onClick={() => {
              resetFeedback();
              onSwitch();
            }}
            className="modal-switch-button"
          >
            {isSignIn
              ? "Don't have a scholar account? Sign Up"
              : 'Already have a scholar account? Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
