/* globals test, expect */

const { parseBearer } = require('./headers');

test('Parse bearer...', () => {

  let noHeader = {
    headers: {}
  };

  let emptyHeader = {
    headers: {
      authorization: ''
    }
  };

  let goodHeader = {
    headers: {
      authorization: 'Bearer 123456'
    }
  };

  expect(parseBearer(noHeader)).toBe(null);
  expect(parseBearer(emptyHeader)).toBe(null);
  expect(parseBearer(goodHeader)).toBe('123456');
});
