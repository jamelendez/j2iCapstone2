import React, { Component } from 'react';
import Overview from './Overview'
import GeneralSettings from './GeneralSettings'
import Menu from './Menu'
import UserDefModbusAddressing from './UserDefModbusAddressing'
import IOSettings from './IOSettings'
import ChangePassword from './ChangePassword'
import LdFacDef from './LdFacDef'
import SaveReset from './SaveReset'
import { connect } from 'react-redux'
import { getMenu } from '../actions/MenuAction'
import PropTypes from 'prop-types';
//import styles from './syles/MainWindow.module.css'

class MainWindow extends Component {
    
    componentDidMount() {
        this.props.getMenu();
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
        const { menu } = this.props.menu;
        return (
            <div>
                
            </div>
        )
    }
}

MainWindow.propTypes = {
    getMenu: PropTypes.func.isRequired,
    menu: PropTypes.object.isRequired //represents the state, which is an object
}

const mapStateToProps = (state) => ({
    menu: state.menu
});

export default connect(mapStateToProps, { getMenu }) (MainWindow);