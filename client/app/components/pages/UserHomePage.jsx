import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainNavBar from './../navs/MainNavBar';
import CreateRecordForm from './../app_forms/CreateRecordForm';
import ApplicationList from './../applications/ApplicationList';

var UserHomePage = React.createClass({
	render: function() {
    	return (
      		<div>
      			<MainNavBar/>
	      		<CreateRecordForm/>
	      		<ApplicationList/>
      		</div>
		);
	}
});

export default connect(
	(state) => {
		return state;
	}
)(UserHomePage);