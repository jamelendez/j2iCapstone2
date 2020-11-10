import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Menu from './components/Menu';
import InfoBar from './components/InfoBar';
import { Col, Container, Containern, Row } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store'

//import Overview from './components/Overview';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Timer from './components/Timer'
//import styles from './styles/MainWindow.module.css'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
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
      </Provider>


    </div>
  );
}

export default App;
