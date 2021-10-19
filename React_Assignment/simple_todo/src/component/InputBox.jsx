import React, { useState } from 'react'

export const InputBox = ({handleAdd}) => {

    const [task,setTask]=useState("")

    return (
        <div className="inpBox">
            <input
            onChange={(e)=>setTask(e.target.value)}
             type="text" placeholder="Write Something"/>
            <input className="inp" type="text" value="+" onClick={()=>{handleAdd(task)}}/>
        </div>
    )
}
