'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lc_interesado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_interesado.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    tipo: DataTypes.INTEGER,
    tipo_documento: DataTypes.INTEGER,
    documento_identidad: DataTypes.STRING,
    primer_nombre: DataTypes.STRING,
    segundo_nombre: DataTypes.STRING,
    primer_apellido: DataTypes.STRING,
    segundo_apellido: DataTypes.STRING,
    sexo: DataTypes.INTEGER,
    grupo_etnico: DataTypes.INTEGER,
    razon_social: DataTypes.STRING,
    nombre: DataTypes.STRING,
    comienzo_vida_util_version: DataTypes.DATE,
    fin_vida_util_version: DataTypes.DATE,
    espacio_de_nombres: DataTypes.STRING,
    local_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lc_interesado',
  });
  return lc_interesado;
};