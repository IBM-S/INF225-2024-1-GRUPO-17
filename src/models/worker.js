import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../database.js";

class Worker extends Sequelize.Model {
	static associate(models) {
		Worker.hasMany(models.MedicalAppointment,{
			foreingKey: "rut_doctor",
		});
		Worker.hasMany(models.MedicalAppointment,{
			foreingKey: "rut_assistant",
		})
	}
}

Worker.init({
	rut: {
		type: DataTypes.STRING,
		primaryKey: true,
	},
	name: DataTypes.STRING,
	lastname: DataTypes.STRING,
	password: DataTypes.STRING,
	birthdate: DataTypes.DATEONLY,
	address: DataTypes.STRING,
	phone_number: DataTypes.STRING,
	position: DataTypes.STRING
	}, {
		sequelize,
		timestamps: false,
	}
);

export default Worker;