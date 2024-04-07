import { Sequelize } from 'sequelize';
import sequelize from '../database.js';

class Trabajador extends Sequelize.Model {
    static associate(models){
        Trabajador.hasMany(models.HoraMedica,{
            foreignKey: "id_medico_deriva",
        });
    }
};

Trabajador.init({
	id: {
		type: Sequelize.DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
    rut: Sequelize.DataTypes.STRING,
    nombre: Sequelize.DataTypes.STRING,
    contraseña: Sequelize.DataTypes.STRING,
    profesion: Sequelize.DataTypes.STRING
	}, {
		sequelize,
		timestamps: false,
	}
);

export default Trabajador;