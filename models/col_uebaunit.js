'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class col_uebaunit extends Model {
    
    static associate(models) {
      col_uebaunit.belongsTo(models.lc_construccion,{foreignKey:'ue_lc_unidadconstruccion',targetKey:'ue_lc_unidadconstruccion'});
      col_uebaunit.belongsTo(models.lc_servidumbretransito,{foreignKey:'ue_lc_servidumbretransito',targetKey:'ue_lc_servidumbretransito'});
      col_uebaunit.belongsTo(models.lc_terreno,{foreignKey:'ue_lc_terreno',targetKey:'ue_lc_terreno'});
      col_uebaunit.belongsTo(models.lc_nu_espaciojuridicoredservicios,{foreignKey:'ue_lc_nu_espaciojuridicoredservicios',targetKey:'ue_lc_nu_espaciojuridicoredservicios'});
      col_uebaunit.belongsTo(models.lc_nu_espaciojuridicounidadedificacion,{foreignKey:'ue_lc_nu_espaciojuridicounidadedificacion',targetKey:'ue_lc_nu_espaciojuridicounidadedificacion'});
      col_uebaunit.belongsTo(models.lc_predio,{foreignKey:'baunit',targetKey:'baunit'});
    
    }
  }
  col_uebaunit.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_ili_tid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ue_lc_terreno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ue_lc_construccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ue_lc_unidadconstruccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ue_lc_servidumbretransito: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    baunit: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'col_uebaunit',
  });
  return col_uebaunit;
};