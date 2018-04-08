module.exports = {
  rules: {
    'block-no-empty': null,
    'color-no-invalid-hex': true,
    'comment-empty-line-before': ['always', {
      ignore: ['stylelint-commands', 'after-comment']
    }],
    'declaration-colon-space-after': 'always',
    indentation: 2,
    'max-empty-lines': 2,
    'rule-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['after-comment']
    }],
    'string-quotes': 'single',
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'media-query-list-comma-space-after': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-no-important': true,
    'function-calc-no-unspaced-operator': true,
    'function-url-no-scheme-relative': true,
    'length-zero-no-unit': true,
    'max-nesting-depth': 2,
    'unit-case': 'lower',
    'unit-no-unknown': true
  }
};
