const CACHE_NAME = 'fragrance-manifest-cache-v1';
const urlsToCache = [
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  // Include all your images from the mantras folder here for offline access
  // This list should be dynamically generated at build time for large number of images
  './mantras/image1.png',
  './mantras/ChatGPT Image Jun 2, 2025, 08_54_06 PM.png',
  './mantras/ChatGPT Image Jun 2, 2025, 08_54_11 PM.png',
  './mantras/ChatGPT Image Jun 2, 2025, 08_54_15 PM.png',
  './mantras/ChatGPT Image Jun 2, 2025, 09_00_32 PM.png',
  './mantras/ChatGPT Image Jun 2, 2025, 09_24_31 PM.png',
  './mantras/ChatGPT Image Jun 2, 2025, 09_28_05 PM.png',
  './mantras/ChatGPT Image Jun 2, 2025, 09_33_38 PM.png',
  './mantras/ChatGPT Image Jun 2, 2025, 09_38_42 PM.png',
  // ... and so on for all images
  './icons/icon-192x192.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});