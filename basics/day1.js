// Swap two variables without using a third variable.
function swap(a,b)
{
    // a=a+b;
    // b=a-b;
    // a=a-b;

    //with third var
    let temp=0;
    
    temp=a;
    a=b;
    b=temp;

    console.log(`value of a::${a}, value of b:: ${b}`);
}
swap(10,20);