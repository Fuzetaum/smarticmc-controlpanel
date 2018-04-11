import React from 'react';
import { Icon } from 'antd';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    render() { return(
        <div className='Item'>
            <Icon
                type={(this.state.collapsed) ?
                    'minus-square-o'
                    : 'plus-square-o'}
                onClick={() => {
                    this.setState({
                        collapsed: !this.state.collapsed,
                    });
                }}
            />
            {(this.state.collapsed) ?
                <div>
                    <p>{'type: '+this.props.type}</p>
                    <p>{'name: '+this.props.name}</p>
                    <p>{(this.props.description !== undefined) ?
                        'description: '+this.props.description: ''}</p>
                </div>
                : <p key={this.props.name}>{this.props.name}</p>}
        </div>
    );}
}

export default Item;