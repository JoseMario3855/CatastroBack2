const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_nu_agrupacionunidadesespaciales extends Model {
   
    static associate(models) {
      
    }
  }
  lc_nu_agrupacionunidadesespaciales.init({
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
      nivel_jerarquico:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      nombre:{
        type: DataTypes.STRING,
        allowNull:true
      },
      etiqueta: {
        type: DataTypes.STRING,
        allowNull: false
      },
      relacion_superficie:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      punto_referencia:{
        type: DataTypes.GEOMETRY,
        allowNull:true
      },
      agrupacion:{
        type: DataTypes.INTEGER,
        allowNull:true
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
    modelName: 'lc_nu_agrupacionunidadesespaciales',
  });
  return lc_nu_agrupacionunidadesespaciales;
};