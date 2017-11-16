const chalk = require('chalk');
const Mongoose = require('mongoose');

// The variable "mongo" contains the MongoDB connection parameters.

const mongo = require('../config/mongodb');

// Here we connect to MongoDB.

if (mongo.username && mongo.password) {
  Mongoose.connect(`mongodb://${ mongo.username }:${ mongo.password }@${ mongo.url }/${ mongo.database }`);
} else {
  Mongoose.connect(`mongodb://${ mongo.url }/${ mongo.database }`);
}

// And we use the created connection to notify the user.

const connection = Mongoose.connection;

connection.once('open', () => console.log(chalk.white.bgGreen('Mongo client connected!')));
connection.on('error', error => console.log(chalk.white.bgRed('MongoDB error:'), error));

module.exports.mongoDBConnection = connection;
