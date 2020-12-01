import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getChanelDi1Info } from '../actions/di1Actions';
import { getDOChannels } from '../actions/doActions'
import { getAIChannels } from '../actions/aiActions'
import { getAOChannels } from '../actions/aoActions'

class Overview extends Component {

    componentDidMount() {
        this.props.getChanelDi1Info();
        this.props.getDOChannels();
        this.props.getAIChannels();
        this.props.getAOChannels();
    }

    static propTypes = {
        getChanelDi1Info: PropTypes.func.isRequired,
        getDOChannels: PropTypes.func.isRequired,
        getAIChannels: PropTypes.func.isRequired,
        getAOChannels: PropTypes.func.isRequired,
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



        const aiValue = this.props.ai1.inputs[0].value;
        const aiValue2 = this.props.ai1.inputs[1].value;
        const aiValue3 = this.props.ai1.inputs[2].value;
        const aiValue4 = this.props.ai1.inputs[3].value;

        const aiMin = this.props.ai1.inputs[0].min;
        const aiMin2 = this.props.ai1.inputs[1].min;
        const aiMin3 = this.props.ai1.inputs[2].min;
        const aiMin4 = this.props.ai1.inputs[3].min;

        const aiMax = this.props.ai1.inputs[0].max;
        const aiMax2 = this.props.ai1.inputs[1].max;
        const aiMax3 = this.props.ai1.inputs[2].max;
        const aiMax4 = this.props.ai1.inputs[3].max;

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

        const aoValue = this.props.ao1.inputs[0].value;
        const aoValue2 = this.props.ao1.inputs[1].value;
        const aoValue3 = this.props.ao1.inputs[2].value;
        const aoValue4 = this.props.ao1.inputs[3].value;

        const aoMin = this.props.ao1.inputs[0].min;
        const aoMin2 = this.props.ao1.inputs[1].min;
        const aoMin3 = this.props.ao1.inputs[2].min;
        const aoMin4 = this.props.ao1.inputs[3].min;

        const aoMax = this.props.ao1.inputs[0].max;
        const aoMax2 = this.props.ao1.inputs[1].max;
        const aoMax3 = this.props.ao1.inputs[2].max;
        const aoMax4 = this.props.ao1.inputs[3].max;
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
                            <td>{aiMin}</td>
                            <td>{aiMax}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>-24V - 24V</td>
                            <td>{current_aistatus2}</td>
                            <td>{aiValue2}</td>
                            <td>{aiMin2}</td>
                            <td>{aiMax2}</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>-24V - 24V</td>
                            <td>{current_aistatus3}</td>
                            <td>{aiValue3}</td>
                            <td>{aiMin3}</td>
                            <td>{aiMax3}</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>-24V - 24V</td>
                            <td>{current_aistatus4}</td>
                            <td>{aiValue4}</td>
                            <td>{aiMin4}</td>
                            <td>{aiMax4}</td>
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
                            <td>{aoMin}</td>
                            <td>{aoMax}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>0V - 24V</td>
                            <td>{current_aostatus2}</td>
                            <td>{aoValue2}</td>
                            <td>{aoMin2}</td>
                            <td>{aoMax2}</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>0V - 24V</td>
                            <td>{current_aostatus3}</td>
                            <td>{aoValue3}</td>
                            <td>{aoMin3}</td>
                            <td>{aoMax3}</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>0V - 24V</td>
                            <td>{current_aostatus4}</td>
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
    })(Overview);