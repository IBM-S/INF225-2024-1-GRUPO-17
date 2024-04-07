import { Sequelize } from 'sequelize';
import sequelize from '../database.js';

class HoraMedica extends Sequelize.Model {
	static associate(models) {
		HoraMedica.belongsTo(models.Paciente,{
			foreignKey: "id_paciente",
		});
        HoraMedica.belongsTo(models.Trabajador,{
			foreignKey: "id_medico_deriva",
		});
	}
};

HoraMedica.init({
	id: {
		type: Sequelize.DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
    fecha: Sequelize.DataTypes.DATE,
    hora: Sequelize.DataTypes.TIME,
    posible_diagnostico: Sequelize.DataTypes.STRING,
    id_paciente: Sequelize.DataTypes.INTEGER,
    id_medico_deriva: Sequelize.DataTypes.INTEGER
	}, {
		sequelize,
		timestamps: false,
	}
);

export default HoraMedica;