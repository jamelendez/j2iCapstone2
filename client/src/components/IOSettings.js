import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Di1modal from '../modals/Di1modal';
import Di2modal from '../modals/Di2modal';
import Di3modal from '../modals/Di3modal';
import Di4modal from '../modals/Di4modal';
import Do1modal from '../modals/Do1modal';
import Do2modal from '../modals/Do2modal';
import Do3modal from '../modals/Do3modal';
import Do4modal from '../modals/Do4modal';
import Ai1modal from '../modals/Ai1modal';
import Ai2modal from '../modals/Ai2modal';
import Ai3modal from '../modals/Ai3modal';
import Ai4modal from '../modals/Ai4modal';
import Ao1modal from '../modals/Ao1modal';
import Ao2modal from '../modals/Ao2modal';
import Ao3modal from '../modals/Ao3modal';
import Ao4modal from '../modals/Ao4modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getChanelDi1Info } from '../actions/di1Actions';
import { getDOChannels } from '../actions/doActions'
import { getAIChannels } from '../actions/aiActions'
import { getAOChannels } from '../actions/aoActions'



class IOSettings extends Component {

    componentDidMount() {
        this.props.getChanelDi1Info();
        this.props.getDOChannels();
        this.props.getAIChannels();
        this.props.getAOChannels();
    }

    render() {
        // Digital Inputs status
        const { status: distatus1, aliasOFF: aliasOFF1, aliasON: aliasON1 } = this.props.di1.di[0];
        const { status: distatus2 } = this.props.di1.di[1];
        const { status: distatus3 } = this.props.di1.di[2];
        const { status: distatus4 } = this.props.di1.di[3];

        var status1 = ''
        if (distatus1) { status1 = aliasON1; }
        else { status1 = aliasOFF1; }

        // Digital Output Status
        const doStatus = this.props.do1.do[0].status;
        const doStatus2 = this.props.do1.do[1].status;
        const doStatus3 = this.props.do1.do[2].status;
        const doStatus4 = this.props.do1.do[3].status;

        // Analog Input Information
        const aiStatus = this.props.ai1.ai[0].status;
        const aiStatus2 = this.props.ai1.ai[1].status;
        const aiStatus3 = this.props.ai1.ai[2].status;
        const aiStatus4 = this.props.ai1.ai[3].status;

        const aiValue = this.props.ai1.ai[0].value;
        const aiValue2 = this.props.ai1.ai[1].value;
        const aiValue3 = this.props.ai1.ai[2].value;
        const aiValue4 = this.props.ai1.ai[3].value;

        const aiMin = this.props.ai1.ai[0].min;
        const aiMin2 = this.props.ai1.ai[1].min;
        const aiMin3 = this.props.ai1.ai[2].min;
        const aiMin4 = this.props.ai1.ai[3].min;

        const aiMax = this.props.ai1.ai[0].max;
        const aiMax2 = this.props.ai1.ai[1].max;
        const aiMax3 = this.props.ai1.ai[2].max;
        const aiMax4 = this.props.ai1.ai[3].max;

        // Analog Ouput Information
        const aoStatus = this.props.ao1.ao[0].status;
        const aoStatus2 = this.props.ao1.ao[1].status;
        const aoStatus3 = this.props.ao1.ao[2].status;
        const aoStatus4 = this.props.ao1.ao[3].status;

        const aoValue = this.props.ao1.ao[0].value;
        const aoValue2 = this.props.ao1.ao[1].value;
        const aoValue3 = this.props.ao1.ao[2].value;
        const aoValue4 = this.props.ao1.ao[3].value;

        const aoMin = this.props.ao1.ao[0].min;
        const aoMin2 = this.props.ao1.ao[1].min;
        const aoMin3 = this.props.ao1.ao[2].min;
        const aoMin4 = this.props.ao1.ao[3].min;

        const aoMax = this.props.ao1.ao[0].max;
        const aoMax2 = this.props.ao1.ao[1].max;
        const aoMax3 = this.props.ao1.ao[2].max;
        const aoMax4 = this.props.ao1.ao[3].max;


        return (
            <div>
                <h1>I/O Settings</h1>
                <h2>DI Channel Settings</h2>
                <Table id="diTable" bordered hover>
                    <thead>
                        <tr>
                            <th>DI Channel</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <Di1modal />
                            </th>
                            <td> {status1} </td>

                        </tr>
                        <tr>
                            <th scope="row">
                                <Di2modal />
                            </th>
                            <td>{distatus2}</td>

                        </tr>
                        <tr>
                            <th scope="row">
                                <Di3modal />
                            </th>
                            <td>{distatus3}</td>

                        </tr>
                        <tr>
                            <th scope="row">
                                <Di4modal />
                            </th>
                            <td>{distatus4}</td>

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
                                <Do1modal />
                            </th>
                            <td>{doStatus}</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Do2modal />
                            </th>
                            <td>{doStatus2}</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Do3modal />
                            </th>
                            <td>{doStatus3}</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Do4modal />
                            </th>
                            <td>{doStatus4}</td>
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
                                <Ai1modal />
                            </th>
                            <td>-24V - 24V</td>
                            <td>{aiStatus}</td>
                            <td>{aiValue}</td>
                            <td>{aiMin}</td>
                            <td>{aiMax}</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Ai2modal />
                            </th>
                            <td>-24V - 24V</td>
                            <td>{aiStatus2}</td>
                            <td>{aiValue2}</td>
                            <td>{aiMin2}</td>
                            <td>{aiMax2}</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Ai3modal />
                            </th>
                            <td>-24V - 24V</td>
                            <td>{aiStatus3}</td>
                            <td>{aiValue3}</td>
                            <td>{aiMin3}</td>
                            <td>{aiMax3}</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Ai4modal />
                            </th>
                            <td>-24V - 24V</td>
                            <td>{aiStatus4}</td>
                            <td>{aiValue4}</td>
                            <td>{aiMin4}</td>
                            <td>{aiMax4}</td>
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
                                <Ao1modal />
                            </th>
                            <td>0V - 24V</td>
                            <td>{aoStatus}</td>
                            <td>{aoValue}</td>
                            <td>{aoMin}</td>
                            <td>{aoMax}</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Ao2modal />
                            </th>
                            <td>0V - 24V</td>
                            <td>{aoStatus2}</td>
                            <td>{aoValue2}</td>
                            <td>{aoMin2}</td>
                            <td>{aoMax2}</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Ao3modal />
                            </th>
                            <td>0V - 24V</td>
                            <td>{aoStatus3}</td>
                            <td>{aoValue3}</td>
                            <td>{aoMin3}</td>
                            <td>{aoMax3}</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Ao4modal />
                            </th>
                            <td>0V - 24V</td>
                            <td>{aoStatus4}</td>
                            <td>{aoValue4}</td>
                            <td>{aoMin4}</td>
                            <td>{aoMax4}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

IOSettings.propTypes = {
    getChanelDi1Info: PropTypes.func.isRequired,
    getDOChannels: PropTypes.func.isRequired,
    getAIChannels: PropTypes.func.isRequired,
    getAOChannels: PropTypes.func.isRequired,
    di1: PropTypes.object.isRequired,
    do1: PropTypes.object.isRequired,
    ai1: PropTypes.object.isRequired,
    ao1: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    di1: state.di1,
    do1: state.do1,
    ai1: state.ai1,
    ao1: state.ao1
});

export default connect(mapStateToProps,
    {
        getChanelDi1Info,
        getDOChannels,
        getAIChannels,
        getAOChannels
    })(IOSettings);