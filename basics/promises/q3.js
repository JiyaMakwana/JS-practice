// Write a function checkNumber(num) that returns a Promise:
    // Resolve if num is greater than 0
    // Reject if num is less than or equal to 0

let checkNumber=(num)=>{
    return new Promise((resolve,reject)=>{
        if(num>0)
        {
            resolve("num greater than 0");
        }
        else
        {
             reject("error");
        }
    });
};

let promise=checkNumber(0);

promise
  .then(message => console.log(message))
  .catch(err => console.log(err));