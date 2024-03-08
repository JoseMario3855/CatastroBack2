'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lc_datosadicionaleslevantamientocatastrals', {
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
      tiene_area_registral: {
        type: Sequelize.BOOLEAN
      },
      area_registral_m2: {
        type: Sequelize.INTEGER
      },
      procedimiento_catastral_registral: {
        type: Sequelize.INTEGER
      },
      destinacion_economica: {
        type: Sequelize.INTEGER
      },
      clase_suelo: {
        type: Sequelize.INTEGER
      },
      categoria_suelo: {
        type: Sequelize.INTEGER
      },
      observaciones: {
        type: Sequelize.STRING
      },
      fecha_visita_predial: {
        type: Sequelize.DATE
      },
      tipo_documento_reconocedor: {
        type: Sequelize.INTEGER
      },
      primer_nombre_reconocedor: {
        type: Sequelize.STRING
      },
      segundo_nombre_reconocedor: {
        type: Sequelize.STRING
      },
      primer_apellido_reconocedor: {
        type: Sequelize.STRING
      },
      segundo_apellido_reconocedor: {
        type: Sequelize.STRING
      },
      resultado_visita: {
        type: Sequelize.INTEGER
      },
      suscribe_acta_colindancia: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('lc_datosadicionaleslevantamientocatastrals');
  }
};