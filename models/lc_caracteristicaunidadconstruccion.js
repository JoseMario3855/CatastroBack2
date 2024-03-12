'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lc_caracteristicaunidadconstruccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_caracteristicaunidadconstruccion.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    identificador: DataTypes.STRING,
    tipo_construccion: DataTypes.INTEGER,
    tipo_dominio: DataTypes.INTEGER,
    tipo_unidad_construccion: DataTypes.INTEGER,
    tipo_planta: DataTypes.INTEGER,
    total_habitaciones: DataTypes.INTEGER,
    total_banios: DataTypes.INTEGER,
    total_locales: DataTypes.INTEGER,
    total_plantas: DataTypes.INTEGER,
    uso: DataTypes.INTEGER,
    anio_construccion: DataTypes.INTEGER,
    avaluo_unidad_construccion: DataTypes.INTEGER,
    area_construida: DataTypes.INTEGER,
    area_privada_construida: DataTypes.INTEGER,
    observaciones: DataTypes.STRING,
    comienzo_vida_util_version: DataTypes.DATE,
    fin_vida_util_version: DataTypes.DATE,
    espacio_de_nombres: DataTypes.STRING,
    local_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lc_caracteristicaunidadconstruccion',
  });
  return lc_caracteristicaunidadconstruccion;
};