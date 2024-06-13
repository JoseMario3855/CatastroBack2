import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import  lc_predio  from './lc_predio.js';
import  lc_fuenteespacial  from './lc_fuenteespacial.js';

  const col_baunitfuente= sequelize.define('penol.col_baunitfuente',{
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_ili_tid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fuente_especial: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    freezeTableName: true,
    schema: 'penol',
    tableName: 'col_baunitfuente',
  });
  
  col_baunitfuente.hasMany(lc_predio,{foreignKey:'unidad',sourceKey:'t_id'});
  lc_predio.belongsTo(col_baunitfuente,{foreignKey:'unidad',targetKey:'t_id'});

  col_baunitfuente.hasMany(lc_fuenteespacial,{foreignKey:'fuente_especial',sourceKey:'t_id'});
  lc_fuenteespacial.belongsTo(col_baunitfuente,{foreignKey:'fuente_especial',targetKey:'t_id'});
  export default col_baunitfuente;
