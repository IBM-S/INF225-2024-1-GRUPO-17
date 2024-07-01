import { ACTION_CREATE, ACTION_FETCH, ACTION_UPDATE } from '../actions/horaPacienteActions.js';

const initialState = {
	horas: []
};

const horaPacienteReducer = (state = initialState, action) => {
	switch(action.type) {

		case ACTION_FETCH:
			return {
				...state,
				horas: action.payload.horas,
			};

        case ACTION_CREATE:
            return {
                ...state,
                horas: [...state.horas, action.payload.hora]
            }
		case ACTION_UPDATE:
			return {
				...state,
				horas: state.horas.map((v) => v.id == action.payload.id ? {...v, 
					date: action.payload.date,
					start_time: action.payload.start_time,
					end_time: action.payload.end_time,
					rut_doctor: action.payload.rut_doctor,
					rut_assistant: action.payload.rut_assistant} : v
				)
			}
		default:
			return state;
	}
}

export default horaPacienteReducer;