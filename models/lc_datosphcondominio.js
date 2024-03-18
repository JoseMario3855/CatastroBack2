const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_datosphcondominio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_datosphcondominio.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_ili_tid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    area_total_terreno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    area_total_terreno_privada: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    area_total_construida: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    area_total_construida_priva: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    area_total_construida_comun: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numero_torres:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    toral_unidades_privadas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_predio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'lc_datosphcondominio',
  });
  return lc_datosphcondominio;
};