import { useState } from "react"


function Todos(){

   const [text,setText]=useState("");
   const [list,setList]=useState([]);






    return (<div>
        <input 
        value={text}
            type="text"
            onChange={(e)=>setText(e.currentTarget.value)}
        />
    </div>)
}

export {Todos}

//json-server db.json --port 3001 --watch
