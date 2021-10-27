import React from 'react'
import { Card, CardContent, Container, Typography, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const Todos = ({item,isToggled,id,isToggle,handleDelete}) => {

      const todoStyle= isToggle? {textDecorationLine: 'line-through'}:{textDeccoration:"none"}
      

    return (
        <Container>
            <Card varient="outlined" style={{ background: "lightgray", marginTop: "15px" }}>
                <CardContent>
                    <Typography style={todoStyle} varient="h5" componebt="h2">
                        <IconButton>
                        {!isToggle?<CheckCircleIcon onClick={()=>isToggled(id)} style={{ color: "green" }}></CheckCircleIcon>:
                        <CancelIcon onClick={()=>isToggled(id)} style={{ color: "red" }}></CancelIcon>
                        }
                        </IconButton>
                        {item.title}
                        <IconButton style={{float:"right"}}>
                            <DeleteIcon onClick={()=>handleDelete(id)} style={{ color: "red" }}></DeleteIcon>
                        </IconButton>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Todos
