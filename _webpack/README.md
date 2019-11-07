# Webpack  for Wordpress
- Enter webpack folder
- set Path of Dist om wordpress.common.js
- npm run wordpress

### FIles
- webpack.common.js: Generic Webpack config
- webpack.dev.js: Webpack Setup for Development with Hot Reload and HTML Generation
- webpack.wordpress.js: Webpack Setup for Development in Wordpress

### Inspiration
- Getting Started https://webpack.js.org/guides/getting-started/
- Managing Assets for CSS: https://webpack.js.org/guides/asset-management/
- Generate Seperate CSS: https://webpack.js.org/plugins/mini-css-extract-plugin/
- Extract CSS: https://webpack.js.org/plugins/mini-css-extract-plugin/

#### Wordpress Development
- Files get Generated in dist folder (Specified in Webpack common)
- Source Tree is Visible (eg. gemeral.scss in Chrome)
- --watch attribute is set for faster development