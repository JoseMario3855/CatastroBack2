'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lc_grupoetnicotipos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      t_id: {
        type: Sequelize.INTEGER
      },
      thisclass: {
        type: Sequelize.STRING
      },
      baseclass: {
        type: Sequelize.STRING
      },
      itfcode: {
        type: Sequelize.INTEGER
      },
      ilicode: {
        type: Sequelize.STRING
      },
      seq: {
        type: Sequelize.INTEGER
      },
      inactive: {
        type: Sequelize.BOOLEAN
      },
      dispname: {
        type: Sequelize.STRING
      },
      description: {
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
    await queryInterface.dropTable('lc_grupoetnicotipos');
  }
};