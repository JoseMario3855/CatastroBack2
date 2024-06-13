import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import lc_construcciontipo from './lc_construcciontipo.js';
import lc_dominioconstrucciontipo from './lc_dominioconstrucciontipo.js';
import col_dimensiontipo from './col_dimensiontipo.js';
import col_relacionsuperficietipo from './col_relacionsuperficietipo.js';
import lc_nu_nivel from './lc_nu_nivel.js';

const lc_construccion = sequelize.define ('penol.lc_construccion',{
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
    observaciones: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dimension: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
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
    allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    freezeTableName: true,
    schema: 'penol',
    tableName:'lc_construccion',
  });
  lc_construccion.hasMany(lc_construcciontipo,{foreignKey:'tipo_construccion',sourceKey:'t_id'});
  lc_construcciontipo.belongsTo(lc_construccion,{foreignKey:'tipo_construccion',targetKey:'t_id'});

  lc_construccion.hasMany(lc_dominioconstrucciontipo,{foreignKey:'tipo_dominio',sourceKey:'t_id'});
  lc_dominioconstrucciontipo.belongsTo(lc_construccion,{foreignKey:'tipo_dominio',targetKey:'t_id'});
  
  lc_construccion.hasMany(col_dimensiontipo,{foreignKey:'dimension',sourceKey:'t_id'});
  col_dimensiontipo.belongsTo(lc_construccion,{foreignKey:'dimension',targetKey:'t_id'});

  lc_construccion.hasMany(col_relacionsuperficietipo,{foreignKey:'relacion_superficie',sourceKey:'t_id'});
  col_relacionsuperficietipo.belongsTo(lc_construccion,{foreignKey:'relacion_superficie',targetKey:'t_id'});
  
  lc_construccion.hasMany(lc_nu_nivel,{foreignKey:'nivel',sourceKey:'t_id'});
  lc_nu_nivel.belongsTo(lc_construccion,{foreignKey:'nivel',targetKey:'t_id'});
  
  export default lc_construccion;
