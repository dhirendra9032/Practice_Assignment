import { Paper } from '@mui/material'
import loginIcon from "./login.svg"
import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Form } from './Form'
import { Box } from '@mui/system'

export const Login = () => {
    return (
        <div>
            <Navbar/>
            {/* <Box>
            <Box
           sx={{maxWidth:'md',display:'flex',margin:"100px auto"}}

            >
                <Box sx={{flex:1,display:{xs:'none',md:'block'}}}><img src={loginIcon} alt="login" width="60%" margin="20px auto" /></Box>
                <Box sx={{flex:1}}><Form/></Box>
            </Box>
            </Box> */}
        </div>
    )
}
