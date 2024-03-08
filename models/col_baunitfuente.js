'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class col_baunitfuente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  col_baunitfuente.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    fuente_especial: DataTypes.INTEGER,
    unidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'col_baunitfuente',
  });
  return col_baunitfuente;
};