'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('MedicalAppointments', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			date: {
				type: Sequelize.DATEONLY
			},
			start_time: {
				type: Sequelize.TIME
			},
			end_time: {
				type: Sequelize.TIME
			},
			exam_type: {
				type: Sequelize.STRING,
				validate: {
					isIn: {
						args: [['resonancia','tomografia','rayos','ecografia']],
						msg: "Exam Type no es valido",
					}
				}
			},
			diagnosis: {
				type: Sequelize.STRING
			},
			rut_patient: {
				type: Sequelize.STRING
			},
			rut_doctor: {
				type: Sequelize.STRING
			},
			rut_assistant: {
				type: Sequelize.STRING
			},
			/* NO BORRAR PARA IMPLEMENTAR MÁS ADELANTE.
			id_equipment: {
				type: Sequelize.INTEGER
			},
			*/
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('MedicalAppointments');
	}

};