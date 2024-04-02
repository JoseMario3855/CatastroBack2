const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_nu_nivel extends Model {
    
    static associate(models) {
      lc_nu_nivel.belongsTo(models.col_registrotipo,{foreignKey:'registro_tipo',targetKey:'t_id'});
      lc_nu_nivel.belongsTo(models.col_estructuratipo,{foreignKey:'estructura',targetKey:'t_id'});
      lc_nu_nivel.belongsTo(models.col_contenidoniveltipo,{foreignKey:'tipo',targetKey:'t_id'});
    }
  }
  lc_nu_nivel.init({
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
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      registro_tipo:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      estructura:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      tipo:{
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
    modelName: 'lc_nu_nivel',
  });
  return lc_nu_nivel;
};