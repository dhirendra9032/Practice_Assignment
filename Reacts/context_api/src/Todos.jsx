import React, { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

function Todos() {
    const {theme}=useContext(ThemeContext)
    return (
        <div>
            <h1>Theme is : {theme}</h1>
         
        </div>
    )
}

export  {Todos}
