const { Model, DataTypes } = require('sequelize');

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