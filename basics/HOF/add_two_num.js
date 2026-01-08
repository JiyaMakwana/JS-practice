// Create a function that takes two numbers and a callback. 
// The callback should add the numbers and return the result.
function add_two_numbers(n1,n2,cb)
{
    let result=n1+n2;
    cb(result);

    return result;
}

add_two_numbers(2,2,(val)=>{console.log(val)});