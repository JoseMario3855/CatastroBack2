'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class col_volumenvalor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  col_volumenvalor.init({
    t_id: DataTypes.INTEGER,
    t_seq: DataTypes.INTEGER,
    volumen_medicion: DataTypes.INTEGER,
    tipo: DataTypes.INTEGER,
    lc_construccion_volumen: DataTypes.INTEGER,
    lc_terreno_volumen: DataTypes.INTEGER,
    lc_servidumbretransito_volumen: DataTypes.INTEGER,
    lc_unidadconstruccion_volumen: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'col_volumenvalor',
  });
  return col_volumenvalor;
};