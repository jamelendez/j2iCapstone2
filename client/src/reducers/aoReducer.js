import {
    GET_AO_CHANNELS,
    GET_AO_AUTO_SCALLING,
    SET_AOCHANNEL_STATUS,
    SET_AOCHANNEL_NAME,
    SET_AOCHANNEL_SLOPEINTERCEPT_RESULT
} from '../actions/types';
import update from 'immutability-helper';
const initialState = {
    ao: [
        { name: 'AO-1', status: 'Disabled', value: 23, min: 0.001, max: 24.000, ch: 1 },
        { name: 'AO-2', status: 'Disabled', value: 24, min: 0.004, max: 24.000, ch: 2 },
        { name: 'AO-3', status: 'Disabled', value: 0, min: 0.000, max: 0.006, ch: 3 },
        { name: 'AO-4', status: 'Disabled', value: 0, min: 0.000, max: 0.006, ch: 4 }
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
        case GET_AO_CHANNELS:
            return {
                ...state
            };
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
        default:
            return state;
    }
}