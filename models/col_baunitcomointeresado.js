'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_baunitcomointeresado extends Model {
   
    static associate(models) {
      col_baunitcomointeresado.belongsto(models.lc_interesado,{foreignkey:'interesado_lc_interesado',targetKey:'interesado_lc_interesado'});
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
    unidad:{
      type:DataTypes.INTEGER,
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'col_baunitcomointeresado',
  });
  return col_baunitcomointeresado;
};