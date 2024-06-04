const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_miembros extends Model {
    
    static associate(models) {
      col_miembros.belongsTo(models.lc_interesado,{foreignKey:'interesado_lc_interesado',targetKey:'t_id'});
      col_miembros.belongsTo(models.lc_agrupacioninteresados,{foreignKey:'agrupacion',targetKey:'t_id'});
      col_miembros.belongsTo(models.lc_agrupacioninteresados,{foreignKey:'interesado_lc_agrupacioninteresados',targetKey:'t_id'});
    }
  }
  col_miembros.init({
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
    interesado_lc_interesado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    interesado_lc_agrupacioninteresados:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    agrupacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    participacion: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },

  }, {
    sequelize,
    modelName: 'col_miembros',
  });
  return col_miembros;
};