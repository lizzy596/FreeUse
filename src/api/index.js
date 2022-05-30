import axios from 'axios';

//const API = axios.create({ baseURL: 'http://localhost:3001' });

const API = axios.create({ baseURL: 'https://freeuseapp.herokuapp.com/' });


API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });


export const getAllPosts = (page) => API.get(`/posts?page=${page}`);
//export const getAllPosts = () => API.get('/posts');
export const fetchPostsBySearch = (indicator, searchItem) => API.get(`/posts/search?searchQuery=${indicator}&item=${searchItem}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const getPost = (id) => API.get(`/posts/${id}`);

export const deletePost = (id) => API.delete(`/posts/${id}`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

export const signIn = (formData) => API.post('/user/login', formData);
export const signUp = (formData) => API.post('/user/register', formData);