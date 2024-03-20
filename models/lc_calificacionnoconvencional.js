const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_calificacionnoconvencional extends Model {
    
    static associate(models) {
      lc_calificacionnoconvencional.belongsTo(models.lc_anexotipo,{foreignKey:'tipo_anexo',targetKey:'tipo_anexo'});
      lc_calificacionnoconvencional.belongsTo(models.lc_caracteristicaunidadconstruccion,{foreignKey:'lc_unidad_construccion',targetKey:'lc_unidad_construccion'});
    
    }
  }
  lc_calificacionnoconvencional.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_ili_tid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    tipo_anexo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lc_unidad_construccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'lc_calificacionnoconvencional',
  });
  return lc_calificacionnoconvencional;
};