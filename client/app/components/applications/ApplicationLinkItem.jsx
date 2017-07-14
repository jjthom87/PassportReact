import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ApplicationLinkItem extends React.Component { 
	render(){

		const { id, company, position } = this.props;

		var singleApplicationLink = () => {
			return (
				<Link to="/applications">{company}: {position}</Link>
			)
		}
		return (	
			<div>
				{singleApplicationLink()}
			</div>
		)
	}
}