const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(
process.env.DB_NAME,
process.env.DB_USER,
process.env.DB_PASSWORD,
{
  host: process.env.MYSQLHOST,
  dialect: 'mysql',
  port: process.env.MYSQLPORT,
}
);
module.exports = sequelize;
