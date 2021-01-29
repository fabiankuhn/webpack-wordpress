# Wordpress

This Repo is suited as Starter-Template for Blanc Wordpress Themes. Webpack is used to compile Sass and CSS is then given to Project folder. With Browsersync, a refresh of a started Wordpress Server is triggered.

> By: Fabian Kuhn

> Date: 29.01.2021

## Getting Started
- `$ docker compose up -d` Run docker compose
- `$ npm run wordpress` Run Wordpress Webpack
- Follow instructions to setup Database
- Select test_theme
    - Log into wordpress: http://localhost:3008/wp-admin/
    - Select Appearance
    - Select "Wordpress Webpack-Blank Theme"
- `$ sh dump-tables.sh -p somewordpress` Backup Database with script
- Backup Data in Git

## Webpack Config for Wordpress

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
