function fun(n){
    if(n==1){
        return 1;
    }else{
        return n*fun(n-1);
    }
}

console.log(fun(3))