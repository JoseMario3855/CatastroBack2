'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class col_uebaunit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  col_uebaunit.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    ue_lc_terreno: DataTypes.INTEGER,
    ue_lc_construccion: DataTypes.INTEGER,
    ue_lc_unidadconstruccion: DataTypes.INTEGER,
    ue_lc_servidumbretransito: DataTypes.INTEGER,
    baunit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'col_uebaunit',
  });
  return col_uebaunit;
};