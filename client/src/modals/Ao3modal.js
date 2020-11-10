import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Table, ModalHeader, Modal, ModalBody } from 'reactstrap'

class Ao3modal extends Component {
    state = {
        modal: false,
        name: 'AO-3',
        status: 'Enable',
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
        const { name, status } = this.state
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
                                    <Input type="checkbox" />{' '}
                                        Enable AO Channel
                                </Label>
                            </FormGroup>

                            <FormGroup tag="fieldset">
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" checked="true" />{' '}
                                        Disable Scaling
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Enable Point-Slope Formula
                                    </Label>
                                </FormGroup>
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

export default Ao3modal;