var CACHE_NAME = "profsend-pwa-v1";
var urlsToCache = [
  "top.pwa.html",
  "css/style.css",
  "css/bootstrap-4.3.1.css",
  "image/card-img.png",
  "image/en_prof.png",
  "image/favicon.ico",
  "image/img-1.png",
  "image/ja_prof.png",
  "image/prof.png",
  "image/toku.png",
  "script/download.js",
  "script/jquery.js",
  "script/main.js",
  "about.pwa.html",
  "13update.pwa.html",
  "font/fa-solid-900.ttf",
  "font/fa-solid-900.woff",
  "font/fa-solid-900.woff2",
  "css/all.min.css",
  "script/materialize.js",
  "css/materialize.css",
  "script/script-build.js",
  "script/modules-build.js",
  "font/NotoSansJP-Medium.ttf",
  "font/NotoSerifJP-Medium-Canv.woff",
  "font/NotoSansJP-Medium.ttf",
  "font/NotoSansJP-Medium.woff",
  "image/icon-128.png",
  "image/icon-144.png",
  "image/icon-192.png",
  "image/icon-384.png",
  "image/icon-512.png",
  "image/icon-72.png",
  "image/icon-96.png",
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
