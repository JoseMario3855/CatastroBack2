const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_nu_relacionnecesariaunidadesespaciales extends Model {
    
    static associate(models) {  
    }
  }
  lc_nu_relacionnecesariaunidadesespaciales.init({
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
      relacion: {
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
    modelName: 'lc_nu_relacionnecesariaunidadesespaciales',
  });
  return lc_nu_relacionnecesariaunidadesespaciales;
};