import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppNavbar from './components/AppNavbar';
import AppNavbarLogin from './components/AppNavbarLogin';
import { Button, Form, FormGroup, Input, Label, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Menu from './components/Menu';
import InfoBar from './components/InfoBar';
import { Col, Container, Row } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store'
import { loadUser } from './actions/authActions';

//import Overview from './components/Overview';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Timer from './components/Timer'
import Login from './components/Login'
//import styles from './styles/MainWindow.module.css'


class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  /*const login = () => {
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
              tag={Link} to="/menu"
            >Log In</Button>
          </Form>
        </Container>

      </div>
    );
  }*/


  render() {
    return (
      <Provider store={store} >
        <div className="App">

          <Container>
            <Router>
              <Switch>
                <Route path="/menu">
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
                </Route>
                <Route path='/forgot_password'>
                  <Navbar color="dark" dark expand="sm" className="mb-5">
                    <NavbarBrand href="/">Reset Passowrd</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink href="/">Log in</NavLink>
                      </NavItem>
                    </Nav>
                  </Navbar>
                  <p>En proceso...</p>
                </Route>
                <Route path="/">
                  <Navbar color="dark" dark expand="sm" className="mb-5">
                    <NavbarBrand href="/">Welcome to Meliora Remote I/O Server</NavbarBrand>
                  </Navbar>
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
                    <Button color="link" tag={Link} to="/forgot_password">
                      Forgot password?
                    </Button>
                    <Button
                      tag={Link} to="/menu"
                    >Log In</Button>
                  </Form>
                </Route>
              </Switch>
            </Router>
          </Container>

        </div>
      </Provider>
    );
  }

}

export default App;
