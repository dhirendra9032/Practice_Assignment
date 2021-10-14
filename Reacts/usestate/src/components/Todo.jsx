import React,{useState} from 'react'
import style from "./student.module.css"
import {v4 as uuid} from "uuid";

export const Todo = () => {
    const [text,setText]=useState("");
    const [list,setList]=useState([]);

    const handleClick=()=>{
        const payload={
            title:text,
            status:false,
            id:uuid()
        }
        setList([payload,...list])
        
    }

    const handleDelete=(id)=>{
        const newList=list.filter((item)=>item.id!==id);
        setList(newList);
    }

    return (
       <>
        <div className={style.todoinp}>
            <input
            value={text}
             onChange={(e)=>setText(e.target.value)}
             type="text" placeholder="add toto"/>
            <button onClick={handleClick}>Add</button>
       
            {
                list.map((el)=><div><h3 key={el.id}>{el.title}</h3><button onClick={handleDelete(el.id)}>Delete</button></div>)
            }
        </div>
       </>
    )
}
