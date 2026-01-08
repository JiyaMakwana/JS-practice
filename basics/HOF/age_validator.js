// Create a function that takes an age and a callback. 
//The callback should check whether the age is eligible for voting and return the result.
function ageValidate(age,cb)
{
    cb(age);
}

function check(age)
{
    if(age<18)
    {
        console.log("Not Eligible");
    }
    else{
        console.log("Eligible");
    }
}

ageValidate(18,check);