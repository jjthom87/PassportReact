import * as types from './../types/logout_types';
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';

export function logoutForm(){
	return { type: types.LOGOUT_USER }
};

export function logoutUser(){
	return function(dispatch){
		dispatch(logoutForm())
		fetch('/api/users/logout', {
			headers: {
				'content-type': 'application/json',
			},
			credentials: 'include'
		}).then((results) => {
			browserHistory.push('/');
		})
	}
}