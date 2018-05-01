module.exports = {
  notify: true,
  testRegex: '/*.test.js$',
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coverageDirectory: '__reports__/test-coverage',
  collectCoverageFrom: [
    'src/**/*.(js|jsx)'
  ],
  moduleNameMapper: {
    '^reducers(.*)$': '<rootDir>/src/app/reducers/$1',
    '^components(.*)$': '<rootDir>/src/app/components/$1'
  }
};
