// Write a function that takes a callback and calls it to print a message on the console.
function message(cb)
{
    console.log("normal message");
    let msg="This is message from callback";
    cb(msg);
}

message((val)=>{console.log(val)});
message(function(msg){
    console.log(msg + " msg2");
})
