const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_volumenvalor extends Model {
    
    static associate(models) {
      col_volumenvalor.belongsTo(models.col_volumentipo,{foreignKey:'tipo',targetKey:'t_id'});
      col_volumenvalor.belongsTo(models.lc_servidumbretransito,{foreignKey:'lc_servidumbretransito_volumen',targetKey:'t_id'});
      col_volumenvalor.belongsTo(models.lc_terreno,{foreignKey:'lc_terreno_volumen',targetKey:'t_id'});
      col_volumenvalor.belongsTo(models.lc_nu_espaciojuridicoredservicios,{foreignKey:'lc_nu_spcjrdcrdsrvcios_volumen',targetKey:'t_id'});
      col_volumenvalor.belongsTo(models.lc_nu_espaciojuridicounidadedificacion,{foreignKey:'lc_n_spcjrdcndddfccion_volumen',targetKey:'t_id'});
      col_volumenvalor.belongsTo(models.lc_construccion,{foreignKey:'lc_construccion_volumen',targetKey:'t_id'});
      col_volumenvalor.belongsTo(models.lc_unidadconstruccion,{foreignKey:'lc_unidadconstruccion_volumen',targetKey:'t_id'});
    }
  }
  col_volumenvalor.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_seq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    volumen_medicion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_construccion_volumen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_terreno_volumen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_servidumbretransito_volumen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lc_unidadconstruccion_volumen: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'col_volumenvalor',
  });
  return col_volumenvalor;
};