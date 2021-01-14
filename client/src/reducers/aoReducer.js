import {
    GET_AO_CHANNELS,
    SET_CHANNELAO1_INFO,
    SET_AOCHANNEL_STATUS,
    SET_AOCHANNEL_NAME,
    SET_AOCHANNEL_SLOPEINTERCEPT_RESULT,
    AO_CHANNELS_LOADING,
    GET_AO_VALUES
} from '../actions/types';
import update from 'immutability-helper';

const initialState = {
    ao: [{}, {}, {}, {}],
    ao_values: [
        {value: 0},
        {value: 0},
        {value: 0},
        {value: 0}
    ],
    slopeIntercept: [
        { result: 0, ch: 1 },
        { result: 0, ch: 2 },
        { result: 0, ch: 3 },
        { result: 0, ch: 4 }
    ],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_AO_CHANNELS:
            return {
                ...state,
                ao: action.payload,
                loading: false
            };
        case SET_CHANNELAO1_INFO:
            return update(state, {
                ao: {
                    [action.payload2 - 1]: {
                        ao: { $set: action.payload }
                    }
                }
            })
        case SET_AOCHANNEL_STATUS:
            return update(state, {
                ao: {
                    [action.payload2 - 1]: {
                        status: { $set: action.payload }
                    }
                }
            })
        case SET_AOCHANNEL_NAME:
            return update(state, {
                ao: {
                    [action.payload2 - 1]: {
                        name: { $set: action.payload }
                    }
                }
            })
        case SET_AOCHANNEL_SLOPEINTERCEPT_RESULT:
            return update(state, {
                slopeIntercept: {
                    [action.payload2 - 1]: {
                        result: { $set: action.payload }
                    }
                }
            })
        case GET_AO_VALUES:
            return {
                ...state,
                ao_values: action.payload,
            };
        case AO_CHANNELS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}