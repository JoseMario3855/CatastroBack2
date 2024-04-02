const { Model, DataTypes } = require('sequelize');
const sequelize = require('../src/db');

module.exports = (sequelize, DataTypes) => {
  class lc_condicionprediotipo extends Model {
    static associate(models) {
      // Aquí defines tus asociaciones si las tienes
    }
  }
  
  lc_condicionprediotipo.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    thisclass: {
      type: DataTypes.STRING,
      allowNull: true
    },
    baseclass:{
      type: DataTypes.STRING,
      allowNull: true
    },
    itfcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ilicode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inactive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dispname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize, // Aquí debes pasar la instancia de Sequelize
    modelName: 'lc_condicionprediotipo',
  });

  return lc_condicionprediotipo;
};
