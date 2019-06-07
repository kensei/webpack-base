'use strict';

const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: './src/index.js',
  mode: "development",

  output: {
    filename: "main.js"
  },
  devServer: {
    contentBase: "dist",
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },

      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                // ES2019 -> ES5
                "@babel/preset-env"
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    // Webpackで利用するときの設定
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  plugins: [
    // Vueを読み込めるようにするため
    new VueLoaderPlugin()
  ]
};
