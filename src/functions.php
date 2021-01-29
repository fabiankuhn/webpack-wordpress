<?php

/**
 * Enqueue Styles
 */
function startwordpress_styles() {
	wp_enqueue_style( 'blog', get_template_directory_uri() . '/assets/main.css' );

	wp_enqueue_script( 'script', get_template_directory_uri() . '/assets/main.js', array ( 'main' ), 1.1, true);
}

add_action( 'init', 'startwordpress_styles' );


/**
 * Enqueue scripts
 */
function startwordpress_scripts() {
	wp_enqueue_script( 'mainscript', get_template_directory_uri() . '/assets/main.js', '1.0', true);

}

add_action('wp_enqueue_scripts', 'startwordpress_scripts');


