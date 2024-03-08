'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class col_responsablefuente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  col_responsablefuente.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    fuente_administrativa: DataTypes.INTEGER,
    interesado_lc_interesado: DataTypes.INTEGER,
    interesado_lc_agrupacioninteresados: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'col_responsablefuente',
  });
  return col_responsablefuente;
};