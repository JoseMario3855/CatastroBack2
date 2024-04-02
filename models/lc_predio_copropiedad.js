const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_predio_copropiedad extends Model {
    
    static associate(models) {
      lc_predio_copropiedad.belongsTo(models.lc_predio,{foreignKey: 'unidad_predial',targetKey:'t_id'});
      lc_predio_copropiedad.belongsTo(models.lc_predio,{foreignKey: 'matriz',targetKey:'t_id'});
    }
  }
  lc_predio_copropiedad.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    unidad_predial: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    matriz: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    coeficiente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'lc_predio_copropiedad',
  });
  return lc_predio_copropiedad;
};