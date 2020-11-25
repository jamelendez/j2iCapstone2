
import axios from 'axios';
import {
    GET_AO_CHANNELS,
    SET_AOCHANNEL_STATUS,
    SET_AOCHANNEL_NAME,
    SET_AOCHANNEL_SLOPEINTERCEPT_RESULT
} from '../actions/types';

export const getAOChannels = () => dispatch => {
    axios
        .get('/api/analogOutputs')
        .then(res =>
            dispatch({
                type: GET_AO_CHANNELS,
                payload: res.data,
            })
        )
}

export const setAOChannelName = (name, chNumber) => {
    return {
        type: SET_AOCHANNEL_NAME,
        payload: name,
        payload2: chNumber
    }
}

export const setAOChannelStatus = (status, chNumber) => {
    return {
        type: SET_AOCHANNEL_STATUS,
        payload: status,
        payload2: chNumber
    }
}

export const setAOChannelSlopeInterceptResult = (result, chNumber) => {
    return {
        type: SET_AOCHANNEL_SLOPEINTERCEPT_RESULT,
        payload: result,
        payload2: chNumber
    }
}