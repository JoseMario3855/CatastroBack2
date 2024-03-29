const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_prediotipo extends Model {
   
    static associate(models) {
      
    }
  }
  lc_prediotipo.init({
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
    inactive: DataTypes.BOOLEAN,
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
    modelName: 'lc_prediotipo',
  });
  return lc_prediotipo;
};