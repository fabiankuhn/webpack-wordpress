/*
 * Settings
 * TODO Set Attributes
 */ 

const themeName = 'test-theme'
const themePath = '/Users/kufa/Desktop/wordpress/wp-content/themes'


/*
 * Main Config
 */ 

module.exports = {
  entry: './webpack-entry.js', // Main Entry: Is included in functions.php
  output: {
    filename: 'main.js', // Is included in functions.php

    // Set Path of Wordpress Themes ('.../wp-content/themes') as absolute Path
    path: themePath + '/' + themeName + '/assets',
	
  },  
};