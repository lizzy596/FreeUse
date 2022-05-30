import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Button } from '@mui/material';
import useStyles from './styles';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT, END_SEARCH, END_ERROR, GET_ALL  } from '../../constants/actionTypes';
import   Logo  from '../../assets/redo6.svg';
import decode from 'jwt-decode';









const NavBar4 = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
 









const logout = () => {

  if(!user) {
    navigate('/register')
    return
  }

  dispatch({ type: LOGOUT})
  setUser(null)

  navigate('/')
  
}

useEffect(() => {
  const token = user?.token

  if (token) {
    const decodedToken = decode(token);
      if(decodedToken.exp < Date.now() / 1000) logout()
    //if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  }
   
  setUser(JSON.parse(localStorage.getItem('profile')))
 }, [location])




 

 

    const classes = useStyles()

    const addPost = () => {
      navigate('/new')

    }

    const signIn = () => {
        navigate('/auth')
    }

    const postSignIn = () => {
        if(user) {
            navigate('/new')

        } else {
            navigate('/auth')
        }
    }


  const resetSearch = () => {
    dispatch({type: END_ERROR})
    dispatch({ type: END_SEARCH })
    
  }
  






  return (
  
  <AppBar className={classes.appBar} elevation={0} >

    <div className={classes.contents}>

    

  
    <Link to="/" className={classes.logoLink} onClick={resetSearch}>
         <div className={classes.logo2}>
        
        
          <img src={Logo} alt="logo"  className={classes.image} />
          <Typography variant="p" className={classes.text1} >Austin's Free Goods Exchange</Typography>
          
        
       
         </div>
        </Link>
   

     

    
    
    <> 
    
    
     {user && <div className={classes.welcome}><Typography className={classes.userName} variant="p">Welcome {user?.result.name}!</Typography></div>}
       
       
    
       
       <div className={classes.buttons1}>
      
         <Button variant="contained" elevation={4} className={classes.button} color="error" onClick={postSignIn}>{user? 'Post' : 'Login' }</Button>

         <Button variant="text"  className={classes.mobileButton}  style={{color: 'white'}} onClick={logout}>{user? 'Logout': 'Register'}</Button>
         
         
         <Button variant="contained" elevation={4} className={classes.mainLogout} color="info" onClick={logout}>{user? 'Logout' : 'Register'}</Button>
         
         
         </div>
         </> 

        

     </div>
        </AppBar> 
       
  )
};

export default NavBar4;