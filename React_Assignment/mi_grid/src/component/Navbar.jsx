import React from 'react'
import {NavLink} from "react-router-dom"


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
}]


export const Navbar = () => {
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

