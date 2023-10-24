import { Sequelize } from 'sequelize';

const db = new Sequelize('crm ztechnology', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  });

  export default db;