import {
    GET_CHANNELDI1_INFO,
    SET_CHANNELDI1_INFO,
    SET_DICHANNEL_ALIASOFF,
    SET_DICHANNEL_NAME,
    SET_DICHANNEL_ALIASON,
    SET_DICHANNEL_STATUS,
    DI_CHANNELS_LOADING
} from '../actions/types';
import update from 'immutability-helper';

const initialState = {
    di: [{}, {}, {}, {}],
    loading: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CHANNELDI1_INFO:
            return {
                ...state,
                di: action.payload,
                loading: false
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
        case DI_CHANNELS_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
} 