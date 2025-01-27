const CACHE_NAME = "e21a465e6ae2aa99e3806ed2c05625a948605edc";
const FILES_TO_CACHE = 
  ["/js/search.js","/about/vopr/","/about/oltp/","/about/performance/","/about/zig/","/about/production-ready/","/about/safety/","/about/","/about/architecture/","/clients/node/","/clients/python/","/clients/dotnet/","/clients/java/","/clients/go/","/operating/docker/","/operating/deploy/","/operating/upgrading/","/operating/hardware/","/operating/linux/","/operating/managed-service/","/style/highlight.css","/style/style.css","/reference/account/","/reference/requests/lookup_accounts/","/reference/requests/lookup_transfers/","/reference/requests/get_account_transfers/","/reference/requests/query_accounts/","/reference/requests/query_transfers/","/reference/requests/create_transfers/","/reference/requests/create_accounts/","/reference/requests/","/reference/requests/get_account_balances/","/reference/account-balance/","/reference/account-filter/","/reference/sessions/","/reference/transfer/","/reference/query-filter/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/correcting-transfers/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/balance-bounds/","/coding/recipes/currency-exchange/","/coding/recipes/rate-limiting/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/close-account/","/coding/system-architecture/","/coding/two-phase-transfers/","/coding/financial-accounting/","/coding/data-modeling/","/coding/reliable-transaction-submission/","/coding/time/","/coding/","/search-index.json","/img/preview.webp","/img/notfound-dark.webp","/img/notfound-light.webp","/img/favicon.png","/quick-start/","/","/404.html"]
;

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  const normalizedUrl = normalizeUrl(event.request.url);

  event.respondWith(
    caches.match(normalizedUrl).then(response => {
      return response || fetch(event.request);
    })
  );
});

function normalizeUrl(url) {
  const urlObj = new URL(url);

  if (urlObj.search) {
    urlObj.search = "";
  }

  return urlObj.toString();
}
