import React, { Component } from 'react';
import { Table, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { sendAddressesToMQTTBroker } from '../actions/udmaActions';

class UserDefModbusAddressing extends Component {
    state = {
        udma: false,
        errMsg: '',
        errMsgColor: "green",

        // Default Addresses for Modbus Functions
        diValueStartAddress: 10001,
        doValueStartAddress: 1,
        aiValueStartAddress: 40001,
        aoValueStartAddress: 30001
    }

    // Handle when input change is detected. Change the state value corresponding
    // to the target name. 
    onChange = (e) => {
        if (e.target.value == '') {
            this.setState({ [e.target.name]: 0 });
        }
        else {
            this.setState({ [e.target.name]: e.target.value });
        }
    };

    // Handle when user changes de sutatus of any checkbox.
    onCheckboxChange = (e) => {
        this.setState({ [e.target.name]: e.target.checked });
        if (!e.target.checked) {
            this.setState({
                aiValueStartAddress: 1,
                aiScalingStartAddress: 65,
                aiSlopeInterceptStartAddress: 129,
                aoValueStartAddress: 1,
                aoValueEndAddress: 64,
                aoSlopeInterceptStartAddress: 193
            })
        }

    }

    // Verify any address collisions before sending any addresses to the MQTT broker.
    verifyAddressCollisions = () => {
        var conflicts = false;
        var inputRegisterStartAddresses = [
            parseInt(this.state.aiValueStartAddress),
            parseInt(this.state.aiScalingStartAddress),
            parseInt(this.state.aiSlopeInterceptStartAddress),
            parseInt(this.state.aoSlopeInterceptStartAddress)
        ];

        inputRegisterStartAddresses = inputRegisterStartAddresses.sort(function (a, b) { return a - b });

        for (var i = 0; i < 3; i++) {
            if ((inputRegisterStartAddresses[i] + 63) >= inputRegisterStartAddresses[i + 1]) {

                conflicts = true;
                this.setState({
                    errMsg: "Conflicting addresses. Fix it.",
                    errMsgColor: "red"
                })
            }
        }

        if (!conflicts) {
            this.setState({
                errMsg: "Changes have been saved.",
                errMsgColor: "green"
            })
            // Send to MQTT Broker
            const addresses = [
                this.state.diValueStartAddress,
                this.state.doValueStartAddress,
                this.state.aiValueStartAddress,
                this.state.aoValueStartAddress
            ]
            sendAddressesToMQTTBroker(addresses);
        }


    }

    render() {
        return (
            <div>
                <h1>User-defined Modbus Addressing</h1>
                <p>Click on "User-defined Modbus Addressing" to type your own addressing
                configuration. The default addressing will be sent if left uncheked.
                </p>
                <p>Click the "Save Changes" button to send the addresses to the microcontroller</p>
                <Form>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="checkbox"
                                name="udma"
                                checked={this.state.udma}
                                onChange={this.onCheckboxChange} />{' '}
                            User-defined Modbus Addressing
                        </Label>
                    </FormGroup>

                </Form>

                <Table id="userDef" bordered hover >
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Description</th>
                            <th>User-defined Start Address (DEC)</th>
                            <th>Function Code      </th>
                            <th>Read(R)/Write(W)</th>
                            <th>Reference Address (DEC)</th>
                            <th>Total Channels</th>
                            <th>Data Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>DI Value</td>
                            <td>
                                <Form>
                                    <Input
                                        type="number"
                                        name="diValueStartAddress"
                                        placeholder="0001"
                                        disabled={!this.state.udma}
                                        onChange={this.onChange} />
                                </Form>
                            </td>
                            <td>
                                02: INPUT STATUS
                            </td>
                            <td>R</td>
                            <td>10001</td>
                            <td>4</td>
                            <td>1 BIT</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>DO Value</td>
                            <td>
                                <Form>
                                    <Input
                                        type="number"
                                        name="doValueStartAddress"
                                        placeholder="0001"
                                        disabled={!this.state.udma}
                                        onChange={this.onChange} />
                                </Form>
                            </td>
                            <td>
                                01: COIL STATUS
                            </td>
                            <td>RW</td>
                            <td>00001</td>
                            <td>4</td>
                            <td>2 WORD</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>AI Value</td>
                            <td>
                                <Form>
                                    <Input
                                        type="number"
                                        name="aiValueStartAddress"
                                        placeholder="0001"
                                        disabled={!this.state.udma}
                                        onChange={this.onChange} />
                                </Form>
                            </td>
                            <td>
                                04: INPUT REGISTER
                            </td>
                            <td>R</td>
                            <td>40001</td>
                            <td>4</td>
                            <td>1 WORD</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>AO Value</td>
                            <td>
                                <Form>
                                    <Input
                                        type="number"
                                        name="aoValueStartAddress"
                                        placeholder="0001"
                                        disabled={!this.state.udma}
                                        onChange={this.onChange} />
                                </Form>
                            </td>
                            <td>
                                03: HOLDING REGISTER
                            </td>
                            <td>RW</td>
                            <td>30001</td>
                            <td>4</td>
                            <td>1 BIT</td>
                        </tr>
                    </tbody>

                </Table>




                <Button
                    style={{ marginBottom: '2rem' }}
                    onClick={this.verifyAddressCollisions}
                >Save Changes</Button>
                <p style={{ color: this.state.errMsgColor }}>{this.state.errMsg}</p>
            </div>
        )
    }
}

export default UserDefModbusAddressing;