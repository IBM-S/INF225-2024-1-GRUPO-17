import PacienteController from './pacienteController.js';
import TrabajadorController from './trabajadorController.js';
import HoraMedicaController from './horamedicaController.js';
import VerifySign from './verifytoken.js';

export default (app) => {
	const pacienteController = new PacienteController();

	app.get('/allPacientes', pacienteController.getAllPacientes);
	app.post('/loginPaciente', pacienteController.loginPaciente);
	app.post('/registerPaciente', pacienteController.registerPaciente);

	const trabajadorController = new TrabajadorController();

	app.get('/allTrabajadores', trabajadorController.getAllTrabajadores);
	app.post('/loginTrabajador', trabajadorController.loginTrabajador);
	app.post('/registerTrabajador', trabajadorController.registerTrabajador);
	
	const horamedicaController = new HoraMedicaController();

	app.get('/allHorasMedicas', VerifySign ,horamedicaController.getAllHorasMedicas);
	app.get('/allPacienteHorasMedicas', VerifySign ,horamedicaController.getAllPacienteHorasMedicas);
	app.delete('/deleteHoraMedica', VerifySign, horamedicaController.deleteHoraMedica);
	app.post('/createHoraMedica', VerifySign, horamedicaController.createHoraMedica);
	app.put('/updateHoraMedica', VerifySign, horamedicaController.updateHoraMedica);
};