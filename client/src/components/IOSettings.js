import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Table } from 'reactstrap'

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
                            <th scope="row">DI-1</th>
                            <td>OFF</td>
                            <td>100.0ms</td>
                        </tr>
                        <tr>
                            <th scope="row">DI-2</th>
                            <td>OFF</td>
                            <td>100.0ms</td>
                        </tr>
                        <tr>
                            <th scope="row">DI-3</th>
                            <td>OFF</td>
                            <td>100.0ms</td>
                        </tr>
                        <tr>
                            <th scope="row">DI-4</th>
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