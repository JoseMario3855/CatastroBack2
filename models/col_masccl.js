'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class col_masccl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  col_masccl.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    ccl_mas: DataTypes.INTEGER,
    ue_mas_lc_terreno: DataTypes.INTEGER,
    ue_mas_lc_construccion: DataTypes.INTEGER,
    ue_mas_lc_unidadconstruccion: DataTypes.INTEGER,
    ue_mas_lc_servidumbretransito: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'col_masccl',
  });
  return col_masccl;
};