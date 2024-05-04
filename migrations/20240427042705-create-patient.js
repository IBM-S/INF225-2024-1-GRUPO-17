'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Patients', {
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
			allergies: {
				type: Sequelize.ARRAY(Sequelize.STRING)
			},
			fonasa: {
				type: Sequelize.STRING,
				validate: {
					isIn: {
						args: [['A','B','C','D']],
						msg: "Fonasa no es valido",
					}
				}
			},
			address: {
				type: Sequelize.STRING
			},
			phone_number: {
				type: Sequelize.STRING
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Patients');
	}
};