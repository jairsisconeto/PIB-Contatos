// 2. Registre um Service Worker
// Os service workers são scripts que o navegador executa em segundo plano, permitindo funcionalidades como
// notificações push e cache offline. Crie um arquivo chamado service-worker.js na raiz do seu projeto.
//     Um exemplo básico:

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/script.js'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
