import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import routes from './routes';
import * as actions from './actions/indexes/User_Home_Index';
var store = require('./store/ConfigureStore').configure();

// import configureStore from './store/ConfigureStore';

// const store = configureStore();

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const store = createStoreWithMiddleware(reducers);

// store.subscribe(() => {
// 	console.log('New state', store.getState());
// });

// store.dispatch(actions.userHome());

//load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Provider store={store}>
    	<Router history={browserHistory}>{routes}</Router>
    </Provider>,
  document.getElementById('app')
);