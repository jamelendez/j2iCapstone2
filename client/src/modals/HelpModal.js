import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Table, ModalHeader, Modal, ModalBody } from 'reactstrap'

class HelpModal extends Component {
    state = {
        modal: false,
        name: 'DO-4',
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

    //aun no guarda el value que es, o sea el chanel name nuevo
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { name, aliasOFF, aliasON, status } = this.state
        return (
            <div>
                <Button color="info" onClick={this.toggle}>
                    Help
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>HELP</ModalHeader>
                    <ModalBody>
                        <p>HELP PAGE info to be posted soon...</p>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default HelpModal;