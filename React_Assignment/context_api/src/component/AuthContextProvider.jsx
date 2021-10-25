import React, { createContext,useState } from 'react'

const AuthContext=createContext()

const AuthContextProvider = ({children}) => {

    const [isAuth,setAuth]=useState(false);
    //const [token,setToken]=useState("")


const handleAuth=()=>{
  
    setAuth(true);
        
   
}
const handleLogout=()=>{
    setAuth(false)
}

const value= {isAuth,handleAuth,handleLogout}

    return (
       <AuthContext.Provider value={value}>
           {children}
       </AuthContext.Provider>
    )
}

export  {AuthContextProvider,AuthContext}
