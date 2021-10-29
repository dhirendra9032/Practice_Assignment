import React, { createContext,useState } from 'react'

export const ThemeContext=createContext()

const themeData={
    light:{
        textColor:"black",
        background:"#f5f5f5"
    },
    dark:{
        textColor:"white",
        background:"#424242"
    }
}

export const ThemeContextProvider = ({children}) => {
const [currentTheme,setCurrentTheme]=useState("light");
const handleToggle=()=>{
    setCurrentTheme(currentTheme==="light"?'dark':"light")
}

const value={currentTheme,handleToggle,theme:themeData[currentTheme]}

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
