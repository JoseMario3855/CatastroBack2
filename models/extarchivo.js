const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class extarchivo extends Model {
    
    static associate(models) {
        extarchivo.belongsTo(models.col_volumentipo,{foreignKey:'tipo',targetKey:'tipo'});
        extarchivo.belongsTo(models.lc_servidumbretransito,{foreignKey:'lc_servidumbretransito_volumen',targetKey:'lc_servidumbretransito_volumen'});
        extarchivo.belongsTo(models.lc_terreno,{foreignKey:'lc_terreno_volumen',targetKey:'lc_terreno_volumen'});
        extarchivo.belongsTo(models.lc_nu_espaciojuridicoredservicios,{foreignKey:'lc_nu_spcjrdcrdsrvcios_volumen',targetKey:'lc_nu_spcjrdcrdsrvcios_volumen'});
        extarchivo.belongsTo(models.lc_nu_espaciojuridicounidadedificacion,{foreignKey:'lc_n_spcjrdcndddfccion_volumen',targetKey:'lc_n_spcjrdcndddfccion_volumen'});
        extarchivo.belongsTo(models.lc_construccion,{foreignKey:'lc_construccion_volumen',targetKey:'lc_construccion_volumen'});
        extarchivo.belongsTo(models.lc_unidadconstruccion,{foreignKey:'lc_unidadconstruccion_volumen',targetKey:'lc_unidadconstruccion_volumen'});
    }
  }
  col_volumenvalor.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_ili_tid: {
        type: DataTypes.STRING,
        allowNull: true
      },
    t_seq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_aceptacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    datos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    extraccion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_grabacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_entrega: {
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
      snr_fuentecabidalndros_archivo: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      lc_fuenteadministrtiva_ext_archivo_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      lc_fuenteespacial_ext_archivo_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
  }, {
    sequelize,
    modelName: 'col_volumenvalor',
  });
  return col_volumenvalor;
};