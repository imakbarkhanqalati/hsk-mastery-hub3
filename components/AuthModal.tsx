import React, { useState } from 'react';

export type AuthModalState = 'closed' | 'signin' | 'signup';

interface AuthModalProps {
  state: AuthModalState;
  onClose: () => void;
  onSwitch: () => void;
  onSignIn: (data: any) => void;
  onSignUp: (data: any) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ state, onClose, onSwitch, onSignIn, onSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    if (state === 'closed') return null;

    const isSignIn = state === 'signin';
    const title = isSignIn ? 'Sign In to Your Account' : 'Create a New Account';
    const buttonText = isSignIn ? 'Sign In' : 'Sign Up';
    const switchText = isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = { email, password };
        if (isSignIn) {
            onSignIn(formData);
        } else {
            if (password !== confirmPassword) {
                alert("Passwords don't match!");
                return;
            }
            onSignUp(formData);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="modal-close-button">&times;</button>
                <div className="modal-header">
                    <h2 className="modal-title">{title}</h2>
                </div>
                <form onSubmit={handleSubmit} className="modal-body">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
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
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <button type="submit" className="button button--primary modal-submit-button">{buttonText}</button>
                </form>
                <div className="modal-footer">
                    <button onClick={onSwitch} className="modal-switch-button">
                        {switchText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
