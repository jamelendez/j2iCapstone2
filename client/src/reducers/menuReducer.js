import Overview from '../components/Overview'
import GeneralSettings from '../components/GeneralSettings'
import Menu from '../components/Menu'
import UserDefModbusAddressing from '../components/UserDefModbusAddressing'
import IOSettings from '../components/IOSettings'
import ChangePassword from '../components/ChangePassword'
import LdFacDef from '../components/LdFacDef'
import SaveReset from '../components/SaveReset'
import { GET_MENU, ADD_MENU, DELETE_MENU } from '../actions/types'

const initialState = {
    menu: [
        { currentPage: '<Overview />' },
        { currentPage: '<GeneralSettings />' },
        { currentPage: '<UserDefModbusAddressing />' },
        { currentPage: '<IOSettings />'},
        { currentPage: '<ChangePassword />'},
        { currentPage: '<LdFacDef />'},
        { currentPage: '<SaveReset />'}
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_MENU:
            return {
                ...state
            };
        default:
            return state;
    }
}