import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import TodoInput from './TodoInput'
import { addTodo,addTodoReq } from '../../Redux/action'
import axios from "axios"
export const Todo = () => {
    const dispatch=useDispatch()
    const todo=useSelector((state)=>state.todo)
    const isLoading=useSelector((state)=>state.isLoading)
    const handleTask=(paylaod)=>{
dispatch(addTodoReq())

axios
.post()
    }
    return (
        <>
            <h1>TODO</h1>
            <TodoInput handleTask={handleTask} />
            {todo &&
            todo.map((item)=>{
                return <h1 key={item.id}>{item.title}</h1>
            })}
        </>
    )
}
