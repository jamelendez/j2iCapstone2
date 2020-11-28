import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, Nav, Navbar, NavbarBrand, NavItem, Col, Alert, NavLink } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions'

class Register extends Component {
    state = {
        username: '',
        password: '',
        msg: ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error != prevProps.error) {
            // Check for a register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msh: null });
            }
        }
    }



    onSumbit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;

        // Create a user object
        const newUser = {
            username: username,
            password: password
        }
        console.log("newUser: " + JSON.stringify(newUser));
        this.props.register(newUser);
        this.props.clearErrors();
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <NavbarBrand href="/">Register to Meliora Remote I/O Server</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/login" active>Back to Log In</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
                <Form onSumbit={this.onSumbit} className="form">
                    <Col>
                        <FormGroup>
                            <Label>Enter new username</Label>
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
                            <Label for="password">Enter a password for your account</Label>
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
                    //tag={Link} to="/login"
                    >Register</Button>
                </Form>

            </div>
        )
    }
}

Register.propTypes = {

}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
})

export default connect(mapStateToProps, { register, clearErrors })(Register);