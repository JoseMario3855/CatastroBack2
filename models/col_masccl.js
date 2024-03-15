const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class col_masccl extends Model {
   
    static associate(models) {
      col_masccl.belongsTo(models.lc_unidadconstruccion,{foreignKey:'ue_mas_lc_unidadconstruccion',targetKey:'ue_mas_lc_unidadconstruccion'});

    }
  }
  col_masccl.init({
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
    ccl_mas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ue_mas_lc_terreno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ue_mas_lc_construccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ue_mas_lc_unidadconstruccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ue_mas_lc_servidumbretransito: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'col_masccl',
  });
  return col_masccl;
};