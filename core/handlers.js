const fs = require('fs');
const chalk = require('chalk');
const inquirer = require('inquirer');
const child_process = require('child_process');

const { createElement } = require('./tools');

// These are the forms for each project type.
const forms = {
  front: require('./forms/front.form'),
  back: require('./forms/back.form'),
  graphiql: require('./forms/graphiql.form')
}

module.exports.actionHandler = type => new Promise((resolve, reject) => {
  inquirer.prompt(forms[type])
    .then(options => {

      if (options.ddbb) {
        options.ddbb.forEach(db => {
          Object.assign(options, {
            [db.name]: db.value
          });
        });

        delete options.ddbb;
      }

      // First we create the project folder.

      fs.mkdirSync(`./${ options.name }`);

      // Then we create the common files (no dependencies).

      require(`../modules/${ type }/common/config.json`).forEach(file => {
        createElement(options, file, ['modules', type, 'common', 'templates']);
      });

      /**
       * We create the project's files. We need to add only the files that are
       * required:
       *
       * !file.dependency || options[file.dependency] === true
       */

      require(`../modules/${ type }/config.json`).forEach(file => {
        if (!file.dependency || options[file.dependency]) {
          createElement(options, file, ['modules', type, 'templates'], type);
        }
      });

      // Then we launch the command line tasks.

      // First we initilize an empty git repository.

      try {
        child_process.execSync(`cd ./${ options.name } && git init`);
      } catch (error) {
        reject('Cannot create git repository!');
      }

      // And then we install the dependencies.

      console.log(chalk.green('Installing dependencies!'));

      try {
        child_process.execSync(`cd ./${ options.name } && npm install`);
      } catch (error) {
        reject('Cannot install dependencies!');
      }

      // Finally we send upstream the result of the process.

      resolve([
        `Project "${ options.name }" created!\n`,
        'Instructions:',
        '* To start the project:\tnpm start',
        '* To build the project:\tnpm run build',
        '* To create the docs:\tnpm run docs',
        '* To check the code:\tnpm run lint',
        '* To test the project:\tnpm test',
      ]);
    })
    .catch(error => {
      reject('Cannot create project!');
    });
});
