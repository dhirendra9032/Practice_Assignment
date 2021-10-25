import React, { useContext } from 'react'
import { ThemeContext } from "./ThemeContextProvider"
import { Button, Switch } from "@mui/material"
import "./Style.css"
import {AuthContext} from "./AuthContextProvider";






export const Navbar = () => {

    const { currentTheme, handleToggle } = useContext(ThemeContext)
  
    const {isAuth,handleLogout}=useContext(AuthContext)

    

    return (
        <>
            <navbar className={currentTheme === "light" ? "navbardark" : "navbarlight"} maxWidth="xl" >


                <h1>Context API</h1>
                <span>
                   {isAuth?<Button variant="contained"  onClick={handleLogout}>Logout</Button>:<Button></Button>}
                    <Switch onChange={handleToggle} color="warning" />
                    <lable className="label">{currentTheme}</lable>
                </span>


            </navbar>

        </>


    )
}
