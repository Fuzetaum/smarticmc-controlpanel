import React from 'react';
import AddProfile from '../../containers/profiles/AddProfile';
import VisibleProfiles from '../../containers/profiles/VisibleProfiles';
import '../../styles/ProfileControlPanel.css';

class ProfileControlPanel extends React.Component {
    render() { return(
        <div className='ProfileControlPanel'>
            <p><strong>PROFILE</strong></p>
            <AddProfile />
            <VisibleProfiles />
        </div>
    );}
}

export default ProfileControlPanel;