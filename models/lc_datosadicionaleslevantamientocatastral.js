const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class lc_datosadicionaleslevantamientocatastral extends Model {
   
    static associate(models) {
      lc_datosadicionaleslevantamientocatastral.belongsTo(models.lc_procedimientocatastralregistratipo,{foreignKey:'procedimiento_catastral_registral',targetKey:'procedimiento_catastral_registral'});
      lc_datosadicionaleslevantamientocatastral.belongsTo(models.lc_interesadodocumentotipo,{foreignKey:'tipo_documento_reconocedor',targetKey:'tipo_documento_reconocedor'});
      lc_datosadicionaleslevantamientocatastral.belongsTo(models.lc_resultadovisitatipo,{foreignKey:'resultado_visita',targetKey:'resultado_visita'});
      lc_datosadicionaleslevantamientocatastral.belongsTo(models.lc_estratotipo,{foreignKey:'estrato',targetKey:'estrato'});
      lc_datosadicionaleslevantamientocatastral.belongsTo(models.lc_predio,{foreignKey:'lc_predio',targetKey:'lc_predio'});
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