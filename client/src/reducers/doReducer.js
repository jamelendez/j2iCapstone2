import {
    GET_DO_CHANNELS,
    SET_DOCHANNEL_ALIASOFF,
    SET_DOCHANNEL_NAME,
    SET_DOCHANNEL_ALIASON,
    SET_DOCHANNEL_STATUS,
} from '../actions/types';
import update from 'immutability-helper';

const initialState = {
    do: [
        { name: 'DO-1', status: 'OFF', aliasOFF: 'OFF', aliasON: 'ON', ch: 1 },
        { name: 'DO-2', status: 'OFF', aliasOFF: 'OFF', aliasON: 'ON', ch: 2 },
        { name: 'DO-3', status: 'OFF', aliasOFF: 'OFF', aliasON: 'ON', ch: 3 },
        { name: 'DO-4', status: 'OFF', aliasOFF: 'OFF', aliasON: 'ON', ch: 4 }
    ]
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DO_CHANNELS:
            return {
                ...state
            };
        case SET_DOCHANNEL_NAME:
            return update(state, {
                do: {
                    [action.payload2 - 1]: {
                        name: { $set: action.payload }
                    }
                }
            })
        case SET_DOCHANNEL_ALIASOFF:
            return update(state, {
                do: {
                    [action.payload2 - 1]: {
                        aliasOFF: { $set: action.payload }
                    }
                }
            })
        case SET_DOCHANNEL_ALIASON:
            return update(state, {
                do: {
                    [action.payload2 - 1]: {
                        aliasON: { $set: action.payload }
                    }
                }
            })
        case SET_DOCHANNEL_STATUS:
            return update(state, {
                do: {
                    [action.payload2 - 1]: {
                        status: { $set: action.payload }
                    }
                }
            })
        default:
            return state;
    }
} 