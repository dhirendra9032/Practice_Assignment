import React,{useContext} from 'react'
import {NavLink} from "react-router-dom"
import {AuthContext} from "./AuthContextProvider";








export const Navbar = () => {

    const {isAuth}=useContext(AuthContext);

 const getAuth=()=>{
     if(isAuth){
         return ["Logout","/logout"]
     }else{
        return ["Login","/login"]
     }
 }


    const Links=[{
        title:"Home",
        to:"/home"
    },
    {
        title:"About",
        to:"/about"
    },
    {
        title:"Contact",
        to:"/contact"
    },
    {
        title:"Product",
        to:"/product"
    },
    {
        title:getAuth()[0],
        to:getAuth()[1]
    }
    ]

    return (
        <div className="navbar">
        <h1>Logo</h1>
            <ul>
            {
                Links.map(({title,to},index)=><li key={index}><NavLink  to={to}>{title}</NavLink></li>
                   
                )
            }
            </ul>
        </div>
    )
}

