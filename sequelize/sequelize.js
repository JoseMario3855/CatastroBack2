
const { Sequelize } = require('sequelize');
const config = require('./config.json');


//Crear instancia de sequelize 
const sequelize = new Sequelize(config.development); 

//Cargar Modelos
const lc_predio = require('.models/lc_predio');
const col_areavalor = require('.models/col_areavalor');
const col_baunitcomointeresado = require ('.models/col_baunitcomointeresado');
const col_baunitfuente = require ('.models/col_baunitfuente');
const col_masccl = require ('.models/col_masccl');
const col_miembros = require ('.models/col_miembros');
const col_responsablefuente = require ('.models/col_responsablefuente');
const col_topografofuente = require ('.models/col_topografofuente');
const col_uebaunit = require ('.models/col_uebaunit');
const col_uefuente = require ('.models/col_uenfuente');
const col_unidadfuente = require ('.models/col_unidadfuente');
const col_volumenvalor = require ('.models/col_volumenvalor');
const extdireccion = require ('.models/extdireccion');
const lc_condicionprediotipo = require ('.models/lc_condicionprediotipo');
const lc_construccion = require ('.models/lc_construccion');
const lc_datosadicionaleslevantamientocatastral = require ('.models/lc_datosadicionaleslevantamientocatastral');
const lc_datosphcondominio = require ('.models/lc_datosphcondominio');
const lc_derecho = require ('.models/lc_derecho');
const lc_grupoetnicotipo = require ('.models/lc_grupoetnicotipo');
const lc_interesado = require ('.models/lc_interesado');
const lc_interesadocontacto = require ('.models/lc_interesadocontacto');
const lc_interesadodocumentotipo = require ('.models/lc_interesadodocumentotipo');
const lc_interesadotipo = require ('.models/lc_interesadotipo');
const lc_ofertasmercadoinmobiliario = require ('.models/lc_ofertasmercadoinmobiliario');

//Se inicializa los modelos 

lc_predio.init(sequelize);
col_areavalor.init(sequelize);
col_baunitcomointeresado.init(sequelize);
col_baunitfuente.init(sequelize);
col_miembros.init(sequelize);
col_responsablefuente.init(sequelize);
col_topografofuente.init(sequelize);
col_uebaunit.init(sequelize);
col_uefuente.init(sequelize);
col_unidadfuente.init (sequelize);
col_volumenvalor.init (sequelize);
extdireccion.init (sequelize);
lc_condicionprediotipo.init (sequelize);
lc_construccion.init (sequelize);
lc_datosadicionaleslevantamientocatastral.init (sequelize);
lc_datosphcondominio.init (sequelize);
lc_derecho.init (sequelize);
lc_grupoetnicotipo.init (sequelize);
lc_interesado.init (sequelize);
lc_interesadocontacto.init (sequelize);
lc_interesadodocumentotipo.init (sequelize);
lc_interesadotipo.init (sequelize);
lc_interesadotipo.init (sequelize);

module.exports = sequelize;