const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_derecho extends Model {
   
    static associate(models) {
      lc_derecho.belongsTo(models.lc_derechotipo,{foreignKey:'tipo',targetKey:'t_id'});
      lc_derecho.belongsTo(models.lc_interesado,{foreignKey:'interesado_lc_interesado',targetKey:'t_id'});
      lc_derecho.belongsTo(models.lc_agrupacioninteresados,{foreignKey:'interesado_lc_agrupacioninteresados',targetKey:'t_id'});
      lc_derecho.belongsTo(models.lc_predio,{foreignKey:'unidad',targetKey:'t_id'});
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