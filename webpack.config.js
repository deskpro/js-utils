const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'production',

  entry: {
    index: './src/index.js'
  },

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = config;