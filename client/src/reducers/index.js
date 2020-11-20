import { combineReducers } from 'redux';
import serverInfoReducer from './serverInfoReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import di1Reducer from './di1Reducer';
import doReducer from './doReducer';


export default combineReducers({
    serverInfo: serverInfoReducer,
    error: errorReducer,
    auth: authReducer,
    di1: di1Reducer,
    do1: doReducer
});