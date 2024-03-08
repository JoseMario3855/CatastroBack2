'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lc_restriccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_restriccion.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    tipo: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    interesado_lc_interesado: DataTypes.STRING,
    interesado_lc_agrupacioninteresados: DataTypes.STRING,
    unidad: DataTypes.INTEGER,
    comienzo_vida_util_version: DataTypes.DATE,
    fin_vida_util_version: DataTypes.DATE,
    espacio_de_nombres: DataTypes.STRING,
    local_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lc_restriccion',
  });
  return lc_restriccion;
};