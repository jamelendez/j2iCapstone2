import React, { Component, useState } from 'react';
import { Button, Form, Label, Input } from 'reactstrap'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { resetPassword, validateOldPassword, oldPwNull } from '../actions/authActions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearErrors } from '../actions/errorActions'
//
class ChangePassword extends Component {
    state = {
        password1: '',
        password2: '',
        oldPassword: '',
        isOldValid: null,
        msg: ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        resetPassword: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        validateOldPassword: PropTypes.func.isRequired,
        isOldValid: PropTypes.bool,
        oldPwNull: PropTypes.func.isRequired
    }

    onValidSubmit = (e) => {
        e.preventDefault();
        const valid = "^[A-Za-z0-9!@#%()+=]*$"
        if (this.state.password1 !== this.state.password2) {
            this.setState({
                msg: 'New password and Retype password must be the same.'
            })
        } else if (this.state.password1.length < 8) {
            this.setState({
                msg: 'Password is too short. It must be at least 8 characters and at most 16 characters'
            })
        } else if (this.props.user.firstPwChange) {
            const old = {
                _id: '5fc11cb9b34a3a2660fab9f5',
                password: this.state.oldPassword
            }
            //console.log("isOldValid: " + this.props.auth.isOldValid)
            this.props.validateOldPassword(old);
            console.log("isOldValid: " + this.props.isOldValid)
            if (this.props.isOldValid) {
                const change = {
                    _id: '5fc11cb9b34a3a2660fab9f5',
                    password: this.state.password1
                }
                this.props.resetPassword(change);

                this.setState({
                    msg: 'Passwod has been changed.'
                })
            }
            else {
                this.setState({
                    msg: 'Invalid old password.'
                })
            }

        } else {
            const change = {
                _id: '5fc11cb9b34a3a2660fab9f5',
                password: this.state.password1
            }
            this.props.resetPassword(change);
            this.setState({
                msg: 'Passwod has been changed.'
            })
        }
        //this.props.oldPwNull();
        console.log("isOldValid: " + this.props.isOldValid)
    }

    handleInvalidSubmit(event, errors, values) {
        this.setState({
            msg: 'Password is uses invalid character. Please use the ones stated above.'
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        /*const old = {
            _id: '5fc11cb9b34a3a2660fab9f5',
            password: this.state.oldPassword
        }
        this.props.validateOldPassword(old);*/
    };

    validateOld = (e) => {

        const old = {
            _id: '5fc11cb9b34a3a2660fab9f5',
            password: e.target.value
        }
        this.props.validateOldPassword(old);

    }


    render() {
        return (
            <div>
                <h1>Change password</h1>
                <p>Password (8 - 16 characters long). Use letters [A-Z][a-z], any number [0-9]
                    or any of these symbols for your password: !@#%()+=</p>
                <AvForm
                    onValidSubmit={this.onValidSubmit}
                    onInvalidSubmit={this.handleInvalidSubmit.bind(this)}
                >
                    <AvField
                        name="oldPassword"
                        label="Old Password"
                        type="password"
                        pattern="^[A-Za-z0-9!@#%()+=]*$"
                        placeholder="********"
                        maxLength="16"
                        title="Type in you old password."
                        disabled={!this.props.user.firstPwChange}
                        onChange={this.validateOld} />
                    <AvField
                        name="password1"
                        label="New Password"
                        type="password"
                        pattern="^[A-Za-z0-9!@#%()+=]*$"
                        placeholder="********"
                        maxLength="16"
                        title="Only Uppercase letters are allowed for this example"
                        onChange={this.onChange} />

                    <AvField
                        name="password2"
                        label="Retype Password"
                        type="password"
                        pattern="^[A-Za-z0-9!@#%()+=]*$"
                        placeholder="********"
                        title="Only Uppercase letters are allowed for this example"
                        onChange={this.onChange} />
                    <Button
                        style={{ marginTop: '2rem', marginBottom: '2rem' }}

                    >Save Changes</Button>
                </AvForm>

                <p>{this.state.msg}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    resetPassword: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    user: state.auth.user,
    validateOldPassword: PropTypes.func.isRequired,
    isOldValid: state.auth.isOldValid,
    oldPwNull: PropTypes.func.isRequired
});

export default connect(mapStateToProps, { resetPassword, clearErrors, validateOldPassword, oldPwNull })(ChangePassword);