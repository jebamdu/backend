import pkg from 'pg';
const {Client} = pkg;



import { Sequelize } from 'sequelize';

const dbconfigData = {
    host: 'localhost',
    user: 'postgres',
    // password: 'Anbuamma01@',
    database: 'postgres'
}




const sequelize = new Sequelize(dbconfigData.database, dbconfigData.user, dbconfigData.password, {
    host: 'localhost', // Replace with your database host
    dialect: 'postgres', // Specifies PostgreSQL
    logging: false, 
    password:'Anbuamma01@'
});

export default sequelize;