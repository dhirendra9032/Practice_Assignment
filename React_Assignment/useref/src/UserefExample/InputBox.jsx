import React, { useRef } from 'react'

export const InputBox = () => {
const inpref =useRef("")

    return (
        <div>
            <input type="text" ref={inpref} placeholder="Enter"/>
            <button onClick={()=>{inpref.current.focus()
             }}
            >Click</button>
        </div>
    )
}
