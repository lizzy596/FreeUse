import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { Container, Grow, Paper } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts'




const Paginate = ({ page }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const { isLoading, posts } = useSelector((state) => state.posts);

    console.log(posts)




   


 useEffect(() => {
    if(page) dispatch(getPosts(page))

 }, [page])

//  const { numberOfPages } = useSelector((state) => state.posts)


if (isLoading) {
 
  return (
    <Paper elevation={6} className={classes.loadingPaper}>
      <CircularProgress size="7em" />
    </Paper>
  );
}
  



  return (
      <Pagination
      classes={{ ul: classes.ul }}
     // count={numberOfPages}
     count={5}
      //page={Number(page) || 1}
      page={1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
      )}
       />
  );
};

export default Paginate;
