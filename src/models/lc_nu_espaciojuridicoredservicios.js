import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import col_estadoredserviciostipo from './col_estadoredserviciostipo.js';
import col_redserviciostipo from './col_redserviciostipo.js';
import col_dimensiontipo from './col_dimensiontipo.js';
import col_relacionsuperficietipo from './col_relacionsuperficietipo.js'
import lc_nu_nivel from './lc_nu_nivel.js';

    
       
  const lc_nu_espaciojuridicoredservicios= sequelize.define('penol.lc_nu_espaciojuridicoredservicios',{
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
    freezeTableName: true,
    schema: 'penol',
    tableName:'lc_nu_espaciojuridicoredservicios',
  });
  lc_nu_espaciojuridicoredservicios.hasMany(col_estadoredserviciostipo,{foreignKey:'estado',sourceKey:'t_id'});
  col_estadoredserviciostipo.belongsTo(lc_nu_espaciojuridicoredservicios ,{foreignKey:'estado',targetKey:'t_id'});

  lc_nu_espaciojuridicoredservicios.hasMany(col_redserviciostipo,{foreignKey:'tipo',sourceKey:'t_id'});
  col_redserviciostipo.belongsTo(lc_nu_espaciojuridicoredservicios,{foreignKey:'tipo',targetKey:'t_id'});
  
  lc_nu_espaciojuridicoredservicios.hasMany(col_dimensiontipo,{foreignKey:'dimension',sourceKey:'t_id'});
  col_dimensiontipo.belongsTo(lc_nu_espaciojuridicoredservicios,{foreignKey:'dimension',targetKey:'t_id'});

  lc_nu_espaciojuridicoredservicios.hasMany(col_relacionsuperficietipo,{foreignKey:'relacion_superficie',sourceKey:'t_id'});
  col_relacionsuperficietipo.belongsTo(lc_nu_espaciojuridicoredservicios,{foreignKey:'relacion_superficie',targetKey:'t_id'});

  lc_nu_espaciojuridicoredservicios.hasMany(lc_nu_nivel,{foreignKey:'nivel',sourceKey:'t_id'});
  lc_nu_nivel.belongsTo(lc_nu_espaciojuridicoredservicios,{foreignKey:'nivel',targetKey:'t_id'});

  export default lc_nu_espaciojuridicoredservicios;
