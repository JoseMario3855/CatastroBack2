import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import col_registrotipo from './col_registrotipo.js';
import col_estructuratipo from './col_estructuratipo.js';
import col_contenidoniveltipo from './col_contenidoniveltipo.js';

const lc_nu_nivel = sequelize.define('lc_nu_nivel', {
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
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  registro_tipo: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  estructura: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  tipo: {
    type: DataTypes.INTEGER,
    allowNull: true
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
  }
}, {
  freezeTableName: true,
  schema: 'penol',
  tableName: 'lc_nu_nivel',
});

lc_nu_nivel.hasMany(col_registrotipo, { foreignKey: 'registro_tipo', sourceKey: 't_id' });
col_registrotipo.belongsTo(lc_nu_nivel, { foreignKey: 'registro_tipo', targetKey: 't_id' });

lc_nu_nivel.hasMany(col_estructuratipo, { foreignKey: 'estructura', sourceKey: 't_id' });
col_estructuratipo.belongsTo(lc_nu_nivel, { foreignKey: 'estructura', targetKey: 't_id' });

lc_nu_nivel.hasMany(col_contenidoniveltipo, { foreignKey: 'tipo', sourceKey: 't_id' });
col_contenidoniveltipo.belongsTo(lc_nu_nivel, { foreignKey: 'tipo', targetKey: 't_id' });

export default lc_nu_nivel;