import { ACTION_CREATE, ACTION_FETCH } from '../actions/pacienteActions.js';

const initialState = {
	horas: []
};

const horaReducer = (state = initialState, action) => {
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
		default:
			return state;
	}
}

export default horaReducer;