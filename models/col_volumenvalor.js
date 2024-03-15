const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_volumenvalor extends Model {
    
    static associate(models) {
      
    }
  }
  col_volumenvalor.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_seq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    volumen_medicion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_construccion_volumen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_terreno_volumen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_servidumbretransito_volumen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_unidadconstruccion_volumen: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'col_volumenvalor',
  });
  return col_volumenvalor;
};