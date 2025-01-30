const CACHE_NAME = "f7ac40568337b6db6b3bcce9a4e15d1de714e84b";
const FILES_TO_CACHE = 
  ["/clients/go/","/clients/python/","/clients/java/","/clients/dotnet/","/clients/node/","/","/CNAME","/js/search.js","/404.html","/style/highlight.css","/style/style.css","/about/zig/","/about/","/about/oltp/","/about/safety/","/about/architecture/","/about/production-ready/","/about/performance/","/about/vopr/","/search-index.json","/img/preview.webp","/img/notfound-dark.webp","/img/notfound-light.webp","/img/favicon.png","/.nojekyll","/quick-start/","/coding/system-architecture/","/coding/","/coding/two-phase-transfers/","/coding/time/","/coding/reliable-transaction-submission/","/coding/recipes/correcting-transfers/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/close-account/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/rate-limiting/","/coding/recipes/balance-bounds/","/coding/recipes/currency-exchange/","/coding/financial-accounting/","/coding/data-modeling/","/reference/query-filter/","/reference/transfer/","/reference/account-filter/","/reference/requests/","/reference/requests/get_account_transfers/","/reference/requests/get_account_balances/","/reference/requests/lookup_transfers/","/reference/requests/create_transfers/","/reference/requests/query_accounts/","/reference/requests/query_transfers/","/reference/requests/lookup_accounts/","/reference/requests/create_accounts/","/reference/sessions/","/reference/account-balance/","/reference/account/","/operating/docker/","/operating/hardware/","/operating/deploy/","/operating/managed-service/","/operating/linux/","/operating/upgrading/"]
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
