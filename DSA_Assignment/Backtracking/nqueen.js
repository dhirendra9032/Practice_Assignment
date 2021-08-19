var arr=[[0,1,0,0],[0,0,0,1],[1,0,0,0],[0,0,1,0]];
var row=4;
var col=4;

function isQS(arr,row,col){
    for(var i=row-1;i>=0;i--){
        for(var j=col;j>=0;j--){
            if(arr[i][j]==1){
                return false;
            }
        }
    }

    for(var i=row-1;i>=0;i--){
        for(var j=col-1;j>=0;j--){
            if(arr[i][j]==1){
                return false;
            }
        }
    }

    for(var i=row-1;i>=0;i--){
         for(var j=col+1;j<arr.length;j++){
             if(arr[i][j]==1){
                 return false;
            }
        }
    }

    return true;
    
}