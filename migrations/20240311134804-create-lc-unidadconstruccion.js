'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lc_unidadconstruccions', {
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
      planta_ubicacion: {
        type: Sequelize.INTEGER
      },
      altura: {
        type: Sequelize.INTEGER
      },
      geometria: {
        type: Sequelize.GEOMETRY
      },
      lc_caracteristicasunidadconstruccion: {
        type: Sequelize.INTEGER
      },
      ls_construccion: {
        type: Sequelize.INTEGER
      },
      dimension: {
        type: Sequelize.INTEGER
      },
      etiqueta: {
        type: Sequelize.STRING
      },
      relacion_superficie: {
        type: Sequelize.INTEGER
      },
      nivel: {
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
    await queryInterface.dropTable('lc_unidadconstruccions');
  }
};