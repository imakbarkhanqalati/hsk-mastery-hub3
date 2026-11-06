import React, { useState } from 'react';

export type AuthModalState = 'closed' | 'signin' | 'signup';

interface AuthModalProps {
  state: AuthModalState;
  onClose: () => void;
  onSwitch: () => void;
  onSignIn: (data: { email: string; password?: string; name?: string }) => void;
  onSignUp: (data: { email: string; password?: string; name?: string }) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ state, onClose, onSwitch, onSignIn, onSignUp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (state === 'closed') return null;

  const isSignIn = state === 'signin';
  const title = isSignIn ? 'Sign In to Your Account' : 'Create Your Scholar Account';
  const buttonText = isSignIn ? 'Sign In' : 'Create Account';
  const switchText = isSignIn ? "Don't have an account? Sign Up" : 'Already have an account? Sign In';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    const derivedName =
      name.trim() ||
      (email.includes('@')
        ? email
            .split('@')[0]
            .replace(/[._-]+/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase())
        : 'Mandarin Scholar');

    if (isSignIn) {
      onSignIn({ email, password, name: derivedName });
    } else {
      if (password !== confirmPassword) {
        setErrorMsg('Passwords do not match. Please check and try again.');
        return;
      }
      onSignUp({ email, password, name: derivedName });
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-button" aria-label="Close modal">
          &times;
        </button>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
        </div>
        <form onSubmit={handleSubmit} className="modal-body">
          {!isSignIn && (
            <div className="input-group">
              <label htmlFor="auth-name">Display Name</label>
              <input
                type="text"
                id="auth-name"
                placeholder="e.g. Akbar Qalati"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="scholar@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {!isSignIn && (
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          {errorMsg && (
            <p className="lesson-exercise-feedback lesson-exercise-feedback--incorrect" role="alert">
              {errorMsg}
            </p>
          )}
          <button type="submit" className="button button--primary modal-submit-button">
            {buttonText}
          </button>
        </form>
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
