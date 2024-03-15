const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_miembros extends Model {
    
    static associate(models) {
      col_miembros.belongsTo(models.lc_interesado,{foreignKey:'interesado_lc_interesado',targetKey:'interesado_lc_interesado'});
      /*col_miembros.belongsTo(models.lc_agrupacioninteresados,{foreignKey:'interesado_lc_agrupacioninteresados',targetKey:'interesado_lc_agrupacioninteresados'});*/
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
  }, {
    sequelize,
    modelName: 'col_miembros',
  });
  return col_miembros;
};