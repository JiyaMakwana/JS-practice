// Consume a Promise using .then() and .catch().
const consumePromise=()=>{
    let success=false;
    return new Promise((resolve,reject)=>{
        if(success)
        {
            resolve("Resolved")
        }
        else{
            reject("Rejected");
        }
    });
}

let promise=consumePromise();

promise
    .then((message)=>{console.log(message)})
    .catch((err)=>{console.log(err)});