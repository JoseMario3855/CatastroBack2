'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lc_construccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_construccion.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    identificador: DataTypes.STRING,
    tipo_construccion: DataTypes.INTEGER,
    tipo_dominio: DataTypes.INTEGER,
    numero_pisos: DataTypes.INTEGER,
    numero_sotanos: DataTypes.INTEGER,
    numero_mezanines: DataTypes.INTEGER,
    numero_semisotanos: DataTypes.INTEGER,
    anio_construccion: DataTypes.INTEGER,
    avaluo_construccion: DataTypes.INTEGER,
    area_construccion: DataTypes.INTEGER,
    altura: DataTypes.INTEGER,
    observaciones: DataTypes.STRING,
    dimension: DataTypes.INTEGER,
    etiqueta: DataTypes.STRING,
    relacion_superficie: DataTypes.INTEGER,
    comienzo_vida_util_version: DataTypes.DATE,
    fin_vida_util_version: DataTypes.DATE,
    espacio_de_nombres: DataTypes.STRING,
    local_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lc_construccion',
  });
  return lc_construccion;
};