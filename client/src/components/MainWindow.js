import React, { Component } from 'react';
import Overview from './Overview'
import GeneralSettings from './GeneralSettings'
import Menu from './Menu'
import UserDefModbusAddressing from './UserDefModbusAddressing'
//import styles from './syles/MainWindow.module.css'

class MainWindow extends Component {
    constructor(props) {
        super(props);
        //this.state = { currentPage: <Overview /> };
        this.state = { currentPage: <GeneralSettings /> };
        //this.state = { currentPage: <UserDefModbusAddressing /> };
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