'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lc_predio_ini_predioinsumos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_predio_ini_predioinsumos.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    ini_predio_insumos: DataTypes.INTEGER,
    lc_predio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lc_predio_ini_predioinsumos',
  });
  return lc_predio_ini_predioinsumos;
};