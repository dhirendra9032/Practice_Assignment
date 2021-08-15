//Sub Sequence using recursion

//Normal way
/*let str="abc";
let res="";

function generateSubSequence(str,  res)
{
      if(str.length==0)
            {
           console.log(res);
            return
      }
      generateSubSequence(str.substring(1),res)//character is not present[0]
      generateSubSequence(str.substring(1),res+str.charAt(0))//character is present[1]
}
function main(str,res)
{generateSubSequence(str,res);//main function we are calling orginal string and empty string
}

main(str,res);
*/

// Second ways according lexicographicaly

let str=["a","b","c","d"];
let res="";
var low=0;high=str.length-1;


function subsequence(res,str,low, high)
    {
        if(low<=high+1 && res!="") 
        {
            console.log(res);
        }
        for(var i=low;i<=high;i++)
        {
            subsequence(res+str[i],str,i+1,high);
        }
    }
    
    subsequence(res,str,low, high);


    