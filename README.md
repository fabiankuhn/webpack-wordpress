# Webpack Config for Wordpress

This Repo is suited as Starter-Template for Blanc Wordpress Themes. Webpack is used to compile Sass and CSS is then given to Project folder. With Browsersync, a refresh of a started Wordpress Server is triggered.

## Quick Start
- Start Wordpress Server with $ php -S 127.0.0.1:8080
- git clone git@github.com:fabiankuhn/webpack-wordpress.git
- cd cd webpack-wordpress
- cd _webpack
- npm install
- Configure Paths in webpack.common.js
- npm run wordpress (Webpack starts)
- check if new Theme was created
- Select theme in Wordpress

### Files
- webpack.common.js: Basic Setup for Webpack: Project Path is set
- webpack.wordpress.js: Webpack Setup for Wordpress Development with Browsersync, Copy Files etc.
- package.json: Configure how webpack is executed
- webpack-entry.js: Entry Fil for Webpack, where Connections to SCSS etc. are defined
- assets: Files that are connected with Webpack: Entry ef sryle.scss

### Inspiration
- Getting Started https://webpack.js.org/guides/getting-started/
- Managing Assets for CSS: https://webpack.js.org/guides/asset-management/
- Generate Seperate CSS: https://webpack.js.org/plugins/mini-css-extract-plugin/
- Extract CSS: https://webpack.js.org/plugins/mini-css-extract-plugin/