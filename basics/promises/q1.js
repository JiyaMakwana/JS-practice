// Create a Promise that resolves with the message "Promise resolved" after 1 second.
const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Promise resolved");
        }, 1000);
    });
}

let promise=getPromise();
promise.then((message)=>{
    console.log(message);
});
