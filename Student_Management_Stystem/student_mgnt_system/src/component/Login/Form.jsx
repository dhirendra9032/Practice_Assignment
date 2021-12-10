import React from 'react'
import {Box,FormControl,InputLabel,Input,Typography} from "@mui/material"
import { Button } from '@material-ui/core'

export const Form = () => {
    return (
        <Box   component="form"
        sx={{
          '& > :not(style)': { m: 1 },display:'flex',flexDirection:'column'
        }}
        noValidate
        autoComplete="off">
             <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, display:'flex'  }}
          >Login</Typography>
             <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Username</InputLabel>
        <Input id="component-simple" type="text"  />
      </FormControl>
      <FormControl>
      <InputLabel htmlFor="component-simple">Password</InputLabel>
        <Input id="component-simple" type="password" />
      </FormControl>
      <FormControl>
       <Button sx={{mt:4}} >Login</Button>
      </FormControl>
        </Box>
    )
}
