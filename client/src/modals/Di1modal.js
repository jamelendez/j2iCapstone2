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

class Di1modal extends Component {
    state = {
        modal: false,
        name: 'DI-1',
        status: false,
        aliasOFF: 'OFF',
        aliasON: 'ON'
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

        this.props.setDIChannelName(this.state.name, 1);
        if (this.state.aliasOFF !== '') this.props.setDIChannelAliasOFF(this.state.aliasOFF, 1);
        if (this.state.aliasON !== '') this.props.setDIChannelAliasON(this.state.aliasON, 1);
        if (this.state.status === false) {
            this.props.setDIChannelStatus(this.state.aliasOFF, 1);
        }
        else {
            this.props.setDIChannelStatus(this.state.aliasON, 1);
        }
        this.toggle();
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onCheckboxChange = (e) => {
        this.setState({ [e.target.name]: e.target.checked });
    }



    render() {
        // Escoge el nombre del canal 1 en el state del reducer
        const { name } = this.props.di1.di.find(channel => channel.ch === 1);

        return (
            <div>
                <Button color="link" onClick={this.toggle}>
                    {name}
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>DI Channel 1 Settings</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
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
                                <Input name="name" id="aliasName" placeholder="DI-1" onChange={this.onChange} />
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

Di1modal.propTypes = {
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
})(Di1modal);
