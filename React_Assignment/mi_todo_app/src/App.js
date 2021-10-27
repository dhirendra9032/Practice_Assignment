import React,{useState} from 'react'
import { TodoInput } from './component/TodoInput'
import Todolist from './component/Todolist'
import {v4 as uuid} from "uuid"



const App = () => {

  
  

  const [todo,setTodo]=useState([]);

  const handleAddTodo=(text)=>{
    const newValue={
      id:uuid(),
      title:text,
      isToggle:false
    }
    setTodo([...todo,newValue])
  }

  const handleDelete=(id)=>{
    setTodo(todo.filter((item)=>item.id!==id))
    console.log(id)
  }

  const isToggled=(id)=>{
   
    setTodo(todo.map((item)=>{
      if(item.id===id) item.isToggle=!item.isToggle;
      // console.log(item.isToggle)
      return item
    } ))
  }

  return (
    <div>
      <TodoInput handleAddTodo={handleAddTodo}/>
      <Todolist todo={todo} isToggled={isToggled} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
