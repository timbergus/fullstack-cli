const { checkArgs } = require('../../src/core/actions');

describe('Args must be checked', () => {
  jest.genMockFromModule('../../src/core/actions');
  const handlers = jest.genMockFromModule('../../src/core/handlers');

  handlers.actionHandler = () => new Promise(resolve => resolve(true));

  test('Must launch the "front" generation process.', () => {
    checkArgs('front').then((response) => {
      expect(response).toBe(true);
    });
  });

  // test('Must launch the "back" generation process.', () => {
  //   checkArgs('back').then((response) => {
  //     expect(response).toBe(true);
  //   });
  // });

  // test('Must launch the "graphiql" generation process.', () => {
  //   checkArgs('graphiql').then((response) => {
  //     expect(response).toBe(true);
  //   });
  // });

  // test('Must launch the "catalog" generation process.', () => {
  //   checkArgs('catalog').then((response) => {
  //     expect(response).toBe(true);
  //   });
  // });

  // test('Must launch an error if the option does not exists.', () => {
  //   checkArgs('').catch((error) => {
  //     expect(error).toBeDefined();
  //   });
  // });
});
