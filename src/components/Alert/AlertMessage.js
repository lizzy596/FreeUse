import React from 'react';
import { Typography, Paper, Divider, Button, Alert, AlertTitle } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useStyles from './styles';



const AlertMessage = () => {

  const classes = useStyles()
  console.log('alert message')
  return(
    <>
  <Paper  elevation={0} className={classes.paper} >
  <Alert severity="success" className={classes.alertBox}>
  <AlertTitle>Success</AlertTitle>
  <strong>Your post was successfully deleted</strong>
</Alert>



  </Paper>

  <Paper  elevation={0} className={classes.paper2}>
    <Link to="/" className={classes.link}>
   <Button variant="contained" color="primary" className={classes.button}>Return Home</Button>
   </Link>





  </Paper>
  </>





  )
};

export default AlertMessage;

