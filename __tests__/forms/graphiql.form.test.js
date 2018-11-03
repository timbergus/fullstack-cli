const graphiqlForm = require('../../src/forms/graphiql.form');

test('GraphiQL form ask for a name if you don\'t set a project name.', () => {
  const response = graphiqlForm[0].validate();
  expect.assertions(1);
  expect(response).toBe('Name is required');
});

test('GraphiQL form must return "true" if the project does not exist.', () => {
  const response = graphiqlForm[0].validate('my-folder');
  expect.assertions(1);
  expect(response).toBeTruthy();
});

test('GraphiQL form must return "Project already exists" if the project exists.', () => {
  const response = graphiqlForm[0].validate('src');
  expect.assertions(1);
  expect(response).toBe('Project already exists');
});
