"use strict";var precacheConfig=[["/purk-web/index.html","245ed67539247b3316fb7852d1dba52e"],["/purk-web/static/css/main.3f35c16a.css","f465223598d6da7cea390de0c7876b2e"],["/purk-web/static/js/main.c426414d.js","4b156da0df3a7a5d684e21a8c53c4add"],["/purk-web/static/media/City.a046e3a6.png","a046e3a692d1f09ba7d30016b64df4ef"],["/purk-web/static/media/Proxima Nova Reg.99e6f15d.ttf","99e6f15dece8b6cbc0edee1da31e0365"],["/purk-web/static/media/PurkLogoSalmon.17f98377.png","17f98377ebda86dfb6aa49c402608b89"],["/purk-web/static/media/Questrial-Regular.2fc665f3.ttf","2fc665f3118f89e3eb1cbc9c1639a0bb"],["/purk-web/static/media/car-gas.5eaa63f5.png","5eaa63f544a7fcd381b1aeebd659e054"],["/purk-web/static/media/internet.326ed97d.png","326ed97d579283a0e1a2a415a67c7489"],["/purk-web/static/media/lightbulb-border.76f991ee.png","76f991ee8c47a71feffd8113535e819e"],["/purk-web/static/media/money-coins.4137c485.png","4137c4850ca5b6f932d513fa5482cd66"],["/purk-web/static/media/park-border.9797f764.png","9797f76416ce5f7f8ecd9251dfa6931c"],["/purk-web/static/media/parking_spot.468cafd1.jpg","468cafd1e66cad6f60033cbf1f413664"],["/purk-web/static/media/roadtrip.6720d44c.jpg","6720d44ce82c265318b7b8dbb9c6c583"],["/purk-web/static/media/timer-mix.5eea846d.png","5eea846df509b1f6ed69042818763b4a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/purk-web/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});