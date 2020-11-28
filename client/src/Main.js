import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import AppNavbar from './components/AppNavbar';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Menu from './components/Menu';
import InfoBar from './components/InfoBar';
import { Col, Container, Row } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store'
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Timer from './components/Timer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { PrivateRoute } from './components/auth/PrivateRoute';


class Main extends Component {
    render() {


        return (
            <div>
                <AppNavbar />
                <InfoBar />
                <Container className="themed-container" fluid={true}>
                    <Row>
                        <Timer />
                    </Row>
                    <Row>
                        <Col sm='auto'>
                            <Menu />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default Main;
