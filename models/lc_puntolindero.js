const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_puntolindero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_puntolindero.init({
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
    id_punto_lindero: {
        type: DataTypes.STRING,
        allowNull: false
      },
    puntotipo:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
    fotoidentificacion:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
    acuerdo:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
    metodoproduccion:{
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
    modelName: 'lc_puntolindero',
  });
  return lc_puntolindero;
};