const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// This Config Exports Project for Build
module.exports = merge(common, {  

  mode: 'production',

  // TODO create as copy of 'wordpress'
  
});