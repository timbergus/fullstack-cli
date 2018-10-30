const chalk = require('chalk');

const { highlight, log } = require('../../../src/core/tools/message.tools');

test('Must highlight a fragment of a message.', () => {
  const message = highlight('Hello World!', 'World');
  expect.assertions(1);
  expect(message).toBe(`Hello ${chalk.bold.whiteBright('World')}!`);
});

test('Must return the message if there is no expression to highlight.', () => {
  const message = highlight('Hello World!');
  expect.assertions(1);
  expect(message).toBe('Hello World!');
});

let outputData = '';

beforeEach(() => {
  outputData = '';

  const storeLog = (inputs) => {
    outputData += inputs;
  };

  // eslint-disable-next-line no-console
  console.log = jest.fn(storeLog);
});

test('Must show a success message.', () => {
  log('Hello!', 'success');
  expect.assertions(2);
  expect(outputData).toMatch(/Hello!/);
  expect(outputData.indexOf('✅')).toBe(0);
});

test('Must show a warning message.', () => {
  log('Hello!', 'warning');
  expect.assertions(2);
  expect(outputData).toMatch(/Hello!/);
  expect(outputData.indexOf('⚠️')).toBe(0);
});

test('Must show a error message.', () => {
  log('Hello!', 'error');
  expect.assertions(2);
  expect(outputData).toMatch(/Hello!/);
  expect(outputData.indexOf('❌')).toBe(0);
});

test('Must show a info message.', () => {
  log('Hello!', 'info');
  expect.assertions(2);
  expect(outputData).toMatch(/Hello!/);
  expect(outputData.indexOf('❕')).toBe(0);
});

test('Must show a working message.', () => {
  log('Hello!', 'working');
  expect.assertions(2);
  expect(outputData).toMatch(/Hello!/);
  expect(outputData.indexOf('⚙️')).toBe(0);
});

test('Must show a default message.', () => {
  log('Hello!');
  expect.assertions(1);
  expect(outputData).toBe('Hello!');
});

test('Must return an empty string if there is no message.', () => {
  log();
  expect.assertions(1);
  expect(outputData).toBe('');
});
