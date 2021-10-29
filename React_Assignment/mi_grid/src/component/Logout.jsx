import React, { useEffect,useContext } from 'react'
import {AuthContext} from "./AuthContextProvider";

export const Logout = () => {
    const {handleLogout}=useContext(AuthContext);
useEffect(()=>{
    handleLogout()
},[])

    return (
        <div>
            <h1>Logged out Succesfully !</h1>
        </div>
    )
}
