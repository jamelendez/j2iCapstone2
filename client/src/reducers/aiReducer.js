import {
    GET_AI_CHANNELS,
    SET_CHANNELAI1_INFO,
    GET_AI_VALUES,
    AI_CHANNELS_LOADING
} from '../actions/types';
import update from 'immutability-helper';

const initialState = {
    ai: [{}, {}, {}, {}],
    values: [{}, {}, {}, {}],
    autoScalling: [
        { n1: 0, n2: 0, m1: 0, m2: 0, unit1: 'V', unit2: 'V', result: 0, ch: 1 },
        { n1: 0, n2: 0, m1: 0, m2: 0, unit1: 'V', unit2: 'V', result: 0, ch: 2 },
        { n1: 0, n2: 0, m1: 0, m2: 0, unit1: 'V', unit2: 'V', result: 0, ch: 3 },
        { n1: 0, n2: 0, m1: 0, m2: 0, unit1: 'V', unit2: 'V', result: 0, ch: 4 }
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
        case GET_AI_CHANNELS:
            return {
                ...state,
                ai: action.payload,
                loading: false
            };
        case SET_CHANNELAI1_INFO:
            return update(state, {
                ai: {
                    [action.payload2 - 1]: {
                        ai: { $set: action.payload }
                    }
                }
            })
        case GET_AI_VALUES:
            return update(state, {
                values: {
                    [action.payload2 - 1]: {
                        value: { $set: action.payload }
                    }
                }
            })
        case AI_CHANNELS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}