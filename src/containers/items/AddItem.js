import { connect } from 'react-redux';
import CreateItemField from '../../components/items/CreateItemField';
import { errorAddItem } from '../../actions/ItemActions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    errorAddItem: () => dispatch(errorAddItem)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateItemField);