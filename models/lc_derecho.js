const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_derecho extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_derecho.init({
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
    fraccion_derecho: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_inicio_tenencia: { 
      type: DataTypes.DATE,
      allowNull: false
    },
    interesado_lc_interesado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    interesado_lc_agrupacioninteresados:{
      type: DataTypes.STRING,
      allowNull: false
    },
    unidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comienzo_vida_util_version: {
     type: DataTypes.DATE,
     allowNull: false
    },
    fin_vida_util_version: { 
      type: DataTypes.DATE,
      allowNull: false
    },
    espacio_de_nombres: {
      type: DataTypes.STRING,
      allowNull: false
    },
    local_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'lc_derecho',
  });
  return lc_derecho;
};