import React, { useState } from 'react';
import { usePWAInstall } from '../utils/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) {
    return null;
  }

  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={install}
        className="pwa-install-btn"
        title="Install HSK Mastery Hub for offline access"
      >
        <svg
          className="pwa-install-btn__icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        <span>Install App</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowIOSGuide(true)}
          className="pwa-install-btn pwa-install-btn--ios"
          title="Install HSK Hub on iPhone or iPad"
        >
          <svg
            className="pwa-install-btn__icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          <span>Install on iOS</span>
        </button>

        {showIOSGuide && (
          <div className="modal-overlay" onClick={() => setShowIOSGuide(false)}>
            <div
              className="modal-content pwa-ios-modal animate-fade-in"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="pwa-ios-modal__title">Install HSK Hub on iPhone / iPad</h3>
              <p className="pwa-ios-modal__desc">
                1. Tap the <strong>Share</strong> icon in your Safari toolbar.
                <br />
                2. Scroll down and tap <strong>Add to Home Screen</strong> to use HSK Hub offline.
              </p>
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="button button--primary pwa-ios-modal__close"
              >
                Got It
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};

export default PWAInstallButton;
