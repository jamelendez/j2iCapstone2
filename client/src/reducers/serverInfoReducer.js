import { GET_SERVER_INFO, SET_SERVER_INFO } from '../actions/types';

const initialState = {
    serverName: 'My Meliora',
    serverLocation: 'Mayaguez'
}

//action es un object con un type, que viene del file de action
export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SERVER_INFO:
            return {
                ...state
            };
        default:
            return state;
    }
} 