import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { decCounter,incCounter } from '../Redux/action'

const Counter = () => {
    const dispatch=useDispatch();
    const count=useSelector((state=>state.count))
const handleInc=()=>{
    dispatch(incCounter(2))
}
const handleDec=()=>{
    dispatch(decCounter(2))
}

    return (
        <>
        <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </>
    )
}

export default Counter
