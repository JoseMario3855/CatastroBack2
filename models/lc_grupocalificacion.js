const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_grupocalificacion extends Model {
   
    static associate(models) {
        lc_grupocalificacion.belongsTo(models.lc_clasecalificaciontipo,{foreignKey:'clase_calificacion',targetKey:'clase_calificacion'});
        lc_grupocalificacion.belongsTo(models.lc_estadoconservaciontipo,{foreignKey:'conservacion',targetKey:'conservacion'});
        lc_grupocalificacion.belongsTo(models.lc_calificacionconvencional,{foreignKey:'lc_calificacion_convencional',targetKey:'lc_calificacion_convencional'});
    }
  }
  lc_grupocalificacion.init({
    t_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      t_ili_tid: {
        type: DataTypes.UUID,
        allowNull: true
      },
      clase_calificacion:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      conservacion:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      subtotal: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      lc_calificacion_convencional:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      
  }, {
    sequelize,
    modelName: 'lc_grupocalificacion',
  });
  return lc_grupocalificacion;
};