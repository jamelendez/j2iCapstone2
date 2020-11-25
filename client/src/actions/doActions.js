import axios from 'axios';
import {
    GET_DO_CHANNELS,
    SET_DO_CHANNEL_INFO,
    SET_DOCHANNEL_ALIASOFF,
    SET_DOCHANNEL_NAME,
    SET_DOCHANNEL_ALIASON,
    SET_DOCHANNEL_STATUS,
} from './types';

export const getDOChannels = () => dispatch => {
    axios
        .get('/api/digitalOutputs')
        .then(res =>
            dispatch({
                type: GET_DO_CHANNELS,
                payload: res.data,
            })
        )
}

export const setChannelDoInfo = (channel, chNumber) => dispatch => {
    const id = channel._id;
    axios
        .put(`/api/digitalOutputs/${id}`, channel)
        .then(res =>
            dispatch({
                type: SET_DO_CHANNEL_INFO,
                payload: res.data,
                payload2: chNumber
            })
        )
}

export const setDOChannelName = (name, chNumber) => {
    return {
        type: SET_DOCHANNEL_NAME,
        payload: name,
        payload2: chNumber
    }
}

export const setDOChannelAliasOFF = (aliasOFF, chNumber) => {
    return {
        type: SET_DOCHANNEL_ALIASOFF,
        payload: aliasOFF,
        payload2: chNumber
    }
}

export const setDOChannelAliasON = (aliasON, chNumber) => {
    return {
        type: SET_DOCHANNEL_ALIASON,
        payload: aliasON,
        payload2: chNumber
    }
}

export const setDOChannelStatus = (status, chNumber) => {
    return {
        type: SET_DOCHANNEL_STATUS,
        payload: status,
        payload2: chNumber
    }
}


