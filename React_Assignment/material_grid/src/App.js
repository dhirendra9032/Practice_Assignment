import React from 'react'
import { Button, Container, TextField } from "@mui/material"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import { CheckBox, Directions } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const App = () => {
  return (
    <Container>
    
      <Grid container spacing={1} p={1}>
        <Grid item xl={1} lg={4} md={3} sm={6} xs={12} >
          <Paper variant="outlined" style={{ height: "40px", textAlign: "center" }} >col-1</Paper>
        </Grid>
        <Grid item xl={1} lg={4} md={3} sm={6} xs={12}>
          <Paper variant="outlined" style={{ height: "40px", textAlign: "center" }}>col-2</Paper>
        </Grid>
        <Grid item xl={1} lg={4} md={3} sm={6} xs={12}>
          <Paper variant="outlined" style={{ height: "40px", textAlign: "center" }}>col-3</Paper>
        </Grid>
        <Grid item xl={1} lg={4} md={3} sm={6} xs={12}>
          <Paper variant="outlined" style={{ height: "40px", textAlign: "center" }}>col-4</Paper>
        </Grid>
        <Grid item xl={1} lg={4} md={3} sm={6} xs={12} >
          <Paper variant="outlined" style={{ height: "40px", textAlign: "center" }}>col-5</Paper>
        </Grid>
        <Grid item xl={1} lg={4} md={3} sm={6} xs={12}>
          <Paper variant="outlined" style={{ height: "40px", textAlign: "center" }}>col-6</Paper>
        </Grid>
        <Grid item xl={1} lg={4} md={3} sm={6} xs={12}>
          <Paper variant="outlined" style={{ height: "40px", textAlign: "center" }}>col-7</Paper>
        </Grid>
        <Grid item xl={1} lg={4} md={3} sm={6} xs={12}>
          <Paper variant="outlined" style={{ height: "40px", textAlign: "center" }}>col-8</Paper>
        </Grid>
        <Grid item xl={1} lg={4} md={3} sm={6} xs={12} >
          <Paper variant="outlined" style={{ height: "40px", textAlign: "center" }}>col-9</Paper>
        </Grid>
        <Grid item xl={1} lg={4} md={3} sm={6} xs={12}>
          <Paper variant="outlined" style={{ height: "40px", textAlign: "center" }}>col-10</Paper>
        </Grid>
        <Grid item xl={1} lg={4} md={3} sm={6} xs={12}>
          <Paper variant="outlined" style={{ height: "40px", textAlign: "center" }}>col-11</Paper>
        </Grid>
        <Grid item xl={1} lg={4} md={3} sm={6} xs={12}>
          <Paper variant="outlined" style={{ height: "40px", textAlign: "center" }}>col-12</Paper>
        </Grid>
      </Grid>

      <Box sx={{
        width: 300,
        height: 300,
       
        display:"flex",
        justifyContent:"center",
        backgroundColor: '#F4F6F6',
        '&:hover': {
          backgroundColor: '#F4F6F6',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>

        <TextField placeholder="write something"/>
        <CheckBox/>
        <Button varient="contained" background="warining"><PlayArrowIcon/> Start</Button>
        <Button varient="contained" background="warining"><StopCircleIcon/> Stop</Button>
      </Box>

    </Container>

  )
}

export default App