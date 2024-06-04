const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_relacionfuente extends Model {
    
    static associate(models) {
        col_relacionfuente.belongsTo(models.lc_nu_relacionnecesariabaunits,{foreignKey:'relacionrequeridabaunit',targetKey:'t_id'});
            
    }
  }
  col_relacionfuente.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fuente_administrativa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    relacionrequeridabaunit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'col_relacionfuente',
  });
  return col_relacionfuente;
};