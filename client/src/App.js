import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Menu from './components/Menu';
import MainWindow from './components/MainWindow';
import { Col, Container, Containern, Row } from 'reactstrap';
//import Overview from './components/Overview';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Timer from './components/Timer'
//import styles from './styles/MainWindow.module.css'


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container className="themed-container" fluid={true}>
        <Row>
          <Timer />
        </Row>
        <Row>
          <Col xs="auto">
            <Menu />
          </Col>
          <Col>
            <MainWindow />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
