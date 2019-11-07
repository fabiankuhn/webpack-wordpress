/*
 * Settings
 * TODO Set Attributes
 */ 

const themeName = 'test-theme'
const themePath = '/Users/fabiankuhn/git_websites/Test/webpack/wordpress/wp-content/themes'


/*
 * Main Config
 */ 

module.exports = {
  entry: './webpack-entry.js',
  output: {
    filename: 'main.js',

    // Absolute Path
    path: themePath + '/' + themeName + '/assets',
	
	// Relative Path with 'const path = require('path');'
	// path: path.resolve(__dirname, '../../babibubi'),
  },  
};