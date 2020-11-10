import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Table, ModalHeader, Modal, ModalBody } from 'reactstrap'

class IOSettings extends Component {
    state = {
        modal: false,
        di1Name: 'DI-1',
        aliasDI1OFF: 'OFF',
        aliasDI1ON: 'ON',
        status1: 'OFF',

        di2Name: 'DI-2',
        aliasDI2OFF: 'OFF',
        aliasDI2ON: 'ON',
        status2: 'OFF'

    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.toggle();
    }

    //aun no guarda el value que es, o sea el chanel name nuevo
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { di1Name, aliasDI1OFF, di2Name, aliasDI2OFF } = this.state

        return (
            <div>
                <h1>I/O Settings</h1>
                <h2>DI Channel Settings</h2>
                <Table id="diTable" bordered hover>
                    <thead>
                        <tr>
                            <th>DI Channel</th>
                            <th>Status</th>
                            <th>Filter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <Button color="link" onClick={this.toggle}>
                                    {di1Name}
                                </Button>
                                <Modal
                                    isOpen={this.state.modal}
                                    toggle={this.toggle}
                                >
                                    <ModalHeader toggle={this.toggle}>DI Channel 1 Settings</ModalHeader>
                                    <ModalBody>
                                        <Form onSubmit={this.onSubmit}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" />{' '}
                                                    Apply to all DI channels
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" />{' '}
                                                    Channel status
                                                </Label>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="di1">Alias name of channel</Label>
                                                <Input name="di1Name" id="di1" placeholder="DI-1" onChange={this.onChange} />
                                                <Label for="offdi1">Alias name "OFF" status</Label>
                                                <Input name="aliasDI1OFF" id="offdi1" placeholder="OFF" onChange={this.onChange} />
                                                <Label for="ondi1">Alias name "ON" status</Label>
                                                <Input name="text" id="ondi1" placeholder="ON" />
                                                <Button color="dark" style={{ marginTop: '2rem' }} block>Save Changes</Button>
                                            </FormGroup>
                                        </Form>
                                    </ModalBody>
                                </Modal>
                            </th>
                            <td>{aliasDI1OFF}</td>
                            <td>100.0ms</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Button color="link" onClick={this.toggle}>
                                    {di2Name}
                                </Button>
                                <Modal
                                    isOpen={this.state.modal}
                                    toggle={this.toggle}
                                >
                                    <ModalHeader toggle={this.toggle}>DI Channel 2 Settings</ModalHeader>
                                    <ModalBody>
                                        <Form onSubmit={this.onSubmit}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" />{' '}
                                                    Apply to all DI channels
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" />{' '}
                                                    Channel status
                                                </Label>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="di2">Alias name of channel</Label>
                                                <Input name="di2Name" id="di2" placeholder="DI-2" onChange={this.onChange} />
                                                <Label for="offdi2">Alias name "OFF" status</Label>
                                                <Input name="aliasDI2OFF" id="offdi2" placeholder="OFF" onChange={this.onChange} />
                                                <Label for="ondi2">Alias name "ON" status</Label>
                                                <Input name="text" id="ondi2" placeholder="ON" />
                                                <Button color="dark" style={{ marginTop: '2rem' }} block>Save Changes</Button>
                                            </FormGroup>
                                        </Form>
                                    </ModalBody>
                                </Modal>
                            </th>
                            <td>{aliasDI2OFF}</td>
                            <td>100.0ms</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Button color="link">
                                    DI-3
                                </Button>
                            </th>
                            <td>OFF</td>
                            <td>100.0ms</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Button color="link">
                                    DI-4
                                </Button>
                            </th>
                            <td>OFF</td>
                            <td>100.0ms</td>
                        </tr>
                    </tbody>
                </Table>

                <h2>DO Channel Settings</h2>
                <Table id="DO" bordered hover>
                    <thead>
                        <tr>
                            <th>DO Channel</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">DO-1</th>
                            <td>OFF</td>
                        </tr>
                        <tr>
                            <th scope="row">DO-2</th>
                            <td>OFF</td>
                        </tr>
                        <tr>
                            <th scope="row">DO-3</th>
                            <td>OFF</td>
                        </tr>
                        <tr>
                            <th scope="row">DO-4</th>
                            <td>OFF</td>
                        </tr>
                    </tbody>
                </Table>
                <h2>AI Channel Settings</h2>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>AI Channel</th>
                            <th>Range</th>
                            <th>Status</th>
                            <th>Value</th>
                            <th>Min</th>
                            <th>Max</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">AI-1</th>
                            <td>-24V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">AI-2</th>
                            <td>-24V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">AI-3</th>
                            <td>-24V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">AI-4</th>
                            <td>-24V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                    </tbody>
                </Table>
                <h2>AO Channel Settings</h2>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>AO Channel</th>
                            <th>Range</th>
                            <th>Status</th>
                            <th>Value</th>
                            <th>Min</th>
                            <th>Max</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">AO-1</th>
                            <td>0V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">AO-2</th>
                            <td>0V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">AO-3</th>
                            <td>0V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">AO-4</th>
                            <td>0V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default IOSettings;