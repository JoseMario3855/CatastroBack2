const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_calificacionconvencional extends Model {
    
    static associate(models) {
      lc_calificacionconvencional.belongsTo(models.lc_calificartipo,{foreignKey:'tipo_calificar',targetKey:'t_id'});
      lc_calificacionconvencional.belongsTo(models.lc_caracteristicaunidadconstruccion,{foreignKey:'lc_unidad_construccion',targetKey:'t_id'});
    
    }
  }
  lc_calificacionconvencional.init({
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
    tipo_calificar: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_calificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lc_unidad_construccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'lc_calificacionconvencional',
  });
  return lc_calificacionconvencional;
};