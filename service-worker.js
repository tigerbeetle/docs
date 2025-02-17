const CACHE_NAME = "e97e3377746aba6668a57bd4c919b2e2277d7ce6";
const FILES_TO_CACHE = 
  ["/reference/sessions/","/reference/requests/get_account_balances/","/reference/requests/create_accounts/","/reference/requests/query_accounts/","/reference/requests/query_transfers/","/reference/requests/create_transfers/","/reference/requests/","/reference/requests/lookup_accounts/","/reference/requests/get_account_transfers/","/reference/requests/lookup_transfers/","/reference/query-filter/","/reference/transfer/","/reference/account-balance/","/reference/account/","/reference/account-filter/","/js/search.js","/img/notfound-dark.webp","/img/notfound-light.webp","/img/favicon.png","/img/preview.webp","/operating/upgrading/","/operating/deploy/","/operating/managed-service/","/operating/linux/","/operating/hardware/","/operating/docker/","/coding/financial-accounting/","/coding/two-phase-transfers/","/coding/time/","/coding/system-architecture/","/coding/data-modeling/","/coding/reliable-transaction-submission/","/coding/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/close-account/","/coding/recipes/correcting-transfers/","/coding/recipes/balance-bounds/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/rate-limiting/","/coding/recipes/currency-exchange/","/clients/python/","/clients/go/","/clients/node/","/clients/java/","/clients/dotnet/","/CNAME","/search-index.json","/about/production-ready/","/about/performance/","/about/vopr/","/about/architecture/","/about/","/about/zig/","/about/safety/","/about/oltp/","/","/.nojekyll","/404.html","/quick-start/","/style/style.css","/style/highlight.css"]
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
