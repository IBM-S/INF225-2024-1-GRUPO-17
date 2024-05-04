'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Equipment', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			equipment_type: {
				type: Sequelize.STRING,
				validate: {
					isIn: {
						args: [['resonancia','tomografia','rayos','ecografia']],
						msg: "Equipment Type no es valido",
					}
				}
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Equipment');
	}
};