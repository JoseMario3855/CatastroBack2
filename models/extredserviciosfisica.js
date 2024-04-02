const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class extredserviciosfisica extends Model {
 
    static associate(models) {
      extredserviciosfisica.belongsTo(models.lc_nu_espaciojuridicoredservicios,{foreignKey:'lc_nu_spcjrdcrdsrvcios_ext_id_red_fisica',targetKey:'t_id'});
    }
  }
  extredserviciosfisica.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_ili_tid:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    t_seq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orientada: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    lc_nu_spcjrdcrdsrvcios_ext_id_red_fisica: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'extredserviciosfisica',
  });
  return extredserviciosfisica;
};