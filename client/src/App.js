import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Menu from './components/Menu';
import MainWindow from './components/MainWindow';
import { Col, Container, Containern, Row } from 'reactstrap';
import OverviewTables from './components/OverviewTables';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import styles from './styles/MainWindow.module.css'


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container className="themed-container" fluid={true}>
        <Row>
          <Col xs = "auto"> 
            <Menu />
          </Col>
          <Col>
            <OverviewTables />
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
