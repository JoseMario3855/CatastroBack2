import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { lc_interesadodocumentotipo } from './lc_interesadodocumentotipo.js';
import { lc_sexotipo } from './lc_sexotipo.js';
import { lc_grupoetnicotipo } from './lc_grupoetnicotipo.js';
import { lc_estadociviltipo } from './lc_estadociviltipo.js';
 

  const lc_interesado = sequelize.define('penol.lc_interesado', {

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
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo_documento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    documento_identidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    primer_nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    segundo_nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    primer_apellido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    segundo_apellido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sexo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    grupo_etnico: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    razon_social: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comienzo_vida_util_version: {
      type:DataTypes.DATE,
      allowNull: false
      },
    fin_vida_util_version: {
    type:DataTypes.DATE,
    allowNull: true
    },
    espacio_de_nombres: {
      type: DataTypes.STRING,
      allowNull: false
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
    tableName: 'lc_interesado',
  });
  lc_interesado.hasMany(lc_interesadodocumentotipo, { foreignKey: 'tipo_documento', sourceKey: 't_id' });
  lc_interesadodocumentotipo.belongsTo(lc_interesado, { foreignKey: 'tipo_documento', targetKey: 't_id' });
 
lc_interesado.hasMany(lc_sexotipo, { foreignKey: 'sexo', sourceKey: 't_id' });
lc_sexotipo.belongsTo(lc_interesado, { foreignKey: 'sexo', targetKey: 't_id' });
 
lc_interesado.hasMany(lc_grupoetnicotipo, { foreignKey: 'grupo_etnico', sourceKey: 't_id' });
lc_grupoetnicotipo.belongsTo(lc_interesado, { foreignKey: 'grupo_etnico', targetKey: 't_id' });
 
lc_interesado.hasMany(lc_estadociviltipo, { foreignKey: 'estado_civil', sourceKey: 't_id' });
lc_estadociviltipo.belongsTo(lc_interesado, { foreignKey: 'estado_civil', targetKey: 't_id' });
 
  export default lc_interesado;
