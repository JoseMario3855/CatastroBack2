const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class extinteresado extends Model {
 
    static associate(models) {
      extinteresado.belongsTo(models.extredserviciosfisica,{foreignKey:'extredserviciosfisica_ext_interesado_administrador_id',targetKey:'t_id'});
      extinteresado.belongsTo(models.lc_agrupacioninteresados,{foreignKey:'lc_agrupacionintersdos_ext_pid',targetKey:'t_id'});
      extinteresado.belongsTo(models.lc_interesado,{foreignKey:'lc_interesado_ext_pid',targetKey:'t_id'});
    }
  }
  extinteresado.init({
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
    nombre:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    documento_escaneado:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    extredserviciosfisica_ext_interesado_administrador_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_agrupacionintersdos_ext_pid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_interesado_ext_pid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    
  }, {
    sequelize,
    modelName: 'extinteresado',
  });
  return extinteresado;
};