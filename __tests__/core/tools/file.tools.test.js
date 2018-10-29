const { fixHiddenFiles } = require('../../../src/core/tools/file.tools');

it('Must work', () => {
  const fileName01 = 'gitignore';
  const fileName02 = 'index.js';
  expect(fixHiddenFiles(fileName01)).toBe('.gitignore');
  expect(fixHiddenFiles(fileName02)).toBe('index.js');
});
