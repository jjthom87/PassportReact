import React, { Component } from 'react';

import MainNavBar from './../navs/MainNavBar';
import UserHomeHeader from './../headers/UserHomeHeader';
import ApplicationList from './../applications/ApplicationList';
import ShowHideForm from './../app_forms/ShowHideForm';

export default class UserHomePage extends Component {
	render() {
    	return (
      		<div>
      			<MainNavBar/>
      			<UserHomeHeader/>
	      		<ShowHideForm/>
	      		<ApplicationList/>
      		</div>
		);
	}
};