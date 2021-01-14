import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getChanelDi1Info } from '../actions/di1Actions';
import { getDOChannels } from '../actions/doActions'
import { getAIChannels, getAIValuesFromMQTTBroker } from '../actions/aiActions'
import { getAOChannels, getAOValuesFromMQTTBroker } from '../actions/aoActions'
import { Timestamp } from 'mongodb';

class Overview extends Component {

    state = {
        aiMin1: 0,
        aiMin2: 0,
        aiMin3: 0,
        aiMin4: 0,
        aiMax1: 0,
        aiMax2: 0,
        aiMax3: 0,
        aiMax4: 0,
        aoMin1: 0,
        aoMin2: 0,
        aoMin3: 0,
        aoMin4: 0,
        aoMax1: 0,
        aoMax2: 0,
        aoMax3: 0,
        aoMax4: 0,
    }

    componentDidMount() {
        this.props.getChanelDi1Info();
        this.props.getDOChannels();
        this.props.getAIChannels();
        this.props.getAOChannels();
        this.props.getAIValuesFromMQTTBroker();
        this.props.getAOValuesFromMQTTBroker();
    }

    static propTypes = {
        getChanelDi1Info: PropTypes.func.isRequired,
        getDOChannels: PropTypes.func.isRequired,
        getAIChannels: PropTypes.func.isRequired,
        getAOChannels: PropTypes.func.isRequired,
        getAIValuesFromMQTTBroker: PropTypes.func.isRequired,
        getAOValuesFromMQTTBroker: PropTypes.func.isRequired,
        di1: PropTypes.object.isRequired,
        do1: PropTypes.object.isRequired,
        ai1: PropTypes.object.isRequired,
        ao1: PropTypes.object.isRequired
    }

    render() {
        // Digital Inputs status
        const { status: distatus1, aliasOFF: dialiasOFF1, aliasON: dialiasON1 } = this.props.di1.di[0];
        const { status: distatus2, aliasOFF: dialiasOFF2, aliasON: dialiasON2 } = this.props.di1.di[1];
        const { status: distatus3, aliasOFF: dialiasOFF3, aliasON: dialiasON3 } = this.props.di1.di[2];
        const { status: distatus4, aliasOFF: dialiasOFF4, aliasON: dialiasON4 } = this.props.di1.di[3];

        var current_distatus1 = '';
        var current_distatus2 = '';
        var current_distatus3 = '';
        var current_distatus4 = '';
        if (distatus1) { current_distatus1 = dialiasON1; }
        else { current_distatus1 = dialiasOFF1; }
        if (distatus2) { current_distatus2 = dialiasON2; }
        else { current_distatus2 = dialiasOFF2; }
        if (distatus3) { current_distatus3 = dialiasON3; }
        else { current_distatus3 = dialiasOFF3; }
        if (distatus4) { current_distatus4 = dialiasON4; }
        else { current_distatus4 = dialiasOFF4; }

        // Digital Output Status
        const { status: dostatus1, aliasOFF: doaliasOFF1, aliasON: doaliasON1 } = this.props.do1.do[0];
        const { status: dostatus2, aliasOFF: doaliasOFF2, aliasON: doaliasON2 } = this.props.do1.do[1];
        const { status: dostatus3, aliasOFF: doaliasOFF3, aliasON: doaliasON3 } = this.props.do1.do[2];
        const { status: dostatus4, aliasOFF: doaliasOFF4, aliasON: doaliasON4 } = this.props.do1.do[3];

        var current_dostatus1 = '';
        var current_dostatus2 = '';
        var current_dostatus3 = '';
        var current_dostatus4 = '';
        if (dostatus1) { current_dostatus1 = doaliasON1; }
        else { current_dostatus1 = doaliasOFF1; }
        if (dostatus2) { current_dostatus2 = doaliasON2; }
        else { current_dostatus2 = doaliasOFF2; }
        if (dostatus3) { current_dostatus3 = doaliasON3; }
        else { current_dostatus3 = doaliasOFF3; }
        if (dostatus4) { current_dostatus4 = doaliasON4; }
        else { current_dostatus4 = doaliasOFF4; }

        // Analog Input Information
        const { status: aiStatus1 } = this.props.ai1.ai[0];
        const { status: aiStatus2 } = this.props.ai1.ai[1];
        const { status: aiStatus3 } = this.props.ai1.ai[2];
        const { status: aiStatus4 } = this.props.ai1.ai[3];

        var current_aistatus1 = '';
        var current_aistatus2 = '';
        var current_aistatus3 = '';
        var current_aistatus4 = '';
        if (aiStatus1) { current_aistatus1 = 'Enabled'; }
        else { current_aistatus1 = 'Disabled'; }
        if (aiStatus2) { current_aistatus2 = 'Enabled'; }
        else { current_aistatus2 = 'Disabled'; }
        if (aiStatus3) { current_aistatus3 = 'Enabled'; }
        else { current_aistatus3 = 'Disabled'; }
        if (aiStatus4) { current_aistatus4 = 'Enabled'; }
        else { current_aistatus4 = 'Disabled'; }

        const aiValue = this.props.ai1.ai_values[0].value;
        const aiValue2 = this.props.ai1.ai_values[1].value;
        const aiValue3 = this.props.ai1.ai_values[2].value;
        const aiValue4 = this.props.ai1.ai_values[3].value;

        if(aiValue > this.state.aiMax1) this.setState({aiMax1: aiValue});
        if(aiValue2 > this.state.aiMax2) this.setState({aiMax2: aiValue2});
        if(aiValue3 > this.state.aiMax3) this.setState({aiMax3: aiValue3});
        if(aiValue4 > this.state.aiMax4) this.setState({aiMax4: aiValue4});

        if(aiValue < this.state.aiMin1) this.setState({aiMin1: aiValue});
        if(aiValue2 < this.state.aiMin2) this.setState({aiMin2: aiValue2});
        if(aiValue3 < this.state.aiMin3) this.setState({aiMin3: aiValue3});
        if(aiValue4 < this.state.aiMin4) this.setState({aiMin4: aiValue4});

        // Analog Ouput Information
        const { status: aoStatus1 } = this.props.ao1.ao[0];
        const { status: aoStatus2 } = this.props.ao1.ao[1];
        const { status: aoStatus3 } = this.props.ao1.ao[2];
        const { status: aoStatus4 } = this.props.ao1.ao[3];

        var current_aostatus1 = '';
        var current_aostatus2 = '';
        var current_aostatus3 = '';
        var current_aostatus4 = '';
        if (aoStatus1) { current_aostatus1 = 'Enabled'; }
        else { current_aostatus1 = 'Disabled'; }
        if (aoStatus2) { current_aostatus2 = 'Enabled'; }
        else { current_aostatus2 = 'Disabled'; }
        if (aoStatus3) { current_aostatus3 = 'Enabled'; }
        else { current_aostatus3 = 'Disabled'; }
        if (aoStatus4) { current_aostatus4 = 'Enabled'; }
        else { current_aostatus4 = 'Disabled'; }

        const aoValue = this.props.ao1.ao_values[0].value;
        const aoValue2 = this.props.ao1.ao_values[1].value;
        const aoValue3 = this.props.ao1.ao_values[2].value;
        const aoValue4 = this.props.ao1.ao_values[3].value;

        if(aoValue > this.state.aoMax1) this.setState({aoMax1: aoValue});
        if(aoValue2 > this.state.aoMax2) this.setState({aoMax2: aoValue2});
        if(aoValue3 > this.state.aoMax3) this.setState({aoMax3: aoValue3});
        if(aoValue4 > this.state.aoMax4) this.setState({aoMax4: aoValue4});

        if(aoValue < this.state.aoMin1) this.setState({aoMin1: aoValue});
        if(aoValue2 < this.state.aoMin2) this.setState({aoMin2: aoValue2});
        if(aoValue3 < this.state.aoMin3) this.setState({aoMin3: aoValue3});
        if(aoValue4 < this.state.aoMin4) this.setState({aoMin4: aoValue4});


        return (
            <div>
                <h1>Welcome to Meliora Overview</h1>
                <h2> Remote I/O Server</h2>
                <Table id="DI" bordered hover>
                    <thead>
                        <tr>
                            <th>DI Channel</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{current_distatus1}</td>

                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>{current_distatus2}</td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>{current_distatus3}</td>

                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>{current_distatus4}</td>

                        </tr>
                    </tbody>
                </Table >
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>DO Channel</th>
                            <th>Status</th>
                            <th>Contact Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{current_dostatus1}</td>
                            <td>Wet</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>{current_dostatus2}</td>
                            <td>Wet</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>{current_dostatus3}</td>
                            <td>Dry</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>{current_dostatus4}</td>
                            <td>Dry</td>
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
                            <td>{current_aistatus1}</td>
                            <td>{aiValue}</td>
                            <td>{this.state.aiMin1}</td>
                            <td>{this.state.aiMax1}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>-24V - 24V</td>
                            <td>{current_aistatus2}</td>
                            <td>{aiValue2}</td>
                            <td>{this.state.aiMin2}</td>
                            <td>{this.state.aiMax2}</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>-24V - 24V</td>
                            <td>{current_aistatus3}</td>
                            <td>{aiValue3}</td>
                            <td>{this.state.aiMin3}</td>
                            <td>{this.state.aiMax3}</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>-24V - 24V</td>
                            <td>{current_aistatus4}</td>
                            <td>{aiValue4}</td>
                            <td>{this.state.aiMin4}</td>
                            <td>{this.state.aiMax4}</td>
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
                            <td>{current_aostatus1}</td>
                            <td>{aoValue}</td>
                            <td>{this.state.aoMin1}</td>
                            <td>{this.state.aoMax1}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>0V - 24V</td>
                            <td>{current_aostatus2}</td>
                            <td>{aoValue2}</td>
                            <td>{this.state.aoMin2}</td>
                            <td>{this.state.aoMax2}</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>0V - 24V</td>
                            <td>{current_aostatus3}</td>
                            <td>{aoValue3}</td>
                            <td>{this.state.aoMin3}</td>
                            <td>{this.state.aoMax3}</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>0V - 24V</td>
                            <td>{current_aostatus4}</td>
                            <td>{aoValue4}</td>
                            <td>{this.state.aoMin4}</td>
                            <td>{this.state.aoMax4}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
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
        getAOChannels, 
        getAIValuesFromMQTTBroker,
        getAOValuesFromMQTTBroker
    })(Overview);