import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Table, ModalHeader, Modal, ModalBody } from 'reactstrap'
import Di1modal from '../modals/Di1modal'
import Di2modal from '../modals/Di2modal'
import Di3modal from '../modals/Di3modal'
import Di4modal from '../modals/Di4modal'
import Do1modal from '../modals/Do1modal'
import Do2modal from '../modals/Do2modal'
import Do3modal from '../modals/Do3modal'
import Do4modal from '../modals/Do4modal'
import Ai1modal from '../modals/Ai1modal'
import Ai2modal from '../modals/Ai2modal'
import Ai3modal from '../modals/Ai3modal'
import Ai4modal from '../modals/Ai4modal'
import Ao1modal from '../modals/Ao1modal'
import Ao2modal from '../modals/Ao2modal'
import Ao3modal from '../modals/Ao3modal'
import Ao4modal from '../modals/Ao4modal'



class IOSettings extends Component {
    render() {
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
                                <Di1modal />
                            </th>
                            <td>OFF</td>
                            <td>100.0ms</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Di2modal />
                            </th>
                            <td>OFF</td>
                            <td>100.0ms</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Di3modal/>
                            </th>
                            <td>OFF</td>
                            <td>100.0ms</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Di4modal/>
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
                            <th scope="row">
                                <Do1modal/>
                            </th>
                            <td>OFF</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Do2modal/>
                            </th>
                            <td>OFF</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Do3modal/>
                            </th>
                            <td>OFF</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Do4modal/>
                            </th>
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
                            <th scope="row">
                                <Ai1modal/>
                            </th>
                            <td>-24V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Ai2modal/>
                            </th>
                            <td>-24V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Ai3modal/>
                            </th>
                            <td>-24V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Ai4modal/>
                            </th>
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
                            <th scope="row">
                                <Ao1modal/>
                            </th>
                            <td>0V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Ao2modal/>
                            </th>
                            <td>0V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Ao3modal/>
                            </th>
                            <td>0V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Ao4modal/>
                            </th>
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