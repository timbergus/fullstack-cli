module.exports = {
  title: 'New React Component Library',
  serverPort: 3100,
  assetsDir: ['src/assets'],
  ribbon: {
    url: 'https://github.com/timbergus/react-library-template',
    text: 'Fork me on GitHub',
  },
  // This line is necessary to ignore the styled components.
  ignore: ['/**/*.styled.js'],
  skipComponentsWithoutExample: true,
  template: {
    favicon: 'favicon.ico',
  },
};
