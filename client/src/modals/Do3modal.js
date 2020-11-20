import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, ModalHeader, Modal, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import {
    getDOChannels,
    setDOChannelName,
    setDOChannelAliasOFF,
    setDOChannelAliasON,
    setDOChannelStatus
} from '../actions/doActions';
import PropTypes from 'prop-types';

class Do3modal extends Component {
    state = {
        modal: false,
        name: 'DO-3',
        status: false,
        aliasOFF: 'OFF',
        aliasON: 'ON',
        toAll: false,
        nameChanged: false
    }

    componentDidMount() {
        this.props.getDOChannels();
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
                    this.props.setDOChannelName(this.state.name, i);
                    this.setState({ nameChanged: false });
                }
                if (this.state.aliasOFF !== '') this.props.setDOChannelAliasOFF(this.state.aliasOFF, i);
                if (this.state.aliasON !== '') this.props.setDOChannelAliasON(this.state.aliasON, i);
                if (this.state.status === false) {
                    this.props.setDOChannelStatus(this.state.aliasOFF, i);
                }
                else {
                    this.props.setDOChannelStatus(this.state.aliasON, i);
                }
            }
        }

        else {
            this.props.setDOChannelName(this.state.name, 3);
            this.setState({ nameChanged: false });
            if (this.state.aliasOFF !== '') this.props.setDOChannelAliasOFF(this.state.aliasOFF, 3);
            if (this.state.aliasON !== '') this.props.setDOChannelAliasON(this.state.aliasON, 3);
            if (this.state.status === false) {
                this.props.setDOChannelStatus(this.state.aliasOFF, 3);
            }
            else {
                this.props.setDOChannelStatus(this.state.aliasON, 3);
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
        const { name } = this.props.do1.do.find(channel => channel.ch === 3);

        return (
            <div>
                <Button color="link" onClick={this.toggle}>
                    {name}
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>DO Channel 3 Settings</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
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
                                <Input name="name" id="aliasName" placeholder="DO-3" onChange={this.onChange} />
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

Do3modal.propTypes = {
    getDOChannels: PropTypes.func.isRequired,
    setDOChannelName: PropTypes.func.isRequired,
    setDOChannelAliasOFF: PropTypes.func.isRequired,
    setDOChannelAliasON: PropTypes.func.isRequired,
    setDOChannelStatus: PropTypes.func.isRequired,
    do1: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    do1: state.do1
});

export default connect(mapStateToProps, {
    getDOChannels,
    setDOChannelName,
    setDOChannelAliasOFF,
    setDOChannelAliasON,
    setDOChannelStatus
})(Do3modal);
