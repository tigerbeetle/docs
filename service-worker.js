const CACHE_NAME = "135b05a4b9189f6d23670fee19fa62751693dba5";
const FILES_TO_CACHE = 
  ["/single-page/","/style/style.css","/style/highlight.css","/","/about/","/about/oltp/","/about/vopr/","/img/preview.webp","/img/favicon.png","/img/notfound-light.webp","/img/notfound-dark.webp","/operating/deploying/","/operating/deploying/docker/","/operating/deploying/managed-service/","/operating/deploying/systemd/","/operating/","/operating/upgrading/","/operating/hardware/","/operating/cluster/","/operating/installing/","/start/","/js/search.js","/concepts/","/concepts/oltp/","/concepts/safety/","/concepts/debit-credit/","/concepts/performance/","/.nojekyll","/CNAME","/404.html","/reference/query-filter/","/reference/account-balance/","/reference/","/reference/transfer/","/reference/account/","/reference/account-filter/","/reference/requests/lookup_accounts/","/reference/requests/","/reference/requests/create_transfers/","/reference/requests/get_account_transfers/","/reference/requests/get_account_balances/","/reference/requests/lookup_transfers/","/reference/requests/query_accounts/","/reference/requests/query_transfers/","/reference/requests/create_accounts/","/reference/sessions/","/quick-start/","/search-index.json","/coding/time/","/coding/clients/","/coding/clients/dotnet/","/coding/clients/python/","/coding/clients/node/","/coding/clients/java/","/coding/clients/go/","/coding/","/coding/two-phase-transfers/","/coding/system-architecture/","/coding/linked-events/","/coding/financial-accounting/","/coding/recipes/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/correcting-transfers/","/coding/recipes/balance-bounds/","/coding/recipes/close-account/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/currency-exchange/","/coding/recipes/rate-limiting/","/coding/data-modeling/","/coding/reliable-transaction-submission/","/coding/requests/"]
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
