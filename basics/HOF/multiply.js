// Create a function that takes a number and a callback. The callback should multiply the number by 2 and return the result.
function multiply(num,cb)
{
    let result=num*2;
    cb(result);

    return result;
}
multiply(3,(val)=>{console.log(val)});