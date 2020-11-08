import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class Menu extends Component {

    render() {
        return (
            <div>
                <ButtonGroup vertical="true">
                    <Button outline color="secondary">Overview</Button>{' '}
                    <Button>General Settings</Button>
                    <Button>User-defined Modbus Addressing</Button>
                    <Button>I/O Settings</Button>
                    <Button>Change Password</Button>
                    <Button>Load Factoru Default</Button>
                    <Button>Save/Reset</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default Menu;