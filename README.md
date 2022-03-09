# Wordpress Starter

This Repo is suited as starter-template for blanc wordpress themes. Webpack is used to compile your sass files and browsersync enables you to work with hot reload. Use docker compose to spin up your project easily, so you can multitask and keep your changes checked in. 

> By: Fabian Kuhn

### Getting Started
- `$ docker compose up -d` Run docker compose
- Go to [http://localhost:8000/](http://localhost:8000/)
- Follow instructions to setup Database
- Select my-theme
    - Log into Wordpress: http://localhost:8000/wp-admin/
    - Select Appearance
    - Select "My Wordpress Theme"
- `$ sh dump-tables.sh -p my-sql-root-password` Backup Setup
- `$ git add -A && git commit` Commit changes

### Development Cycle
- `$ docker compose up -d` Launch Wordpress and SQL
- `$ npm run dev` Run Dev Proxy
- :rocket: Go to [http://localhost:3000/](http://localhost:3000/) for awesome development experience
- `$ sh dump-tables.sh -p my-sql-root-password` Backup Database with script
- `$ git add -A && git commit` Commit changes

#### Inspiration
- Getting Started https://webpack.js.org/guides/getting-started/
- Managing Assets for CSS: https://webpack.js.org/guides/asset-management/
- Generate Seperate CSS: https://webpack.js.org/plugins/mini-css-extract-plugin/
- Extract CSS: https://webpack.js.org/plugins/mini-css-extract-plugin/
