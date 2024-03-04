import React from "react";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { addUser,getUsersList,deleteUser } from "../redux/actions";
import SignUp from "./signUp";
import axios from "axios";
//import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useParams, Navigate, useNavigate, useLocation } from 'react-router-dom'


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
//import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
//import Box from '@mui/material/Box';
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
  const delUser=async()=>{
    try{
      //const newUser={ idNumber: IDNumberRef.current.value }

      console.log(IDNumberRef.current.value,"IDNumberRef");
      const id=IDNumberRef.current.value
      const response=await axios.delete(`http://localhost:5000/user/${id}`)
      console.log(id,"IDNumberRef");
      console.log(response.data);
      if(response.status==200)
      {
        console.log("delUser");

        dispatch(deleteUser(IDNumberRef.current.value))

      }
    }
    catch(error){
     
      console.error(error);

    }
  }
  
  const navigate = useNavigate()
  const { usersList, dispatch } = props
  let IDNumberRef = useRef('');
  // const [showLogin,setShowLogin]=useState(true);
  // const [showSignUp, setShowSignUp] = useState(false);
  // let FirstNameRef = useRef('');
  // let LastNameRef = useRef('');
  useEffect(()=>{getAllUsers()},[])

  // useEffect(function () {
  //   console.log("usersList", usersList)
  // }, [, usersList])

  const login = (() => {
    getAllUsers()
    console.log(`${IDNumberRef.current.value}= IDNumberRef`)
    const userId = IDNumberRef.current.value;
    console.log("userId11111", userId)
    const userFound = usersList.find(user => user.idNumber === IDNumberRef.current.value);
    console.log(`userFound`, userFound)
    if (userFound != undefined) {
      alert(`שלום ${userFound.firstName} ${userFound.lastName}`);
      navigate('/showAllTasks', { state: { userId } })
    } else {
      alert("המשתמש לא נמצא");
    }

  })
  const register = () => {

    navigate('/signUp', { state: {} })

  }
  const del = (() => {
    delUser()
    // console.log(`${IDNumberRef.current.value}= IDNumberRef`)
    // const userId = IDNumberRef.current.value;
    // console.log("userId11111", userId)
    // const userFound = usersList.find(user => user.idNumber === IDNumberRef.current.value);
    // console.log(`userFound`, userFound)
    //if (userFound != undefined) {
      //alert(`שלום ${userFound.firstName} ${userFound.lastName}`);
      //dispatch(deleteUser(IDNumberRef.current.value))
      navigate('/', { state: {} })
    // } else {
    //   alert("המשתמש לא נמצא");
    // }

  })
  // console.log(showLogin," showLogin")
  // if (showLogin) {
  //debugger
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
          <Typography component="h1" variant="h5">לכניסה</Typography>


          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
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
              כניסה
            </Button>
            <Button
              //type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "gray" }}
              // disabled={isDisable}
              onClick={del}
            >
              מחיקה
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signUp" variant="body2">
                  עדיין אין לך חשבון? צור חשבון
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container >




      {/* <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      > */}
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" /> */}

        {/* <TextField id="standard-basic" label="תעודת זהות" variant="standard" inputRef={IDNumberRef} />

      </Box> */}





      {/* <label>תעודת זהות</label>
        <input ref={IDNumberRef}></input> */}
      {/* <br />
      <button onClick={login}>כניסה</button>
      <button onClick={register}>הרשמה</button>
      <button onClick={register}>מחיקה</button> */}
      {/* {showSignUp && <SignUp />} */}
    </>
  );
  // }

  // return (
  //   <>

  //     {showSignUp && <SignUp />}
  //   </>
  // );

})
