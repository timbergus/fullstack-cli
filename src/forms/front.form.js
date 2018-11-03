const { validateProjectName } = require('../tools/file.tools');

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'name:',
    validate: name => validateProjectName(name),
  },
  {
    type: 'confirm',
    name: 'websockets',
    message: 'websockets:',
    default: true,
  },
  {
    type: 'confirm',
    name: 'material-ui',
    message: 'material-ui:',
    default: true,
  },
  {
    type: 'confirm',
    name: 'redux',
    message: 'redux:',
    default: true,
  },
  {
    type: 'confirm',
    name: 'routes',
    message: 'routes:',
    default: true,
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
