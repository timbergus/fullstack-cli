const { readFileSync, writeFileSync, copySync } = require('fs-extra');
const { mkdirp } = require('mkdirp');
const chalk = require('chalk');
const Mustache = require('mustache');
const { resolve, dirname } = require('path');

const tool = dirname(require.main.filename);

const readFile = (file) => {
  try {
    return readFileSync(file, 'utf-8');
  } catch (error) {
    return false;
  }
};

const parseTemplate = (input, options) => Mustache
  .render(readFile(input) || '', options);

module.exports.createElement = (options, file, path) => {
  const { name } = options;

  const from = resolve(tool, ...path, file.name);
  const to = resolve(name, ...file.path);

  mkdirp.sync(to);

  console.log(chalk.yellow('creating :::'), chalk.white(file.name));

  const destination = resolve(to, file.name === 'gitignore' ? `.${file.name}` : file.name);

  if (file.template) {
    try {
      writeFileSync(destination, parseTemplate(from, options), (writeError) => {
        if (writeError) {
          console.log(`Cannot create "${file.name}"!`);
        }
      });
    } catch (error) {
      throw error;
    }
  } else {
    copySync(from, destination);
  }
};
