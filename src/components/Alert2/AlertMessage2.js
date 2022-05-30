import React, { useEffect } from 'react';
import { Typography, Paper, Divider, Button, Alert, AlertTitle } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useStyles from './styles';



const AlertMessage2 = ({ msg }) => {

  const classes = useStyles()



  
  return(
    <>
  <Paper  elevation={0} className={classes.paper} >
  <Alert severity="success" className={classes.alertBox}>
  <AlertTitle>Success</AlertTitle>
  <strong>{msg}</strong>
</Alert>



  </Paper>


  </>





  )
};

export default AlertMessage2;
