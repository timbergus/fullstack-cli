const fs = require('fs');
const chalk = require('chalk');
const inquirer = require('inquirer');
const childProcess = require('child_process');

const { createElement } = require('./tools');

// These are the forms for each project type.

const front = require('./forms/front.form');
const back = require('./forms/back.form');
const graphiql = require('./forms/graphiql.form');
const catalog = require('./forms/catalog.form');

const forms = {
  front,
  back,
  graphiql,
  catalog,
};

module.exports.actionHandler = type => new Promise((resolve, reject) => {
  inquirer.prompt(forms[type])
    .then((options) => {
      const opt = { ...options };
      if (opt.ddbb) {
        opt.ddbb.forEach(db => Object.assign(opt, {
          [db.name]: db.value,
        }));

        delete opt.ddbb;
      }

      // First we create the project folder.

      fs.mkdirSync(`./${opt.name}`);

      // Then we create the common files (no dependencies).

      /* eslint-disable-next-line global-require, import/no-dynamic-require */
      require(`../modules/${type}/common/config.json`).forEach((file) => {
        createElement(opt, file, ['modules', type, 'common', 'templates']);
      });

      /**
       * We create the project's files. We need to add only the files that are
       * required:
       *
       * !file.dependency || opt[file.dependency] === true
       */

      /* eslint-disable-next-line global-require, import/no-dynamic-require */
      require(`../modules/${type}/config.json`).forEach((file) => {
        if (!file.dependency || opt[file.dependency]) {
          createElement(opt, file, ['modules', type, 'templates'], type);
        }
      });

      // Then we launch the command line tasks.

      // First we initialize an empty git repository.

      try {
        childProcess.execSync(`cd ./${opt.name} && git init`);
      } catch (error) {
        reject(new Error('Cannot create git repository!'));
      }

      // And then we install the dependencies.

      console.log(chalk.green('Installing dependencies!'));

      try {
        childProcess.execSync(`cd ./${opt.name} && npm install`);
      } catch (error) {
        reject(new Error('Cannot install dependencies!'));
      }

      // Finally we send upstream the result of the process.

      resolve([
        `Project "${opt.name}" created!\n`,
        'Instructions:',
        '* To start the project:\tnpm start',
        '* To build the project:\tnpm run build',
        '* To create the docs:\tnpm run docs',
        '* To check the code:\tnpm run lint',
        '* To test the project:\tnpm test',
      ]);
    })
    .catch(() => reject(new Error('Cannot create project!')));
});
