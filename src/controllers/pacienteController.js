import Paciente from '../models/paciente.js';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export default class PacienteController {
	async getAllPacientes(req, res) {
		try {
			const allPacientes = await Paciente.findAll();
			res.send(allPacientes);
		} catch (error) {
			res.status(400).send("Error al tratar de obtener todos los pacientes.");
			console.log(error);
		}
	}

	async loginPaciente(req, res) {
		try {
			const paciente = await Paciente.findOne({
				where: {
					rut: req.body.rut,
				},
			});
			if (!paciente) return res.status(400).send("Usuario o Contraseña incorrectos.");
			const validPass = await bcrypt.compare(req.body.contraseña, paciente.contraseña);
			if (!validPass) return res.status(400).send("Usuario o Contraseña incorrectos.");
			const token = jwt.sign({id:paciente.id}, process.env.SECRET_TOKEN);
			res.header('Access-Control-Expose-Headers', 'auth-token');
			return res.header("auth-token", token).send("Estas Logeado.");
		} catch (error) {
			res.status(400).send("Error al tratar de logear a un Paciente.");
			console.log(error);
		}
	}

	async registerPaciente(req, res) {
		try {
			const rutValid = await Paciente.findOne({
				where: {
					rut: req.body.rut,
				},
			});
			if (rutValid) return res.status(400).send("Este Paciente ya esta registrado.");
			//Se encripta la contraseña
			const salt = await bcrypt.genSalt(10);
			const hashPass = await bcrypt.hash(req.body.contraseña, salt);
			//Se crea el usuario
			const paciente = await Paciente.create({
                rut: req.body.rut,
                nombre: req.body.nombre,
                contraseña: hashPass,
                alergias: req.body.alergias,
                fecha_nacimiento: req.body.fecha_nacimiento,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                tramo_fonasa:req.body.tramo_fonasa,
			});
			return res.send(paciente);
		} catch (error) {
			res.status(400).send("Error al tratar de registrar a un Paciente.");
			console.log(error);
		}
	}
};
