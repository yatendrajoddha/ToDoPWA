// Registering ServiceWorker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function (registration) {
        console.log('Service worker registered: ', registration.scope);
    }, function (err) {
        console.log('Service worker failed: ', err);
    });
}