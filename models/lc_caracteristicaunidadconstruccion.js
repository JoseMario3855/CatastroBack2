const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_caracteristicaunidadconstruccion extends Model {
  
    static associate(models) {
      lc_caracteristicaunidadconstruccion.belongsTo(models.lc_construcciontipo,{foreignKey:'tipo_construccion',targetKey:'t_id'});
      lc_caracteristicaunidadconstruccion.belongsTo(models.lc_dominioconstrucciontipo,{foreignKey:'tipo_dominio',targetKey:'t_id'});
      lc_caracteristicaunidadconstruccion.belongsTo(models.lc_unidadconstrucciontipo,{foreignKey:'tipo_unidad_construccion',targetKey:'t_id'});
      lc_caracteristicaunidadconstruccion.belongsTo(models.lc_construccionplantatipo,{foreignKey:'tipo_planta',targetKey:'t_id'});
      lc_caracteristicaunidadconstruccion.belongsTo(models.lc_usouconstipo,{foreignKey:'uso',targetKey:'t_id'});
    }
  }
  lc_caracteristicaunidadconstruccion.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    t_ili_tid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    identificador: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo_construccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipo_dominio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipo_unidad_construccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipo_planta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_habitaciones: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_banios:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_locales: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_plantas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    uso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    anio_construccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    avaluo_unidad_construccion:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    area_construida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    area_privada_construida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observaciones: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comienzo_vida_util_version: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fin_vida_util_version: {
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
    modelName: 'lc_caracteristicaunidadconstruccion',
  });
  return lc_caracteristicaunidadconstruccion;
};