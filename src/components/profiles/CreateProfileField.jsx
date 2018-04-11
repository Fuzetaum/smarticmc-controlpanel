import React from 'react';
import { Button, Input } from 'antd';

class CreateProfileField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameText: '',
            usernameText: '',
            passwordText: '',
            emailText: '',
        };
    }

    handleCreateButtonClick = () => {
        var url = 'http://localhost:8080/context/profile/create?';
        if(this.state.usernameText.length < 1) return;
        url = url.concat('username='+this.state.usernameText);
        if(this.state.passwordText.length < 1) return;
        url = url.concat('&password='+this.state.passwordText);
        console.log('Fetching data from '+url);
        fetch(url)
        .then(response => response.text())
        .then(responseText => JSON.parse(responseText))
        .then(responseJson => {
            if(responseJson.message !== 'SUCCESS')
                this.props.errorAddProfile();
        });
    }

    render() {
        return(
        <div className='CreateProfileField'>
            <div className='InputFieldTagsContainer'>
                <span>Name: </span>
                <span>Username (required): </span>
                <span>Password (required): </span>
                <span>Email: </span>
            </div>
            <div className='InputFieldInputContainer'>
                <Input
                    value={this.state.nameText}
                    onChange={event => this.setState({nameText: event.target.value,})} />
                <Input
                    value={this.state.usernameText}
                    onChange={event => this.setState({usernameText: event.target.value,})} />
                <Input type='password'
                    value={this.state.passwordText}
                    onChange={event => this.setState({passwordText: event.target.value,})} />
                <Input
                    value={this.state.emailText}
                    onChange={event => this.setState({emailText: event.target.value,})}/>
            </div>
            <Button onClick={() => {
                this.handleCreateButtonClick();
                this.setState({
                    nameText: '',
                    usernameText: '',
                    passwordText: '',
                    emailText: '',
                });
            }}>New profile</Button>
        </div>
    );}
}

export default CreateProfileField;