import React,{createContext} from 'react'

 export const ThemeContext =createContext({theme:""});
function ThemeProvider ({children}) {
    return (
       <ThemeContext.Provider value={{theme:"Dark"}}>
           {children}
       </ThemeContext.Provider>
    )
}

export default ThemeProvider
