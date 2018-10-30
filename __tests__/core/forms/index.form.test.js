const indexForm = require('../../../src/core/forms/index.form');

test('Index for must be imported.', () => {
  expect.assertions(1);
  expect(indexForm).toBeTruthy();
});
