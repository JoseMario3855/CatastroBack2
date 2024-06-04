const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_puntofuente extends Model {
 
    static associate(models) {
      col_puntofuente.belongsTo(models.lc_puntocontrol,{foreignKey:'punto_lc_puntocontrol',targetKey:'t_id'});
      
    }

  }
  col_puntofuente.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fuente_espacial:  {
      type: DataTypes.INTEGER,
      allowNull: false
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
   
  }, {
    sequelize,
    modelName: 'col_puntofuente',
  });
  return col_puntofuente;
};