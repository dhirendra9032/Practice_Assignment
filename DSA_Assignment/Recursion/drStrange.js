var n=3;

var str=[];

for(var i=1;i<=n;i++){
    str.push(i.toString());
}
var low=0;high=str.length-1;res="";



function subsequence(res,str,low, high)
{
    if(res==""){
        console.log(res);
    }else
    if(low<=high+1 && res!="") 
    {
        console.log(res);
    }
    for(var i=low;i<=high;i++)
    {
        subsequence(res+str[i]+" ",str,i+1,high);
    }
}

subsequence(res,str,low, high);