const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_interesadotipo extends Model {
    
    static associate(models) {
      
    }
  }
  lc_interesadotipo.init({
    t_id: {
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
    itfcode: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ilicode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seq: {
      type: DataTypes.DECIMAL,
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
    modelName: 'lc_interesadotipo',
  });
  return lc_interesadotipo;
};