const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_relacionfuenteuespacial extends Model {
    
    static associate(models) {
        col_relacionfuenteuespacial.belongsTo(models.col_relacionfuenteuespacial,{foreignKey:'relacionrequeridaue',targetKey:'t_id'});
            
    }
  }
  col_relacionfuenteuespacial.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fuente_espacial: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    relacionrequeridaue: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'col_relacionfuenteuespacial',
  });
  return col_relacionfuenteuespacial;
};