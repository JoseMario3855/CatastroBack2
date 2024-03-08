'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lc_interesadocontactos', {
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
      telefono1: {
        type: Sequelize.STRING
      },
      telefono2: {
        type: Sequelize.STRING
      },
      domicilio_notificacion: {
        type: Sequelize.STRING
      },
      direccion_residencia: {
        type: Sequelize.STRING
      },
      correo_electronico: {
        type: Sequelize.STRING
      },
      autoriza_notificacion_correo: {
        type: Sequelize.BOOLEAN
      },
      departamento: {
        type: Sequelize.STRING
      },
      municipio: {
        type: Sequelize.STRING
      },
      vereda: {
        type: Sequelize.STRING
      },
      corregimiento: {
        type: Sequelize.STRING
      },
      lc_interesado: {
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
    await queryInterface.dropTable('lc_interesadocontactos');
  }
};