const indexForm = require('../../src/forms/index.form');

test('Index for must be imported.', () => {
  expect.assertions(1);
  expect(indexForm).toBeTruthy();
});
