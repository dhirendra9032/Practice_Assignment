
var str="148";
var n=3;

function  solve( str)
   {
       if(str.length==0)
       {
            return 0;
       }
       else if (str.length==1){

        return +(str); 
       }
      var  temp=0
       for(i=0;i<str.length;i++)
       {
            temp=temp+ Number(str[i])
       }
       
        return solve(temp.toString())
}

//console.log(solve( str))

 function main(str,n)
{  
   var result=+(solve( str))*n;

   console.log(solve(result.toString()));
}

main(str,n);



