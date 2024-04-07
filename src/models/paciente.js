import { Sequelize } from 'sequelize';
import sequelize from '../database.js';

class Paciente extends Sequelize.Model {
    static associate(models){
        Paciente.hasMany(models.HoraMedica,{
            foreignKey: "id_paciente",
        });
    }
};

Paciente.init({
	id: {
		type: Sequelize.DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
    nombre: Sequelize.DataTypes.STRING,
    alergias: Sequelize.DataTypes.STRING,
    fecha_nacimiento: Sequelize.DataTypes.DATE,
    direccion: Sequelize.DataTypes.STRING,
    telefono: Sequelize.DataTypes.STRING,
    tramo_fonasa: Sequelize.DataTypes.STRING
	}, {
		sequelize,
		timestamps: false,
	}
);

export default Paciente;