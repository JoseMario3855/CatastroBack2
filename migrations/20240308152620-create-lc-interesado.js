'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lc_interesados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      t_id: {
        type: Sequelize.INTEGER
      },
      t_ili_tid: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.INTEGER
      },
      tipo_documento: {
        type: Sequelize.INTEGER
      },
      documento_identidad: {
        type: Sequelize.STRING
      },
      primer_nombre: {
        type: Sequelize.STRING
      },
      segundo_nombre: {
        type: Sequelize.STRING
      },
      primer_apellido: {
        type: Sequelize.STRING
      },
      segundo_apellido: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.INTEGER
      },
      grupo_etnico: {
        type: Sequelize.INTEGER
      },
      razon_social: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      comienzo_vida_util_version: {
        type: Sequelize.DATE
      },
      fin_vida_util_version: {
        type: Sequelize.DATE
      },
      espacio_de_nombres: {
        type: Sequelize.STRING
      },
      local_id: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lc_interesados');
  }
};