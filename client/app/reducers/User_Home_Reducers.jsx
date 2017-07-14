import * as types from './../actions/types/User_Home_Types';
import * as auth_types from './../actions/types/Authentication_Types';

// export default function(state = {}, action){
// 	switch(action.type){
// 		case 'user_home':
// 			return { ...state, user: action.user, applications: action.applications };
// 		case auth_types.CREATE_USER:
// 			return { ...state,
// 					name: action.name,
// 					username: action.username,
// 				};
// 		case auth_types.LOGIN_USER:
// 			return {...state, username: action.username}
// 		case auth_types.LOGOUT_USER:
// 			return [
// 			...state,
// 			];
// 	}
// 	return state
// }
export var userHomeReducer = (state = {}, action) => {
	switch(action.type){
		case 'user_home':
			return { ...state, user: action.user, applications: action.applications };
		default:
			return state;
	}
}

// export var createAccountReducer = (state = {}, action) => {
// 	switch(action.type){
// 		case types.CREATE_USER:
// 			return { ...state,
// 					name: action.name,
// 					username: action.username,
// 				}
// 		default:
// 			return state;
// 	}
// }

// export var loginReducer = (state = {}, action) => {
// 	switch(action.type){
// 		case types.LOGIN_USER:
// 			return {...state, username: action.username}
// 		default:
// 			return state;
// 	}
// }

// export var logoutReducer = (state = {}, action) => {
// 	switch(action.type){
// 		case types.LOGOUT_USER:
// 			return [
// 			...state,
// 			];
// 		default:
// 			return state;
// 	}
// }