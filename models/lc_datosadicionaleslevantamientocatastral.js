'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lc_datosadicionaleslevantamientocatastral extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_datosadicionaleslevantamientocatastral.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    tiene_area_registral: DataTypes.BOOLEAN,
    area_registral_m2: DataTypes.INTEGER,
    procedimiento_catastral_registral: DataTypes.INTEGER,
    destinacion_economica: DataTypes.INTEGER,
    clase_suelo: DataTypes.INTEGER,
    categoria_suelo: DataTypes.INTEGER,
    observaciones: DataTypes.STRING,
    fecha_visita_predial: DataTypes.DATE,
    tipo_documento_reconocedor: DataTypes.INTEGER,
    primer_nombre_reconocedor: DataTypes.STRING,
    segundo_nombre_reconocedor: DataTypes.STRING,
    primer_apellido_reconocedor: DataTypes.STRING,
    segundo_apellido_reconocedor: DataTypes.STRING,
    resultado_visita: DataTypes.INTEGER,
    suscribe_acta_colindancia: DataTypes.BOOLEAN,
    lc_predio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lc_datosadicionaleslevantamientocatastral',
  });
  return lc_datosadicionaleslevantamientocatastral;
};