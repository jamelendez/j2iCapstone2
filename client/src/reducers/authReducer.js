import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    RESET_PW_SUCCESS,
    RESET_PW_FAIL,
    OLD_PW_VALID,
    OLD_PW_INVALID,
    OLD_PW_NULL
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    isOldValid: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case RESET_PW_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            //console.log(action.payload)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
        case RESET_PW_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                isOldValid: null
            };
        case OLD_PW_VALID:
            localStorage.setItem('token', action.payload.token);
            console.log(action.payload)
            console.log("valid entro");
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                isOldValid: true
            }
        case OLD_PW_INVALID:
            console.log("invalid entro");
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                isOldValid: false
            }
        case OLD_PW_NULL:
            return {
                ...state,
                isOldValid: null
            }
        default:
            return state;


    }
}