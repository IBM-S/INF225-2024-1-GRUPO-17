import Worker from '../models/worker.js';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export default class WorkerController {
	async getAll(req, res) {
		try {
			const allWorkers = await Worker.findAll();
			if (!allWorkers) return res.status(400).send("No existen Workers.");
			res.send(allWorkers);
		} catch (error) {
			res.status(400).send("Error al tratar de obtener todos los Workers.");
			console.log(error);
		}
	}

	async getByRut(req, res) {
		try {
			const worker = await Worker.findOne({
				where: {
					rut: req.user.rut,
				},
			});
			if (!worker) return res.status(400).send("Worker no existente.");
			return res.send(worker);
		} catch (error) {
			res.status(400).send("Error al tratar de obtener Worker a partir de un rut.");
			console.log(error);
		}
	}

	async login(req, res) {
		try {
			const worker = await Worker.findOne({
				where: {
					rut: req.body.rut,
				},
			});
			if (!worker) return res.status(400).send("Worker no existente.");
			const validPass = await bcrypt.compare(req.body.password, worker.password);
			if (!validPass) return res.status(400).send("Rut o Contraseña incorrectos.");
			const token = jwt.sign({rut:worker.rut}, process.env.SECRET_TOKEN);
			res.header('Access-Control-Expose-Headers', 'auth-token');
			return res.header("auth-token", token).send("Worker ha sido Logeado.");
		} catch (error) {
			res.status(400).send("Error al tratar de logear a un Worker.");
			console.log(error);
		}
	}

	async register(req, res) {
		try {
			const rutValid = await Worker.findOne({
				where: {
					rut: req.body.rut,
				},
			});
			if (rutValid) return res.status(400).send("Este Worker ya se encuentra registrado.");
			const salt = await bcrypt.genSalt(10);
			const hashPass = await bcrypt.hash(req.body.password, salt);
			const worker = await Worker.create({
				rut: req.body.rut,
				name: req.body.name,
				lastname: req.body.lastname,
				password: hashPass,
				birthdate: req.body.birthdate,
				address: req.body.address,
				phone_number: req.body.phone_number,
				position: req.body.position,
			});
			return res.send(worker);
		} catch (error) {
			res.status(400).send("Error al tratar de registrar a un Worker.");
			console.log(error);
		}
	}

	async delete(req, res) {
		try {
			await Worker.destroy({
				where: {
					rut: req.body.rut,
				},
			});
			res.send({status: "ok"});
		} catch (error) {
			res.status(400).send("Error al tratar de borrar un Worker.");
			console.log(error);
		}
	}
}