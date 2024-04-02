const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_unidadfuente extends Model {
   
    static associate(models) {
      col_unidadfuente.belongsTo(models.lc_predio,{foreignKey:'unidad',targetKey:'t_id'});
      col_unidadfuente.belongsTo(models.lc_fuenteadministrativa,{foreignKey:'fuente_administrativa',targetKey:'t_id'});
    }
  }
  col_unidadfuente.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_ili_tid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fuente_administrativa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'col_unidadfuente',
  });
  return col_unidadfuente;
};