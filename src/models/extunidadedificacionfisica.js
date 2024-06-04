const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class extunidadedificacionfisica extends Model {
 
    static associate(models) {
      extunidadedificacionfisica.belongsTo(models.lc_nu_espaciojuridicoredservicios,{foreignKey:'lc_n_spcjrdcndddfccion_ext_unidad_edificacion_fisic_id',targetKey:'t_id'});
    }
  }
  extunidadedificacionfisica.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_ili_tid:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    t_seq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_n_spcjrdcndddfccion_ext_unidad_edificacion_fisic_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'extunidadedificacionfisica',
  });
  return extunidadedificacionfisica;
};