const { Model, DataTypes } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class col_puntoccl extends Model {
    
    static associate(models) {
      col_puntoccl.belongsTo(models.lc_lindero,{foreignKey:'ccl',targetKey:'t_id'});
      col_puntoccl.belongsTo(models.lc_puntocontrol,{foreignKey:'punto_lc_puntocontrol',targetKey:'t_id'});
      col_puntoccl.belongsTo(models.lc_puntolindero,{foreignKey:'punto_lc_puntolindero',targetKey:'t_id'});
      col_puntoccl.belongsTo(models.lc_puntolevantamiento,{foreignKey:'punto_lc_puntolevantamiento',targetKey:'t_id'});

    }
  }
  col_puntoccl.init({
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
    ccl: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
  }, {
    sequelize,
    modelName: 'col_puntoccl',
  });
  return col_puntoccl;
};