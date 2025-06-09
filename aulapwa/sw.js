self.addEventListener("install", event => {
    event.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
    );
    console.log("Service Worker instalado");
  });