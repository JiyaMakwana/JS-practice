// use splice() to insert 15 and 25 into 10, 20, 30, 40
function spliceInsert(arr)
{
    let deletedArr=arr.splice(3,0,[15,25]); //1,0 //2,0
    console.log(deletedArr+ ","+arr);
}
spliceInsert([10, 20, 30, 40]);

// remove duplicates value from [1,2,2,3,4,4,5]
function remDuplicates(arr)
{
    let uniqueArr=[];
    for(let i=0;i<arr.length;i++)
    {
        if(!uniqueArr.includes(arr[i]))
        {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(remDuplicates([1,2,2,3,4,4,5]));