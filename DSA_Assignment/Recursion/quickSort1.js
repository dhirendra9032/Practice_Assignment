
var arr=[4,2,5,6,8,1,3];
var p=0;;
var r=arr.length-1;

function partition(arr,p,r){
   var x=arr[r];
   var  i=p-1;

   for(var j=p;j<=r-1;j++){
       if(arr[j]<=x){
           i++;
           var temp=arr[j];
               arr[j]=arr[i];
               arr[i]=temp;
       }
       
   }
   temp=arr[j];
   arr[j]=arr[i+1];
   arr[i+1]=temp;
   return i+1;
}

function quicksort(arr,p,r){
    if(p<r){
        q=partition(arr,p,r);
        quicksort(arr,p,q-1)   
        quicksort(arr,q+1,r)
    }
  return arr;
}

function printArr(arr){
    result="";
     for(var i=0;i<arr.length;i++){
       result+=arr[i]+" ";
      }
      return result;
    }
    
    console.log(printArr(quicksort(arr,p,r)));