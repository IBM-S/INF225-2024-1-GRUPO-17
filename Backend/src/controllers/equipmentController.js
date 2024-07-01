import Equipment from '../models/equipment.js';

export default class EquipmentController {
	async getAll(req, res) {
		try {
			const allEquipment = await Equipment.findAll();
			res.send(allEquipment);
		} catch (error) {
			res.status(400).send("Error al tratar de obtener todos los Equipment.");
			console.log(error);
		}
	}

	async getById(req, res) {
		try {
			const equipment = await equipment.findOne({
				where: {
					id: req.body.id,
				},
			});
			if (!equipment) return res.status(400).send("Equipment no existente.");
			return res.send(equipment);
		} catch (error) {
			res.status(400).send("Error al tratar de obtener Equipment a partir de un rut.");
			console.log(error);
		}
	}

	async create(req, res) {
		try {
			const equipment = await Equipment.create({
				equipment_type: req.body.equipment_type,
			});
			return res.send(equipment);
		} catch (error) {
			res.status(400).send("Error al tratar de crear un Equipment.");
			console.log(error);
		}
	}

	async delete(req, res) {
		try {
			await Equipment.destroy({
				where: {
					id: req.body.id
				}
			});
			res.send({status: "ok"});
		} catch (error) {
			res.status(400).send("Error al tratar de borrar un Equipment.");
			console.log(error);
		}
	}
}