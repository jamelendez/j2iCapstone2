import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Table, ModalHeader, Modal, ModalBody } from 'reactstrap'
import { connect } from 'react-redux';
import {
    getAOChannels,
    setChannelAoInfo,
    setAOChannelName,
    setAOChannelStatus,
    calculateAutoScalling,
    setAOChannelSlopeInterceptResult
} from '../actions/aoActions';
import PropTypes from 'prop-types';

class Ao4modal extends Component {
    state = {
        modal: false,
        name: '',
        status: false,
        toAll: false,
        pointSlopeFormula: false,
        slopeIntercept: false,
        n1: 0,
        m1: 0,
        n2: 0,
        m2: 0,
        M: 0,
        D: 0
    }

    componentDidMount() {
        this.props.getAOChannels();
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onSubmit = (newName) => {
        console.log('newName: ' + newName);
        console.log('status: ' + this.state.status);
        const currentName = this.props.ao1.ao[3].name;
        if (newName == '') {
            newName = currentName
        }
        const updatedChannel =
        {
            _id: '5fbdb9f6aae376e8250b2467',
            name: newName,
            status: this.state.status,
        }
        this.props.setChannelAoInfo(updatedChannel, 4);



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
        const { name } = this.state;

        return (
            <div>
                <Button color="link" onClick={this.toggle}>
                    {this.props.ao1.ao[3].name}
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>AO Channel 4 Settings</ModalHeader>
                    <ModalBody>
                        <Form>
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

                            <Table bordered hover>
                                <tbody>
                                    <tr>
                                        <td>
                                            M=
                                        </td>
                                        <td>
                                            <FormGroup>
                                                <Input
                                                    type="number"
                                                    name="M"
                                                    id="M"
                                                    placeholder="M"
                                                    disabled={!this.state.slopeIntercept}
                                                    onChange={this.onChange}
                                                />
                                            </FormGroup>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            D=
                                        </td>
                                        <td>
                                            <FormGroup>
                                                <Input
                                                    type="number"
                                                    name="D"
                                                    id="D"
                                                    placeholder="D"
                                                    disabled={!this.state.slopeIntercept}
                                                    onChange={this.onChange}
                                                />
                                            </FormGroup>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Unit
                                        </td>
                                        <td>
                                            <FormGroup>
                                                <Input
                                                    type="text"
                                                    name="unit"
                                                    id="unit"
                                                    placeholder="Unit"
                                                    disabled={!this.state.slopeIntercept}
                                                />
                                            </FormGroup>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <p>*Result = M x Input + D</p>

                            <FormGroup>
                                <Label for="name">Alias name of channel</Label>
                                <Input name="name" id="name" placeholder="AO-4" onChange={this.onChange} />
                                <Button color="dark" style={{ marginTop: '2rem' }} block onClick={this.onSubmit.bind(this, name)}>Save Changes</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

Ao4modal.propTypes = {
    getAOChannels: PropTypes.func.isRequired,
    setChannelAoInfo: PropTypes.func.isRequired,
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
    setChannelAoInfo,
    setAOChannelName,
    setAOChannelStatus,
    setAOChannelSlopeInterceptResult
})(Ao4modal);