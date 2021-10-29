import React, { useContext, useState } from 'react'
import { Dashboard } from './Dashboard'
import {AuthContext} from "./AuthContextProvider";
import "./login.css"
import {Button} from "@mui/material"
import { ThemeContext } from './ThemeContextProvider';
import { NavLink } from 'react-router-dom';
import { Products } from './Products';

// import { Navbar } from './Navbar';



export const Login = () => {

    const {isAuth,handleAuth}=useContext(AuthContext)

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {theme,currentTheme}=useContext(ThemeContext)

const handleLogin=(e)=>{
    e.preventDefault()
   if(email==="admin@gmail.com"&&password==="dk"){
       handleAuth()
   }
}

    return (
        <div >
        {/* <Navbar currentTheme={currentTheme} theme={theme}/> */}
          {  !isAuth?
            <form onSubmit={handleLogin} className="form" >
                <h1>User Login</h1>
                <input type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <Button type="submit" varient="contained">Login</Button>
                

            </form>:
           <NavLink to="./product"><Products/></NavLink>
          }
        </div>
    )
}
