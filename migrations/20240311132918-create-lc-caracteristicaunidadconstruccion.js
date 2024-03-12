'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lc_caracteristicaunidadconstruccions', {
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
      tipo_unidad_construccion: {
        type: Sequelize.INTEGER
      },
      tipo_planta: {
        type: Sequelize.INTEGER
      },
      total_habitaciones: {
        type: Sequelize.INTEGER
      },
      total_banios: {
        type: Sequelize.INTEGER
      },
      total_locales: {
        type: Sequelize.INTEGER
      },
      total_plantas: {
        type: Sequelize.INTEGER
      },
      uso: {
        type: Sequelize.INTEGER
      },
      anio_construccion: {
        type: Sequelize.INTEGER
      },
      avaluo_unidad_construccion: {
        type: Sequelize.INTEGER
      },
      area_construida: {
        type: Sequelize.INTEGER
      },
      area_privada_construida: {
        type: Sequelize.INTEGER
      },
      observaciones: {
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
    await queryInterface.dropTable('lc_caracteristicaunidadconstruccions');
  }
};