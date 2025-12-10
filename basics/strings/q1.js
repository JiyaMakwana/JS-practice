// Print the first and last character of a string.
function indexing(str)
{
    return `first::${str[0]}, last::${str[str.length-1]} `;
}
console.log(indexing("jiya"));

// Given a string, print all characters with their index number.
function printIdx(str){
    for(let i=0;i<str.length;i++)
    {
       console.log(`${i}:: ${str[i]}`);
    }
}
printIdx("jiya");

// Count how many characters are in the string without using .length (use a loop).
function approach1(str){
    let count=0;

    for(let char in str)
    {
        count++;
    }
    return count;
}

function approach2(str){
    let count=0;

    //we stop when index becomes undefined
    //  0:: j   1:: i   2:: y   3:: a   4:: undefined
    //loop until str[i] not becomes undefined
    for(let i=0; str[i] !==undefined; i++)
    {
        count++;
    }
    return count;
}
console.log("app1::" + approach1("jiya"));
console.log("app2::" + approach2("jiya"));

// Find if the middle character of a string is a vowel.
// dry run  -> find mid index, midindex is same to str[mid], check vowels is their or not
function checkVowel(str)
{
    let midIdx=Math.floor((str.length-1)/2);
    let midChar=str[midIdx];
    let vowels="aeiouAEIOU";

    if(vowels.includes(midChar)){
        console.log(`is vowel:: ${midChar}`);
    }
    else{
        console.log(`not vowel:: ${midChar}`);
    }
}
checkVowel("jiya");

// Check if the 5th index character exists or not.
function fiveIndex(str)
{
    if(str[5] !== undefined)
    {
        console.log("Exists::" + str[5]);
    }
    else{
        console.log("Not exists");
    }
}
fiveIndex("jiya makwana");

// ✂️ slice(), substring(), substr()

// Extract the first 3 letters of a string.
function first3(str)
{
    console.log(str.slice(0,3));
}
first3("jiya");

// Extract everything after index 4.    ->works with all
function after4(str)
{
    console.log(str.slice(4));
}
after4("jiya makwana");

// Extract the last 5 characters of a string.
function last5(str)
{
    console.log(str.slice(-5));
}
last5("jiya makwana");