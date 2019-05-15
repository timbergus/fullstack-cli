const { resolve } = require('path');

const PurifyCSSPlugin = require('purifycss-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SystemBellPlugin = require('system-bell-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports.setMode = (mode = 'development') => ({ mode });

module.exports.setEntry = app => ({
  entry: { app },
});

module.exports.setSourcemapMode = (mode = 'development') => ({
  devtool: mode === 'production' ? 'source-map' : 'eval',
});

module.exports.setOutput = path => {
  const plugin = new HtmlWebpackPlugin({
    template: resolve('src', 'index.html'),
  });

  return {
    output: {
      path,
      filename: '[name].[chunkhash].js',
    },
    plugins: [plugin],
  };
};

module.exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    contentBase: resolve('src', 'assets'),
    compress: true,
    host, // Defaults to "localhost"
    port, // Defaults to 8080
    overlay: true,
  },
});

module.exports.loadJSX = ({ include, exclude } = {}) => ({
  module: {
    rules: [{
      test: /\.jsx?$/,
      include,
      exclude,
      use: ['babel-loader'],
    }],
  },
});
{{#apollo}}

module.exports.loadGraphQl = () => ({
  module: {
    rules: [
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: 'graphql-import-loader',
      },
    ],
  },
});
{{/apollo}}

// To use PostCSS we need to add the "postcss-loader" and a configuration file
// called "postcss.config.js" with the plugins we are going to use.

module.exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [{
      test: /\.css$/,
      include,
      exclude,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ],
    }],
  },
});

module.exports.extractCSS = ({ include, exclude, use } = {}) => {

  const plugin = new ExtractTextPlugin({
    allChunks: true,
    filename: '[name].[chunkhash].css',
  });

  return {
    module: {
      rules: [{
        test: /\.css$/,
        include,
        exclude,
        use: plugin.extract({
          use,
          fallback: 'style-loader',
        }),
      }],
    },
    plugins: [plugin],
  };
};

module.exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [{
      test: /\.(jpg|png|svg)$/,
      include,
      exclude,
      use: [
        {
          loader: 'image-trace-loader',
          options: {
            color: '#cccccc',
          }
        },
        {
          loader: 'url-loader',
          options,
        },
      ],
    }],
  },
});

module.exports.notify = () => ({
  plugins: [
    new SystemBellPlugin(),
    new WebpackNotifierPlugin({
      contentImage: resolve('src', 'assets', 'icons', 'favicon.png'),
    }),
  ],
});

module.exports.purifyCSS = paths => {
  const plugin = new PurifyCSSPlugin({ paths });
  return {
    plugins: [plugin],
  };
};

module.exports.extensions = () => ({
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
});

module.exports.alias = () => ({
  resolve: {
    alias: {
      images: resolve('src', 'assets', 'images'),
      reducers: resolve('src', 'reducers'),
      components: resolve('src', 'components'),
    },
  },
});

module.exports.getAssets = () => ({
  plugins: [
    new CopyWebpackPlugin([
      {
        from: resolve('src', 'assets'),
        to: resolve('dist', 'assets'),
      },
    ]),
  ],
});

module.exports.cleanDist = () => ({
  plugins: [
    new CleanWebpackPlugin('dist'),
  ],
});
