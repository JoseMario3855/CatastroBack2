import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js';

export const lc_grupoetnicotipo= sequelize.define ("lc_grupoetnicotipo",{
    t_id:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    thisclass: {
      type: DataTypes.STRING,
      allowNull: false
    },
    baseclass: {
      type: DataTypes.STRING,
      allowNull: false
    },
    itfcode:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ilicode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inactive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    dispname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'lc_grupoetnicotipo',
  });
