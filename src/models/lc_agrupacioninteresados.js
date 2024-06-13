import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import  col_grupointeresadotipo  from './col_grupointeresadotipo.js';

  
const lc_agrupacioninteresados = sequelize.define('penol.lc_agrupacioninteresados', {
 
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
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      omienzo_vida_util_version:{ 
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
      tableName: 'lc_agrupacioninteresados',
      
      });
      lc_agrupacioninteresados.hasMany(col_grupointeresadotipo,{foreignKey:'tipo',sourceKey:'t_id'});
      col_grupointeresadotipo.belongsTo(lc_agrupacioninteresados,{foreignKey:'tipo',targetKey:'t_id'});

      export default  lc_agrupacioninteresados;
 