import React, { Component } from 'react';
import { Table } from 'reactstrap';

class OverviewTables extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Meliora Overview</h1>
                <h2> Remote I/O Server</h2>
                <Table id="DI" bordered hover>
                    <thead>
                        <tr>
                            <th>DI Channel</th>
                            <th>Status</th>
                            <th>Filter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>OFF</td>
                            <td>100.0ms</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>OFF</td>
                            <td>100.0ms</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>OFF</td>
                            <td>100.0ms</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>OFF</td>
                            <td>100.0ms</td>
                        </tr>
                    </tbody>
                </Table >
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>DO Channel</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>OFF</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>OFF</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>OFF</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>OFF</td>
                        </tr>
                    </tbody>
                </Table>
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
                            <th scope="row">1</th>
                            <td>-24V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>-24V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>-24V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>-24V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                    </tbody>
                </Table>
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
                            <th scope="row">1</th>
                            <td>0V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>0V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>0V - 24V</td>
                            <td>Enable</td>
                            <td>0.006</td>
                            <td>0.000</td>
                            <td>0.006</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
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

export default OverviewTables;