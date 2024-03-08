'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lc_ofertasmercadoinmobiliarios', {
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
      tipo_oferta: {
        type: Sequelize.INTEGER
      },
      valor_predio: {
        type: Sequelize.INTEGER
      },
      valor_negociado: {
        type: Sequelize.INTEGER
      },
      fecha_captura_oferta: {
        type: Sequelize.DATE
      },
      tiempo_oferta_mercado: {
        type: Sequelize.INTEGER
      },
      numero_contacto_oferente: {
        type: Sequelize.STRING
      },
      nombre_oferente: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('lc_ofertasmercadoinmobiliarios');
  }
};