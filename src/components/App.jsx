import React from 'react';
import { connect } from 'react-redux';
import { registerProfileList } from '../actions/ProfileActions';
import { registerItemList } from '../actions/ItemActions';
import ProfileControlPanel from './profiles/ProfileControlPanel';
import ItemControlPanel from './items/ItemControlPanel';
import ManageSelectedProfile from '../containers/profiles/ManageSelectedProfile';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: null,
            counter: 1,
        };
    }

    componentWillMount = () => {
        this.fetchLists();
    }

    componentDidMount = () => {
        let timer = setInterval(this.tick, 1000);
        this.setState({
            timer: timer,
            counter: 1,
        });
    }

    componentWillUnmount() {
        this.clearInterval(this.state.timer);
    }

    tick = () => {
        if(this.state.counter+1 === 6) {
            this.setState({ counter: 1, });
            this.fetchLists();
        }
        else this.setState({ counter: this.state.counter+1, });
    }

    fetchLists = () => {
        //Profile list fetch
        fetch('http://localhost:8080/context/profile/getall')
        .then(response => response.json())
        .then(responseJson => JSON.parse(responseJson.message))
        .then(arrayJson => this.props.registerProfileList(arrayJson));
        //Item list fetch
        fetch('http://localhost:8080/museum/items/getall')
        .then(response => response.json())
        .then(responseJson => JSON.parse(responseJson.message))
        .then(arrayJson => this.props.registerItemList(arrayJson));
    }

    render() { return(
        <div className="App">
            <p><strong>Next update in {5-this.state.counter}s</strong></p>
            <div className="UpperAppContainer">
                <ProfileControlPanel />
                <ItemControlPanel />
            </div>
            <div className="LowerAppContainer">
                <ManageSelectedProfile />
            </div>
        </div>
    );}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    registerProfileList: (profileList) =>
        dispatch(registerProfileList(profileList)),
    registerItemList: (itemList) => 
        dispatch(registerItemList(itemList))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);