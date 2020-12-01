import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, Nav, Navbar, NavbarBrand, NavItem, Col, Alert, NavLink } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    Redirect
} from "react-router-dom";
import { login } from '../../actions/authActions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearErrors } from '../../actions/errorActions'

class Login extends Component {
    state = {
        username: '',
        password: '',
        msg: ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error != prevProps.error) {
            // Check for a register error
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }
    }



    onSumbit = (e) => {
        e.preventDefault();

        this.props.login(this.state.username, this.state.password);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/main" />;
        }
        const { username, password } = this.state;
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <NavbarBrand href="/">Welcome to Meliora Remote I/O Server</NavbarBrand>

                </Navbar>
                {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
                <Form onSumbit={this.onSumbit} className="form">
                    <Col>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                name="username"
                                id="username"
                                placeholder="username"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="password">Enter password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="********"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Col>
                    <Button
                        onClick={this.onSumbit}
                    >Log In</Button>
                </Form>

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
});

export default connect(mapStateToProps, { login, clearErrors })(withRouter(Login));