'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lc_datosphcondominio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_datosphcondominio.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    area_total_terreno: DataTypes.INTEGER,
    area_total_terreno_privada: DataTypes.INTEGER,
    area_total_construida: DataTypes.INTEGER,
    area_total_construida_priva: DataTypes.INTEGER,
    area_total_construida_comun: DataTypes.INTEGER,
    numero_torres: DataTypes.INTEGER,
    toral_unidades_privadas: DataTypes.INTEGER,
    lc_predio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lc_datosphcondominio',
  });
  return lc_datosphcondominio;
};