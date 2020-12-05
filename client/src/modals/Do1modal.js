import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, ModalHeader, Modal, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import {
    getDOChannels,
    setChannelDoInfo,
    sendChannelsStatusToMQTTBroker,
    setDOChannelName,
    setDOChannelAliasOFF,
    setDOChannelAliasON,
    setDOChannelStatus
} from '../actions/doActions';
import PropTypes from 'prop-types';

class Do1modal extends Component {
    state = {
        modal: false,
        name: '',
        status: false,
        aliasOFF: '',
        aliasON: '',
        toAll: false,
        nameChanged: false,
        channel_ids: [
            { id: '5fbb1fa1e0991cf0e4f1f5c7' },
            { id: '5fbb1fd1e0991cf0e4f1f5c8' },
            { id: '5fbb1fdae0991cf0e4f1f5c9' },
            { id: '5fbb1fe4e0991cf0e4f1f5ca' }
        ]
    }

    componentDidMount() {
        this.props.getDOChannels();
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onSubmit = (newName, newStatus, newAliasOFF, newAliasON) => {
        if (this.state.toAll) {
            for (var i = 0; i < 4; i++) {
                const currentName = this.props.do1.do[i].name;
                const currentAliasOFF = this.props.do1.do[i].aliasOFF;
                const currentAliasON = this.props.do1.do[i].aliasON;
                var nameToSet = newName;
                console.log("currentName: " + currentName);
                if (nameToSet == '') {
                    nameToSet = currentName
                }
                if (newAliasOFF == '') {
                    console.log('entro');
                    newAliasOFF = currentAliasOFF
                }
                if (newAliasON == '') {
                    newAliasON = currentAliasON
                }
                console.log('newName: ' + newName);
                const updatedChannel =
                {
                    _id: this.state.channel_ids[i].id,
                    name: nameToSet,
                    status: newStatus,
                    aliasOFF: newAliasOFF,
                    aliasON: newAliasON
                }
                this.props.setChannelDoInfo(updatedChannel, i + 1);
            }
            this.props.sendChannelsStatusToMQTTBroker();
        }

        else {
            const currentName = this.props.do1.do[0].name;
            const currentAliasOFF = this.props.do1.do[0].aliasOFF;
            const currentAliasON = this.props.do1.do[0].aliasON;
            console.log("currentName: " + currentName);
            if (newName == '') {
                newName = currentName
            }
            if (newAliasOFF == '') {
                console.log('entro');
                newAliasOFF = currentAliasOFF
            }
            if (newAliasON == '') {
                newAliasON = currentAliasON
            }
            console.log('newName: ' + newName);
            const updatedChannel =
            {
                _id: this.state.channel_ids[0].id,
                name: newName,
                status: newStatus,
                aliasOFF: newAliasOFF,
                aliasON: newAliasON
            }
            this.props.setChannelDoInfo(updatedChannel, 1);
            this.props.sendChannelsStatusToMQTTBroker();
        }


        this.toggle();
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if ([e.target.name] == 'name') this.setState({ nameChanged: true });
        if (e.target.value === '') this.setState({ nameChanged: false });
    };

    onCheckboxChange = (e) => {
        this.setState({ [e.target.name]: e.target.checked });
    }



    render() {
        // Escoge el nombre del canal 1 en el state del reducer
        const { name, status, aliasOFF, aliasON } = this.state;
        return (
            <div>
                <Button color="link" onClick={this.toggle}>
                    {this.props.do1.do[0].name}
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>DO Channel 1 Settings</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="toAll" checked={this.state.toAll} onChange={this.onCheckboxChange} />{' '}
                                                    Apply to all DO channels
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="status" checked={this.state.status} onChange={this.onCheckboxChange} />{' '}
                                                    Channel status
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">Alias name of channel</Label>
                                <Input value={this.state.name} name="name" id="aliasName" onChange={this.onChange} />
                                <Label for="aliasOFF">Alias name "OFF" status</Label>
                                <Input value={this.state.aliasOFF} name="aliasOFF" id="aliasOff" onChange={this.onChange} />
                                <Label for="aliasON">Alias name "ON" status</Label>
                                <Input value={this.state.aliasON} name="aliasON" id="aliasON" onChange={this.onChange} />
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }}
                                    block
                                    onClick={this.onSubmit.bind(this, name, status, aliasOFF, aliasON)}
                                >Save Changes</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

Do1modal.propTypes = {
    getDOChannels: PropTypes.func.isRequired,
    setChannelDoInfo: PropTypes.func.isRequired,
    sendChannelsStatusToMQTTBroker: PropTypes.func.isRequired,
    setDOChannelName: PropTypes.func.isRequired,
    setDOChannelAliasOFF: PropTypes.func.isRequired,
    setDOChannelAliasON: PropTypes.func.isRequired,
    setDoChannelStatus: PropTypes.func.isRequired,
    di1: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    do1: state.do1
});

export default connect(mapStateToProps, {
    getDOChannels,
    setChannelDoInfo,
    sendChannelsStatusToMQTTBroker,
    setDOChannelName,
    setDOChannelAliasOFF,
    setDOChannelAliasON,
    setDOChannelStatus
})(Do1modal);
