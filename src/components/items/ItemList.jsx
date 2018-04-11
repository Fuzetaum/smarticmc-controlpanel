import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
    render() { return(
        <div className="ItemListContainer">
            <p id="ItemListHeader"><strong>Item list:</strong></p>
            {(this.props.itemList.length === 0)?
                <p>Item list is empty</p>
                : this.props.itemList.map(item =>
                    <Item {...item}/>)}
        </div>
    );}
}

export default ItemList;