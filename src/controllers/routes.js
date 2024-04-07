import PacienteController from './pacienteController.js';

export default (app) => {
    const pacienteController = new PacienteController();

	app.get('/allPacientes', pacienteController.getAllPacientes);
	app.post('/loginPaciente', pacienteController.loginPaciente);
	app.post('/registerPaciente', pacienteController.registerPaciente);
};