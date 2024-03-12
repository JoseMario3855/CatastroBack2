'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lc_tipologiaconstruccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_tipologiaconstruccion.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    tipo_tipologia: DataTypes.INTEGER,
    lc_unidad_construccion: DataTypes.INTEGER,
    cual: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lc_tipologiaconstruccion',
  });
  return lc_tipologiaconstruccion;
};