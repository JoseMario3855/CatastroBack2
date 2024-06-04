const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_puntocontrol extends Model {
    
    static associate(models) {
        lc_puntocontrol.belongsTo(models.col_puntotipo, { foreignKey: 'puntotipo' ,targetKey:'t_id'});
        lc_puntocontrol.belongsTo(models.lc_puntocontroltipo,{foreignKey:'tipo_punto_control',targetKey:'t_id'});
        lc_puntocontrol.belongsTo(models.col_interpolaciontipo,{foreignKey: 'posicion_interpolacion',targetKey:'t_id'});
        lc_puntocontrol.belongsTo(models.col_metodoproducciontipo,{foreignKey: 'metodoproduccion',targetKey:'t_id'});
        lc_puntocontrol.belongsTo(models.lc_construccion,{foreignKey: 'ue_lc_construccion',targetKey:'t_id'});
        lc_puntocontrol.belongsTo(models.lc_terreno,{foreignKey: 'ue_lc_terreno',targetKey:'t_id'});
        lc_puntocontrol.belongsTo(models.lc_unidadconstruccion,{foreignKey: 'ue_lc_unidadconstruccion',targetKey:'t_id'});
        lc_puntocontrol.belongsTo(models.lc_servidumbretransito,{foreignKey: 'ue_lc_servidumbretransito',targetKey:'t_id'});
        lc_puntocontrol.belongsTo(models.lc_nu_espaciojuridicoredservicios,{foreignKey: 'ue_lc_nu_espaciojuridicoredservicios',targetKey:'t_id'});
        lc_puntocontrol.belongsTo(models.lc_nu_espaciojuridicounidadedificacion,{foreignKey: 'ue_lc_nu_espaciojuridicounidadedificacion',targetKey:'t_id'});

  
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