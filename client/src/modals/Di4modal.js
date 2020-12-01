import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, ModalHeader, Modal, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import {
    getChanelDi1Info,
    setChannelDiInfo,
    setDIChannelName,
    setDIChannelAliasOFF,
    setDIChannelAliasON,
    setDIChannelStatus
} from '../actions/di1Actions';
import PropTypes from 'prop-types';

class Di4modal extends Component {
    state = {
        modal: false,
        name: '',
        status: false,
        aliasOFF: '',
        aliasON: '',
        toAll: false,
        nameChanged: false,
        channel_ids: [
            { id: '5fbb1e33e0991cf0e4f1f5c3' },
            { id: '5fbb1f20e0991cf0e4f1f5c4' },
            { id: '5fbb1f2fe0991cf0e4f1f5c5' },
            { id: '5fbb1f38e0991cf0e4f1f5c6' }
        ]
    }

    componentDidMount() {
        this.props.getChanelDi1Info();
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onSubmit = (newName, newStatus, newAliasOFF, newAliasON) => {
        if (this.state.toAll) {
            for (var i = 0; i < 4; i++) {
                const currentName = this.props.di1.di[i].name;
                const currentAliasOFF = this.props.di1.di[i].aliasOFF;
                const currentAliasON = this.props.di1.di[i].aliasON;
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
                this.props.setChannelDiInfo(updatedChannel, i + 1);
            }
        }
        else {
            const currentName = this.props.di1.di[3].name;
            const currentAliasOFF = this.props.di1.di[3].aliasOFF;
            const currentAliasON = this.props.di1.di[3].aliasON;
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
                _id: this.state.channel_ids[3].id,
                name: newName,
                status: newStatus,
                aliasOFF: newAliasOFF,
                aliasON: newAliasON
            }
            this.props.setChannelDiInfo(updatedChannel, 4);
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
        //console.log("Status: " + status);
        //console.log("this.state.status: " + this.state.status)
        //console.log("this.state.name: " + this.state.name)
        return (
            <div>
                <Button color="link" onClick={this.toggle}>
                    {this.props.di1.di[3].name}
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>DI Channel 4 Settings</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="toAll" checked={this.state.toAll} onChange={this.onCheckboxChange} />{' '}
                                                    Apply to all DI channels
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

Di4modal.propTypes = {
    getChanelDi1Info: PropTypes.func.isRequired,
    setChannelDiInfo: PropTypes.func.isRequired,
    setDIChannelName: PropTypes.func.isRequired,
    setDIChannelAliasOFF: PropTypes.func.isRequired,
    setDIChannelAliasON: PropTypes.func.isRequired,
    setDIChannelStatus: PropTypes.func.isRequired,
    di1: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    di1: state.di1
});

export default connect(mapStateToProps, {
    getChanelDi1Info,
    setChannelDiInfo,
    setDIChannelName,
    setDIChannelAliasOFF,
    setDIChannelAliasON,
    setDIChannelStatus
})(Di4modal);
