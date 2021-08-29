let arr =[[1,2,3],[4,5,6],[7,8,9]];
var n=3,m=3,i=0,j=0;

var result="";

function spiralTr(arr,i,j,n,m,result){
    if(i>=m&&j>=n){
        return result;
    }

    for(let k=n-1;k>=j;k--){
        result+=arr[i][k]+" ";
    }

    for(let k=i+1;k<m;k++){
        result+=arr[k][j]+" ";
    }

    if(i!=m){
        for(let k=j+1;k<n;k++){
            result+=arr[m-1][k]+" ";
        }
    }

    if(j!=n){
        for(let k=m-2;k>i;k--){
            result+=arr[k][n-1]+" ";
        }
    }

   
    return spiralTr(arr,i+1,j+1,n-1,m-1,result);
}

console.log(spiralTr(arr,i,j,n,m,result));