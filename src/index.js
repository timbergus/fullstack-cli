#!/usr/bin/env node

const inquirer = require('inquirer');

const { log } = require('./core/tools/message.tools');

const { checkArgs } = require('./core/actions');

// This is the first form that the user sees.
const indexForm = require('./core/forms/index.form');

inquirer.prompt(indexForm)
  .then((options) => {
    checkArgs(options.command)
      .then((response) => {
        if (Array.isArray(response)) {
          log();
          response.forEach(line => log(line, 'info'));
        } else {
          log();
          log(response, 'info');
        }
      })
      .catch(error => log(error, 'error'));
  })
  .catch(error => log(error, 'error'));
