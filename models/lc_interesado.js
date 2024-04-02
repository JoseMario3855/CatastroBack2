const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_interesado extends Model {
   
    static associate(models) {
      lc_interesado.belongsTo(models.lc_interesadodocumentotipo,{foreignKey:'tipo_documento',targetKey:'t_id'});
      lc_interesado.belongsTo(models.lc_sexotipo,{foreignKey:'sexo',targetKey:'t_id'});
      lc_interesado.belongsTo(models.lc_grupoetnicotipo,{foreignKey:'grupo_etnico',targetKey:'t_id'});
      lc_interesado.belongsTo(models.lc_estadociviltipo,{foreignKey:'estado_civil',targetKey:'t_id'});
    }
  }
  lc_interesado.init({
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
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo_documento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    documento_identidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    primer_nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    segundo_nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    primer_apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    segundo_apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sexo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    grupo_etnico: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    razon_social: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comienzo_vida_util_version: {
      type:DataTypes.DATE,
      allowNull: false
      },
    fin_vida_util_version: {
    type:DataTypes.DATE,
    allowNull: false
    },
    espacio_de_nombres: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    local_id:{
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'lc_interesado',
  });
  return lc_interesado;
};