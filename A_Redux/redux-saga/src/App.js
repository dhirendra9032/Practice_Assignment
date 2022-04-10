import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {AddAction, IncrementAction} from './redux/action';
import './App.css';

const App = () => {
 
const dispatch=useDispatch();
const number=useSelector((state)=>state.count)

const handleIncrease=()=>{
  dispatch(IncrementAction(5))
}

const handleAdd=()=>{
  dispatch(AddAction(1))
}

  return (
    <div className='main'>
      <h1>{number}</h1>
      <div className='btn-container'>
      <button onClick={handleAdd}>Add 1</button>
      <button>Subtract</button>
      <button>Multiply</button>
      <button onClick={handleIncrease}>Increment</button>
      <button>Decrement</button>
      </div>
    </div>
  )
}

export default App