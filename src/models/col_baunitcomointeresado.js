import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import  lc_interesado  from './lc_interesado.js';
import  lc_agrupacioninteresados  from './lc_agrupacioninteresados.js';
import  lc_predio  from './lc_predio.js';

   
  
const col_baunitcomointeresado = sequelize.define('penol.col_baunitcomointeresado', {
        
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
    interesado_lc_interesado:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    interesado_lc_agrupacioninteresados:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unidad:{
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    freezeTableName: true,
    schema: 'penol',
    tableName:'col_baunitcomointeresado',
  });
  
  col_baunitcomointeresado.hasMany(lc_interesado, { foreignKey: 'interesado_lc_interesado', sourcekey: 't_id' });
  lc_interesado.belongsTo(col_baunitcomointeresado, { foreignKey: 'interesado_lc_interesado', targetKey: 't_id' });
  
  col_baunitcomointeresado.hasMany(lc_agrupacioninteresados, { foreignKey: 'interesado_lc_agrupacioninteresados', sourcekey: 't_id' });
  lc_agrupacioninteresados.belongsTo(col_baunitcomointeresado, { foreignKey: 'interesado_lc_agrupacioninteresados', targetKey: 't_id' });
  
  col_baunitcomointeresado.hasMany(lc_predio, { foreignKey: 'unidad', sourcekey: 't_id' });  
  lc_predio.belongsTo(col_baunitcomointeresado, { foreignKey: 'unidad', targetKey: 't_id' });  

  

  export default  col_baunitcomointeresado;
