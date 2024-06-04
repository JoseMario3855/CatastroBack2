import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { lc_categoriasuelotipo } from './lc_categoriasuelotipo.js';
import { lc_destinacioneconomicatipo } from './lc_destinacioneconomicatipo.js';
import { lc_clasesuelotipo } from './lc_clasesuelotipo.js';
import { col_unidadadministrativabasicatipo } from './col_unidadadministrativabasicatipo.js';

const lc_predio = sequelize.define('lc_predio', {
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
  departamento: {
    type: DataTypes.STRING,
    allowNull: false
  },
  municipio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_operacion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tiene_fmi: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  codigo_orip: {
    type: DataTypes.STRING,
    allowNull: false
  },
  matricula_inmobiliaria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numero_predial: {
    type: DataTypes.STRING,
    allowNull: true
  },
  numero_predial_anterior: {
    type: DataTypes.STRING,
    allowNull: true
  },
  codigo_homologado: {
    type: DataTypes.STRING,
    allowNull: true
  },
  interrelacionado: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  codigo_homologado_fmi: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  nupre: {
    type: DataTypes.STRING,
    allowNull: true
  },
  avaluo_catastral: {
    type: DataTypes.DECIMAL,
    allowNull: true
  },
  valor_referencia: {
    type: DataTypes.DECIMAL,
    allowNull: true
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  condicion_predio: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  destinacion_economica: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  clase_suelo: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: true
  },
  comienzo_vida_util_version: {
    type: DataTypes.DATE,
    allowNull: true
  },
  espacio_de_nombres: {
    type: DataTypes.STRING,
    allowNull: true
  },
  local_id: {
    type: DataTypes.STRING,
    allowNull: true
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
  freezeTableName: true
});

lc_predio.hasMany(lc_categoriasuelotipo, { foreignKey: 'categoria_suelo', sourceKey: 't_id' });
lc_categoriasuelotipo.belongsTo(lc_predio, { foreignKey: 'categoria_suelo', targetKey: 't_id' });

lc_predio.hasMany(lc_destinacioneconomicatipo, { foreignKey: 'destinacion_economica', sourceKey: 't_id' });
lc_destinacioneconomicatipo.belongsTo(lc_predio, { foreignKey: 'destinacion_economica', targetKey: 't_id' });

lc_predio.hasMany(lc_clasesuelotipo, { foreignKey: 'clase_suelo', sourceKey: 't_id' });
lc_clasesuelotipo.belongsTo(lc_predio, { foreignKey: 'clase_suelo', targetKey: 't_id' });

lc_predio.hasMany(col_unidadadministrativabasicatipo, { foreignKey: 'tipo', sourceKey: 't_id' });
col_unidadadministrativabasicatipo.belongsTo(lc_predio, { foreignKey: 'tipo', targetKey: 't_id' });

export default lc_predio;