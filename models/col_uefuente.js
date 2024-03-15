const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_uefuente extends Model {
 
    static associate(models) {
    
    }
  }
  col_uefuente.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_ili_tid:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    ue_lc_terreno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ue_lc_construccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ue_lc_unidadconstruccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ue_lc_servidumbretransito: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuente_espacia: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'col_uefuente',
  });
  return col_uefuente;
};