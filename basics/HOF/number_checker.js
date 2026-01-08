// Write a function that takes a number and two callbacks. 
// One callback should run if the number is positive, and the other should run if the number is negative.
function num_checker(num,positiveCB,negativeCB)
{
    if(num>0)
    {
        return positiveCB();
    }
    else if(num < 0){
        return negativeCB();
    }
}
// positiveCB() and negativeCB() only print to the console
// They do not return anything
// num_checker() also does not return anything =>undefined

// function positive()
// {
//     return "Positive";
// }
// function negative()
// {
//     return "Negative";
// }

// console.log(num_checker(3,()=>{console.log("+ve")},()=>{console.log("-ve")}));
// console.log(num_checker(-3,()=>{console.log("+ve")},()=>{console.log("-ve")}));

console.log(num_checker(31,()=>"+ve",()=>"-ve"));
console.log(num_checker(-31,()=>"+ve",()=>"-ve"));