'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lc_derechos', {
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
      fraccion_derecho: {
        type: Sequelize.INTEGER
      },
      fecha_inicio_tenencia: {
        type: Sequelize.DATE
      },
      descripcion: {
        type: Sequelize.STRING
      },
      interesado_lc_interesado: {
        type: Sequelize.STRING
      },
      interesado_lc_agrupacioninteresados: {
        type: Sequelize.STRING
      },
      unidad: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('lc_derechos');
  }
};