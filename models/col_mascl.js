const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_mascl extends Model {
   
    static associate(models) {
      col_mascl.belongsTo(models.lc_unidadconstruccion,{foreignKey:'ue_mas_lc_unidadconstruccion',targetKey:'ue_mas_lc_unidadconstruccion'});
      col_mascl.belongsTo(models.lc_nu_caraslindero,{foreignKey:'cl_mas',targetKey:'cl_mas'});
      col_mascl.belongsTo(models.lc_terreno,{foreignKey:'ue_mas_lc_terreno',targetKey:'ue_mas_lc_terreno'});
      col_mascl.belongsTo(models.lc_servidumbretransito,{foreignKey:'ue_mas_lc_servidumbretransito',targetKey:'ue_mas_lc_servidumbretransito'});
      col_mascl.belongsTo(models.lc_nu_espaciojuridicoredservicios,{foreignKey:'ue_mas_lc_nu_espaciojuridicoredservicios',targetKey:'ue_mas_lc_nu_espaciojuridicoredservicios'});
      col_mascl.belongsTo(models.lc_nu_espaciojuridicounidadedificacion,{foreignKey:'ue_mas_lc_nu_espaciojuridicounidadedificacion',targetKey:'ue_mas_lc_nu_espaciojuridicounidadedificacion'});
      col_mascl.belongsTo(models.lc_unidadconstruccion,{foreignKey:'ue_mas_lc_unidadconstruccion',targetKey:'ue_mas_lc_unidadconstruccion'}) ;
    }
  }
  col_mascl.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_ili_tid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    ccl_mas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ue_mas_lc_terreno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ue_mas_lc_construccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ue_mas_lc_unidadconstruccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ue_mas_lc_servidumbretransito: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ue_mas_lc_nu_espaciojuridicoredservicios: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ue_mas_lc_nu_espaciojuridicounidadedificacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'col_mascl',
  });
  return col_mascl;
};