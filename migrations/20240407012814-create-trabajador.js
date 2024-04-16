'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trabajadors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rut: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      contraseña: {
        type: Sequelize.STRING
      },
      profesion: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Trabajadors');
  }
};