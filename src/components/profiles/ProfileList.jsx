import React from 'react';
import ProfileItem from './ProfileItem';

class ProfileList extends React.Component {
    toggleProfile = (profileUsername) => {
        this.props.toggleSelect(profileUsername);
        //Force component to re-render
    }

    render() { return(
        <div className="ProfileListContainer">
            <p id="ProfileListHeader"><strong>Profile list:</strong></p>
            {(this.props.profileList.length === 0)?
                <p>Profile list is empty</p>
                : this.props.profileList.map(profile => (
                    <ProfileItem {...profile} toggleSelect={this.toggleProfile}
                        selected={this.props.expandedProfile}/>
            ))}
        </div>
    );}
}

export default ProfileList;