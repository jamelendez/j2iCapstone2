import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import MainWindow from './MainWindow'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 0 };
        const mainWindow = new MainWindow();
    }


    render() {
        return (
            <div>
                <ButtonGroup vertical>
                    <Button color="secondary">Overview</Button>{' '}
                    <Button >General Settings</Button>
                    <Button>User-defined Modbus Addressing</Button>
                    <Button>I/O Settings</Button>
                    <Button>Change Password</Button>
                    <Button>Load Factory Default</Button>
                    <Button>Save/Reset</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default Menu;