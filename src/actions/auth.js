import { AUTH, SET_ERROR } from '../constants/actionTypes';
import * as api from '../api/index.js';



export const signin = (formData, navigate) => async (dispatch) => {
  
 
  
  
  try {
    const { data } = await api.signIn(formData);
   
  

    dispatch({ type: AUTH, data });

    navigate('/');
  } catch (error) {
    
    dispatch({ type: SET_ERROR, payload: 'Invalid Credentials!!' })
    console.log(error);
  }
}; 





















export const signup = (formData, navigate) => async (dispatch) => {
  
  try {

    const { data } = await api.signUp(formData);
    
  

    dispatch({ type: AUTH, data });

    navigate('/')
  } catch (error) {
   
    console.log('hey')
    
    dispatch({ type: SET_ERROR, payload: 'User Already Exists!!' });
  }
}; 




  
    
  



   
