import {
    GET_DO_CHANNELS,
    SET_DOCHANNEL_ALIASOFF,
    SET_DOCHANNEL_NAME,
    SET_DOCHANNEL_ALIASON,
    SET_DOCHANNEL_STATUS,
} from './types';

export const getDOChannels = () => {
    return {
        type: GET_DO_CHANNELS
    }
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


