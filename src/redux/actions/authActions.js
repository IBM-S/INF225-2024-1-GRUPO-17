export const ACTION_LOGIN = 'ACTION_LOGIN';
export const ACTION_LOGOUT = 'ACTION_LOGOUT';

export const login = () => {
	return {
		type: ACTION_LOGIN,
		payload: {
			isLogged: true,
		},
	}
}

export const logout = () => {
	return {
		type: ACTION_LOGOUT,
		payload: {
			isLogged: false,
		},
	}
}