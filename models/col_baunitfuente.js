const { Model, DataTypes } = require('sequelize');

const lc_predio = require('./lc_predio');
module.exports = (sequelize, DataTypes) => {
  class col_baunitfuente extends Model {
    
    static associate(models) {
      col_baunitfuente.belongsTo(models.lc_predio,{foreignKey:'unidad',targetKey:'unidad'});
    }
  }
  col_baunitfuente.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_ili_tid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fuente_especial: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'col_baunitfuente',
  });
  return col_baunitfuente;
};