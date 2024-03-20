const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_fuenteadministrativa extends Model {
   
    static associate(models) {
        lc_fuenteadministrativa.belongsTo(models.col_fuenteadministrativatipo,{foreignKey:'tipo',targetKey:'tipo'});
        lc_fuenteadministrativa.belongsTo(models.col_estadodisponibilidadtipo,{foreignKey:'estado_disponibilidad',targetKey:'estado_disponibilidad'});
        lc_fuenteadministrativa.belongsTo(models.ci_forma_presentacion_codigo,{foreignKey:'tipo_principal',targetKey:'tipo_principal'});
        
    }
  }
  lc_fuenteadministrativa.init({
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
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ente_emisor: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    observacion: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    numero_fuente: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    estado_disponibilidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo_principal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    
    fecha_documento_fuente: {
      type: DataTypes.DATE,
      allowNull: true
    },
    espacio_de_nombres: {
      type: DataTypes.STRING,
      allowNull: true
    },
    local_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'lc_fuenteadministrativa',
  });
  return lc_fuenteadministrativa;
};