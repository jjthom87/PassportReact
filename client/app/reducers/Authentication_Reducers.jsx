import * as types from './../actions/types/Authentication_Types';

export var authenticationReducer = (state = {}, action) => {
	switch(action.type){
		case types.CREATE_USER:
			return { ...state, name: action.name, username: action.username }
		case types.LOGIN_USER:
			return {...state, username: action.username}
		case types.LOGOUT_USER:
			return [...state]
		default:
			return state;
	}
}