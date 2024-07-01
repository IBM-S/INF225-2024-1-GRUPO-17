
import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer.js';
import authReducer from './reducers/authReducer.js';
import pacienteReducer from './reducers/pacienteReducer.js';

const appReducer = combineReducers({
	counterReducer: counterReducer,
	authReducer: authReducer,
	pacienteReducer: pacienteReducer,
});

export default createStore(appReducer);