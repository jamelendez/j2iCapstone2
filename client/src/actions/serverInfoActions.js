import { GET_SERVER_INFO, SET_SERVER_INFO } from './types';

export const getServerInfo = () => {
    return {
        type: GET_SERVER_INFO
    };
};