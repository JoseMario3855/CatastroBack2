const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_nu_espaciojuridicoredservicios extends Model {
    
    static associate(models) {
        lc_nu_espaciojuridicoredservicios.belongsTo(models.col_estadoredserviciostipo,{foreignKey:'estado',targetKey:'estado'});
        lc_nu_espaciojuridicoredservicios.belongsTo(models.col_redserviciostipo,{foreignKey:'tipo',targetKey:'tipo'});
        lc_nu_espaciojuridicoredservicios.belongsTo(models.col_dimensiontipo,{foreignKey:'dimension',targetKey:'dimension'});
        lc_nu_espaciojuridicoredservicios.belongsTo(models.col_relacionsuperficietipo,{foreignKey:'relacion_superficie',targetKey:'relacion_superficie'});
        lc_nu_espaciojuridicoredservicios.belongsTo(models.lc_nu_nivel,{foreignKey:'nivel',targetKey:'nivel'});
    }
  }
  lc_nu_espaciojuridicoredservicios.init({
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
      tipo:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      dimension:{
        type: DataTypes.INTEGER,
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
      geometria:{
        type: DataTypes.GEOMETRY,
        allowNull:true
      },
      nivel:{
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
    modelName: 'lc_nu_espaciojuridicoredservicios',
  });
  return lc_nu_espaciojuridicoredservicios;
};