// Create a function that takes a number and a callback. 
//The callback should check whether the number is even or odd and return the result.
function even_odd(num,cb)
{
    return cb(num);
}

function check(number)
{
    if(number%2===0)
    {
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(even_odd(4,check));

console.log(even_odd(7,check));
