let a="aaabb bbaaa"
let len=a.length
console.log(len,a[len-1])
function rev(x,s,i)
{
    if(i>s)
    {
        return true
    }
    if(a[i]==a[s-1])
    {
        return rev(x,s-1,i+1)
    }
    else{
        return false
    }
    
}
console.log(rev(a,len,0))
