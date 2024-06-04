const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../sequelize/sequelize.js');
const lc_categoriasuelotipo = require('./lc_categoriasuelotipo.js');
const lc_destinacioneconomicatipo = require('./lc_destinacioneconomicatipo.js');
const lc_clasesuelotipo = require('./lc_clasesuelotipo.js');
const col_unidadadministrativabasicatipo = require('./col_unidadadministrativabasicatipo.js');

class lc_predio extends Model {
  static associate(models) {
    lc_predio.belongsTo(lc_categoriasuelotipo, { foreignKey: 'categoria_suelo', targetKey: 't_id' });
    lc_predio.belongsTo(lc_destinacioneconomicatipo, { foreignKey: 'destinacion_economica', targetKey: 't_id' });
    lc_predio.belongsTo(lc_clasesuelotipo, { foreignKey: 'clase_suelo', targetKey: 't_id' });
    lc_predio.belongsTo(col_unidadadministrativabasicatipo, { foreignKey: 'tipo', targetKey: 't_id' });
  }
}


//const lc_predio = sequelize.define("lc_predio", 
lc_predio.init(
{
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
    codigo_orip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    matricula_inmobiliaria: {
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
    codigo_homologado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    interrelacionado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    codigo_homologado_fmi: {
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
    destinacion_economica: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    clase_suelo: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'lc_predio',
    tableName:'lc_predio',
    freezeTableName:true,
    timestamps:false
  });
  //lc_predio.belongsTo(lc_categoriasuelotipo, { foreignKey: 'categoria_suelo', targetKey: 't_id' });
  //lc_predio.belongsTo(lc_destinacioneconomicatipo, { foreignKey: 'destinacion_economica', targetKey: 't_id' });
  //lc_predio.belongsTo(lc_clasesuelotipo, { foreignKey: 'clase_suelo', targetKey: 't_id' });
  //lc_predio.belongsTo(col_unidadadministrativabasicatipo, { foreignKey: 'tipo', targetKey: 't_id' });
  //return lc_predio;
//};
module.exports=lc_predio;
