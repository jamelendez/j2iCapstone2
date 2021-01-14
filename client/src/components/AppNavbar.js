import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import Help from '../modals/HelpModal'
import Logout from './auth/Logout';


class AppNav extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.state({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <NavbarBrand href="/">Meliora Remote I/O Server</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Help />
                            </NavItem>
                            <NavItem>
                                <Logout />
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );

    }

}

export default AppNav;