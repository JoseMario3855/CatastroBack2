const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_baunitcomointeresado extends Model {
   
    static associate(models) {
      col_baunitcomointeresado.belongsTo(models.lc_interesado, { foreignKey: 'interesado_lc_interesado', targetKey: 't_id' });
      col_baunitcomointeresado.belongsTo(models.lc_agrupacioninteresados, { foreignKey: 'interesado_lc_agrupacioninteresados', targetKey: 't_id' });
      col_baunitcomointeresado.belongsTo(models.lc_predio, { foreignKey: 'unidad', targetKey: 't_id' });  
    }
  }
  col_baunitcomointeresado.init({
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
    interesado_lc_interesado:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    interesado_lc_agrupacioninteresados:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unidad:{
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'col_baunitcomointeresado',
  });
  return col_baunitcomointeresado;
};
