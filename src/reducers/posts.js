import { GET_ALL, CREATE, GET_ONE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, DELETE_ONE, EDIT_ONE, UPDATE, SET_SEARCH, END_SEARCH, JUST_EDITED, END_JUST_EDITED, JUST_POSTED, END_JUST_POSTED, SET_SEARCH_ITEM, SET_ERROR_POST, END_ERROR_POST } from "../constants/actionTypes";




export default (state = { isLoading: true, search:false, isEditing: false, posts: [],  justEdited: false, justPosted: false, searchItem: '', error: false, message: '', success: false, create_message: ''}, action) => {
    switch (action.type) {
      case START_LOADING:
        return { ...state, isLoading: true };
      case END_LOADING:
        return { ...state, isLoading: false };
      case JUST_EDITED:
        return { ...state, justEdited: true, success: true, create_message: 'Post Updated Successfully!', isLoading: true };
      case END_JUST_EDITED:
        return { ...state, justEdited: false, success: false, create_message: ''  };
     
      case JUST_POSTED:
        return { ...state, justPosted: true, success: true, create_message: 'Post Created Successfully!' };
      case END_JUST_POSTED:
        return { ...state, justPosted: false, success: false, create_message: '' };
      case SET_SEARCH:
        return { ...state, search: true};
        case SET_SEARCH_ITEM:
        return { ...state, searchItem: action.payload};
      case END_SEARCH:
        return { ...state, search: false};
      case GET_ALL:
        return {
          ...state,
          posts: action.payload.data,
          currentPage: action.payload.currentPage,
          numberOfPages: action.payload.numberOfPages,
          
          
        };
        //return { ...state, posts: action.payload };
      case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload.data.data, currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages };
      case CREATE:
        return { ...state, posts: [...state.posts, action.payload] };
      /*case GET_ONE:
        return { ...state, post: action.payload.post, posts: [] }; */
      case GET_ONE:
        console.log(action.payload.data.post)
        return { ...state, post: action.payload.data.post, posts: action.payload.data.posts };
      case UPDATE: 
        return { ...state, isEditing:false, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) }
      case EDIT_ONE: 
        return { ...state, isEditing: true, post: action.payload }
      case DELETE_ONE:
        return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
        case SET_ERROR_POST:
          return { ...state, error: true, message: action.payload };
      case END_ERROR_POST:
          return { ...state, error: false, message: ''};
      default:
        return state;
    }
  };
