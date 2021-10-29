import { INC_COUNTER,DEC_COUNTER,ADD_TODO,ADD_TOOD_FAILURE,ADD_TOOD_REQ,ADD_TODO_SUCCESS } from "./actionType";

const incCounter=(payload)=>({
    type:INC_COUNTER,
    payload
})

const decCounter=(payload)=>({
    type:DEC_COUNTER,
    payload
})
const addTodo=(payload)=>({
    type:ADD_TODO,
    payload
})


const addTodoReq=(payload)=>({
    type:ADD_TODO_SUCCESS,
    payload
})
const addTodoSuccess=(payload)=>({
    type:ADD_TODO_SUCCESS,
    payload
})
const addTodoFailure=(payload)=>({
    type:ADD_TOOD_FAILURE,
    payload
})



export {incCounter,decCounter,addTodo,addTodoReq,addTodoFailure,addTodoSuccess}