const V='ironlog-v5';
const SHELL=["./", "index.html", "manifest.webmanifest", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "ek/0004-relaxation.svg", "ek/0004-tension.svg", "ek/0018-relaxation.svg", "ek/0018-tension.svg", "ek/0025-relaxation.svg", "ek/0025-tension.svg", "ek/0026-relaxation.svg", "ek/0026-tension.svg", "ek/0038-relaxation.svg", "ek/0038-tension.svg", "ek/0042-relaxation.svg", "ek/0042-tension.svg", "ek/0061-relaxation.svg", "ek/0061-tension.svg", "ek/0093-relaxation.svg", "ek/0093-tension.svg", "ek/0099-relaxation.svg", "ek/0099-tension.svg", "ek/0117-relaxation.svg", "ek/0117-tension.svg", "ek/0118-relaxation.svg", "ek/0118-tension.svg", "ek/0122-relaxation.svg", "ek/0122-tension.svg", "ek/0127-relaxation.svg", "ek/0127-tension.svg", "ek/0129-relaxation.svg", "ek/0129-tension.svg", "ek/0142-relaxation.svg", "ek/0142-tension.svg", "ek/0205-relaxation.svg", "ek/0205-tension.svg", "ek/0224-relaxation.svg", "ek/0224-tension.svg", "ek/0282-relaxation.svg", "ek/0282-tension.svg"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(SHELL.map(u=>fetch(new Request(u,{cache:'reload'})).then(r=>{if(r.ok)return c.put(u,r)}).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('message',e=>{if(e.data==='skip')self.skipWaiting()});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
  const same=u.origin===location.origin,font=/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);if(!same&&!font)return;
  const page=r.mode==='navigate'||(same&&/\/(index\.html)?$/.test(u.pathname));
  if(page){e.respondWith((async()=>{const c=await caches.open(V);
    try{const ctl=new AbortController();const t=setTimeout(()=>ctl.abort(),4000);const res=await fetch(r.url,{cache:'no-cache',signal:ctl.signal});clearTimeout(t);
      if(res.ok){c.put('index.html',res.clone());return res}}catch(err){}
    return (await c.match('index.html'))||(await c.match(r,{ignoreSearch:true}))||new Response('ออฟไลน์',{status:503,headers:{'content-type':'text/plain; charset=utf-8'}})})());return}
  e.respondWith(caches.open(V).then(async c=>{const hit=await c.match(r,{ignoreSearch:same});
    const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(r,res.clone());return res}).catch(()=>null);
    if(hit){e.waitUntil(net);return hit}const res=await net;return res||new Response('',{status:504})}))});
