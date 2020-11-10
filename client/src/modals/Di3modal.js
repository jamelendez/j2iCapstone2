import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Table, ModalHeader, Modal, ModalBody } from 'reactstrap'

class Di3modal extends Component {
    state = {
        modal: false,
        name: 'DI-3',
        aliasOFF: 'OFF',
        aliasON: 'ON',
        status: 'OFF',
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

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { name, aliasOFF, aliasON, status } = this.state
        return (
            <div>
                <Button color="link" onClick={this.toggle}>
                    {name}
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>DI Channel 3 Settings</ModalHeader>
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
                                <Label for="name">Alias name of channel</Label>
                                <Input name="name" id="aliasName" placeholder="DI-3" onChange={this.onChange} />
                                <Label for="off">Alias name "OFF" status</Label>
                                <Input name="aliasOFF" id="aliasOff" placeholder="OFF" onChange={this.onChange} />
                                <Label for="on">Alias name "ON" status</Label>
                                <Input name="aliasON" id="aliasOn" placeholder="ON" />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>Save Changes</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Di3modal;