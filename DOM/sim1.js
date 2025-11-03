//let btn=document.createElement("togglebutton");
// btn.innerText="click me";
// btn.style.backgroundColor="red";
// btn.style.color="white";

let btn=document.querySelector("#togBtn");
let body=document.querySelector("body");
let currMode="light";

 btn.addEventListener("click",()=>{
    //console.log("u r trying to change mode!");
    if(currMode==="light")
    {
        currMode="dark";
        //document.querySelector("body").style.backgroundColor="blue";
        body.classList.add("dark");
    }
    else{
        currMode="light";
        //document.querySelector("body").style.backgroundColor="yellow";
        body.classList.add("light");
    }

    console.log(currMode);
 });
 // body.prepend(btn);