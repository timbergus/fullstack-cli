const chalk = require('chalk');
const postgresql = require('pg');
const config = require('../config/postgresql');

const connection = new postgresql.Client({
  user: config.user,
  password: config.password,
  host: config.host,
  port: config.port,
  database: config.database
});

connection.connect(error => {
  if (error) {
    throw error;
  }
  console.log(chalk.white.bgGreen('Connected to PostgreSQL!'));
});

// We export the connection in order to perform operations. For example:
//
// * postgreSQLConnection.end(error => {});
// * postgreSQLConnection.query(query, values, (error, result) => {});

module.exports.postgreSQLConnection = connection;
