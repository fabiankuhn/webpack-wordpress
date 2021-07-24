# Wordpress

This Repo is suited as Starter-Template for Blanc Wordpress Themes. Webpack is used to compile Sass and CSS is then given to Project folder. With Browsersync, a refresh of a started Wordpress Server is triggered.

> By: Fabian Kuhn

> Date: 29.01.2021

## Getting Started
- `$ docker compose up -d` Run docker compose
- `$ npm run wordpress` Run Wordpress Webpack
- Follow instructions to setup Database
- Select my-theme
    - Log into Wordpress: http://localhost:3008/wp-admin/
    - Select Appearance
    - Select "My Wordpress Theme"
- `$ sh dump-tables.sh -p my-sql-root-password` Backup Database with script
- Backup Data in Git

### Inspiration
- Getting Started https://webpack.js.org/guides/getting-started/
- Managing Assets for CSS: https://webpack.js.org/guides/asset-management/
- Generate Seperate CSS: https://webpack.js.org/plugins/mini-css-extract-plugin/
- Extract CSS: https://webpack.js.org/plugins/mini-css-extract-plugin/
