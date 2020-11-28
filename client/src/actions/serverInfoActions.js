import axios from 'axios';
import { GET_SERVER_INFO, SET_SERVER_INFO, SERVER_INFO_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions'

export const getServerInfo = () => dispatch => {
    dispatch(setServerInfoLoading());
    axios
        .get('/api/serverInfo')
        .then(res =>
            dispatch({
                type: GET_SERVER_INFO,
                payload: res.data
            })
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setServerInfo = (newServerInfo) => (dispatch, getState) => {
    const id = newServerInfo._id;
    axios
        .put(`/api/serverInfo/${id}`, newServerInfo, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: SET_SERVER_INFO,
                payload: res.data
            })
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setServerInfoLoading = () => {
    return {
        type: SERVER_INFO_LOADING
    }
}