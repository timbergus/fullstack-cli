const { existsSync } = require('fs');

module.exports.fixHiddenFiles = (file) => {
  if (['gitignore'].indexOf(file) > -1) {
    return `.${file}`;
  }
  return file;
};

module.exports.validateProjectName = (name) => {
  if (name) {
    if (existsSync(`./${name}`)) {
      return 'Project already exists';
    }
    return true;
  }
  return 'Name is required';
};
