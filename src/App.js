import React from 'react';
//import NavBar from './components/navbar/NavBar'
//import NavBar2 from './components/navbar2/NavBar2'
//import NavBar3 from './components/navbar3/NavBar3'
import Home from './components/home/Home'
import Create from './components/Create/Create'
import AlertMessage from './components/Alert/AlertMessage'
//import Auth from './components/Auth/Auth'
import ChipMaker from './components/Chip/Chip'
import Error from './components/Error/Error'
import Auth2 from './components/Auth2/Auth2'
import Register from './components/Register/Register'
import NavBar4 from './components/navbar4/NavBar4'


//import PostDetails from './components/PostDetails/PostDetails'
//import PostDetails2 from './components/PostDetails2/PostDetails2'
//import PostDetails3 from './components/PostDetails3/PostDetails3'
import PostDetails4 from './components/PostDetails4/PostDetails4'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import {Helmet} from "react-helmet";








const App = () => {

  const { authData } = useSelector((state) => state.auth);
 
  ///so that you can only access signin page if you're logged out
  //const user = JSON.parse(localStorage.getItem('profile'))
  



 


  return (
    <BrowserRouter>
     <Helmet>
        <title>FreeUse-Austin Goods Exchange</title>
        <meta name="description" content="austin goods exchange" />
    </Helmet>
    
    
    <Container maxWidth="xl">
    <NavBar4 />
     <Routes>
      <Route path="/"  element={<Navigate to='/posts' />}  />
      <Route path="/posts" element={<Home />} />
      <Route path="/posts/search" element={<Home />} />
      <Route path="/chip" element={<ChipMaker />} />
      <Route path="/new" element={<Create />} />
      <Route path="/edit" element={<Create />} />
      <Route path="/posts/alert" element={<AlertMessage />} />
      <Route path="/posts/:id" element={<PostDetails4 />} />
      <Route path="/auth" element={!authData ? <Auth2 /> : <Navigate to='/posts' /> } />
      <Route path="/register" element={!authData ? <Register /> : <Navigate to='/posts' /> } />
      <Route path="*" element={<Error />} />

      

      
     
    

    
     </Routes>
    </Container>
    
 
    </BrowserRouter>

  );
};

export default App;
