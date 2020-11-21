import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Table, ModalHeader, Modal, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    getAOChannels,
    setAOChannelName,
    setAOChannelStatus,
    setAOChannelSlopeInterceptResult
} from '../actions/aoActions';

class Ao3modal extends Component {
    state = {
        modal: false,
        name: 'AO-3',
        status: false,
        toAll: false,
        slopeIntercept: false,
        M: 0,
        D: 0
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.props.setAOChannelName(this.state.name, 3);
        if (this.state.status === false) {
            this.props.setAOChannelStatus('Disabled', 3);
        }
        else {
            this.props.setAOChannelStatus('Enabled', 3);
        }
        this.toggle();
    }

    //aun no guarda el value que es, o sea el chanel name nuevo
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onCheckboxChange = (e) => {
        this.setState({ [e.target.name]: e.target.checked });
    }

    render() {
        const { name } = this.props.ao1.ao.find(channel => channel.ch === 3);
        return (
            <div>
                <Button color="link" onClick={this.toggle}>
                    {name}
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>AO Channel 3 Settings</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="status" checked={this.state.status} onChange={this.onCheckboxChange} />{' '}
                                        Enable AO Channel
                                </Label>
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="slopeIntercept" checked={this.state.slopeIntercept} onChange={this.onCheckboxChange} />{' '}
                                        Enable Slope-intercept
                                </Label>
                            </FormGroup>

                            <p>Auto Scalling Settings</p>
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Actual(x.xxxx)</th>
                                        <th></th>
                                        <th>Scaled</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            Min (n1)
                                        </th>
                                        <td>
                                            <FormGroup>
                                                <Input
                                                    type="number"
                                                    name="n1"
                                                    id="n1"
                                                    placeholder="n1"
                                                    disabled={!this.state.slopeIntercept}
                                                    onChange={this.onChange}
                                                />
                                            </FormGroup>
                                        </td>
                                        <th scope="row">
                                            Min (n2)
                                        </th>
                                        <td>
                                            <FormGroup>
                                                <Input
                                                    type="number"
                                                    name="n2"
                                                    id="n2"
                                                    placeholder="n2"
                                                    disabled={!this.state.slopeIntercept}
                                                    onChange={this.onChange}
                                                />
                                            </FormGroup>
                                        </td>

                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            Max (m1)
                                        </th>
                                        <td>
                                            <FormGroup>
                                                <Input
                                                    type="number"
                                                    name="m1"
                                                    id="m1"
                                                    placeholder="m1"
                                                    disabled={!this.state.slopeIntercept}
                                                    onChange={this.onChange}
                                                />
                                            </FormGroup>
                                        </td>
                                        <th scope="row">
                                            Max (m2)
                                        </th>
                                        <td>
                                            <FormGroup>
                                                <Input
                                                    type="number"
                                                    name="m2"
                                                    id="m2"
                                                    placeholder="m2"
                                                    disabled={!this.state.slopeIntercept}
                                                    onChange={this.onChange}
                                                />
                                            </FormGroup>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            Unit
                                        </th>
                                        <td>
                                            <FormGroup>
                                                <Input
                                                    type="text"
                                                    name="unit"
                                                    id="unit"
                                                    placeholder="V"
                                                    disabled={!this.state.slopeIntercept}
                                                />
                                            </FormGroup>
                                        </td>
                                        <th scope="row">
                                            Unit
                                        </th>
                                        <td>
                                            <FormGroup>
                                                <Input
                                                    type="text"
                                                    name="unit"
                                                    id="unit"
                                                    placeholder="V"
                                                    disabled={!this.state.slopeIntercept}
                                                />
                                            </FormGroup>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <p>*Result = n2 + (input - n1) x [ (m2-n2)/(m1-n1) ]</p>
                            <FormGroup>
                                <Label for="name">Alias name of channel</Label>
                                <Input name="name" id="aliasName" placeholder="AO-3" onChange={this.onChange} />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>Save Changes</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

Ao3modal.propTypes = {
    getAOChannels: PropTypes.func.isRequired,
    setAOChannelName: PropTypes.func.isRequired,
    setAOChannelStatus: PropTypes.func.isRequired,
    setAOChannelSlopeInterceptResult: PropTypes.func.isRequired,
    ao1: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    ao1: state.ao1
});

export default connect(mapStateToProps, {
    getAOChannels,
    setAOChannelName,
    setAOChannelStatus,
    setAOChannelSlopeInterceptResult
})(Ao3modal);