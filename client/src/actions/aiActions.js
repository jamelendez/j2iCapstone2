import axios from 'axios';
import {
    GET_AI_CHANNELS,
    SET_CHANNELAI1_INFO,
    GET_AI_VALUES
} from '../actions/types';

export const getAIChannels = () => dispatch => {
    axios
        .get('/api/analogInputs')
        .then(res =>
            dispatch({
                type: GET_AI_CHANNELS,
                payload: res.data,
            })
        )
}

export const setChannelAiInfo = (channel, chNumber) => dispatch => {
    const id = channel._id;
    axios
        .put(`/api/analogInputs/${id}`, channel)
        .then(res =>
            dispatch({
                type: SET_CHANNELAI1_INFO,
                payload: res.data,
                payload2: chNumber
            })
        )
}

export const sendChannelsStatusToMQTTBroker = () => dispatch => {
    axios.get('/api-broker/analogInputs');
}

export const sendAutoScallingToMQTTBroker = (data) => dispatch => {
    axios.post('/api-broker/analogInputs', data);
}

export const sendSlopeInterceptToMQTTBroker = (data) => {
    axios.post('/api-broker/analogInputs/slopeIntercept', data);
}

export const getAIValuesFromMQTTBroker = () => dispatch => {
    axios.get('/api-broker/analogValues/vai')
        .then(res =>
            dispatch({
                type: GET_AI_VALUES,
                payload: res.data
            })
        );
}