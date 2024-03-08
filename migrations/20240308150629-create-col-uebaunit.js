'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('col_uebaunits', {
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
      ue_lc_terreno: {
        type: Sequelize.INTEGER
      },
      ue_lc_construccion: {
        type: Sequelize.INTEGER
      },
      ue_lc_unidadconstruccion: {
        type: Sequelize.INTEGER
      },
      ue_lc_servidumbretransito: {
        type: Sequelize.INTEGER
      },
      baunit: {
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
    await queryInterface.dropTable('col_uebaunits');
  }
};