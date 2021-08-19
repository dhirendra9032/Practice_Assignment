var str="123";
var l=0;
var r=str.length-1;

function genPerm(str,l,r){
    if(l==r){
        str1=str.split("");
        str1=str1.join(" ");
        console.log(str1);
    }else{
        for(var i=l;i<=r;i++){
            str=swap(str,l,i);
            genPerm(str,l+1,r)
        }
    }
   
}

genPerm(str,l,r);

function swap(str,l,r){
    str=str.split("");
     var temp=str[r];
     str[r]=str[l];
     str[l]=temp;
    return str.join("");
}

//console.log(swap(str,1,2));


