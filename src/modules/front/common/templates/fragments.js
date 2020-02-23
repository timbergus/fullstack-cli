const { resolve } = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SystemBellPlugin = require('system-bell-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports.setMode = (mode = 'development') => ({ mode });

module.exports.setSourcemapMode = (mode = 'development') => ({
  devtool: mode === 'production' ? 'source-map' : 'eval',
});

module.exports.setEntry = () => ({
  entry: ["@babel/polyfill", resolve('src', 'index.jsx')],
});

module.exports.setOutput = () => {
  const plugin = new HtmlWebpackPlugin({
    template: resolve('src', 'index.html'),
    favicon: resolve('src', 'assets', 'icons', 'favicon.png'),
  });

  return {
    output: {
      path: resolve('dist'),
      filename: '[name].[hash].js',
    },
    plugins: [plugin],
  };
};

module.exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    contentBase: resolve('src', 'assets'),
    host, // Default to "localhost"
    port, // Default to 8080
    compress: true,
    overlay: true,
    open: true,
    inline: true,
    hot: true,
  },
});

module.exports.loadJSX = () => ({
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: resolve('src'),
      exclude: /node_modules/,
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
        include: resolve('src'),
        exclude: /node_modules/,
        use: 'graphql-import-loader',
      },
    ],
  },
});
{{/apollo}}

// To use PostCSS we need to add the "postcss-loader" and a configuration file
// called "postcss.config.js" with the plugins we are going to use.

module.exports.loadCSS = () => ({
  module: {
    rules: [{
      test: /\.css$/,
      include: resolve('src'),
      exclude: /node_modules/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ],
    }],
  },
});

module.exports.extractCSS = () => {
  const plugin = new MiniCssExtractPlugin();

  return {
    module: {
      rules: [{
        test: /\.css$/,
        include: resolve('src'),
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      }],
    },
    plugins: [plugin],
  };
};

module.exports.loadImages = ({ options }) => ({
  module: {
    rules: [{
      test: /\.(jpg|png|svg)$/,
      include: resolve('src'),
      exclude: /node_modules/,
      use: [
        {
          loader: 'image-trace-loader',
          options: {
            color: '#cccccc',
          },
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

module.exports.extensions = () => ({
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json'],
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
    new CleanWebpackPlugin(),
  ],
});
