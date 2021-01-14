import React, { Component } from 'react';
import LFDmodal from '../modals/LFDmodal'

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