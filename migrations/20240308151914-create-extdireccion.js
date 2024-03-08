'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('extdireccions', {
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
      tipo_direccion: {
        type: Sequelize.INTEGER
      },
      es_direccion_principal: {
        type: Sequelize.BOOLEAN
      },
      codigo_postal: {
        type: Sequelize.STRING
      },
      clase_via_principal: {
        type: Sequelize.INTEGER
      },
      valor_via_principal: {
        type: Sequelize.STRING
      },
      letra_via_principal: {
        type: Sequelize.STRING
      },
      sector_ciudad: {
        type: Sequelize.INTEGER
      },
      valor_via_generadora: {
        type: Sequelize.STRING
      },
      letra_via_generadora: {
        type: Sequelize.STRING
      },
      numero_predio: {
        type: Sequelize.STRING
      },
      sector_predio: {
        type: Sequelize.INTEGER
      },
      complemento: {
        type: Sequelize.STRING
      },
      nombre_predio: {
        type: Sequelize.STRING
      },
      extunidadedificcnfsica_ext_direccion_id: {
        type: Sequelize.INTEGER
      },
      extinteresado_ext_direccion_id: {
        type: Sequelize.INTEGER
      },
      lc_construccion_ext_direccion_id: {
        type: Sequelize.INTEGER
      },
      lc_predio_direccion: {
        type: Sequelize.INTEGER
      },
      lc_terreno_ext_direccion_id: {
        type: Sequelize.INTEGER
      },
      lc_servidumbretransito_ext_direccion_id: {
        type: Sequelize.INTEGER
      },
      lc_unidadconstruccion_ext_direccion_id: {
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
    await queryInterface.dropTable('extdireccions');
  }
};