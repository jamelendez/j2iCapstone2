import React, { Component } from 'react';
import LFDmodal from '../modals/LFDmodal'
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    getServerInfo,
    setServerInfo
} from '../actions/serverInfoActions';
import { setChannelDiInfo } from '../actions/di1Actions';
import { setChannelDoInfo } from '../actions/doActions';
import { setChannelAiInfo } from '../actions/aiActions';
import { setChannelAoInfo } from '../actions/aoActions';

class LdFacDef extends Component {


    render() {
        return (
            <div>
                <h1>Load Factory Default</h1>
                <p>
                    The function will reset all of the Meliora Romete I/O Server's
                    settings to the factory default values. Current settings will be overwritten.
                </p>
                <LFDmodal />
            </div>
        )
    }
}



export default LdFacDef; 