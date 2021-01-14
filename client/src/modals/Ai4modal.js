import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Table, ModalHeader, Modal, ModalBody } from 'reactstrap'
import { connect } from 'react-redux';
import {
    getAIChannels,
    setChannelAiInfo,
    sendChannelsStatusToMQTTBroker,
    sendAutoScallingToMQTTBroker,
    sendSlopeInterceptToMQTTBroker,
} from '../actions/aiActions';
import PropTypes from 'prop-types';

class Ai4modal extends Component {
    state = {
        modal: false,
        name: '',
        status: false,
        toAll: false,
        pointSlopeFormula: false,
        slopeIntercept: false,
        channel_ids: [
            { id: '5fbdb95aaae376e8250b2460' },
            { id: '5fbdb991aae376e8250b2461' },
            { id: '5fbdb99baae376e8250b2462' },
            { id: '5fbdb9a3aae376e8250b2463' }
        ],
        n1: 0,
        m1: 0,
        n2: 0,
        m2: 0,
        unit1: '',
        unit2: '',
        M: 0,
        D: 0,
        unit3: ''
    }

    componentDidMount() {
        this.props.getAIChannels();
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
                const currentName = this.props.ai1.ai[i].name;
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
                this.props.setChannelAiInfo(updatedChannel, i + 1);
                this.props.sendChannelsStatusToMQTTBroker();

                if (this.state.pointSlopeFormula) {
                    const data = {
                        chNumber: i,
                        n1: this.state.n1,
                        n2: this.state.n2,
                        m1: this.state.m1,
                        m2: this.state.m2,
                        unit1: this.state.unit1,
                        unit2: this.state.unit2
                    }
                    this.props.sendAutoScallingToMQTTBroker(data);
                }
                if (this.state.slopeIntercept) {
                    const data = {
                        chNumber: i,
                        M: this.state.M,
                        D: this.state.D,
                        unit: this.state.unit3
                    }
                    this.props.sendSlopeInterceptToMQTTBroker(data);
                }
            }
        } else {
            console.log('newName: ' + newName);
            console.log('status: ' + this.state.status);
            const currentName = this.props.ai1.ai[3].name;
            if (newName == '') {
                newName = currentName
            }
            const updatedChannel =
            {
                _id: this.state.channel_ids[3].id,
                name: newName,
                status: this.state.status,
            }
            this.props.setChannelAiInfo(updatedChannel, 4);
            this.props.sendChannelsStatusToMQTTBroker();

            if (this.state.pointSlopeFormula) {
                const data = {
                    chNumber: 3,
                    n1: this.state.n1,
                    n2: this.state.n2,
                    m1: this.state.m1,
                    m2: this.state.m2,
                    unit1: this.state.unit1,
                    unit2: this.state.unit2
                }
                this.props.sendAutoScallingToMQTTBroker(data);
            }
            if (this.state.slopeIntercept) {
                const data = {
                    chNumber: 3,
                    M: this.state.M,
                    D: this.state.D,
                    unit: this.state.unit3
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
                    {this.props.ai1.ai[3].name}
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>AI Channel 4 Settings</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="toAll" checked={this.state.toAll} onChange={this.onCheckboxChange} />{' '}
                                                    Apply to all AI channels
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="status" checked={this.state.status} onChange={this.onCheckboxChange} />{' '}
                                        Enable AI Channel
                                </Label>
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="pointSlopeFormula" checked={this.state.pointSlopeFormula} onChange={this.onCheckboxChange} />{' '}
                                        Enable Point-Slope Formula
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
                                                    disabled={!this.state.pointSlopeFormula}
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
                                                    disabled={!this.state.pointSlopeFormula}
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
                                                    disabled={!this.state.pointSlopeFormula}
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
                                                    disabled={!this.state.pointSlopeFormula}
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
                                                    name="unit1"
                                                    id="unit"
                                                    placeholder="V"
                                                    disabled={!this.state.pointSlopeFormula}
                                                    onChange={this.onChange}
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
                                                    name="unit2"
                                                    id="unit"
                                                    placeholder="V"
                                                    disabled={!this.state.pointSlopeFormula}
                                                    onChange={this.onChange}
                                                />
                                            </FormGroup>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <p>*Result = n2 + (input - n1) x [ (m2-n2)/(m1-n1) ]</p>

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
                                                    name="unit3"
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
                                <Input name="name" id="name" placeholder="AI-4" onChange={this.onChange} />
                                <Button color="dark" style={{ marginTop: '2rem' }} block onClick={this.onSubmit.bind(this, name)}>Save Changes</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

Ai4modal.propTypes = {
    getAIChannels: PropTypes.func.isRequired,
    setChannelAiInfo: PropTypes.func.isRequired,
    sendChannelsStatusToMQTTBroker: PropTypes.func.isRequired,
    sendAutoScallingToMQTTBroker: PropTypes.func.isRequired,
    sendSlopeInterceptToMQTTBroker: PropTypes.func.isRequired,
    ai1: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    ai1: state.ai1
});

export default connect(mapStateToProps, {
    getAIChannels,
    setChannelAiInfo,
    sendChannelsStatusToMQTTBroker,
    sendAutoScallingToMQTTBroker,
    sendSlopeInterceptToMQTTBroker
})(Ai4modal);