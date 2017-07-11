import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as actions from './../../actions/indexes/User_Home_Index';

import MainNavBar from './../navs/MainNavBar';
import CreateRecordForm from './../app_forms/CreateRecordForm'

export var UserHomePage = React.createClass({
  	componentWillMount: function(){
  		this.props.dispatch(actions.userHome())
	},
	render: function() {
    	return (
      		<div>
      			<MainNavBar/>
	      		<h1 className="text-center page-title">{this.props.userHome.user}'s Home Page</h1>
	      		<CreateRecordForm/>
      		</div>
		);
	}
});

export default connect(
	(state) => {
		return state;
	}
)(UserHomePage);