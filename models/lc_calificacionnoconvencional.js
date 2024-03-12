'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lc_calificacionnoconvencional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_calificacionnoconvencional.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    tipo_anexo: DataTypes.INTEGER,
    lc_unidad_construccion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lc_calificacionnoconvencional',
  });
  return lc_calificacionnoconvencional;
};