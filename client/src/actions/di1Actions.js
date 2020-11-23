import axios from 'axios';
import {
    GET_CHANNELDI1_INFO,
    SET_CHANNELDI1_INFO,
    SET_DICHANNEL_ALIASOFF,
    SET_DICHANNEL_NAME,
    SET_DICHANNEL_ALIASON,
    SET_DICHANNEL_STATUS
} from './types';

export const getChanelDi1Info = () => dispatch => {
    axios
        .get('/api/digitalInputs')
        .then(res =>
            dispatch({
                type: GET_CHANNELDI1_INFO,
                payload: res.data,
            })
        )
}

export const setChannelDiInfo = (channel, chNumber) => dispatch => {
    const id = channel._id;
    axios
        .put(`/api/digitalInputs/${id}`, channel)
        .then(res =>
            dispatch({
                type: SET_CHANNELDI1_INFO,
                payload: res.data,
                payload2: chNumber
            })
        )
}

export const setDIChannelName = (name, chNumber) => dispatch => {
    return {
        type: SET_DICHANNEL_NAME,
        payload: name,
        payload2: chNumber
    }
}

export const setDIChannelAliasOFF = (aliasOFF, chNumber) => {
    return {
        type: SET_DICHANNEL_ALIASOFF,
        payload: aliasOFF,
        payload2: chNumber
    }
}

export const setDIChannelAliasON = (aliasON, chNumber) => {
    return {
        type: SET_DICHANNEL_ALIASON,
        payload: aliasON,
        payload2: chNumber
    }
}

export const setDIChannelStatus = (status, chNumber) => {
    return {
        type: SET_DICHANNEL_STATUS,
        payload: status,
        payload2: chNumber
    }
}


