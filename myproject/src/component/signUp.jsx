import React from "react";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { addUser, deleteUser ,getUsersList} from "../redux/actions";
//import Login from './component/login';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import axios from "axios";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TableContainer } from "@mui/material";
import { green } from "@mui/material/colors";


function mapStateToProps(state) {
  return {

    usersList: state.usere.usersList
  };
}
export default connect(mapStateToProps)(function Login(props) {
  const getAllUsers=async()=>{
    try{
      const response=await axios.get('http://localhost:5000/user/')
      console.log(response.data);
      if(response.status==200)
      {
        console.log("getUsersList");

        dispatch(getUsersList(response.data))
      }
    }
    catch(error){
     
      console.error(error);

    }
  }
  const addUser=async()=>{
    try{
      const newUser={ firstName: FirstNameRef.current.value, lastName: LastNameRef.current.value, idNumber: IDNumberRef.current.value }


      const response=await axios.post('http://localhost:5000/user/',newUser)
      console.log(response.data);
      if(response.status==200)
      {
        console.log("getUsersList");

        dispatch(addUser(newUser))

      }
    }
    catch(error){
     
      console.error(error);

    }
  }
  const navigate = useNavigate()
  const { usersList, dispatch } = props
  let IDNumberRef = useRef('');
  let FirstNameRef = useRef('');
  let LastNameRef = useRef('');
  // useEffect(function () {
  //   console.log("usersList111111", usersList)
  // }, [usersList])
  useEffect(()=>{getAllUsers()},[])

  const login = (() => {
    if (IDNumberRef.current.value != '' && FirstNameRef.current.value != '' && LastNameRef.current.value != '') {

      const user = usersList.find( x=> x.idNumber === IDNumberRef.current.value )
      if(!user)
    {
      // dispatch(addUser({ idNumber: IDNumberRef.current.value, firstName: FirstNameRef.current.value, LastName: LastNameRef.current.value }))
      addUser();
      alert(`שלום ${FirstNameRef.current.value} ${LastNameRef.current.value}`);
      console.log("usersList22222222222", usersList)
      const userId=IDNumberRef.current.value;
      navigate('/showAllTasks', { state: {userId} })
    }
    else
    alert("יש לך כבר חשבון")
    }
    else
      alert(`חסרים פרטי משתמש`);
  })
  const del = (() => {
    dispatch(deleteUser(IDNumberRef.current.value))
    alert(`שלום ${FirstNameRef.current.value} ${LastNameRef.current.value}`);
    console.log("usersList22222222222", usersList)

  })
  return (

    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', backgroundColor: 'grey' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">להרשמה</Typography>
          
        
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="שם פרטי"
                autoFocus
                inputRef={FirstNameRef}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="שם משפחה"
                name="lastName"
                autoComplete="family-name"
                inputRef={LastNameRef}
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="תעודת זהות"
                type="password"
                id="password"
                autoComplete="new-password"
                inputRef={IDNumberRef}
              />
            </Grid>
          </Grid>
          <Button
            //type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "gray" }}
            // disabled={isDisable}
            onClick={login}
          >
            אשר הרשמה
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                יש לך כבר חשבון? הכנס
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container >



    {/* // <label>שם פרטי</label>
    // <input ref={FirstNameRef}></input>
    // <br></br>
    // <label>שם משפחה</label>
    // <input ref={LastNameRef}></input>
    // <br></br>
    // <label>תעודת זהות</label>
    // <input ref={IDNumberRef}></input>
    // <br></br>
    // <button onClick={login}>כניסה</button>
    // <button onClick={del}>מחיקה</button> */}
    </>
  )
})