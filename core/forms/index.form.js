/**
 * This is an array of options to build the form.
 *
 * * Type: the step form.
 * * Name: the name of the variable returned with the results.
 * * Message: what you prompt to the user.
 * * Default: default value to be selected.
 * * Choices: choices for the user.
 *
 * @type {Array}
 */

module.exports = [{
  type: 'list',
  name: 'command',
  message: 'What do you want to create?',
  default: 'front',
  choices: ['front', 'back']
}];
