import React, { Component } from 'react';
import { Button } from 'reactstrap';

class SaveReset extends Component {
    render() {
        return (
            <div>
                <h1>Save/Reset</h1>
                <p>
                    The configuration has been changed. Click submit to save changes. 
                </p>
                <p>Click 'Reset' to reboot with the new configuration.</p>
                <Button style={{marginTop: '2rem'}}>Save</Button>
                <Button style={{marginTop: '2rem', marginLeft:'10rem'}}>Reset</Button>
            </div>
        )
    }
}

export default SaveReset; 