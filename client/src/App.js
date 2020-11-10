import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppNavbar from './components/AppNavbar';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Menu from './components/Menu';
import InfoBar from './components/InfoBar';
import { Col, Container, Containern, Row } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store'

//import Overview from './components/Overview';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Timer from './components/Timer'
import Login from './components/Login'
//import styles from './styles/MainWindow.module.css'


function App() {
  const page = () => {
    return (
      <div>
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

  const login = () => {
    return (
      <div>
        <Container>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  name="usr"
                  id="username"
                  placeholder="username"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="userpassword"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
            <Button
              onClick={page()}
            >Log In</Button>
          </Form>
        </Container>

      </div>
    );
  }



  return (
    <div className="App">
      <Provider store={store}>
        <AppNavbar />
        <Container>
          <Router>
            <Switch>
              <Route path="/menu">
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
              </Route>
              <Route path="/">
                {login()}
              </Route>


            </Switch>
          </Router>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
