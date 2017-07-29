import * as types from './../actions/types/User_Home_Types';
import * as auth_types from './../actions/types/Authentication_Types';

export var userHomeReducer = (state = {}, action) => {
	switch(action.type){
		case types.USER_HOME:
			return { ...state, user: action.user, applications: action.applications }
		case types.USER_APPLICATION:
			return { ...state, application: action.application }
		default:
			return state;
	}
}

export var userApplicationReducer = (state = [], action) => {
	switch(action.type){
		case types.USER_APPLICATIONS:
			return [
			...state,
			...action.applications
			];
		case types.UPDATE_USER_DATA:
			return [
				...state, 
				action.createdApplication 
				]
		default:
			return state;
	}
}