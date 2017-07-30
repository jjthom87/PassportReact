import React, { Component } from 'react';

import MainNavBar from './../navs/MainNavBar';
import UserHomeHeader from './../headers/UserHomeHeader';
import CreateRecordForm from './../app_forms/CreateRecordForm';
import ApplicationList from './../applications/ApplicationList';

export default class UserHomePage extends Component {
	render() {
    	return (
      		<div>
      			<MainNavBar/>
      			<UserHomeHeader/>
	      		<CreateRecordForm/>
	      		<ApplicationList/>
      		</div>
		);
	}
};