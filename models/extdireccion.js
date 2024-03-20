const {
  Model
} = require('sequelize');
const dataTypes = require('sequelize/lib/data-types');
const lc_predio = require('./lc_predio');
module.exports = (sequelize, DataTypes) => {
   class extdireccion extends Model {
  
     static associate(models) {
      extdireccion.belongsTo(models.lc_predio,{foreignKey:'lc_predio_direccion',targetKey:'lc_predio_direccion'});
      extdireccion.belongsTo(models.extunidadedificacionfisica,{foreignKey:'extunidadedificcnfsica_ext_direccion_id',targetKey:'extunidadedificcnfsica_ext_direccion_id'});
      extdireccion.belongsTo(models.extinteresado,{foreignKey:'extinteresado_ext_direccion_id',targetKey:'extinteresado_ext_direccion_id'});
      extdireccion.belongsTo(models.lc_terreno,{foreignKey:'lc_terreno_ext_direccion_id',targetKey:'lc_terreno_ext_direccion_id'});
      extdireccion.belongsTo(models.lc_nu_espaciojuridicoredservicios,{foreignKey:'lc_nu_spcjrdcrdsrvcios_ext_direccion_id',targetKey:'lc_nu_spcjrdcrdsrvcios_ext_direccion_id'});
      extdireccion.belongsTo(models.lc_nu_espaciojuridicounidadedificacion,{foreignKey:'lc_n_spcjrdcndddfccion_ext_direccion_id',targetKey:'lc_n_spcjrdcndddfccion_ext_direccion_id'});
      extdireccion.belongsTo(models.lc_construccion,{foreignKey:'lc_construccion_ext_direccion_id',targetKey:'lc_construccion_ext_direccion_id'});
      extdireccion.belongsTo(models.lc_unidadconstruccion,{foreignKey:'lc_unidadconstruccion_ext_direccion_id',targetKey:'lc_unidadconstruccion_ext_direccion_id'});
      extdireccion.belongsTo(models.lc_servidumbretransito,{foreignKey:'lc_servidumbretransito_ext_direccion_id',targetKey:'lc_servidumbretransito_ext_direccion_id'});
    }
  }
  extdireccion.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_seq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo_direccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    es_direccion_principal: {
      type: DataTypes.BOOLEAN,
      allowNull: false

    },
    localizacion:{
      type:DataTypes.GEOMETRY,
      allowNull:true
    },
    codigo_postal:{
      type: DataTypes.STRING,
      allowNull: true
    },
    clase_via_principal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    valor_via_principal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    letra_via_principal:{
      type: DataTypes.STRING,
      allowNull: true
    },
    sector_ciudad:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    valor_via_generadora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    letra_via_generadora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numero_predio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sector_predio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    complemento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nombre_predio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    extunidadedificcnfsica_ext_direccion_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    extinteresado_ext_direccion_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_construccion_ext_direccion_id:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_predio_direccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_terreno_ext_direccion_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_servidumbretransito_ext_direccion_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_unidadconstruccion_ext_direccion_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
   }, {
    sequelize,
    modelName: 'extdireccion',
  });
  return extdireccion;
};