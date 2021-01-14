import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Table, ModalHeader, Modal, ModalBody } from 'reactstrap'
import { connect } from 'react-redux';
import {
    getAOChannels,
    setChannelAoInfo,
    sendChannelsStatusToMQTTBroker,
    sendSlopeInterceptToMQTTBroker,
    setAOChannelName,
    setAOChannelStatus,
    calculateAutoScalling,
    setAOChannelSlopeInterceptResult
} from '../actions/aoActions';
import PropTypes from 'prop-types';

class Ao3modal extends Component {
    state = {
        modal: false,
        name: '',
        status: false,
        toAll: false,
        pointSlopeFormula: false,
        slopeIntercept: false,
        channel_ids: [
            { id: '5fbdb9c4aae376e8250b2464' },
            { id: '5fbdb9e7aae376e8250b2465' },
            { id: '5fbdb9eeaae376e8250b2466' },
            { id: '5fbdb9f6aae376e8250b2467' }
        ],
        M: 0,
        D: 0,
        unit: ''
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
        if (this.state.toAll) {
            for (var i = 0; i < 4; i++) {
                console.log('newName: ' + newName);
                console.log('status: ' + this.state.status);
                const currentName = this.props.ao1.ao[i].name;
                var nameToSet = newName;
                if (nameToSet == '') {
                    nameToSet = currentName
                }
                const updatedChannel =
                {
                    _id: this.state.channel_ids[i].id,
                    name: nameToSet,
                    status: this.state.status,
                }
                this.props.setChannelAoInfo(updatedChannel, i + 1);

                if (this.state.slopeIntercept) {
                    const data = {
                        chNumber: i,
                        M: this.state.M,
                        D: this.state.D,
                        unit: this.state.unit
                    }
                    this.props.sendSlopeInterceptToMQTTBroker(data);
                }
            }
            this.props.sendChannelsStatusToMQTTBroker();
        } else {
            console.log('newName: ' + newName);
            console.log('status: ' + this.state.status);
            const currentName = this.props.ao1.ao[2].name;
            if (newName == '') {
                newName = currentName
            }
            const updatedChannel =
            {
                _id: this.state.channel_ids[2].id,
                name: newName,
                status: this.state.status,
            }
            this.props.setChannelAoInfo(updatedChannel, 3);
            this.props.sendChannelsStatusToMQTTBroker();

            if (this.state.slopeIntercept) {
                const data = {
                    chNumber: 2,
                    M: this.state.M,
                    D: this.state.D,
                    unit: this.state.unit
                }
                this.props.sendSlopeInterceptToMQTTBroker(data);
            }
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
        const { name } = this.state;

        return (
            <div>
                <Button color="link" onClick={this.toggle}>
                    {this.props.ao1.ao[2].name}
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>AO Channel 3 Settings</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="toAll" checked={this.state.toAll} onChange={this.onCheckboxChange} />{' '}
                                                    Apply to all AO channels
                                </Label>
                            </FormGroup>
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
                                                    onChange={this.onChange}
                                                />
                                            </FormGroup>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <p>*Result = M x Input + D</p>

                            <FormGroup>
                                <Label for="name">Alias name of channel</Label>
                                <Input name="name" id="name" placeholder="AO-3" onChange={this.onChange} />
                                <Button color="dark" style={{ marginTop: '2rem' }} block onClick={this.onSubmit.bind(this, name)}>Save Changes</Button>
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
    setChannelAoInfo: PropTypes.func.isRequired,
    sendChannelsStatusToMQTTBroker: PropTypes.func.isRequired,
    sendSlopeInterceptToMQTTBroker: PropTypes.func.isRequired,
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
    sendChannelsStatusToMQTTBroker,
    sendSlopeInterceptToMQTTBroker,
    setAOChannelName,
    setAOChannelStatus,
    setAOChannelSlopeInterceptResult
})(Ao3modal);