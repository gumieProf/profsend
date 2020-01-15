// キャッシュファイルの指定
var CACHE_NAME = 'pwa-profsend-caches';
var urlsToCache = [
    '/profsend.herokuapp.com/',
];

// インストール処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
    console.log("キャッシュのインストール完了");
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
    console.log("キャッシュのロード完了")
});