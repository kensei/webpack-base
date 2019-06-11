'use strict';

const devConfig = () => {
  return {
    parser: require('postcss-scss'),
    plugins: [
      require('postcss-browser-reporter')
    ]
  };
};

const prodConfig = () => {
  return {
    parser: require('postcss-scss'),
    plugins: [
      require('autoprefixer')
    ]
  };
};

module.exports = process.env.NODE_ENV !== 'production' ? devConfig : prodConfig;
