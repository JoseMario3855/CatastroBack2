'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lc_interesadocontacto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_interesadocontacto.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    telefono1: DataTypes.STRING,
    telefono2: DataTypes.STRING,
    domicilio_notificacion: DataTypes.STRING,
    direccion_residencia: DataTypes.STRING,
    correo_electronico: DataTypes.STRING,
    autoriza_notificacion_correo: DataTypes.BOOLEAN,
    departamento: DataTypes.STRING,
    municipio: DataTypes.STRING,
    vereda: DataTypes.STRING,
    corregimiento: DataTypes.STRING,
    lc_interesado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lc_interesadocontacto',
  });
  return lc_interesadocontacto;
};