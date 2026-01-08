// Create a function that takes a callback and a number n. The callback should be executed exactly n times.
function repeatCallback(cb,n)
{
    for(let i=0;i<n;i++)
    {
        cb();
    }
}

function msg()
{
    console.log("delulu");
}

repeatCallback(msg,5);
