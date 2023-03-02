// listening for message 

self.addEventListener('message', (e) => {
    //message from main js

    // if(e.data === 'update_self'){
    //     self.skipWaiting();
    // }       

    //Respond to all client

    self.clients.matchAll().then(clients => {

        clients.forEach(client => {
            if(e.source.id === client.id)
            client.postMessage("Private Hello from service worker");
        });
    });
    
});