'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Workers', {
			rut: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.STRING
			},
			name: {
				type: Sequelize.STRING
			},
			lastname: {
				type: Sequelize.STRING
			},
			password: {
				type: Sequelize.STRING
			},
			birthdate: {
				type: Sequelize.DATEONLY
			},
			address: {
				type: Sequelize.STRING
			},
			phone_number: {
				type: Sequelize.STRING
			},
			position: {
				type: Sequelize.STRING,
				validate: {
					isIn: {
						args: [['jefe_unidad','secretaria_unidad','tecnologo_medico','medico_radiologo','tens']],
						msg: "Position no es valido",
					}
				}
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Workers');
	}
};