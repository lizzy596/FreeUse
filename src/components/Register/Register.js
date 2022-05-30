import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField }  from '@mui/material';
import useStyles from './styles';

import { GoogleLogin } from 'react-google-login';
import { AUTH, END_ERROR } from '../../constants/actionTypes';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { signin, signup } from '../../actions/auth';
import Icon from './icon';
import {  InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };


const Register = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { error, message } = useSelector((state) => state.auth);
    
  
  
  
  
  
    const [form, setForm] = useState(initialState);
      const [showPassword, setShowPassword] = useState(false);
      const [formCheck, setFormCheck] = useState(false)
      const [formCheckMessage, setFormCheckMessage] = useState('')
      const handleShowPassword = () => setShowPassword(!showPassword);
      const [passwordCheck, setPasswordCheck] = useState(false)
      
      
      const [isSignup, setIsSignup] = useState(true);
      
      
  
      const classes = useStyles()
  
      const switchMode = () => {
        setForm(initialState);
        dispatch({ type: END_ERROR })

        setIsSignup(!isSignup);
        //setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
      };

      const validateForm = (form) => {
          if(form.password.length < 6) {
              setFormCheck(true)
              setPasswordCheck(true)
              setFormCheckMessage('Password must be at least six characters')
              return
          }
        
         if(form.password !== form.confirmPassword) {
             setFormCheck(true)
             setPasswordCheck(true)
             setFormCheckMessage('Passwords do not match')
             return
         }


     dispatch(signup(form, navigate))

        

      }
    
  
  
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormCheck(false)
        setPasswordCheck(false)
        setFormCheckMessage('')
        dispatch({ type: END_ERROR })
        


       
        if (isSignup) {

          validateForm(form)

         
        
         
        } else {
          dispatch({ type: END_ERROR })
          dispatch(signin(form, navigate));
        }
      };
  
  
      const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
      const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token =  res?.tokenId;
    
        try {
         dispatch({ type: AUTH, data: { result, token } });
         navigate('/')
    
        } catch (error) {
          console.log(error);
        }
      };
  
      const googleError = () => alert('Google Sign In was unsuccessful. Try again later');
  













  return (
    <Container component="main" maxWidth="xs">
    <Paper className={classes.paper} elevation={6}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
       </Avatar>
        <Typography component="h1" variant="h5" className={classes.formTitle}>{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        {error && <Typography component="p" color="error" className={classes.errorMessage}>{message}</Typography>}
        <form className={classes.form} onSubmit={handleSubmit} >
          <Grid container spacing={2}>
          { isSignup && (
            <>
         
              <Grid item xs={12} sm={6} >
              <TextField name="firstName" required label="First Name" onChange={handleChange} autoFocus/>
              </Grid>
              
              <Grid item xs={12} sm={6}  >

              <TextField name="lastName" required label="Last Name"  onChange={handleChange} />
              </Grid>

              </>
            )}

           
        <Grid item xs={12} sm={12}>
            <TextField name="email" required label="Email Address" error ={error} className={classes.textInput}  type="email"  onChange={handleChange}  />
        </Grid>
        <Grid item xs={12} sm={12}>
            <TextField name="password"  error ={isSignup ? passwordCheck : error} required  helperText={formCheck ? formCheckMessage : ''} className={classes.textInput} label="Password"   onChange={handleChange}  type={showPassword ? 'text' : 'password'}   InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
            }}  />
            </Grid>
            { isSignup && <Grid item xs={12} sm={12}> <TextField name="confirmPassword" error ={passwordCheck} required onChange={handleChange} className={classes.textInput} label="Confirm Password" type="password" /> </Grid> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          <GoogleLogin
            clientId="996785164624-nnap23qhcgnv8cdav1ubnaae1v3rpg5k.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
    
    </Paper>


  </Container>
  )
}

export default Register