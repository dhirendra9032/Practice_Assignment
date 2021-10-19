import React,{useState} from 'react'
import { InputBox } from './InputBox'
import {v4 as uuid} from "uuid";
import { InputItem } from './InputItem';

const SimpleTodo = () => {
    const [list,setList]=useState([]);

   const handleAdd=(task)=>{
      const  payload={
            title:task,
            status:false,
            id:uuid()
        }
        setList([...list,payload])
    }

    return (
        <div className="wrapper">
        {list.map(item=><InputItem key={item.id} item={item}/>)}
          <InputBox handleAdd={handleAdd}/>
        </div>
    )
}

export default SimpleTodo
