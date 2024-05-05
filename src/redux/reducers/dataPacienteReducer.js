import { MOSTRAR_DATA } from '../actions/dataPacienteActions.js';

const initialState = {
    datas: {
        rut: '',
        name: '',
        lastname: '',
        birthdate: '',
        allergies: [],
        fonasa: '',
        address: '',
        phone_number: '',
    }
};


const dataReducer = (state = initialState, action) => {
	switch(action.type) {

		case MOSTRAR_DATA:
			return {
				...state,
                datas: action.payload.datas, // Sobrescribe la propiedad 'name' con los datos de 'action.payload'
                
			};
		default:
			return state;
	}
}

export default dataReducer;