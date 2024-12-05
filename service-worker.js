self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./main.html", "./script.js", "./main.css", "./images/icon128.png"]);
        })
    );
});


/*
self.addEventListener("fetch", e => {
    // console.log(`Intercepting fetch request for: ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
            // cache first 
            // if that's not there - go to the network
        })
    );  
});
*/
