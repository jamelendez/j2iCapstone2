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
//import di1Reducer from '../reducers/di1Reducer';
import PropTypes from 'prop-types';

class Di3modal extends Component {
    state = {
        modal: false,
        name: 'DI-3',
        status: false,
        aliasOFF: 'OFF',
        aliasON: 'ON',
        toAll: false,
        nameChanged: false
    }

    componentDidMount() {
        this.props.getChanelDi1Info();
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.toAll) {
            for (var i = 1; i <= 4; i++) {
                if (this.state.nameChanged) {
                    this.props.setDIChannelName(this.state.name, i);
                    this.setState({ nameChanged: false });
                }
                if (this.state.aliasOFF !== '') this.props.setDIChannelAliasOFF(this.state.aliasOFF, i);
                if (this.state.aliasON !== '') this.props.setDIChannelAliasON(this.state.aliasON, i);
                if (this.state.status === false) {
                    this.props.setDIChannelStatus(this.state.aliasOFF, i);
                }
                else {
                    this.props.setDIChannelStatus(this.state.aliasON, i);
                }
            }
        }

        else {
            this.props.setDIChannelName(this.state.name, 3);
            this.setState({ nameChanged: false });
            if (this.state.aliasOFF !== '') this.props.setDIChannelAliasOFF(this.state.aliasOFF, 3);
            if (this.state.aliasON !== '') this.props.setDIChannelAliasON(this.state.aliasON, 3);
            if (this.state.status === false) {
                this.props.setDIChannelStatus(this.state.aliasOFF, 3);
            }
            else {
                this.props.setDIChannelStatus(this.state.aliasON, 3);
            }
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
        const { name } = this.props.di1.di.find(channel => channel.ch === 3);

        return (
            <div>
                <Button color="link" onClick={this.toggle}>
                    {name}
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>DI Channel 3 Settings</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
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
                                <Input name="name" id="aliasName" placeholder="DI-3" onChange={(e) => { this.onChange(e) }} />
                                <Label for="aliasOFF">Alias name "OFF" status</Label>
                                <Input name="aliasOFF" id="aliasOff" placeholder="OFF" onChange={this.onChange} />
                                <Label for="aliasON">Alias name "ON" status</Label>
                                <Input name="aliasON" id="aliasON" placeholder="ON" onChange={this.onChange} />
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }}
                                    block
                                >Save Changes</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

Di3modal.propTypes = {
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
})(Di3modal);
