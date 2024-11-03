self.addEventListener('install', event => {
  event.waitUntil(
	caches.open('my-cache').then(cache => {
  	return cache.addAll([
    	'/',
    	'/index.html',
    	'/styles.css',
    	'/script.js',
    	'/images/icon-192x192.png',
    	'/images/icon-512x512.png'
  	]);
	})
  );
});