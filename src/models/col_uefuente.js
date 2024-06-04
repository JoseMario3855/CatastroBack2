const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_uefuente extends Model {
 
    static associate(models) {
      col_uefuente.belongsTo(models.lc_unidadconstruccion,{foreignKey:'ue_lc_unidadconstruccion',targetKey:'t_id'});
      col_uefuente.belongsTo(models.lc_servidumbretransito,{foreignKey:'ue_lc_servidumbretransito',targetKey:'t_id'});
      col_uefuente.belongsTo(models.lc_terreno,{foreignKey:'ue_lc_terreno',targetKey:'t_id'});
      col_uefuente.belongsTo(models.lc_nu_espaciojuridicoredservicios,{foreignKey:'ue_lc_nu_espaciojuridicoredservicios',targetKey:'t_id'});
      col_uefuente.belongsTo(models.lc_nu_espaciojuridicounidadedificacion,{foreignKey:'ue_lc_nu_espaciojuridicounidadedificacion',targetKey:'t_id'});
      col_uefuente.belongsTo(models.lc_fuenteespacial,{foreignKey:'fuente_espacial',targetKey:'t_id'});
      col_uefuente.belongsTo(models.lc_construccion,{foreignKey:'ue_lc_construccion',targetKey:'t_id'});
    }
  }
  col_uefuente.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_ili_tid:  {
      type: DataTypes.STRING,
      allowNull: false
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
    fuente_espacial: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'col_uefuente',
  });
  return col_uefuente;
};