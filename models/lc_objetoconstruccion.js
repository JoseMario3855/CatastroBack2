const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_objetoconstruccion extends Model {
   
    static associate(models) {
      lc_objetoconstruccion.belongsTo(models.lc_grupocalificacion,{foreignKey:'lc_grupo_calificacion',targetKey:'lc_grupo_calificacion'});
      lc_objetoconstruccion.belongsTo(models.lc_objetoconstrucciontipo,{foreignKey:'tipo_objeto_construccion',targetKey:'tipo_objeto_construccion'});
      
    }
  }
  lc_objetoconstruccion.init({
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
      tipo_objeto_construccion:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      puntos:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      lc_grupo_calificacion: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
  }, {
    sequelize,
    modelName: 'lc_objetoconstruccion',
  });
  return lc_objetoconstruccion;
};