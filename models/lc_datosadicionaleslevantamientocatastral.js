const { Model, DataTypes } = require('sequelize');

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
    tiene_area_registral: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    area_registral_m2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    procedimiento_catastral_registral: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    destinacion_economica: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    clase_suelo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    categoria_suelo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    observaciones: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha_visita_predial:{
     type: DataTypes.DATE,
     allowNull:false
    },
    tipo_documento_reconocedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    primer_nombre_reconocedor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    segundo_nombre_reconocedor: {
    type: DataTypes.STRING,
    allowNull: false
  },
    primer_apellido_reconocedor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    segundo_apellido_reconocedor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    resultado_visita: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    suscribe_acta_colindancia: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    lc_predio:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'lc_datosadicionaleslevantamientocatastral',
  });
  return lc_datosadicionaleslevantamientocatastral;
};