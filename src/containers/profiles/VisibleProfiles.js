import { connect } from 'react-redux';
import ProfileList from '../../components/profiles/ProfileList';
import { toggleSelectedProfile } from '../../actions/selectedActions.js';

const mapStateToProps = (state) => ({
    profileList: state.profileList,
    expandedProfile: state.selected.profile
});

const mapDispatchToProps = (dispatch) => ({
    toggleSelect: (username) => dispatch(toggleSelectedProfile(username))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileList);