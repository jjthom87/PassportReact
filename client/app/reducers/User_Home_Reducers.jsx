import * as types from './../actions/types/User_Home_Types';
import * as auth_types from './../actions/types/Authentication_Types';

export var userHomeReducer = (state = {}, action) => {
	switch(action.type){
		case types.USER_HOME:
			return { ...state, user: action.user, applications: action.applications };
		case types.USER_APPLICATION:
			return { ...state, application: action.application }
		default:
			return state;
	}
}