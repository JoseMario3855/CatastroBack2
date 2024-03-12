'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lc_calificacionconvencional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_calificacionconvencional.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    tipo_calificar: DataTypes.INTEGER,
    total_calificacion: DataTypes.INTEGER,
    lc_unidad_construccion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lc_calificacionconvencional',
  });
  return lc_calificacionconvencional;
};