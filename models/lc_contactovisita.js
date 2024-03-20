const { Model, DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  class lc_contactovisita extends Model {
    static associate(models) {
      lc_contactovisita.belongsTo(models.lc_datos_adicionales, { foreignKey: 'lc_datos_adicionales' ,targetKey:'lc_datos_adicionales'});
      lc_contactovisita.belongsTo(models.lc_interesadodocumentotipo, { foreignKey: 'tipo_documento_quien_atendio' ,targetKey:'tipo_documento_quien_atendio'});
    }
  }
  
  lc_contactovisita.init({
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
    tipo_documento_quien_atendio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numero_documento_quien_atendio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    primer_nombre_quien_atendio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    segundo_nombre_quien_atendio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    primer_apellido_quien_atendio:{
      type: DataTypes.STRING,
      allowNull: false

    },
    segundo_apellido_quien_atendio:{
      type: DataTypes.STRING,
      allowNull: false

    },
    domicilio_notificaciones:{
      type: DataTypes.STRING,
      allowNull: false

    },
    celular:{
      type: DataTypes.STRING,
      allowNull: false

    },
    correo_electronico:{
      type: DataTypes.STRING,
      allowNull: false

    },
    autoriza_notificaciones: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    
    lc_datos_adicionales:{
      type: DataTypes.INTEGER,
      allowNull:true
    },
    
  }, {
    sequelize,
    modelName: 'lc_contactovisita',
  });

  return lc_contactovisita;
};
