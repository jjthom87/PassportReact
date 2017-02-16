import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import MainNavBar from './../navs/MainNavBar';

export default class UserHomePage extends Component {
  	constructor(props, context) {
		super(props, context);
		this.state = {
			loginUser: ''
		};
	}
  	componentWillMount(){
		fetch('/api/userhome', {
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			if(results != 401){
				this.setState({
					loginUser: results.name,
				});
			} else {
				browserHistory.push('/');
			}
		});
	}
	render() {

		const { loginUser } = this.state
		
    	return (
      		<div>
      			<MainNavBar />
	      		<h1 className="text-center" id="pageTitle">Hello {loginUser}, Welcome to JobTrackApp</h1>
      		</div>
		);
	}
}