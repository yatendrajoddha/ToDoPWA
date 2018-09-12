var CACHE_NAME = 'ToDo-V1.4';
var urlsToCache = [
'.',
'index.html',
'Scripts/index.js',
'Scripts/app.js',
'Scripts/jquery.min.js',
'css/style.css',
'favicon.ico',
'manifest.json',
'img/todo - 60.png',
'img/todo - 114.png',
'img/todo - 152.png'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            console.log('Opend cache');
            return cache.addAll(urlsToCache);
        }));
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        }));
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
