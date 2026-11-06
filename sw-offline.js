const CACHE_VERSION = 'v1';
const APP_SHELL_CACHE = `hsk-hub-app-shell-${CACHE_VERSION}`;
const VOCAB_DATA_CACHE = `hsk-hub-core-vocab-${CACHE_VERSION}`;
const HANZI_STROKE_CACHE = 'hanzi-stroke-data-cache';
const FONTS_CACHE = 'google-fonts-cache';

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.svg',
  '/favicon.ico',
  '/pwa-192x192.png',
  '/pwa-512x512.png',
  '/apple-touch-icon.png',
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches
      .open(APP_SHELL_CACHE)
      .then(cache => cache.addAll(CORE_ASSETS))
      .catch(() => {
        // Ignore partial install errors in dev
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(
          keys.map(key => {
            if (
              key.startsWith('hsk-hub-') &&
              key !== APP_SHELL_CACHE &&
              key !== VOCAB_DATA_CACHE
            ) {
              return caches.delete(key);
            }
            return undefined;
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // 1. Offline Core Vocabulary & Lessons Virtual JSON endpoints
  if (url.pathname.startsWith('/offline-cache/')) {
    event.respondWith(
      caches.open(VOCAB_DATA_CACHE).then(async cache => {
        const cached = await cache.match(request);
        if (cached) return cached;
        return fetch(request);
      })
    );
    return;
  }

  // 2. Hanzi Writer Stroke Data CDN (CacheFirst for offline stroke order animations)
  if (url.hostname === 'cdn.jsdelivr.net' && url.pathname.includes('hanzi-writer-data')) {
    event.respondWith(
      caches.open(HANZI_STROKE_CACHE).then(async cache => {
        const cached = await cache.match(request);
        if (cached) return cached;
        try {
          const response = await fetch(request);
          if (response && response.status === 200) {
            cache.put(request, response.clone());
          }
          return response;
        } catch (err) {
          if (cached) return cached;
          throw err;
        }
      })
    );
    return;
  }

  // 3. Google Fonts (CacheFirst)
  if (
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com'
  ) {
    event.respondWith(
      caches.open(FONTS_CACHE).then(async cache => {
        const cached = await cache.match(request);
        if (cached) return cached;
        try {
          const response = await fetch(request);
          if (response && (response.status === 200 || response.type === 'opaque')) {
            cache.put(request, response.clone());
          }
          return response;
        } catch (err) {
          if (cached) return cached;
          throw err;
        }
      })
    );
    return;
  }

  // 4. Same-origin Assets & App Shell (NetworkFirst with Cache Fallback for dev/SPA, CacheFirst for static icons)
  if (url.origin === self.location.origin && !url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(APP_SHELL_CACHE).then(cache => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(async () => {
          const cachedResponse = await caches.match(request);
          if (cachedResponse) return cachedResponse;
          if (request.mode === 'navigate') {
            const rootShell = await caches.match('/');
            if (rootShell) return rootShell;
            const indexShell = await caches.match('/index.html');
            if (indexShell) return indexShell;
          }
          return new Response('Offline — Resource not cached', {
            status: 503,
            statusText: 'Offline',
          });
        })
    );
  }
});
