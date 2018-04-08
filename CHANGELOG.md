# Changelog

All notable changes to this project will be documented in this file.

## [0.1.5] - 2018-08-04

### Added (MAIN)

* New CHANGELOG.md document.
* Beautify config file for IDE.

### Changed (MAIN)

* NPM by [Yarn](https://yarnpkg.com/en/).

### Added (FRONT)

* [Flow](https://flow.org/) for static type checking.
* New modular WebPack built using [webpack-merge](https://github.com/survivejs/webpack-merge).
* A `.flowconfig` file.
* Updated libraries.
* A style linter with its configuration file `stylelint.config.js`.

### Changed (FRONT)

* Test architecture moving the test files from the components folder to a \_\_tests\_\_ folder.
* Jest configuration has been moved from `package.json` to `jest.config.js`.
* Test script to add `eslint`, `stylelint`, and `flow`.
* NPM scripts to add test before `start` and `build` the application.

### Deprecated (FRONT)

* PropTypes in favor of Flow type checking.
