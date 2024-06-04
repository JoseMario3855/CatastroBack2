const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_predio_informalidad extends Model {
    
    static associate(models) {
      lc_predio_informalidad.belongsTo(models.lc_predio,{foreignKey: 'lc_predio_formal',targetKey:'t_id'});
      lc_predio_informalidad.belongsTo(models.lc_predio,{foreignKey: 'lc_predio_informal',targetKey:'t_id'});
    }
  }
  lc_predio_informalidad.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    lc_predio_formal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_predio_informal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'lc_predio_informalidad',
  });
  return lc_predio_informalidad;
};