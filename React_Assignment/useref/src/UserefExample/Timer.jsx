import React, { useState,useRef } from 'react'

export const Timer = () => {
const [timer,setTimer]=useState(0);
const timerID=useRef(0);

const handleStart=()=>{
    if(timerID.current){
        return
    }
    timerID.current=setInterval(()=>{
        setTimer((prev)=>prev+1)
    },1000)
}

const handleStop=()=>{
    clearInterval(timerID.current);
    timerID.current=0;
}

    return (
        <div className="timer">
            <h1>{timer}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}
