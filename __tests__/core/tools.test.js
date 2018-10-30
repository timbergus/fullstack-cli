const { existsSync } = require('fs');
const { readFile, parseTemplate, createElement } = require('../../src/core/tools');

test('parseTemplate must return a proper content.', () => {
  const options = {
    element: 'template',
  };
  const response = parseTemplate('./config/tests/mocks/template.mock.txt', options);
  expect(response).toBe('This is a template.\n');
});

test('parseTemplate must return a proper content.', () => {
  const options = {
    element: 'template',
  };
  const response = parseTemplate('', options);
  expect(response).toBe('');
});

test('readFile must return a file content in "UTF-8".', () => {
  const response = readFile('./config/tests/mocks/template.mock.txt');
  expect(response).toBe('This is a {{ element }}.\n');
});

test('readFile must return a file content in "UTF-8".', () => {
  const options = {
    name: '__tests__/results',
  };

  const file = {
    name: 'template.mock.txt',
    path: [],
  };

  const path = ['../..', 'config', 'tests', 'mocks'];

  createElement(options, file, path);

  expect(existsSync('./__tests__/results/template.mock.txt'))
    .toBe(true);
});

test('readFile must return a file parsed if template.', () => {
  const options = {
    name: '__tests__/results',
    element: 'template',
  };

  const file = {
    name: 'file-to-copy.mock.txt',
    path: [],
    template: true,
  };

  const path = ['../..', 'config', 'tests', 'mocks'];

  createElement(options, file, path);

  expect(existsSync('./__tests__/results/file-to-copy.mock.txt'))
    .toBe(true);
});
