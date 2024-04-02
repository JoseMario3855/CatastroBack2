const { Model, DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  class lc_predio extends Model {
    static associate(models) {
      lc_predio.belongsTo(models.lc_categoriasuelotipo, { foreignKey: 'categoria_suelo' ,targetKey:'t_id'});
      lc_predio.belongsTo(models.lc_destinacioneconomicatipo,{foreignKey:'destinacion_economica',targetKey:'t_id'});
      lc_predio.belongsTo(models.lc_clasesuelotipo,{foreignKey: 't_clase_sueloid',targetKey:'t_id'});
      lc_predio.belongsTo(models.col_unidadadministrativabasicatipo,{foreignKey: 'tipo',targetKey:'t_id'});


    }
  }
  
  lc_predio.init({
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
    departamento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    municipio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_operacion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tiene_fmi: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    codigo_orip:{
      type: DataTypes.STRING,
      allowNull: false

    },
    matricula_inmobiliaria:{
      type: DataTypes.STRING,
      allowNull: false

    },
    numero_predial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numero_predial_anterior: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigo_homologado:{
      type: DataTypes.STRING,
      allowNull: false

    },
    interrelacionado:{
      type: DataTypes.BOOLEAN,
      allowNull: false

    },
    codigo_homologado_fmi:{
      type: DataTypes.BOOLEAN,
      allowNull: false

    },
    nupre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    avaluo_catastral: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    valor_referencia: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    condicion_predio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    destinacion_economica:{
      type: DataTypes.INTEGER,
      allowNull:true
    },
    clase_suelo:{
      type: DataTypes.INTEGER,
      allowNull:true
    },

    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comienzo_vida_util_version: {
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
    }
  }, {
    sequelize,
    modelName: 'lc_predio',
  });

  return lc_predio;
};
