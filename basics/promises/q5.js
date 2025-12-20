const checkAge=(age)=>{
    return new Promise((resolve, reject)=>{
        if(age>=18)
        {
            resolve("Eligible")
        }
        else{
            reject("Not eligible");
        }
    });
}

checkAge(17).then(message=>console.log(message))
            .catch(err=>console.log(err));