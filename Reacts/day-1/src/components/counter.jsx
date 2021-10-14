import { useState } from 'react';

function Counter({x}){
  let [count,setCount] =useState(x);
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Add</button>
    </div>
  
  )
}

export {Counter}