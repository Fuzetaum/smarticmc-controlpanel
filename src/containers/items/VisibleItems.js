import { connect } from 'react-redux';
import ItemList from '../../components/items/ItemList';

const mapStateToProps = (state) => ({
    itemList: state.itemList
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);