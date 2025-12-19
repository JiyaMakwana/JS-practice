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

// Using slice(), get the string in reverse order (advanced).
function reverseStr(str)
{
    let reversed=" ";

    for(let i=str.length-1;i>=0;i--)
    {
        reversed += str.slice(i,i+1);
    }
    return reversed;
}
console.log(reverseStr("jiya"));

// Compare output of slice(2, 6) vs substring(2, 6) vs substr(2, 4) for the same string.
function checkOutput(str)
{
    console.log(str.slice(2,6));
    console.log(str.substring(6,2));
    console.log(str.substr(2,4));
}
checkOutput("012345678");

// Extract a “word” from a sentence using .slice() when start and end index are given.
function extractWord(str,startIndex,endIndex)
{
    let word=str.slice(startIndex,endIndex);

    console.log(word);
}
extractWord("i am a guitarist",7,16);

// Remove the first and last character using .slice().
function removeFirstLast(str)
{
    let removeChar=str.slice(1,-1);
    console.log(removeChar);
}
removeFirstLast("jiya");

// 🔡 Case Conversion (toUpperCase / toLowerCase)

// Convert a sentence into Title Case (each word starts with capital).
// dry run
    /*
        1 -> whole sentence to lowercase
        2 -> spilt the words in sentence and create a empty string to store result
        3 -> loop through each words
                -> extract one word
                -> word[0]->to upperCase (J), and concat rest of the remaining letters of word by slice (+iya)
                -> store it in result
        4 -> return result      
    */
function titleCase(sentence)
{
    sentence=sentence.toLowerCase();
    let words=sentence.split(" ");
    let result="";

    for(let i=0;i<words.length;i++)
    {
        let word=words[i];
        let titleC=word[0].toUpperCase() + word.slice(1);
        result += titleC;

        // to add space between words
        if(i< words.length-1) result += " ";
    }
    return result;
}
console.log(titleCase("i am jiya"));

// Convert only the first letter to uppercase and rest lowercase.
// dry run
/*      - take 1st word of senetence
        - char at 0 index-> to uppercase
        - get rest of the string and lowercase them nd join it
*/
function capitalize(str)
{
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize("my NaMe iS DelulU"));

// Toggle case → "aBcDe" → "AbCdE".
function toggleCase(str)
{
    let result="";
    for(let i=0;i<=str.length-1;i++)
    {
         if(str[i] === str[i].toLowerCase())
        {
            result += str[i].toUpperCase();
        }
        else{
            result+= str[i].toLowerCase();
        }
    }
    return result;
   
}
console.log(toggleCase("aBcDe"));

// make a case insensitive comparison between two strings
function compare(str1,str2)
{
   
    if(str1.toLowerCase()===str2.toLowerCase())
    {
        console.log("success");
    } 
    else
    {
        console.log("error");
    }  
}

compare("jiya","JiyA");

//count how many UC letters are is string
function countUC(str)
{
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]===str[i].toUpperCase())
        {
            count++;
        }
    }
    return count;
}
console.log(countUC("JiYaMakwaNA"));

// check if username contains numbers
function checkUserName(uname)
{
    for(let i=0;i<uname.length;i++)
    {
        let char=uname.charAt(i);
        if(char >='0' && char<='9')
        {
            return "has numbers";
        }
    }
    return "no numbers";
}
console.log(checkUserName("jiya123"));

//verify if email endswith @gmail.com
function verifyEmail(mail)
{
    let check="@gmail.com";

    if(mail.endsWith(check))
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(verifyEmail("jiyaedu7718@gmail.in"))

// check if sentence starts with "Hello";
function checkSentence(sen)
{
    let check="Hello";

    if(sen.startsWith(check))
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(checkSentence("Hello jiyaedu7718@gmail.in"))