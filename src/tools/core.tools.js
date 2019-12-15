const { readFileSync, writeFileSync, copySync } = require('fs-extra');
const { mkdirp } = require('mkdirp');
const Mustache = require('mustache');
const { resolve, dirname } = require('path');
const { fixHiddenFiles } = require('./file.tools');

const { log } = require('./message.tools');

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

  log(`${file.name} created!`, 'success');

  const destination = resolve(to, fixHiddenFiles(file.name));

  if (file.template) {
    writeFileSync(destination, parseTemplate(from, options), (writeError) => {
      if (writeError) {
        log(`Cannot create "${file.name}"!`, 'error');
      }
    });
  } else {
    copySync(from, destination);
  }
};

// Just for testing.

module.exports.readFile = readFile;
module.exports.parseTemplate = parseTemplate;
