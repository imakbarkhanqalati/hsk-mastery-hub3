import React, { useState } from 'react';
import {
  OfflineCacheStats,
  useOnlineStatus,
  syncCoreVocabAndAssetsToCache,
  precacheEssentialHanziStrokes,
} from '../utils/offlineCache';

interface OfflineStatusBannerProps {
  cacheStats: OfflineCacheStats;
  onUpdateStats: (stats: OfflineCacheStats) => void;
  isPanelOpen: boolean;
  onClosePanel: () => void;
}

const OfflineStatusBanner: React.FC<OfflineStatusBannerProps> = ({
  cacheStats,
  onUpdateStats,
  isPanelOpen,
  onClosePanel,
}) => {
  const isOnline = useOnlineStatus();
  const [isSyncing, setIsSyncing] = useState(false);
  const [isCachingStrokes, setIsCachingStrokes] = useState(false);

  const handleRefreshCache = async () => {
    setIsSyncing(true);
    try {
      const updated = await syncCoreVocabAndAssetsToCache();
      onUpdateStats(updated);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleCacheStrokes = async () => {
    setIsCachingStrokes(true);
    try {
      const updated = await precacheEssentialHanziStrokes(45);
      onUpdateStats(updated);
    } finally {
      setIsCachingStrokes(false);
    }
  };

  const formattedSyncTime = cacheStats.lastSyncedAt
    ? new Date(cacheStats.lastSyncedAt).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    : 'Just now';

  return (
    <>
      {/* Automatic Floating Banner when Browser is Offline */}
      {!isOnline && (
        <div className="offline-connectivity-banner animate-fade-in" role="status" aria-live="polite">
          <span className="offline-connectivity-banner__dot" aria-hidden="true" />
          <div className="offline-connectivity-banner__text">
            <strong>Offline Review Mode Active</strong>
            <span>
              Using locally cached HSK 1–6 vocabulary ({cacheStats.cachedWordCount.toLocaleString()}{' '}
              words) &amp; {cacheStats.cachedLessonCount} lessons.
            </span>
          </div>
        </div>
      )}

      {/* Detailed Offline Cache & Service Worker Modal / Drawer when opened from Header */}
      {isPanelOpen && (
        <div className="modal-overlay" onClick={onClosePanel}>
          <div
            className="modal-content offline-cache-modal animate-fade-in"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="offline-cache-modal-title"
          >
            <div className="offline-cache-modal__header">
              <div className="offline-cache-modal__title-wrap">
                <span
                  className={`offline-cache-modal__badge ${
                    isOnline ? 'offline-cache-modal__badge--online' : 'offline-cache-modal__badge--offline'
                  }`}
                >
                  {isOnline ? '● Online · Cached for Offline' : '● Offline Review Mode'}
                </span>
                <h3 id="offline-cache-modal-title" className="offline-cache-modal__title">
                  Offline Review &amp; Service Worker Cache
                </h3>
                <p className="offline-cache-modal__subtitle">
                  Core HSK 1–6 vocabulary, textbook lessons, and app assets are stored locally on
                  your device so you can review flashcards, dictionary entries, and quizzes without
                  an internet connection.
                </p>
              </div>
              <button
                type="button"
                onClick={onClosePanel}
                className="study-reminder-toast__close"
                aria-label="Close offline cache dialog"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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

            <div className="offline-cache-modal__grid">
              <div className="offline-cache-stat-card">
                <span className="offline-cache-stat-card__label">HSK 1–6 Lexicon</span>
                <span className="offline-cache-stat-card__value tabular-nums">
                  {cacheStats.cachedWordCount.toLocaleString()} Words
                </span>
                <span className="offline-cache-stat-card__status">
                  {cacheStats.vocabCached ? '✓ Cached in Storage' : '✓ Bundled & Ready'}
                </span>
              </div>

              <div className="offline-cache-stat-card">
                <span className="offline-cache-stat-card__label">Textbook Curriculum</span>
                <span className="offline-cache-stat-card__value tabular-nums">
                  {cacheStats.cachedLessonCount} Units
                </span>
                <span className="offline-cache-stat-card__status">✓ Dialogues &amp; Grammar Ready</span>
              </div>

              <div className="offline-cache-stat-card">
                <span className="offline-cache-stat-card__label">Stroke Order Data</span>
                <span className="offline-cache-stat-card__value tabular-nums">
                  {cacheStats.cachedStrokeCount} Hanzi
                </span>
                <span className="offline-cache-stat-card__status">
                  Auto-cached as you view characters
                </span>
              </div>

              <div className="offline-cache-stat-card">
                <span className="offline-cache-stat-card__label">Service Worker</span>
                <span className="offline-cache-stat-card__value tabular-nums">
                  {cacheStats.swRegistered ? 'Active' : 'Ready'}
                </span>
                <span className="offline-cache-stat-card__status tabular-nums">
                  Synced: {formattedSyncTime}
                </span>
              </div>
            </div>

            <div className="offline-cache-modal__actions">
              <button
                type="button"
                onClick={handleRefreshCache}
                disabled={isSyncing}
                className="button button--primary button--sm"
              >
                {isSyncing ? 'Syncing Core HSK Data...' : 'Sync Core HSK Data Now'}
              </button>

              <button
                type="button"
                onClick={handleCacheStrokes}
                disabled={isCachingStrokes || !isOnline}
                className="button button--secondary button--sm"
                title="Pre-download stroke order animations for essential HSK 1-2 characters"
              >
                {isCachingStrokes
                  ? 'Caching Stroke Animations...'
                  : 'Pre-Cache Essential Stroke Order'}
              </button>

              <button
                type="button"
                onClick={onClosePanel}
                className="study-reminder-toast__secondary-btn"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OfflineStatusBanner;
