module.exports.fixHiddenFiles = (file) => {
  if (['gitignore'].indexOf(file) > -1) {
    return `.${file}`;
  }
  return file;
};
