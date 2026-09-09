let a=[1,2,6,4,5]
let len=a.length
function rev(x,len)
{
    if(len==1)
    {
        return true;
    }
    if(x[len-1]<x[len-2] && len>=2)
    {
        return false;
    }
    else{
        return rev(x,len-1)
    }
}

console.log(rev(a,len))
