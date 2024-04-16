import Trabajador from '../models/trabajador.js';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export default class TrabajadorController {
	async getAllTrabajadores(req, res) {
		try {
			const allTrabajadores = await Trabajador.findAll();
			res.send(allTrabajadores);
		} catch (error) {
			res.status(400).send("Error al tratar de obtener todos los trabajadores.");
			console.log(error);
		}
	}

	async loginTrabajador(req, res) {
		try {
			const trabajador = await Trabajador.findOne({
				where: {
					rut: req.body.rut,
				},
			});
			if (!trabajador) return res.status(400).send("Usuario o Contraseña incorrectos.");
			const validPass = await bcrypt.compare(req.body.contraseña, trabajador.contraseña);
			if (!validPass) return res.status(400).send("Usuario o Contraseña incorrectos.");
			const token = jwt.sign({id:trabajador.id}, process.env.SECRET_TOKEN);
			res.header('Access-Control-Expose-Headers', 'auth-token');
			return res.header("auth-token", token).send("Estas Logeado.");
		} catch (error) {
			res.status(400).send("Error al tratar de logear a un Trabajador.");
			console.log(error);
		}
	}

	async registerTrabajador(req, res) {
		try {
			const rutValid = await Trabajador.findOne({
				where: {
					rut: req.body.rut,
				},
			});
			if (rutValid) return res.status(400).send("Este Trabajador ya esta registrado.");
			//Se encripta la contraseña
			const salt = await bcrypt.genSalt(10);
			const hashPass = await bcrypt.hash(req.body.contraseña, salt);
			//Se crea el usuario
			const trabajador = await Trabajador.create({
                rut: req.body.rut,
                nombre: req.body.nombre,
                contraseña: hashPass,
                profesion: req.body.profesion,
			});
			return res.send(trabajador);
		} catch (error) {
			res.status(400).send("Error al tratar de registrar a un Trabajador.");
			console.log(error);
		}
	}
}