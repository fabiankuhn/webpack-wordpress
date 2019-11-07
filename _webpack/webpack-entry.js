/**
 * Entry File for Webpack
 */

// Import Style.scss, so Webpack listens to Changes
import './../assets/scss/style.scss';

// Is Development Started?
if (process.env.NODE_ENV !== 'production') {
  console.log('Executed in Dev-Mode!');
}