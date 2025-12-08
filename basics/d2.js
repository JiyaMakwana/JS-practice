// Find max of 3 numbers using ternary.
function max(a,b,c)
{
    let maxof= (a>b) ? ((a>c)? a:c ) : ((b>c) ? b:c );
    return maxof;
}
console.log(max(10,12,9));