self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('furious-fowl-v1').then(cache => {
      return cache.addAll(['/furious-fowl/', '/furious-fowl/index.html']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
