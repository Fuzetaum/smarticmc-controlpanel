import React from 'react';
import { render } from 'react-dom';
import {
    createStore,
    combineReducers
} from 'redux';
import userList from './reducers/userList';
import itemList from './reducers/itemList';
import selectedEntities from './reducers/selectedEntities';
import { Provider } from 'react-redux';
import App from './components/App';
import './styles/index.css';

let rootReducer = combineReducers({
    profileList: userList,
    itemList: itemList,
    selected: selectedEntities
});

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));