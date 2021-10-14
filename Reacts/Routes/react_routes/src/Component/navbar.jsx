import React from 'react'
import { Link } from 'react-router-dom'

import "./style1.css"

const Navbar = () => {
    return (
        <div className="navbar">
            
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Conatct</Link>
            <Link to="/user">User</Link>
            <Link to="/login">Login</Link>

            
        </div>
    )
}

export default Navbar
