import axios from 'axios';
import { GET_SERVER_INFO, SET_SERVER_INFO, SERVER_INFO_LOADING } from './types';

export const getServerInfo = () => {
    //dispatch(setServerInfoLoading());
    //axios
    //    .get('/api/')
    return {
        type: GET_SERVER_INFO
    };
};

export const setServerInfo = (serverName, serverLocation) => {
    return {
        type: SET_SERVER_INFO,
        payload: serverName,
        payload2: serverLocation
    };
};

export const setServerInfoLoading = () => {
    return {
        type: SERVER_INFO_LOADING
    }
}