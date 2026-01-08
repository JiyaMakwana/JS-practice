// Given a string, count how many vowels (a, e, i, o, u) it contains.
function vowel(str)
{
    let vowels="aeiouAEIOU";
    let count=0;

    for(let i=0;i<str.length;i++)
    {
        if(vowels.includes(str[i]))
        {
            count++;
        }
    }
    return count;
}
console.log(vowel("Jiya"));