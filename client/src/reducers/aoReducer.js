import {
    GET_AO_CHANNELS,
    SET_CHANNELAO1_INFO,
    GET_AO_AUTO_SCALLING,
    SET_AOCHANNEL_STATUS,
    SET_AOCHANNEL_NAME,
    SET_AOCHANNEL_SLOPEINTERCEPT_RESULT,
    AO_CHANNELS_LOADING
} from '../actions/types';
import update from 'immutability-helper';
const initialState = {
    ao: [{}, {}, {}, {}],
    inputs: [
        { value: 23, min: 0.001, max: 24.000, ch: 1 },
        { value: 24, min: 0.004, max: 24, ch: 2 },
        { value: 0, min: 0.000, max: 0.006, ch: 3 },
        { value: 0, min: 0.000, max: 0.006, ch: 4 }
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
        case AO_CHANNELS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}