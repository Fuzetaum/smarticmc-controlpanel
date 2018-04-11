import React from 'react';
import { Button, Input } from 'antd';

class CreateItemField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeText: '',
            nameText: '',
            descriptionText: ''
        };
    }

    handleCreateButtonClick = () => {
        var url = 'http://localhost:8080/museum/items/create?';
        if(this.state.typeText.length < 1) return;
        url = url.concat('type='+this.state.typeText);
        if(this.state.nameText.length < 1) return;
        url = url.concat('&name='+this.state.nameText);
        if(this.state.descriptionText.length < 1) return;
        url = url.concat('&description='+encodeURI(this.state.descriptionText));
        console.log('Fetching data from '+url);
        fetch(url)
        .then(response => response.text())
        .then(responseText => JSON.parse(responseText))
        .then(responseJson => {
            if(responseJson.message !== 'SUCCESS')
                this.props.errorAddItem();
        });
    }

    render() { return(
        <div className='CreateItemField'>
            <div className='InputFieldTagsContainer'>
                <span>Type (Required): </span>
                <span>Name (required): </span>
                <span>Description (required): </span>
            </div>
            <div className='InputFieldInputContainer'>
                <Input
                    value={this.state.typeText}
                    onChange={event => this.setState({typeText: event.target.value,})} />
                <Input
                    value={this.state.nameText}
                    onChange={event => this.setState({nameText: event.target.value,})} />
                <Input
                    value={this.state.descriptionText}
                    onChange={event => this.setState({descriptionText: event.target.value,})} />
            </div>
            <Button onClick={() => {
                this.handleCreateButtonClick();
                this.setState({
                    typeText: '',
                    nameText: '',
                    descriptionText: ''
                });
            }}>New Item</Button>
        </div>
    );}
}

export default CreateItemField;