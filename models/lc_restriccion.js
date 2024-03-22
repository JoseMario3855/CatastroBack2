const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_restriccion extends Model {
   
    static associate(models) {
      lc_restriccion.belongsTo(models.lc_restricciontipo, { foreignKey: 'tipo' ,targetKey:'tipo'});
      lc_restriccion.belongsTo(models.lc_interesado,{foreignKey:'interesado_lc_interesado',targetKey:'interesado_lc_interesado'});
      lc_restriccion.belongsTo(models.lc_agrupacioninteresado,{foreignKey: 'interesado_lc_agrupacioninteresados',targetKey:'interesado_lc_agrupacioninteresados'});
      lc_restriccion.belongsTo(models.lc_predio,{foreignKey: 'unidad',targetKey:'unidad'});
    }
  }
  lc_restriccion.init({
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
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    interesado_lc_interesado:{
      type: DataTypes.STRING,
      allowNull: false
    },
    interesado_lc_agrupacioninteresados: {
      type: DataTypes.STRING,
      allowNull: false
    },
    unidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comienzo_vida_util_version:{
      type: DataTypes.DATE,
      allowNull: true
    },
    fin_vida_util_version: {
      type: DataTypes.DATE,
      allowNull: true
    },
    espacio_de_nombres: {
      type: DataTypes.STRING,
      allowNull: false
    },
    local_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sequelize,
    modelName: 'lc_restriccion',
  });
  return lc_restriccion;
};