import React, { Component } from 'react';
import { Button, ButtonGroup, Row, Col } from 'reactstrap';
import Overview from './Overview'
import GeneralSettings from './GeneralSettings'
import UserDefModbusAddressing from './UserDefModbusAddressing'
import IOSettings from './IOSettings'
import ChangePassword from './ChangePassword'
import LdFacDef from './LdFacDef'
import SaveReset from './SaveReset'
import MainWindow from './MainWindow'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: <Overview /> };
    }

    pageOverview = () => {
        this.setState({
            currentPage: <Overview />
        });
    }

    pageGenSet = () => {
        this.setState({
            currentPage: <GeneralSettings  />
        });
    }

    pageUserDefModbusAddressing = () => {
        this.setState({
            currentPage: <UserDefModbusAddressing  />
        });
    }

    pageIOSettigs = () => {
        this.setState({
            currentPage: <IOSettings  />
        });
    }

    pageChangePassword = () => {
        this.setState({
            currentPage: <ChangePassword  />
        });
    }

    pageLdFacDef = () => {
        this.setState({
            currentPage: <LdFacDef  />
        }); 
    }

    pageSaveReset = () => {
        this.setState({
            currentPage: <SaveReset  />
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs='auto'>
                        <ButtonGroup vertical>
                            <Button
                                color="secondary"
                                onClick={this.pageOverview}
                            >
                                Overview
                            </Button>
                            <Button
                                onClick={this.pageGenSet}
                            >
                                General Settings
                            </Button>
                            <Button
                                onClick={this.pageUserDefModbusAddressing}
                            >
                                User-defined Modbus Addressing
                            </Button>
                            <Button
                                onClick={this.pageIOSettigs}
                            >
                                I/O Settings
                            </Button>
                            <Button
                                onClick={this.pageChangePassword}
                            >
                                Change Password
                            </Button>
                            <Button
                                onClick={this.pageLdFacDef}
                            >
                                Load Factory Default
                                </Button>
                            <Button
                                onClick={this.pageSaveReset} 
                            >
                                Save/Reset
                            </Button>
                        </ButtonGroup>
                    </Col>
                    <Col>
                        {this.state.currentPage}
                    </Col>

                </Row>


            </div>
        )
    }
}

export default Menu;