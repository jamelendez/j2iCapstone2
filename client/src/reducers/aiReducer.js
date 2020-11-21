import {
    GET_AI_CHANNELS,
    GET_AI_AUTO_SCALLING,
    SET_AICHANNEL_STATUS,
    SET_AICHANNEL_NAME,
    CALCULATE_AUTOSCALLING,
    SET_AICHANNEL_SLOPEINTERCEPT_RESULT
} from '../actions/types';
import update from 'immutability-helper';

const initialState = {
    ai: [
        { name: 'AI-1', status: 'Enabled', value: 23, min: 0.001, max: 24.000, ch: 1 },
        { name: 'AI-2', status: 'Enabled', value: 24, min: 0.004, max: 24, ch: 2 },
        { name: 'AI-3', status: 'Enabled', value: 0, min: 0.000, max: 0.006, ch: 3 },
        { name: 'AI-4', status: 'Enabled', value: 0, min: 0.000, max: 0.006, ch: 4 }
    ],
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
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_AI_CHANNELS:
            return {
                ...state
            };
        case SET_AICHANNEL_STATUS:
            return update(state, {
                ai: {
                    [action.payload2 - 1]: {
                        status: { $set: action.payload }
                    }
                }
            })
        case SET_AICHANNEL_NAME:
            return update(state, {
                ai: {
                    [action.payload2 - 1]: {
                        name: { $set: action.payload }
                    }
                }
            })
        case CALCULATE_AUTOSCALLING:
            return update(state, {
                autoScalling: {
                    [action.payload2 - 1]: {
                        result: { $set: action.payload }
                    }
                }
            })
        case SET_AICHANNEL_SLOPEINTERCEPT_RESULT:
            return update(state, {
                slopeIntercept: {
                    [action.payload2 - 1]: {
                        result: { $set: action.payload }
                    }
                }
            })
        default:
            return state;
    }
}