/*Using the below explanation for n-th term of e^x, 
calculate the value of e^x given x and n.
 Do not calculate it directly using the 
formula and do not write any iterative code.*/

function fun(n){
    if(n==1){
        return 1;
    }else{
        return n*fun(n-1);
    }
}

//console.log(fun(3))


function func1(x,n,a){
    if(a>n){
       return 1;
    }else{
      return  (x**a)/fun(a)+func1(x,n,a+1);
    }
}

console.log((func1(4,3,1)).toFixed(4));