import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class GeneralSettings extends Component {

    constructor(props) {
        super(props);
        this.state = { saveMessage: ''};
    }

    saveMessageHanler = () => {
        this.setState({saveMessage: 'Changes have been saved.'})
    }
    
    render() {
        

        return (
            <div>
                <h1>GeneralSettings</h1>
                <h2>I/O Server Settings</h2>
                <Form>
                    <Label for="serverName" style={{marginTop: '2rem'}} >Server Name:</Label>
                    <Input type="testarea" name="serverName" id="serverName" placeholder="e.g. Server1, or My Meliora 1" />
                    <Label for="serverLocation" style={{marginTop: '2rem'}} >Server Location:</Label>
                    <Input type="testarea" name="serverLocation" id="serverLocation" placeholder="e.g. UPRM or Mayagüez or Room 8" />
                </Form>
                <Button 
                    style={{marginTop: '2rem'}}
                    onClick={this.saveMessageHanler}
                >
                        Save Changes
                </Button>
                <p>{this.state.saveMessage}</p>
            </div>
        )
    }
}

export default GeneralSettings;