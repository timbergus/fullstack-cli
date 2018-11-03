const backForm = require('../../src/forms/back.form');

test('Back form ask for a name if you don\'t set a project name.', () => {
  const response = backForm[0].validate();
  expect.assertions(1);
  expect(response).toBe('Name is required');
});

test('Back form must return "true" if the project does not exist.', () => {
  const response = backForm[0].validate('my-folder');
  expect.assertions(1);
  expect(response).toBeTruthy();
});

test('Back form must return "Project already exists" if the project exists.', () => {
  const response = backForm[0].validate('src');
  expect.assertions(1);
  expect(response).toBe('Project already exists');
});

test('Back form must find if "MongoDB" database has been selected.', () => {
  let response = backForm[3].when({
    ddbb: [{
      name: 'mongodb',
    }],
  });
  expect.assertions(2);
  expect(response).toEqual({ name: 'mongodb' });

  response = backForm[3].when({
    ddbb: [{
      name: 'mysql',
    }],
  });
  expect(response).toBeFalsy();
});
