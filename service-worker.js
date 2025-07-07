const CACHE_NAME = "6a6e39e68d2aea5683a3ddf2091042fd45e4ba16";
const FILES_TO_CACHE = 
  ["/js/search.js","/reference/account-balance/","/reference/account-filter/","/reference/sessions/","/reference/","/reference/account/","/reference/transfer/","/reference/requests/get_account_balances/","/reference/requests/query_transfers/","/reference/requests/lookup_accounts/","/reference/requests/query_accounts/","/reference/requests/create_transfers/","/reference/requests/get_account_transfers/","/reference/requests/create_accounts/","/reference/requests/","/reference/requests/lookup_transfers/","/reference/query-filter/","/img/notfound-dark.webp","/img/favicon.png","/img/notfound-light.webp","/img/preview.webp","/style/style.css","/style/highlight.css","/concepts/safety/","/concepts/debit-credit/","/concepts/oltp/","/concepts/performance/","/concepts/","/operating/cdc/","/operating/cluster/","/operating/upgrading/","/operating/installing/","/operating/recovering/","/operating/deploying/docker/","/operating/deploying/","/operating/deploying/systemd/","/operating/deploying/managed-service/","/operating/hardware/","/operating/","/operating/monitoring/","/.nojekyll","/coding/time/","/coding/clients/python/","/coding/clients/dotnet/","/coding/clients/node/","/coding/clients/","/coding/clients/go/","/coding/clients/java/","/coding/recipes/currency-exchange/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/rate-limiting/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/","/coding/recipes/correcting-transfers/","/coding/recipes/balance-bounds/","/coding/recipes/close-account/","/coding/linked-events/","/coding/","/coding/reliable-transaction-submission/","/coding/system-architecture/","/coding/requests/","/coding/data-modeling/","/coding/financial-accounting/","/coding/two-phase-transfers/","/single-page/","/about/oltp/","/about/","/about/vopr/","/start/","/404.html","/","/quick-start/","/CNAME","/search-index.json"]
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
