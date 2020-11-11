import { combineReducers } from 'redux';
import serverInfoReducer from './serverInfoReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'

export default combineReducers({
    serverInfo: serverInfoReducer,
    error: errorReducer,
    auth: authReducer
});