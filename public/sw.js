var CACHE_NAME = 'profsend-pwa-v1';
var urlsToCache = [
    'top.html',
    'css/style.css',
    'css/bootstrap-4.3.1.css',
    'image/card-img.png',
    'image/en_prof.png',
    'image/favicon.ico',
    'image/image.png',
    'image/img-1.png',
    'image/ja.prof.png',
    'image/prof.png',
    'image/toku.png',
    'script/download.js',
    'script/jquery.js',
    'script/main.js',
    'about.html',
    '13update.html',
    '404.html',
    'font/fa-solid-900.ttf',
    'font/fa-solid-900.woff',
    'font/fa-solid-900.woff2',
    'css/all.min.css',
    'script/materialize.js',
    'css/materialize.css'   
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache.map(url => new Request(url, {credentials: 'same-origin'})));            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});