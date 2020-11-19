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
import { connect } from 'react-redux';
import { getServerInfo } from '../actions/serverInfoActions';
import PropTypes from 'prop-types';


class InfoBar extends Component {
    componentDidMount() {
        this.props.getServerInfo();
    }



    render() {
        const { serverName, serverLocation } = this.props.serverInfo;
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <p className="text-white">Server Name: {serverName}</p>
                            <p className="text-white">Server Location: {serverLocation}</p>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

InfoBar.propTypes = {
    getServerInfo: PropTypes.func.isRequired,
    serverInfo: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    serverInfo: state.serverInfo
})

export default connect(mapStateToProps, { getServerInfo })(InfoBar);