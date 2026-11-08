// Only the local application shell is cached. Never cache camera images or map tiles.
const PREFIX='calgary-traffic-'+encodeURIComponent(self.registration.scope)+'-';
const CACHE=PREFIX+'v1.0.5';
const ASSETS=['./','./index.html','./manifest.webmanifest','./maplibre-gl.js','./maplibre-gl.css','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS.map(path=>new Request(path,{cache:'reload'})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;
 const indexURL=new URL('./index.html',self.registration.scope).href;
 if(request.mode==='navigate'){
  event.respondWith((async()=>{try{const response=await fetch(request);if(response.ok){const cache=await caches.open(CACHE);await cache.put(indexURL,response.clone());}return response;}catch{return await caches.match(indexURL)||Response.error();}})());return;
 }
 const known=ASSETS.map(path=>new URL(path,self.registration.scope).href);
 if(!known.includes(url.href))return;
 event.respondWith(caches.open(CACHE).then(async cache=>{const saved=await cache.match(request);if(saved)return saved;const response=await fetch(request);if(response.ok)await cache.put(request,response.clone());return response;}));
});
