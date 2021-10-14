
import {useState} from 'react'
import {ListItem} from './ListItem'
import {nanoid} from "nanoid"

function Todos(){

    const [text,setText]=useState("");
    const [todosList,setTodosList]=useState([]);
    const [show,setShow]=useState(false);

    const handleClick=()=>{
        const payload={
            title:text,
            status:true,
            id:nanoid(4)
        }
        setTodosList([...todosList,payload]);
    }




return <>

<div>
   <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="Write Something" />
   <button onClick={handleClick}>Add</button>
   <button onClick={()=>setShow(true)}>ShowList</button>
</div>

{show ? <ListItem key={nanoid()}  list={todosList}/> :"hello"}

</>
}

export {Todos}