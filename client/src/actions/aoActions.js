
import axios from 'axios';
import {
    GET_AO_CHANNELS,
    SET_CHANNELAO1_INFO,
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

export const setChannelAoInfo = (channel, chNumber) => dispatch => {
    const id = channel._id;
    axios
        .put(`/api/analogOutputs/${id}`, channel)
        .then(res =>
            dispatch({
                type: SET_CHANNELAO1_INFO,
                payload: res.data,
                payload2: chNumber
            })
        )
}

export const sendChannelsStatusToMQTTBroker = () => dispatch => {
    axios.get('/api-broker/analogOutputs');
}

export const sendSlopeInterceptToMQTTBroker = (data) => dispatch => {
    axios.post('/api-broker/analogOutputs/slopeIntercept', data);
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