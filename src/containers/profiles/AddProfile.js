import { connect } from 'react-redux';
import CreateProfileField from '../../components/profiles/CreateProfileField';
import { errorAddProfile } from '../../actions/ProfileActions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    errorAddProfile: () => dispatch(errorAddProfile)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateProfileField);