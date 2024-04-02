const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_fuenteespacial extends Model {
   
    static associate(models) {
        lc_fuenteespacial.belongsTo(models.col_fuenteespacialtipo,{foreignKey:'tipo',targetKey:'t_id'});
        lc_fuenteespacial.belongsTo(models.col_estadodisponibilidadtipo,{foreignKey:'estado_disponibilidad',targetKey:'t_id'});
        lc_fuenteespacial.belongsTo(models.ci_forma_presentacion_codigo,{foreignKey:'tipo_principal',targetKey:'t_id'});
    }
  }
  lc_fuenteespacial.init({
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
      metadato:{
        type: DataTypes.STRING,
        allowNull:true
      },
      nombre:{
        type: DataTypes.STRING,
        allowNull:true
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      estado_disponibilidad:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      tipo_principal:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      fecha_documento_fuente:{ 
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
    modelName: 'lc_fuenteespacial',
  });
  return lc_fuenteespacial;
};