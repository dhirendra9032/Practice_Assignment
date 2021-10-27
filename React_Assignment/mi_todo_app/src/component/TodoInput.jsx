import React, { useState } from 'react';
import { FormControl, Container, TextField, Button } from "@mui/material";

export const TodoInput = ({handleAddTodo}) => {


    const [text, setText] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        handleAddTodo(text);

    }


    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth={true} >
                    <TextField
                        onChange={(e)=>setText(e.target.value)}
                        variant="standard"
                        name="add-todo" value={text}
                        label="Write Something"
                        style={{ marginTop: "15px" }} />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        style={{ marginTop: "15px" }}>
                        Add
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
