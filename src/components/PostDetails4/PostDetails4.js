import React, { useEffect, useState } from 'react';
import { Typography, Paper, Divider, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import useStyles from './styles';
import { getPost2, deletePost, getPostsBySearch  } from '../../actions/posts'
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment'

import { EDIT_ONE, START_LOADING, END_JUST_EDITED, END_JUST_POSTED, END_LOADING} from '../../constants/actionTypes.js'
import { useParams, useHistory, Link, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import AlertMessage2 from '../Alert2/AlertMessage2'

const PostDetails4 = () => {


  const navigate = useNavigate()
  const classes = useStyles()
  const dispatch = useDispatch()
  const { id } = useParams();
  


  const { posts, post, isLoading, justEdited, justPosted, error, message }= useSelector((state) => state.posts);
 

 const [recommendedPosts, setRecommendedPosts] = useState([])
 const [loading, setLoading] = useState(true)




  useEffect(() => {
    dispatch(getPost2(id));
   
  }, [id]);


  useEffect(() => {
    setRecommendedPosts(posts.filter((item) => item._id !== id))
    
   
  }, [post]);

  useEffect(() => {
    setLoading(false)
  }, [recommendedPosts]);


  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({ type: END_JUST_EDITED})
    }, 1000);
    return () => clearTimeout(timeout);

  }, [justEdited])



useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({ type: END_JUST_POSTED})
    }, 2000);
    return () => clearTimeout(timeout);

  }, [justPosted])

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const handleDelete = () => {
    dispatch(deletePost(post._id))
    navigate('/posts/alert')
    
  }

  const setEdit = () => {
    
    dispatch({ type: EDIT_ONE, payload: post })
    navigate('/edit')
    
  }

  const returnHome = () => {
    navigate('/')
  }
  //const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

  const scrollToTop = () => window.scrollTo(0,0)  

  //const executeScroll = () => scrollToRef(myRef)  
  const executeScroll = () => scrollToTop()   

 











  
  if (isLoading) {
    return (
      <Paper elevation={0} color="secondary" className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  if (error) {
    return (
      <Paper elevation={0} color="secondary" className={classes.loadingPaper}>
        <Typography variant="h6">{message}</Typography>
        <Button  variant="contained" color="primary" onClick={returnHome} className={classes.notFound}>Return To All Posts</Button>

      </Paper>
    );
  }

  const openPost = (_id) => navigate(`/posts/${_id}`);


  return (
     <>



  


   
   <Paper className={classes.paper} elevation={6}>
     <div className={classes.titleBox} >
       <div className={classes.title1} >
    <Typography  variant="h3" className={classes.title}>{post.title}</Typography>
    <Typography  variant="h5" className={classes.title}><span className={classes.bold}>Location: </span>({post.location})</Typography>
    <Typography variant="p" className={classes.title}>{moment(post.createdAt).fromNow()}</Typography>
    </div>

    <div className={classes.title2}>
    {justEdited && <AlertMessage2 msg={'Post updated!'} />}
    {justPosted && <AlertMessage2 msg={'Post created successfully!'} />}
    </div>
    </div>
  
     <Divider style={{ margin: '20px 0' }} />

     <div className={classes.details}>
     <div className={classes.text}>
     <img src={post.selectedFile} className={classes.mobileImage}  width="100%"  />
     <Typography gutterBottom variant="h6" className={classes.desc}> <span className={classes.bold}>Description: </span> {post.description}</Typography>
     <Typography gutterBottom variant="h6" className={classes.contact}><span className={classes.bold}>Name: </span> {post.name}</Typography>
    <Typography gutterBottom variant="h6" className={classes.contact}><span className={classes.bold}>Contact: </span> {post.contact}</Typography>
     
     
     
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (<div className={classes.buttons}>
       <Button variant="contained"  className={classes.button} color="success" elevation={3} onClick={setEdit}>Edit</Button>
        <Button variant="contained" className={classes.buttonDelete}  elevation={3} onClick={handleDelete}>Delete</Button>
       
        </div>)}





        <Button  variant="contained" color="primary" onClick={returnHome} className={classes.backButton}>View All Posts</Button>

    
       

        </div>

        <div className={classes.image}>
    <img src={post.selectedFile}  width="100%"  />
    </div>
     </div>


      <Divider style={{ margin: '20px 0' }} />
       
       
       
       
       <> <Typography gutterBottom variant="h4" className={classes.suggested}> <span className={classes.bold}>Suggested Posts: </span></Typography>

        
         <Grid container justify="space-between" spacing={{ xs: 0, md: 2, lg: 2 }}  sx={{ mt: 2 }} className={classes.gridContainer} >
          {recommendedPosts.slice(0,3).map((post) => {

             
          
            return (<Grid item xs={12} sm={12} md={6} lg={3}   key={post._id} elevation={6} onClick={() => openPost(post._id)}  style={{ cursor: 'pointer' }} className={classes.gridItem} > 
            <Card elevation={6} >
            <CardMedia
            component="img"
            height= '200px'
            width="150px"
            className={classes.card}
            image={post.selectedFile}
            alt={post.title}
            />
            <CardContent>
            <Typography gutterBottom variant="h6"> <span className={classes.bold}>{post.title} </span></Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          </CardContent>
            </Card>
            
              
              
             
              
              
              </Grid>) 
             
          })}
           </Grid> </> 
           
           <Button  variant="outlined" color="primary" onClick={executeScroll} className={classes.scrollButton}>Scroll to Top</Button>   
   </Paper>
   
      </>
  )
}

export default PostDetails4