const { actionHandler } = require('./handlers');

/**
 * This function check the first form argument, and choose an action to solve
 * the user selection.
 *
 * @param  {String} command The project type selected by the user
 */

module.exports.checkArgs = command => new Promise((resolve, reject) => {
  switch (command) {
    case 'front':
      actionHandler('front').then(
        response => resolve(response),
        error => reject(error),
      );
      break;
    case 'back':
      actionHandler('back').then(
        response => resolve(response),
        error => reject(error),
      );
      break;
    case 'graphiql':
      actionHandler('graphiql').then(
        response => resolve(response),
        error => reject(error),
      );
      break;
    case 'catalog':
      actionHandler('catalog').then(
        response => resolve(response),
        error => reject(error),
      );
      break;
    default:
      reject(new Error('COMMAND NOT FOUND'));
      break;
  }
});
