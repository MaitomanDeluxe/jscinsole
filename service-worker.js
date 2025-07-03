self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('static').then(cache => {
      return cache.addAll(['.', 'index.html', 'manifest.json', 'splash.png', 'favicon.ico', 'apple-touch-icon.png']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
