'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lc_predio_ini_predioinsumos extends Model {

   
    static associate(models) {
      lc_predio_ini_predioinsumos.belongsTo(models.lc_predio,{foreignKey: 'lc_predio',targetKey:'lc_predio'});
      lc_predio_ini_predioinsumos.belongsTo(models.ini_predioinsumos,{foreignKey: 'ini_predio_insumos',targetKey:'ini_predio_insumos'});
    }
  }
  lc_predio_ini_predioinsumos.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_ili_tid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    ini_predio_insumos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_predio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'lc_predio_ini_predioinsumos',
  });
  return lc_predio_ini_predioinsumos;
};