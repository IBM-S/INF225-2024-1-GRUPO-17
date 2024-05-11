export const ACTION_FETCH = 'ACTION_FETCH';
export const ACTION_CREATE = 'ACTION_CREATE';
export const ACTION_UPDATE = 'ACTION_UPDATE';

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

export const updateHora = (horaId, date, start_time, end_time, rut_doctor, rut_assistant) => {
	return {
		type: ACTION_UPDATE,
		payload: {
			id: horaId,
			date: date,
			start_time: start_time,
			end_time: end_time,
			rut_doctor: rut_doctor,
			rut_assistant: rut_assistant,
		}
	}
}
