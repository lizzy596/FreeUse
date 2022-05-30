import React, { useEffect, useState } from 'react';
// import SearchBar from '../searchbar/SearchBar';
import SearchBar2 from '../SearchBar2/SearchBar2';
import PostContainer from '../Posts/PostContainer'
import { Container, Grow, Paper, Button } from '@mui/material';
import { START_LOADING, SET_SEARCH, SET_SEARCH_ITEM } from '../../constants/actionTypes'
import useStyles from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link } from 'react-router-dom';


import { getPosts, getPostsBySearch } from '../../actions/posts'
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Paginate from '../pagination/Pagination'

//hook from react-router-dom for searching things

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {

  const classes = useStyles()
  const query = useQuery()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const page = query.get('page') || 1
  const searchQuery = query.get('searchQuery');

  //const [search, setSearch] = useState(false)

  const { isLoading, posts, numberOfPages, initial, currentPage, search } = useSelector((state) => state.posts);



  useEffect(() => {

    

    if(search) {
      return
    }

    if(page) dispatch(getPosts(page))

 }, [dispatch, page])



 console.log(isLoading)

  
  //useEffect(()=> {
   // dispatch(getPosts())
 //  }, [])


 //useEffect(() => {
//  const timer = setTimeout(() => {
 //   setSearch(false)
 //   console.log('hey')
//  }, 1000);
//  return () => clearTimeout(timer);
//}, [search]);

const scrollToTop = () => window.scrollTo(0,0)  

//const executeScroll = () => scrollToRef(myRef)  
const executeScroll = () => scrollToTop()   





const handleSearch = (input, indicator, page) => {

  dispatch({ type: 'START_LOADING'})

  if(!input) return;
 dispatch({ type: SET_SEARCH })


 if(Array.isArray(input)) {
   let searchItem = input.join(',')
   dispatch({type: SET_SEARCH_ITEM, payload: searchItem})
   dispatch(getPostsBySearch(indicator, searchItem))
  
   
   navigate(`/posts/search?searchQuery=${indicator}&item=${searchItem}`);
   
   
 

 } else {

  let searchItem = input.trim();
  dispatch({type: SET_SEARCH_ITEM, payload: searchItem})
  dispatch(getPostsBySearch(indicator, searchItem))

  navigate(`/posts/search?searchQuery=${indicator}&item=${searchItem}`);


  
 
   
 } 




}


  
 

  







 if (isLoading) {
 
  return (
    <Paper elevation={0} className={classes.loadingPaper}>
      <CircularProgress size="7em" />
    </Paper>
  );
}


  



  return (
        //<Grow in >
        <Container className={classes.contained} maxWidth="100%">
        <SearchBar2 handleSearch={handleSearch} />
        <PostContainer />
        <Paper>
        <Pagination
      classes={{ ul: classes.ul }}
     // count={numberOfPages}
     count={numberOfPages}
      //page={Number(page) || 1}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
      )}
       />
        </Paper>
     
   
        <Button  variant="contained" color="primary" onClick={executeScroll} className={classes.scrollButton}>Scroll to Top</Button> 
       
         </Container>
         //</Grow>
         




  ) 
};

export default Home;
