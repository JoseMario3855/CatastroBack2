const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_nu_espaciojuridicounidadedificacion extends Model {
    
    static associate(models) {
        lc_nu_espaciojuridicounidadedificacion.belongsTo(models.col_unidadedificaciontipo,{foreignKey:'tipo',targetKey:'t_id'});
        lc_nu_espaciojuridicounidadedificacion.belongsTo(models.col_dimensiontipo,{foreignKey:'dimension',targetKey:'t_id'});
        lc_nu_espaciojuridicounidadedificacion.belongsTo(models.col_relacionsuperficietipo,{foreignKey:'relacion_superficie',targetKey:'t_id'});
        lc_nu_espaciojuridicounidadedificacion.belongsTo(models.lc_nu_nivel,{foreignKey:'nivel',targetKey:'t_id'});
    }
  }
  lc_nu_espaciojuridicounidadedificacion.init({
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
      tipo:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      dimension:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      etiqueta: {
        type: DataTypes.STRING,
        allowNull: false
      },
      relacion_superficie:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      geometria:{
        type: DataTypes.GEOMETRY,
        allowNull:true
      },
      nivel:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      comienzo_vida_util_version:{ 
        type: DataTypes.DATE,
        allowNull: true
      },
      fin_vida_util_version:{ 
        type: DataTypes.DATE,
        allowNull: true
      },
      espacio_de_nombres: {
        type: DataTypes.STRING,
        allowNull: false
      },
      local_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
  }, {
    sequelize,
    modelName: 'lc_nu_espaciojuridicounidadedificacion',
  });
  return lc_nu_espaciojuridicounidadedificacion;
};