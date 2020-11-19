import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class ChangePassword extends Component {
    render() {
        return (
            <div>
                <h1>Change password</h1>
                <p>Password (8 - 16 characters long)</p>
                <Form>
                    <Label for="old" style={{ marginTop: '2rem' }} >Old Password</Label>
                    <Input type="password" name="old" id="old" placeholder="old password" maxLength="16" disabled='true' />
                    <Label for="new" style={{ marginTop: '2rem' }} >New Password</Label>
                    <Input type="password" name="new" id="new" placeholder="new password" maxLength="16" />
                    <Label for="re" style={{ marginTop: '2rem' }} >Retype Password</Label>
                    <Input type="password" name="re" id="re" placeholder="retye password" maxLength="16" />
                </Form>
                <Button style={{ marginTop: '2rem' }}>Save Changes</Button>
            </div>
        )
    }
}

export default ChangePassword