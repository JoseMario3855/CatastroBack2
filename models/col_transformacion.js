const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_transformacion extends Model {
 
    static associate(models) {
        col_transformacion.belongsTo(models.lc_puntocontrol,{foreignKey:'lc_puntocontrol_transformacion_y_resultado',targetKey:'t_id'});
        col_transformacion.belongsTo(models.lc_puntolindero,{foreignKey:'lc_puntolindero_transformacion_y_resultado',targetKey:'t_id'});
        col_transformacion.belongsTo(models.lc_puntolevantamiento,{foreignKey:'lc_puntolevantamiento_transformacion_y_resultado',targetKey:'t_id'});
    
    }

  }
  col_transformacion.init({
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
    localizacion_transformada: {
      type: DataTypes.GEOMETRY,
      allowNull: true
    },
    lc_puntocontrol_transformacion_y_resultado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_puntolindero_transformacion_y_resultado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_puntolevantamiento_transformacion_y_resultado: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'col_transformacion',
  });
  return col_transformacion;
};