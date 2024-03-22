const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_puntocontrol extends Model {
    
    static associate(models) {
        lc_puntocontrol.belongsTo(models.col_puntotipo, { foreignKey: 'puntotipo' ,targetKey:'puntotipo'});
        lc_puntocontrol.belongsTo(models.lc_puntocontroltipo,{foreignKey:'tipo_punto_control',targetKey:'tipo_punto_control'});
        lc_puntocontrol.belongsTo(models.col_interpolaciontipo,{foreignKey: 'posicion_interpolacion',targetKey:'posicion_interpolacion'});
        lc_puntocontrol.belongsTo(models.col_metodoproducciontipo,{foreignKey: 'metodoproduccion',targetKey:'metodoproduccion'});
        lc_puntocontrol.belongsTo(models.lc_construccion,{foreignKey: 'ue_lc_construccion',targetKey:'ue_lc_construccion'});
        lc_puntocontrol.belongsTo(models.lc_terrenno,{foreignKey: 'ue_lc_terreno',targetKey:'ue_lc_terreno'});
        lc_puntocontrol.belongsTo(models.lc_unidadconstruccion,{foreignKey: 'ue_lc_unidadconstruccion',targetKey:'ue_lc_unidadconstruccion'});
        lc_puntocontrol.belongsTo(models.lc_servidumbretransito,{foreignKey: 'ue_lc_servidumbretransito',targetKey:'ue_lc_servidumbretransito'});
        lc_puntocontrol.belongsTo(models.lc_nu_espaciojuridicoredservicios,{foreignKey: 'ue_lc_nu_espaciojuridicoredservicios',targetKey:'ue_lc_nu_espaciojuridicoredservicios'});
        lc_puntocontrol.belongsTo(models.lc_nu_espaciojuridicounidadedificacion,{foreignKey: 'ue_lc_nu_espaciojuridicounidadedificacion',targetKey:'ue_lc_nu_espaciojuridicounidadedificacion'});

  
      }
  }
  lc_puntocontrol.init({
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
      id_punto_control: {
        type: DataTypes.STRING,
        allowNull: false
      },
    puntotipo:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
    tipo_punto_control:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
    exactitud_horizontal:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
    exactitud_vertical:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
    posicion_interpolacion:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
    metodoproduccion:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
    geometria:{
        type: DataTypes.GEOMETRY,
        allowNull:true
      },
    ue_lc_construccion:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
    ue_lc_terreno:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
    ue_lc_unidadconstruccion:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
    ue_lc_servidumbretransito:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
    ue_lc_nu_espaciojuridicoredservicios:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
    ue_lc_nu_espaciojuridicounidadedificacion:{
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
    modelName: 'lc_puntocontrol',
  });
  return lc_puntocontrol;
};