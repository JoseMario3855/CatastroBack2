const { Model, DataTypes } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class col_cifuente extends Model {
    
    static associate(models) {
        col_cifuente.belongsTo(models.lc_nu_caraslindero,{foreignKey:'cl',targetKey:'t_id'});
    }
  }
  col_cifuente.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    
    cl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuente_espacial: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'col_cifuente',
  });
  return col_cifuente;
};