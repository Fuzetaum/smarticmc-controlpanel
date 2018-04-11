import React from 'react';
import { Icon } from 'antd';

class ProfileItem extends React.Component {
    render() { return(
        <div className='ProfileItem'>
            <Icon
                type={(this.props.selected === this.props.username) ?
                    'minus-square-o'
                    : 'plus-square-o'}
                onClick={() => {
                    this.props.toggleSelect(this.props.username);
                }}
            />
            {(this.props.selected === this.props.username) ?
                <div>
                    {(typeof this.props.name !== 'undefined') ?
                        <p>name: {this.props.name}</p> : ''}
                    <p>username: {this.props.username}</p>
                    <p>password: {this.props.password}</p>
                    {(this.props.emailAddress !== undefined) ?
                        <p>email: {this.props.emailAddress}</p> : ''}
                </div>
                : <p key={this.props.username}>{this.props.username}</p>}
        </div>
    );}
}

export default ProfileItem;