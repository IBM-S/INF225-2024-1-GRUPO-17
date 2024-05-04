import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../database.js';

class Equipment extends Sequelize.Model {
	static associate(models){
		/* NO BORRAR PARA IMPLEMENTAR MÁS ADELANTE.
		Equipment.hasMany(models.MedicalAppointment,{
			foreignKey: "id_equipment",
		});
		*/
	}
};

Equipment.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	equipment_type: {
		type: DataTypes.STRING,
		validate: {
			isIn: {
				args: [['resonancia','tomografia','rayos','ecografia']],
				msg: "Equipment Type no es valido",
			}
		}
	},
	}, {
		sequelize,
		timestamps: false,
	}
);

export default Equipment;