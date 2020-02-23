const merge = require('webpack-merge');

const {
  setMode,
  setEntry,
  setOutput,
  setSourcemapMode,
  devServer,
  loadJSX,
  loadCSS,
  extractCSS,
  loadImages,
  notify,
  extensions,
  alias,
  getAssets,
  cleanDist,
  {{#apollo}}
  loadGraphQl,
  {{/apollo}}
} = require('./config/webpack/fragments');

module.exports = (env) => merge([
  env.dev && setMode('development'),
  env.prod && setMode('production'),
  env.dev && setSourcemapMode('development'),
  env.prod && setSourcemapMode('production'),
  setEntry(),
  setOutput(),
  env.dev && devServer({
    host: 'localhost',
    port: 3000,
  }),
  loadJSX(),
  {{#apollo}}
  loadGraphQl(),
  {{/apollo}}
  env.dev && loadCSS(),
  env.prod && extractCSS(),
  loadImages({
    options: {
      limit: 25000,
      name: '[name].[hash].[ext]',
    },
  }),
  notify(),
  extensions(),
  alias(),
  getAssets(),
  env.prod && cleanDist(),
]);
