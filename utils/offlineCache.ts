import { useEffect, useState } from 'react';
import { registerSW } from 'virtual:pwa-register';
import { vocabData } from '../data/vocab';
import { lessons as lessonsData } from '../data/lessons';

export interface OfflineCacheStats {
  swRegistered: boolean;
  vocabCached: boolean;
  cachedWordCount: number;
  cachedLessonCount: number;
  cachedStrokeCount: number;
  lastSyncedAt: string | null;
}

const VOCAB_DATA_CACHE = 'hsk-hub-core-vocab-v1';
const APP_SHELL_CACHE = 'hsk-hub-app-shell-v1';
const HANZI_STROKE_CACHE = 'hanzi-stroke-data-cache';
const OFFLINE_META_KEY = 'hsk_hub_offline_cache_meta_v1';

const CORE_SHELL_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.svg',
  '/favicon.ico',
  '/pwa-192x192.png',
  '/pwa-512x512.png',
  '/apple-touch-icon.png',
];

export function useOnlineStatus(): boolean {
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

export async function initializeOfflineServiceWorker(): Promise<boolean> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return false;
  }

  try {
    // 1. Register via VitePWA virtual module
    registerSW({
      immediate: true,
      onRegisteredSW() {
        window.dispatchEvent(new CustomEvent('hsk-sw-registered'));
      },
    });
  } catch {
    // Fallback if virtual module registration fails in custom dev middleware
  }

  try {
    // 2. Ensure our offline service worker is registered if no active controller exists yet
    const existingReg = await navigator.serviceWorker.getRegistration();
    if (!existingReg) {
      await navigator.serviceWorker.register('/sw-offline.js', { scope: '/' });
    }
    return true;
  } catch {
    return false;
  }
}

export async function syncCoreVocabAndAssetsToCache(): Promise<OfflineCacheStats> {
  const totalWords = Object.values(vocabData).reduce(
    (sum, list) => sum + (Array.isArray(list) ? list.length : 0),
    0
  );
  const totalLessons = lessonsData.length;
  const nowIso = new Date().toISOString();

  if (typeof window === 'undefined' || !('caches' in window)) {
    return {
      swRegistered: false,
      vocabCached: false,
      cachedWordCount: totalWords,
      cachedLessonCount: totalLessons,
      cachedStrokeCount: 0,
      lastSyncedAt: nowIso,
    };
  }

  try {
    // 1. Cache complete HSK 1–6 Vocabulary & Lessons as structured JSON in Cache Storage
    const vocabCache = await caches.open(VOCAB_DATA_CACHE);

    const vocabPayload = JSON.stringify({
      version: 1,
      cachedAt: nowIso,
      totalWords,
      vocabData,
    });
    await vocabCache.put(
      new Request('/offline-cache/hsk-vocabulary.json'),
      new Response(vocabPayload, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      })
    );

    const lessonsPayload = JSON.stringify({
      version: 1,
      cachedAt: nowIso,
      totalLessons,
      lessons: lessonsData,
    });
    await vocabCache.put(
      new Request('/offline-cache/hsk-lessons.json'),
      new Response(lessonsPayload, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      })
    );

    // 2. Cache core app shell & static assets
    const shellCache = await caches.open(APP_SHELL_URLS_CACHE_NAME());
    await Promise.allSettled(
      CORE_SHELL_URLS.map(async url => {
        const res = await fetch(url, { cache: 'no-cache' });
        if (res.ok) {
          await shellCache.put(url, res.clone());
        }
      })
    );

    // 3. Count any cached Hanzi stroke order JSON files
    const strokeCache = await caches.open(HANZI_STROKE_CACHE);
    const strokeKeys = await strokeCache.keys();

    const swReg =
      'serviceWorker' in navigator
        ? Boolean(await navigator.serviceWorker.getRegistration())
        : false;

    const stats: OfflineCacheStats = {
      swRegistered: swReg,
      vocabCached: true,
      cachedWordCount: totalWords,
      cachedLessonCount: totalLessons,
      cachedStrokeCount: strokeKeys.length,
      lastSyncedAt: nowIso,
    };

    try {
      localStorage.setItem(OFFLINE_META_KEY, JSON.stringify(stats));
    } catch {
      // ignore storage quota errors
    }

    window.dispatchEvent(new CustomEvent('offline-cache-updated', { detail: stats }));
    return stats;
  } catch (err) {
    console.error('Error caching core HSK data for offline review:', err);
    return getOfflineCacheStats();
  }
}

function APP_SHELL_URLS_CACHE_NAME() {
  return APP_SHELL_CACHE;
}

export async function precacheEssentialHanziStrokes(
  limit: number = 40
): Promise<OfflineCacheStats> {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return getOfflineCacheStats();
  }

  try {
    const strokeCache = await caches.open(HANZI_STROKE_CACHE);
    // Collect unique single Hanzi characters from HSK 1 & 2
    const charSet = new Set<string>();
    const hsk1And2 = [...(vocabData[1] || []), ...(vocabData[2] || [])];
    for (const word of hsk1And2) {
      for (const ch of Array.from(word.char)) {
        if (/[\u4e00-\u9fff]/.test(ch)) {
          charSet.add(ch);
          if (charSet.size >= limit) break;
        }
      }
      if (charSet.size >= limit) break;
    }

    const chars = Array.from(charSet);
    await Promise.allSettled(
      chars.map(async ch => {
        const url = `https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0.1/${encodeURIComponent(
          ch
        )}.json`;
        const existing = await strokeCache.match(url);
        if (!existing) {
          const res = await fetch(url);
          if (res.ok) {
            await strokeCache.put(url, res.clone());
          }
        }
      })
    );

    return await syncCoreVocabAndAssetsToCache();
  } catch {
    return getOfflineCacheStats();
  }
}

export async function getOfflineCacheStats(): Promise<OfflineCacheStats> {
  const totalWords = Object.values(vocabData).reduce(
    (sum, list) => sum + (Array.isArray(list) ? list.length : 0),
    0
  );
  const totalLessons = lessonsData.length;

  let savedLastSynced: string | null = null;
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const raw = localStorage.getItem(OFFLINE_META_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.lastSyncedAt) savedLastSynced = String(parsed.lastSyncedAt);
      }
    } catch {
      // ignore
    }
  }

  if (typeof window === 'undefined' || !('caches' in window)) {
    return {
      swRegistered: false,
      vocabCached: false,
      cachedWordCount: totalWords,
      cachedLessonCount: totalLessons,
      cachedStrokeCount: 0,
      lastSyncedAt: savedLastSynced,
    };
  }

  try {
    const vocabCache = await caches.open(VOCAB_DATA_CACHE);
    const hasVocab = Boolean(
      await vocabCache.match('/offline-cache/hsk-vocabulary.json')
    );
    const strokeCache = await caches.open(HANZI_STROKE_CACHE);
    const strokeKeys = await strokeCache.keys();
    const swReg =
      'serviceWorker' in navigator
        ? Boolean(await navigator.serviceWorker.getRegistration())
        : false;

    return {
      swRegistered: swReg,
      vocabCached: hasVocab,
      cachedWordCount: totalWords,
      cachedLessonCount: totalLessons,
      cachedStrokeCount: strokeKeys.length,
      lastSyncedAt: savedLastSynced,
    };
  } catch {
    return {
      swRegistered: false,
      vocabCached: false,
      cachedWordCount: totalWords,
      cachedLessonCount: totalLessons,
      cachedStrokeCount: 0,
      lastSyncedAt: savedLastSynced,
    };
  }
}
