import React, { Component } from 'react';
import Overview from './Overview'
import GeneralSettings from './GeneralSettings'
import Menu from './Menu'
import UserDefModbusAddressing from './UserDefModbusAddressing'
import IOSettings from './IOSettings'
import ChangePassword from './ChangePassword'
import LdFacDef from './LdFacDef'
import SaveReset from './SaveReset'
//import styles from './syles/MainWindow.module.css'

class MainWindow extends Component {
    constructor(props) {
        super(props);
        //this.state = { currentPage: <Overview /> };
        //this.state = { currentPage: <GeneralSettings /> };
        //this.state = { currentPage: <UserDefModbusAddressing /> };
        //this.state = { currentPage: <IOSettings />}
        //this.state = { currentPage: <ChangePassword />}
        //this.state = { currentPage: <LdFacDef />}
        this.state = { currentPage: <SaveReset />}
    }

    /*//new Menu = Menu
    setPage(page) {
        switch (page) {
            case 0: this.setState(state => ({
                currentPage: <Overview />
            }));
                break;

            case 1: this.setState(state => ({
                currentPage: <GeneralSettings />
            }));
                break;
            default: this.setState(state => ({
                currentPage: <Overview />
            }));
                break;   

        }
    } */

    render() {
        return (
            <div>
                {this.state.currentPage}
            </div>
        )
    }
}

export default MainWindow;