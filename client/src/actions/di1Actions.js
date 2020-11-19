import {
    GET_CHANNELDI1_INFO,
    SET_CHANNELDI1_INFO,
    SET_DICHANNEL_ALIASOFF,
    SET_DICHANNEL_NAME,
    SET_DICHANNEL_ALIASON,
    SET_DICHANNEL_STATUS
} from './types';

export const getChanelDi1Info = () => {
    return {
        type: GET_CHANNELDI1_INFO
    }
}

export const setChannelDiInfo = (channel, chNumber) => {
    return {
        type: SET_CHANNELDI1_INFO,
        payload: channel,
        payload2: chNumber
    }
}

export const setDIChannelName = (name, chNumber) => {
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


