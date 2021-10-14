import React from 'react'
import { useState } from 'react/cjs/react.development'

export const Todoinput = ({handleClick}) => {

    const [text,setText]=useState("")

    return (
        <div>
             <input
            value={text}
             onChange={(e)=>setText(e.target.value)}
             type="text" placeholder="add toto"/>
            <button onClick={handleClick(text)}>Add</button>
        </div>
    )
}
