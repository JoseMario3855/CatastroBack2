const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_mascl extends Model {
   
    static associate(models) {
      col_mascl.belongsTo(models.lc_unidadconstruccion,{foreignKey:'ue_mas_lc_unidadconstruccion',targetKey:'t_id'});
      col_mascl.belongsTo(models.lc_nu_caraslindero,{foreignKey:'cl_mas',targetKey:'t_id'});
      col_mascl.belongsTo(models.lc_terreno,{foreignKey:'ue_mas_lc_terreno',targetKey:'t_id'});
      col_mascl.belongsTo(models.lc_servidumbretransito,{foreignKey:'ue_mas_lc_servidumbretransito',targetKey:'t_id'});
      col_mascl.belongsTo(models.lc_nu_espaciojuridicoredservicios,{foreignKey:'ue_mas_lc_nu_espaciojuridicoredservicios',targetKey:'t_id'});
      col_mascl.belongsTo(models.lc_nu_espaciojuridicounidadedificacion,{foreignKey:'ue_mas_lc_nu_espaciojuridicounidadedificacion',targetKey:'t_id'});
      col_mascl.belongsTo(models.lc_unidadconstruccion,{foreignKey:'ue_mas_lc_unidadconstruccion',targetKey:'t_id'}) ;
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