import React, { useState, useEffect } from 'react';
import Post from './Post/Post'
import { Grid, Container, Typography, Paper } from '@mui/material';
import useStyles from './styles'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useParams, useHistory, Link, useNavigate } from 'react-router-dom';
import {  END_SEARCH } from '../../constants/actionTypes';
//import { getPosts } from '../../actions/posts'
import CircularProgress from '@mui/material/CircularProgress';


const PostContainer = () => {

  const dispatch = useDispatch()
  const classes = useStyles()
 // const dispatch = useDispatch()
 // const posts = useSelector((state) => state.posts.posts);

 const resetSearch = () => {
  dispatch({ type: END_SEARCH })
}

  
  const { posts, search, searchItem, isLoading } = useSelector((state) => state.posts);

  
 
  if (isLoading) {
    return (
      <Paper elevation={0} color="secondary" >
        <CircularProgress size="7em" />
      </Paper>
    );
  }
  

 
 


  return (
  //<Container maxWidth="xl" >
     <>
    { search && <div className={classes.search}>
    {posts.length < 1 ? <Typography gutterBottom variant="p"><span className={classes.bold}>No items matched your search query!</span></Typography> :
    <Typography gutterBottom variant="p"> Showing results for: <span className={classes.bold}>{searchItem}</span></Typography>}
   <Link to='/' onClick={resetSearch}>Back to All Posts</Link>
   </div>}
     <Grid container  spacing={0} className={classes.gridContainer} >
    
     {posts.map((post) => (
           <Grid item xs={12} sm={12} md={6} lg={3}    key={post._id} > 
           <Post post={post} />
           </Grid>

         ))}
     
        

       

     
  </Grid>
  </>
  //</Container>
  )};

export default PostContainer;
