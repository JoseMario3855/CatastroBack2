'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('col_volumenvalors', {
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
      volumen_medicion: {
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.INTEGER
      },
      lc_construccion_volumen: {
        type: Sequelize.INTEGER
      },
      lc_terreno_volumen: {
        type: Sequelize.INTEGER
      },
      lc_servidumbretransito_volumen: {
        type: Sequelize.INTEGER
      },
      lc_unidadconstruccion_volumen: {
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
    await queryInterface.dropTable('col_volumenvalors');
  }
};