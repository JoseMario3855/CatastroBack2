const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_agrupacioninteresados extends Model {
   
    static associate(models) {
        lc_agrupacioninteresados.belongsTo(models.col_grupointeresadotipo,{foreignKey:'tipo',targetKey:'tipo'});
    }
  }
  lc_agrupacioninteresados.init({
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
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      omienzo_vida_util_version:{ 
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
        modelName: 'lc_agrupacioninteresados',
      });
      return lc_agrupacioninteresados;
    };
