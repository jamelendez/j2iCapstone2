import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Table, ModalHeader, Modal, ModalBody } from 'reactstrap'
import { connect } from 'react-redux';
import {
    getAIChannels,
    setAIChannelName,
    setAIChannelStatus,
    calculateAutoScalling,
    setAIChannelSlopeInterceptResult
} from '../actions/aiActions';
import PropTypes from 'prop-types';

class Ai1modal extends Component {
    state = {
        modal: false,
        name: 'AI-1',
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
        this.props.getAIChannels();
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.props.setAIChannelName(this.state.name, 1);
        if (this.state.status === false) {
            this.props.setAIChannelStatus('Disabled', 1);
        }
        else {
            this.props.setAIChannelStatus('Enabled', 1);
        }
        if (this.state.pointSlopeFormula) {
            this.props.calculateAutoScalling(this.state.n1, this.state.n2, this.state.m1, this.state.m2, this.props.ai1.ai[0].value, 1);
        }

        if (this.state.slopeIntercept) {
            const result = +(this.state.M * this.props.ai1.ai[0].value) + +this.state.D;
            this.props.setAIChannelSlopeInterceptResult(result, 1);
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
        const { name } = this.props.ai1.ai.find(channel => channel.ch === 1);

        return (
            <div>
                <Button color="link" onClick={this.toggle}>
                    {name}
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>AI Channel 1 Settings</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
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
                                                    name="unit"
                                                    id="unit"
                                                    placeholder="V"
                                                    disabled={!this.state.pointSlopeFormula}
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
                                                    disabled={!this.state.pointSlopeFormula}
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
                                <Input name="name" id="aliasName" placeholder="AI-1" onChange={this.onChange} />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>Save Changes</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

Ai1modal.propTypes = {
    getAIChannels: PropTypes.func.isRequired,
    setAIChannelName: PropTypes.func.isRequired,
    setAIChannelStatus: PropTypes.func.isRequired,
    calculateAutoScalling: PropTypes.func.isRequired,
    setAIChannelSlopeInterceptResult: PropTypes.func.isRequired,
    ai1: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    ai1: state.ai1
});

export default connect(mapStateToProps, {
    getAIChannels,
    setAIChannelName,
    setAIChannelStatus,
    calculateAutoScalling,
    setAIChannelSlopeInterceptResult
})(Ai1modal);