var CACHE_NAME = 'profsend_cache';
var urlsToCache = [
    'profsend.tk',
];

// �C���X�g�[������
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// ���\�[�X�t�F�b�`���̃L���b�V�����[�h����
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});