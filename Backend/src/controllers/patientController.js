import Patient from '../models/patient.js';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export default class PatientController {
	async getAll(req, res) {
		try {
			const allPatients = await Patient.findAll();
			if (!allPatients) return res.status(400).send("No existen Patients.");
			res.send(allPatients);
		} catch (error) {
			res.status(400).send("Error al tratar de obtener todos los Patients.");
			console.log(error);
		}
	}

	async getByRut(req, res) {
		try {
			const patient = await Patient.findOne({
				where: {
					rut: req.user.rut,
				},
			});
			if (!patient) return res.status(400).send("Patient no existente.");
			return res.send(patient);
		} catch (error) {
			res.status(400).send("Error al tratar de obtener Patient a partir de un rut.");
			console.log(error);
		}
	}

	async login(req, res) {
		try {
			const patient = await Patient.findOne({
				where: {
					rut: req.body.rut,
				},
			});
			if (!patient) return res.status(400).send("Patient no existente.");
			const validPass = await bcrypt.compare(req.body.password, patient.password);
			if (!validPass) return res.status(400).send("Rut o Password incorrectos.");
			const token = jwt.sign({rut:patient.rut}, process.env.SECRET_TOKEN);
			res.header('Access-Control-Expose-Headers', 'auth-token');
			return res.header("auth-token", token).send("Patient ha sido Logeado.");
		} catch (error) {
			res.status(400).send("Error al tratar de logear a un Patient.");
			console.log(error);
		}
	}

	async register(req, res) {
		try {
			const rutValid = await Patient.findOne({
				where: {
					rut: req.body.rut,
				},
			});
			if (rutValid) return res.status(400).send("Este Patient ya se encuentra registrado.");
			const salt = await bcrypt.genSalt(10);
			const hashPass = await bcrypt.hash(req.body.password, salt);
			const patient = await Patient.create({
				rut: req.body.rut,
				name: req.body.name,
				lastname: req.body.lastname,
				password: hashPass,
				allergies: req.body.allergies,
				birthdate: req.body.birthdate,
				address: req.body.address,
				phone_number: req.body.phone_number,
				fonasa: req.body.fonasa,
			});
			return res.send(patient);
		} catch (error) {
			res.status(400).send("Error al tratar de registrar a un Patient.");
			console.log(error);
		}
	}

	async delete(req, res) {
		try {
			await Patient.destroy({
				where: {
					rut: req.body.rut,
				},
			});
			res.send({status: "ok"});
		} catch (error) {
			res.status(400).send("Error al tratar de borrar un Patient.");
			console.log(error);
		}
	}
}