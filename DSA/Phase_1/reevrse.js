// Reverse a given string using a loop (do not use built-in reverse()).
function manualReverse(str)
{
    let reversed="";
    for(let i=str.length-1;i>=0;i--)
    {
        reversed +=str[i];
    }
    return reversed;
}

console.log(manualReverse("jiya"));