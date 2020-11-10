import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
    ButtonGroup 
    
} from 'reactstrap';


class InfoBar extends Component {
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                <Nav className="mr-auto" navbar>
                            <NavItem>
                                <p className="text-white">Server Name:</p>
                                <p className="text-white">      Server Location:</p>
                            </NavItem>
                        </Nav>
                </Navbar>
            </div>
        )
    }
}

export default InfoBar;