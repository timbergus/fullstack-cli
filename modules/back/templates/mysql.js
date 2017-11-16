const chalk = require('chalk');
const mysql = require('mysql');
const config = require('../config/mysql');

const connection = mysql.createConnection({
  user: config.user,
  password: config.password,
  host: config.host
});

connection.connect(error => {
  if (error) {
    throw error;
  }
  console.log(chalk.white.bgGreen('Connected to MySQL!'));
});

// We export the connection in order to perform operations. For example:
//
// * mySQLConnection.end(error => {});
// * mySQLConnection.query(query, (error, result) => {});

module.exports.mySQLConnection = connection;
