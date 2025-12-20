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

// rotate the array RIGHT by 1  //1,2,3,4,5........-> 5,1,2,3,4
// rotate the array LEFT by 1   //1,2,3,4,5........-> 2,3,4,5,1
function rotateRight(arr)
{
    let lastEle=arr.pop();
    arr.unshift(lastEle);
    return arr;
}
console.log(rotateRight([1,2,3,4,5]));

function rotateLeft(arr)
{
    let firstEle=arr.shift();
    arr.push(firstEle);
    return arr;
}
console.log(rotateLeft([1,2,3,4,5]));

// merge two arrays manually
function mergeArr(arr1,arr2)
{
    let merge=[];
    let index=0;

    for(let i=0;i<arr1.length;i++)
    {
        merge[index]=arr1[i];    
        index++;
    }

    for(let j=0;j<arr2.length;j++)
    {
        merge[index]=arr2[j];
        index++;    
    }

    return merge;
}
console.log(mergeArr([1,2,3],[4,5,6]));

// find largest number in [10,5,80,20]
function arrLargest(arr)
{
    let max=arr[0];

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] > max)
        {
            max=arr[i];
        }
    }
    return max;
}
console.log(arrLargest([10,5,80,20]))

// count how many times 2 appears in the array
function countTwo(arr)
{
    let count=0;

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===2)
        {
            count++;
        }
    }
    return count;
}
console.log(countTwo([1,2,3,2,2,4]));