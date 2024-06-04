const { Sequelize } = require('sequelize');
const config = require('../config/config.json');
//const lc_predio = require('../models/lc_predio');
//const lc_categoriasuelotipo = require ('../models/lc_categoriasuelotipo');
//const lc_destinacioneconomicatipo = require ('../models/lc_destinacioneconomicatipo');
//const lc_clasesuelotipo = require ('../models/lc_clasesuelotipo');
//const col_unidadadministrativabasicatipo = require ('../models/col_unidadadministrativabasicatipo');

// Crear instancia de Sequelize
const sequelize = new Sequelize(config.development);

// Inicializar el modelo lc_predio con la instancia de Sequelize
//lc_predio.init(sequelize);
//lc_categoriasuelotipo.init(sequelize);
//lc_destinacioneconomicatipo.init(sequelize);
//lc_clasesuelotipo.init(sequelize);
//ol_unidadadministrativabasicatipo.init(sequelize);

// Exportar la instancia de Sequelize
module.exports = sequelize;