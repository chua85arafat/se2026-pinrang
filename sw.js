const CACHE_NAME = "se2026-v1";

const FILES_TO_CACHE = [
  "/se2026-pinrang/",
  "/se2026-pinrang/index.html",
  "/se2026-pinrang/manifest.json",
  "/se2026-pinrang/css/style.css",
  "/se2026-pinrang/js/app.js",

  "/se2026-pinrang/images/01-pencatatan-keluarga.png",
  "/se2026-pinrang/images/02-contoh-penulisan-nama.png",
  "/se2026-pinrang/images/03-penentuan-kbli.png",
  "/se2026-pinrang/images/04-penggunaan-internet.png",
  "/se2026-pinrang/images/05-aset.png",
  "/se2026-pinrang/images/06-pendapatan-usaha.png",
  "/se2026-pinrang/images/07-pengeluaran-usaha.png",
  "/se2026-pinrang/images/08-pengeluaran-keluarga.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
