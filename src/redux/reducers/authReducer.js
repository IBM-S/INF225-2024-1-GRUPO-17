import { ACTION_LOGIN, ACTION_LOGOUT } from '../actions/authActions.js';

const initialState = {
	isLogged: localStorage.getItem('token') ? true : false,
};

const authReducer = (state = initialState, action) => {
	switch(action.type) {

		case ACTION_LOGIN:
			return {
				...state,
				...action.payload,
			};
		case ACTION_LOGOUT:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
}

export default authReducer;