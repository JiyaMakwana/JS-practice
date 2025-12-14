document.getElementsByTagName("p")[0].textContent="Hello Javascript";
document.getElementsByTagName("h1")[0].style.color="blue";
const id_selector=document.getElementById("id-selector");
console.log(id_selector);
const tagSelector=document.getElementsByTagName("p");
console.log(tagSelector);
document.getElementsByTagName("body")[0].style.backgroundColor="cyan";
const inner1=document.getElementsByClassName("inner1")[0];
inner1.innerHTML="Welcome to Javascript DOM";
const inner2=document.getElementById("inner2");
inner2.innerHTML="Hello <strong>Javascript</strong> DOM";

const inner3=document.getElementById("inner3").innerHTML=`<p> New Head</p> <h2>I am from inner 3</h2>`;