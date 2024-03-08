'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lc_predio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_predio.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.UUID,
    departamento: DataTypes.STRING,
    municipio: DataTypes.STRING,
    id_operacion: DataTypes.STRING,
    tiene_fmi: DataTypes.BOOLEAN,
    numero_predial: DataTypes.STRING,
    numero_predial_anterior: DataTypes.STRING,
    nupre: DataTypes.STRING,
    avaluo_catastral: DataTypes.DECIMAL,
    tipo: DataTypes.INTEGER,
    condicion_predio: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    comienzo_vida_util_version: DataTypes.DATE,
    espacio_de_nombres: DataTypes.STRING,
    local_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lc_predio',
  });
  return lc_predio;
};