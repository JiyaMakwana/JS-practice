// 1. Login Page with Validation
// Tech: HTML form + CSS styling + Bootstrap layout + JS logic
// Requirements:
// Create a login form using Bootstrap
// On submit:
// If email empty → alert
// If password < 6 → alert
// Else → show “Login successful” using alert
const submit=document.getElementById("submit")
const email=document.getElementById("email");
const psw=document.getElementById("psw");

submit.addEventListener("click",()=>{

    if(email.value === "")
    {
        alert("Email is empty!🫥");
    }
    else if(psw.value.length<6)
    {
        alert("Password too short☹️");
    }
    else{
        alert("Login successful😊");
    }
});