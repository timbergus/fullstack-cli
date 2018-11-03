const { fixHiddenFiles, validateProjectName } = require('../../../src/core/tools/file.tools');

describe('File tools', () => {
  test('should add a point to gitignore files.', () => {
    const fileName01 = 'gitignore';
    const fileName02 = 'index.js';
    expect.assertions(2);
    expect(fixHiddenFiles(fileName01)).toBe('.gitignore');
    expect(fixHiddenFiles(fileName02)).toBe('index.js');
  });

  test('should warning if a project already exists.', () => {
    const folderName = 'src';
    expect.assertions(1);
    expect(validateProjectName(folderName)).toBe('Project already exists');
  });

  test('should return true if a project does not exist.', () => {
    const folderName = 'inexistent';
    expect.assertions(1);
    expect(validateProjectName(folderName)).toBe(true);
  });

  test('should warning if you don\'t pass a project name.', () => {
    expect.assertions(1);
    expect(validateProjectName()).toBe('Name is required');
  });
});
