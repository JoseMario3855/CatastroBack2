const { Model, DataTypes } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class col_puntocl extends Model {
    
    static associate(models) {
        col_puntocl.belongsTo(models.lc_nu_caraslindero,{foreignKey:'cl',targetKey:'cl'});
    }
  }
  col_puntocl.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    
    punto_lc_puntocontrol: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    punto_lc_puntolindero: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    punto_lc_puntolevantamiento: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    cl: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
  }, {
    sequelize,
    modelName: 'col_puntocl',
  });
  return col_puntocl;
};