import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const lc_unidadconstruccion = sequelize.define('penol.lc_unidadconstruccion',{
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
    planta_ubicacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    altura:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    geometria: {
    type: DataTypes.GEOMETRY,
    allowNull: true
  },
    lc_caracteristicasunidadconstruccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ls_construccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dimension: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    etiqueta: {
      type: DataTypes.STRING,
      allowNull: false
    },
    relacion_superficie: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nivel: {
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
    tableName:'lc_unidadconstruccion',
  });
  export default lc_unidadconstruccion;
