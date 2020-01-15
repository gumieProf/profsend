const STATIC_DATA = [
    'top.html',
    'css/style.css',
    'css/style.css',
    'script/main.js',
    'script/jquery.js',
    'script/download.js',
    'image/card-img.png',
    'image/favicon.ico',
    'image/image.png',
    'image/image.png',
    'image/img-1.png',
    'image/ja-prof.png',
    'image/prof.png',
    'image/toku.png',
    '13update.html',
    '404.html',
    'about.html'
  ];
  
  self.addEventListener('install', function(e) {
   e.waitUntil(
     caches.open('profsend-v1').then(function(cache) {
       return cache.addAll(STATIC_DATA);
     })
   );
  });
  
  self.addEventListener('fetch', function(event) {
   console.log(event.request.url);
  
   event.respondWith(
     caches.match(event.request).then(function(response) {
       return response || fetch(event.request);
     })
   );
  });