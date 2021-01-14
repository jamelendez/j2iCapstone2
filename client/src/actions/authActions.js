import { returnErrors } from './errorActions';
import axios from 'axios';
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

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: USER_LOADING });


    axios
        .get('/api/auth/user', tokenConfig(getState))
        .then(res =>
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};

// Register user
export const register = ({ username, password }) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }

    }

    // Request body
    const body = JSON.stringify({ username, password });

    axios.post('/api/users', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            });
        });
}

// Log in User
export const login = (username, password) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request body
    const body = JSON.stringify({ username, password });
    axios.post('/api/auth', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
            });
        });
}

// Logout User
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
}

export const resetPassword = (user) => (dispatch, getState) => {
    const id = user._id;
    axios.put(`/api/resetPassword/${id}`, user, tokenConfig(getState))
        .then(res => dispatch({
            type: RESET_PW_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'RESET_PW_FAIL'));
            dispatch({
                type: RESET_PW_FAIL
            });
        });
}

export const validateOldPassword = (user) => dispatch => {
    const id = user._id;
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const password = user.password;
    console.log("old password: " + password);
    // Request body
    const body = JSON.stringify({ password });
    axios.post(`/api/validateOldPassword/${id}`, body, config)
        .then(res => dispatch({
            type: OLD_PW_VALID,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'OLD_PW_INVALID'));
            dispatch({
                type: OLD_PW_INVALID
            });
        });
}

export const oldPwNull = () => {
    return {
        type: OLD_PW_NULL
    };
}


// Set up config/headers and token
export const tokenConfig = getState => {
    // Get token from local storage
    const token = getState().auth.token;

    // Headers 
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}