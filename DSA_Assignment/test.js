var n=0;


function sumR(n,pow){
    if(pow==0){
        return 1;
    }else{
      return n*sumR(n,pow-1);
    }
}
console.log(sumR(5,3))

