import React from 'react';
import AddItem from '../../containers/items/AddItem';
import VisibleItems from '../../containers/items/VisibleItems';
import ManageItem from '../../containers/items/ManageItem';
import '../../styles/ItemControlPanel.css';

class ProfileControlPanel extends React.Component {
    render() { return(
        <div className='ItemControlPanel'>
            <p><strong>ITEMS</strong></p>
            <AddItem />
            <VisibleItems />
            <ManageItem />
        </div>
    );}
}

export default ProfileControlPanel;