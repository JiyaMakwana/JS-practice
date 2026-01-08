// Write a function that takes a number and a callback. The callback should return the square of the number.
function square(num,cb)
{
    let result=num*num;
    cb(result);
}

square(4,(sq)=>{console.log(sq)});