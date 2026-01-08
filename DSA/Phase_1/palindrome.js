// Check whether a given string is a palindrome.
// madam -> madam

function manualReverse(str)
{
    let reversed="";
    for(let i=str.length-1;i>=0;i--)
    {
        reversed +=str[i];
    }
    if(reversed===str)
    {
        return "is Palindrome";
    }
    else{
        return "Not Palindrome"
    }
}

console.log(manualReverse("able was i ere i saw elba"));
console.log("jiya:: "+manualReverse("jiya"));