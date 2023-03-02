//service worker registration in main js file


if(navigator.serviceWorker) //checking if service worker present in the browser
{
    navigator.serviceWorker.register('./sw.js')   //then registering the service worker file
    .then((registeration) => {

        // if(registeration.active){
        //     registeration.active.postMessage('Hello from main js file');
        // }

        //onupdatefound you can send message to update sw

        // registeration.onupdatefound = () => {
        //     let newSW = registeration.installing;

        //     if(confirm('App update found. Do you want to update?')){
        //         newSW.postMessage('update_self');
        //     }
        // }

        if(registeration.active){
            registeration.active.postMessage('respond to this.');
        }


        console.log('sw registed!', registeration);
    })
    .catch(console.log);

    navigator.serviceWorker.addEventListener('message', (e) => {
        console.log(e.data);
    })
}