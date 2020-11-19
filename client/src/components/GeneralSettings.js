import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { connect } from 'react-redux';
import { getServerInfo, setServerInfo } from '../actions/serverInfoActions'
import PropTypes from 'prop-types';

class GeneralSettings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverName: '',
            serverLocation: '',
            saveMessage: ''
        };
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    componentDidMount() {
        this.props.getServerInfo();
    }

    // Handles the message to be displayed after clicking the 'Save Changes' Button. 
    onSaveChangesClick = (serverName, serverLocation) => {
        if (serverName == '') {
            serverName = this.props.serverInfo.serverName;
        }
        if (serverLocation == '') {
            serverLocation = this.props.serverInfo.serverLocation;
        }
        this.props.setServerInfo(serverName, serverLocation);
        this.setState({ saveMessage: 'Changes have been saved.' })
    }

    render() {
        const { serverName, serverLocation } = this.state;
        return (
            <div>
                <h1>GeneralSettings</h1>
                <h2>I/O Server Settings</h2>
                <Form>
                    <Label for="serverName" style={{ marginTop: '2rem' }} >Server Name:</Label>
                    <Input type="testarea" name="serverName" id="serverName" placeholder="e.g. Server1, or My Meliora 1"
                        maxLength="16"
                        onChange={this.onInputChange}
                    />
                    <Label for="serverLocation" style={{ marginTop: '2rem' }} >Server Location:</Label>
                    <Input type="testarea" name="serverLocation" id="serverLocation" placeholder="e.g. UPRM or Mayagüez or Room 8"
                        maxLength="16"
                        onChange={this.onInputChange}
                    />
                </Form>
                <Button
                    style={{ marginTop: '2rem' }}
                    onClick={this.onSaveChangesClick.bind(this, serverName, serverLocation)}
                >
                    Save Changes
                </Button>
                <p>{this.state.saveMessage}</p>
            </div>
        )
    }
}

GeneralSettings.propTypes = {
    getServerInfo: PropTypes.func.isRequired,
    setServerInfo: PropTypes.func.isRequired,
    serverInfo: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    serverInfo: state.serverInfo
})

export default connect(mapStateToProps, { getServerInfo, setServerInfo })(GeneralSettings);