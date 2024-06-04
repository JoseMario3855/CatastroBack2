const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_estructuranovedadfmi extends Model {
   
    static associate(models) {
        lc_estructuranovedadfmi.belongsTo(models.lc_datosadicionaleslevantamientocatastral,{foreignKey:'lc_dtsdcnlstmntctstral_novedad_fmi',targetKey:'t_id'});
    }
  }
  lc_estructuranovedadfmi.init({
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
   
      codigo_orip: {
        type: DataTypes.STRING,
        allowNull: false
      },
      numero_fmi: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lc_dtsdcnlstmntctstral_novedad_fmi:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      
  }, {
    sequelize,
    modelName: 'lc_estructuranovedadfmi',
  });
  return lc_estructuranovedadfmi;
};