const { validateProjectName } = require('../tools/file.tools');

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'name:',
    validate: name => validateProjectName(name),
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
