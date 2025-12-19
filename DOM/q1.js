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

// when button is clicked change the text of para
const changeparaText=document.getElementById("changeparaText");
const paratextButt=document.getElementById("paratext");

paratextButt.addEventListener('click',function(){
    changeparaText.innerHTML="I am changed paragraph text";
    changeSRCimg.src="../small projects/tic-tac-toe/excited.gif"

    id_selector.style.display="none";
});

// change the image src when button is clicked
const changeSRCimg=document.getElementById("changeSRCimg");

// add new li item to an existing ul list
const ulItem=document.getElementById("ulItem");
let li=document.createElement("li");
li.textContent="Item 2";
ulItem.appendChild(li);

// remove last item from the list
// ulItem.lastElementChild?.remove();   or
ulItem.removeChild(ulItem.lastElementChild);

// hide a div when button is clicked
// on paratextButt