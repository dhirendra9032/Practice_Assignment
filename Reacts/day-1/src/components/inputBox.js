import { useState } from "react/cjs/react.development";
import { v4 as uuid } from 'uuid';
import  ListItem  from './listItem';
import React from "react"


function InputBox(){

    let [text,setText]= useState("");
    const [word,setWord]= useState([])

    const handleChange=(e)=>{
        const {value} = e.target;
     
        setText(value);
        
    }
    const handleAdd=()=>{
        const payload={
            title:text,
            status:false,
            id:uuid()
        }
        let newowrd=[...word,payload];
        setWord(newowrd);
        
    }

    const handleDelete=(id)=>{
        let updatedList=word.filter(item=>item.id!==id);
        setWord(updatedList);
    }
    
    return (
        <div>
       
            <input value={text} onChange={handleChange} type="text" placeholder="Add Something Here"/>
            <button onClick={handleAdd}>Add</button>
            
            <div>{word.map(el=>{
                return (<ListItem handleDelete={handleDelete} key={el.id} {...el} />)
            })}</div>
        </div>
    )
}
export {InputBox};