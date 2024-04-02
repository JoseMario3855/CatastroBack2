const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_areavalor extends Model {
   
    static associate(models) {
      col_areavalor.belongsTo(models.lc_construccion, { foreignKey: 'lc_construccion_area', targetKey: 't_id' });
      col_areavalor.belongsTo(models.lc_unidadconstruccion,{foreignKey:'lc_unidadconstruccion_area',targetKey:'t_id'});
      col_areavalor.belongsTo(models.lc_nu_espaciojuridicounidadedificacion,{foreignKey:'lc_n_spcjrdcndddfccion_area',targetKey:'t_id'});
      col_areavalor.belongsTo(models.lc_nu_espaciojuridicoredservicios,{foreignKey:'lc_nu_spcjrdcrdsrvcios_area',targetKey:'t_id'});
      col_areavalor.belongsTo(models.lc_terreno,{foreignKey:'lc_terreno_area',targetKey:'t_id'});
      col_areavalor.belongsTo(models.lc_servidumbretransito,{foreignKey:'lc_servidumbretransito_area',targetKey:'t_id'})
    }
  }
  col_areavalor.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_seq: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tipo:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    datos_proyeccion:{
      type: DataTypes.STRING,
      allowNull: false
    },
    lc_construccion_area:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lc_nu_spcjrdcrdsrvcios_area:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lc_n_spcjrdcndddfccion_area:{
      type: DataTypes.INTEGER,
      allowNull: false
    },

    lc_terreno_area: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lc_servidumbretransito_area: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lc_unidadconstruccion_area: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'col_areavalor',
  });
  return col_areavalor;
};