const chalk = require('chalk');
const { Client } = require('pg');
const config = require('../config/postgresql');

const connection = new Client(config);

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
