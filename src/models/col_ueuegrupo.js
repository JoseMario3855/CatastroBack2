const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_ueuegrupo extends Model {
 
    static associate(models) {
        col_ueuegrupo.belongsTo(models.lc_unidadconstruccion,{foreignKey:'parte_lc_unidadconstruccion',targetKey:'t_id'});
        col_ueuegrupo.belongsTo(models.lc_servidumbretransito,{foreignKey:'parte_lc_servidumbretransito',targetKey:'t_id'});
        col_ueuegrupo.belongsTo(models.lc_terreno,{foreignKey:'parte_lc_terreno',targetKey:'t_id'});
        col_ueuegrupo.belongsTo(models.lc_nu_espaciojuridicoredservicios,{foreignKey:'parte_lc_nu_espaciojuridicoredservicios',targetKey:'t_id'});
        col_ueuegrupo.belongsTo(models.lc_nu_espaciojuridicounidadedificacion,{foreignKey:'parte_lc_nu_espaciojuridicounidadedificacion',targetKey:'t_id'});
        col_ueuegrupo.belongsTo(models.lc_nu_agrupacionunidadesespaciales,{foreignKey:'todo',targetKey:'t_id'});
        col_ueuegrupo.belongsTo(models.lc_construccion,{foreignKey:'parte_lc_construccion',targetKey:'t_id'});
    }
  }
  col_ueuegrupo.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    todo:  {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parte_lc_terreno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    parte_lc_construccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    parte_lc_servidumbretransito: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    parte_lc_unidadconstruccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    parte_lc_nu_espaciojuridicoredservicios: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    parte_lc_nu_espaciojuridicounidadedificacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'col_ueuegrupo',
  });
  return col_ueuegrupo;
};