import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const lc_terreno= sequelize.define('penol.lc_terreno',{
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
        area_terreno:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        avaluo_terreno:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        manzana_vereda_codigo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        geometria:{
            type: DataTypes.GEOMETRY,
            allowNull:true
        },
        dimension:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        etiqueta: {
            type: DataTypes.STRING,
            allowNull: true
        },
        relacion_superficie:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        nivel:{
            type: DataTypes.INTEGER,
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
        freezeTableName: true,
        schema: 'penol',
        tableName: 'lc_terreno',
      });
      export default lc_terreno;
