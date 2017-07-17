import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';

import * as types from './../types/User_Home_Types';

export function userHome(){
     return function(dispatch){
		fetch('/api/userhome', {
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			if(results != 401){
				dispatch({
					type: types.USER_HOME,
					applications: results.applications,
					user: results.user
				})
			} else {
				browserHistory.push('/');
			}
		});
	}
};

export function userHomeApplication(id){
     return function(dispatch){
		fetch(`/api/application/`+ id, {
		headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			dispatch({
				type: types.USER_APPLICATION,
				application: results
			})
		});
	}
};

export function createRecordForm(companyName, position, dateApplied, replied, nextEvent, notes, resumeSubmitted){
	return { type: types.CREATE_RECORD, companyName, position, dateApplied, replied, nextEvent, notes, resumeSubmitted }
}

export function createNewRecord(companyName, position, dateApplied, replied, nextEvent, notes, resumeSubmitted){
    return function(dispatch){
		dispatch(createRecordForm(companyName, position, dateApplied, replied, nextEvent, notes, resumeSubmitted));
		const newRecord = {companyName, position, dateApplied, replied, nextEvent, notes, resumeSubmitted };
		fetch('/api/record/create', {
			method: 'post',
			body: JSON.stringify(newRecord),
			headers: {
				'content-type': 'application/json'
			},
			credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
		});
	};
};



