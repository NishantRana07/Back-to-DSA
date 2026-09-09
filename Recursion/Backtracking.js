

//Printing all possible binary subtrings of size n 

let n=5;
var A=[]
function binary(n)
{
if(n<1)
{
    console.log(A);
}
else{
    A[n-1]=0
    binary(n-1)
    A[n-1]=1
    binary(n-1)
}
}
binary(n)
