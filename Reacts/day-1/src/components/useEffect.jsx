import { useEffect,useRef, useState } from "react"
import React  from 'react'

function UseEffect(){

  

    const [count,setCount]=useState(10);
    const timerRef=useRef(null);

    useEffect(()=>{

       
        timerRef.current=  setInterval(()=>{
         setCount((prevalue)=>{
            if(prevalue===1){
                clearInterval(timerRef.current)
            }
               return prevalue-1;
           })
        },1000);
       
      return ()=>{
          console.log("unmaount");
          clearInterval(timerRef.current)
      }
       


    },[])
    return (<div>
        <h1>Count : {count}</h1>
    <button onClick={()=>setCount(count+1)}>Add</button>
    </div>
       
        )
}
export {UseEffect}