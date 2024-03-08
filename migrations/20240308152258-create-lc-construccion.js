'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lc_construccions', {
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
      identificador: {
        type: Sequelize.STRING
      },
      tipo_construccion: {
        type: Sequelize.INTEGER
      },
      tipo_dominio: {
        type: Sequelize.INTEGER
      },
      numero_pisos: {
        type: Sequelize.INTEGER
      },
      numero_sotanos: {
        type: Sequelize.INTEGER
      },
      numero_mezanines: {
        type: Sequelize.INTEGER
      },
      numero_semisotanos: {
        type: Sequelize.INTEGER
      },
      anio_construccion: {
        type: Sequelize.INTEGER
      },
      avaluo_construccion: {
        type: Sequelize.INTEGER
      },
      area_construccion: {
        type: Sequelize.INTEGER
      },
      altura: {
        type: Sequelize.INTEGER
      },
      observaciones: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('lc_construccions');
  }
};