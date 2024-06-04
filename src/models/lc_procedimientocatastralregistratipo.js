const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class lc_procedimientocatastralregistratipo extends Model {
      static associate(models) {
        
      }
    }
    
    lc_procedimientocatastralregistratipo.init({
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
        
      }, {
        sequelize,
        modelName: 'lc_procedimientocatastralregistratipo',
      });

      return lc_procedimientocatastralregistratipo;
    };
    