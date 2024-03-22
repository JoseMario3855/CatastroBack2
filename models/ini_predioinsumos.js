const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ini_predioinsumos extends Model {
    
    static associate(models) {
      ini_predioinsumos.belongsTo(models.lc_predio,{foreignKey: 'lc_predio_formal',targetKey:'lc_predio_formal'});
      ini_predioinsumos.belongsTo(models.lc_predio,{foreignKey: 'lc_predio_informal',targetKey:'lc_predio_informal'});
    }
  }
  ini_predioinsumos.init({
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

    tipo_emparejamiento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    observaciones: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gc_predio_catastro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snr_predio_juridico: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

  }, {
    sequelize,
    modelName: 'ini_predioinsumos',
  });
  return ini_predioinsumos;
};