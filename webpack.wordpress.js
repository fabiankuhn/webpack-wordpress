const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const themeName = 'my-theme';
const themePath = __dirname + '/wordpress/theme-build';

// This Config Exports the Files with Source Maps for Wordpress Development
module.exports = {

  entry: './src/styling/style.scss', // Main Entry: Is included in functions.php
  output: {
    filename: 'main.js', // Is included in functions.php
    path: themePath + '/' + themeName + '/assets',
  },

  mode: 'development',
  devtool: 'inline-source-map', // Use Source-Maps for Debugging

  plugins: [
    // Plugin to Reload Browser According to Proxy 127.0.0.1:8000 (Wordpress PHP)
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: '127.0.0.1:8000',
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
    new CopyPlugin({
      patterns: [
        {
          from: './src',
          to: '../',
          globOptions: {
            ignore: [
              '**/styling/**/*'
            ]
          }
        }
      ]
    }),
  ],
  module: {
    rules: [
      {
        // Listen for Sass and CSS
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          // Source Map shows Path in Chrome for Testing
          {loader: 'css-loader', options: {sourceMap: true, importLoaders: 1}},
          {loader: 'sass-loader', options: {sourceMap: true}},
        ],
      },
    ],
  },
};
