import React from 'react'
import { Button,Stack } from '@mui/material'

export const Buttons = () => {
    return (
       <Stack spacing={2} direction="row">
            <Button variant="contained">Click Me</Button>
            <Button variant="outlined">Click me</Button>
            <Button variant="text">Click Me</Button>
       </Stack>
    )
}
