import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import  col_fuenteespacialtipo  from './col_fuenteespacialtipo.js';
import  col_estadodisponibilidadtipo  from './col_estadodisponibilidadtipo.js';
import ci_forma_presentacion_codigo  from './ci_forma_presentacion_codigo.js';

   
    
        
        
  const lc_fuenteespacial = sequelize.define('penol.lc_fuenteespacial', {

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
      metadato:{
        type: DataTypes.STRING,
        allowNull:true
      },
      nombre:{
        type: DataTypes.STRING,
        allowNull:true
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      estado_disponibilidad:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      tipo_principal:{
        type: DataTypes.INTEGER,
        allowNull:true
      },
      fecha_documento_fuente:{ 
        type: DataTypes.DATE,
        allowNull: true
      },
      espacio_de_nombres: {
        type: DataTypes.STRING,
        allowNull: false
      },
      local_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
  }, {
    freezeTableName: true,
    schema: 'penol',
    tableName:  'lc_fuenteespacial',
  });
    lc_fuenteespacial.hasMany(col_fuenteespacialtipo,{foreignKey:'tipo',sourceKey:'t_id'});
    col_fuenteespacialtipo.belongsTo(lc_fuenteespacial,{foreignKey:'tipo',targetKey:'t_id'});

    lc_fuenteespacial.belongsTo(col_estadodisponibilidadtipo,{foreignKey:'estado_disponibilidad',sourceKey:'t_id'});
    col_estadodisponibilidadtipo.belongsTo(lc_fuenteespacial,{foreignKey:'estado_disponibilidad',targetKey:'t_id'});
    
    lc_fuenteespacial.belongsTo(ci_forma_presentacion_codigo,{foreignKey:'tipo_principal',sourceKey:'t_id'});
    ci_forma_presentacion_codigo.belongsTo(lc_fuenteespacial,{foreignKey:'tipo_principal',targetKey:'t_id'});
 
  export default lc_fuenteespacial;
