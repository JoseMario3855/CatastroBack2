import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import lc_construccion from './lc_construccion.js';
import lc_unidadconstruccion from './lc_unidadconstruccion.js';
import lc_nu_espaciojuridicounidadedificacion from './lc_nu_espaciojuridicounidadedificacion.js';
import lc_nu_espaciojuridicoredservicios from './lc_nu_espaciojuridicoredservicios.js'
import lc_terreno from './lc_terreno.js';
import lc_servidumbretransito from './lc_servidumbretransito.js';

    
      
  
  const col_areavalor = sequelize.define('penol.col_areavalor', {
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
    freezeTableName: true,
    schema: 'penol',
    tableName: 'col_areavalor',
  });
      col_areavalor.hasMany(lc_construccion, { foreignKey: 'lc_construccion_area', sourceKey: 't_id' });
      lc_construccion.belongsTo(col_areavalor, { foreignKey: 'lc_construccion_area', targetKey: 't_id' });
      
      col_areavalor.hasMany(lc_unidadconstruccion,{foreignKey:'lc_unidadconstruccion_area',sourceKey:'t_id'});
      lc_unidadconstruccion.belongsTo(col_areavalor,{foreignKey:'lc_unidadconstruccion_area',targetKey:'t_id'});
      
      col_areavalor.hasMany(lc_nu_espaciojuridicounidadedificacion,{foreignKey:'lc_n_spcjrdcndddfccion_area',sourceKey:'t_id'});
      lc_nu_espaciojuridicounidadedificacion.belongsTo(col_areavalor,{foreignKey:'lc_n_spcjrdcndddfccion_area',targetKey:'t_id'});
      
      col_areavalor.hasMany(lc_nu_espaciojuridicoredservicios,{foreignKey:'lc_nu_spcjrdcrdsrvcios_area',sourceKey:'t_id'});
      lc_nu_espaciojuridicoredservicios.belongsTo(col_areavalor,{foreignKey:'lc_nu_spcjrdcrdsrvcios_area',targetKey:'t_id'});
      
      col_areavalor.hasMany(lc_terreno,{foreignKey:'lc_terreno_area',sourceKey:'t_id'});
      lc_terreno.belongsTo(col_areavalor,{foreignKey:'lc_terreno_area',targetKey:'t_id'});
      
      col_areavalor.hasMany(lc_servidumbretransito,{foreignKey:'lc_servidumbretransito_area',sourceKey:'t_id'});
      lc_servidumbretransito.hasMany(col_areavalor,{foreignKey:'lc_servidumbretransito_area',targetKey:'t_id'});
      
      export default col_areavalor;
