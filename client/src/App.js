import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Container} from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store'
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/auth/Login'
import PrivateRoute from './components/auth/PrivateRoute';
import Main from './Main'


class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }


  render() {



    return (
      <Provider store={store} >
        <div className="App">

          <Container>
            <Router >
              <Switch>
                <PrivateRoute exact path="/main" component={Main} />
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
                {/*<Route path='/register'>
                  <Register />
                  </Route>*/}
                <Route exact path="/login" component={Login} />
              </Switch>
            </Router>
          </Container>

        </div>
      </Provider>
    );
  }

}

export default App
