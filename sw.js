const CACHE = 'rdm-v7500';
const CORE = [
  './',
  'index.html',
  'style.css',
  'rdm-v6890-fix.css',
  'assets/rdm-logo.png',
  'pwa-192x192.png',
  'pwa-512x512.png',
  'apple-touch-icon.png'
];
self.addEventListener('install', e =>
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()))
);
self.addEventListener('activate', e =>
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  )
);
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(r => {
        if (r && r.status === 200) {
          const c = r.clone();
          caches.open(CACHE).then(x => x.put(e.request, c));
        }
        return r;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('/index.html')))
  );
});
