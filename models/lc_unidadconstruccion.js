'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lc_unidadconstruccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_unidadconstruccion.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    planta_ubicacion: DataTypes.INTEGER,
    altura: DataTypes.INTEGER,
    geometria: DataTypes.GEOMETRY,
    lc_caracteristicasunidadconstruccion: DataTypes.INTEGER,
    ls_construccion: DataTypes.INTEGER,
    dimension: DataTypes.INTEGER,
    etiqueta: DataTypes.STRING,
    relacion_superficie: DataTypes.INTEGER,
    nivel: DataTypes.INTEGER,
    comienzo_vida_util_version: DataTypes.DATE,
    fin_vida_util_version: DataTypes.DATE,
    espacio_de_nombres: DataTypes.STRING,
    local_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lc_unidadconstruccion',
  });
  return lc_unidadconstruccion;
};