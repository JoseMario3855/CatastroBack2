import Sequelize from 'sequelize'

export const sequelize = new Sequelize ('catastro','postgres','12345',{
    host:'localhost',
    dialect:'postgres'

})