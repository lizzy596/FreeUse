import React from 'react';

import { Link, useNavigate, useLocation } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../../../actions/posts'
import { START_LOADING } from '../../../constants/actionTypes.js'
import moment from 'moment'

import { Card, CardActions, CardContent, CardMedia, Button, Typography  } from '@mui/material';

import useStyles from './styles'

const Post = ({ post }) => {

  const dispatch = useDispatch()


  const navigate = useNavigate()

const classes = useStyles()

const openPost = () => {
  dispatch({type: START_LOADING})
  
  //dispatch(getPost(post._id))
  navigate(`/posts/${post._id}`)
};





  return ( <Card  elevation={6} className={classes.card}>
  <CardMedia
    component="img"
    className={classes.media}
    image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
    height="200"
    
  />
   <div className={classes.overlay}>
       
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
  <CardContent>
    <Typography variant="h5" gutterBottom component="div" className={classes.title}>
    <span className={classes.bold}> {post.title} </span>
    </Typography>
  
    <Typography variant="h6" gutterBottom color="text.secondary" className={classes.location}>
    <span className={classes.bold}>Location:</span> {post.location}
    </Typography>
    <Typography variant="p" color="text.secondary" component="h4" className={classes.tags}>
    <span className={classes.bold}>tags: </span> {post.tags.map((tag) => `#${tag} `)}
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="medium" className={classes.button} variant="contained" onClick={openPost}>Learn More</Button>
  </CardActions>
</Card>
)};

export default Post;
