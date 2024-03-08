'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class col_baunitcomointeresado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  col_baunitcomointeresado.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    interesado_lc_interesado: DataTypes.INTEGER,
    unidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'col_baunitcomointeresado',
  });
  return col_baunitcomointeresado;
};