const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_responsablefuente extends Model {
    
    static associate(models) {
      col_responsablefuente.belongsTo(models.lc_interesado,{foreignKey:'interesado_lc_interesado',targetKey:'interesado_lc_interesado'});
      col_responsablefuente.belongsTo(models.lc_agrupacioninteresados,{foreignKey:'interesado_lc_agrupacioninteresados',targetKey:'interesado_lc_agrupacioninteresados'});
      col_responsablefuente.belongsTo(models.lc_fuenteadministrativa,{foreignKey:'fuente_administrativa',targetKey:'fuente_administrativa'});
    }
  }
  col_responsablefuente.init({
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
    fuente_administrativa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    interesado_lc_interesado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    interesado_lc_agrupacioninteresados: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'col_responsablefuente',
  });
  return col_responsablefuente;
};