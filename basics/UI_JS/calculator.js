let resultScreen=document.getElementById("result-screen");

const plus=document.getElementById("plus-butt");
const minus=document.getElementById("minus-butt");
const multiply=document.getElementById("multiply-butt");
const divide=document.getElementById("divide-butt");
const equal=document.getElementById("equal-butt");

let n1,n2,operator,result;
function input()
{
    while(true)
    {
        const num1=prompt("Enter n1::");
        const num2=prompt("Enter n2::");
        if (num1 === null || num2 === null) return false;

        n1=Number(num1);
        n2=Number(num2);
        if(n1 === "" || n2==="" || isNaN(n1) || isNaN(n2))
        {
            alert("Enter valid numbers");
        }
        else
        {
            return true;
        }
    }
    
}



plus.onclick= ()=> operator="+";
minus.onclick= ()=> operator="-";
multiply.onclick= ()=> operator="*";
divide.onclick= ()=> operator="/";

equal.onclick= ()=> {
    if(!operator)
    {
        alert("select a operator first!");
        return;
    }
    if(!input()) return;

    switch(operator)
    {
        case "+":result=n1+n2;break;
        case "-":result=n1-n2;break;
        case "*":result=n1*n2;break;
        case "/":result=n1/n2;break;
    }

    resultScreen.value=result;
    operator=null;
}



