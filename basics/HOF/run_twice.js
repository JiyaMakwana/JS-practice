// Write a function that takes a callback and calls it exactly two times.
function runTwice(cb)
{
    cb();
    cb();
}

function msg()
{
    console.log("Hello!");
}

runTwice(msg);