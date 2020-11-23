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

class Di1modal extends Component {
    state = {
        modal: false,
        name: '',
        status: false,
        aliasOFF: '',
        aliasON: '',
        toAll: false,
        nameChanged: false
    }

    componentDidMount() {
        this.props.getChanelDi1Info();
        this.setState({
            status: this.props.di1.di[0].status
        });

        console.log(this.props.di1.di[0].status);
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
            console.log("Name in Redux: " + this.props.di1.di[0].name);
            console.log("Name in this.state: " + this.props.name)
            console.log(this.props.di1.di[0].aliasOFF);
            console.log(this.props.di1.di[0].aliasON);
            if (this.state.name === undefined) {
                console.log('entró');
                this.setState({ name: this.props.di1.di[0].name });
            }
            if (this.state.aliasOFF === undefined) { this.state.name = this.props.di1.di[0].aliasOFF }
            if (this.state.aliasON === undefined) { this.state.name = this.props.di1.di[0].aliasON }
            console.log("Name in this.state after changing it to the one in db : " + this.props.name)

            const updatedChannel =
            {
                _id: '5fbb1e33e0991cf0e4f1f5c3',
                name: this.state.name,
                status: this.state.status,
                aliasOFF: this.state.aliasOFF,
                aliasON: this.state.aliasON
            }
            this.props.setChannelDiInfo(updatedChannel, 1);
            /*this.props.setDIChannelName(this.state.name, 1);
            this.setState({ nameChanged: false });
            if (this.state.aliasOFF !== '') this.props.setDIChannelAliasOFF(this.state.aliasOFF, 1);
            if (this.state.aliasON !== '') this.props.setDIChannelAliasON(this.state.aliasON, 1);
            if (this.state.status === false) {
                this.props.setDIChannelStatus(this.state.aliasOFF, 1);
            }
            else {
                this.props.setDIChannelStatus(this.state.aliasON, 1);
            }*/
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
        const { name, status } = this.props.di1.di[0];
        console.log("Status: " + status);
        console.log("this.state.status: " + this.state.status)
        console.log("this.state.name: " + this.state.name)
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
