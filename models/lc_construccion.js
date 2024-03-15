'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_construccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_construccion.init({
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
    identificador:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo_construccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo_dominio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numero_pisos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numero_sotanos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numero_mezanines: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numero_semisotanos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    anio_construccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    avaluo_construccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    area_construccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    observaciones: DataTypes.STRING,
    dimension: DataTypes.INTEGER,
    etiqueta:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    relacion_superficie:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comienzo_vida_util_version:{ 
    type:DataTypes.DATE,
    allowNull:true
  },
    fin_vida_util_version: { 
      type:DataTypes.DATE,
      allowNull:true
    },
      
    local_id:{
    type: DataTypes.STRING,
    allowNull: fals
    },
  }, {
    sequelize,
    modelName: 'lc_construccion',
  });
  return lc_construccion;
};