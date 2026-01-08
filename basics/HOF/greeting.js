// Write a function that takes a name and a callback. 
// The callback should return a greeting message using the name.
function greeting(name,cb)
{
    let msg="welcome of the world of Callbacks:: " + name;
    cb(msg);
}

greeting("Jiya",(greet)=>{console.log(greet)});