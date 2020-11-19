import { combineReducers } from 'redux';
import serverInfoReducer from './serverInfoReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import di1Reducer from './di1Reducer';


export default combineReducers({
    serverInfo: serverInfoReducer,
    error: errorReducer,
    auth: authReducer,
    di1: di1Reducer
});