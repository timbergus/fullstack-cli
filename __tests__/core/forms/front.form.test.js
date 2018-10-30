const frontForm = require('../../../src/core/forms/front.form');

test('Front form ask for a name if you don\'t set a project name.', () => {
  const response = frontForm[0].validate();
  expect.assertions(1);
  expect(response).toBe('Name is required');
});

test('Front form must return "true" if the project does not exist.', () => {
  const response = frontForm[0].validate('my-folder');
  expect.assertions(1);
  expect(response).toBeTruthy();
});

test('Front form must return "Project already exists" if the project exists.', () => {
  const response = frontForm[0].validate('src');
  expect.assertions(1);
  expect(response).toBe('Project already exists');
});
