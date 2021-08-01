var CACHE_NAME = "profsend-pwa-v1";
var urlsToCache = [
  "/top.html",
  "/about.html",
  "/13update.html",
  "/top.pwa.html",
  "/css/style.css",
  "/image/card-img.png",
  "/image/en_prof.png",
  "/image/favicon.ico",
  "/image/img-1.png",
  "/image/ja_prof.png",
  "/image/prof.png",
  "/image/toku.png",
  "/script/download.js",
  "/script/jquery.js",
  "/script/main.js",
  "/about.pwa.html",
  "/13update.pwa.html",
  "/font/fa-solid-900.ttf",
  "/font/fa-solid-900.woff",
  "/font/fa-solid-900.woff2",
  "/css/all.min.css",
  "/script/materialize.js",
  "/css/materialize.css",
  "/script/dist/scripts-build.js",
  "/script/dist/modules-build.js",
  "/script/dist/scaner-build.js",
  "/image/icon128.png",
  "/image/icon144.png",
  "/image/icon192.png",
  "/image/icon384.png",
  "/image/icon512.png",
  "/image/icon72.png",
  "/image/icon96.png",
  "/manifest.json",
  "/scaner.html",
  "/image/bomb.png",
  "/image/sword.png",
  "/image/shield.png",
  "/image/Tspin.png",
  "/image/twiCard.png",
  "/image/psv4-black.png",
  "/image/psv4-white.png",
  "/image/psv4-simbol.png",
  "/font/Boku2-Bold.otf",
  "/font/アプリ明朝.otf",
  "failed.html",
  "/script/jquery.js",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(
        urlsToCache.map(
          (url) => new Request(url, { credentials: "same-origin" })
        )
      );
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response ? response : fetch(event.request);
    })
  );
});
