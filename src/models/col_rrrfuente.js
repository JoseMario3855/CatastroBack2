const {
    Model
  } = require('sequelize');
  
  module.exports = (sequelize, DataTypes) => {
     class col_rrrfuente extends Model {
    
       static associate(models) {
        col_rrrfuente.belongsTo(models.lc_fuenteadministrativa,{foreignKey:'fuente_administrativa',targetKey:'t_id'});
        col_rrrfuente.belongsTo(models.lc_derecho,{foreignKey:'rrr_lc_derecho',targetKey:'t_id'});
        col_rrrfuente.belongsTo(models.lc_restriccion,{foreignKey:'rrr_lc_restriccion',targetKey:'t_id'});
        
      }
    }
    col_rrrfuente.init({
      t_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      fuente_administrativa: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      rrr_lc_derecho: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      rrr_lc_restriccion: {
        type: DataTypes.INTEGER,
        allowNull: false
  
      },
    }, {
      sequelize,
      modelName: 'col_rrrfuente',
    });
    return col_rrrfuente;
  };