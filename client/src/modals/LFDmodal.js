import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
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

class LFDModal extends Component {
    state = {
        modal: false,
        msg: "",
        defaultServerInfo: {
            _id: '5fb9d0d7e4399d70a65fc209',
            serverInfo: "MyMeliora",
            serverLocation: ""
        },
        di: [
            { _id: '5fbb1e33e0991cf0e4f1f5c3', name: 'DI-1', status: false, aliasOFF: 'OFF', aliasON: 'ON' },
            { _id: '5fbb1f20e0991cf0e4f1f5c4', name: 'DI-2', status: false, aliasOFF: 'OFF', aliasON: 'ON' },
            { _id: '5fbb1f2fe0991cf0e4f1f5c5', name: 'DI-3', status: false, aliasOFF: 'OFF', aliasON: 'ON' },
            { _id: '5fbb1f38e0991cf0e4f1f5c6', name: 'DI-4', status: false, aliasOFF: 'OFF', aliasON: 'ON' }
        ],
        do: [
            { _id: '5fbb1fa1e0991cf0e4f1f5c7', name: 'DO-1', status: false, aliasOFF: 'OFF', aliasON: 'ON' },
            { _id: '5fbb1fd1e0991cf0e4f1f5c8', name: 'DO-2', status: false, aliasOFF: 'OFF', aliasON: 'ON' },
            { _id: '5fbb1fdae0991cf0e4f1f5c9', name: 'DO-3', status: false, aliasOFF: 'OFF', aliasON: 'ON' },
            { _id: '5fbb1fe4e0991cf0e4f1f5ca', name: 'DO-4', status: false, aliasOFF: 'OFF', aliasON: 'ON' }
        ],
        ai: [
            { _id: '5fbdb95aaae376e8250b2460', name: 'AI-1', status: false },
            { _id: '5fbdb991aae376e8250b2461', name: 'AI-2', status: false },
            { _id: '5fbdb99baae376e8250b2462', name: 'AI-3', status: false },
            { _id: '5fbdb9a3aae376e8250b2463', name: 'AI-4', status: false }
        ],
        ao: [
            { _id: '5fbdb9c4aae376e8250b2464', name: 'AO-1', status: false },
            { _id: '5fbdb9e7aae376e8250b2465', name: 'AO-2', status: false },
            { _id: '5fbdb9eeaae376e8250b2466', name: 'AO-3', status: false },
            { _id: '5fbdb9f6aae376e8250b2467', name: 'AO-4', status: false },
        ]
    }

    static propTypes = {
        getServerInfo: PropTypes.func.isRequired,
        setServerInfo: PropTypes.func.isRequired,
        setChannelDiInfo: PropTypes.func.isRequired,
        setChannelDoInfo: PropTypes.func.isRequired,
        setChannelAiInfo: PropTypes.func.isRequired,
        setChannelAoInfo: PropTypes.func.isRequired,
        serverInfo: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getServerInfo();
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    loadFactoryDefault = (e) => {
        e.preventDefault();
        this.props.setServerInfo({
            _id: '5fb9d0d7e4399d70a65fc209',
            serverName: 'MyMeliora',
            serverLocation: ''
        });
        for (var i = 0; i < 4; i++) {
            this.props.setChannelDiInfo(this.state.di[i], i + 1);
            this.props.setChannelDoInfo(this.state.do[i], i + 1);
            this.props.setChannelAiInfo(this.state.ai[i], i + 1);
            this.props.setChannelAoInfo(this.state.ao[i], i + 1);
        }
        this.setState({
            msg: "Settings have been restored to factory default"
        })

        this.toggle();
    }

    onNoClick = (e) => {
        e.preventDefault();
        this.setState({
            msg: "Changes were not made. "
        })
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>
                    Submit
                </Button>
                <p>{this.state.msg}</p>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Load factory default</ModalHeader>
                    <ModalBody>
                        <p>Are you sure you want to load factory default settings?</p>
                        <Button
                            style={{ marginRight: '2rem' }}
                            color="success"
                            onClick={this.loadFactoryDefault}
                        >
                            Yes
                        </Button>
                        <Button
                            color="danger"
                            onClick={this.onNoClick}
                        >
                            No
                        </Button>
                    </ModalBody>


                </Modal>

            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    getServerInfo: PropTypes.func.isRequired,
    setServerInfo: PropTypes.func.isRequired,
    setChannelDiInfo: PropTypes.func.isRequired,
    setChannelDoInfo: PropTypes.func.isRequired,
    setChannelAiInfo: PropTypes.func.isRequired,
    setChannelAoInfo: PropTypes.func.isRequired,
    serverInfo: state.serverInfo
})

export default connect(mapStateToProps,
    {
        getServerInfo,
        setServerInfo,
        setChannelDiInfo,
        setChannelDoInfo,
        setChannelAiInfo,
        setChannelAoInfo
    })
    (LFDModal); 