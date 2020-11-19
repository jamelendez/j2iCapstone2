import {
    GET_CHANNELDI1_INFO,
    SET_CHANNELDI1_INFO,
    SET_DICHANNEL_ALIASOFF,
    SET_DICHANNEL_NAME,
    SET_DICHANNEL_ALIASON,
    SET_DICHANNEL_STATUS,
    APPLY_TO_ALL_DI
} from '../actions/types';
import update from 'immutability-helper';

const initialState = {
    di: [
        { name: 'DI-1', status: 'OFF', aliasOFF: 'OFF', aliasON: 'ON', ch: 1 },
        { name: 'DI-2', status: 'OFF', aliasOFF: 'OFF', aliasON: 'ON', ch: 2 },
        { name: 'DI-3', status: 'OFF', aliasOFF: 'OFF', aliasON: 'ON', ch: 3 },
        { name: 'DI-4', status: 'OFF', aliasOFF: 'OFF', aliasON: 'ON', ch: 4 }
    ]
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CHANNELDI1_INFO:
            return {
                ...state
            };
        case SET_CHANNELDI1_INFO:
            return {
                ...state,
                di: [action.payload, ...state.di],
                di: state.di.filter(channel => channel.ch !== action.payload2),
            };
        case SET_DICHANNEL_NAME:
            return update(state, {
                di: {
                    [action.payload2 - 1]: {
                        name: { $set: action.payload }
                    }
                }
            })
        case SET_DICHANNEL_ALIASOFF:
            return update(state, {
                di: {
                    [action.payload2 - 1]: {
                        aliasOFF: { $set: action.payload }
                    }
                }
            })
        case SET_DICHANNEL_ALIASON:
            return update(state, {
                di: {
                    [action.payload2 - 1]: {
                        aliasON: { $set: action.payload }
                    }
                }
            })
        case SET_DICHANNEL_STATUS:
            return update(state, {
                di: {
                    [action.payload2 - 1]: {
                        status: { $set: action.payload }
                    }
                }
            })


        default:
            return state;
    }
} 