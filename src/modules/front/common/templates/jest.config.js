// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const { resolve } = require('path');

module.exports = {
  notify: false,
  rootDir: resolve(),
  testURL: 'http://localhost/',
  testRegex: '/*.test.jsx?$',

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Coverage
  collectCoverage: true,
  collectCoverageFrom: ['components', 'reducers'].map(module => `src/${module}/**/*.{js,jsx}`),
  coverageDirectory: '<rootDir>/__tests__/coverage',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ['lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  testPathIgnorePatterns: ['/node_modules/'],

  // Modules location.
  moduleDirectories: ['<rootDir>/node_modules'],

  setupFiles: ['<rootDir>/config/tests/test-setup.js'],

  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/tests/mediaFileTransformer.js',
  },

  moduleNameMapper: {
    '^.+\\.s?css$': '<rootDir>/config/tests/mocks/style.mock.js',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/tests/mocks/file.mock.js',
  },
};
