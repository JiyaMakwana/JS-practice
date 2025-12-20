// Create a Promise that rejects with the error "Something went wrong" after 2 seconds.
const rejectPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Something went wrong");
    },2000);
});

rejectPromise.catch((err)=>{
    console.log(err);
});