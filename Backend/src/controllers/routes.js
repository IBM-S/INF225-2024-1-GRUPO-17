import PatientController from './patientController.js';
import WorkerController from './workerController.js';
import EquipmentController from './equipmentController.js';
import MedicalAppointmentController from './medicalAppointmentController.js';
import VerifySign from './verifytoken.js';

export default (app) => {
	const patientController = new PatientController();

	app.get('/allPatients', patientController.getAll);
	app.get('/patientByRut', VerifySign, patientController.getByRut);
	app.post('/loginPatient', patientController.login);
	app.post('/registerPatient', patientController.register);
	app.delete('/deletePatient', patientController.delete);

	const workerController = new WorkerController();

	app.get('/allWorkers', workerController.getAll);
	app.get('/workerByRut', VerifySign, workerController.getByRut);
	app.post('/loginWorker', workerController.login);
	app.post('/registerWorker', workerController.register);
	app.delete('/deleteWorker', workerController.delete);

	const medicalAppointmentController = new MedicalAppointmentController();

	app.get('/allMedicalAppointments', VerifySign, medicalAppointmentController.getAll);
	app.get('/medicalAppointmentById', VerifySign, medicalAppointmentController.getById);
	app.get('/medicalAppointmentByPatient', VerifySign, medicalAppointmentController.getByPatient);
	app.get('/medicalAppointmentByExamType', VerifySign, medicalAppointmentController.getByExamType);
	app.get('/medicalAppointmentByDoctor', VerifySign, medicalAppointmentController.getByDoctor);
	app.get('/medicalAppointmentByAssistant', VerifySign, medicalAppointmentController.getByAssistant);
	app.delete('/deleteMedicalAppointment', VerifySign, medicalAppointmentController.delete);
	app.post('/createMedicalAppointment', VerifySign, medicalAppointmentController.create);
	app.put('/updateMedicalAppointment', VerifySign, medicalAppointmentController.update);

	const equipmentController = new EquipmentController();

	app.get('/allEquipment', equipmentController.getAll);
	app.get('/getEquipmentById', equipmentController.getById);
	app.delete('/deleteEquipment', equipmentController.delete);
	app.post('/createEquipment', equipmentController.create);
	
};