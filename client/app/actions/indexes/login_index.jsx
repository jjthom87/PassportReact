import * as types from './../types/login_types';
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';

export function loginForm(loginUser){
	return { type: types.LOGIN_USER, loginUser}
};

export function loginUser(username, password){
	return function(dispatch){
		dispatch(loginForm(username,password));
		const loginUser = {username, password};
		fetch('/api/users/login', {
			method: 'post',
			body: JSON.stringify(loginUser),
			headers: {
				'content-type': 'application/json',
			},
			credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			if(results.message === "authentication failed"){
				throw alert("Authentication Failed");
				browserHistory.push('/login')
			}
			if(results.success = true){
				browserHistory.push('/userhome');
			}
		});
	}
};