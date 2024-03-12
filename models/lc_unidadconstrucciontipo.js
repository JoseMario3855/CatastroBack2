'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lc_unidadconstrucciontipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_unidadconstrucciontipo.init({
    t_id: DataTypes.INTEGER,
    thisclass: DataTypes.STRING,
    baseclass: DataTypes.STRING,
    itfcode: DataTypes.INTEGER,
    ilicode: DataTypes.STRING,
    seq: DataTypes.INTEGER,
    inactive: DataTypes.BOOLEAN,
    dispname: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lc_unidadconstrucciontipo',
  });
  return lc_unidadconstrucciontipo;
};