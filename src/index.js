#!/usr/bin/env node

const chalk = require('chalk');
const inquirer = require('inquirer');

const { checkArgs } = require('./core/actions');

// This is the first form that the user sees.
const indexForm = require('./core/forms/index.form');

inquirer.prompt(indexForm)
  .then((options) => {
    checkArgs(options.command)
      .then((response) => {
        if (Array.isArray(response)) {
          response.map(line => console.log(chalk.cyan(line)));
        } else {
          console.log(chalk.cyan(response));
        }
      })
      .catch(error => console.log(chalk.red(error)));
  })
  .catch(error => console.log(chalk.red(error)));
