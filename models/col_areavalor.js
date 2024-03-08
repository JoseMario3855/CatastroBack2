'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class col_areavalor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  col_areavalor.init({
    t_id: DataTypes.INTEGER,
    t_seq: DataTypes.INTEGER,
    tipo: DataTypes.INTEGER,
    area: DataTypes.INTEGER,
    datos_proyeccion: DataTypes.STRING,
    lc_construccion_area: DataTypes.INTEGER,
    lc_terreno_area: DataTypes.INTEGER,
    lc_servidumbretransito_area: DataTypes.INTEGER,
    lc_unidadconstruccion_area: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'col_areavalor',
  });
  return col_areavalor;
};