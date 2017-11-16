module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended'],
  rules: {
    eqeqeq: 2,
    curly: 0,
    'no-console': 1,
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': ['error']
  }
}
