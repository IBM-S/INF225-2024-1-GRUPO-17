import MedicalAppointment from '../models/medicalappointment.js';

export default class MedicalAppointmentController {

	async getAll(req, res) {
		try {
			const allMedicalAppointments = await MedicalAppointment.findAll();
			res.send(allMedicalAppointments);
		} catch (error) {
			res.status(400).send("Error al tratar de obtener todos los MedicalAppointments.");
			console.log(error);
		}
	}

	async getById(req, res) {
		try {
			const medicalAppointment = await MedicalAppointment.findOne({
				where: {
					id: req.body.id,
				},
			});
			return res.send(medicalAppointment);
		} catch (error) {
			res.status(400).send("Error al tratar de obtener MedicalAppointment a partir de un id.");
			console.log(error);
		}
	}

	async getByPatient(req, res) {
		try {
			const medicalAppointments = await MedicalAppointment.findAll({
				where: {
					rut_patient: req.user.rut
				},
			});
			return res.send(medicalAppointments);
		} catch (error) {
			res.status(400).send("Error al tratar de obtener los MedicalAppointments de un Patient.");
			console.log(error);
		}
	}

	async getByExamType(req, res){
		try {
			const medicalAppointments = await MedicalAppointment.findAll({
				where: {
					exam_type: req.body.exam_type
				},
			});
			return res.send(medicalAppointments);
		} catch (error) {
			res.status(400).send("Error al tratar de obtener los MedicalAppointments del tipo ExamType.");
			console.log(error);
		}
	}

	async getByDoctor(req, res){
		try {
			const medicalAppointments = await MedicalAppointment.findAll({
				where: {
					rut_doctor: req.body.rut_doctor
				},
			});
			return res.send(medicalAppointments);
		} catch (error) {
			res.status(400).send("Error al tratar de obtener los MedicalAppointments a partir de un rut de un Doctor.");
			console.log(error);
		}
	}

	async getByAssistant(req, res){
		try {
			const medicalAppointments = await MedicalAppointment.findAll({
				where: {
					rut_assistant: req.body.rut_assistant
				},
			});
			return res.send(medicalAppointments);
		} catch (error) {
			res.status(400).send("Error al tratar de obtener los MedicalAppointments a partir de un rut de un Assistant.");
			console.log(error);
		}
	}

	async create(req, res) {
		try {
			const valid = await MedicalAppointment.findOne({
				where: {
					date: req.body.date,
					start_time: req.body.start_time,
					end_time: req.body.end_time,
					rut_doctor: req.body.rut_doctor,
				},
			});
			if (valid) return res.status(400).send("Ya existe un MedicalAppointment para un mismo Date-Time-Doctor.");
			const medicalAppointment = await MedicalAppointment.create({
				date: req.body.date,
				start_time: req.body.start_time,
				end_time: req.body.end_time,
				exam_type: req.body.exam_type,
				diagnosis: req.body.diagnosis,
				rut_patient: req.user.rut,
				rut_doctor: req.body.rut_doctor,
				rut_assistant: req.body.rut_assistant,
				//id_equipment: req.body.id_equipment, NO BORRAR PARA IMPLEMENTAR MÁS ADELANTE.
			});
			return res.send(medicalAppointment);
		} catch (error) {
			res.status(400).send("Error al tratar de crear un MedicalAppointment.");
			console.log(error);
		}
	}

	async delete(req, res) {
		try {
			await MedicalAppointment.destroy({
				where: {
					id: req.body.id,
				},
			});
			res.send({status: "ok"});
		} catch (error) {
			res.status(400).send("Error al tratar de borrar un MedicalAppointment.");
			console.log(error);
		}
	}

	async update(req, res) {
		try {
			const medicalAppointment = await MedicalAppointment.findOne({
				where: {
					id: req.body.id,
				},
			});
			if (!medicalAppointment) return res.status(400).send("El MedicalAppointment buscado no existe.");
			medicalAppointment.update({
				date: req.body.date,
				start_time: req.body.start_time,
				end_time: req.body.end_time,
				exam_type: req.body.exam_type,
				rut_doctor: req.body.rut_doctor,
				rut_assistant: req.body.rut_assistant,
				//id_equipment: req.body.id_equipment, NO BORRAR PARA IMPLEMENTAR MÁS ADELANTE.
			});
			return res.send(medicalAppointment);
		} catch (error) {
			res.status(400).send("Error al tratar de actualizar un MedicalAppointment.");
			console.log(error);
		}
	}
}