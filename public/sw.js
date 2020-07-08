/*
MIT License

Copyright (c) 2020 gumie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var CACHE_NAME = "profsend-pwa-v1";
var urlsToCache = [
  "/top.ejs",
  "/about.ejs",
  "/13update.ejs",
  "/top.pwa.html",
  "/css/style.css",
  "/css/bootstrap-4.3.1.css",
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
  "/script/scripts-build.js",
  "/script/modules-build.js",
  "/image/icon-128.png",
  "/image/icon-144.png",
  "/image/icon-192.png",
  "/image/icon-384.png",
  "/image/icon-512.png",
  "/image/icon-72.png",
  "/image/icon-96.png",
  "/manifest.json",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(
        urlsToCache.map(
          (url) => new Request(url, { credentials: "same-origin" }),
        ),
      );
    }),
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response ? response : fetch(event.request);
    }),
  );
});
