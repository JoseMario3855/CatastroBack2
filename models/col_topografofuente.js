'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class col_topografofuente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  col_topografofuente.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    fuente_espacial: DataTypes.INTEGER,
    topografo_lc_interesado: DataTypes.INTEGER,
    topografo_lc_agrupacioninteresados: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'col_topografofuente',
  });
  return col_topografofuente;
};