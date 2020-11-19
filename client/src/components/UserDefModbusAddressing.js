import React, { Component } from 'react';
import { Table, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class UserDefModbusAddressing extends Component {
    render() {
        return (
            <div>
                <h1>User-defined Modbus Addressing</h1>
                <Form>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            User-defined Modbus Addressing
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Default Modbus Addressing
                        </Label>
                    </FormGroup>
                </Form>

                <Table id="userDef" bordered hover>
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
                                    <Input type="number" name="address1" id="address1" placeholder="0001" />
                                </Form>
                            </td>
                            <td>
                                <Form>
                                    <Input type="select" name="fc1" id="fc1">
                                        <option>01:COIL STATUS</option>
                                        <option>02:INPUT STATUS</option>
                                        <option>03:HOLDING REGISTER</option>
                                        <option>04:INPUT REGISTER</option>
                                        <option>05:OUTPUT COIL</option>
                                        <option>06:HOLDING REGISTER</option>
                                        <option>15:OUTPUT COILS</option>
                                        <option>16:HOLDING REGISTERS</option>
                                    </Input>
                                </Form>
                            </td>
                            <td>R</td>
                            <td>10001</td>
                            <td>4</td>
                            <td>1 BIT</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>DI Counter Value Double Word</td>
                            <td>
                                <Form>
                                    <Input type="number" name="address2" id="address2" placeholder="0017" />
                                </Form>
                            </td>
                            <td>
                                <Form>
                                    <Input type="select" name="fc1" id="fc1">
                                        <option>01:COIL STATUS</option>
                                        <option>02:INPUT STATUS</option>
                                        <option>03:HOLDING REGISTER</option>
                                        <option>04:INPUT REGISTER</option>
                                        <option>05:OUTPUT COIL</option>
                                        <option>06:HOLDING REGISTER</option>
                                        <option>15:OUTPUT COILS</option>
                                        <option>16:HOLDING REGISTERS</option>
                                    </Input>
                                </Form>
                            </td>
                            <td>R</td>
                            <td>30017</td>
                            <td>4</td>
                            <td>2 WORD</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>DI Value All Channel (Ch1-Ch4)</td>
                            <td>
                                <Form>
                                    <Input type="number" name="address3" id="address3" placeholder="0049" />
                                </Form>
                            </td>
                            <td>
                                <Form>
                                    <Input type="select" name="fc1" id="fc1">
                                        <option>01:COIL STATUS</option>
                                        <option>02:INPUT STATUS</option>
                                        <option>03:HOLDING REGISTER</option>
                                        <option>04:INPUT REGISTER</option>
                                        <option>05:OUTPUT COIL</option>
                                        <option>06:HOLDING REGISTER</option>
                                        <option>15:OUTPUT COILS</option>
                                        <option>16:HOLDING REGISTERS</option>
                                    </Input>
                                </Form>
                            </td>
                            <td>R</td>
                            <td>30049</td>
                            <td>1</td>
                            <td>1 WORD</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>DI Counter Start/Stop</td>
                            <td>
                                <Form>
                                    <Input type="number" name="address1" id="address1" placeholder="00257" />
                                </Form>
                            </td>
                            <td>
                                <Form>
                                    <Input type="select" name="fc1" id="fc1">
                                        <option>01:COIL STATUS</option>
                                        <option>02:INPUT STATUS</option>
                                        <option>03:HOLDING REGISTER</option>
                                        <option>04:INPUT REGISTER</option>
                                        <option>05:OUTPUT COIL</option>
                                        <option>06:HOLDING REGISTER</option>
                                        <option>15:OUTPUT COILS</option>
                                        <option>16:HOLDING REGISTERS</option>
                                    </Input>
                                </Form>
                            </td>
                            <td>RW</td>
                            <td>00257</td>
                            <td>4</td>
                            <td>1 BIT</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>DI Counter Clear</td>
                            <td>
                                <Form>
                                    <Input type="number" name="address1" id="address1" placeholder="00273" />
                                </Form>
                            </td>
                            <td>
                                <Form>
                                    <Input type="select" name="fc1" id="fc1">
                                        <option>01:COIL STATUS</option>
                                        <option>02:INPUT STATUS</option>
                                        <option>03:HOLDING REGISTER</option>
                                        <option>04:INPUT REGISTER</option>
                                        <option>05:OUTPUT COIL</option>
                                        <option>06:HOLDING REGISTER</option>
                                        <option>15:OUTPUT COILS</option>
                                        <option>16:HOLDING REGISTERS</option>
                                    </Input>
                                </Form>
                            </td>
                            <td>RW</td>
                            <td>00273</td>
                            <td>4</td>
                            <td>1 BIT</td>
                        </tr>
                    </tbody>
                </Table>


                <p>Default Modbus Address</p>
                <Table id="default" bordered hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Description</th>
                            <th>User-defined Start Address (DEC)</th>
                            <th>Function Code</th>
                            <th>Read/Write</th>
                            <th>Reference Address (DEC)</th>
                            <th>Total Channels</th>
                            <th>Data Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>DI Value</td>
                            <td>0001</td>
                            <td>02:INPUT STATUS</td>
                            <td>R</td>
                            <td>10001</td>
                            <td>4</td>
                            <td>1 BIT</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>DI Counter Value Double Word</td>
                            <td>0017</td>
                            <td>04:INPUT REGISTER</td>
                            <td>R</td>
                            <td>30017</td>
                            <td>4</td>
                            <td>2 WORD</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>DI Value All Channel (Ch1-Ch4)</td>
                            <td>0049</td>
                            <td>04:INPUT REGISTER</td>
                            <td>R</td>
                            <td>30049</td>
                            <td>1</td>
                            <td>1 WORD</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>DI Counter Start/Stop</td>
                            <td>00257</td>
                            <td>01:COIL STATUS</td>
                            <td>RW</td>
                            <td>00257</td>
                            <td>4</td>
                            <td>1 BIT</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>DI Counter Clear</td>
                            <td>00273</td>
                            <td>01:COIL STATUS</td>
                            <td>RW</td>
                            <td>00273</td>
                            <td>4</td>
                            <td>1 BIT</td>
                        </tr>
                    </tbody>
                </Table >

                <Button style={{ marginBottom: '2rem' }}>Save Changes</Button>
            </div>
        )
    }
}

export default UserDefModbusAddressing;