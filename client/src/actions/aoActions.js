import {
    GET_AO_CHANNELS,
    GET_AO_AUTO_SCALLING,
    SET_AOCHANNEL_STATUS,
    SET_AOCHANNEL_NAME,
    SET_AOCHANNEL_SLOPEINTERCEPT_RESULT
} from '../actions/types';

export const getAOChannels = () => {
    return {
        type: GET_AO_CHANNELS
    }
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