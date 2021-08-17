var str="2002";
var l=0;
var h=str.length-1;

function palinndrome(str,l,h){
    if(l>=h){
        console.log("true");
    }else
    
    if(str[l]==str[h]){
        palinndrome(str,l+1,h-1)
    }else{
       console.log("false");
    }

   
}

palinndrome(str,l,h);