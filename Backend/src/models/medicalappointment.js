import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../database.js";

class MedicalAppointment extends Sequelize.Model {
	static associate(models) {
		MedicalAppointment.belongsTo(models.Patient,{
			foreignKey: "rut_patient",
		});
		MedicalAppointment.belongsTo(models.Worker,{
			foreignKey: "rut_doctor",
		});
		MedicalAppointment.belongsTo(models.Worker,{
			foreignKey: "rut_assistant",
		});
		/* NO BORRAR PARA IMPLEMENTAR MÁS ADELANTE.
		MedicalAppointment.belongsTo(models.Equipment,{
			foreignKey: "id_equipment",
		})
		*/
	}
}

MedicalAppointment.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	date: DataTypes.DATEONLY,
	start_time: DataTypes.TIME,
	end_time: DataTypes.TIME,
	exam_type: {
		type: DataTypes.STRING,
		validate: {
			isIn: {
				args: [['resonancia','tomografia','rayos','ecografia']],
				msg: "Exam Type no es valido",
			}
		}
	},
	diagnosis: DataTypes.STRING,
	rut_patient: DataTypes.STRING,
	rut_doctor: DataTypes.STRING,
	rut_assistant: DataTypes.STRING,
	//id_equipment: DataTypes.INTEGER, NO BORRAR PARA IMPLEMENTAR MÁS ADELANTE.
	}, {
		sequelize,
		timestamps: false,
	}
);

export default MedicalAppointment;