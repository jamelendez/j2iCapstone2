import { GET_SERVER_INFO, SET_SERVER_INFO, SERVER_INFO_LOADING } from '../actions/types';
import update from 'immutability-helper';

const initialState = {
    serverInfo: [{}],
    loading: false
};

//action es un object con un type, que viene del file de action
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SERVER_INFO:
            return {
                ...state,
                serverInfo: action.payload,
                loading: false
            };
        case SET_SERVER_INFO:
            return update(state, {
                serverInfo: {
                    [0]: {
                        serverInfo: { $set: action.payload }
                    }
                }
            })
        case SERVER_INFO_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
} 