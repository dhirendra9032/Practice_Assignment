import React from 'react'
import {Button} from "@mui/material"
import { useHistory } from 'react-router-dom'



const Home = () => {

     const history=useHistory();

    const handleBack=()=>{
        history.pushState("/about")
    }
    return (
        <div>
           <h1>Home Page</h1>
           <Button onClick={()=>handleBack}>Take me to the about page</Button>
        </div>
    )
}

export default Home
