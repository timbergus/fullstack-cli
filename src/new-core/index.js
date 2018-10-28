const { resolve } = require('path');
const { readFileSync, writeFileSync } = require('fs');

const pepe = readFileSync(resolve('src', 'new-core', 'test.jsx'), 'utf-8');

const output = pepe.split('\n');

output.push('// This is a comment');
output.push('');

writeFileSync(resolve(
  'src',
  'new-core',
  'test.output.jsx',
), output.join('\n'), 'utf-8');
