import {
    GET_DO_CHANNELS,
    SET_DO_CHANNEL_INFO,
    SET_DOCHANNEL_ALIASOFF,
    SET_DOCHANNEL_NAME,
    SET_DOCHANNEL_ALIASON,
    SET_DOCHANNEL_STATUS,
    DO_CHANNELS_LOADING
} from '../actions/types';
import update from 'immutability-helper';

const initialState = {
    do: [{}, {}, {}, {}],
    loading: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DO_CHANNELS:
            return {
                ...state,
                do: action.payload,
                loading: false
            };

        case SET_DO_CHANNEL_INFO:
            return update(state, {
                do: {
                    [action.payload2 - 1]: {
                        do: { $set: action.payload }
                    }
                }
            })
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
        case DO_CHANNELS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
} 