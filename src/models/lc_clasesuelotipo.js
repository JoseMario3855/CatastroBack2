import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js';

/*module.exports = (sequelize, DataTypes) => {
    class lc_clasesuelotipo extends Model {
      static associate(models) {
        // Define las asociaciones aquí si es necesario
      }
    }*/
    export const lc_clasesuelotipo =sequelize.define('lc_clasesuelotipo',{
        t_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        thisclass: {
          type: DataTypes.STRING,
          allowNull: true
        },
        baseclass: {
          type: DataTypes.STRING,
          allowNull: true
        },
        itfcode: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ilicode: {
          type: DataTypes.STRING,
          allowNull: true
        },
        seq: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        inactive: {
          type: DataTypes.BOOLEAN,
          allowNull: true
        },
        dispname: {
          type: DataTypes.STRING,
          allowNull: true
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true
        },
      });
      
    