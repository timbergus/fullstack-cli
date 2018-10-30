const { fixHiddenFiles } = require('../../../src/core/tools/file.tools');

test('Must add a point to gitignore files.', () => {
  const fileName01 = 'gitignore';
  const fileName02 = 'index.js';
  expect.assertions(2);
  expect(fixHiddenFiles(fileName01)).toBe('.gitignore');
  expect(fixHiddenFiles(fileName02)).toBe('index.js');
});
