import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Menu from './components/Menu';
import InfoBar from './components/InfoBar';
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Timer from './components/Timer'


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
