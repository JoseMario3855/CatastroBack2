const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_nu_caraslindero extends Model {
   
    static associate(models) {
      
    }
  }
  lc_nu_caraslindero.init({
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
    longitud:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
    geometria:{
        type: DataTypes.GEOMETRY,
        allowNull:true
      },
    localizacion_textual: {
        type: DataTypes.STRING,
        allowNull: false
      },
    comienzo_vida_util_version:{ 
        type: DataTypes.DATE,
        allowNull: true
      },
    fin_vida_util_version:{ 
        type: DataTypes.DATE,
        allowNull: true
      },
    espacio_de_nombres: {
        type: DataTypes.STRING,
        allowNull: false
      },
    local_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
  }, {
    sequelize,
    modelName: 'lc_nu_caraslindero',
  });
  return lc_nu_caraslindero;
};