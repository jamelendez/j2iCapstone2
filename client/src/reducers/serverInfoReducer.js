import { GET_SERVER_INFO, SET_SERVER_INFO, SERVER_INFO_LOADING } from '../actions/types';

const initialState = {
    serverName: 'My Meliora',
    serverLocation: 'Mayaguez',
    loading: false
}

//action es un object con un type, que viene del file de action
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SERVER_INFO:
            return {
                ...state
            };
        case SERVER_INFO_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
} 