const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

// This Config Exports the FIles with Source Maps for Wordpress Development
module.exports = merge(common, {
  
  mode: 'development',
  devtool: 'inline-source-map', // Use Source-Maps for Debug

  plugins: [
  // Plugin to Reload Browser According to Proxy 127.0.0.1:8080 (Wordpress PHP)
  new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: '127.0.0.1:8080',
      files: [
        {
          match: [
            '**/*.php',
            '**/*.js',
            '**/*.css',
          ],
        },
      ],
      notify: false,
    },
    {
      reload: true,
    }),

    // Extract CSS
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    // Copy all Files to Entry Output Path except Github, Webpack and 
    // Original Sources (Before Webpack Processing)
    new CopyPlugin([
      {
        from: '../',
        to: '../',
        ignore: [
          '_webpack/**',
          'assets/**',
          '.git/**',
        ],
      },
    ]),
  ],
  module: {
    rules: [
      {
        // Listen for Sass and CSS
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
            },
          },
          // Source Map shows Path in Chrome for Testing
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
});