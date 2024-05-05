import { ACTION_CREATE, ACTION_FETCH, ACTION_FETCH2 } from '../actions/horaPacienteActions.js';

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

		case ACTION_FETCH2:
			return {
				...state,
				pacientes: action.payload.pacientes,
			};

        case ACTION_CREATE:
            return {
                ...state,
                horas: [...state.horas, action.payload.hora]
            }
		default:
			return state;
	}
}

export default horaPacienteReducer;