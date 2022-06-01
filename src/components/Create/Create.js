import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Container, Grow } from '@mui/material';
import { JUST_EDITED, JUST_POSTED } from '../../constants/actionTypes'

import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom'
import { createPost, updatePost } from '../../actions/posts';

const Create = () => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {post, posts, isEditing} = useSelector((state) => state.posts);
    
   
   

    useEffect(() => {
      if (isEditing) setPostInfo(post);
      
    }, [isEditing]);
    


    const [postInfo, setPostInfo] = useState({ title: '',  description: '', tags: '', selectedFile: '', location: '', name: '', contact: ''})


    const clear = () => {
   
      setPostInfo({  title: '', description: '', tags: '', selectedFile: '', location:'', name: '', contact: '' });
    };




  

    



    const handleSubmit = (e) => {
      e.preventDefault()

      if(isEditing) {
       dispatch(updatePost(post._id, postInfo))
       dispatch({type: JUST_EDITED})
       
      navigate(`/posts/${post._id}`)
      clear()
      
      } else {

        dispatch(createPost(postInfo, navigate))
        dispatch({type: JUST_POSTED})
        // dispatch(createPost(postInfo));
         clear()
         //navigate('/')

      }
  



    }

    

  return (
    <Grow in>
    <Container maxWidth="lg" className={classes.container}>
    <Paper  elevation={10} className={classes.paper}>
    <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
      <Typography variant="h4" className={classes.formTitle}>{isEditing ? 'Edit Post' : 'Creating a Post'}</Typography>
      <TextField name="title" required className={classes.formField} value={postInfo.title} variant="outlined" label="Title" sx={{ width: '85%' }}  onChange={(e) => setPostInfo({ ...postInfo, title: e.target.value })}  />
      <TextField name="description" required  className={classes.formField}  value={postInfo.description}variant="outlined" label="Description" sx={{ width: '85%' }} multiline rows={4} onChange={(e) => setPostInfo({ ...postInfo, description: e.target.value })}  />
      <TextField name="location" required  className={classes.formField} value={postInfo.location} variant="outlined" label="City or Neighborhood" sx={{ width: '85%' }} onChange={(e) => setPostInfo({ ...postInfo, location: e.target.value })}   />
      <TextField name="name" required className={classes.formField} value={postInfo.name} variant="outlined" label="name" sx={{ width: '85%' }} onChange={(e) => setPostInfo({ ...postInfo, name: e.target.value })}   />
      <TextField name="contact" required className={classes.formField} value={postInfo.contact} variant="outlined" label="contact info" sx={{ width: '85%' }} multiline rows={2}  onChange={(e) => setPostInfo({ ...postInfo, contact: e.target.value })}    />
      <TextField name="tags"  className={classes.formField} value={postInfo.tags} variant="outlined" label="Tags (coma separated)" sx={{ width: '85%' }} onChange={(e) => setPostInfo({ ...postInfo, tags: e.target.value.split(',') })}  />
      <div className={classes.formField} sx={{ width: '85%' }} ><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostInfo({ ...postInfo, selectedFile: base64 })}/></div>
      <Button  variant="contained" className={classes.button} color="primary" size="large" type="submit" fullWidth>{isEditing? 'Edit Post': 'Submit Post'}</Button>
      <Button variant="contained" className={classes.button2}color="secondary" size="large"  onClick={clear} fullWidth>Clear</Button>
    </form>
  </Paper>
  </Container>
  </Grow>
  );
};

export default Create;
