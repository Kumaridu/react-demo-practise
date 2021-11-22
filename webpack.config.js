//const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  console.log('Running in mode : ', env);

  return {
    context: path.resolve(__dirname, './src'),
    entry: path.join(__dirname, 'src', 'index.js'),

    output: {
      filename:
        env == 'dev'
          ? '[name].dev.bundle.js'
          : '[name].[contenthash].bundle.js',
      chunkFilename:
        env == 'dev'
          ? '[name].dev.bundle.js'
          : '[name].[contenthash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    devtool: 'source-map',

    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },

    module: {
      rules: [
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
      }),
    ],
  };
};
