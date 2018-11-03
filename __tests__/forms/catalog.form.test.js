const catalogForm = require('../../src/forms/catalog.form');

test('Catalog form ask for a name if you don\'t set a project name.', () => {
  const response = catalogForm[0].validate();
  expect.assertions(1);
  expect(response).toBe('Name is required');
});

test('Catalog form must return "true" if the project does not exist.', () => {
  const response = catalogForm[0].validate('my-folder');
  expect.assertions(1);
  expect(response).toBeTruthy();
});

test('Catalog form must return "Project already exists" if the project exists.', () => {
  const response = catalogForm[0].validate('src');
  expect.assertions(1);
  expect(response).toBe('Project already exists');
});
