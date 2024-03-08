'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lc_datosphcondominios', {
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
      area_total_terreno: {
        type: Sequelize.INTEGER
      },
      area_total_terreno_privada: {
        type: Sequelize.INTEGER
      },
      area_total_construida: {
        type: Sequelize.INTEGER
      },
      area_total_construida_priva: {
        type: Sequelize.INTEGER
      },
      area_total_construida_comun: {
        type: Sequelize.INTEGER
      },
      numero_torres: {
        type: Sequelize.INTEGER
      },
      toral_unidades_privadas: {
        type: Sequelize.INTEGER
      },
      lc_predio: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('lc_datosphcondominios');
  }
};