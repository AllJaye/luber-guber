self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('push',e=>{let data={};try{data=e.data.json();}catch{}e.waitUntil(self.registration.showNotification('Luber',{body:data.body||'Your ride has an update. Open the app.',tag:data.tag||'ride-update',data:{url:self.registration.scope},icon:'icon.svg'}));});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil((async()=>{const windows=await self.clients.matchAll({type:'window',includeUncontrolled:true});const existing=windows.find(x=>x.url.startsWith(self.registration.scope));if(existing)return existing.focus();return self.clients.openWindow(self.registration.scope);})());});
