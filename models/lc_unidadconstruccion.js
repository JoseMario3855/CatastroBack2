const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_unidadconstruccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_unidadconstruccion.init({
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
    planta_ubicacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    altura:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    geometria: {
    type: DataTypes.GEOMETRY,
    allowNull: true
  },
    lc_caracteristicasunidadconstruccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ls_construccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dimension: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    etiqueta: {
      type: DataTypes.STRING,
      allowNull: false
    },
    relacion_superficie: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nivel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comienzo_vida_util_version: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fin_vida_util_version: {
      type: DataTypes.DATE,
      allowNull: true
    },
    espacio_de_nombres: {
      type: DataTypes.STRING,
      allowNull: false
    },
    local_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'lc_unidadconstruccion',
  });
  return lc_unidadconstruccion;
};