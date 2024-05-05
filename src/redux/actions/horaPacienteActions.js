export const ACTION_FETCH = 'ACTION_FETCH';
export const ACTION_CREATE = 'ACTION_CREATE';
export const ACTION_FETCH2 = 'ACTION_FETCH2';

export const fetchHoras = (horas) => {
	return {
		type: ACTION_FETCH,
		payload: {
			horas: horas,
		}
	}
}

export const createHora = (hora) => {
	return {
		type: ACTION_CREATE,
		payload: {
			hora: hora,
		}
	}
}
