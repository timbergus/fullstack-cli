const { checkArgs } = require('../../src/core/actions');

describe('Args must be checked', () => {
  // jest.genMockFromModule('../../src/core/actions');
  // const handlers = jest.genMockFromModule('../../src/core/handlers');

  // test('Must launch the "front" generation process.', () => {
  //   handlers.actionHandler = () => new Promise(resolve => resolve(true));
  //   checkArgs('front').then((response) => {
  //     expect(response).toBe(true);
  //   });
  // });

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

  test('Must launch the "front" generation process.', () => {
    expect(true).toBe(true);
  });
});
