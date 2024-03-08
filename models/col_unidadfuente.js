'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class col_unidadfuente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  col_unidadfuente.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    fuente_administrativa: DataTypes.INTEGER,
    unidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'col_unidadfuente',
  });
  return col_unidadfuente;
};