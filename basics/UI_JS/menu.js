//  Menu-Driven Program (Loop Based)
// Problem Statement:
// •	Show a menu repeatedly using prompt():
// •	1. Add
// •	2. Subtract
// •	3. Multiply
// •	4. Exit
// •	Perform the operation until user chooses Exit.
// •	Print results in console.
// Focus: loops, control flow
let n1,n2, result;

// function input()
// {
//     while(true)
//     {
//         let num1=prompt("Enter num1️⃣ ::");
//         let num2=prompt("Enter num2️⃣::");

//         if(num1 === null || num2 === null) return false;

//         n1=Number(num1);
//         n2=Number(num2);

//         if(n1 === "" || n2==="" || isNaN(n1) || isNaN(n2))
//         {
//             alert("Enter valid numbers");
//         }
//         else
//         {
//             return true;
//         }

//         operator=prompt("Enter operation [+ , -, *, /]::");

//         switch(operator)
//         {
//             case "+": result=n1+n2;
//             case "-": result=n1-n2;
//             case "*": result=n1*n2;
//             case "/": result=n1/n2;
//         }
//     }
// }

while(true)
{
    let choice=prompt("\n 1. Add \n 2. Subtract \n 3. Multiply \n 4. Divide \n 5. Exit");

    if(choice === '5' || choice === null)
    {
        break;
    }

    let n1=Number(prompt("enter num1::"));
    let n2=Number(prompt("enter num2::"));

    if(isNaN(n1) || isNaN(n2))
    {
        alert("Please enter valid numbers⚠️")
        continue;
    }

    let result;

    switch(choice)
    {
        case '1':
            result=n1+n2;
            alert(`Sum::${result}`);
            break;
        case '2':
            result=n1-n2;
            alert(`Subtract::${result}`);
            break;
        case '3':
            result=n1*n2;
            alert(`Multiplication::${result}`);
            break;
        case '4':
            result=n1/n2;
            alert(`Division::${result}`);
            break;
        default:
            alert("Invalid Operation🥲");
    }
}
