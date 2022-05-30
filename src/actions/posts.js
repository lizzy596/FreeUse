import { GET_ALL, CREATE, GET_ONE, START_LOADING, FETCH_BY_SEARCH, END_LOADING, DELETE_ONE, UPDATE, SET_ERROR_POST, END_ERROR_POST } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const getPosts = (page) => async (dispatch) => {
 

    try {
      dispatch({type: END_ERROR_POST })
      dispatch({ type: START_LOADING });
   
      const { data } = await api.getAllPosts(page);
      
     
    
  
      dispatch({ type: GET_ALL, payload: data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error.message);
    }
  }; 

  /*export const getPosts = () => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.getAllPosts();
    
  
      dispatch({ type: GET_ALL, payload: data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error.message);
    }
  }; */


  export const getPost = (id) => async (dispatch) => {
    try {
      //dispatch({ type: START_LOADING });
      const { data } = await api.getPost(id)
      dispatch({ type: GET_ONE, payload: { post: data } });
      //dispatch({ type: END_LOADING })
      
      
    } catch (error) {
      console.log(error);
      
    }

  } 

  export const getPost2 = (id) => async (dispatch) => {
    try {
      dispatch({type: END_ERROR_POST })
      dispatch({ type: START_LOADING });
      const { data } = await api.getPost(id).catch(function (error) {
        if (error.response) {

          dispatch({ type: SET_ERROR_POST, payload: error.response.data.msg })
          console.log(error.response.data.msg);
          dispatch({ type: END_LOADING })
          return
          //console.log(error.response.status);
          //console.log(error.response.headers);
        }
      });
    
      dispatch({ type: GET_ONE, payload: { data } });
      dispatch({ type: END_LOADING })
      
      
    } catch (error) {
     
      console.log(error);
     
      
    }

  }





  export const createPost = (post, navigate) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.createPost(post);
  
      dispatch({ type: CREATE, payload: data });
  
      navigate(`/posts/${data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  export const getPostsBySearch = (indicator, searchItem) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      //const { data: { data } } = await api.fetchPostsBySearch(indicator, searchItem);
      const { data } = await api.fetchPostsBySearch(indicator, searchItem);
     
     
     
  
      dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
     
    }
  };







//export const createPost = (post) => async (dispatch) => {
 //   try {
  ///    dispatch({ type: START_LOADING });
  //    const { data } = await api.createPost(post);
  
  //    dispatch({ type: CREATE, payload: data });
  //    dispatch({ type: END_LOADING });
   // } catch (error) {
   //   console.log(error.message);
   // }
  //};


  export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
 
  
      dispatch({ type: DELETE_ONE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updatePost = (id, post) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.updatePost(id, post);

    
  
      dispatch({ type: UPDATE, payload: data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };
