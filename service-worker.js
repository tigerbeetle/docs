const CACHE_NAME = "e55e3263d9606d50e6912341ce6c6a28718f9a5a";
const FILES_TO_CACHE = 
  ["/","/CNAME","/js/search.js","/404.html","/start/","/style/highlight.css","/style/style.css","/about/","/about/vopr/","/search-index.json","/img/preview.webp","/img/notfound-dark.webp","/img/notfound-light.webp","/img/favicon.png","/.nojekyll","/concepts/","/concepts/oltp/","/concepts/safety/","/concepts/debit-credit/","/concepts/performance/","/quick-start/","/coding/system-architecture/","/coding/clients/","/coding/clients/go/","/coding/clients/python/","/coding/clients/java/","/coding/clients/dotnet/","/coding/clients/node/","/coding/","/coding/two-phase-transfers/","/coding/time/","/coding/requests/","/coding/reliable-transaction-submission/","/coding/recipes/","/coding/recipes/correcting-transfers/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/close-account/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/rate-limiting/","/coding/recipes/balance-bounds/","/coding/recipes/currency-exchange/","/coding/financial-accounting/","/coding/linked-events/","/coding/data-modeling/","/reference/","/reference/query-filter/","/reference/transfer/","/reference/account-filter/","/reference/requests/","/reference/requests/get_account_transfers/","/reference/requests/get_account_balances/","/reference/requests/lookup_transfers/","/reference/requests/create_transfers/","/reference/requests/query_accounts/","/reference/requests/query_transfers/","/reference/requests/lookup_accounts/","/reference/requests/create_accounts/","/reference/sessions/","/reference/account-balance/","/reference/account/","/operating/cluster/","/operating/hardware/","/operating/","/operating/installing/","/operating/upgrading/","/operating/deploying/docker/","/operating/deploying/","/operating/deploying/systemd/","/operating/deploying/managed-service/"]
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
