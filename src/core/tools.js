const fs = require('fs');
const chalk = require('chalk');
const Mustache = require('mustache');
const { resolve, dirname } = require('path');

const tool = dirname(require.main.filename);

const readFile = (file) => {
  try {
    return fs.readFileSync(file, 'utf-8');
  } catch (error) {
    return false;
  }
};

const parseTemplate = (input, options) => Mustache
  .render(readFile(input) || '', options);

module.exports.createElement = (options, file, path) => {
  const { name } = options;

  const from = resolve(tool, ...path, file.name);
  const to = resolve(name, ...file.path, file.name === 'gitignore'
    ? `.${file.name}` : file.name);

  file.path.reduce((p, folder) => {
    try {
      fs.mkdirSync(resolve(p, folder));
    } catch (error) {
      throw error;
    }
    return resolve(p, folder);
  }, name);

  console.log(chalk.yellow('creating :::'), chalk.white(file.name));

  if (file.template) {
    try {
      fs.writeFileSync(to, parseTemplate(from, options), (writeError) => {
        if (writeError) {
          console.log(`Cannot create "${file.name}"!`);
        }
      });
    } catch (error) {
      throw error;
    }
  } else {
    fs.createReadStream(from).pipe(fs.createWriteStream(to));
  }
};
