import { AUTH, LOGOUT, SET_ERROR, END_ERROR } from '../constants/actionTypes';

const authReducer = (state = { authData: null, error: false, message: ''  }, action) => {
    switch (action.type) {
        case AUTH:
          
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action.data };
            
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null };

        case SET_ERROR:
            return { ...state, error: true, message: action.payload };
        case END_ERROR:
            return { ...state, error: false, message: ''};
    
        default:
            return state;
    }
}

export default authReducer