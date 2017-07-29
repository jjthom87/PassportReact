import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
var store = require('./store/ConfigureStore').configure();
import * as actions from './actions/indexes/User_Home_Index';

store.dispatch(actions.userApplications());

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