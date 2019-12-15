const { validateProjectName } = require('../tools/file.tools');

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'name:',
    validate: (name) => validateProjectName(name),
  },
  {
    type: 'checkbox',
    name: 'ddbb',
    message: 'databases:',
    choices: [
      {
        name: 'mongodb',
        value: {
          name: 'mongodb',
          value: "const { mongoDBConnection } = require('./ddbb/mongodb');",
        },
        short: 'MongoDB',
      },
      {
        name: 'mysql',
        value: {
          name: 'mysql',
          value: "const { mySQLConnection } = require('./ddbb/mysql');",
        },
        short: 'MySQL',
      },
      {
        name: 'postgresql',
        value: {
          name: 'postgresql',
          value: "const { postgreSQLConnection } = require('./ddbb/postgresql');",
        },
        short: 'PostgreSQL',
      },
    ],
  },
  {
    type: 'confirm',
    name: 'websockets',
    message: 'websockets:',
  },
  {
    type: 'confirm',
    name: 'graphql',
    message: 'graphql:',
    when: (answers) => answers.ddbb.find((db) => db.name === 'mongodb'),
  },
  {
    type: 'input',
    name: 'version',
    message: 'version:',
    default: '1.0.0',
  },
  {
    type: 'input',
    name: 'description',
    message: 'description:',
  },
  {
    type: 'input',
    name: 'author',
    message: 'author:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'email:',
  },
  {
    type: 'input',
    name: 'license',
    message: 'license:',
    default: 'MIT',
  },
  {
    type: 'list',
    name: 'private',
    message: 'private:',
    default: 'true',
    choices: ['true', 'false'],
  },
];
