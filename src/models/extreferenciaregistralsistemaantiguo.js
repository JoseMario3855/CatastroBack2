const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class extreferenciaregistralsistemaantiguo extends Model {
 
    static associate(models) {
        extreferenciaregistralsistemaantiguo.belongsTo(models.lc_predio,{foreignKey:'lc_predio_referencia_registral_sistema_antiguo',targetKey:'t_id'});
        extreferenciaregistralsistemaantiguo.belongsTo(models.extreferenciaregistralsistemaantiguo_tipo_referencia,{foreignKey:'tipo_referencia',targetKey:'t_id'});
    }
  }
  extreferenciaregistralsistemaantiguo.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_ili_tid:  {
      type: DataTypes.UUID,
      allowNull: false
    },
    t_seq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    
    tipo_referencia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    oficina: {
        type: DataTypes.STRING,
        allowNull: true
      },
    libro: {
        type: DataTypes.STRING,
        allowNull: true
      },
    tomo: {
        type: DataTypes.STRING,
        allowNull: true
      },
    pagina: {
        type: DataTypes.STRING,
        allowNull: true
      },
    numero: {
        type: DataTypes.STRING,
        allowNull: true
      },
    dia: {
        type: DataTypes.STRING,
        allowNull: true
      },
    mes: {
        type: DataTypes.STRING,
        allowNull: true
      },
    anio: {
        type: DataTypes.STRING,
        allowNull: true
      },
    matricula: {
        type: DataTypes.STRING,
        allowNull: true
      },
    lc_predio_referencia_registral_sistema_antiguo: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
  }, {
    sequelize,
    modelName: 'extreferenciaregistralsistemaantiguo',
  });
  return extreferenciaregistralsistemaantiguo;
};