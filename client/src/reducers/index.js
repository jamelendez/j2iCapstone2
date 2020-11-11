import { combineReducers } from 'redux';
import serverInfoReducer from './serverInfoReducer'

export default combineReducers({
    serverInfo: serverInfoReducer
});