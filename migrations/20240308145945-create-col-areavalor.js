'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('col_areavalors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      t_id: {
        type: Sequelize.INTEGER
      },
      t_seq: {
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.INTEGER
      },
      area: {
        type: Sequelize.INTEGER
      },
      datos_proyeccion: {
        type: Sequelize.STRING
      },
      lc_construccion_area: {
        type: Sequelize.INTEGER
      },
      lc_terreno_area: {
        type: Sequelize.INTEGER
      },
      lc_servidumbretransito_area: {
        type: Sequelize.INTEGER
      },
      lc_unidadconstruccion_area: {
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
    await queryInterface.dropTable('col_areavalors');
  }
};