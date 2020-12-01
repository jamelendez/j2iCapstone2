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
                        <h1>Welcome to Meliora Help page</h1>
                        <h2>General Settings</h2>
                        <p>In this section you can type in an alias name and location for the Meliora Server.
                            Each input has a maximum of 16 characters. Click the "Save Changes" button and refresh page to see changes.</p>
                        <h2>User-defined Modbus Addressing</h2>
                        <p>To use the default addresses in the CC3200 microcontroler for Modbus TCP functions, click on the
                        "Default Modbus Addressing".</p>
                        <p>If you want to specify addresses for the modbus functions, select the
                        "User-defined Modbus Addressing" button and type in the starting address for the function in
                            "User-defined Start Address (DEC)". DEC stands for decimal. </p>
                        <p>Click the "Save Changes" button to send changes to the CC3200.</p>

                        <h2>I/O Settings</h2>
                        <p>In this section you can modify settings for every channel.</p>
                        <p>For digital input and ouput channels, you can change its alias name, and give an alias name for and 'OFF'
                        status or an 'On' status, like 'Enabled' or, in spanish, 'Encendido'. You can change the settings for all
                        digital input or digital ouput at the same time by clicking on "Apply to all DI or DO channels".
                        </p>
                        <p>For analog input channels, you can enable or disable the channel. Also you can send the values for
                        "Point-slope formula" to send them to the CC3200, and the microcontroler will make the calculation.
                        You can also enable "Slope-Intecept" and send the values to the CC3200 for both analog input and ouput
                             channels.</p>

                        <p>In the analog tables, the "Value" column means the last value recorded before refreshing the page.
                        Max. and Min. means the maximum and minimum values recorded befeore reseting its values to 0. To reset
                        Max and Min values, click the "Refresh Max. and Min."
                        </p>

                        <h2>Change Password</h2>
                        <p>In this page you can reset your Password to access this web app. If it's the first time reseting your password,
                        you don't have to type in an "Old password".
                            </p>
                        <h2>Load Factory Default</h2>
                        <p>Click "Submit" to set the CC3200 and the web app to factory default. The password to login will not change. </p>
                        <h2>Save/Reset</h2>
                        <p>Click the 'Save' button to send changes to the CC3200. Click 'Reset' to reboot the CC3200.</p>

                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default HelpModal;