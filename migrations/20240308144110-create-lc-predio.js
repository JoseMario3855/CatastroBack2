'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lc_predios', {
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
        type: Sequelize.UUID
      },
      departamento: {
        type: Sequelize.STRING
      },
      municipio: {
        type: Sequelize.STRING
      },
      id_operacion: {
        type: Sequelize.STRING
      },
      tiene_fmi: {
        type: Sequelize.BOOLEAN
      },
      numero_predial: {
        type: Sequelize.STRING
      },
      numero_predial_anterior: {
        type: Sequelize.STRING
      },
      nupre: {
        type: Sequelize.STRING
      },
      avaluo_catastral: {
        type: Sequelize.DECIMAL
      },
      tipo: {
        type: Sequelize.INTEGER
      },
      condicion_predio: {
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      comienzo_vida_util_version: {
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
    await queryInterface.dropTable('lc_predios');
  }
};