import HoraMedica from '../models/horamedica.js';

export default class HoraMedicaController {
	async getAllHorasMedicas(req, res) {
		try {
			const allHorasMedicas = await HoraMedica.findAll();
			res.send(allHorasMedicas);
		} catch (error) {
			res.status(400).send(error)
			// res.status(400).send("Error al tratar de obtener todas las horas medicas.");
		}
	}

	async getAllPacienteHorasMedicas(req, res) {
		try {
			const allHorasMedicas = await HoraMedica.findAll({
				where: {
					id_paciente: req.user.id,
				}
			});
			res.send(allHorasMedicas);
		} catch (error) {
			res.status(400).send("Error al tratar de obtener las horas medicas del paciente.")
		}
	}

	async deleteHoraMedica(req, res) {
		try {
			await HoraMedica.destroy({
				where: {
					id: req.body.id
				}
			});
			res.send({status: "ok"});
		} catch (error) {
			res.status(400).send("Error al tratar de borrar una hora medica.");
		}
	}

	async createHoraMedica(req, res) {
		try {
			const horamedica = await HoraMedica.create({
				fecha: req.body.fecha,
				hora: req.body.hora,
				posible_diagnostico: req.body.posible_diagnostico,
				id_paciente: req.user.id,
				id_medico_deriva: req.body.id_medico_deriva
			});
			return res.send(horamedica);
		} catch (error) {
			res.status(400).send("Error al trata de crear una hora medica.");
		}
	}

	async updateHoraMedica(req, res) {
		try {
			const horamedica = await HoraMedica.findByPk(req.body.id);
			if (!horamedica) return res.status(400).send("La solicitud ingresada no existe.");
			horamedica.update({
				fecha: req.body.fecha,
				hora: req.body.hora,
			});
			return res.send(horamedica);
		} catch (error) {
			res.status(400).send("Error al tratar de actualizar la hora medica.");
		}
	}
};