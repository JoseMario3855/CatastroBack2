const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_estructuranovedadnumeropredial extends Model {
   
    static associate(models) {
      lc_estructuranovedadnumeropredial.belongsTo(models.lc_datosadicionaleslevantamientocatastral,{foreignKey:'lc_dtsdcnlstmntctstral_novedad_numeros_prediales',targetKey:'t_id'});
      lc_estructuranovedadnumeropredial.belongsTo(models.lc_estructuranovedadnumeropredial_tipo_novedad,{foreignKey:'tipo_novedad',targetKey:'t_id'});
    }
  }
  lc_estructuranovedadnumeropredial.init({
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
      t_seq:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
   
      numero_predial: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tipo_novedad: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      lc_dtsdcnlstmntctstral_novedad_numeros_prediales:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      
  }, {
    sequelize,
    modelName: 'lc_estructuranovedadnumeropredial',
  });
  return lc_estructuranovedadnumeropredial;
};