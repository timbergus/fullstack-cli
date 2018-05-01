module.exports = {
  notify: true,
  testRegex: '/*.test.js$',
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coverageDirectory: '__reports__/test-coverage',
  collectCoverageFrom: [
    'src/**/*.js'
  ],
  moduleNameMapper: {
    '^ddbb(.*)$': '<rootDir>/src/app/ddbb/$1',
    '^handlers(.*)$': '<rootDir>/src/app/handlers/$1',
    '^utils(.*)$': '<rootDir>/src/app/utils/$1',
    '^config(.*)$': '<rootDir>/src/app/config/$1'
  }
};
