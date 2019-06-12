'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/js/index.js',
  mode: isDev ? "development" : "production",

  output: {
    filename: path.join('assets', 'js', isDev ? 'bundle.js' : 'bundle.[hash:8].js')
  },
  devServer: {
    contentBase: "dist",
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: false }]]
            }
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  resolve: {
  },
  devtool: 'source-map',
  plugins: [
    new StyleLintPlugin('./stylelint.config.js'),
    new HtmlWebpackPlugin({
      filename: path.resolve('dist', 'index.html'),
      template: path.resolve('src', 'index.html')
    })
  ],
  devServer: {
    host: "0.0.0.0",
    port: 8979,
    inline: true,
    disableHostCheck: true
  }
};
