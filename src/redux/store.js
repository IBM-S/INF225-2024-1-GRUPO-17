
import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer.js';
import authReducer from './reducers/authReducer.js';
import pacienteReducer from './reducers/horaPacienteReducer.js'; // relacionado con las citas medicas del paciente
import dataReducer from './reducers/dataPacienteReducer.js';

const appReducer = combineReducers({
	counterReducer: counterReducer,
	authReducer: authReducer,
	pacienteReducer: pacienteReducer, // esta linea es para las citas medicas del paciente
	dataReducer: dataReducer,
});

export default createStore(appReducer);