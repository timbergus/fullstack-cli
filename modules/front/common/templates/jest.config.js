module.exports = {
  testRegex: '/*.test.js$',
  verbose: false,
  notify: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.(js|jsx)'
  ],
  coverageDirectory: '__reports__/test-coverage',
  coverageReporters: ['lcov'],
  moduleNameMapper: {
    '^reducers(.*)$': '<rootDir>/src/app/reducers/$1',
    '^components(.*)$': '<rootDir>/src/app/components/$1'
  }
};
