const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_interesadocontacto extends Model {
    
    static associate(models) {
      lc_interesadocontacto.belongsTo(models.lc_interesado,{foreignKey:'lc_interesado_id',targetKey:'t_id'});
    }
  }
  lc_interesadocontacto.init({
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
    telefono1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono2:{
      type: DataTypes.STRING,
      allowNull: false
    },
    domicilio_notificacion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion_residencia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    correo_electronico: {
      type: DataTypes.STRING,
      allowNull: false
    },
    autoriza_notificacion_correo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    departamento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    municipio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vereda: {
      type: DataTypes.STRING,
      allowNull: false
    },
    corregimiento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lc_interesado_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'lc_interesadocontacto',
  });
  return lc_interesadocontacto;
};